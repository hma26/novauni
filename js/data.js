/* ==========================================================================
   NOVA University – site data
   (ported from src/data/universityData.ts)
   ========================================================================== */

/* Base path for the optimised local images – works from index.html ("") and from /pages ("../") */
const IMG = (document.body.dataset.root || '') + 'images/';

const UNIVERSITY_STATS = [
  { label: 'Active Students', value: '14,200+' },
  { label: 'Academic Programs', value: '55+' },
  { label: 'Global Rank in Tech', value: '#12' },
  { label: 'Graduate Employment', value: '96.4%' },
  { label: 'International Students', value: '35%' },
  { label: 'Annual Research Grant', value: '$85M+' }
];

const PROGRAMS_DATA = [
  {
    id: 'cs-bsc',
    title: 'B.Sc. Computer Science & AI',
    faculty: 'Computing & Data Science',
    level: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    credits: 128,
    tuitionPerYear: 18500,
    deliveryMode: 'On-Campus',
    description: 'Master algorithm engineering, deep learning neural networks, cloud architecture, and modern full-stack development.',
    overview: 'The B.Sc. in Computer Science & AI at NOVA University delivers a rigorous foundation in computational theory, software design, neural networks, and distributed computing systems. Students build real-world software applications, collaborate with Silicon Valley & European tech hubs, and participate in annual hackathons.',
    keyCourses: [
      'Data Structures & Algorithm Design',
      'Artificial Intelligence & Machine Learning',
      'Distributed Systems & Cloud Computing',
      'Full-Stack Web Engineering',
      'Cybersecurity Principles & Applied Cryptography',
      'Neural Networks & Computer Vision'
    ],
    careerPaths: [
      'AI / Machine Learning Engineer',
      'Senior Software Developer',
      'Cloud Solutions Architect',
      'Data Engineer / Analyst',
      'Cybersecurity Strategist'
    ],
    admissionRequirements: [
      'High School Diploma or IB Diploma equivalent',
      'Minimum GPA 3.4 or B+ average in Mathematics & Sciences',
      'SAT Math 680+ or ACT 28+ (Optional for international)',
      'Proof of English Proficiency (IELTS 6.5+ or TOEFL 85+)'
    ],
    featured: true,
    image: IMG + 'program-cs.webp'
  },
  {
    id: 'ai-msc',
    title: 'M.Sc. Artificial Intelligence & Robotics',
    faculty: 'Computing & Data Science',
    level: 'Graduate',
    duration: '2 Years',
    credits: 60,
    tuitionPerYear: 22000,
    deliveryMode: 'Hybrid',
    description: 'Advanced specialization in generative AI, autonomous robotics, reinforcement learning, and ethical AI governance.',
    overview: 'Designed for computer science graduates and technology professionals, this master program combines theoretical machine learning with hands-on robotics engineering in NOVA’s Advanced Autonomous Systems Laboratory.',
    keyCourses: [
      'Deep Learning & Transformer Architectures',
      'Autonomous Systems & Spatial Computing',
      'Reinforcement Learning & Decision Systems',
      'Ethics, Privacy & AI Policy',
      'Robotics Kinematics & Sensor Fusion'
    ],
    careerPaths: [
      'Principal AI Researcher',
      'Robotics System Engineer',
      'NLP Specialist',
      'Autonomous Vehicle Systems Architect'
    ],
    admissionRequirements: [
      'Bachelor Degree in CS, Math, Physics, or Engineering',
      'Minimum GPA 3.3 / 4.0',
      'Statement of Purpose and 2 Academic Recommendation Letters',
      'Demonstrated proficiency in Python, C++, and linear algebra'
    ],
    featured: true,
    image: IMG + 'program-ai.webp'
  },
  {
    id: 'bba-bus',
    title: 'BBA Global Business & Entrepreneurship',
    faculty: 'Business & Management',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: 120,
    tuitionPerYear: 17200,
    deliveryMode: 'On-Campus',
    description: 'Develop strategic leadership, global venture creation, financial modeling, and digital brand innovation.',
    overview: 'NOVA Business School cultivates forward-thinking corporate leaders and startup founders. Students complete an international exchange semester at partner universities in Tokyo, London, or Zurich, and launch live ventures in our Student Incubator.',
    keyCourses: [
      'Global Financial Markets & Analytics',
      'Strategic Management & Business Innovation',
      'Digital Marketing & Consumer Psychology',
      'Venture Capital & Startup Valuation',
      'Corporate Law & Business Governance'
    ],
    careerPaths: [
      'Management Consultant',
      'Corporate Innovation Manager',
      'Venture Founder / Entrepreneur',
      'Financial Analyst'
    ],
    admissionRequirements: [
      'High School Diploma with strong background in social sciences/math',
      'Minimum GPA 3.2',
      'Personal essay & extracurricular leadership log'
    ],
    featured: true,
    image: IMG + 'program-bba.webp'
  },
  {
    id: 'mba-exec',
    title: 'Executive MBA (EMBA)',
    faculty: 'Business & Management',
    level: 'Graduate',
    duration: '18 Months',
    credits: 48,
    tuitionPerYear: 26500,
    deliveryMode: 'Hybrid',
    description: 'Transformative executive program focused on global strategy, digital business transformation, and C-suite leadership.',
    overview: 'Curated for experienced managers and business directors seeking to drive organizational transformation. Includes bi-monthly weekend residentials, executive mentoring, and global consulting immersions.',
    keyCourses: [
      'C-Suite Strategic Leadership',
      'Digital Transformation & Enterprise AI',
      'Mergers, Acquisitions & Corporate Restructuring',
      'Global Supply Chain & Risk Analytics'
    ],
    careerPaths: [
      'Chief Executive Officer (CEO)',
      'Chief Strategy Officer (CSO)',
      'Managing Director',
      'Senior Vice President'
    ],
    admissionRequirements: [
      'Bachelor degree from an accredited institution',
      'Minimum 5 years of post-graduation managerial experience',
      'Executive interview with Admissions Dean'
    ],
    featured: false,
    image: IMG + 'program-emba.webp'
  },
  {
    id: 'eng-robotics',
    title: 'B.Eng. Robotics & Smart Automation',
    faculty: 'Engineering & Technology',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: 132,
    tuitionPerYear: 19800,
    deliveryMode: 'On-Campus',
    description: 'Fuse mechanical engineering, mechatronics, embedded hardware, and smart manufacturing systems.',
    overview: 'Prepares engineering pioneers to design next-generation robotic systems, medical devices, and automated industrial machinery. Accredited by ABET with hands-on hardware laboratory immersion starting Year 1.',
    keyCourses: [
      'Mechatronic System Design',
      'Embedded Microcontrollers & IoT',
      'Control Systems Engineering',
      'CAD / CAM & Industrial Automation',
      'Kinematics & Dynamics of Multibody Systems'
    ],
    careerPaths: [
      'Automation Systems Engineer',
      'Mechatronics Specialist',
      'Embedded Hardware Engineer',
      'Manufacturing Innovation Lead'
    ],
    admissionRequirements: [
      'High School Diploma with AP Calculus & Physics',
      'Minimum GPA 3.5'
    ],
    featured: true,
    image: IMG + 'program-robotics.webp'
  },
  {
    id: 'eng-clean-energy',
    title: 'M.Eng. Sustainable Energy & Clean Tech',
    faculty: 'Engineering & Technology',
    level: 'Graduate',
    duration: '2 Years',
    credits: 54,
    tuitionPerYear: 21500,
    deliveryMode: 'On-Campus',
    description: 'Pioneer renewable energy grids, battery chemistry, hydrogen technology, and decarbonization infrastructure.',
    overview: 'Address global climate goals through cutting-edge engineering solution development. Partnered with regional power grids, solar technology labs, and government sustainability initiatives.',
    keyCourses: [
      'Renewable Power Integration & Microgrids',
      'Energy Storage & Electrochemical Systems',
      'Carbon Capture Technology & Life Cycle Assessment',
      'Clean Tech Economics & Energy Policy'
    ],
    careerPaths: [
      'Renewable Energy Grid Engineer',
      'Sustainability Systems Director',
      'CleanTech Venture Consultant'
    ],
    admissionRequirements: [
      'B.S. in Electrical, Mechanical, Chemical, or Civil Engineering',
      'GPA 3.2+'
    ],
    featured: false,
    image: IMG + 'program-energy.webp'
  },
  {
    id: 'med-md',
    title: 'Doctor of Medicine (M.D.)',
    faculty: 'Health & Medical Sciences',
    level: 'Doctorate',
    duration: '4 Years Post-Grad',
    credits: 160,
    tuitionPerYear: 38000,
    deliveryMode: 'On-Campus',
    description: 'Premier medical degree combining compassionate patient care, surgical simulation, and clinical research rotations.',
    overview: 'NOVA School of Medicine features a state-of-the-art Teaching Hospital, high-fidelity anatomical simulation suites, and early clinical immersion in community and tertiary care centers.',
    keyCourses: [
      'Human Anatomy & Histology',
      'Pathophysiology & Pharmacology',
      'Clinical Diagnosis & Patient Interaction',
      'Surgical Rotations & Internal Medicine',
      'Genomics & Precision Therapeutics'
    ],
    careerPaths: [
      'Licensed Physician / Specialist Surgeon',
      'Medical Research Director',
      'Healthcare Policy Advisor'
    ],
    admissionRequirements: [
      'Bachelor degree with prerequisite pre-med sciences (Biology, Chem, Organic Chem, Physics)',
      'MCAT Score 512+',
      'Clinical volunteering hours & 3 letters of evaluation'
    ],
    featured: true,
    image: IMG + 'program-md.webp'
  },
  {
    id: 'biomed-bsc',
    title: 'B.Sc. Biomedical Science & Biotechnology',
    faculty: 'Health & Medical Sciences',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: 124,
    tuitionPerYear: 18900,
    deliveryMode: 'On-Campus',
    description: 'Explore molecular genetics, immunology, gene editing, and biopharmaceutical development.',
    overview: 'Provides foundational training for future medical researchers, pre-med students, and biotech innovators. Features lab work with CRISPR technology, cell culturing, and bioinformatics tools.',
    keyCourses: [
      'Molecular Genetics & Epigenetics',
      'Immunology & Microbial Pathogenesis',
      'Bioprocess Engineering & Drug Design',
      'Bioinformatics & Computational Biology'
    ],
    careerPaths: [
      'Biotech Research Scientist',
      'Pre-Med Student candidate',
      'Pharmaceutical Quality Specialist',
      'Clinical Trial Coordinator'
    ],
    admissionRequirements: [
      'High School Diploma with Biology & Chemistry',
      'Minimum GPA 3.3'
    ],
    featured: false,
    image: IMG + 'program-biomed.webp'
  },
  {
    id: 'arts-uiux',
    title: 'B.A. Digital Design, Media & UX Design',
    faculty: 'Arts & Humanities',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: 120,
    tuitionPerYear: 16500,
    deliveryMode: 'On-Campus',
    description: 'Blend visual arts, user experience architecture, interactive media, and creative tech prototyping.',
    overview: 'Empowering visual thinkers to craft intuitive human-centered digital experiences across web, mobile, AR/VR, and immersive media environments.',
    keyCourses: [
      'Human-Centered UX Strategy & Prototyping',
      'Visual Typography & Design Systems',
      'Interactive Web & Motion Design',
      '3D Modeling & Spatial Design',
      'Design Research & Usability Testing'
    ],
    careerPaths: [
      'Product / UX/UI Designer',
      'Creative Director',
      'Interactive Media Specialist',
      'Design Strategist'
    ],
    admissionRequirements: [
      'High School Diploma',
      'Digital Design Portfolio Submission (5-10 works)'
    ],
    featured: false,
    image: IMG + 'program-design.webp'
  },
  {
    id: 'env-science',
    title: 'B.Sc. Environmental Policy & Climate Science',
    faculty: 'Environmental Sciences',
    level: 'Undergraduate',
    duration: '4 Years',
    credits: 120,
    tuitionPerYear: 16800,
    deliveryMode: 'On-Campus',
    description: 'Study ecosystem dynamics, GIS mapping, environmental law, and international climate agreements.',
    overview: 'Equips students with scientific data analysis tools and policy frameworks required to preserve natural ecosystems, manage coastal reserves, and influence global environmental legislation.',
    keyCourses: [
      'Climate Dynamics & Earth Systems',
      'Geographic Information Systems (GIS)',
      'Environmental Impact Assessment & Law',
      'Conservation Biology & Marine Ecology'
    ],
    careerPaths: [
      'Environmental Impact Analyst',
      'Climate Policy Advisor',
      'GIS Mapping Specialist',
      'Conservation Manager'
    ],
    admissionRequirements: [
      'High School Diploma with background in Earth Sciences or Geography'
    ],
    featured: false,
    image: IMG + 'program-env.webp'
  }
];

