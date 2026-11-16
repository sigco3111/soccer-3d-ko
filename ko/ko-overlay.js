/* Pocket Soccer 3D 한국어 오버레이 (비공식 팬 한글화)
 * 원본 파일은 수정하지 않고, 표시 시점에만 문구를 바꿉니다.
 * 기본 언어: 한국어. 좌하단 버튼으로 영어 원문과 전환할 수 있습니다.
 */
(function () {
  'use strict';
  var KOFONT = '"Apple SD Gothic Neo","Malgun Gothic","Noto Sans KR","맑은 고딕","Segoe UI",sans-serif';

  var D = {
    "Pocket Soccer 3D": "포켓 사커 3D",
    "POCKET SOCCER 3D": "포켓 사커 3D",
    "SOCCER 3D": "사커 3D",
    "A CLAUDE FABLE 5.2 TEST · SOUND BY ELEVENLABS": "클로드 페이블 5.2 테스트 · 사운드 ELEVENLABS",
    "A CLAUDE FABLE 5.2 TEST": "클로드 페이블 5.2 테스트",
    "A Claude Fable 5.2 test build · sound and artwork by ElevenLabs": "Claude Fable 5.2 테스트 빌드 · 사운드와 아트워크 ElevenLabs",
    "TAP TO START": "탭하여 시작",
    "TAP TO SKIP": "탭하여 건너뛰기",
    "YOU": "우리",
    "CPU": "상대",
    "1H": "전반",
    "2H": "후반",
    "II": "II",
    "PASS": "패스",
    "RUN": "달리기",
    "SHOOT": "슛",
    "REPLAY": "다시보기",
    "Scoreboard": "점수판",
    "HALL OF FAME": "명예의 전당",
    "CONTINUE": "계속",
    "Scores are kept on this device.": "점수는 이 기기에 저장됩니다.",
    "WHO IS PLAYING?": "누가 플레이하나요?",
    "New player": "새 플레이어",
    "OK": "확인",
    "Player": "플레이어",
    "KICK OFF": "경기 시작",
    "Install app": "앱 설치",
    "Tactics": "전술",
    "High scores": "최고 점수",
    "How to play": "조작 방법",
    "Level": "레벨",
    "Match length": "경기 시간",
    "2 min": "2분",
    "4 min": "4분",
    "6 min": "6분",
    "Options": "설정",
    "Fouls": "반칙",
    "Offside": "오프사이드",
    "Shadows": "그림자",
    "HOW TO PLAY": "조작 방법",
    "Controls": "조작",
    "Rules": "경기 규칙",
    "Tactics": "전술",
    "Levels": "레벨",
    "Score": "점수",
    "Players and saving": "플레이어와 저장",
    "Install": "설치",
    "Views": "화면 시점",
    "GOT IT": "알겠습니다",
    "TACTICS": "전술",
    "Formation · defence – midfield – attack": "포메이션 · 수비 – 미드필드 – 공격",
    "Mentality": "성향",
    "Defensive": "수비적",
    "Balanced": "균형",
    "Attacking": "공격적",
    "Pressing": "압박",
    "Low": "낮음",
    "Normal": "보통",
    "High": "높음",
    "Mentality moves your whole team up or back. High pressing sends two players to the ball; low pressing holds shape.": "성향은 팀 전체를 앞으로 밀거나 뒤로 내립니다. 압박을 '높음'으로 두면 두 선수가 공으로 달려가고, '낮음'은 자리를 지킵니다.",
    "DONE": "완료",
    "PAUSED": "일시정지",
    "RESUME": "계속하기",
    "Substitute": "교체",
    "Save & quit": "저장 후 종료",
    "Abandon match": "경기 포기",
    "Full time": "경기 종료",
    "FULL TIME": "경기 종료",
    "YOU WIN": "승리",
    "YOU LOSE": "패배",
    "NEXT LEVEL": "다음 레벨",
    "Play again": "다시 하기",
    "Menu": "메뉴",
    "SOUND ON": "소리 켜짐",
    "SOUND OFF": "소리 꺼짐",
    "Could not load": "불러오지 못했습니다",
    "The 3D library did not load. Check the connection and reload.": "3D 라이브러리를 불러오지 못했습니다. 연결을 확인한 뒤 새로고침하세요.",
    "Player change": "플레이어 변경",
    "Your name": "이름",
    "Sound on or off": "소리 켜기/끄기",
    "Pause": "일시정지",
    "POCKET": "포켓",
    "SOCCER": "사커",
    "LEFT THUMB": "왼손 엄지",
    "Left thumb": "왼손 엄지",
    "Drag anywhere on the left side to run. Keyboard: arrows or WASD.": "화면 왼쪽 아무 곳이나 끌어 달립니다. 키보드: 방향키 또는 WASD.",
    "SHOOT Tap for a low drive; hold to load power and lift. Aim with the stick; shots near the goal are pulled inside the posts. Keyboard: Space.": "SHOOT 한 번 누르면 낮게 차고, 길게 누르면 힘을 모아 띄웁니다. 스틱으로 조준하며, 골대 근처 슛은 골문 안쪽으로 보정됩니다. 키보드: Space.",
    "PASS Plays the ball to the team-mate inside the white ring, which follows the direction you aim. Keyboard: Shift.": "PASS 조준 방향을 따라 움직이는 흰 링 안의 동료에게 공을 넘깁니다. 키보드: Shift.",
    "TACKLE Without the ball, the red button is a sliding tackle. A miss leaves you on the ground for a moment.": "TACKLE 공이 없을 때 빨간 버튼은 태클입니다. 빗나가면 잠시 넘어집니다.",
    "SWITCH Without the ball, the blue button moves control to the next-nearest player. The yellow ring marks who you control.": "SWITCH 공이 없을 때 파란 버튼은 조작 대상을 가장 가까운 다음 선수로 옮깁니다. 노란 링이 조작 중인 선수입니다.",
    "RUN Hold the green button to sprint. Sprinting drains the stamina bar (top left); tired players are slower. Keyboard: C.": "RUN 초록 버튼을 누르고 있으면 전력 질주합니다. 질주하면 왼쪽 위 스태미나가 줄고, 지친 선수는 느려집니다. 키보드: C.",
    "SOUND The Sound on / off button at the top right is available on every screen, including the first. Your choice is remembered.": "SOUND 오른쪽 위 소리 켜기/끄기 버튼은 첫 화면을 포함한 모든 화면에 있습니다. 선택은 기억됩니다.",
    "Seven a side, two halves; the teams change ends at half time. The ball going out gives a throw-in, corner or goal kick; when it is yours, you get a moment unchallenged to play it. Every goal is followed by a slow-motion replay; tap to skip.": "7대7, 전후반 경기이며 하프타임에 진영을 바꿉니다. 공이 밖으로 나가면 스로인·코너킥·골킥이 되고, 우리 쪽 차례에는 방해 없이 공을 다룰 시간이 주어집니다. 골이 들어가면 슬로모션 다시보기가 나오고, 탭하면 넘어갑니다.",
    "Fouls: a sliding tackle from behind, or a mistimed one, gives a free kick with a defensive wall, or a penalty inside the box. The referee shows a yellow card for the worse ones; two yellows, or a foul from behind in the box, is a red card and that side plays a man short.": "반칙: 뒤에서 하는 태클이나 타이밍이 늦은 태클은 수비벽이 있는 프리킥 또는 페널티킥이 됩니다. 정도가 심한 반칙에는 주심이 경고를 주고, 경고 두 번이나 박스 안에서의 뒤쪽 반칙은 퇴장이라 그 팀은 한 명이 적게 뛰게 됩니다.",
    "Offside: a pass to a team-mate beyond the second-last defender is whistled when he receives it. Fouls and offside can be switched off under Options.": "오프사이드: 뒤에서 두 번째 수비수를 넘어선 동료에게 전달되는 패스는 그가 공을 받을 때 휘슬이 울립니다. 반칙과 오프사이드는 설정에서 끌 수 있습니다.",
    "Added time is played at the end of each half. A match level at full time goes to a penalty shoot-out: aim with the stick, hold SHOOT for power; too much power or a wide aim misses.": "각 전후반 끝에는 추가시간이 있습니다. 종료 시 동점이면 승부차기로 갑니다. 스틱으로 조준하고 SHOOT을 길게 눌러 힘을 조절하며, 힘이 너무 세거나 방향이 벗어나면 실축합니다.",
    "Stamina and injuries: stamina recovers when a player slows down and partly at half time. A fouled player, or one sprinting on empty, can be injured; he is replaced at the stoppage while substitutes remain (three a side), otherwise he plays on slower. You can also substitute your most tired player from the pause screen.": "스태미나와 부상: 선수가 속도를 줄이면 스태미나가 회복되고 하프타임에 일부 더 회복됩니다. 반칙을 당했거나 스태미나가 바닥난 채 질주한 선수는 부상할 수 있습니다. 교체 선수가 남아 있으면(팀당 3명) 경기 정지 시 교체되고, 아니면 느린 채로 계속 뛰고, 일시정지 화면에서 가장 지친 선수를 교체할 수도 있습니다.",
    "Choose formation, mentality and pressing from the menu or the pause screen. Opponents use different formations and push forward when behind. Match statistics are shown at full time.": "메뉴나 일시정지 화면에서 포메이션·성향·압박을 고릅니다. 상대는 다른 포메이션을 쓰고, 뒤지면 앞으로 나옵니다. 경기 통계는 종료 시 표시됩니다.",
    "Eight opponents of rising quality. Win a level to unlock the next. Any unlocked level can be replayed for a better score.": "점점 강해지는 상대 8팀. 레벨에서 이기면 다음 레벨이 열리고, 열린 레벨은 더 좋은 점수를 위해 다시 플레이할 수 있습니다.",
    "Each match earns points: 100 per goal, 500 for a win plus 150 per goal of margin, 150 for a draw plus 250 for winning the shoot-out; all multiplied by the level. The best results go on the Hall of Fame.": "경기마다 점수를 받습니다. 골당 100점, 승리 시 500점에 골 차이당 150점, 무승부 150점에 승부차기 승리 시 250점이 더해지며, 모두 레벨을 곱합니다. 최고 기록은 명예의 전당에 올라갑니다.",
    "Each player name has its own progress. Progress saves automatically. Pause → Save & quit stores the match in progress, including the score, clock, statistics, stamina, injuries, substitutions, cards and send-offs; resume it from the menu. Saves live in this browser on this device.": "플레이어 이름마다 진행 상황이 따로 저장되며 자동 저장됩니다. 일시정지 → 저장 후 종료를 하면 진행 중인 경기가 점수·시계·통계·스태미나·부상·교체·카드·퇴장까지 저장되고, 메뉴에서 이어할 수 있습니다. 저장은 이 기기의 브라우저에 보관됩니다.",
    "Open the game at its web address and it can be installed like an app and played offline. Android / Chrome: use the Install app button on the menu, or the browser menu → Install app. iPhone / iPad: in Safari tap Share → Add to Home Screen.": "웹 주소에서 게임을 열면 앱처럼 설치해 오프라인으로도 플레이할 수 있습니다. 안드로이드/크롬: 메뉴의 '앱 설치' 버튼 또는 브라우저 메뉴 → 앱 설치. 아이폰/아이패드: Safari에서 공유 → 홈 화면에 추가를 탭합니다.",
    "Hold the device sideways for a broadcast view; upright for a view from behind your team.": "기기를 가로로 들면 중계 시점, 세로로 들면 우리 팀 뒤에서 보는 시점이 됩니다.",
    "Penalties": "승부차기",
    "New personal best for this level": "이 레벨 개인 최고 기록 갱신",
    "unlocked:": "해제:",
    "New high score — top of the Hall of Fame": "새 최고 점수 — 명예의 전당 1위",
    "Hall of Fame: #": "명예의 전당: #",
    "CHAMPIONS!": "우승!",
    "WIN ON PENALTIES": "승부차기 승리",
    "LOST ON PENALTIES": "승부차기 패배",
    "pts": "점",
    "Possession": "점유율",
    "Shots": "슈팅",
    "On target": "유효 슈팅",
    "Corners": "코너킥",
    "Offsides": "오프사이드",
    "Yellow cards": "경고",
    "Red cards": "퇴장",
    "1ST HALF": "전반",
    "2ND HALF": "후반",
    "HALF TIME": "하프타임",
    "MIN ADDED TIME": "분 추가시간",
    "ADDED": "추가",
    "ENDS CHANGED": "진영 교대",
    "OFFSIDE · FREE KICK": "오프사이드 · 프리킥",
    "FOUL · PENALTY": "반칙 · 페널티킥",
    "FOUL · FREE KICK": "반칙 · 프리킥",
    "SECOND YELLOW · RED CARD": "경고 누적 · 퇴장",
    "RED CARD": "퇴장",
    "YELLOW CARD": "경고",
    "THROW-IN": "스로인",
    "CORNER": "코너킥",
    "GOAL KICK": "골킥",
    "SUBSTITUTION ·": "교체 ·",
    "INJURY ·": "부상 ·",
    "· INJURY: No.": " · 부상: No.",
    "off, No.": "아웃, No.",
    "goes off at the next stoppage": "다음 정지 때 교체됩니다",
    "plays on hurt": "부상 투혼으로 계속 뜁니다",
    "· HURT": " · 부상",
    "· subs": " · 교체",
    "PENALTIES ·": "승부차기 ·",
    "PENALTIES": "승부차기",
    "aim": "조준",
    "SCORES!": "성공!",
    "SAVED!": "선방!",
    "MISSED!": "실축!",
    "No scores yet. Win a match to put the first name on the board.": "아직 점수가 없습니다. 경기에서 이기면 첫 이름이 올라갑니다.",
    "played ·": "경기 ·",
    "won ·": "승 ·",
    "No matches played yet": "아직 치른 경기가 없습니다",
    "Locked": "잠김",
    "Best": "최고",
    "Not yet won": "아직 우승 없음",
    "Resume saved match · L": "저장된 경기 이어하기 · L",
    "Substitute most tired player (": "가장 지친 선수 교체 (",
    "left)": "명 남음)",
    "No substitutes left": "교체 가능한 선수 없음",
    "Result": "결과",
    "Points": "점수",
    "GOAL!": "골!",
    "FABLE 5.2": "페이블 5.2",
    "ARENA ONE": "아레나 원",
    "PLAY ON": "계속 경기",
    "ELEVENLABS SOUND": "일레븐랩스 사운드",
    "FAIR PLAY": "페어 플레이",
    "Dockside Juniors": "독사이드 주니어스",
    "Millbrook Town": "밀브룩 타운",
    "Redcliff Rovers": "레드클리프 로버스",
    "Ironvale United": "아이언베일 유나이티드",
    "Northgate City": "노스게이트 시티",
    "Sable Athletic": "세이블 애슬레틱",
    "Meridian FC": "메리디언 FC",
    "Titans XI": "타이탄스 XI",
    "LEVEL": "레벨",
    "League table": "리그 순위",
    "Soccer 3D": "사커 3D",
    "TACKLE": "태클",
    "SWITCH": "전환",
    "SOUND": "소리",
    "INPUT": "입력",
    "change": "변경",
    "Fouls: On": "반칙: 켜짐",
    "Fouls: Off": "반칙: 꺼짐",
    "Offside: On": "오프사이드: 켜짐",
    "Offside: Off": "오프사이드: 꺼짐",
    "Shadows: On": "그림자: 켜짐",
    "Shadows: Off": "그림자: 꺼짐",
    "DOCKSIDE JUNIORS": "독사이드 주니어스",
    "MILLBROOK TOWN": "밀브룩 타운",
    "REDCLIFF ROVERS": "레드클리프 로버스",
    "IRONVALE UNITED": "아이언베일 유나이티드",
    "NORTHGATE CITY": "노스게이트 시티",
    "SABLE ATHLETIC": "세이블 애슬레틱",
    "MERIDIAN FC": "메리디언 FC",
    "TITANS XI": "타이탄스 XI",
    "HT": "하프타임",
    "Left thumb Drag anywhere on the left side to run. Keyboard: arrows or WASD.": "왼손 엄지 화면 왼쪽 아무 곳이나 끌어 달립니다. 키보드: 방향키 또는 WASD.",
    "LEVEL 1": "레벨 1"
  };

  // 대소문자 무시 사전 (게임이 같은 문구를 대문자로도 씀)
  var IDX = {};
  for (var kk in D) { if (Object.prototype.hasOwnProperty.call(D, kk)) IDX[kk.toLowerCase()] = D[kk]; }

  // 정규식 규칙: 동적으로 조립되는 문구 (긴 것부터 적용)
  var R = [
    [/^LEVEL\s+(\d+)$/, '레벨 $1'],
    [/^(\d+)\s*pts$/, '$1점'],
    [/^(\d+)\s*st$/, '$1위'],
    [/^Hall of Fame: #(\d+)$/, '명예의 전당: $1위'],
    [/^No\.\s*(\d+)$/, 'No.$1'],
    [/^(\d+)\s*·\s*(\d+)\s*halfL$/, '$1 – $2'],
    [/^(\d+)\s*played\s*·\s*(\d+)\s*won\s*·\s*(.+)$/, '$1경기 · $2승 · $3'],
    [/^(\d+)\s*subs?\s*left$/, '교체 $1명 남음']
  ];

  var Lang = 'ko';
  var originals = [];   // [element, innerHTML]
  var seen = typeof WeakSet === 'function' ? new WeakSet() : null;
  var pending = false;

  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim(); }

  function tr(s) {
    if (!s) return null;
    var t = norm(s);
    if (!t) return null;
    if (Object.prototype.hasOwnProperty.call(D, t)) return D[t];
    if (Object.prototype.hasOwnProperty.call(IDX, t.toLowerCase())) return IDX[t.toLowerCase()];
    var m;
    if ((m = /^v\s+(.+)$/.exec(t))) { var r1 = tr(m[1]); if (r1) return 'vs ' + r1; }
    if ((m = /^(.+?):\s*(On|Off)$/.exec(t))) {
      var lbl = tr(m[1]);
      if (lbl) return lbl + ': ' + (m[2] === 'On' ? '켜짐' : '꺼짐');
    }
    for (var i = 0; i < R.length; i++) {
      if (R[i][0].test(t)) return t.replace(R[i][0], R[i][1]);
    }
    return null;
  }

  function hasLatin(s) { return /[A-Za-z]{2}/.test(s || ''); }

  function save(el) {
    for (var i = 0; i < originals.length; i++) {
      if (originals[i][0] === el) return;
    }
    originals.push([el, el.innerHTML]);
  }

  function skipEl(el) {
    var t = el.tagName;
    return t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT' || t === 'TITLE';
  }

  // 요소 단위 번역: 자식 요소가 없으면 textContent, 긴 문장은 평탄화
  function pass(el) {
    if (!el || el.nodeType !== 1) return;
    if (skipEl(el)) return;
    var kids = el.children.length;
    var txt = el.textContent;
    if (!hasLatin(txt)) {
      // 자식만 처리
      for (var i = 0; i < kids; i++) pass(el.children[i]);
      return;
    }
    var ko = tr(txt);
    if (ko !== null && (kids === 0 || norm(txt).length > 40)) {
      save(el);
      el.textContent = ko;
      return;
    }
    if (kids === 0) {
      return;
    }
    for (var j = 0; j < kids; j++) pass(el.children[j]);
    // 자식 번역 후 남은 텍스트 노드 조각 처리
    fragment(el);
  }

  function fragment(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) {
        if (!hasLatin(n.nodeValue)) continue;
        var ko = tr(n.nodeValue);
        if (ko !== null && ko !== n.nodeValue) {
          n.nodeValue = (n.nodeValue.match(/^\s/) ? ' ' : '') + ko + (n.nodeValue.match(/\s$/) ? ' ' : '');
        }
      }
    }
  }

  var attrOrig = [];
  function translateAttrs(root) {
    var els = root.querySelectorAll('[placeholder],[aria-label],[title],[alt]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], at = ['placeholder', 'aria-label', 'title', 'alt'];
      for (var j = 0; j < at.length; j++) {
        var v = el.getAttribute(at[j]);
        if (!v || !hasLatin(v)) continue;
        var ko = tr(v);
        if (ko === null || ko === v) continue;
        attrOrig.push([el, at[j], v]);
        el.setAttribute(at[j], ko);
      }
    }
  }

  function all(root) {
    pass(root);
    var nodes = root.querySelectorAll('*');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!hasLatin(el.textContent)) continue;
      var kids = el.children.length;
      var ko = tr(el.textContent);
      if (ko !== null && (kids === 0 || norm(el.textContent).length > 40)) {
        save(el);
        el.textContent = ko;
      } else if (kids === 0) {
        // 단일 텍스트 요소
      }
    }
    // 남은 텍스트 노드 조각
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var t;
    while ((t = walker.nextNode())) {
      if (!hasLatin(t.nodeValue)) continue;
      var p = t.parentNode;
      if (!p || skipEl(p)) continue;
      var k = tr(t.nodeValue);
      if (k !== null && k !== t.nodeValue.trim()) {
        var lead = /^\s/.test(t.nodeValue) ? ' ' : '';
        var trail = /\s$/.test(t.nodeValue) ? ' ' : '';
        t.nodeValue = lead + k + trail;
      }
    }
  }

  function apply() {
    if (Lang !== 'ko') return;
    try { all(document.body); translateAttrs(document.body); } catch (e) {}
  }

  function schedule() {
    if (Lang !== 'ko') return;
    if (pending) return;
    pending = true;
    var run = function () { pending = false; apply(); };
    if (window.requestAnimationFrame) requestAnimationFrame(run); else setTimeout(run, 120);
  }

  function restore() {
    for (var i = 0; i < attrOrig.length; i++) {
      try { attrOrig[i][0].setAttribute(attrOrig[i][1], attrOrig[i][2]); } catch (e) {}
    }
    for (var i = 0; i < originals.length; i++) {
      try { originals[i][0].innerHTML = originals[i][1]; } catch (e) {}
    }
  }

  function setLang(l) {
    Lang = l;
    if (l === 'ko') { apply(); } else { restore(); }
    var b = document.getElementById('koToggle');
    if (b) b.textContent = l === 'ko' ? 'EN' : '한국어';
    document.documentElement.lang = l === 'ko' ? 'ko' : 'en';
  }

  // 캔버스 글자 번역 + 한글 글꼴
  function wrapCanvas() {
    var C = window.CanvasRenderingContext2D;
    if (!C || C.prototype.__ko) return;
    C.prototype.__ko = 1;
    var ft = C.prototype.fillText;
    var st = C.prototype.strokeText;
    function fixFont(ctx) {
      var f = ctx.font || '';
      var m = /(\d+(?:\.\d+)?px)\s+.*$/.exec(f);
      ctx.font = m ? f.slice(0, m.index) + m[1] + ' ' + KOFONT : '16px ' + KOFONT;
    }
    C.prototype.fillText = function (text, x, y, w) {
      if (Lang === 'ko' && typeof text === 'string') {
        var k = tr(text);
        if (k) text = k;
        try { fixFont(this); } catch (e) {}
      }
      return w === undefined ? ft.call(this, text, x, y) : ft.call(this, text, x, y, w);
    };
    C.prototype.strokeText = function (text, x, y, w) {
      if (Lang === 'ko' && typeof text === 'string') {
        var k = tr(text);
        if (k) text = k;
        try { fixFont(this); } catch (e) {}
      }
      return w === undefined ? st.call(this, text, x, y) : st.call(this, text, x, y, w);
    };
  }

  function addStyle() {
    var s = document.createElement('style');
    s.textContent = 'body,button,input,select{font-family:' + KOFONT + ' !important}' +
      '.ko-toggle{position:fixed;left:10px;bottom:10px;z-index:99999;padding:5px 10px;font-size:11px;' +
      'letter-spacing:.06em;border-radius:14px;border:1px solid rgba(255,255,255,.4);' +
      'background:rgba(10,20,30,.72);color:#fff;cursor:pointer;opacity:.85}';
    document.head.appendChild(s);
  }

  function addToggle() {
    if (document.getElementById('koToggle')) return;
    var b = document.createElement('button');
    b.id = 'koToggle';
    b.type = 'button';
    b.textContent = 'EN';
    b.title = '한국어 / English';
    b.className = 'ko-toggle';
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      setLang(Lang === 'ko' ? 'en' : 'ko');
    });
    document.body.appendChild(b);
  }

  function boot() {
    wrapCanvas();
    addStyle();
    apply();
    addToggle();
    document.documentElement.lang = 'ko';
    try {
      var kt = tr(document.title);
      if (kt) document.title = kt;
    } catch (e) {}
    setInterval(function () { if (Lang === 'ko') { try { apply(); } catch (e) {} } }, 500);
    var mo = new MutationObserver(function () { schedule(); });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    setTimeout(apply, 300);
    setTimeout(apply, 1200);
    setTimeout(apply, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
