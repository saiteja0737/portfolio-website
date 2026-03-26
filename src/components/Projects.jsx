import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaTimes } from 'react-icons/fa'

const projects = [
  {
    title: 'Credit Risk Insights Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    oneliner: 'Developed a real-time credit risk dashboard with explainability on 27M+ records.',
    tech: ['Python', 'LightGBM', 'XGBoost', 'CatBoost', 'Random Forest', 'Streamlit', 'SHAP'],
    github: 'https://github.com/saiteja0737/Credit-Risk-Insights-Dashboard',
    problem: 'Enable accurate and interpretable credit risk assessment to support loan approval decisions.',
    approach: 'Built ML models on 27M+ loan records and developed a real-time Streamlit dashboard that predicts default probability, segments applicants into risk tiers, provides SHAP-based explanations for each prediction, and allows dynamic threshold simulation for approval, rejection, and manual review decisions.',
    impact: 'Enabled transparent and data-driven credit decisions by combining risk prediction, explainability, and threshold-based approval strategies.',
  },
  {
    title: 'Technical Interview Prep Tutor',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    oneliner: 'Built a role-aware AI tutor that generates tailored technical interview responses across analytics and AI roles.',
    tech: ['Python', 'OpenAI API', 'GPT-4.1-mini', 'Ollama', 'Qwen2.5-coder'],
    github: 'https://github.com/saiteja0737/Technical-Interview-Prep-Tutor',
    problem: 'Generic interview prep tools provide uniform answers and fail to adapt to role-specific expectations across analytics and AI roles.',
    approach: 'Engineered a prompt-driven system with role-based context and implemented multi-turn conversation memory, integrating OpenAI and Ollama models for dynamic response generation.',
    impact: 'Enabled personalized, context-aware interview preparation with differentiated responses per role, improving relevance and depth of technical explanations.',
  },
  {
    title: 'Research Paper Summarizer',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
    oneliner: 'Built an NLP system to automate literature reviews and identify high-relevance research.',
    tech: ['Python', 'OpenAI API', 'GPT', 'Prompt Engineering'],
    github: 'https://github.com/saiteja0737/Research-Paper-Summarizer',
    problem: 'Manually reviewing research papers is time-consuming and inefficient.',
    approach: 'Built a prompt-engineered LLM workflow to process multiple PDFs, extract structured metadata via JSON outputs, and generate relevance-scored Excel reports.',
    impact: 'Automated literature surveys, significantly reducing manual effort and improving research efficiency.',
  },
  {
    title: 'SBA Loan Default Prediction',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600',
    oneliner: 'Built ML models on 890K loan records using a cost-sensitive framework, estimating $2.64B in optimized lending profit.',
    tech: ['Python', 'Ensemble Methods', 'Decision Trees', 'Neural Networks', 'Regression'],
    github: 'https://github.com/saiteja0737/SBA-Loan-Default-Prediction-and-Profit-Optimization-using-ML',
    problem: 'Optimize loan approval decisions while balancing risk and profitability.',
    approach: 'Built ML models on 890K loan records using a cost-sensitive profit framework (+5% repaid, −25% default), evaluating 14 algorithms and identifying Bagging as the top-performing model.',
    impact: 'Estimated $2.64B in net profit with optimized approval strategy, approving 76% lowest-risk applicants.',
  },
  {
    title: 'Fake News Detection using NLP',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600',
    oneliner: 'Built an NLP pipeline to distinguish fake vs real news, revealing significant differences in language complexity and sentiment.',
    tech: ['Python', 'NLP', 'LDA', 'Sentiment Analysis', 'n-gram Analysis', 'Stylometric Analysis'],
    github: 'https://github.com/saiteja0737/Fake-News-Analysis-using-NLP',
    problem: 'Differentiate misinformation from authentic journalism using linguistic patterns.',
    approach: 'Conducted NLP analysis on YouTube transcripts using sentiment, n-gram, stylometric, and topic modeling techniques to capture structural and linguistic differences.',
    impact: 'Identified statistically significant patterns (p < 0.05), showing fake news had 26% lower vocabulary complexity and more fear-driven language.',
  },
  {
    title: 'Database & Data Warehouse — Property Management',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
    oneliner: 'Designed a MySQL data warehouse with ETL pipelines and Tableau dashboards for scalable property management analytics.',
    tech: ['SQL', 'MySQL', 'ETL', 'ERDPlus', 'Tableau'],
    github: 'https://github.com/saiteja0737/SQL-Projects',
    problem: 'Manage leasing and tenant data efficiently for business reporting.',
    approach: 'Designed a MySQL data warehouse with ETL pipelines using advanced SQL and stored procedures, and built Tableau dashboards for business intelligence.',
    impact: 'Enabled structured reporting and improved decision-making for property management operations.',
  },
  {
    title: 'Smart Stocking — Inventory Optimization',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600',
    oneliner: 'Optimized inventory allocation using linear programming, reducing costs by 49.7%.',
    tech: ['Python', 'Linear Programming', 'PuLP'],
    github: 'https://github.com/saiteja0737/Smart-Stocking-Inventory-Optimization-',
    problem: 'Reduce inventory costs while maintaining optimal stock levels.',
    approach: 'Developed a linear programming model to optimize stock allocation based on demand and constraints.',
    impact: 'Reduced inventory costs by 49.7% through optimized stocking strategies.',
  },
  {
    title: 'Pinterest Image Analytics Pipeline',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
    oneliner: 'Built a cloud-based image analytics pipeline achieving 95% correlation in engagement insights.',
    tech: ['Python', 'Selenium', 'AWS Rekognition', 'SageMaker', 'Firebase'],
    github: 'https://github.com/saiteja0737/Pinterest-Image-Analytics-Pipeline',
    problem: 'Analyze visual characteristics of images and understand engagement patterns on Pinterest.',
    approach: 'Built an image analytics pipeline by scraping Pinterest images, using AWS Rekognition for object detection and computing image quality metrics (brightness and sharpness), while separately collecting and analyzing engagement data (likes, shares, repins) through statistical methods.',
    impact: 'Identified a strong 95% correlation between shares and repins, along with insights into image composition and quality.',
  },
  {
    title: 'Sales Performance Analysis Dashboard',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600',
    oneliner: 'Automated sales analysis for 45K+ records using Excel and VBA to improve reporting efficiency.',
    tech: ['Microsoft Excel', 'VLOOKUP', 'INDEX-MATCH', 'VBA', 'Pivot Tables'],
    github: 'https://github.com/saiteja0737/Excel-Analytics-Projects',
    problem: 'Analyze large-scale sales data efficiently for reporting and insights.',
    approach: 'Built an interactive Excel dashboard with VBA automation to process and analyze 45K+ sales records.',
    impact: 'Improved reporting efficiency and enabled faster business decision-making.',
  },
  {
    title: 'Sales Profitability Dashboard',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    oneliner: 'Designed a Tableau dashboard to analyze profitability across 15+ markets.',
    tech: ['Tableau', 'MySQL'],
    github: 'https://github.com/saiteja0737/Tableau-Sales-Analysis-Dashboard',
    problem: 'Understand profitability trends across multiple markets.',
    approach: 'Developed a Tableau dashboard integrating sales data to visualize profitability metrics.',
    impact: 'Provided insights across 15+ markets to support data-driven strategy decisions.',
  },
]

