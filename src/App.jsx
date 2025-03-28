import React, { useState, useEffect } from 'react';
import './App.css';

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Data
  const data = {
    personal: {
      name: 'N Sai Akhil',
      title: 'AI/ML Developer',
      email: 'saiakhil066@gmail.com',
      phone: '+91 79896 48797',
      summary: 'Innovative AI/ML developer with 3+ years of experience building modern applications and implementing NLP pipelines. Specialized in developing RAG systems using cutting-edge LLMs and embedding models.'
    },
    experience: [
      {
        company: 'Freelance Projects',
        position: 'AI/ML Developer',
        duration: '2021 - Present',
        description: 'Developed RAG systems using Deepseek LLM and state-of-the-art embedding models. Built custom NLP pipelines for various industry applications.',
        github: {
          url: 'https://github.com/SaiAkhil066/DeepSeek-RAG-Chatbot.git',
          stars: '1.3k+ stars'
        }
      },
      {
        company: 'AI Startup (Contract)',
        position: 'Machine Learning Engineer',
        duration: '2022 - 2023',
        description: 'Implemented transformer-based models for text classification and deployed scalable ML solutions on cloud platforms.'
      }
    ],
    education: [
      {
        institution: 'University Name',
        degree: 'MCA',
        year: '2024'
      },
      {
        institution: 'College Name',
        degree: 'BCA',
        year: '2022'
      }
    ],
    certifications: [
      {
        name: 'AI/ML Specialization',
        issuer: 'Nxtwave',
        year: '2023',
        projects: [
          'Built predictive models for real-world datasets',
          'Developed computer vision applications',
          'Created NLP pipelines for text analysis'
        ]
      }
    ],
    skills: [
      'Python', 'TensorFlow', 'PyTorch', 'LLMs', 
      'RAG Systems', 'NLP', 'Deepseek', 'Transformers',
      'HuggingFace', 'LangChain', 'Embedding Models',
      'Vector Databases', 'OpenAI API', 'LLamaIndex',
      'Scikit-learn', 'Pandas', 'NumPy', 'MLflow',
      'Docker', 'AWS SageMaker', 'Google Vertex AI'
    ]
  };

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const handlePrint = () => window.print();
  const openLink = (url) => window.open(url, '_blank');

  return (
    <div className="app">
      <div className="resume">
        {/* Header */}
        <header className="resume-header">
          <h1>{data.personal.name}</h1>
          <h2>{data.personal.title}</h2>
          <div className="contact-info">
            <ContactItem icon="email" text={data.personal.email} />
            <ContactItem icon="phone" text={data.personal.phone} />
            <ContactItem icon="print" text="Print Resume" onClick={handlePrint} />
          </div>
        </header>

        {/* Sections */}
        <Section title="Professional Profile">
          <p>{data.personal.summary}</p>
        </Section>

        <Section title="Work Experience">
          {data.experience.map((exp, i) => (
            <div key={i} className="experience-item">
              <h3>{exp.company}</h3>
              <p className="meta">{exp.position} | {exp.duration}</p>
              <p>{exp.description}</p>
              {exp.github && (
                <GitHubLink url={exp.github.url} stars={exp.github.stars} />
              )}
            </div>
          ))}
        </Section>

        <Section title="Education">
          {data.education.map((edu, i) => (
            <div key={i} className="education-item">
              <h3>{edu.institution}</h3>
              <p className="meta">{edu.degree} | {edu.year}</p>
            </div>
          ))}
        </Section>

        <Section title="Certifications">
          {data.certifications.map((cert, i) => (
            <div key={i} className="certification-item">
              <h3>{cert.name} | {cert.issuer} ({cert.year})</h3>
              <ul className="project-list">
                {cert.projects.map((project, j) => (
                  <li key={j}>{project}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Technical Skills">
          <div className="skills-container">
            {data.skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </Section>
      </div>

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section className="resume-section">
    <h2 className="section-title">{title}</h2>
    <div className="section-content">{children}</div>
  </section>
);

const ContactItem = ({ icon, text, onClick }) => {
  const icons = {
    email: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>,
    print: <><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></>
  };

  return (
    <div className="contact-item" onClick={onClick}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {icons[icon]}
      </svg>
      <span>{text}</span>
    </div>
  );
};

const GitHubLink = ({ url, stars }) => (
  <div className="github-link" onClick={() => window.open(url, '_blank')}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
    <span>GitHub: {url} ({stars})</span>
  </div>
);

export default Resume;
