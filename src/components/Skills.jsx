import { motion } from 'framer-motion'
import { SiStreamlit, SiPlotly, SiOllama } from 'react-icons/si'
import { BiBrain } from 'react-icons/bi'


const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const allSkills = [
  // Row 1
  { name: 'Python',           icon: `${D}/python/python-original.svg` },
  { name: 'SQL',              icon: `${D}/azuresqldatabase/azuresqldatabase-original.svg` },
  { name: 'R',                icon: `${D}/r/r-original.svg` },
  { name: 'Machine Learning', ReactIcon: BiBrain },
  { name: 'OpenAI API',       icon: 'https://img.icons8.com/ios-filled/100/chatgpt.png' },
  { name: 'Ollama',           ReactIcon: SiOllama },
  { name: 'MySQL',            icon: `${D}/mysql/mysql-original.svg` },
  { name: 'PostgreSQL',       icon: `${D}/postgresql/postgresql-original.svg` },
  { name: 'AWS',              icon: `${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  // Row 2
  { name: 'Excel',            icon: 'https://img.icons8.com/color/96/microsoft-excel-2019.png' },
  { name: 'Tableau',          icon: 'https://img.icons8.com/color/96/tableau-software.png' },
  { name: 'Power BI',         icon: 'https://img.icons8.com/color/96/power-bi.png' },
  { name: 'Matplotlib',       icon: `${D}/matplotlib/matplotlib-original.svg` },
  { name: 'Plotly',           ReactIcon: SiPlotly },
  { name: 'Streamlit',        ReactIcon: SiStreamlit },
  // Row 3
  { name: 'Cursor',           icon: 'https://avatars.githubusercontent.com/u/126759922?s=200&v=4' },
  { name: 'VS Code',          icon: `${D}/vscode/vscode-original.svg` },
  { name: 'Git',              icon: `${D}/git/git-original.svg` },
  { name: 'Firebase',         icon: `${D}/firebase/firebase-plain.svg` },
]

function SkillCard({ skill, index }) {
  const Icon = skill.ReactIcon || null

  if (skill.textOnly) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
        whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(30,58,95,0.13)' }}
        className="flex flex-col items-center gap-2 cursor-default group"
      >
        <div
          className="flex items-center justify-center rounded-[12px] border border-slate-200 group-hover:border-[#1e3a5f]/30 transition-all duration-200"
          style={{ width: 100, height: 100, background: '#f8f9fa' }}
        >
          <span style={{ color: '#1e3a5f', fontWeight: 600, fontSize: 14 }}>
            {skill.name}
          </span>
        </div>
        <span className="text-[12px] font-medium text-slate-600 text-center leading-tight" style={{ maxWidth: 96 }}>
          {skill.name}
        </span>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
      whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(30,58,95,0.13)' }}
      className="flex flex-col items-center gap-2 cursor-default group"
    >
      <div
        className="flex items-center justify-center rounded-[12px] border border-slate-200 group-hover:border-[#1e3a5f]/30 transition-all duration-200"
        style={{ width: 100, height: 100, background: '#f8f9fa' }}
      >
        {Icon ? (
          <Icon size={48} color="#1e3a5f" />
        ) : (
          <img
            src={skill.icon}
            alt={skill.name}
            className="object-contain"
            style={{ width: 52, height: 52 }}
            onError={(e) => {
              if (skill.fallback && e.target.src !== skill.fallback) {
                e.target.src = skill.fallback
              }
            }}
          />
        )}
      </div>
      <span className="text-[12px] font-medium text-slate-600 text-center leading-tight" style={{ maxWidth: 96 }}>
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      {/* Divider between Hero and Skills */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <motion.section
        id="skills"
        className="bg-[#f8f9fa]"
        style={{ padding: '80px 60px 96px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Section heading */}
          <div className="text-center" style={{ marginBottom: 56 }}>
            <h2
              className="font-bold text-[#0f2044]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px' }}
            >
              Technologies I Work With
            </h2>
          </div>

          {/* Single flat grid of all skill cards */}
          <motion.div
            className="flex flex-wrap gap-5 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.3 }}
          >
            {allSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>

        </div>
      </motion.section>
    </>
  )
}
