import type {
  TeamMember,
  BoardMember,
  CarouselItem,
  Service,
  Topic,
  Partner,
  GlobalPartner,
  Statistic,
} from "./types/types";
import projectsIcon from "./assets/homepageAssets/projects.png";
import peopleReachedIcon from "./assets/homepageAssets/peopleReached.png";
import countries from "./assets/homepageAssets/countries.png";
import GumahImage from "./assets/team/Gumah.jpg";
import TofficImage from "./assets/team/Toffic.jpg";
import WasilaImage from "./assets/team/Wasila.jpg";
import ThelmaImage from "./assets/team/Thelma.jpeg";
import MichaelImage from "./assets/team/Michael.jpg";
import FidelisImage from "./assets/team/Fidelis.jpg";
import LawrenceImage from "./assets/team/Lawrence.jpg";
import SimonImage from "./assets/team/Simon.jpg";

import Tawiah from "./assets/board/Tawiah.jpg";
import Tiah from "./assets/board/Tiah.jpg";
import Tyhra from "./assets/board/Tyhra.jpg";
import Isaac from "./assets/board/Isaac.jpg";
import Phoebe from "./assets/board/Phoebe.jpg";
import Mutala from "./assets/board/Mutala.jpg";

import Carousel1 from "./assets/programs/carouselMain.jpg";
import Carousel2 from "./assets/programs/carousel2.jpg";
import Carousel3 from "./assets/programs/carousel3.jpg";

import Illustration1 from "./assets/programs/illustration1.png";
import Illustration2 from "./assets/programs/illustration2.png";
import Illustration3 from "./assets/programs/illustration3.png";
import Illustration4 from "./assets/programs/illustration4.png";
import Illustration5 from "./assets/programs/illustration5.png";
import Illustration6 from "./assets/programs/illustration6.png";

import Care from "./assets/partners/care.png";
import VSO from "./assets/partners/vso.jpg";
import Unicef from "./assets/partners/unicef.png";
import Meda from "./assets/partners/meda.png";
import Agra from "./assets/partners/agra.png";
import Itu from "./assets/partners/itu.png";
import Mofa from "./assets/partners/mofa.png";
import Ansi from "./assets/partners/ansi.png";
import Cbcc from "./assets/partners/cbcc.png";
import Savana from "./assets/partners/savana.jpeg";
import Ghdf from "./assets/partners/ghdf.jpeg";
import Wcf from "./assets/partners/wcf.png";
import Landsea from "./assets/partners/landsea.png";
import Techno from "./assets/partners/techn.png";
import Arm from "./assets/partners/arm.png";
import Tostan from "./assets/partners/tostan.png";
import Saa from "./assets/partners/saa.png";
import Volo from "./assets/partners/volo.png";
import Mercy from "./assets/partners/MercyCorps logo.png";
import Ifad from "./assets/partners/ifdc.png";
import Principe from "./assets/partners/principles.png";
import Miller from "./assets/partners/miller.png";
import Connect from "./assets/partners/connect.png";
import Usaid from "./assets/partners/usaid.jpg";
import Esoko from "./assets/partners/esoko.png";
import Bmgf from "./assets/partners/BMGF.png";
import Creative from "./assets/partners/creative.jpeg";
import Star from "./assets/partners/Star.png";
import Giz from "./assets/partners/giz.png";
import IFAD from "./assets/partners/ifad.png";
import Crs from "./assets/partners/crs.png";
import Ghs from "./assets/partners/ghs.jpeg";

import Book from "./assets/why-amplio/book.svg";
import Bulb from "./assets/why-amplio/bulb.svg";
import Phone from "./assets/why-amplio/phone.svg";
import ConnectIcon from "./assets/why-amplio/connect.svg";

