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