const NEWS_DATA = [
  {
    id: 'news-1',
    title: 'NOVA University Secures $25M Grant for Next-Gen Renewable Energy & Microgrid Research',
    category: 'Research',
    date: 'August 4, 2026',
    readTime: '4 min read',
    summary: 'The National Science Foundation has awarded NOVA’s Clean Tech Institute $25 million to develop high-efficiency solid-state battery storage for regional power grids.',
    content: 'NOVA University today announced a landmark $25 million federal research grant from the National Science Foundation (NSF). The five-year initiative, led by Dr. Helena Vance, Director of the Clean Tech Institute, will focus on advancing solid-state battery architectures and AI-driven microgrid management.\n\n"This grant validates NOVA’s standing as a premier global hub for sustainable engineering innovation," said University President Dr. Marcus Vance. "Our undergraduate and graduate researchers will be directly involved in fabricating energy storage prototypes that could reshape clean power delivery nationwide."',
    author: 'Elena Rostova',
    authorRole: 'Senior University Editor',
    image: IMG + 'news-grant.webp',
    featured: true
  },
  {
    id: 'news-2',
    title: 'NOVA Robotics Team Takes 1st Place at International Autonomous Drone Championship in Tokyo',
    category: 'Achievements',
    date: 'July 28, 2026',
    readTime: '3 min read',
    summary: 'Competing against 40 top global institutions, NOVA’s student robotics squad claimed victory with an AI-navigated search-and-rescue drone fleet.',
    content: 'NOVA Autonomous Systems Student Club scored top honors at the 2026 World Autonomous Drone Challenge held in Tokyo, Japan. The team designed fully autonomous nano-drones capable of navigating GPS-denied environments using real-time spatial vision algorithms developed entirely on campus.',
    author: 'Marcus Wright',
    authorRole: 'Tech & Engineering Correspondent',
    image: IMG + 'news-drone.webp',
    featured: true
  },
  {
    id: 'news-3',
    title: 'Annual Innovation Summit to Host Global Tech Leaders and Venture Capital Partners',
    category: 'Innovation',
    date: 'July 15, 2026',
    readTime: '5 min read',
    summary: 'Over 1,200 founders, investors, and researchers will converge on the NOVA Grand Auditorium this autumn for keynote talks and student startup pitches.',
    content: 'NOVA University is pleased to announce the speaker lineup for the 2026 Annual Innovation Summit. Featuring keynote addresses from AI pioneers, sustainable venture partners, and healthcare disruptors, the event provides a launchpad for student entrepreneurs.',
    author: 'Sarah Chen',
    authorRole: 'Director of Public Relations',
    image: IMG + 'news-summit.webp',
    featured: false
  },
  {
    id: 'news-4',
    title: 'NOVA School of Medicine Expands Free Community Telehealth & Diagnostic Mobile Clinic',
    category: 'Campus Life',
    date: 'June 30, 2026',
    readTime: '4 min read',
    summary: 'A new mobile healthcare unit equipped with diagnostic ultrasonic scanners and AI triage tools will serve regional underserved areas.',
    content: 'Medical students and faculty clinical supervisors at NOVA School of Medicine have launched two state-of-the-art mobile diagnostic vans to provide preventative screenings, vaccinations, and telehealth consults to underserved regional towns.',
    author: 'Dr. Arthur Pendelton',
    authorRole: 'School of Medicine Vice Dean',
    image: IMG + 'news-clinic.webp',
    featured: false
  }
];

