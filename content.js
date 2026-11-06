// All site copy lives here — plain data, no JSX. Source of truth for facts is
// the resume (assets/frank-lam-resume.pdf); keep the two in sync.
// In bullet/summary strings, **double asterisks** render as bold.
window.SITE = {
  ownerName: 'Frank Lam',
  siteUrl: 'https://www.franklam.us',

  navLinks: [
    { label: 'Home', href: '/', key: 'home' },
    { label: 'Projects', href: '/projects', key: 'projects' },
    { label: 'Experience', href: '/experience', key: 'experience' },
    { label: 'Contact', href: '/contact', key: 'contact' },
  ],

  contactLinks: [
    { label: 'Resume', href: '/assets/frank-lam-resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/franklam2008' },
    { label: 'Email', href: 'mailto:franklam2008@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/frank-lam-010a9253' },
  ],

  hero: {
    eyebrow: 'Software developer — Henderson, Nevada',
    title: 'I build practical software for real problems.',
    subtitle:
      "I'm a software developer with 8 years of experience, more than 5 of them at Carnegie Learning building K-12 education platforms. I build products end to end, from Angular micro-frontends to Node.js and AWS Lambda services, and use AI-assisted, spec-driven development to ship large features quickly.",
  },

  stats: [
    { value: '8', label: 'years building software' },
    { value: '5+', label: 'years at Carnegie Learning' },
    { value: '20,000+', label: 'teachers on the platforms' },
    { value: '1,000+', label: 'K-12 schools' },
  ],

  homeIntro:
    "At Carnegie Learning I helped the team adopt AI-assisted, spec-driven development with Kiro and Claude. We keep feature documentation in sync with the code, so AI can make large changes quickly and reliably.",

  featuredProjectTitles: ['Class Management Tool', 'Supportal', 'Analytics Hub'],

  // group: 'work' (jobs) or 'side' (personal projects). meta shows above the title.
  // summary is the short version used on the home page cards; text is the full one.
  projects: [
    {
      group: 'work',
      title: 'Class Management Tool',
      summary: 'An Angular micro-frontend embedded in 3 Carnegie Learning applications, used by thousands of teachers and administrators.',
      meta: 'Carnegie Learning · 2021–present',
      tags: ['Angular', 'Module Federation', 'NgRx', 'RxJS'],
      text: 'An Angular micro-frontend embedded in 3 Carnegie Learning applications. Teachers and administrators use it to create classes, roster students and assign licensed content through license-aware course trees. I led it and built it on my own.',
      links: [],
    },
    {
      group: 'work',
      title: 'Supportal',
      summary: "The front end of Carnegie Learning's identity platform, used by a 50+ person support team across 1,000+ schools.",
      meta: 'Carnegie Learning · 2021–present',
      tags: ['Identity platform', 'Internal tool'],
      text: "The front end of Carnegie Learning's identity platform, built from the ground up. A 50+ person support team uses it to manage users, schools, districts and licenses for 1,000+ K-12 schools using MATHia and Passport.",
      links: [],
    },
    {
      group: 'work',
      title: 'Analytics Hub',
      summary: 'A reporting app with KPI dashboards for assignments, scores and activity. Kickoff in June, launch in November 2026.',
      meta: 'Carnegie Learning · 2026',
      tags: ['Reporting', 'Dashboards'],
      text: 'A reporting app with KPI dashboards for assignments, scores and activity at the district, school, class and student levels. Helped deliver it from kickoff in June to launch in November 2026.',
      links: [],
    },
    {
      group: 'work',
      title: 'Huntington Bank BAO',
      meta: 'Capco · 2020–2021',
      tags: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Jest'],
      text: "A multi-step flow where business owners answer questions about their company to open an account online. Built reusable components, managed state with NgRx and RxJS, and raised unit test coverage from 11% to 80% with Jest.",
      links: [{ label: 'Live Site', href: 'https://apply.huntington.com/new/business/welcome?product=PT' }],
    },
    {
      group: 'work',
      title: 'Wholesale Tradelines',
      meta: 'Web developer · 2019–2020',
      tags: ['WordPress', 'PHP'],
      text: "An e-commerce site I built and ran, which generated over $100,000 in sales. Connected GetResponse and Pipedrive for a 10+ person sales team, and cut support response time from 3 days to 1 by rolling out Zendesk.",
      links: [{ label: 'Showcase', href: '/assets/projects/business-ecommerce.png' }],
    },
    {
      group: 'side',
      title: 'this.Portfolio',
      meta: 'franklam.us',
      tags: ['React', 'Claude', 'Vercel'],
      text: 'This site. I generated the design system with Claude, built it with AI-assisted coding and deployed it on Vercel. Warm neutral palette, JetBrains Mono throughout, a small custom component set.',
      links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/Portfolio-redesign-request' }],
    },
    {
      group: 'side',
      title: 'Node.js API',
      tags: ['Node', 'Express', 'MongoDB'],
      text: 'An API that sends incoming requests on to Airtable, Twilio and SendGrid, and scrapes data from other sites with Puppeteer.',
      links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/WebScrapingAPI' }],
    },
    {
      group: 'side',
      title: 'Professional Banking Dashboard',
      tags: ['React', 'Redux', 'Material UI'],
      text: 'A banking dashboard UI built with React and Redux, styled with Material UI.',
      links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/banking-dashboard' }],
    },
    {
      group: 'side',
      title: 'Media Application',
      tags: ['React', 'Firebase', 'Bootstrap'],
      text: 'A media-focused single-page app with Firebase authentication and a custom Bootstrap UI.',
      links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/Media-Application' }],
    },
  ],

  experience: [
    {
      role: 'Software Developer',
      company: 'Carnegie Learning',
      dates: 'Jan 2021 – Present',
      note: 'Promoted within first year (2021)',
      bullets: [
        "**Led and built the Class Management Tool** on my own: an Angular micro-frontend (Module Federation) embedded in **3 Carnegie Learning applications**. **Thousands of teachers and administrators** use it to create classes, roster students and assign licensed content through license-aware course trees.",
        "**Built Supportal from the ground up**, the front end of the company's identity platform. A **50+ person support team** uses it to manage users, schools, districts and licenses for **1,000+ K-12 schools** using MATHia and Passport.",
        "**Helped deliver Analytics Hub** from kickoff in June to launch in November 2026. It's a reporting app with KPI dashboards for assignments, scores and activity at the district, school, class and student levels.",
        "**Helped the team adopt AI-assisted, spec-driven development** (Kiro, Claude). We kept feature documentation in sync with the code so AI could make large changes quickly and reliably, which was key to hitting the Analytics Hub deadline.",
        "**Developed backend services** with Node.js and AWS Lambda, and wrote data migration scripts for the core platform team.",
      ],
    },
    {
      role: 'Consultant – Web Developer',
      company: 'Capco (client: Huntington Bank)',
      dates: 'Apr 2020 – Jan 2021',
      bullets: [
        "**Helped build Huntington Bank's Business Online Account Opening (BAO) flow**, a multi-step application where business owners answer questions about their company to open an account online, in an Agile Scrum team.",
        'Built reusable Angular components in TypeScript and managed state across the flow with NgRx and RxJS.',
        'Raised unit test coverage **from 11% to 80%** with Jest, stabilizing releases.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Wholesale Tradelines',
      dates: 'Mar 2019 – Feb 2020',
      bullets: [
        "Built and ran the company's e-commerce site, which generated **$100,000+ in sales**, and connected the email marketing and sales tools (GetResponse, Pipedrive) used by a **10+ person sales team**.",
        'Cut customer support response time **from 3 days to 1** by rolling out Zendesk.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Freelance',
      dates: 'Nov 2018 – Apr 2019',
      bullets: ['Gathered requirements from clients, then designed and built custom websites.'],
    },
    {
      role: 'Professional Photographer',
      company: 'Multivista',
      dates: 'Jul 2016 – Apr 2018',
      bullets: [],
    },
  ],

  education: [
    { school: 'University of Florida', degree: 'B.S. in Mechanical Engineering', date: 'May 2015' },
    { school: 'College of Central Florida', degree: 'A.S. in Engineering', date: 'May 2012' },
  ],

  skillSections: [
    { title: 'Languages', skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS/SCSS'] },
    { title: 'Frontend', skills: ['Angular (standalone, signals)', 'React', 'NgRx', 'RxJS', 'Module Federation', 'Tailwind CSS'] },
    { title: 'Backend & cloud', skills: ['Node.js', 'Express', 'AWS Lambda', 'Firebase', 'MongoDB'] },
    { title: 'Testing & tools', skills: ['Jest', 'Git', 'Jira', 'Figma'] },
    { title: 'AI development', skills: ['Claude Code', 'Kiro', 'Spec-driven development'] },
  ],

  languageNote: 'I can also read and write Chinese, and speak fluent Cantonese and Mandarin.',

  contactForm: {
    heading: "Let's talk.",
    text: "I'd love to hear about your project idea — I'll get the beer.",
    disclaimer: "I won't share your information with anyone else.",
    // To have the form post to a service instead of opening the visitor's email app:
    // create a form at formspree.io and paste its endpoint (https://formspree.io/f/xxxxxxxx) here.
    // While this is left as 'YOUR_FORM_ID', the form falls back to a prefilled mailto: link.
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  },
};