function TechBadge({ label }) {
  return (
    <span
      style={{
        background: '#1e3a5f',
        color: 'white',
        fontSize: 11,
        fontWeight: 500,
        padding: '3px 8px',
        borderRadius: 50,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, boxShadow: '0 16px 40px rgba(30,58,95,0.14)' }}
      onClick={() => onOpen(project)}
      className="cursor-pointer flex flex-col"
      style={{
        background: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(30,58,95,0.07)',
        border: '1px solid #e5e7eb',
        width: 'calc(33.333% - 16px)',
        minWidth: '280px',
      }}
    >
      {/* Cover image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        style={{ width: '100%', height: 200, objectFit: 'cover' }}
      />

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {/* Title */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 16,
            fontWeight: 700,
            color: '#0f2044',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* One-liner */}
        <p
          style={{
            fontSize: 13,
            color: '#4b5563',
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.oneliner}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
          {project.tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>

        {/* GitHub button */}
        <div style={{ marginTop: 'auto', paddingTop: 12 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-200"
            style={{
              border: '1.5px solid #1e3a5f',
              borderRadius: 50,
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: 600,
              color: '#1e3a5f',
              textDecoration: 'none',
            }}
          >
            <FaGithub size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function Modal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100vw', height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
            }}
          >
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                margin: 'auto',
                background: 'white',
                borderRadius: '12px',
                maxWidth: '600px',
                width: '90%',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '40px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
                zIndex: 1001,
                position: 'relative',
              }}
            >
              {/* Close button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
                <button
                  onClick={onClose}
                  style={{
                    background: '#f3f4f6', border: 'none',
                    borderRadius: '50%', width: 36, height: 36,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#374151',
                  }}
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                fontWeight: 700,
                color: '#0f2044',
                marginBottom: 16,
                lineHeight: 1.3,
              }}>
                {project.title}
              </h2>

              {/* Description */}
              <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p style={{ margin: 0 }}><strong style={{ color: '#0f2044' }}>Problem:</strong> {project.problem}</p>
                <p style={{ margin: 0 }}><strong style={{ color: '#0f2044' }}>Approach:</strong> {project.approach}</p>
                <p style={{ margin: 0 }}><strong style={{ color: '#0f2044' }}>Impact:</strong> {project.impact}</p>
              </div>

              {/* Tech badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {project.tech.map((t) => <TechBadge key={t} label={t} />)}
              </div>

              {/* GitHub button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-200"
                style={{
                  border: '2px solid #1e3a5f',
                  borderRadius: 50,
                  padding: '10px 24px',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1e3a5f',
                  textDecoration: 'none',
                }}
              >
                <FaGithub size={15} />
                View on GitHub
              </a>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <motion.section
        id="projects"
        className="bg-[#f8f9fa]"
        style={{ padding: '80px 60px 96px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Heading */}
          <div className="text-center" style={{ marginBottom: 56 }}>
            <h2
              className="font-bold text-[#0f2044]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px' }}
            >
              Projects
            </h2>
          </div>

          {/* Grid — flex wrap, 3 cols desktop, centers orphaned last card */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </div>

        </div>
      </motion.section>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
