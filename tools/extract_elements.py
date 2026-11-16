import json, os, re
from html.parser import HTMLParser

SRC = 'src-index.html'
html_src = open(SRC, encoding='utf-8').read()
os.makedirs('_analysis', exist_ok=True)

VOID = {'meta','link','br','img','input','hr','source','path','circle','rect','use','area','base','col','embed','param','track','wbr'}

class Node:
    __slots__ = ('tag', 'attrs', 'children')
    def __init__(self, tag, attrs):
        self.tag = tag
        self.attrs = attrs
        self.children = []

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('root', {})
        self.stack = [self.root]
        self.skip = 0
    def handle_starttag(self, tag, attrs):
        n = Node(tag, dict(attrs))
        self.stack[-1].children.append(n)
        if tag in ('script', 'style'):
            self.skip += 1
        if tag not in VOID:
            self.stack.append(n)
    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, dict(attrs)))
    def handle_endtag(self, tag):
        if tag in ('script', 'style') and self.skip:
            self.skip -= 1
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break
    def handle_data(self, data):
        if self.skip:
            return
        if data.strip():
            self.stack[-1].children.append(data)

def text_of(n):
    out = []
    for c in n.children:
        if isinstance(c, str):
            out.append(c)
        else:
            out.append(text_of(c))
    return ''.join(out)

p = P()
p.feed(html_src)

items = {}
def walk(n, depth=0):
    if isinstance(n, str):
        return
    t = re.sub(r'\s+', ' ', text_of(n)).strip()
    if t and n.tag not in ('root', 'script', 'style', 'html', 'body', 'head'):
        if re.search(r'[A-Za-z]', t) and len(t) >= 2:
            items.setdefault(t, n.tag)
    for c in n.children:
        walk(c, depth + 1)

walk(p.root)

# also attribute-level texts
for m in re.finditer(r'(placeholder|title|aria-label|alt|content)="([^"]*)"', html_src):
    t = m.group(2).strip()
    if t and re.search(r'[A-Za-z]', t):
        items.setdefault(t, '@' + m.group(1))

lines = sorted(items.keys(), key=lambda s: (-len(s), s))
print('elements:', len(lines))

LIMIT = 24000
parts, cur, n = [], [], 0
for it in lines:
    piece = it + '\n'
    if n + len(piece) > LIMIT and cur:
        parts.append(''.join(cur)); cur, n = [], 0
    cur.append(piece); n += len(piece)
if cur: parts.append(''.join(cur))
for i, c in enumerate(parts, 1):
    open('_analysis/elements.part%d.txt' % i, 'w', encoding='utf-8').write(c)
json.dump({'count': len(lines), 'parts': len(parts)}, open('_analysis/elements_meta.json', 'w', encoding='utf-8'))
print('parts:', len(parts))