export const stats = [
  {
    number: "47",
    label: "Projects",
    icon: projectsIcon,
  },
  {
    number: "2,066,428",
    label: "People reached",
    icon: peopleReachedIcon,
  },
  {
    number: "14",
    label: "Countries",
    icon: countries,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Gumah Aloysius Tiah",
    role: "ExecutiveDirector",
    image: GumahImage,
    bio: "Tiah Gumah Aloysius holds BA and MPhil degrees in Integrated Development Studies and Development Management respectively. Over the past 17 years, Tiah has rose through the ranks from Field Officer to Executive Director role within the non-profit sector. Tiah's expertise include; program development and quality management, project cycle management, social and behaviour change communication, organizational management, results based management and research. Since August 2019, Tiah has been leading Amplio Ghana as Executive Director during which period the organization has witnessed its biggest growth. Prior to joining Amplio Ghana, Tiah worked in other countries including Sierra Leone, Liberia, South Sudan and Kenya.",
  },
  {
    name: "Toffic Dapilaah",
    role: "MEAL/Partnership Development Manager",
    image: TofficImage,
    bio: "Toffic Dapilaah is a seasoned M&E specialist with over 10 years of experience in designing and implementing SBCC programs. He plays a crucial role in supporting partnership development efforts for Amplio across Africa. Toffic's expertise spans various sectors, including agriculture, health, nutrition, women's empowerment, and COVID-19 response. He has led SBCC programs across Africa, collaborating with organizations such as MEDA, UNICEF, CARE, USAID, Bill & Melinda Gates Foundation COCOBOD, GIZ etc. He is a graduate of the USAID Young African Leadership Initiative program in public sector management, and holds a master's degree in project management from Kwame Nkrumah University of Science and Technology as well as a bachelor's degree in business management from Zenith University College. Toffic remains dedicated to driving impactful change and fostering strategic collaborations. Moreover, he's a recognized speaker at prestigious conferences, including the SBCC Summit 2022 in Morocco and the ICT4D Conference in Ghana 2024. His contributions have significantly advanced Amplio's mission of promoting social change and empowerment across Africa.",
  },
  {
    name: "Wasila Abdulai",
    role: "Finance and Administrative Manager",
    image: WasilaImage,
    bio: "Skilled in finance and nonprofit administration, Wasila has experience in tech innovation and startups, youth entrepreneurship, and the cocoa sector. Prior to joining Amplio, she was a finance and accounts associate for Yison Tech Hub and the Ghana Cocoa Board, a governmental organization that supports the production, processing and marketing of cocoa in Ghana. At Amplio, Wasila leads accounting, training, capacity building, and team collaboration, and holds down the fort for our office in Wa, Upper West Region. Wasila holds a bachelor's degree from the Kwame Nkrumah University of Science and Technology and an MBA in Procurement and Supply Chain Management from Simon Diedong Dombo University of Business and Integrated Development Studies (SDD UBIDS).",
  },
  {
    name: `Thelma "Anike" Amao`,
    role: "Communications Officer",
    image: ThelmaImage,
    bio: "Anike leads and works on Amplio Ghana stories, videos, and reports. She also manages social media and supports the development of editorial content for Amplio US. A creative thought partner with an entrepreneurial spirit, Anike brings expertise in communications, social media management, sales and marketing, customer service, and performing arts management. With a background in digital media, including gender issues in the media, Anike is passionate about using her skills and knowledge to advance society. She holds an M.A. in Performing Arts from the University of Ghana and a bachelor’s degree in Communication Studies from the Ghana Institute of Journalism.",
  },
  {
    name: "Michael Dakura",
    role: "Information Technology Manager",
    image: MichaelImage,
    bio: "Michael has supported technology for Talking Book programs since 2016. He provides technical support and training for Amplio partners in Ghana and globally. Prior to joining Amplio, he worked on community research and data collection in northern Ghana with a focus on socio-economic and health issues, local resources, and community needs. He also served as a data officer for Sinapi Aba Savings and Loans and a systems/network administrator for St. Joseph Knowledge Centre, one of the first ICT centers in the Upper West Region. Michael holds a bachelor's degree in commerce from the University of Cape Coast, a higher national diploma in accounting from Sunyani Polytechnic, and an advanced diploma in computing from IPMC Ghana. ",
  },
  {
    name: "Fidelis Awonodomo Da-uri",
    role: "Programs Coordinator",
    image: FidelisImage,
    bio: "Fidelis Da-uri is an expert in audio content design and social and behavior change communication strategies. He has produced message over a dozen languages, including songs, dramas, and expert interviews in partnership with UNICEF, Ghana Health Service, CARE, COCOBOD, MEDA, ad others. He has over 10 years of experience designing and implementing Amplio Talking Book programs to address a wide range of issues and sectors, including agriculture and food security, climate change, maternal and child health, nutrition, financial literacy, women's empowerment, child protection, peace and security, water, sanitation and hygiene (WASH) and more. A skilled musician, he composes songs and plays the gyile, a West African xylophone. Fidelis holds an MA in Development Communication from SD Dombo University of Business and Integrated Development Studies and a BA in Business Administration from University of Education, Winneba.",
  },
  {
    name: "Lawrence Ephrim",
    role: "Software Engineer",
    image: LawrenceImage,
    bio: "Lawrence is passionate about coding and creating innovative solutions. With a strong foundation in software development, he is adept at problem-solving and collaborating in cross-functional teams. Lawrence has worked on various projects, where he has gained valuable knowledge in areas such as web development. At Amplio, he supports the Amplio Talking Book platform and the development of SBC Impact Designer, a digital platform that uses AI prompts to help organizations and teams integrate social and behavior change frameworks into their projects for greater impact. He holds a BSc in Information Technology from the University of Cape Coast.",
  },
  {
    name: "Simon Tang",
    role: "Business Development Manager",
    image: SimonImage,
    bio: "Simon joined Amplio in 2016. Early on, he was the Talking Book program officer for MEDA's Greater Rural Opportunities for Women (GROW) project, which economically empowered 23,000 women to improve food security and nutrition for their families by growing and selling soybean. Today, he leads and works on business development, manages Talking Book programs, and supports partner relationships. He has expertise in audio content creation and management, survey design and implementation, and community mobilization. Prior to joining Amplio, Simon was officer-in-charge for the implementation of the live drama phase of UNICEF’s Communication for Development program. He also served as a cultural officer for the National Commission on Culture in the Upper East Region. He holds a BA in Integrated Development Studies from the University for Development Studies, Ghana.",
  },
];

