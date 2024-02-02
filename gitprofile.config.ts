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
      name: 'LFC103: Inclusive Strategies for Open Source',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFC193: Introduction to Open Source Licensing Compliance Management',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFEL1007: Automating Supply Chain Security: SBOMs and Signatures',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFEL1002: Getting Started with Rust',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFS169: Introduction to GitOps',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFC110: Fundamentals of Professional Open Source Management',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFC102: Inclusive Open Source Community Orientation',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFS145: Introduction to Protocol Buffers',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'SKF100: Understanding the OWASP® Top 10 Security Threats',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFQ102: Quantum Computing Essentials For Senior Leaders',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFEL1006: Securing Projects with OpenSSF Scorecard',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFD103: A Beginner\'s Guide to Linux Kernel Development',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFQ101: Fundamentals of Quantum Computing',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFEL1003: Creating Edge IoT Solutions with EdgeX Foundry',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFEL1000: Introduction to FDC3',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFD102: A Beginner\'s Guide to Open Source Software Development',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFC111: Open Source Technical Documentation Essentials',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'LFD137: Open Source Contribution in Finance',
      body: 'Issued by The Linux Foundation',
      year: 'March 2022',
      link: 'Link to Certificate',
    },
    {
      name: 'AWS Educate Getting Started with Security',
      body: 'Issued by Amazon Web Services Training and Certification',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'API Security for PCI Compliance',
      body: 'Issued by APIsec University',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'API Documentation Best Practices',
      body: 'Issued by APIsec University',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'OWASP API Security Top 10',
      body: 'Issued by APIsec University',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'API Security Fundamentals',
      body: 'Issued by APIsec University',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Intel - Cloud Fundamentals',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Open Source Software Development, Linux and Git Specialization',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Intel Solution Pro Cloud Business Professional',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Security Analyst Fundamentals Specialization',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'IBM Cybersecurity Analyst Professional Certificate',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Network Security & Database Vulnerabilities',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cybersecurity Compliance Framework & System Administration',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cyber Threat Intelligence',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Penetration Testing, Incident Response and Forensics',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cybersecurity Roles, Processes & Operating System Security',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Introduction to Cybersecurity Tools & Cyber Attacks',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Quantum-Safe Encryption Essentials',
      body: 'Issued by IBM',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Google IT Support Professional Certificate',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cybersecurity Gold Level',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Google Cybersecurity Certificate',
      body: 'Issued by Coursera',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cybersecurity Fundamentals',
      body: 'Issued by IBM SkillsBuild',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Enterprise Design Thinking Practitioner',
      body: 'Issued by IBM',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cyber Security and InfoSec',
      body: 'Issued by SkillStorm',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cyber Threat Management',
      body: 'Issued by IBM',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Junior Cybersecurity Analyst Career Path',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Cyber Threat Management',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Network Defense',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'OPSWAT Introduction to Critical Infrastructure Protection (ICIP)',
      body: 'Issued by OPSWAT',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Endpoint Security',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Networking Devices and Initial Configuration',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'LFC108: Cybersecurity Essentials',
      body: 'Issued by The Linux Foundation',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'ISC2 Candidate',
      body: 'Issued by ISC2',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Networking Basics',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
    },
    {
      name: 'Introduction to Cybersecurity',
      body: 'Issued by Cisco',
      year: 'Date Earned',
      link: 'Link to Certificate',
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
    defaultTheme: 'dim',

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
