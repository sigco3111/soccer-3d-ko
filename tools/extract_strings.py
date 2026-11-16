import re, json, os, html

SRC = 'src-index.html'
src = open(SRC, encoding='utf-8').read()
os.makedirs('_analysis', exist_ok=True)

# script regions
regions = []
for m in re.finditer(r'<script[^>]*>(.*?)</script>', src, re.S):
    regions.append((m.start(1), m.end(1)))

def in_js(pos):
    for a, b in regions:
        if a <= pos < b:
            return True
    return False

found = []  # (offset, kind, raw)

# 1. HTML text nodes outside scripts/styles
for m in re.finditer(r'>([^<>]+)<', src):
    if in_js(m.start()):
        continue
    t = html.unescape(m.group(1)).strip()
    if t:
        found.append((m.start(1), 'html', t))

# 2. attributes
for m in re.finditer(r'(placeholder|title|aria-label|alt|content|value|data-label)="([^"]*)"', src):
    t = html.unescape(m.group(2)).strip()
    if t:
        found.append((m.start(2), 'attr:' + m.group(1), t))

# 3. JS string literals
lit = re.compile(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"|\x60((?:[^\x60\\]|\\.)*)\x60")
for a, b in regions:
    body = src[a:b]
    for m in lit.finditer(body):
        raw = m.group(1) or m.group(2) or m.group(3) or ''
        t = raw.replace('\\n', ' ').replace("\\'", "'").replace('\\"', '"')
        t = t.strip()
        if t:
            found.append((a + m.start(), 'js', t))

STOP = set(['div','span','click','none','block','flex','absolute','fixed','relative','hidden','visible','button',
            'keydown','keyup','click','touch','pointer','true','false','null','undefined','string','number',
            'auto','ease','linear','inherit','transform','color','background','white','black','window','document','body'])

def keep(t):
    if len(t) < 2 or len(t) > 520:
        return False
    if not re.search(r'[A-Za-z]', t):
        return False
    if t.lower() in STOP:
        return False
    if re.match(r'^[a-z0-9_\-]+$', t) and len(t) > 3:
        return False      # lowercase code token
    if re.match(r'^[#.\[:].*', t):
        return False      # css / selector
    if re.search(r'(px\b|rgba?\(|url\(|===|&&|\|\||=>|querySelector|addEventListener|https?://|data:|function\b)', t):
        return False
    if re.match(r'^[A-Za-z0-9_\-]+$', t) and len(t) > 20:
        return False
    return True

seen = {}
for off, kind, t in found:
    if not keep(t):
        continue
    key = t
    if key in seen:
        continue
    ctx = src[max(0, off - 60):off + 60].replace('\n', ' ')
    seen[key] = (kind, ctx)

lines = []
for t, (kind, ctx) in seen.items():
    lines.append(t)

print('total unique:', len(lines))

def chunks(prefix, items, limit=24000):
    parts, cur, n = [], [], 0
    for it in items:
        it = it + '\n'
        if n + len(it) > limit and cur:
            parts.append(''.join(cur))
            cur, n = [], 0
        cur.append(it)
        n += len(it)
    if cur:
        parts.append(''.join(cur))
    for i, p in enumerate(parts, 1):
        with open('_analysis/strings.part%d.txt' % i, 'w', encoding='utf-8') as f:
            f.write(p)
    return len(parts)

n = chunks('s', lines)
with open('_analysis/strings_meta.json', 'w', encoding='utf-8') as f:
    json.dump({'count': len(lines), 'parts': n}, f, ensure_ascii=False)
print('parts:', n)
