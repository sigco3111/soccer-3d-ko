import os, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, '_site')
SKIP = {'.git', '.github', '_site', '_analysis', 'tools'}

if os.path.isdir(SITE):
    shutil.rmtree(SITE)
os.makedirs(SITE)

for name in sorted(os.listdir(ROOT)):
    if name in SKIP or name.startswith('.'):
        continue
    src = os.path.join(ROOT, name)
    dst = os.path.join(SITE, name)
    if os.path.isdir(src):
        shutil.copytree(src, dst)
    else:
        shutil.copy2(src, dst)

path = os.path.join(SITE, 'index.html')
html = open(path, encoding='utf-8').read()
tag = '<script src="ko/ko-overlay.js"></script>'
if tag in html:
    print('already injected')
else:
    # 게임 스크립트보다 먼저 실행되도록 head 앞부분에 넣는다
    i = html.find('<head>')
    if i >= 0:
        j = i + len('<head>')
        html = html[:j] + '\n' + tag + html[j:]
        print('injected in head')
    else:
        i = html.rfind('</body>')
        if i < 0:
            sys.exit('no </body> in index.html')
        html = html[:i] + tag + '\n' + html[i:]
        print('injected before body end')
    open(path, 'w', encoding='utf-8').write(html)

if not os.path.exists(os.path.join(SITE, 'ko', 'ko-overlay.js')):
    sys.exit('missing ko/ko-overlay.js')
print('build ok')
