// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mranv', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/git-profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 999, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mranv/git-profile', 'mranv/ebpf-file-monitor'],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Anubhav Gain',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'anubhavgain',
    twitter: 'AnubhavGain',
    mastodon: 'mranv@mastodon.social',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'mranv',
    dev: 'mranv',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://mranv.github.io',
    phone: '',
    email: 'iamanubhavgain@gmail.com',
  },
  resume: {
    fileUrl:
      'https://mranv.github.io/docs/ANUBHAV_GAIN_resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Rust (Programming Language)',
    'Minimal Linux Image',
    'Information Security',
    'Threat & Vulnerability Management',
    'Cyber Security and InfoSec',
    'Security Frameworks and Controls',
    'Python (Programming Language)',
    'Incident Response',
    'Security Information and Event Management (SIEM)',
    'Antimalware Protection',
    'Application Security',
    'Stash',
    'Single Sign-On (SSO)',
    'Accelerate cloud adoption with the Microsoft Cloud Adoption Framework for Azure',
    'Security Operations Center',
    'PHPPHP',
    'PU SUPPORTPU SUPPORT',
    'MySQL',
    'Securing Networking Protocols',
    'Protecting Your Information (An Executive\'s Guide to Security)',
    'Hardened Security Topologies',
    'Session & Risk Management',
    'APT Defenses',
    'Honeypots',
    'Routing Protocols',
    'Troubleshooting',
    'Transport Layer Security (TLS)',
    'Traceroute',
    'OSI Model',
    'Domain Name System (DNS)',
    'Windows',
    'Red Hat Linux',
    'Palo Alto Networks',
    'Network Address Translation (NAT)',
    'SQL',
    'Microsoft Endpoint Configuration Manager',
    'Android',
    'Amazon Web Services (AWS)',
    'Linux',
    'Mac OS X Server',
    'Network Security',
    'Software Project Management',
    'ISO/IEC 27001 Information Security Associate™',
    'Mac & PC platforms',
    'Network Design',
    'Network Switches',
    'Operating Systems',
    'IPv4 / IPv6 Addresses',
    'Wireless Access',
    'System Safeguard',
    'Threat Analysis',
    'Cybersecurity Administration',
    'Network Defense',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
],

  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mranv', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/mranv/git-profile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
