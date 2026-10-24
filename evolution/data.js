// 픽셀몬스터 진화 도감 — 게임 진화표 사진 2장을 옮긴 것.
// 칸: id(그림 파일 이름) · name · p(부모 id) · cost(진화 수치) · cond(조건 아이콘 있음) · n(조건 개수)
//     box(이름 앞 금색 네모 표시) · req(조건 설명 그림) · note(메모, 직접 채우는 칸)
// 자식은 위에서 아래 순서대로 적는다. 속성 아이콘은 id 와 같은 이름의 그림(a_<id>)을 자동으로 쓴다.
window.EVO = {
  // 아이콘 뜻은 아직 확정 전 — 알게 되면 여기에 이름을 적으면 팝업에 나온다.
  ICONS: {
    c_betamon: "해변",
    box: ""
  },
  NODES: [
    { id: "egg",           name: "알",                p: null },
    { id: "kkammon",       name: "깜몬",              p: "egg" },
    { id: "koromon",       name: "코로몬",            p: "kkammon", cost: 50 },

    // ── 아구몬 계열 (사진 2) ──
    { id: "agumon",        name: "아구몬",            p: "koromon", cost: 260, cond: 1 },
    { id: "greymon",       name: "그레이몬",          p: "agumon", cost: 1300, cond: 1 },
    { id: "metalgreymon",  name: "메탈그레이몬",      p: "greymon", cost: 5500 },
    { id: "wargreymon",    name: "워그레이몬",        p: "metalgreymon", cost: 32000, box: 1 },
    { id: "wargreymonx",   name: "워그레이몬X",       p: "wargreymon", cond: 1 },
    { id: "ancientgreymon",name: "에이션트그레이몬",  p: "metalgreymon", box: 1, cond: 1, req: "ancientreq" },
    { id: "victorygreymon",name: "빅토리그레이몬",    p: "metalgreymon", box: 1, cond: 1 },
    { id: "skullgreymon",  name: "스컬그레이몬",      p: "greymon", cost: 5500, cond: 1, n: 50 },

    { id: "tyranomon",     name: "티라노몬",          p: "agumon", cost: 1300 },
    { id: "mastertyranomon",name:"마스터티라노몬",    p: "tyranomon", cost: 6500 },
    { id: "goddramon",     name: "갓드라몬",          p: "mastertyranomon", box: 1, cond: 1 },
    { id: "goddramonx",    name: "갓드라몬X",         p: "goddramon", cond: 1 },
    { id: "kongal",        name: "콩알티라노몬",      p: "tyranomon", cond: 1, req: "recipe" },

    { id: "agumonx",       name: "아구몬X",           p: "agumon", cond: 1 },

    { id: "darktyranomon", name: "다크티라노몬",      p: "agumon", cost: 1300, cond: 1 },
    { id: "metaltyranomon",name: "메탈티라노몬",      p: "darktyranomon", cost: 6000 },
    { id: "powerdramon",   name: "파워드라몬",        p: "metaltyranomon", box: 1 },
    { id: "chaosdramon",   name: "카오스드라몬",      p: "powerdramon", cond: 1 },
    { id: "rusttyranomon", name: "러스트티라노몬",    p: "metaltyranomon", cond: 1 },

    { id: "agumonbond",    name: "아구몬 용기의유대", p: "agumon", cond: 1 },

    // ── 지오그레이몬 계열 (사진 3 위쪽 · 아구몬의 마지막 갈래) ──
    { id: "geogreymon",    name: "지오그레이몬",      p: "agumon", cond: 1 },
    { id: "risegreymon",   name: "라이즈그레이몬",    p: "geogreymon", cost: 100000 },
    { id: "shinegreymon",  name: "샤인그레이몬",      p: "risegreymon", box: 1, cond: 1 },
    { id: "shineburst",    name: "샤인그레이몬 Burst",p: "shinegreymon", box: 1, cond: 1 },
    { id: "shineruin",     name: "샤인그레이몬 Ruin", p: "shinegreymon", cond: 1 },

    // ── 아구몬(흑) 계열 (사진 3 가운데 · 코로몬에서 갈라짐) ──
    { id: "agumonblack",   name: "아구몬(흑)",        p: "koromon", cond: 1 },
    { id: "greymonblack",  name: "그레이몬(흑)",      p: "agumonblack", cost: 1500 },
    { id: "metalgreymonblack", name: "메탈그레이몬(흑)", p: "greymonblack", cost: 6000 },
    { id: "blackwargreymon",   name: "블랙워그레이몬",  p: "metalgreymonblack", cost: 35000, box: 1 },
    { id: "blackwargreymonx",  name: "블랙워그레이몬X", p: "blackwargreymon", cond: 1 },
    { id: "gaiomon",       name: "가이오몬",          p: "metalgreymonblack", box: 1, cond: 1 },
    { id: "gaiomonblade",  name: "가이오몬 엄도의형", p: "gaiomon", cond: 1 },
    { id: "blitzgreymon",  name: "블리츠그레이몬",    p: "metalgreymonblack", box: 1, cond: 1 },
    { id: "greymonc",      name: "그레이몬(C)",       p: "agumonblack", cost: 1500, cond: 1 },

    // ── 츄몬 계열 (사진 3 아래 · 코로몬에서 갈라짐) ──
    { id: "chumon",        name: "츄몬",              p: "koromon", cond: 1 },
    { id: "scumon",        name: "스카몬",            p: "chumon", cost: 1400 },
    { id: "etemon",        name: "에테몬",            p: "scumon", cost: 7000 },
    { id: "metaletemon",   name: "메탈에테몬",        p: "etemon", cost: 40000, box: 1, cond: 1 },
    { id: "kingetemon",    name: "킹에테몬",          p: "etemon", cond: 1 },
    { id: "bombmoyamon",   name: "폭탄모야몬",        p: "chumon", cond: 1 },
    { id: "woremon",       name: "워매몬",            p: "chumon", cond: 1 },
    { id: "puppetmon",     name: "퍼펫몬",            p: "woremon", cost: 100000 },
    { id: "shinmonzaemon", name: "신몬자에몬",        p: "puppetmon", cond: 1 },

    // ── 베타몬 계열 · 혁몬 계열 (사진 1) ──
    // 사진 1은 왼쪽 가지가 위로 이어진 채 잘려 있다. 코로몬에서 갈라진다고 보고 붙였다(추정).
    { id: "betamon",       name: "베타몬",            p: "koromon", cond: 1, assumed: 1 },
    { id: "seadramon",     name: "시드라몬",          p: "betamon", cost: 1400 },
    { id: "megaseadramon", name: "메가시드라몬",      p: "seadramon", cost: 5200 },
    { id: "metalseadramon",name: "메탈시드라몬",      p: "megaseadramon", cost: 70000, box: 1 },
    { id: "gigaseadramon", name: "기가시드라몬",      p: "metalseadramon", cond: 1 },

    { id: "hackmon",       name: "혁몬",              p: "koromon", cond: 1, assumed: 1 },
    { id: "baohackmon",    name: "바오혁몬",          p: "hackmon", cost: 10000 },
    { id: "saberhackmon",  name: "세이버혁몬",        p: "baohackmon", cost: 100000 },
    { id: "jesmon",        name: "제스몬",            p: "saberhackmon", cond: 1 },
    { id: "jesmonx",       name: "제스몬X",           p: "jesmon", cond: 1 },
    { id: "jesmongx",      name: "제스몬GX",          p: "jesmon", cond: 1 },

    // ════ 아래는 사진 4~10 (다른 알에서 시작하는 계통들) ════
    // cond(조건 그림) · box · req(필요한 것 그림)는 그림 파일이 있으면 자동으로 쓴다 (c_<id> · r_<id>).
    // mat: 1 = 합체 재료로만 나오는 몬스터 / fuse: [...] = 합체 결과(재료 id 들)

    // ── 잎새몬 계열 (사진 4) ──
    { id: "egg4",          name: "알",                p: null },
    { id: "ipsaemon",      name: "잎새몬",            p: "egg4" },
    { id: "daerongmon",    name: "대롱몬",            p: "ipsaemon", cost: 60 },
    { id: "chuchumon",     name: "추추몬",            p: "daerongmon", cost: 280 },
    { id: "stingmon",      name: "스팅몬",            p: "chuchumon", cost: 1450 },
    { id: "jewelbeemon",   name: "쥬엘비몬",          p: "stingmon", cost: 7000 },
    { id: "raidermon",     name: "레이더몬",          p: "chuchumon" },
    { id: "kunemon",       name: "쿠네몬",            p: "daerongmon", cost: "200~279" },
    { id: "kuwamon",       name: "쿠와몬",            p: "kunemon", cost: 1300 },
    { id: "okuwamon",      name: "오쿠와몬",          p: "kuwamon", cost: 5600 },
    { id: "grancuga",      name: "그랜쿠가몬",        p: "okuwamon", box: 1 },
    { id: "grandiscuga",   name: "그랑디스쿠가몬",    p: "grancuga", cost: 300000 },

    // ── 샤우트몬 계열 (사진 5) · 합체가 많다 ──
    // 사진 5는 위가 잘려 있어 샤우트몬이 어디서 갈라지는지 보이지 않는다. 대롱몬에서 이어진 것으로 두었다(추정).
    // 빨간 ✕ 는 "합체 재료", 빨간 ⇊ 는 "합체 결과"로 읽었다. 재료는 결과의 앞 단계 밑에 점선 칸으로 붙인다.
    { id: "shoutmon",      name: "샤우트몬",          p: "daerongmon", cost: "70~399", assumed: 1 },
    { id: "baristamon",    name: "바리스타몬",        p: "shoutmon", mat: 1 },
    { id: "shoutmonx2",    name: "샤우트몬X2",        p: "shoutmon", box: 1, fuse: ["shoutmon", "baristamon"] },
    { id: "dorulumon",     name: "도루루몬",          p: "shoutmonx2", mat: 1 },
    { id: "shoutmonx3",    name: "샤우트몬X3",        p: "shoutmonx2", fuse: ["shoutmonx2", "dorulumon"] },
    { id: "starmons",      name: "스타몬즈",          p: "shoutmonx3", mat: 1 },
    { id: "shoutmonx4",    name: "샤우트몬X4",        p: "shoutmonx3", fuse: ["shoutmonx3", "starmons"] },
    { id: "sparrowmon",    name: "스패로우몬",        p: "shoutmonx4", mat: 1 },
    { id: "shoutmonx5",    name: "샤우트몬X5",        p: "shoutmonx4", fuse: ["shoutmonx4", "sparrowmon"] },
    { id: "omegashoutmonx",name: "오메가샤우트몬X",   p: "shoutmon" },
    { id: "zeegreymon",    name: "지크그레이몬",      p: "omegashoutmonx", mat: 1 },
    { id: "shoutmonx7",    name: "샤우트몬X7",        p: "omegashoutmonx", fuse: ["omegashoutmonx", "zeegreymon", "shoutmonx5"] },
    { id: "shoutmonx7sup", name: "샤우트몬X7 슈페리올", p: "shoutmonx7" },

    // ── 자리몬 계열 (사진 6 · 7) ──
    { id: "egg6",          name: "알",                p: null },
    { id: "jarimon",       name: "자리몬",            p: "egg6" },
    { id: "gigimon",       name: "기기몬",            p: "jarimon", cost: 70 },
    { id: "gilmon",        name: "길몬",              p: "gigimon", cost: 400 },
    { id: "graumon",       name: "그라우몬",          p: "gilmon", cost: 2100 },
    { id: "megagraumon",   name: "메가그라우몬",      p: "graumon", cost: 9000 },
    { id: "dukemon",       name: "듀크몬",            p: "megagraumon", cost: 54000, box: 1 },
    { id: "dukemonx",      name: "듀크몬X",           p: "dukemon", box: 1 },
    { id: "dukemoncrimson",name: "듀크몬 크림즌",     p: "dukemon", box: 1 },
    { id: "medievaldukemon",name:"메디벌듀크몬",      p: "megagraumon", box: 1 },
    { id: "megidramon",    name: "메기드라몬",        p: "megagraumon", box: 1 },
    { id: "megidramonx",   name: "메기드라몬X",       p: "megidramon" },
    { id: "gilmonx",       name: "길몬X",             p: "gilmon" },
    { id: "gilmonblack",   name: "길몬(흑)",          p: "gigimon", cost: 400 },
    { id: "graumonblack",  name: "그라우몬(흑)",      p: "gilmonblack", cost: 2600 },
    { id: "megagraumonblack", name: "메가그라우몬(흑)", p: "graumonblack", cost: 9600 },
    { id: "chaosdukemon",  name: "카오스듀크몬",      p: "megagraumonblack", cost: 70000, box: 1 },
    { id: "chaosdukemoncore", name: "카오스듀크몬 코어", p: "chaosdukemon" },
    // 사진 7은 사진 6 아래쪽 줄기가 이어진 것이다. 어디서 갈라지는지는 안 보여서 기기몬 밑에 붙였다(추정).
    { id: "chubumon",      name: "초브몬",            p: "gigimon", assumed: 1 },
    { id: "upamon",        name: "우파몬",            p: "chubumon", cost: 5000 },
    { id: "armamon",       name: "아르마몬",          p: "upamon", cost: 50000 },
    { id: "goldarmamon",   name: "황금아르마몬",      p: "armamon", cost: 250000 },
    { id: "toumon",        name: "토우몬",            p: "goldarmamon", req: "r_toumon" },
    { id: "lampmon",       name: "램프몬",            p: "toumon", box: 1 },

    // ── 포요몬 계열 (사진 8) ──
    { id: "egg8",          name: "알",                p: null },
    { id: "poyomon",       name: "포요몬",            p: "egg8" },
    { id: "tokomon",       name: "토코몬",            p: "poyomon", cost: 50 },
    { id: "padamon",       name: "파닥몬",            p: "tokomon", cost: 260 },
    { id: "angemon",       name: "엔젤몬",            p: "padamon", cost: 1250 },
    { id: "holyangemon",   name: "홀리엔젤몬",        p: "angemon", cost: 5300 },
    { id: "seraphimon",    name: "세라피몬",          p: "holyangemon", cost: 45000, box: 1 },
    { id: "blackseraphimon",name:"블랙세라피몬",      p: "seraphimon", box: 1 },
    { id: "dominimon",     name: "도미니몬",          p: "holyangemon", cost: 45000 },
    { id: "kurabis",       name: "쿨라비스엔젤몬",    p: "holyangemon", box: 1 },
    { id: "seiryumon",     name: "청룡몬",            p: "holyangemon", box: 1 },
    { id: "panryumon",     name: "판룡몬",            p: "seiryumon" },
    { id: "panryumonruin", name: "판룡몬 Ruin",       p: "panryumon" },
    { id: "pegasusmon",    name: "페가수스몬",        p: "padamon" },
    { id: "piccolomon",    name: "피콜몬",            p: "angemon" },
    { id: "marinangemon",  name: "마린엔젤몬",        p: "piccolomon", box: 1 },
    { id: "bacchusmon",    name: "바커스몬",          p: "piccolomon", box: 1 },

    // ── 새싹몬 계열 (사진 9) ──
    { id: "egg9",          name: "알",                p: null },
    { id: "saesakmon",     name: "새싹몬",            p: "egg9" },
    { id: "onimon",        name: "어니몬",            p: "saesakmon", cost: 45 },
    { id: "piyomon",       name: "피요몬",            p: "onimon", cost: 230 },
    { id: "birdramon",     name: "버드라몬",          p: "piyomon", cost: 1150 },
    { id: "garudamon",     name: "가루다몬",          p: "birdramon", cost: 5100 },
    { id: "phoenixmon",    name: "페닉스몬",          p: "garudamon", cost: 62000, box: 1 },
    { id: "jujakmon",      name: "주작몬",            p: "garudamon", box: 1 },
    { id: "fujinmon",      name: "풍신몬",            p: "garudamon", box: 1 },
    { id: "onismon",       name: "오니스몬",          p: "garudamon" },
    { id: "airdramon",     name: "에어드라몬",        p: "piyomon", cost: "1100~1149" },
    { id: "megadramon",    name: "메가드라몬",        p: "airdramon", cost: 6000 },
    { id: "yorkmon",       name: "요크몬",            p: "saesakmon" },
    { id: "pluffymon",     name: "플러피몬",          p: "yorkmon", cost: 5000 },
    { id: "pteromon",      name: "프테로몬",          p: "pluffymon", cost: 50000 },
    { id: "gailmon",       name: "게일몬",            p: "pteromon", cost: 150000 },
    { id: "grandgailmon",  name: "그랑게일몬",        p: "gailmon" },
    { id: "zephagamon",    name: "제퍼가몬",          p: "grandgailmon" },

    // ── 유라몬 계열 (사진 10) ──
    { id: "egg10",         name: "알",                p: null },
    { id: "yuramon",       name: "유라몬",            p: "egg10" },
    { id: "seedmon",       name: "시드몬",            p: "yuramon", cost: 45 },
    { id: "palmon",        name: "팔몬",              p: "seedmon", cost: 220 },
    { id: "nidmon",        name: "니드몬",            p: "palmon", cost: 1100 },
    { id: "lilimon",       name: "릴리몬",            p: "nidmon", cost: 4900 },
    { id: "palmonx",       name: "팔몬X",             p: "palmon" },
    { id: "florarmon",     name: "플로라몬",          p: "seedmon" },
    { id: "vegimon",       name: "베지몬",            p: "florarmon", cost: 5000 },
    { id: "baidermon",     name: "베이더몬",          p: "vegimon", cost: 50000 },
    { id: "ivamon",        name: "이바몬",            p: "baidermon" },
    { id: "ivamonx",       name: "이바몬X",           p: "ivamon" },
    { id: "formon",        name: "폼몬",              p: "seedmon" },
    { id: "parasaurmon",   name: "파라사우몬",        p: "formon" },
    { id: "tropiamon",     name: "트로피아몬",        p: "parasaurmon" },
    { id: "bloomlordmon",  name: "블룸로드몬",        p: "tropiamon" },
    { id: "birdmon",       name: "버드몬",            p: "yuramon", cost: 45 },
    { id: "lalamon",       name: "라라몬",            p: "birdmon", cost: 220 },
    { id: "sunflowmon",    name: "해바라기몬",        p: "lalamon", cost: 1100 },
    { id: "lylamon",       name: "라일라몬",          p: "sunflowmon", cost: 5000 },
    { id: "rosemon",       name: "로제몬",            p: "lylamon", box: 1 },
    { id: "rosemonburst",  name: "로제몬 Burst",      p: "rosemon" },
    { id: "rosemonx",      name: "로제몬X",           p: "rosemon", box: 1 },
    { id: "mushmon",       name: "머슈몬",            p: "birdmon" },
    { id: "woodmon",       name: "우드몬",            p: "mushmon", cost: 1200 },
    { id: "jureimon",      name: "쥬레이몬",          p: "woodmon", cost: 5000 },
    { id: "eldoradimon",   name: "엘도라디몬",        p: "jureimon" },
    { id: "pinochimon",    name: "피노키몬",          p: "jureimon", cost: 35000, box: 1 }
  ]
};
