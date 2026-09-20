# CLAUDE.md

เว็บไซต์ profile / portfolio ส่วนตัว สองภาษา (EN / TH) สร้างด้วย Astro

---

## Context & Goals — อ่านก่อนตัดสินใจเรื่องคำหรือ UI

เว็บนี้คือพอร์ตโฟลิโอที่ใช้สมัครงานจริง ไม่ใช่โปรเจคทดลอง
ทุกการตัดสินใจให้ชั่งจากคำถามเดียว: **"recruiter ที่มีเวลาอ่าน 20 วินาที จะได้อะไรกลับไป"**

**คนอ่าน (เรียงตามความสำคัญ)**

1. Recruiter / HR — สแกนเร็ว มองหา keyword และชื่อตำแหน่ง
2. Hiring manager สาย Design/Product — อ่านลึกกว่า ดูวิธีคิด
3. ระบบ ATS — อ่านเฉพาะข้อความ ไม่เห็นภาพ ไม่เห็น animation

**ตำแหน่งที่เล็ง**: UX/UI Designer เป็นหลัก และ Product Owner / BA เป็นทางรอง

**จุดขายที่ต้องเห็นภายใน 5 วินาทีแรก**: พื้นฐาน Front-End + ประสบการณ์ 8 ปี = ออกแบบโดยเข้าใจข้อจำกัดการ implement และส่งมอบถึงระดับโค้ดได้

**สิ่งที่ต้องระวังเป็นพิเศษ**

- ฝั่ง EN จะถูกอ่านโดยองค์กรต่างชาติ — ต้องเป็นภาษาอังกฤษที่เจ้าของภาษาอ่านแล้วไม่สะดุด
- ห้ามใส่ effect หรือ animation ที่ทำให้ข้อความอ่านยากหรือโหลดช้า **ความอ่านง่ายมาก่อนความสวยเสมอ**
- ห้ามใส่เงินเดือน สถานะการหางาน หรือชื่อบริษัทปัจจุบันลงในเว็บ

---

## Dev server — อ่านก่อนรันคำสั่งใด ๆ

**ฉันรัน `npm run dev` ไว้เองใน VSCode ตลอดเวลา**

- ❌ **ห้ามรัน `npm run dev`** ไม่ว่ากรณีใด จะชนพอร์ต 4321 ที่ฉันเปิดอยู่
- ❌ **ห้ามรัน `npm run build` หรือ `npm run preview`** หลังแก้ไฟล์ เสียเวลาโดยไม่จำเป็น
  Astro มี HMR อยู่แล้ว แก้ไฟล์เสร็จฉันเห็นผลทันทีในเบราว์เซอร์
- ✅ แก้ไฟล์เสร็จแล้ว **บอกฉันว่าแก้อะไรไปบ้าง แล้วจบ** ฉันจะไปดูผลเอง

### ข้อยกเว้น — รันได้เมื่อฉันสั่งเท่านั้น

- `npx astro check` — ถ้าฉันขอให้ตรวจ type (ไม่เปิด server ไม่ชนกับ dev ที่รันอยู่)
- `npm run build` — ถ้าฉันขอให้ตรวจว่า build ผ่านก่อน deploy

### กรณีที่ต้องเตือนฉัน

ถ้าแก้ `astro.config.mjs`, `tsconfig.json`, `package.json` หรือติดตั้ง dependency ใหม่
→ **HMR ไม่ครอบคลุม** ให้บอกฉันว่า "ต้อง restart dev server" ฉันจะกดเอง (อย่ากดแทน)

---

## Git — ห้าม commit/push เองโดยไม่ได้รับคำสั่งทุกครั้ง

- **ห้าม `git commit` และห้าม `git push` เองเด็ดขาด เว้นแต่ฉันสั่งให้ทำในข้อความนั้น ๆ โดยตรง**
- แก้โค้ดเสร็จแล้ว **หยุดแค่นั้น** บอกว่าแก้อะไรไปบ้าง แล้วรอฉันสั่ง "commit" หรือ "push" เอง — การที่ฉันเคยให้ push ไปแล้วครั้งหนึ่ง **ไม่ได้แปลว่าอนุญาตให้ทำต่อเองในครั้งถัดไป** ต้องขอทุกครั้ง
- repo: `https://github.com/ninmangon-bew/ninmangon-profile` (branch `master`)

