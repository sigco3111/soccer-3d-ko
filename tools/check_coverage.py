import re, os, json, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OVER = os.path.join(ROOT, 'ko', 'ko-overlay.js')
src = open(OVER, encoding='utf-8').read()

# 사전 추출
i = src.index('var D = {')
j = src.index('\n  };', i)
block = src[i:j]
D = dict(re.findall(r'"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)"', block))

RULES = [
    (r'^LEVEL\s+(\d+)$', 1),
    (r'^(\d+)\s*pts$', 1),
    (r'^(\d+)\s*st$', 1),
    (r'^Hall of Fame: #(\d+)$', 1),
    (r'^No\.\s*(\d+)$', 1),
    (r'^(\d+)\s*·\s*(\d+)\s*halfL$', 1),
    (r'^(\d+)\s*played\s*·\s*(\d+)\s*won\s*·\s*(.+)$', 1),
    (r'^(\d+)\s*subs?\s*left$', 1),
]
RCOMP = [re.compile(p) for p, _ in RULES]

# UI가 아닌 코드 문자열(의도적으로 번역하지 않음)
ALLOW = set(['pocketSoccer3d.v2', 'yes', 'on', 'err', 'off', '2d', 'YXZ', 't1', 't0', 'ooh', 'userO',
             'translate(', 'joyZone', 'joyBase', 'joyKnob', 'btnA', 'btnB', 'btnC', 'pow', 'pen', 's0', 's1',
             'halfL', 'fk', 'gk', 'msg', 'gap', 'aim', 'br', 'me', 'td', 'tr', 'opt', 'sel', 'lv', 'em', 'resumeSaved',
             'boardBody', 'boardOk', 'userList', 'userForm', 'uName', 'uStats', 'stag', 'staBar', 'staL', 'cardT',
             'introH', 'introT', 'lblA', 'lblB', 'bTact', 'bTact2', 'tactOk', 'bSub', 'optTog', 'optLen', 'optForm',
             'optMent', 'optPress', 'helpOk', 'bHelp', 'bHelp2', 'bScores', 'overScores', 'bUser', 'bPause', 'bMute',
             'bInstall', 'saveQuit', 'serviceWorker', 'sw.js', 'manifest.webmanifest', 'black-translucent',
             'width=device-width initial-scale=1 maximum-scale=1 user-scalable=no', 'DOC', 'MIL', 'RED', 'IRO', 'NOR',
             'SAB', 'MER', 'TIT', 'LEVEL', 'II', 'pen', 'pens)', 'pens', 'translate', 'crs', 'el', 'ref', 'ST',
             'SOCCER', 'POCKET', 'SOUND', 'PASS', 'RUN', 'SHOOT', 'name', 'profile', 'subs', 'saved', 'cm', 'sec',
             'btn', 'dm', 'sn', 'hp', 'pos', 'SND_DATA', 'BG_DATA', '2d', 'lat', 'lvl', 'user', 'mgc'])
ALLOWN = set(x.lower() for x in ALLOW)

def norm(s):
    return re.sub(r'\s+', ' ', s).strip()

frags, elems = [], []
for f in sorted(glob.glob(os.path.join(ROOT, '_analysis', 'strings.part*.txt'))):
    frags += [l.rstrip('\n') for l in open(f, encoding='utf-8') if l.strip()]
for f in sorted(glob.glob(os.path.join(ROOT, '_analysis', 'elements.part*.txt'))):
    elems += [l.rstrip('\n') for l in open(f, encoding='utf-8') if l.strip()]

def covered(s):
    t = norm(s)
    if t in D:
        return 'dict'
    for r in RCOMP:
        if r.match(t):
            return 'rule'
    if t.lower() in ALLOWN:
        return 'allow'
    if not re.search(r'[A-Za-z]{2}', t):
        return 'noletter'
    return ''

def report(name, items):
    miss = []
    stats = {'dict': 0, 'rule': 0, 'allow': 0, 'noletter': 0, 'miss': 0}
    for s in items:
        c = covered(s)
        if c == '':
            stats['miss'] += 1
            miss.append(s)
        else:
            stats[c] += 1
    lines = ['== %s ==' % name, 'total=%d dict=%d rule=%d allow=%d noletter=%d miss=%d' %
             (len(items), stats['dict'], stats['rule'], stats['allow'], stats['noletter'], stats['miss']), '']
    if miss:
        lines.append('-- 미번역 후보 --')
        lines += miss
    lines.append('')
    return '\n'.join(lines), stats

r1, s1 = report('UI 조각(문자열 사전 추출)', frags)
r2, s2 = report('요소 단위 문구', elems)
out = r1 + r2 + 'dict entries=%d\n' % len(D)
open(os.path.join(ROOT, '_analysis', 'coverage.txt'), 'w', encoding='utf-8').write(out)
print(out[:4000])