const EVENTS_DATA = [
  {
    id: 'event-1',
    title: 'Fall Open Campus Day & Guided Department Tours',
    category: 'Admissions',
    date: 'September 12, 2026',
    time: '09:00 AM - 04:00 PM EST',
    location: 'Main Quadrangle & Student Union Hall',
    isVirtual: false,
    description: 'Explore state-of-the-art laboratories, dorms, library, meet academic deans, and receive instant evaluation on application portfolios.',
    speaker: 'Admissions Dean & Student Ambassadors',
    registrationOpen: true,
    image: IMG + 'event-open-day.webp'
  },
  {
    id: 'event-2',
    title: 'Global Tech & Career Fair: 120+ Hiring Partners',
    category: 'Career Fair',
    date: 'September 24, 2026',
    time: '10:00 AM - 05:00 PM EST',
    location: 'NOVA Sports Complex Hall A',
    isVirtual: false,
    description: 'Connect with recruiter representatives from leading technology firms, healthcare networks, financial institutions, and engineering agencies.',
    speaker: 'NOVA Career Development Center',
    registrationOpen: true,
    image: IMG + 'event-career-fair.webp'
  },
  {
    id: 'event-3',
    title: 'Distinguished Lecture: The Horizon of Quantum Computing',
    category: 'Academic',
    date: 'October 08, 2026',
    time: '02:00 PM - 03:30 PM EST',
    location: 'Auditorium B & Online Stream',
    isVirtual: true,
    description: 'A deep dive into fault-tolerant quantum hardware, quantum cryptography, and practical chemical synthesis simulation.',
    speaker: 'Prof. Julian Vance, Nobel Laureate Nominee',
    registrationOpen: true,
    image: IMG + 'program-emba.webp'
  },
  {
    id: 'event-4',
    title: 'International Cultural Festival & Street Food Carnival',
    category: 'Student Life',
    date: 'October 18, 2026',
    time: '11:00 AM - 08:00 PM EST',
    location: 'Central Campus Plaza',
    isVirtual: false,
    description: 'Celebrate our diverse university community with musical performances, traditional dance, national fashion parades, and authentic international cuisine stalls from over 50 countries.',
    speaker: 'International Student Association',
    registrationOpen: true,
    image: IMG + 'event-festival.webp'
  }
];