export const boardMember: BoardMember[] = [
  {
    name: "Tawiah Agyarko-Kwarteng - Board Chair",
    image: Tawiah,
    bio: "Tawiah is a development consultant for the both non-profit and private sectors in West Africa. She currently serves as Technical Manager at the Côte d'Ivoire-Ghana Cocoa Initiative, a joint body set up by the world's two largest producers of cocoa to enhance cooperation. A dynamic leader, Tawiah has led programs on literacy, workplace, health, HIV education, corporate social responsibility, and cocoa sustainability for The Hershey Company and World Education. She also has her consulting firm, Heritage Flow2 Company, in Accra, Ghana. As the Country Advisor for Empowered to Educate, Tawiah provides leadership training and mentors women educators. She holds an MPA in international development from the Harvard Kennedy School.",
  },
  {
    name: "Tiah Gumah Aloysius - Secretary",
    image: Tiah,
    bio: "Tiah Gumah Aloysius holds BA and MPhil degrees in Integrated Development Studies and Development Management respectively. Over the past 17 years, Tiah has rose through the ranks from Field Officer to Executive Director role within the non-profit sector. Tiah's expertise include; program development and quality management, project cycle management, social and behaviour change communication, organizational management, results based management and research. Since August 2019, Tiah has been leading Amplio Ghana as Executive Director during which period the organization has witnessed its biggest growth. Prior to joining Amplio Ghana, Tiah worked in other countries including Sierra Leone, Liberia, South Sudan and Kenya.",
  },
  {
    name: "Mutala Abdul-Mumin",
    image: Mutala,
    bio: "Mutala Abdul-Mumin brings over 15 years of extensive experience in project management, development planning, WASH (Water, Sanitation, and Hygiene),investment appraisal, and monitoring and evaluation (M&amp;E). Currently serving as the WASH Monitoring and Financing Senior Advisor at WaterAid UK, Mutala is a seasoned expert in WASH data and monitoring, with a keen interest in government-led WASH monitoring and innovative financing solutions for WASH. His professional journey includes significant roles such as Chief Planning and Investment Analyst at Ghana’s Community Water and Sanitation Agency (CWSA) and Project Officer at Habitat for Humanity Ghana (HFG). Mutala holds a Master’s Degree in Planning, Monitoring and Evaluation, a Commonwealth Executive MBA from Kwame Nkrumah University of Science and Technology, and a Degree in Integrated Development Studies from the University for Development Studies. He is also a proud member of the Ghana Institute of Planning (GIP). Mutala played a pivotal role in developing Ghana’s national WASH ‘Golden Indicators’ for measuring the performance of WASH, contributing to the country’s progress towards achieving SDG 6. Throughout his career, he has collaborated with esteemed organizations such as the World Bank, IRC, WSUP, AMCOW, GAC, and UNICEF, among others.",
  },
  {
    name: "Tyhra Carolyn Kumasi",
    image: Tyhra,
    bio: "Tyhra Carolyn Kumasi is an accomplished researcher, strategic program leader, and certified Project and Program Management Professional with over 14 years of experience leading multidisciplinary projects in Ghana and Ethiopia. Specializing in water resource management, climate adaptation, sustainable agriculture, and food security, Tyhra has a proven track record in managing large-scale donor-funded initiatives, securing high-value funding, and delivering impactful, community-centered solutions. Currently serving as the Executive Director of Pemcoa Consult, Tyhra oversees a wide range of impactful projects, driving innovative solutions for sustainable development. She has successfully led initiatives with budgets of up to $23 million individually and over $40 million cumulatively, supported by renowned organizations such as the Canadian International Development Agency, the Bill & Melinda Gates Foundation, USAID, and the Conrad N. Hilton Foundation. Beyond her technical expertise, Tyhra is deeply passionate about inspiring, mentoring, and empowering the next generation of female leaders. She is committed to creating spaces where young women can thrive and lead in science, agriculture, and development. With a Ph.D. in Biological Sciences and a strong focus on inclusive leadership, Tyhra continues to champion gender equality, diversity, and inclusion, ensuring that these principles are embedded in program design and implementation.",
  },
  {
    name: "Isaac Kundakogo Kunko, LL.M.",
    image: Isaac,
    bio: "Isaac Kundakogo Kunko is a lawyer and pharmacist with 15+ years of experience in law, pharmaceuticals, and healthcare innovation. He holds an LL.M. in Intellectual Property and Competition Law (with distinction) from the Munich Intellectual Property Law Center, a Bachelor of Laws from the University of Ghana, and a Bachelor of Pharmacy from KNUST. He's a barrister and solicitor of the Supreme Court of Ghana, providing legal counsel to various companies. He also serves as legal counsel to TU eMpower Africa e.V. and helped establish its Ghana branch. Known for his innovative approach, he was among the first Ghanaian lawyers to use social media for court processes. His experience includes leading pharmacy operations at Lawra District Hospital, managing pharmaceutical companies, and currently leading the Law and Africa Initiative at Max Planck Law. He lectures at several universities and tutors at MIPLC. His research focuses on competition law in the pharmaceutical industry. He is a member of the Ghana Bar Association and the Pharmaceutical Society of Ghana.",
  },
  {
    name: "Phoebe Balagumyetime",
    image: Phoebe,
    bio: "Phoebe Balagumyetime is a public health leader dedicated to improving maternal and child health in Ghana's marginalized communities. As District Director of Health Services (Nadowli/Kaleo), she brings extensive experience in epidemiology, disease control, and health administration. Her qualifications include an MPhil in Epidemiology (University of Ghana) and a Master's in Public Health (Leeds University), along with certificates in Applied Epidemiology (Emory University) and Global Health and Sustainable Development. Phoebe has served as District Director in various districts, contributing significantly to national programs like the National Tuberculosis Control Programme. As a recognized facilitator and mentor, Phoebe shares her expertise with other healthcare professionals, including through the Ghana Field Epidemiology and Laboratory Training Programme (FELTP). Her contributions have earned her several awards, including Regional Best Nurse of the Year (1999). She is a Fellow of the Civilian Institute of Democratic Administration (FCIDA) and the Ghana College of Nurses and Midwives. Her commitment to community health is reflected in her publications and presentations.",
  },
];

