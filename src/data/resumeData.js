// All content here is drawn directly from Anagha M's resume.
// No projects, technologies, metrics, or experience are invented.

export const profile = {
  name: "Anagha M",
  role: "AI Engineer",
  location: "Thrissur, Kerala",
  email: "anagha2162@gmail.com",
  phone: "+91 9207302985",
  linkedin: "https://linkedin.com/in/anagha-m01",
  github: "https://github.com/anagha-m01",
  summary:
    "AI Engineer experienced in agentic AI applications, multi-agent LLM workflows with LangGraph orchestration, RAG systems, and production backend services using Python, FastAPI, PostgreSQL, Redis, and Docker. Skilled in REST API design, third-party integrations (WhatsApp Business, Meta Cloud API), vector search, and workflow automation for scalable, real-world AI solutions.",
};

export const pipeline = [
  { id: "user", label: "User" },
  { id: "fastapi", label: "FastAPI" },
  { id: "langgraph", label: "LangGraph" },
  { id: "agents", label: "AI Agents" },
  { id: "rag", label: "RAG" },
  { id: "vectordb", label: "Vector DB" },
  { id: "output", label: "Output" },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "QuanHack Solutions",
    location: "Kochi, Kerala",
    period: "Mar 2026 – Present",
    current: true,
    points: [
      "Built agentic AI and full-stack applications using Python, FastAPI, React, REST APIs, and LLM orchestration frameworks, automating semantic search workflows and reducing manual data retrieval by 60%.",
      "Developed REST API endpoints and vector similarity search pipelines using PostgreSQL and pgvector, improving semantic retrieval accuracy by 30% over keyword-based search.",
      "Designed multi-agent LLM workflows with LangGraph-based orchestration, incorporating human-in-the-loop approval gates and guardrail systems for reliable, production-oriented AI agent behavior.",
      "Integrated third-party platforms, including WhatsApp Business and Meta Cloud API, into backend services using Redis-backed asynchronous task queues, and Dockerized components to support scalable, production-ready systems.",
    ],
    tech: ["Python", "FastAPI", "React", "LangGraph", "PostgreSQL", "pgvector", "Redis", "Docker", "WhatsApp Business API", "Meta Cloud API"],
  },
  {
    role: "Data Science Trainee",
    org: "Luminar Technolab",
    location: "Kochi, Kerala",
    period: "Jun 2025 – Feb 2026",
    current: false,
    points: [
      "Delivered capstone projects applying classification and predictive analytics techniques in Python (Pandas, NumPy) to real-world datasets, translating raw data into actionable business insights.",
      "Applied NLP and computer vision techniques within training projects and presented findings through interactive Streamlit dashboards.",
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
      "Deployed PLC, DCS, and SCADA solutions, managing I/O databases, alarm configuration, testing, and commissioning to ensure reliable process automation and on-time project delivery.",
    ],
    tech: ["PLC", "DCS", "SCADA", "Industrial Automation"],
  },
];

export const flagshipProject = {
  name: "Agentic Learning Coach",
  description:
    "A multi-agent AI learning platform with a FastAPI backend and React frontend, orchestrating five cooperating LLM agents via the Groq API to generate adaptive, day-by-day study plans.",
  points: [
    "Orchestrates five cooperating LLM agents — skill analysis, planning, question generation, evaluation, and feedback — via the Groq API to generate adaptive, day-by-day study plans.",
    "Implemented Pydantic-based input validation and code-based answer scoring, rather than relying on the LLM to self-grade, to keep evaluation objective and prevent malformed-input failures.",
  ],
  flow: [
    { id: "skill", label: "Skill Analyzer", note: "Assesses current level" },
    { id: "planner", label: "Planner", note: "Builds the day-by-day plan" },
    { id: "question", label: "Question Generator", note: "Writes adaptive questions" },
    { id: "evaluator", label: "Evaluator", note: "Code-based, deterministic scoring" },
    { id: "feedback", label: "Feedback Agent", note: "Turns results into guidance" },
  ],
  tech: ["FastAPI", "React", "Groq API", "Pydantic", "Multi-Agent Orchestration"],
  github: "https://github.com/anagha-m01/agentic-learning-coach",
};

export const otherProjects = [
  {
    name: "Customer Conversion Prediction in Digital Marketing",
    description:
      "ML classification models to predict customer conversion, achieving 95% campaign-targeting accuracy, with end-to-end preprocessing and exploratory analysis to uncover key conversion drivers.",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "EDA"],
    metric: "95% targeting accuracy",
    // No public repo for this one — omit `github` so the code-view link doesn't render.
  },
];

export const skillClusters = [
  {
    title: "AI & GenAI",
    items: ["LLMs", "RAG", "Multi-Agent Systems", "LangGraph", "LangChain", "Guardrails & HITL Workflows", "Prompt Engineering", "Vector Databases (Pinecone, pgvector)", "Semantic Search", "NLP", "Computer Vision"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React"],
  },
  {
    title: "Databases & Search",
    items: ["PostgreSQL (pgvector)", "Redis", "Elasticsearch", "MySQL"],
  },
  {
    title: "ML / DL",
    items: ["scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "MediaPipe"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Streamlit", "n8n", "Google Colab", "Git"],
  },
  {
    title: "Integrations",
    items: ["WhatsApp Business API", "Meta Cloud API"],
  },
];

export const architecture = [
  { id: "frontend", label: "Frontend", detail: "React" },
  { id: "api", label: "FastAPI / APIs", detail: "REST endpoints" },
  { id: "orchestration", label: "Agent Orchestration", detail: "LangGraph" },
  { id: "intelligence", label: "LLMs / RAG / Guardrails", detail: "Reasoning layer" },
  { id: "data", label: "PostgreSQL / pgvector / Redis", detail: "State & retrieval" },
  { id: "external", label: "External APIs", detail: "WhatsApp, Meta Cloud" },
  { id: "deploy", label: "Docker Deployment", detail: "Containerized services" },
];

export const education = {
  degree: "B.Tech in Electronics and Communication Engineering (ECE)",
  school: "APJ Abdul Kalam Technological University",
  period: "Aug 2019 – Aug 2023",
  cgpa: "8.22",
};
