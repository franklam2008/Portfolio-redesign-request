// Shared content for Frank Lam's portfolio — plain data, no JSX.
window.SITE = {
  ownerName: 'Frank Lam',

  navLinks: [
    { label: 'Home', href: '/', key: 'home' },
    { label: 'Projects', href: '/projects', key: 'projects' },
    { label: 'Skills', href: '/skills', key: 'skills' },
    { label: 'Contact', href: '/contact', key: 'contact' },
  ],

  contactLinks: [
    { label: 'GitHub', href: 'https://github.com/franklam2008' },
    { label: 'Email', href: 'mailto:franklam2008@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/frank-lam-010a9253' },
  ],

  hero: {
    eyebrow: 'Web developer — Henderson, Nevada',
    title: 'I build practical software for real problems.',
    subtitle:
      "I'm a software developer who enjoys building practical products for businesses and everyday users. I focus on Angular and the MERN stack, and care about turning real problems into simple, reliable solutions.",
  },

  homeIntro:
    "I'm always excited to keep learning and creating better software. Most of my work has been building and maintaining production Angular and React applications for real businesses — from K-12 education software to bank account-opening flows.",

  featuredProjectTitles: ['Carnegie Learning', 'Huntington Bank BAO', 'this.Portfolio'],

  projects: [
    {
      title: 'Carnegie Learning',
      tags: ['Angular', 'TypeScript', 'Ngrx', 'RxJS'],
      text: 'Built and maintained Angular applications used by thousands of customers daily. Worked with educational professionals to design and deploy K-12 curriculum software across the U.S. Improved structural layout, added strict typing, and modernized legacy code.',
      links: [
        { label: 'GitHub', href: 'https://github.com/CarnegieLearningWeb/passport-frontend-v2' },
        { label: 'Live Site', href: 'https://www.carnegielearning.com/login/#/' },
      ],
    },
    {
      title: 'Huntington Bank BAO',
      tags: ['Angular', 'TypeScript', 'Ngrx', 'RxJS'],
      text: "Worked on Huntington Bank's Business Online Account Opening flow using Agile Scrum. Used TypeScript, Ngrx, and RxJS for state management and component implementation. Raised unit test coverage from 11% to 80% with Jest.",
      links: [{ label: 'Live Site', href: 'https://apply.huntington.com/new/business/welcome?product=PT' }],
    },
    {
      title: 'this.Portfolio',
      tags: ['React', 'Claude', 'Design system'],
      text: "This site. Design system generated with Claude, then the implementation built with AI-assisted coding — warm neutral palette, JetBrains Mono throughout, a small custom component set.",
      links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/Portfolio-redesign-request' }],
    },
    {
      title: 'Professional Banking Dashboard',
      tags: ['React', 'Redux', 'Material UI'],
      text: 'A banking dashboard built with React and Redux for state management, with a Material UI-based interface.',
      links: [
        { label: 'GitHub', href: 'https://github.com/franklam2008/banking-dashboard' },
        { label: 'Live Site', href: 'https://banking-dashboard.netlify.com' },
      ],
    },
    {
      title: 'Media Application',
      tags: ['React', 'Firebase', 'Bootstrap'],
      text: 'A media-focused single-page app with Firebase authentication and a custom Bootstrap-based UI. Hosted on Netlify.',
      links: [
        { label: 'GitHub', href: 'https://github.com/franklam2008/Media-Application' },
        { label: 'Live Site', href: 'https://kflam.netlify.app/' },
      ],
    },
    {
      title: 'Business E-commerce',
      tags: ['WordPress', 'PHP'],
      text: 'An e-commerce site built on WordPress that has generated over a hundred thousand in sales, with Getresponse and Pipedrive for email marketing and CRM, Tidio live chat, and Zendesk support tickets.',
      links: [{ label: 'Showcase', href: '#' }],
    },
    {
      title: 'Node.js API',
      tags: ['Node', 'Express', 'MongoDB'],
      text: 'Handles API requests and submits them to Airtable, Twilio, and SendGrid. Also scrapes data from other sites with Puppeteer.',
      links: [{ label: 'GitHub', href: 'https://github.com/franklam2008/WebScrapingAPI' }],
    },
  ],

  skillSections: [
    {
      title: 'Front-end',
      skills: ['TypeScript', 'Angular 2+', 'React', 'Ngrx', 'RxJS', 'Jest', 'Gatsby', 'JS ES6', 'SCSS', 'Bootstrap 5', 'Adobe XD', 'HTML 5', 'WordPress'],
    },
    {
      title: 'Back-end',
      skills: ['Node.js', 'GraphQL', 'Firebase', 'Express'],
    },
    {
      title: 'Others',
      skills: ['Contentful', 'Git', 'VS Code'],
    },
  ],

  languageNote: 'I can also read and write Chinese, and speak fluent Cantonese and Mandarin.',

  contactForm: {
    heading: "Let's talk.",
    text: "I'd love to hear about your project idea — I'll get the beer.",
    disclaimer: "I won't share your information with anyone else.",
    // Create a form at formspree.io and swap this for your real endpoint (https://formspree.io/f/xxxxxxxx).
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  },
};