export const carouselItems: CarouselItem[] = [
  {
    image: Carousel1,
    title: "Award-winning",
    subtitle: "public health",
    buttonText: "LEARN MORE >",
    buttonLink: "#",
  },
  {
    image: Carousel2,
    title: "Ensuring gender",
    subtitle: "digital inclusion",
    buttonText: "Why Talking Books? >>",
    buttonLink: "/why-talking-books",
  },
  {
    image: Carousel3,
    title: "Giving",
    subtitle: "a voice",
    buttonText: "Read a case study",
    buttonLink: "#",
  },
];

export const services: Service[] = [
  {
    title: "Program Planning and Field Implementation",
    imagePath: Illustration1,
  },
  {
    title: "Technology Training and Technical Support",
    imagePath: Illustration2,
  },
  {
    title: "Social and Behavior Change Communication (SBCC)",
    imagePath: Illustration3,
  },
  {
    title: "Content Design and Audio Production",
    imagePath: Illustration4,
  },
  {
    title: "Monitoring and Evaluation *including field surveys",
    imagePath: Illustration5,
  },
  {
    title: "Community Dialogue and Group Facilitation",
    imagePath: Illustration6,
  },
];

export const partners: Partner[] = [
  { name: "Ghana Health Service" },
  { name: "Ministry of Food and Agriculture" },
  { name: "UNICEF" },
  { name: "CARE" },
  { name: "VSO" },
  { name: "Esoko" },
  { name: "Savana Signatures" },
  { name: "AGRA" },
  { name: "MEDA" },
  { name: "World Cocoa Foundation" },
];

