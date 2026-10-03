export interface SocialLinks {
  linkedin?: string;
  x?: string;
  facebook?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  socials?: SocialLinks;
}

export const socialMedia = {
  instagram: "https://www.instagram.com/language_access_africa?igsh=MXc4cmx0bjc0MjJqYg%3D%3D&utm_source=qr",
  facebook: "https://www.facebook.com/share/1Bbio5a5pq/?mibextid=wwXIfr",
  x: "https://x.com/LinAcsAfri",
  linkedin: "https://www.linkedin.com/company/languageaccess-africa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BDgs4szfZTVW16EiAcambcQ%3D%3D"
};

// Central dictionary of all profiles to avoid duplicating bios/images
const p: Record<string, TeamMember> = {
  idris: {
    name: "Idris Ayomo Oke",
    role: "Founder/Director and Research Scientist",
    bio: "Idris is the founder and director of LanguageAccess Africa and works within the Research and Language Documentation team as a research scientist. He is an adept language expert with experience in research, computational linguistics, translation and interpretation, and data labelling. Before he became a university academic, he has worked in the language industry from Nigeria to the UK, contributing to the development of contemporary language solutions and bridging linguistic gaps. At LanguageAccess Africa, he directs every operation through experience, teamwork and precision.",
    image: "/LanguageAccess Africa Profile Pictures/Oke_s headshot.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/idris-oke/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B%2Bel7nlNTt6T49aaKgYKNA%3D%3D",
      x: "https://x.com/OkeAyomo"
    }
  },
  abdullahi: {
    name: "Abdullahi Akinola Adekola",
    role: "Head of Operations | Linguist & Localisation Specialist",
    bio: "Abdullahi is a linguist and localisation specialist with a strong interest in African languages, translation, language technology, and multilingual communication. As Head of Operations at LanguageAccess Africa, he contributes to strategic planning, coordination, partnerships, and organisational development. He also works on the localisation of culturally appropriate language solutions, supporting efforts to make information accessible, preserve linguistic diversity, and integrate African languages into emerging digital technologies across Africa.",
    image: "/LanguageAccess Africa Profile Pictures/Abdullahi.jpeg"
  },
  bushroh: {
    name: "Bushroh Jayeola Yusuf",
    role: "Head of Quality Assurance/Research Associate",
    bio: "Bushroh is a linguist and researcher committed to advancing African languages through research, quality assurance, and language technology. At LanguageAccess Africa, she works as Head of Quality Assurance and Research Associate, where she works to uphold quality standards across language, research, and technology projects, ensuring accuracy, consistency, and cultural relevance in the organisation’s outputs. She also contributes to language documentation, linguistics research, and evidence-based initiatives that support the preservation, accessibility, and digital advancement of African languages across Africa.",
    image: "/LanguageAccess Africa Profile Pictures/Bushroh.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/bushroh-jayeola-yusuf-542712291?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },
  maryam: {
    name: "Maryam Damilola Abdulkareem",
    role: "Senior Research Scientist/Field Linguist | Grant & Proposal Writer",
    bio: "Maryam is a linguist and researcher with experience in applied linguistics, language documentation, speech-data annotation, transcription, and academic writing. As a Senior Research Scientist/Field Linguist, she contributes to the documentation, analysis, and preservation of African languages, building reliable linguistic resources for research and digital language applications. As a Grant & Proposal Writer, she researches funding opportunities and develops grant proposals that communicate LanguageAccess Africa’s projects, goals, and impact effectively, thereby building partnerships and attracting funding for the organisation’s language-focused initiatives.",
    image: "/LanguageAccess Africa Profile Pictures/Maryam.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/maryam-abdulkareem-7b2a71265/"
    }
  },
  muhammad: {
    name: "Muhammad Oluwatishe Ibikunle",
    role: "Product Designer | Visual Identity Specialist | Translator & Interpreter",
    bio: "Muhammad is a language translator and visual identity specialist. He builds brands through design and problem-solving visuals, as well as translating and interpreting languages. As a linguist at LanguageAccess Africa, he specialises in building cohesive visual identities and products that help scale and communicate with precision. He also contributes to translating and interpreting in Yoruba and English, thereby fostering communication within and beyond Africa.",
    image: "/LanguageAccess Africa Profile Pictures/Muhammad.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/muhammad-ibikunle-68b6253b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      x: "https://x.com/Mdee_grafix"
    }
  },
  arabo: {
    name: "Arabo Nazifi Mohammad",
    role: "Translator and Interpreter",
    bio: "Arabo is a dedicated and experienced French tutor, translator, and interpreter with over eight years of experience interpreting and translating from and to French. He is also an adept French tutor with over 6 years’ experience. He holds a Bachelor's Degree in Linguistics/French and have helped people develop confidence in speaking, reading, writing, and understanding the French language. He oversees the French language operations at LanguageAccess Africa.",
    image: "/LanguageAccess Africa Profile Pictures/Arabo.jpeg"
  },
  taslim: {
    name: "Taslim Alade Abdulrozaq",
    role: "Digital Archivist | Technical Writer",
    bio: "Taslim is a linguist, editor, and researcher with interests in phonetics, syntax, and language documentation. As LanguageAccess Africa’s digital archivist and technical writer, he contributes to the preservation and documentation of linguistic and cultural resources while making knowledge accessible through clear and effective writing.",
    image: "/LanguageAccess Africa Profile Pictures/Taslim.jpeg"
  },
  saheed: {
    name: "Saheed Olaide Samba",
    role: "Translator and Interpreter",
    bio: "Saheed is a linguist, translator, interpreter, and researcher with a degree in Linguistics from Bayero University, Kano. For his BA dissertation, he worked on the acquisition of Arabic case markers by second-language learners in Nigeria. He was a participant in the SOAS University of London–BUK collaborative workshop on literary translation, demonstrating his commitment to language development and intercultural communication.",
    image: "/LanguageAccess Africa Profile Pictures/Saheed.jpeg"
  },
  jamiah: {
    name: "Jãmi'ah Abolore Sulaiman",
    role: "Grant and Proposal Writer",
    bio: "Jamiah, an up-and-coming linguist, works at LanguageAccess Africa on grant and proposal development, writing, editing and proofreading of budgets, and research initiatives that move the organisation forward."
  },
  kemi: {
    name: "Oluwakemi Elizabeth Joseph",
    role: "Content Developer",
    bio: "Oluwakemi serves the content developer role at LanguageAccess Africa where she turns facts and ideas into helpful content that attracts readers, builds trust, and promotes LanguageAccess Africa’s operations. As an up-and-coming linguist, she is also interested in phonetics, speech sound analysis, language documentation and lexicography with experience in data collection and documentation.",
    image: "/LanguageAccess Africa Profile Pictures/Kemi.jpeg"
  },
  bethel: {
    name: "Bethel Oreoluwa Olaiya",
    role: "Communications & Public Engagement Officer",
    bio: "Bethel Olaiya is a language educator, storyteller, and communications professional passionate about the intersection of language, culture, and people. Her work focuses on using strategic communication, digital media, and creative storytelling to make African languages more visible, accessible, and relevant particularly to younger generations. As Communications and Public Engagement Officer at LanguageAccess Africa, she contributes to shaping the organisation’s public voice, strengthening audience engagement, and fostering meaningful conversations around Africa’s rich linguistic diversity and the power of language.",
    image: "/LanguageAccess Africa Profile Pictures/Bethel.jpeg"
  },
  akorede: {
    name: "Akorede Alex Abiola",
    role: "Research Scientist/Field Linguist",
    bio: "Akorede Alex Abiola is a Research Scientist and Field Linguist with a strong interest in Phonetics, Phonology, and Language documentation. He's passionate about preserving African diverse languages. At LanguageAccess Africa, he contributes to research and documentation efforts that help make African languages more accessible, and better represented.",
    image: "/LanguageAccess Africa Profile Pictures/Akorede.jpeg"
  },
  yinka: {
    name: "Yinka Abeeb Adesina",
    role: "AI Developer",
    bio: "Yinka is an AI Developer actively contributing to LanguageAccess Africa's technological initiatives. (Full biography pending).",
    image: "/LanguageAccess Africa Profile Pictures/yinka_adesiina.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/lugacity/",
      x: "https://x.com/Iam_yinkah",
      facebook: "https://www.facebook.com/adeshina.olayinka2"
    }
  },
  uthman: {
    name: "Uthman Zakariya",
    role: "LLM Engineer"
  },
  drBello: {
    name: "Dr Bello Shehu Abdullahi",
    role: "Expert Advisor (French and Hausa)",
    bio: "Bello Shehu Abdullahi, PhD, is the French/Hausa Expert Advisor at LanguageAccess Africa, where he brings exceptional linguistic, cultural and translation expertise to the organisation’s work. A Senior Lecturer in the Department of Linguistics and Foreign Languages at Bayero University, Kano, he also serves as a Research Fellow at the university’s Nigeria Centre for Reading Research and Development. Dr Abdullahi specialises in discourse analysis, translation, morphology and sociolinguistics and has widely published across these fields. He is a registered member of the Nigerian Institute of Translators and Interpreters (NITI).",
    image: "/LanguageAccess Africa Profile Pictures/Dr Bello.jpeg"
  },
  drTella: {
    name: "Dr Samson Adekunle Tella",
    role: "Expert Advisor (Batonu and Yoruba)",
    bio: "Tella Samson Adekunle, PhD, is the Batonu/Yoruba Expert Advisor at LanguageAccess Africa. He teaches Linguistics at Obafemi Awolowo University, Ile-Ife, Nigeria and formerly taught Linguistics at the Kwara State University Malete. He had his Bachelor of Arts degree in Yoruba Language, Master’s degree in Linguistics and PhD in Linguistics. Dr Tella’s areas of specialisation are language documentation, Natural Language Processing (NLP), Yoruba grammar and general syntax. His Masters’ and PhD research theses were carried out on BatonuLanguage and he has a number of publications in Yoruba Language.",
    image: "/LanguageAccess Africa Profile Pictures/Dr Tella.jpeg"
  },
  drAdemuyiwa: {
    name: "Dr Adewale Lukman Ademuyiwa",
    role: "Expert Advisor (Yoruba)",
    bio: "Adewale Lukman Ademuyiwa, PhD, is the Yoruba Expert Advisor at LanguageAccess Africa, where he provides linguistic, literary and cultural expertise for the organisation’s Yoruba-language and literary initiatives. He is a lecturer and researcher in the Department of Linguistics and African Languages at Obafemi Awolowo University, Ile-Ife. Dr Ademuyiwa holds bachelor’s, master’s and doctoral degrees in Yoruba Language and Literature from the university, alongside an NCE in Hausa and Yoruba. His teaching, research and publications span Yoruba oral and postcolonial literature, literary theory, stylistics and criticism. A published author and editor, he has received fellowships from IIAS and TOFAC, recognising his academic scholarship.",
    image: "/LanguageAccess Africa Profile Pictures/Dr Ademuyiwa.jpg"
  }
};

export const team: Record<string, TeamMember[]> = {
  management: [
    p.idris,
    p.abdullahi,
    p.bushroh,
  ],
  researchAndDocumentation: [
    p.maryam,
    p.bushroh,
    p.idris,
    p.akorede,
  ],
  languageServices: [
    p.abdullahi,
    p.saheed,
    p.muhammad,
    p.taslim,
    p.arabo,
  ],
  aiAndLanguageTechnology: [
    p.yinka,
    p.uthman,
    p.idris,
  ],
  knowledgeTrainingCommunications: [
    p.bethel,
    p.jamiah,
    p.maryam,
    p.kemi,
    p.taslim,
    p.muhammad,
  ],
  advisors: [
    p.drBello,
    p.drTella,
    p.drAdemuyiwa,
  ],
};