const LEADERSHIP_DATA = [
  {
    id: 'lead-1',
    name: 'Dr. Marcus Vance, Ph.D.',
    role: 'University President & Professor of Physics',
    department: 'Office of the President',
    bio: 'Former NASA Senior Fellow and quantum optics pioneer, Dr. Vance has led NOVA University since 2018, expanding research funding by over 140% and launching the Sustainable Campus 2030 Initiative.',
    image: IMG + 'leader-vance.webp',
    email: 'president@nova.edu'
  },
  {
    id: 'lead-2',
    name: 'Dr. Evelyn Sterling, Ph.D.',
    role: 'Provost & Chief Academic Officer',
    department: 'Academic Affairs',
    bio: 'Specializing in cognitive neuroscience and curriculum innovation, Dr. Sterling oversees NOVA’s 6 faculties, 300+ full-time research professors, and global academic partnerships.',
    image: IMG + 'leader-sterling.webp',
    email: 'provost@nova.edu'
  },
  {
    id: 'lead-3',
    name: 'Prof. David K. Thorne',
    role: 'Dean of Computing & Artificial Intelligence',
    department: 'Faculty of Computing',
    bio: 'Pioneer in distributed neural network architectures with 20+ patents and over 12,000 academic citations. Promotes student startup incubators.',
    image: IMG + 'leader-thorne.webp',
    email: 'dean.cs@nova.edu'
  },
  {
    id: 'lead-4',
    name: 'Dr. Sophia Ramirez, M.D., Ph.D.',
    role: 'Dean of Medical & Life Sciences',
    department: 'School of Medicine',
    bio: 'Cardiothoracic surgeon and regenerative medicine specialist leading community public health outreach and surgical robotic simulation.',
    image: IMG + 'leader-ramirez.webp',
    email: 'dean.med@nova.edu'
  }
];

