export type Lang = "en" | "th";

export interface JourneyItem {
  role: string;
  org: string;
  start: string; // "YYYY-MM"
  end: string | null; // null = present/ปัจจุบัน
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  duration: string;
}

export interface Copy {
  meta: { title: string; description: string };
  nav: [string, string][];
  hero: {
    kicker: string;
    role: string;
    desc: string;
    ctaWork: string;
    ctaAllWork: string;
    ctaCV: string;
  };
  scroll: string;
  experience: {
    kicker: string;
    title: string;
    timelineLabel: string;
    timeline: JourneyItem[];
    educationLabel: string;
    education: EducationItem[];
  };
  contact: { title: string; desc: string };
}

export const COPY: Record<Lang, Copy> = {
  en: {
    meta: {
      title: "Nadchanon Susutlertpanya | Senior UX/UI Designer | Design to Code",
      description: "Senior UX/UI Designer with 8 years of experience and a front-end background. Designs interfaces and ships them as production-ready code, motion included."
    },
    nav: [["#passion", "Passion"], ["#hard-skill", "Hard Skill"], ["#soft-skill", "Soft Skill"], ["#experience", "Experience"], ["#contact", "Contact"]],
    hero: {
      kicker: "Nadchanon Susutlertpanya",
      role: "Senior UX/UI Designer",
      desc: "UI designed and delivered as production-ready code, including the motion work that time constraints usually cut. Started as a Front-End Developer before moving into UX for 8 years, so the coding foundation never went away.",
      ctaWork: "View recent work",
      ctaAllWork: "View all work",
      ctaCV: "Download CV"
    },
    scroll: "SCROLL",
    experience: {
      kicker: "Experience",
      title: "Mileage",
      timelineLabel: "Work",
      timeline: [
        { role: "Senior UX Designer", org: "Orange Cap Innovative Co., Ltd.", start: "2024-01", end: null,
          bullets: [
            "Designed and built the Peach & Co. website entirely solo, from UI through to the code and every bit of motion.",
            "Designed and built SiEIC, a medical innovation registration platform, both the public site and a Payload CMS back office, working closely with the backend and infra teams. Designed the registration form itself as a 5-step flow with inline validation, constant progress status, and a final review step before submission.",
            "Designed and built a budget-based package picker for Sabuy Wedding, with filtering based on each user's criteria.",
            "Introduced a Design System used across projects, cutting UI revision time from 2 hours to 10 minutes.",
            "Mentored 2 junior designers through to Mid-level.",
            "Led design for SKILLKAMP (KBank), Gother, a liver-specialist back office for Chulalongkorn University, and a dental clinic platform integrated with ERP.",
          ] },
        { role: "UX Designer", org: "Orange Cap Innovative Co., Ltd.", start: "2022-06", end: "2023-12",
          bullets: [
            "Co-designed TAGTHAi (KBank), a travel app supporting Thailand's tourism ecosystem.",
            "Conducted onsite user research at WashXpress and designed the UI for its Wash–Dry–Fold feature.",
            "Designed the back office for a liver-specialist medical project at Chulalongkorn University.",
            "Ran user interviews, card sorting and usability testing, and built the IA, user flows and prototypes.",
          ] },
        { role: "UX/UI Designer & Project Manager", org: "Playwork Co., Ltd.", start: "2018-05", end: "2022-05",
          bullets: [
            "Owned design work while coordinating across developers, testers, accounting, management and external agencies.",
            "Covered the full process from empathy maps, user interviews and personas through to prototypes and usability testing.",
          ] },
        { role: "Software Engineer, Front-End", org: "THiNKNET Co., Ltd.", start: "2016-08", end: "2018-01",
          bullets: [
            "Built front-end interfaces with React, HTML and CSS.",
            "Worked in an Agile (Scrum) team.",
          ] },
      ],
      educationLabel: "Education",
      education: [
        { degree: "Computer Science", school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)", duration: "2012 — 2015" }
      ]
    },
    contact: {
      title: "Great to meet you.",
      desc: "If you'd like to talk about work, reach out through any channel below."
    }
  },
  th: {
    meta: {
      title: "นัสชานนท์ สุสุตเลิศปัญญา | Senior UX/UI Designer | นิลมังกร",
      description: "Senior UX/UI Designer ประสบการณ์ 8 ปี พื้นฐาน Front-End ออกแบบ UI และส่งมอบเป็นโค้ดที่ใช้งานได้จริง รวมถึง motion ที่มักถูกตัดออกเพราะข้อจำกัดด้านเวลา"
    },
    nav: [["#passion", "ไฟในใจ"], ["#hard-skill", "ฝีมือ"], ["#soft-skill", "ลื่นไหล"], ["#experience", "ชั่วโมงบิน"], ["#contact", "ติดต่อ"]],
    hero: {
      kicker: "นัสชานนท์ สุสุตเลิศปัญญา",
      role: "Senior UX/UI Designer",
      desc: "ออกแบบ UI และส่งมอบเป็นโค้ดที่ใช้งานได้จริง รวมถึง motion ที่มักถูกตัดออกเพราะข้อจำกัดด้านเวลา เริ่มต้นจาก Front-End Developer ก่อนย้ายมาสาย UX ตลอด 8 ปี พื้นฐานการเขียนโค้ดยังไม่เคยหายไป",
      ctaWork: "ดูผลงานล่าสุด",
      ctaAllWork: "ดูผลงานทั้งหมด",
      ctaCV: "ดาวน์โหลด CV"
    },
    scroll: "เลื่อนลง",
    experience: {
      kicker: "Experience",
      title: "ชั่วโมงบิน",
      timelineLabel: "การทำงาน",
      timeline: [
        { role: "Senior UX Designer", org: "Orange Cap Innovative Co., Ltd.", start: "2024-01", end: null,
          bullets: [
            "ออกแบบและพัฒนาเว็บไซต์ Peach & Co. เองทั้งหมด ตั้งแต่ UI จนถึงโค้ดและ motion ทุกส่วน",
            "ออกแบบและพัฒนาเว็บ SiEIC ระบบลงทะเบียนนวัตกรรมทางการแพทย์ ทั้งหน้าเว็บและ Back Office บน Payload CMS ทำงานร่วมกับทีม backend และ infra รวมถึงออกแบบฟอร์มลงทะเบียนที่มีข้อมูลจำนวนมาก แบ่งเป็น 5 ขั้นตอน ตรวจสอบความถูกต้องตั้งแต่ระหว่างกรอก บอกสถานะตลอดว่าอยู่ตรงไหน และให้ตรวจทานทั้งหมดก่อนกดส่ง",
            "ออกแบบและพัฒนาหน้าเลือกแพ็กเกจตามงบประมาณให้ Sabuy Wedding พร้อมระบบกรองตามเงื่อนไขของผู้ใช้",
            "วาง Design System ใช้ข้ามโปรเจค ลดเวลาแก้ UI จาก 2 ชั่วโมงเหลือ 10 นาที",
            "ดูแลน้อง 2 คน จนได้เลื่อนขั้นเป็น Mid-level",
            "นำทีมออกแบบ SKILLKAMP (KBank), Gother, ระบบ Back Office โครงการแพทย์เฉพาะทางโรคตับ (จุฬาฯ) และแพลตฟอร์มคลินิกทันตกรรมที่เชื่อมกับ ERP",
          ] },
        { role: "UX Designer", org: "Orange Cap Innovative Co., Ltd.", start: "2022-06", end: "2023-12",
          bullets: [
            "ร่วมออกแบบ TAGTHAi (KBank) แอปท่องเที่ยวที่รองรับระบบท่องเที่ยวไทย",
            "ลง User Research หน้างานจริงที่ WashXpress และออกแบบ UI ฟีเจอร์ Wash–Dry–Fold",
            "ออกแบบ Back Office โครงการแพทย์เฉพาะทางโรคตับ (จุฬาฯ)",
            "ทำ User Interview, Card Sorting, Usability Testing รวมถึง IA, User Flow และ Prototype",
          ] },
        { role: "UX/UI Designer & Project Manager", org: "Playwork Co., Ltd.", start: "2018-05", end: "2022-05",
          bullets: [
            "ดูแลงานออกแบบควบคู่กับการประสานงานระหว่าง developer, tester, บัญชี, กรรมการผู้จัดการ และเอเจนซี่ภายนอก",
            "ทำงานครบตั้งแต่ Empathy Map, User Interview และ Persona จนถึง Prototype และ Usability Testing",
          ] },
        { role: "Front-End Developer", org: "THiNKNET Co., Ltd.", start: "2016-08", end: "2018-01",
          bullets: [
            "พัฒนา front-end ด้วย React, HTML และ CSS",
            "ทำงานแบบ Agile (Scrum)",
          ] },
      ],
      educationLabel: "การศึกษา",
      education: [
        { degree: "วิทยาการคอมพิวเตอร์", school: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", duration: "2012 — 2015" }
      ]
    },
    contact: {
      title: "ยินดีที่ได้เจอกันครับ",
      desc: "ถ้าสนใจอยากคุยเรื่องงาน ทักมาได้ทุกช่องทางด้านล่าง"
    }
  }
};

export interface Element {
  key: string;
  glyph: string;
  name: string;
  thai: string;
  tagline: string;
  cssVar: string;
  desc: string;
  items: string[];
  itemGroups?: { label: string; items: string[] }[];
  principles?: { title: string; detail: string }[];
}

export const ELEMENTS: Record<Lang, Element[]> = {
  en: [
    { key: "earth", glyph: "⛰", name: "Craft", thai: "ธาตุดิน", tagline: "", cssVar: "--earth",
      desc: "Every design decision is grounded in Usability Heuristics and the Laws of UX, so there's always a reason behind it.",
      items: [],
      itemGroups: [
        { label: "Research & Analysis", items: ["Design Thinking", "User Interview", "Empathy Map", "Persona", "User Journey", "Information Architecture", "Card Sorting", "Usability Testing"] },
        { label: "Design", items: ["Usability Heuristic", "Design System", "Laws of UX", "User Flow", "Prototyping", "Figma"] },
        { label: "Frontend", items: ["Coding", "React JS", "HTML", "CSS"] },
      ] },
    { key: "water", glyph: "💧", name: "Adaptability", thai: "ธาตุน้ำ", tagline: "", cssVar: "--water",
      desc: "Eight years working with all kinds of people made it clear when to hold ground and when to give way, and the line between them always comes down to whether there's a principle behind it.",
      items: [],
      principles: [
        { title: "Feedback backed by principle, not opinion", detail: "Every critique points to a specific heuristic or rule, so the other person can push back with reasons instead of just guessing what I meant." },
        { title: "Speaks the same language as developers", detail: "Knowing what's actually hard to build changes the conversation. Decisions get made on what's real, not on insisting the mockup ships exactly as drawn." },
        { title: "Hears what's actually being asked for", detail: "Clients describe solutions, not problems. Design only starts once the real problem or goal behind the request is clear." },
        { title: "Follows what testing shows, not what I hoped", detail: "When real users don't behave the way the design assumed, it gets changed, no attachment to the original version." },
        { title: "Works with plenty of time or none at all", detail: "When the timeline gets tight, knowing what can be cut and what can't is the actual skill." },
      ] },
    { key: "wind", glyph: "🜁", name: "Mileage", thai: "ธาตุลม", tagline: "", cssVar: "--wind",
      desc: "Work has spanned travel, healthcare, education, consumer services and back-office systems, each with its own set of constraints.",
      items: ["Peach & Co.", "SiEIC", "Sabuy Wedding", "SKILLKAMP by KBank", "TAGTHAi", "Gother", "Talk to PEACH", "WashXpress", "Liver specialist back office", "Dental clinic platform"] },
    { key: "fire", glyph: "🔥", name: "Drive", thai: "ธาตุไฟ", tagline: "", cssVar: "--fire",
      desc: "Graduated in Computer Science and spent a year and a half as a Front-End Developer, then realized people interested him more than systems: why some things click for users instantly, while others leave them guessing.\n\nUX had the answers, so that's where the path turned.\n\nEight years on, what still gets him excited is watching what's in his head land on screen exactly as intended, especially the timing of the animation.",
      items: [] }
  ],
  th: [
    { key: "earth", glyph: "⛰", name: "ฝีมือ", thai: "ธาตุดิน", tagline: "", cssVar: "--earth",
      desc: "ออกแบบบนพื้นฐานของ Usability Heuristics และ Laws of UX ทุกการตัดสินใจจึงอธิบายที่มาได้เสมอ",
      items: [],
      itemGroups: [
        { label: "Research & Analysis", items: ["Design Thinking", "User Interview", "Empathy Map", "Persona", "User Journey", "Information Architecture", "Card Sorting", "Usability Testing"] },
        { label: "Design", items: ["Usability Heuristic", "Design System", "Laws of UX", "User Flow", "Prototyping", "Figma"] },
        { label: "Frontend", items: ["Coding", "React JS", "HTML", "CSS"] },
      ] },
    { key: "water", glyph: "💧", name: "ลื่นไหล", thai: "ธาตุน้ำ", tagline: "", cssVar: "--water",
      desc: "8 ปีกับการทำงานร่วมกับคนหลายแบบ ทำให้รู้ว่าเมื่อไหร่ควรยืน เมื่อไหร่ควรยอม และเส้นแบ่งคือมีหลักการรองรับหรือเปล่า",
      items: [],
      principles: [
        { title: "คอมเมนต์งานโดยไม่พูดว่า \"พี่คิดว่า\"", detail: "ถ้าติงอะไรไป จะบอกได้เสมอว่าขัดกับหลักการข้อไหน น้องจะได้แย้งกลับได้ด้วยเหตุผล" },
        { title: "คุยกับ Dev รู้เรื่อง", detail: "พอรู้ว่าอะไรทำยากอะไรทำง่าย เวลาคุยกันก็คุยบนของจริง ไม่ยืนยันให้ได้ตามแบบอย่างเดียว" },
        { title: "ฟังให้ออกว่าเขาอยากได้อะไรจริง ๆ", detail: "ลูกค้ามักบอกสิ่งที่อยากได้ ไม่ได้บอกปัญหาที่เจอ ต้องถามจนเจอปัญหาหรือจุดประสงค์ ก่อนถึงจะเริ่มออกแบบ" },
        { title: "ผลทดสอบว่ายังไงก็ว่าตามนั้น", detail: "ถ้าคนใช้จริงไม่เป็นแบบที่คิดไว้ ก็แก้โดยไม่เสียดายของเดิม" },
        { title: "ทำงานได้ทั้งตอนมีเวลาและตอนไม่มี", detail: "พอ timeline บีบ ก็ต้องรู้ว่าอะไรตัดได้ อะไรตัดไม่ได้" },
      ] },
    { key: "wind", glyph: "🜁", name: "ชั่วโมงบิน", thai: "ธาตุลม", tagline: "", cssVar: "--wind",
      desc: "ผ่านงานมาหลายวงการ ทั้งท่องเที่ยว สุขภาพ การศึกษา บริการผู้บริโภค และระบบหลังบ้าน แต่ละที่มีข้อจำกัดไม่เหมือนกัน",
      items: ["Peach & Co.", "SiEIC", "Sabuy Wedding", "SKILLKAMP by KBank", "TAGTHAi", "Gother", "Talk to PEACH", "WashXpress", "Back Office โครงการโรคตับ", "แพลตฟอร์มคลินิกทันตกรรม"] },
    { key: "fire", glyph: "🔥", name: "ไฟในใจ", thai: "ธาตุไฟ", tagline: "", cssVar: "--fire",
      desc: "จบ Computer Science มาเป็น Front-End Developer อยู่ปีครึ่ง แล้วก็พบว่าตัวเองสนใจเรื่องคนมากกว่าเรื่องระบบ ว่าทำไมของบางอย่างคนถึงใช้เป็นทันที ทำไมบางอย่างถึงต้องนั่งเดา\n\nUX ตอบคำถามพวกนี้ได้ เลยย้ายสายมาตั้งแต่ตอนนั้น\n\nผ่านมา 8 ปี สิ่งที่ยังทำให้ตื่นเต้นอยู่คือการได้เห็นงานที่คิดไว้ในหัว ออกไปอยู่บนหน้าจอจริงครบตามที่ตั้งใจ โดยเฉพาะจังหวะของ animation",
      items: [] }
  ]
};

export const BRAND: Record<Lang, string> = { en: "NinMangon", th: "นิลมังกร" };

// Portfolio copy and project narratives transcribed and edited from the supplied prototypes.
export const PORTFOLIO_COPY = {
  en: {
    nav: 'Portfolio', kicker: 'Selected work', title: 'Ideas, made tangible.',
    intro: 'A collection of websites, product interfaces and the decisions behind them. From understanding people to designing the details.',
    webTitle: 'From design to screen', webLabel: 'Web Design & Development',
    uxTitle: 'Behind the interface', uxLabel: 'UX Case Studies',
    webIntro: 'Website design and prototyping with Claude as part of the toolkit.',
    uxIntro: 'Research, structure and interaction. Four projects, four different challenges.',
    read: 'Explore project', back: 'All projects', profile: 'Profile', type: 'Platform', role: 'Responsibility', goal: 'The goal', next: 'Next project',
    contact: 'Have a project in mind?', contactText: 'Let’s talk about what we could build together.', cta: 'Get in touch',
    detailLabel: 'Design decisions', detailTitle: 'The thinking behind the work', image: 'Design preview',
  },
  th: {
    nav: 'ผลงาน', kicker: 'Selected work', title: 'จากความคิด สู่ชิ้นงาน',
    intro: 'รวมงานเว็บไซต์และการออกแบบผลิตภัณฑ์ พร้อมวิธีคิดเบื้องหลัง ตั้งแต่ทำความเข้าใจผู้ใช้จนถึงรายละเอียดบนหน้าจอ',
    webTitle: 'จากแบบ สู่หน้าจอ', webLabel: 'Web Design & Development',
    uxTitle: 'เบื้องหลังงานออกแบบ', uxLabel: 'UX Case Studies',
    webIntro: 'งานออกแบบเว็บไซต์และต้นแบบ โดยมี Claude เป็นหนึ่งในเครื่องมือที่ใช้ทำงาน',
    uxIntro: 'การค้นคว้า โครงสร้างข้อมูล และการใช้งาน ผ่านโจทย์ที่แตกต่างกันของ 4 โปรเจกต์',
    read: 'ดูรายละเอียด', back: 'ผลงานทั้งหมด', profile: 'หน้าแรก', type: 'แพลตฟอร์ม', role: 'หน้าที่รับผิดชอบ', goal: 'เป้าหมาย', next: 'ผลงานถัดไป',
    contact: 'มีโปรเจกต์ที่อยากชวนคุยไหม?', contactText: 'เริ่มต้นจากการพูดคุย แล้วมาสร้างงานดี ๆ ด้วยกัน', cta: 'ติดต่อพูดคุย',
    detailLabel: 'Design decisions', detailTitle: 'วิธีคิดเบื้องหลังชิ้นงาน', image: 'ภาพตัวอย่างงานออกแบบ',
  },
} satisfies Record<Lang, Record<string, string>>;

type ProjectText = { summary: string; goal: string; sections: { title: string; paragraphs: string[]; images?: string[] }[] };
export type PortfolioProject = {
  externalLink?: { href: string; label: Record<Lang, string> };
  slug: string; name: string; category: 'web' | 'ux'; platform: string; tags: string[];
  en: ProjectText; th: ProjectText;
};
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'peach', name: 'Peach & Co.', category: 'web', platform: 'Website', tags: ['UI Design', 'Development'],
    externalLink: { href: 'https://peachn.co/', label: { en: 'Visit live website', th: 'ดูเว็บไซต์จริง' } },
    en: { summary: 'A new website to introduce a new product line.', goal: 'Design and build a website to support the launch of a new product line.', sections: [{ title: 'From interface to implementation', paragraphs: ['Designed and built the new Peach & Co. website to support its product launch. The work covers both the visual interface and website development.'] }] },
    th: { summary: 'ออกแบบและพัฒนาเว็บไซต์ใหม่ รองรับการเปิดตัวสินค้าไลน์ใหม่', goal: 'สร้างเว็บไซต์เพื่อรองรับการเปิดตัวสินค้าไลน์ใหม่ของแบรนด์', sections: [{ title: 'ตั้งแต่งานออกแบบจนถึงการพัฒนา', paragraphs: ['ออกแบบและพัฒนาเว็บไซต์ Peach & Co. ใหม่เพื่อรองรับการเปิดตัวสินค้า ครอบคลุมทั้งหน้าตาของเว็บไซต์และการพัฒนาให้ใช้งานได้จริง'] }] },
  },
  {
    slug: 'taiwan-temple', name: 'Taiwan Temple', category: 'web', platform: 'Website prototype', tags: ['UI Design', 'Prototyping'],
    externalLink: { href: 'https://www.taiwantourism.org/th/land-of-blessings', label: { en: 'Visit live website', th: 'ดูเว็บไซต์จริง' } },
    en: { summary: 'A concept for planning meaningful temple visits across Taiwan.', goal: 'Prototype a temple-visiting guide to help travelers plan their route across Taiwan.', sections: [{ title: 'A concept for thoughtful travel', paragraphs: ['Designed a prototype for a Taiwan temple guide as a concept pitch. The idea helps travelers plan meaningful pilgrimages across the island.'] }] },
    th: { summary: 'ต้นแบบเว็บไซต์วางแผนเดินทางไหว้พระและเยี่ยมชมวัดในไต้หวัน', goal: 'ออกแบบต้นแบบคู่มือเยี่ยมชมวัด ช่วยนักเดินทางวางแผนเส้นทางในไต้หวัน', sections: [{ title: 'แนวคิดสำหรับการเดินทางที่มีความหมาย', paragraphs: ['ออกแบบต้นแบบเว็บไซต์แนะนำวัดในไต้หวันเพื่อเสนอแนวคิด ช่วยให้นักเดินทางวางแผนเส้นทางไหว้พระทั่วเกาะ ผลงานนี้อยู่ในรูปแบบต้นแบบสำหรับนำเสนอแนวคิด'] }] },
  },
  {
    slug: 'sabuywedding', name: 'SabuyWedding', category: 'web', platform: 'Website', tags: ['UI Design', 'Brand Identity'],
    externalLink: { href: 'https://bew-portfolio-revamp-sabuywedding.netlify.app/', label: { en: 'Preview the new brand design', th: 'ดูตัวอย่างดีไซน์ตาม CI ใหม่' } },
    en: { summary: 'A refreshed English website for a new chapter of the wedding brand.', goal: 'Redesign the English website around the updated Brand Book.', sections: [{ title: 'Bringing the brand to the website', paragraphs: ['Redesigned the English version of SabuyWedding’s website, applying the refreshed visual identity from its updated Brand Book. The supplied design presents the venue search experience across desktop and mobile.'] }] },
    th: { summary: 'ปรับโฉมเว็บไซต์ภาษาอังกฤษ ให้สอดคล้องกับภาพลักษณ์ใหม่ของแบรนด์งานแต่งงาน', goal: 'ออกแบบเว็บไซต์ภาษาอังกฤษใหม่ตาม Brand Book ที่ปรับปรุงแล้ว', sections: [{ title: 'ถ่ายทอดแบรนด์ผ่านเว็บไซต์', paragraphs: ['ออกแบบเว็บไซต์ SabuyWedding เวอร์ชันภาษาอังกฤษใหม่ โดยใช้ภาพลักษณ์จาก Brand Book ฉบับปรับปรุง ภาพผลงานแสดงประสบการณ์ค้นหาสถานที่จัดงานทั้งบนเดสก์ท็อปและมือถือ'] }] },
  },
  {
    slug: 'tpass', name: 'TPASS', category: 'ux', platform: 'Website · Application · Back Office', tags: ['Wireframing', 'Prototyping', 'Usability Testing'],
    en: { summary: 'Making a travel pass easier to understand, use and explore.', goal: 'Help international visitors understand and use a single pass for attractions and restaurants in Thailand, with a back office for staff to manage the service.', sections: [
      { title: 'One pass, one card', paragraphs: ['Usability testing revealed that people struggled to recognize the small images and white icons as other passes they had purchased. The original concept treated purchases as privileges or stamps added to one card.', 'Redesigned the interface so each pass appears as a separate card, matching the familiar idea of one ticket per card. The decision draws on real-world conventions, visible system status and consistency.'], images: ['tpass-before', 'tpass-after'] },
      { title: 'Start with the places people want to visit', paragraphs: ['The benefits list was long and scattered. A separate shops view mixed storefront photos and logos, without clearly showing what each place offered.', 'Restructured the information architecture around categorized shops so people can focus on relevant benefits. Worked with the operations team to replace inconsistent images with pictures that communicate the experience, such as Thai food or a museum.'], images: ['tpass-benefits', 'tpass-shops'] },
    ] },
    th: { summary: 'ทำให้พาสท่องเที่ยวเข้าใจง่าย ทั้งการเลือกใช้และค้นหาสิทธิประโยชน์', goal: 'ช่วยนักท่องเที่ยวต่างชาติเข้าใจและใช้พาสเข้าชมสถานที่หรือร้านอาหารในไทย พร้อมระบบหลังบ้านให้ทีมงานจัดการข้อมูล', sections: [
      { title: 'หนึ่งพาส หนึ่งบัตร', paragraphs: ['การทดสอบพบว่าผู้ใช้ต้องใช้ความพยายามในการเข้าใจว่ารูปเล็กและไอคอนสีขาวคือพาสอื่นที่ซื้อไว้ แนวคิดเดิมมองการซื้อพาสเหมือนเพิ่มสิทธิหรือสะสมตราประทับลงในบัตรใบเดียว', 'ออกแบบใหม่ให้แต่ละพาสเป็นบัตรแยกกัน สอดคล้องกับความเข้าใจที่คุ้นเคยว่า “หนึ่งบัตรเท่ากับหนึ่งตั๋ว” โดยอิงหลักการเชื่อมโยงกับโลกจริง การแสดงสถานะ และความสม่ำเสมอของระบบ'], images: ['tpass-before', 'tpass-after'] },
      { title: 'เริ่มค้นหาจากสถานที่ที่สนใจ', paragraphs: ['รายการสิทธิประโยชน์เดิมยาวและกระจัดกระจาย ส่วนหน้าร้านค้าใช้ทั้งรูปหน้าร้านและโลโก้ปะปนกัน ผู้ใช้จึงไม่รู้ว่าแต่ละร้านมีอะไรให้บ้าง', 'ปรับโครงสร้างข้อมูลให้เริ่มจากร้านค้าและแบ่งหมวดหมู่ชัดเจน ช่วยให้เลือกดูสิทธิที่สนใจได้ พร้อมทำงานกับทีมปฏิบัติการให้เปลี่ยนรูปเป็นภาพที่บอกได้ทันทีว่าจะพบอะไร เช่น อาหารไทยหรือพิพิธภัณฑ์'], images: ['tpass-benefits', 'tpass-shops'] },
    ] },
  },
  {
    slug: 'impcamp', name: 'IMPCAMP', category: 'ux', platform: 'Website · Back Office', tags: ['Wireframing'],
    en: { summary: 'Connecting learning paths, online lessons and content management.', goal: 'Design a learning platform for people pursuing IT careers, alongside a back office that makes content and data manageable for administrators.', sections: [
      { title: 'A learning path that can actually be built', paragraphs: ['The learning path needed to communicate the journey at a glance while letting learners explore each step. The challenge was keeping implementation manageable.', 'Used Figma Auto Layout to organize the path into rows and columns. Reusable connector patterns support dynamic data and give developers a clear structure to implement.'], images: ['impcamp-path'] },
      { title: 'Keep learners oriented', paragraphs: ['Made course progress visible and separated lessons from supporting materials in the navigation. Familiar learning-platform conventions help users understand how to move through the course.', 'The design applies visibility of system status, user control and consistency, along with reduced memory load and grouping by proximity, common region and similarity.'], images: ['impcamp-learning'] },
      { title: 'Bring structure to complex forms', paragraphs: ['The back office needed to cover many cases and complex forms. Applied Gestalt grouping principles to organize related inputs and make the relationships between fields easier to understand.'], images: ['impcamp-admin'] },
    ] },
    th: { summary: 'เชื่อมเส้นทางการเรียน บทเรียนออนไลน์ และการจัดการเนื้อหาเข้าด้วยกัน', goal: 'ออกแบบแพลตฟอร์มเรียนรู้สำหรับผู้ที่อยากทำงานสาย IT พร้อมระบบหลังบ้านให้ผู้ดูแลจัดการเนื้อหาและข้อมูลได้สะดวก', sections: [
      { title: 'เส้นทางการเรียนที่พัฒนาต่อได้จริง', paragraphs: ['Learning Path ต้องเห็นภาพรวมได้ทันทีและกดสำรวจข้อมูลแต่ละจุดได้ ความท้าทายคือออกแบบให้การพัฒนาไม่ซับซ้อนเกินไป', 'ใช้ Auto Layout ใน Figma จัดโครงสร้างเป็นแถวและคอลัมน์ พร้อมสร้างรูปแบบจุดเชื่อมต่อที่ใช้ซ้ำได้ เพื่อรองรับข้อมูลที่เปลี่ยนแปลงและให้ทีมพัฒนานำไปใช้งานต่อได้ชัดเจน'], images: ['impcamp-path'] },
      { title: 'ให้ผู้เรียนรู้เสมอว่าอยู่ตรงไหน', paragraphs: ['แสดงความคืบหน้าของคอร์ส แยกหมวดบทเรียนและเอกสารประกอบในเมนู และใช้รูปแบบที่ผู้ใช้คุ้นเคยจากแพลตฟอร์มการเรียนอื่น', 'อิงหลักการแสดงสถานะ การควบคุมของผู้ใช้ และความสม่ำเสมอ ลดภาระการจดจำ พร้อมจัดกลุ่มด้วยระยะห่าง พื้นที่ร่วม และความคล้ายคลึงกัน'], images: ['impcamp-learning'] },
      { title: 'จัดระเบียบฟอร์มที่ซับซ้อน', paragraphs: ['ระบบหลังบ้านมีหลายกรณีที่ต้องรองรับและฟอร์มที่ซับซ้อน จึงใช้หลัก Gestalt จัดกลุ่มช่องกรอกที่เกี่ยวข้องกัน ทำให้เข้าใจความสัมพันธ์ของข้อมูลได้ง่ายขึ้น'], images: ['impcamp-admin'] },
    ] },
  },
  {
    slug: 'newtrition', name: 'Newtrition', category: 'ux', platform: 'Website · Mobile First', tags: ['Wireframing'],
    en: { summary: 'Turning a long health questionnaire into a more approachable journey.', goal: 'Make a health questionnaire easier and more motivating to complete so users can reach personalized supplement recommendations.', sections: [
      { title: 'Make a big task feel smaller', paragraphs: ['Grouped the long questionnaire into clear subcategories and added estimated completion times. Visible progress helps users understand how much they have completed.', 'Used ChatGPT to explore motivation ideas, including showing an example of the eventual result so users can understand the value of finishing.'], images: ['newtrition-questions'] },
      { title: 'Make progress tangible', paragraphs: ['A teammate proposed a body that turns gold as each section is completed. Developed that idea into a visual progress system: corresponding parts of the body gradually become gold.', 'The concept draws on the Goal-Gradient Effect, using visible progress toward completion to encourage users to continue. This is the design rationale, not a measured completion-rate result.'], images: ['newtrition-progress'] },
    ] },
    th: { summary: 'เปลี่ยนแบบสอบถามสุขภาพที่ยาว ให้เป็นขั้นตอนที่น่าเริ่มและอยากทำต่อ', goal: 'ออกแบบแบบสอบถามสุขภาพให้ทำได้ง่าย ลดความรู้สึกท้อ และสร้างแรงจูงใจให้ตอบจนจบเพื่อรับคำแนะนำผลิตภัณฑ์เสริมอาหารเฉพาะบุคคล', sections: [
      { title: 'แบ่งงานใหญ่ให้เริ่มได้ง่าย', paragraphs: ['แบ่งคำถามจำนวนมากเป็นหมวดหมู่ย่อย พร้อมระบุเวลาที่คาดว่าจะใช้ในแต่ละหมวด และแสดงความคืบหน้าให้รู้ว่าตอบไปแล้วเท่าไร', 'ใช้ ChatGPT สำรวจแนวคิดสร้างแรงจูงใจ รวมถึงการแสดงตัวอย่างผลลัพธ์ที่จะได้รับ เพื่อให้เห็นคุณค่าของการตอบจนจบ'], images: ['newtrition-questions'] },
      { title: 'ทำให้ความคืบหน้ามองเห็นได้', paragraphs: ['เพื่อนร่วมทีมเสนอแนวคิดร่างกายที่ค่อย ๆ เปลี่ยนเป็นสีทอง จึงนำมาพัฒนาเป็นระบบแสดงความคืบหน้า โดยส่วนต่าง ๆ ของร่างกายจะเปลี่ยนเป็นสีทองเมื่อตอบคำถามหมวดนั้นเสร็จ', 'แนวคิดอิง Goal-Gradient Effect ใช้ภาพความคืบหน้าไปสู่เป้าหมายเพื่อกระตุ้นให้อยากทำต่อ เป็นเหตุผลในการออกแบบ ยังไม่ได้ระบุผลวัดอัตราการตอบจนจบ'], images: ['newtrition-progress'] },
    ] },
  },
  {
    slug: 'club-horo', name: 'Club Horo', category: 'ux', platform: 'Application', tags: ['User Research', 'Empathy Mapping', 'User Personas'],
    en: { summary: 'Understanding both sides of a fortune-telling platform.', goal: 'Understand clients and fortune tellers to design features that address the needs of both groups.', sections: [
      { title: 'Start with focused hypotheses', paragraphs: ['Led the team through empathy mapping for clients and fortune tellers. Exploring both perspectives established focused hypotheses and assumptions before interviews, rather than beginning research without a clear direction.'], images: ['club-horo-map'] },
      { title: 'Listen to both sides', paragraphs: ['Clients often seek readings when they have unresolved concerns, discover readers through friends or relatives, and return to readers they trust. Interviewees were mostly women. Interests extended beyond love, work and finances to homes and feng shui.', 'Distance, unclear availability and difficulties recording or revisiting sessions created friction for clients.', 'Readers struggled with competing appointment requests, rescheduling, cancellations and unpaid online sessions. Clients also asked about past readings that readers could no longer recall.', 'Free sessions helped attract new clients. Anxious clients tended to ask about relationships; those willing to wait often asked about careers or business. Many tarot readers also collected decks as a hobby.'] },
      { title: 'Let user needs define the product', paragraphs: ['Synthesized interviews into personas for both audiences, then used their needs and pain points to guide features. The key learning was that understanding users gives the product a concrete direction and keeps it focused on meaningful problems.'], images: ['club-horo-personas'] },
    ] },
    th: { summary: 'ทำความเข้าใจทั้งผู้รับคำปรึกษาและหมอดู ก่อนออกแบบแพลตฟอร์มเชื่อมทั้งสองฝ่าย', goal: 'ศึกษาความต้องการของผู้สนใจดูดวงและหมอดู เพื่อนำข้อมูลมาออกแบบฟีเจอร์ที่ตอบโจทย์ทั้งสองกลุ่ม', sections: [
      { title: 'เริ่มจากสมมติฐานที่ชัดเจน', paragraphs: ['นำทีมทำ Empathy Map เพื่อมองจากทั้งฝั่งผู้สนใจดูดวงและหมอดู ช่วยให้ตั้งสมมติฐานและประเด็นที่จะศึกษาก่อนสัมภาษณ์ แทนการเริ่มถามโดยยังไม่มีทิศทาง'], images: ['club-horo-map'] },
      { title: 'รับฟังจากทั้งสองฝั่ง', paragraphs: ['ผู้รับคำปรึกษามักมาดูดวงเมื่อมีเรื่องค้างคาใจ รู้จักหมอดูผ่านเพื่อนหรือญาติ และกลับไปหาคนที่เชื่อถือ ผู้ให้สัมภาษณ์ส่วนใหญ่เป็นผู้หญิง นอกจากความรัก งาน และการเงิน ยังสนใจเรื่องบ้านและฮวงจุ้ย', 'ปัญหาที่พบคือระยะทางไกล ไม่รู้ตารางว่าง และจดบันทึกหรือย้อนดูคำทำนายได้ยาก', 'ฝั่งหมอดูจัดการนัดที่เข้ามาพร้อมกันได้ลำบาก มีการเลื่อนหรือยกเลิกนัด และบางครั้งไม่ได้รับเงินหลังดูดวงออนไลน์ รวมถึงจำรายละเอียดคำทำนายเก่าที่ลูกค้ากลับมาถามไม่ได้', 'การดูฟรีช่วยดึงดูดลูกค้าใหม่ ผู้ที่กังวลมักถามเรื่องความรัก ส่วนผู้ที่รอได้มักถามเรื่องงานหรือธุรกิจ และหมอดูไพ่ทาโรต์หลายคนชอบสะสมสำรับไพ่เป็นงานอดิเรก'] },
      { title: 'ให้ความต้องการผู้ใช้กำหนดทิศทาง', paragraphs: ['นำข้อมูลสัมภาษณ์มาสร้าง Persona ของทั้งสองกลุ่ม แล้วใช้ความต้องการและปัญหาที่พบเป็นแนวทางพัฒนาฟีเจอร์ บทเรียนสำคัญคือการเข้าใจผู้ใช้ช่วยให้เป้าหมายของผลิตภัณฑ์ชัดเจนและไม่หลุดจากปัญหาที่ควรแก้'], images: ['club-horo-personas'] },
    ] },
  },
];
