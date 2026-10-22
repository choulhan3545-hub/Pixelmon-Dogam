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
    { id: "jesmongx",      name: "제스몬GX",          p: "jesmon", cond: 1 }
  ]
};