const FACILITIES_DATA = [
  {
    id: 'fac-1',
    name: 'Aetheria Central Library & Learning Hub',
    category: 'Academic',
    description: 'A 5-story architectural landmark featuring 500,000+ volumes, 24/7 quiet study pods, high-speed 10Gbps fiber Wi-Fi, and 3D digital archival suites.',
    highlights: ['24/7 Access for Students', 'Private Group Study Rooms', 'Virtual Reality Learning Lab', 'Gourmet Espresso Cafe'],
    image: IMG + 'facility-library.webp',
    hours: 'Open 24/7 for Enrolled Students',
    location: 'North Campus Quad'
  },
  {
    id: 'fac-2',
    name: 'Quantum Tech & Robotics Research Complex',
    category: 'Research',
    description: 'State-of-the-art cleanrooms, supercomputing clusters, 3D printing fabrication labs, and autonomous drone test bays.',
    highlights: ['NVIDIA Supercomputing Cluster', 'Class 1000 Cleanroom Facility', 'Industrial Robot Arms & Motion Capture', 'Hardware Circuit Prototyping Lab'],
    image: IMG + 'facility-research.webp',
    hours: 'Mon - Sun: 06:00 AM - 11:00 PM',
    location: 'Tech Innovation Park'
  },
  {
    id: 'fac-3',
    name: 'NOVA Aquatics & Olympic Sports Center',
    category: 'Recreation',
    description: 'Featuring an 8-lane Olympic competition pool, 3-story rock climbing wall, indoor running track, NCAA basketball courts, and fitness studios.',
    highlights: ['50m Olympic Heated Pool', 'Free Personal Training Consultations', 'Indoor Squash & Badminton Courts', 'Cryotherapy & Sauna Recovery'],
    image: IMG + 'facility-sports.webp',
    hours: 'Mon - Sun: 05:30 AM - 10:30 PM',
    location: 'South Campus Athletic Zone'
  },
  {
    id: 'fac-4',
    name: 'Student Center & Global Dining Commons',
    category: 'Dining',
    description: 'Vibrant student hub featuring 8 international culinary stations (Halal, Kosher, Vegan, Asian Street Food, Artisan Bakery), lounge, and outdoor amphitheater.',
    highlights: ['Farm-to-Table Organic Ingredients', 'Eco-friendly Zero-Waste Dining', 'Student Life Club Offices', 'Event Stage & Gaming Lounge'],
    image: IMG + 'facility-dining.webp',
    hours: 'Daily: 07:00 AM - 10:00 PM',
    location: 'Central Student Plaza'
  }
];

