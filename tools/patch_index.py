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

overlay_path = os.path.join(ROOT, 'ko', 'ko-overlay.js')
if not os.path.exists(overlay_path):
    sys.exit('missing ko/ko-overlay.js')
overlay = open(overlay_path, encoding='utf-8').read()
if '</script' in overlay:
    sys.exit('overlay must not contain </script')

path = os.path.join(SITE, 'index.html')
html = open(path, encoding='utf-8').read()
block = '<script>\n' + overlay + '\n</script>'
if 'ko-overlay-inline' in html:
    print('already injected')
else:
    marker = '<!-- ko-overlay-inline -->'
    block = marker + '\n' + block
    i = html.find('<head>')
    if i >= 0:
        j = i + len('<head>')
        html = html[:j] + '\n' + block + html[j:]
        print('inlined right after head')
    else:
        i = html.rfind('</body>')
        if i < 0:
            sys.exit('no </body> in index.html')
        html = html[:i] + block + '\n' + html[i:]
        print('inlined before body end')
    open(path, 'w', encoding='utf-8').write(html)

print('build ok')
