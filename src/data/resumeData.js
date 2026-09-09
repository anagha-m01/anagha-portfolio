// All content here is drawn directly from Anagha M's resume.
// No projects, technologies, metrics, or experience are invented.

export const profile = {
  name: "Anagha M",
  role: "AI/ML Engineer",
  location: "Thrissur, Kerala",
  email: "anagha2162@gmail.com",
  phone: "+91 9207302985",
  linkedin: "https://linkedin.com/in/anagha-m01",
  github: "https://github.com/anagha-m01",
  summary:
    "AI/ML Engineer building practical AI applications, machine learning solutions, and backend systems with Python.",
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "QuanHack Solutions",
    location: "Kochi, Kerala",
    period: "Mar 2026 – Present",
    current: true,
    points: [
      "Build and maintain Python/FastAPI backend services, REST APIs, and LLM-based workflows for AI applications.",
      "Implement semantic search using PostgreSQL and pgvector to improve retrieval over keyword-based search.",
      "Develop third-party API integrations and Redis-backed asynchronous workflows within Dockerized services.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Docker", "REST APIs"],
  },
  {
    role: "Data Science Trainee",
    org: "Luminar Technolab",
    location: "Kochi, Kerala",
    period: "Jun 2025 – Feb 2026",
    current: false,
    points: [
      "Built classification and predictive analytics models in Python (Pandas, NumPy) on real-world datasets as part of capstone projects.",
      "Applied NLP and computer vision techniques in training projects and presented results through interactive Streamlit dashboards.",
    ],
    tech: ["Python", "Pandas", "NumPy", "NLP", "Computer Vision", "Streamlit"],
  },
  {
    role: "Application Engineer",
    org: "Centum Controls Pvt. Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Sep 2024 – Apr 2025",
    current: false,
    points: [
      "Deployed PLC, DCS, and SCADA solutions, managing I/O databases, alarm configuration, testing, and commissioning for industrial process automation.",
    ],
    tech: ["PLC", "DCS", "SCADA", "Industrial Automation"],
  },
];

export const projects = [
  {
    title: "Agentic Learning Coach",
    featured: true,
    description:
      "AI-powered learning platform that builds personalized study plans through a 5-stage multi-agent LLM pipeline with deterministic code-based scoring.",
    tech: ["Python", "FastAPI", "React", "LangGraph", "Groq API", "Pydantic"],
    github: "https://github.com/anagha-m01/agentic-learning-coach",
    demo: "https://agentic-learning-coach.vercel.app",
  },
  {
    title: "Customer Conversion Prediction",
    featured: false,
    description:
      "Machine learning classification model predicting customer conversion with 95% campaign-targeting accuracy through exploratory data analysis and feature engineering.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "EDA"],
    github: null,
    demo: null,
  },
  {
    title: "Mosquito Wrecker",
    featured: false,
    description:
      "Interactive vision-based game tracking hand gestures in real time using computer vision and landmark detection.",
    tech: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    github: "https://github.com/anagha-m01/mosquito-wrecker",
    demo: null,
  },
];

export const flagshipProject = {
  name: "Agentic Learning Coach",
  description:
    "An AI learning platform that generates adaptive study plans using five specialized LLM components across a structured learning workflow.",
  points: [
    "Built with React and FastAPI, integrating Groq-hosted LLMs across the skill analysis, planning, question generation, evaluation, and feedback stages.",
    "Uses deterministic, code-based answer scoring and Pydantic input validation instead of relying on LLM self-grading.",
  ],
  flow: [
    { id: "skill", label: "Skill Analyzer", note: "Assesses current level" },
    { id: "planner", label: "Planner", note: "Builds the day-by-day plan" },
    { id: "question", label: "Question Generator", note: "Writes adaptive questions" },
    { id: "evaluator", label: "Evaluator", note: "Code-based, deterministic scoring" },
    { id: "feedback", label: "Feedback Agent", note: "Turns results into guidance" },
  ],
  tech: ["React", "FastAPI", "Groq API", "Pydantic"],
  github: "https://github.com/anagha-m01/agentic-learning-coach",
};

export const otherProjects = [
  {
    name: "Customer Conversion Prediction in Digital Marketing",
    description:
      "A machine learning classification project for predicting customer conversion, covering preprocessing, exploratory analysis, model training, and evaluation.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "EDA"],
  },
];

export const skillCategories = [
  {
    title: "AI & Generative AI",
    skills: [
      "Multi-Agent Systems",
      "LangGraph",
      "LLMs",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "Semantic Search",
      "pgvector",
      "Pinecone",
    ],
  },
  {
    title: "Machine Learning & Data",
    skills: [
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Computer Vision",
      "NLP",
      "OpenCV",
      "MediaPipe",
      "Pandas",
      "NumPy",
      "Streamlit",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "React",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Elasticsearch",
      "Git",
      "WhatsApp Business API",
    ],
  },
];

// Keep skillClusters alias for any backwards compatibility
export const skillClusters = skillCategories.map((c) => ({
  title: c.title,
  items: c.skills,
}));

export const certifications = [
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google — Coursera",
    date: "Jun 2024",
    url: "https://coursera.org/verify/VSAN97KCMWYA",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google — Coursera",
    date: "May 2025",
    url: "https://coursera.org/verify/CNQQK3RP0HXN",
  },
  {
    title: "Cybersecurity and Its Ten Domains",
    issuer: "University System of Georgia — Coursera",
    date: "Nov 2022",
    url: "https://coursera.org/verify/LLE6QR5898S3",
  },
];