const HOUSING_OPTIONS = [
  {
    id: 'house-1',
    name: 'Vanguard Heights (Single Studio)',
    type: 'Single Studio',
    pricePerSemester: 4200,
    amenities: ['Private En-suite Bathroom', 'Full Kitchenette & Microwave', 'Ergonomic Desk & High-Speed Fiber', 'Individual Air Control', 'Weekly Laundry Service'],
    occupancy: '1 Student (Private)',
    image: IMG + 'housing-studio.webp'
  },
  {
    id: 'house-2',
    name: 'Apex Hall (Shared Double)',
    type: 'Double Room',
    pricePerSemester: 2850,
    amenities: ['Twin XL Ergonomic Beds', 'Shared En-suite Bathroom', 'High-Speed Fiber Wi-Fi', 'Floor Lounge & Game Room Access', '24/7 Security Concierge'],
    occupancy: '2 Students (Shared)',
    image: IMG + 'housing-double.webp'
  },
  {
    id: 'house-3',
    name: 'Heritage Quad (4-Bedroom Suite)',
    type: 'Shared Suite',
    pricePerSemester: 3400,
    amenities: ['4 Private Single Bedrooms', 'Shared Common Living Room & TV', '2 Bathrooms per Suite', 'Full Shared Kitchen', 'Balcony overlooking Campus Garden'],
    occupancy: '4 Students (Private Bedroom / Shared Living)',
    image: IMG + 'housing-suite.webp'
  }
];