---

## Commands (อ้างอิง — ดูกฎด้านบนก่อนรัน)

```bash
npm run dev        # dev server ที่ localhost:4321 — ฉันรันเอง อย่ารัน
npm run build      # build ไป dist/ — รันเมื่อสั่งเท่านั้น
npm run preview    # preview ตัวที่ build แล้ว — รันเมื่อสั่งเท่านั้น
npx astro check    # type-check ไฟล์ .astro — รันเมื่อสั่งเท่านั้น
```

**ไม่มี ESLint / Prettier ในโปรเจคนี้** — อย่าเรียก `npm run lint` และอย่าติดตั้ง linter เพิ่มโดยไม่ถาม
ถ้าจะตรวจงานก่อนส่ง ให้ใช้ `npx astro check` แทน

---

## Stack

- **Astro 7.2.4** — static output, ไม่มี React / Vue / Svelte
- **Vite** (มากับ Astro)
- **npm** (มี `package-lock.json` — อย่าใช้ pnpm / yarn)
- **TypeScript strict mode**
- ไม่มี Tailwind, ไม่มี CMS, ไม่มี i18n framework

> อย่าเสนอหรือติดตั้ง framework/library เพิ่มโดยไม่ถามก่อน โปรเจคนี้ตั้งใจให้เบาและ dependency น้อย

---

## Structure

```
src/
├── assets/images/      # รูปทั้งหมด โหลดผ่าน astro:assets
├── components/         # 7 ไฟล์ .astro — ไม่มีข้อความ hard-code เอง ดึงจาก copy.ts
├── content/
│   ├── copy.ts         # ⭐ ข้อความเกือบทั้งหมดของเว็บ อยู่ที่นี่ที่เดียว
│   └── elementImages.ts
├── layouts/Layout.astro
├── pages/
│   ├── index.astro     # EN (canonical, root)
│   └── th/index.astro  # TH
├── scripts/            # motion.ts (GSAP/Lenis), theme-toggle.ts
└── styles/global.css   # CSS ไฟล์เดียวรวมทั้งเว็บ

docs/CONTENT_CONVENTIONS.md   # source of truth ด้านคำ TH/EN
```

---

## i18n — อ่านให้ครบก่อนแก้ข้อความ

ระบบสองภาษาทำมือทั้งหมด ไม่มี library:

- **แยกเป็นคนละหน้า**: `/` = EN, `/th/` = TH (ไม่ใช่ query param)
- **ข้อความทั้งหมดอยู่ที่ `src/content/copy.ts`** เป็น `COPY: Record<"en"|"th", Copy>`
  component ดึงผ่าน `COPY[lang]`
- ข้อมูลธาตุอยู่ที่ `ELEMENTS: Record<"en"|"th", Element[]>` ในไฟล์เดียวกัน

### กฎเวลาแก้ข้อความ

1. **แก้ที่ `copy.ts` เท่านั้น** ห้าม hard-code ข้อความลงใน `.astro` component
2. **แก้ `en` กับ `th` พร้อมกันเสมอ** ห้ามแก้ข้างเดียวแล้วทิ้งอีกข้างไว้
3. **`<title>` และ `<meta description>` ไม่ได้อยู่ใน `copy.ts`** — hard-code แยกอยู่ในแต่ละ page
   ถ้าแก้ hero/headline ต้องไปแก้ meta ของทั้งสองหน้าให้สอดคล้องด้วย
4. ข้อยกเว้นที่ hard-code ได้ (ปล่อยไว้ ไม่ต้องย้าย): ปุ่ม `EN`/`TH` ใน `Header.astro`, ไอคอน `☀`/`☾` ใน `theme-toggle.ts`, `alt=""` ของรูปตกแต่ง

---

## Content & Copy

**เอกสารกำหนดเรื่องคำทั้งหมดอยู่ที่ `docs/CONTENT_CONVENTIONS.md`**
ก่อนเขียนหรือแก้ข้อความที่แสดงผลบนหน้าเว็บ (ทั้ง TH และ EN) ให้เปิดอ่านไฟล์นั้นก่อนเสมอ

### Hard rules — ห้ามฝ่าฝืนแม้จะยังไม่ได้เปิดอ่านไฟล์เต็ม

