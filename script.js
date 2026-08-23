(() => {
  "use strict";

  const COPY = {
    en: {
      nav: [["#home","Home"],["#about","Legend"],["#skills","Elements"],["#journey","Journey"],["#work","Work"],["#contact","Contact"]],
      hero: {
        kicker: "Hi, I'm",
        role: "Senior UX Designer who ships in code.",
        desc: "Eight years turning research into products that shipped — and now writing the front-end myself. Design decisions, responsive cases and motion all live in the code, so one person covers UX, UI and build.",
        cta1: "Enter the journey", cta2: "Get in touch",
        note: "This site is the proof — designed and coded by me."
      },
      scroll: "SCROLL",
      stats: [
        {n:"8+", l:"Years designing digital products"},
        {n:"2h → 10m", l:"UI revision time, after the Screen Component workflow"},
        {n:"2", l:"Junior designers mentored to Mid-level"},
        {n:"4", l:"Elements in training: earth, water, wind, fire"}
      ],
      about: {
        kicker: "My story",
        title: "The Legend of Nilmangkorn",
        p1: "Nilmangkorn is the immortal steed of the Phra Aphai Mani epic — part horse, part dragon, born to carry someone further than they could walk alone. I took the name because that is the job: carry the product, and the team, further.",
        p2: "The training is in four elements. Earth is craft, water is people, wind is the road already travelled, fire is what keeps the practice moving.",
        p3: "Behind the legend: Nadchanon Susutlertpanya (Bew), Senior UX Designer at Orange Cap Innovative, with a front-end engineering past at THiNKNET."
      },
      elements: {
        kicker: "The four elements",
        title: "Four elements, one designer",
        hint: "Pick an element to change what you see."
      },
      journey: {
        kicker: "Experience",
        title: "The road so far",
        items: [
          {year:"2024 —", role:"Senior UX Designer", org:"Orange Cap Innovative Co., Ltd.", detail:"Introduced and scaled Design System practices across projects. Led Gother v1 from concept to release, SKILLKAMP by KBank (website + back office), a dental clinic platform with ERP-integrated back office, and the redesign of a liver-specialist back office for Chulalongkorn University. Currently leading a centralised Design System Library."},
          {year:"2022 — 2023", role:"UX Designer", org:"Orange Cap Innovative Co., Ltd.", detail:"TAGTHAi by KBank, onsite user research at WashXpress and the Wash–Dry–Fold feature, plus the liver-specialist back office. Interviews, card sorting, usability testing, IA, user flows and prototypes."},
          {year:"2018 — 2022", role:"UX/UI Designer & Project Manager", org:"Playwork Co., Ltd.", detail:"Empathy maps and personas validated with real users, mid-fidelity UI and prototypes in Figma, usability testing, and coordination across developers, testers, management and external agencies."},
          {year:"2016 — 2018", role:"Software Engineer, Front-End", org:"THiNKNET Co., Ltd.", detail:"Built websites in React, HTML and CSS inside an Agile (Scrum) team. The skill that now lets me hand over working code instead of a Figma link."},
          {year:"2015", role:"Tester (Internship)", org:"CIMB Thai Bank", detail:"Tested backend accuracy and reported defects to the development team. Where the habit of questioning a system started."}
        ]
      },
      work: {
        kicker: "Work",
        title: "Case studies, loading",
        desc: "Each project gets its own page: the problem, the research, the decisions, and the shipped result. Screens and prototypes are being prepared.",
        badge: "Coming soon",
        slots: [
          {no:"01", title:"Case study slot", meta:"Product design, end to end"},
          {no:"02", title:"Case study slot", meta:"Research to shipped feature"},
          {no:"03", title:"Case study slot", meta:"Design system"},
          {no:"04", title:"Case study slot", meta:"Designed and coded by me"}
        ]
      },
      contact: {
        title: "Let's build something worth the journey.",
        desc: "Open to product teams and founders who want design and front-end from one person. Say hello — I answer every message."
      },
      footer: "Designed, written and coded by Bew · Bangkok"
    },
    th: {
      nav: [["#home","หน้าแรก"],["#about","ตำนาน"],["#skills","ธาตุทั้งสี่"],["#journey","เส้นทาง"],["#work","ผลงาน"],["#contact","ติดต่อ"]],
      hero: {
        kicker: "สวัสดีครับ ผมชื่อ",
        role: "Senior UX Designer ที่ส่งงานเป็นโค้ดได้เลย",
        desc: "แปดปีกับการเปลี่ยนงานวิจัยให้กลายเป็นโปรดักต์ที่ออกสู่ผู้ใช้จริง และวันนี้ผมเขียนหน้าบ้านเองได้ ทั้งเคส responsive และแอนิเมชันวางไว้ในโค้ดหมดแล้ว หนึ่งคนจึงครบทั้ง UX, UI และการสร้าง",
        cta1: "เริ่มการเดินทาง", cta2: "ติดต่อผม",
        note: "เว็บนี้คือข้อพิสูจน์ ออกแบบและเขียนโค้ดด้วยตัวเอง"
      },
      scroll: "เลื่อนลง",
      stats: [
        {n:"8+", l:"ปีในสายออกแบบโปรดักต์ดิจิทัล"},
        {n:"2 ชม. → 10 นาที", l:"เวลาแก้ UI หลังใช้ Screen Component workflow"},
        {n:"2", l:"Junior Designer ที่โคชจนได้เลื่อนเป็น Mid-level"},
        {n:"4", l:"ธาตุที่ฝึกฝน ดิน น้ำ ลม ไฟ"}
      ],
      about: {
        kicker: "ตำนานของผม",
        title: "ตำนานนิลมังกร",
        p1: "นิลมังกรคือม้านิลมังกรจากพระอภัยมณี ครึ่งม้าครึ่งมังกร เกิดมาเพื่อพาใครคนหนึ่งไปได้ไกลกว่าที่เดินเอง ผมเลือกชื่อนี้เพราะมันคือหน้าที่ของผม พาโปรดักต์และทีมไปให้ไกลกว่าเดิม",
        p2: "การฝึกตนแบ่งเป็นสี่ธาตุ ดินคือฝีมือ น้ำคือการทำงานกับคน ลมคือเส้นทางที่ผ่านมา และไฟคือแรงที่ทำให้ยังเดินต่อ",
        p3: "เบื้องหลังตำนานคือ ณัฐชนน สุสุทธิ์เลิศปัญญา (บิว) Senior UX Designer ที่ Orange Cap Innovative และอดีต Front-end Developer ที่ THiNKNET"
      },
      elements: {
        kicker: "ธาตุทั้งสี่",
        title: "สี่ธาตุ หนึ่งนักออกแบบ",
        hint: "กดเลือกธาตุเพื่อดูเนื้อหาแต่ละด้าน"
      },
      journey: {
        kicker: "ประสบการณ์",
        title: "เส้นทางที่ผ่านมา",
        items: [
          {year:"2024 —", role:"Senior UX Designer", org:"Orange Cap Innovative Co., Ltd.", detail:"วาง Design System ให้ใช้ได้จริงข้ามโปรเจกต์ นำทีมออกแบบ Gother เวอร์ชันแรกจากคอนเซปต์ถึงปล่อยจริง SKILLKAMP by KBank ทั้งเว็บและ Back Office แพลตฟอร์มคลินิกทันตกรรมที่เชื่อมกับ ERP และรีดีไซน์ Back Office โครงการแพทย์เฉพาะทางโรคตับของจุฬาฯ ปัจจุบันนำการสร้าง Design System Library ส่วนกลาง"},
          {year:"2022 — 2023", role:"UX Designer", org:"Orange Cap Innovative Co., Ltd.", detail:"TAGTHAi by KBank, ลง user research หน้างานที่ WashXpress และออกแบบฟีเจอร์ Wash–Dry–Fold รวมถึง Back Office โครงการโรคตับ ทำ interview, card sorting, usability testing, IA, user flow และ prototype"},
          {year:"2018 — 2022", role:"UX/UI Designer & Project Manager", org:"Playwork Co., Ltd.", detail:"ทำ empathy map และ persona ที่ตรวจสอบกับผู้ใช้จริง ออกแบบ UI ระดับ mid-fidelity และ prototype ใน Figma ทำ usability testing และประสานงานทั้งเดฟ เทสเตอร์ ผู้บริหาร และเอเจนซี"},
          {year:"2016 — 2018", role:"Software Engineer (Front-End)", org:"THiNKNET Co., Ltd.", detail:"พัฒนาเว็บไซต์ด้วย React, HTML และ CSS ในทีม Agile (Scrum) สกิลชุดนี้คือเหตุผลที่วันนี้ผมส่งงานเป็นโค้ดที่ใช้ได้จริง ไม่ใช่แค่ลิงก์ Figma"},
          {year:"2015", role:"Tester (ฝึกงาน)", org:"CIMB Thai Bank", detail:"ทดสอบความถูกต้องของระบบหลังบ้านและรายงานข้อผิดพลาดให้ทีมพัฒนา จุดเริ่มต้นของนิสัยตั้งคำถามกับระบบ"}
        ]
      },
      work: {
        kicker: "ผลงาน",
        title: "Case study กำลังจัดเตรียม",
        desc: "แต่ละโปรเจกต์จะมีหน้าของตัวเอง เล่าตั้งแต่โจทย์ งานวิจัย การตัดสินใจ จนถึงผลลัพธ์ที่ปล่อยจริง ตอนนี้กำลังเตรียมภาพหน้าจอและ prototype",
        badge: "เร็ว ๆ นี้",
        slots: [
          {no:"01", title:"ช่องผลงาน", meta:"ออกแบบโปรดักต์ตั้งแต่ต้นจนจบ"},
          {no:"02", title:"ช่องผลงาน", meta:"จากงานวิจัยถึงฟีเจอร์ที่ปล่อยจริง"},
          {no:"03", title:"ช่องผลงาน", meta:"Design System"},
          {no:"04", title:"ช่องผลงาน", meta:"ออกแบบและเขียนโค้ดด้วยตัวเอง"}
        ]
      },
      contact: {
        title: "มาสร้างงานที่คุ้มกับการเดินทางกันครับ",
        desc: "เปิดรับทีมโปรดักต์และผู้ก่อตั้งที่อยากได้ทั้งดีไซน์และหน้าบ้านจากคนเดียว ทักมาคุยได้เลย ผมตอบทุกข้อความ"
      },
      footer: "ออกแบบ เขียนเนื้อหา และเขียนโค้ดโดยบิว · กรุงเทพฯ"
    }
  };

  const ELEMENTS = {
    en: [
      {key:"earth", glyph:"⛰", name:"EARTH", thai:"ธาตุดิน", role:"Hard skills", cssVar:"--earth",
       desc:"The ground everything stands on: craft I can be held to. Research, structure, interface, and code that runs.",
       items:["Figma","Design System","Wireframing","Prototyping","Usability Testing","Information Architecture","User Flow","HTML","CSS","React JS"]},
      {key:"water", glyph:"💧", name:"WATER", thai:"ธาตุน้ำ", role:"Soft skills", cssVar:"--water",
       desc:"Design is a people problem first. Water takes the shape of the room — stakeholders, developers, and the users being listened to.",
       items:["User Empathy","Communication","Adaptability","Emotional Intelligence","Be Observant","Positivity","Team Guidance","Mentoring"]},
      {key:"wind", glyph:"🜁", name:"WIND", thai:"ธาตุลม", role:"Experience", cssVar:"--wind",
       desc:"Eight years of distance covered — travel, banking, healthcare, education and internal tools, from front-end engineer to senior designer.",
       items:["8+ years in product","Gother","SKILLKAMP by KBank","TAGTHAi","Talk to PEACH","Dental clinic platform","Liver specialist back office","Design System Library"]},
      {key:"fire", glyph:"🔥", name:"FIRE", thai:"ธาตุไฟ", role:"Passion & growth", cssVar:"--fire",
       desc:"What keeps the practice burning: front-end past plus UX plus AI, building working products fast instead of static mockups.",
       items:["Vibe coding with AI","Ship in code, not handoff","Usability Heuristics","UX Laws","Analytical thinking","Life-long learning","Comprehensive Usability Toolkit, 2024","Computer Science, KMITL"]}
    ],
    th: [
      {key:"earth", glyph:"⛰", name:"EARTH", thai:"ธาตุดิน", role:"Hard skills", cssVar:"--earth",
       desc:"พื้นที่รองรับทุกอย่าง คือฝีมือที่วัดผลได้จริง ทั้งการวิจัย โครงสร้าง หน้าจอ และโค้ดที่รันได้",
       items:["Figma","Design System","Wireframing","Prototyping","Usability Testing","Information Architecture","User Flow","HTML","CSS","React JS"]},
      {key:"water", glyph:"💧", name:"WATER", thai:"ธาตุน้ำ", role:"Soft skills", cssVar:"--water",
       desc:"งานออกแบบเริ่มที่คนก่อนเสมอ น้ำปรับตัวเข้ากับทุกวง ทั้งผู้มีส่วนได้ส่วนเสีย นักพัฒนา และผู้ใช้ที่เราต้องฟังจริง ๆ",
       items:["เข้าใจผู้ใช้","การสื่อสาร","ปรับตัวได้","Emotional Intelligence","สังเกตรายละเอียด","คิดบวก","ดูแลทีม","โคชน้อง"]},
      {key:"wind", glyph:"🜁", name:"WIND", thai:"ธาตุลม", role:"ประสบการณ์", cssVar:"--wind",
       desc:"แปดปีของระยะทางที่ผ่านมา ทั้งท่องเที่ยว การเงิน สุขภาพ การศึกษา และระบบหลังบ้าน จาก Front-end Developer สู่ Senior UX Designer",
       items:["8+ ปีในสายโปรดักต์","Gother","SKILLKAMP by KBank","TAGTHAi","Talk to PEACH","แพลตฟอร์มคลินิกทันตกรรม","Back Office โครงการโรคตับ","Design System Library"]},
      {key:"fire", glyph:"🔥", name:"FIRE", thai:"ธาตุไฟ", role:"แรงและการเติบโต", cssVar:"--fire",
       desc:"สิ่งที่ทำให้ยังลุกโชน คือพื้นหลัง Front-end บวก UX บวกพลัง AI สร้างของที่ใช้ได้จริงได้เร็ว ไม่ใช่แค่ภาพนิ่ง",
       items:["Vibe coding กับ AI","ส่งงานเป็นโค้ด","Usability Heuristics","UX Laws","คิดวิเคราะห์","เรียนรู้ตลอดชีวิต","Comprehensive Usability Toolkit 2024","วิทยาการคอมพิวเตอร์ KMITL"]}
    ]
  };

  const SOCIALS = [
    { href: "https://www.linkedin.com/", label: "in" },
    { href: "https://www.behance.net/", label: "Bē" },
    { href: "https://dribbble.com/", label: "Dr" }
  ];

  const SPARK_SEEDS = [12,28,41,55,63,71,84,19,33,47,58,66,77,88,24,37,52,69];
  const SPARK_COLORS = ["var(--earth)","var(--water)","var(--wind)","var(--fire)"];

  const state = {
    theme: "dark",
    lang: "en",
    el: 0
  };

  const $ = (id) => document.getElementById(id);
  const root = $("root");

  function buildParticles() {
    const container = $("particles");
    container.innerHTML = "";
    SPARK_SEEDS.forEach((s, i) => {
      const span = document.createElement("span");
      span.className = "spark";
      const size = (i % 3 === 0) ? "4px" : "2px";
      const dx = ((s % 11) - 5) * 14 + "px";
      const dy = "-" + (120 + (s % 90)) + "px";
      const duration = (9 + (s % 8)) + "s";
      const delay = (i * 0.7) + "s";
      span.style.left = (s % 97) + "%";
      span.style.top = ((s * 7) % 92) + "%";
      span.style.width = size;
      span.style.height = size;
      span.style.background = SPARK_COLORS[i % 4];
      span.style.setProperty("--dx", dx);
      span.style.setProperty("--dy", dy);
      span.style.animation = "drift " + duration + " linear " + delay + " infinite";
      container.appendChild(span);
    });
  }

  function renderNav() {
    const t = COPY[state.lang];
    const nav = $("nav");
    nav.innerHTML = "";
    t.nav.forEach(([href, label]) => {
      const a = document.createElement("a");
      a.href = href;
      a.className = "nav-link";
      a.textContent = label;
      nav.appendChild(a);
    });
  }

  function renderHeader() {
    $("langBtn").textContent = state.lang === "en" ? "ไทย" : "EN";
    $("themeBtn").textContent = state.theme === "dark" ? "☀" : "☾";
  }

  function renderHero() {
    const t = COPY[state.lang];
    $("heroKicker").textContent = t.hero.kicker;
    $("heroRole").textContent = t.hero.role;
    $("heroDesc").textContent = t.hero.desc;
    $("heroCta1").textContent = t.hero.cta1 + " →";
    $("heroCta2").textContent = t.hero.cta2;
    $("heroNote").textContent = t.hero.note;
    $("scrollLabel").textContent = t.scroll;
  }

  function renderStats() {
    const t = COPY[state.lang];
    const grid = $("statsGrid");
    grid.innerHTML = "";
    t.stats.forEach((s) => {
      const card = document.createElement("div");
      card.className = "stat-card";
      const n = document.createElement("p");
      n.className = "stat-num";
      n.textContent = s.n;
      const l = document.createElement("p");
      l.className = "stat-label";
      l.textContent = s.l;
      card.appendChild(n);
      card.appendChild(l);
      grid.appendChild(card);
    });
  }

  function renderAbout() {
    const t = COPY[state.lang];
    $("aboutKicker").textContent = t.about.kicker;
    $("aboutTitle").textContent = t.about.title;
    $("aboutP1").textContent = t.about.p1;
    $("aboutP2").textContent = t.about.p2;
    $("aboutP3").textContent = t.about.p3;
  }

  function renderTabs() {
    const t = COPY[state.lang];
    const els = ELEMENTS[state.lang];
    $("elKicker").textContent = t.elements.kicker;
    $("elTitle").textContent = t.elements.title;
    $("elHint").textContent = t.elements.hint;

    const grid = $("tabsGrid");
    grid.innerHTML = "";
    els.forEach((e, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab-btn" + (i === state.el ? " active" : "");
      const color = `var(${e.cssVar})`;
      if (i === state.el) {
        btn.style.borderColor = color;
        btn.style.background = `color-mix(in oklab, ${color} 12%, transparent)`;
        btn.style.color = color;
        btn.style.boxShadow = `0 12px 34px color-mix(in oklab, ${color} 22%, transparent)`;
      } else {
        btn.style.borderColor = "var(--line)";
        btn.style.background = "var(--panel)";
        btn.style.color = "var(--ink)";
        btn.style.boxShadow = "none";
      }
      btn.addEventListener("click", () => {
        state.el = i;
        renderTabs();
        renderPanel();
      });

      const glyph = document.createElement("span");
      glyph.className = "tab-glyph";
      glyph.textContent = e.glyph;
      const name = document.createElement("span");
      name.className = "tab-name";
      name.textContent = e.name;
      const role = document.createElement("span");
      role.className = "tab-role";
      role.textContent = e.role;

      btn.appendChild(glyph);
      btn.appendChild(name);
      btn.appendChild(role);
      grid.appendChild(btn);
    });
  }

  function renderPanel() {
    const els = ELEMENTS[state.lang];
    const active = els[state.el];
    const color = `var(${active.cssVar})`;

    $("panelInner").style.background = `radial-gradient(90% 120% at 8% 0%, color-mix(in oklab, ${color} 14%, transparent), transparent 62%)`;
    $("panelRole").textContent = active.role;
    $("panelRole").style.color = color;
    $("panelName").textContent = active.name;
    $("panelName").style.color = color;
    $("panelThai").textContent = active.thai;
    $("panelDesc").textContent = active.desc;

    const items = $("panelItems");
    items.innerHTML = "";
    active.items.forEach((label) => {
      const pill = document.createElement("span");
      pill.className = "item-pill";
      pill.textContent = label;
      pill.style.border = `1px solid color-mix(in oklab, ${color} 34%, transparent)`;
      pill.style.background = `color-mix(in oklab, ${color} 9%, transparent)`;
      items.appendChild(pill);
    });
  }

  function renderJourney() {
    const t = COPY[state.lang];
    $("journeyKicker").textContent = t.journey.kicker;
    $("journeyTitle").textContent = t.journey.title;

    const timeline = $("timeline");
    timeline.innerHTML = "";
    t.journey.items.forEach((j) => {
      const item = document.createElement("div");
      item.className = "timeline-item";

      const year = document.createElement("div");
      year.className = "timeline-year";
      year.textContent = j.year;

      const rail = document.createElement("div");
      rail.className = "timeline-rail";
      const line = document.createElement("span");
      line.className = "timeline-line";
      const dot = document.createElement("span");
      dot.className = "timeline-dot";
      rail.appendChild(line);
      rail.appendChild(dot);

      const content = document.createElement("div");
      content.className = "timeline-content";
      const role = document.createElement("p");
      role.className = "timeline-role";
      role.textContent = j.role;
      const org = document.createElement("p");
      org.className = "timeline-org";
      org.textContent = j.org;
      const detail = document.createElement("p");
      detail.className = "timeline-detail";
      detail.textContent = j.detail;
      content.appendChild(role);
      content.appendChild(org);
      content.appendChild(detail);

      item.appendChild(year);
      item.appendChild(rail);
      item.appendChild(content);
      timeline.appendChild(item);
    });
  }

  function renderWork() {
    const t = COPY[state.lang];
    $("workKicker").textContent = t.work.kicker;
    $("workTitle").textContent = t.work.title;
    $("workDesc").textContent = t.work.desc;

    const grid = $("workGrid");
    grid.innerHTML = "";
    t.work.slots.forEach((w) => {
      const card = document.createElement("div");
      card.className = "work-card";

      const top = document.createElement("div");
      const no = document.createElement("p");
      no.className = "work-no";
      no.textContent = w.no;
      const title = document.createElement("p");
      title.className = "work-card-title";
      title.textContent = w.title;
      const meta = document.createElement("p");
      meta.className = "work-meta";
      meta.textContent = w.meta;
      top.appendChild(no);
      top.appendChild(title);
      top.appendChild(meta);

      const badge = document.createElement("span");
      badge.className = "work-badge";
      badge.textContent = t.work.badge;

      card.appendChild(top);
      card.appendChild(badge);
      grid.appendChild(card);
    });
  }

  function renderContact() {
    const t = COPY[state.lang];
    $("contactTitle").textContent = t.contact.title;
    $("contactDesc").textContent = t.contact.desc;

    const socials = $("socials");
    socials.innerHTML = "";
    SOCIALS.forEach((so) => {
      const a = document.createElement("a");
      a.className = "social-btn";
      a.href = so.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = so.label;
      socials.appendChild(a);
    });
  }

  function renderFooter() {
    const t = COPY[state.lang];
    $("footerNote").textContent = t.footer;
  }

  function renderAll() {
    document.documentElement.lang = state.lang;
    renderNav();
    renderHeader();
    renderHero();
    renderStats();
    renderAbout();
    renderTabs();
    renderPanel();
    renderJourney();
    renderWork();
    renderContact();
    renderFooter();
  }

  function setupTheme() {
    root.setAttribute("data-theme", state.theme);
    $("themeBtn").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", state.theme);
      renderHeader();
    });
    $("langBtn").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "th" : "en";
      renderAll();
    });
  }

  function setupParallax() {
    const heroVisual = $("heroVisual");
    const aboutVisual = $("aboutVisual");
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (heroVisual) heroVisual.style.transform = "translateY(" + (y * 0.09) + "px)";
      if (aboutVisual) {
        const r = aboutVisual.getBoundingClientRect();
        const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
        aboutVisual.style.transform = "translateY(" + ((0.5 - p) * 46) + "px)";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  buildParticles();
  setupTheme();
  setupParallax();
  renderAll();
})();