const SCHOLARSHIPS_DATA = [
  {
    id: 'schol-1',
    name: 'Presidential Academic Excellence Award',
    amount: 'Up to 100% Full Tuition Coverage',
    eligibility: 'High School GPA 3.8+ / SAT 1450+ or Top 5% class rank. Demonstrated extracurricular leadership.',
    deadline: 'December 1, 2026',
    category: 'Merit-Based'
  },
  {
    id: 'schol-2',
    name: 'Global Pioneers International Scholarship',
    amount: '$8,000 - $14,000 / Year',
    eligibility: 'Outstanding international undergraduate and graduate applicants with strong academic record.',
    deadline: 'January 15, 2027',
    category: 'International'
  },
  {
    id: 'schol-3',
    name: 'STEM Innovation & Diversity Fellowship',
    amount: '$10,000 / Year + Lab Stipend',
    eligibility: 'Enrolled in Computer Science, Robotics, BioMed, or Engineering with commitment to undergraduate research.',
    deadline: 'February 1, 2027',
    category: 'STEM Focus'
  },
  {
    id: 'schol-4',
    name: 'NOVA Opportunity Need-Based Grant',
    amount: 'Varies based on financial assessment ($5,000 - $18,000)',
    eligibility: 'Calculated based on household financial documentation via NOVA Financial Aid Portal.',
    deadline: 'March 1, 2027',
    category: 'Need-Based'
  }
];

const FAQ_DATA = [
  {
    question: 'What are the application deadlines for Fall 2026 admission?',
    answer: 'Early Action/Decision deadline is November 1, 2026. Regular Decision deadline is February 1, 2027. Rolling admissions for international students remain open through April 1, subject to program capacity.',
    category: 'Admissions'
  },
  {
    question: 'Are standardized test scores (SAT / ACT / GRE) required?',
    answer: 'NOVA University maintains a Test-Optional policy for all undergraduate programs. Applicants may submit SAT/ACT scores if they feel it strengthens their academic profile, but unsubmitted scores will not negatively impact evaluation.',
    category: 'Admissions'
  },
  {
    question: 'How do I apply for financial aid and scholarships?',
    answer: 'All enrolled applicants are automatically considered for Merit-Based Scholarships upon applying. For Need-Based Aid, complete the NOVA Financial Aid Request Form along with your main application before March 1.',
    category: 'Financial Aid'
  },
  {
    question: 'What English proficiency exams do you accept for international students?',
    answer: 'We accept IELTS (minimum overall score 6.5), TOEFL iBT (minimum score 85), Duolingo English Test (minimum score 115), or Pearson PTE Academic (minimum score 58).',
    category: 'International'
  },
  {
    question: 'Can I tour the campus virtually or in-person?',
    answer: 'Yes! We offer daily in-person student-guided walking tours Mon-Fri, as well as an interactive 360 virtual tour on our Campus page anytime.',
    category: 'General'
  }
];

