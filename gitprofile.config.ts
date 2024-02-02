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
  title: 'Anubhav Gain - IT Specialist | System Support | Cybersecurity',
  description: 'Anubhav Gain is a dedicated and passionate IT Specialist with expertise in system support, lab tech, and cybersecurity. Currently working at Parul University, Anubhav excels in providing exceptional technical troubleshooting and support to ensure smooth operations. Specializing in Cyber/Computer Forensics and Counterterrorism, Anubhav holds multiple certifications and possesses expertise in Transport Layer Security (TLS), Traceroute, OSI Model, DNS, and CentOS. With a commitment to continuous learning and growth, Anubhav is highly valued for their exceptional diplomacy, communication skills, and ability to work effectively within teams. Anubhav is a valuable asset with a strong dedication to excellence in all aspects of their work.',
  imageURL: '/public/1681272981620.jpeg',
},

  social: {
    linkedin: 'anubhavgain',
    twitter: 'AnubhavGain',
    mastodon: 'mranv@mastodon.social',
    facebook: '',
    instagram: 'anubhavgain',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'mranv',
    dev: 'mranv',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://mranv.github.io',
    phone: '+919407601376',
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
      company: 'techanv Consulting',
      position: 'Owner',
      from: 'Dec 2022',
      to: 'Present',
      companyLink: 'https://techanvconsulting.com',
    },
    {
      company: 'Parul University',
      position: 'IT Specialist',
      from: 'Nov 2022',
      to: 'Oct 2023',
      companyLink: 'https://paruluniversity.ac.in',
    },
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Data Analyst - Fraud Detection in Financial Payment Services',
      from: 'Jul 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.jpmorganchase.com',
    },
    {
      company: 'ANZ',
      position: 'Social Engineering Investigation in Digital Forensics',
      from: 'Jul 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.anz.com.au',
    },
    {
      company: 'Mastercard',
      position: 'Designing a Phishing Email Simulation and Interpreting Results',
      from: 'Jun 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.mastercard.us',
    },
    {
      company: 'Datacom',
      position: 'APT Breach: Analyzing the Impact on Information Security',
      from: 'Jun 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.datacom.co.nz',
    },
    {
      company: 'Telstra',
      position: 'Navigating the Storm: A Comprehensive Guide to Responding to Malware Attacks',
      from: 'May 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.telstra.com',
    },
    {
      company: 'PwC',
      position: 'Designing a Phishing Email Simulation and Interpreting Result',
      from: 'May 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.pwc.com',
    },
    {
      company: 'AIG',
      position: 'Responding to Zero-Day Vulnerability & Bypassing Ransomware',
      from: 'Apr 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.aig.com',
    },
    {
      company: 'Clifford Chance',
      position: 'Practical Guidance on an ICO Dawn Raid and Handling Data Leak Damages Claims',
      from: 'Mar 2023',
      to: 'Jul 2023',
      companyLink: 'https://www.cliffordchance.com',
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
      institution: 'Parul University',
      degree: 'Bachelor of Technology - BTech, Cyber/Computer Forensics and Counterterrorism',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Charles Sturt University',
      degree: 'Licentiate degree, Ransomware Techniques',
      from: 'Mar 2023',
      to: 'Sep 2023',
      grade: 'Pass (51/100)',
    },
    {
      institution: 'Charles Sturt University',
      degree: 'Licentiate degree, Cybersecurity Management',
      from: 'Jan 2023',
      to: 'Sep 2023',
      grade: 'High Distinction (93/100)',
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