export const topicColumns: Topic[][] = [
  [
    { name: "Sustainable Agriculture" },
    { name: "Animal Husbandry" },
    { name: "Climate Change Adaption and Resilience" },
    { name: "Food Security" },
    { name: "Nutrition" },
    { name: "Maternal, Newborn, and Child Health (MNCH)" },
    { name: "Breastfeeding" },
  ],
  [
    { name: "Birth Registration" },
    { name: "Girls Education" },
    { name: `Gender Equality and Women's Empowerment` },
    { name: "Child Marriage" },
    { name: "Adolescent Sexual and Reproductive Health" },
    { name: "COVID-19" },
    { name: "Financial Literacy" },
  ],
  [
    { name: "Mental Health" },
    { name: "Negotiation" },
    { name: "Shared Household Decision Making" },
    { name: "Value Chains" },
    { name: "VSLAs" },
    { name: "Water, Sanitation, and Hygiene (WASH)" },
    { name: "Youth Empowerment" },
  ],
];

export const GlobalPartnersData: GlobalPartner[] = [
  { logo: Care, name: "CARE" },
  { logo: VSO, name: "VSO" },
  { logo: Unicef, name: "UNICEF" },
  { logo: Meda, name: "MEDA" },
  { logo: Agra, name: "AGRA" },
  { logo: Itu, name: "ITU" },
  { logo: Ansi, name: "ANSI" },
  {
    logo: Mofa,
    name: "Ministry of Food & Agriculture",
  },
  { logo: Cbcc, name: "CBCC" },
  { logo: Savana, name: "Savana Signatures" },
  { logo: Ghdf, name: "ghdf" },
  { logo: Wcf, name: "World Cocoa Foundation" },
  { logo: Landsea, name: "Landesa" },
  { logo: Saa, name: "Sasawka Africa Association" },
  { logo: Techno, name: "TechnoServe" },
  { logo: Arm, name: "ARM" },
  { logo: Tostan, name: "Tostan" },
  { logo: Volo, name: "volo" },
  { logo: Mercy, name: "Mercy Corps" },
  { logo: Ifad, name: "IFDC" },
  { logo: Miller, name: "miller" },
  { logo: Principe, name: "principles" },
  { logo: Connect, name: "connective" },
  { logo: Esoko, name: "esoko" },
  { logo: Usaid, name: "usaid" },
  { logo: Creative, name: "creative" },
  { logo: Bmgf, name: "BillG" },
  { logo: Star, name: "star" },
  { logo: Giz, name: "giz" },
  { logo: IFAD, name: "ifad" },
  { logo: Crs, name: "catholic" },
  { logo: Ghs, name: "ghs" },
];

export const testimonial = {
  quote:
    "With Talking Books, community health volunteers are delivering consistent and quality health education. We have had a more than 100% increase in mothers attending antenatal care visits.",
  author: "Catherine Mesianto Lengewe",
  role: "Technical and Strategy Director, Centre for Behaviour Change and Communication",
};

export const statistics: Statistic[] = [
  {
    imageSrc: Book,
    value: "773 million",
    description: "adults and youth lack basic literacy skills",
  },
  {
    imageSrc: Bulb,
    value: "750 million",
    description: "people live without electricity",
  },
  {
    imageSrc: Phone,
    value: "635+ million",
    description:
      "adults in low and middle-income countries don't have mobile phones—including 400 million women",
  },
  {
    imageSrc: ConnectIcon,
    value: "1B+ women",
    description:
      "don't use mobile internet because of cost, illiteracy, safety and security, and other barriers",
  },
];