const TIMELINE_MILESTONES = [
  { year: '1974', title: 'Founding of NOVA Institute', desc: 'Established as an innovative institute of technology with an initial cohort of 250 engineering scholars.' },
  { year: '1988', title: 'University Accreditation', desc: 'Granted full university status by MSCHE and expanded to include Medical, Business, and Arts faculties.' },
  { year: '2005', title: 'Quantum Research Center', desc: 'Opened the $45M Quantum Physics & Supercomputing Research Complex funded by national grants.' },
  { year: '2018', title: 'AI & Sustainable Campus Initiative', desc: 'Pioneered 100% renewable powered campus microgrids and created the Faculty of Computing & AI.' },
  { year: '2026', title: 'Top 15 Global Recognition', desc: 'Ranked #12 worldwide in Computer Science Innovation & #1 in Student Diversity.' }
];

const STUDENT_CLUBS = [
  { name: 'NOVA Autonomous Robotics Society', category: 'STEM & Tech', members: '240+ Members' },
  { name: 'International Student Cultural Association', category: 'Culture', members: '500+ Members' },
  { name: 'Vanguard Collegiate Debate Union', category: 'Humanities', members: '120+ Members' },
  { name: 'NCAA Division I Athletics & Rowing', category: 'Sports', members: '350+ Athletes' },
  { name: 'NOVA Esports & Gaming League', category: 'Recreation', members: '400+ Gamers' },
  { name: 'Eco-NOVA Environmental Action Guild', category: 'Sustainability', members: '180+ Members' }
];

const DIRECTORY_DATA = [
  { title: 'Admissions Office', phone: '+1 (800) 555-6682', email: 'admissions@nova.edu', hours: 'Mon - Fri: 8:00 AM - 5:00 PM' },
  { title: 'Financial Aid & Scholarships', phone: '+1 (800) 555-3421', email: 'finaid@nova.edu', hours: 'Mon - Fri: 9:00 AM - 4:30 PM' },
  { title: 'International Student Services', phone: '+1 (800) 555-8890', email: 'international@nova.edu', hours: 'Mon - Fri: 8:30 AM - 5:00 PM' },
  { title: 'Campus Housing & Residences', phone: '+1 (800) 555-4301', email: 'housing@nova.edu', hours: 'Mon - Sun: 8:00 AM - 8:00 PM' },
  { title: 'Office of the Registrar', phone: '+1 (800) 555-1120', email: 'registrar@nova.edu', hours: 'Mon - Fri: 8:30 AM - 4:00 PM' },
  { title: 'Campus Security Dispatch', phone: '+1 (800) 555-7233', email: 'security@nova.edu', hours: '24/7 Dispatch Center' }
];

const GALLERY_DATA = [
  { src: IMG + 'event-open-day.webp', caption: 'Main Quadrangle & Administration Hall' },
  { src: IMG + 'facility-library.webp', caption: 'Aetheria Central Library & Learning Hub' },
  { src: IMG + 'facility-research.webp', caption: 'Quantum Tech & Robotics Research Complex' },
  { src: IMG + 'event-festival.webp', caption: 'International Cultural Festival on Central Plaza' },
  { src: IMG + 'facility-dining.webp', caption: 'Student Center & Global Dining Commons' },
  { src: IMG + 'event-career-fair.webp', caption: 'Global Tech & Career Fair, Sports Complex Hall A' }
];
