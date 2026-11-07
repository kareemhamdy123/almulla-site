# Almulla Consultant — Website Files

## File Structure
```
almulla-site/
  index.html        ← الصفحة الكاملة (تجمع كل الملفات)
  styles.css        ← كل الـ CSS و الألوان
  logo.js           ← اللوجو كـ base64 data URI
  main.js           ← JavaScript (tabs, filter, form)
  nav.html          ← شريط التنقل
  hero.html         ← القسم الرئيسي
  about.html        ← من نحن + التاريخ + الرسالة + القيم
  services.html     ← الخدمات
  projects.html     ← المشاريع + القطاعات
  clients.html      ← العملاء
  contact.html      ← تواصل معنا
  footer.html       ← الفوتر
```

## للاستخدام الآن
افتح `index.html` في المتصفح مباشرة — يشتغل بدون سيرفر.

## للربط بـ Backend
- **Flask/Jinja2:** استخدم `{% include 'nav.html' %}` إلخ
- **Node/Express + EJS:** استخدم `<%- include('nav') %>`
- **Django:** استخدم `{% include 'nav.html' %}`
- **React:** حوّل كل ملف لـ `.jsx` component

## الألوان (من اللوجو)
| Variable       | Value    | الاستخدام        |
|---------------|----------|-----------------|
| --navy        | #12263f  | خلفية رئيسية    |
| --navy-mid    | #1b2f47  | خلفية ثانوية    |
| --blue        | #1f4068  | sections بديلة  |
| --accent      | #3a8db5  | لون مميز        |
| --accent-light| #5aadd4  | hover           |
| --steel-light | #7ab8d4  | نصوص ثانوية     |