- TH กับ EN **ไม่แปลตรงตัวข้ามภาษา** แต่ละภาษาใช้คำที่เป็นธรรมชาติของภาษานั้น
- **ห้ามใส่คำว่า "AI" ใน headline หรือ hero**
- **ห้ามเปลี่ยนคำใน Four Pillars** (ไฟในใจ / ฝีมือ / ลื่นไหล / ชั่วโมงบิน) โดยไม่ได้รับอนุญาต
- **ห้ามใช้คำที่อยู่ในตาราง deprecated** ของเอกสารนั้น
- แก้ copy **ทีละ section และแสดง diff ให้ดูก่อน** ห้ามรีไรต์ทั้งหน้ารวดเดียว
- ห้าม "ปรับให้ลื่นขึ้น" ข้อความที่ล็อกไว้แล้ว โดยไม่ได้สั่ง
- **ชื่อแบรนด์ภาษาอังกฤษต้องสะกด "NinMangon" เป๊ะ ๆ เท่านั้น** (N ใหญ่, M ใหญ่ ตัวอื่นเล็กหมด) — ห้าม "NINMANGON" หรือ "ninmangon" ในเนื้อหาที่คนเห็นด้วยตา (heading, logo text, alt text ของรูป ฯลฯ) กฎนี้ใช้เฉพาะเนื้อหาที่แสดงผล ไม่รวม path ไฟล์ภาพหรือ metadata ที่เครื่องอ่าน (เช่น JSON-LD)

### สถานะปัจจุบัน

`copy.ts` **ยังไม่ตรงกับเอกสาร** (เอกสารเขียนทีหลัง) — เมื่อทั้งสองขัดกัน **เอกสารถูก โค้ดต้องตามเอกสาร**
ห้ามแก้เอกสารให้ตรงกับโค้ด ให้ทำกลับกัน และรอคำสั่งก่อนซิงก์

---

## Styling

- CSS ธรรมดาไฟล์เดียวที่ `src/styles/global.css` — ไม่มี CSS Modules / Tailwind / styled-components
- ใช้ **CSS Custom Properties เป็น design token** (`--bg`, `--ink`, `--gold`, `--fire`, `--earth`, `--water`, `--wind`)
- dark/light สลับผ่าน `[data-theme]` attribute บน `<html>`
- Font: self-host ผ่าน Fontsource (Noto Serif Thai, IBM Plex Sans Thai)
  - **เนื้อหา** (body text, ค่าเริ่มต้นจาก `body{}`) ใช้ **Noto Serif Thai** (อักษรมีหัว)
  - **หัวข้อ** (h1/h2, hero title/role, section title, timeline year ฯลฯ) ใช้ **IBM Plex Sans Thai** (อักษรไม่มีหัว)
  - ห้ามสลับคู่นี้กลับโดยไม่ได้รับอนุญาต

**กฎ**: ใช้ token ที่มีอยู่เสมอ ห้ามใส่ hex code ตรง ๆ ใน component
ถ้าต้องการสีใหม่ ให้เพิ่มเป็น token ก่อน แล้วค่อยเรียกใช้

---

## Images

- โหลดผ่าน `astro:assets` เท่านั้น (import จาก `src/assets/images/`) ห้ามอ้าง path ตรงจาก `public/`
- `public/` เก็บแค่ favicon

---

## SEO / Analytics / Deploy

- `src/pages/sitemap.xml.ts` และ `src/pages/robots.txt.ts` — hand-rolled (ไม่ใช้ `@astrojs/sitemap`) ดึงโดเมนจาก `astro.config.mjs` ตรง ๆ เปลี่ยนโดเมนที่เดียวพอ
- Google Analytics: ตั้งค่า `PUBLIC_GA_MEASUREMENT_ID` ใน `.env` (ดู `.env.example`) — ไม่ตั้งค่า = ไม่มี script GA ฝังเลย
- Paper background textures (`darkpaper-*`/`paper-*`) เป็น `.webp` ไม่ใช่ `.png` แล้ว (แปลงเพื่อลด payload จาก ~11MB เหลือ ~2MB) — ถ้าเพิ่มพื้นผิวใหม่แบบนี้ ให้แปลงเป็น webp ก่อน ไม่ใช่ใช้ png ตรง ๆ ใน `url()`
