import { motion } from 'framer-motion'
import { FaStar, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa'

const education = [
  {
    school: 'California State University, Sacramento',
    image: '/portfolio-website/csus.jpg',
    objectPosition: 'left center',
    degree: 'Master of Science in Business Analytics',
    gpa: '3.9 / 4.0',
    location: 'Sacramento, CA',
    dates: 'Aug 2024 – Dec 2025',
    description: 'Focused on machine learning, data analytics and AI-driven business solutions with a capstone project in credit risk prediction.',
  },
  {
    school: 'Krishna University',
    image: '/portfolio-website/krishna.jpg',
    degree: 'Master of Science in Physics',
    gpa: '4.0 / 4.0',
    location: 'Vijayawada, India',
    dates: 'July 2017 – April 2019',
    description: 'Specialized in Quantum Mechanics, Material Sciences and Condensed Matter Physics — building deep quantitative and mathematical foundations.',
  },
  {
    school: 'Krishna University',
    image: '/portfolio-website/krishna.jpg',
    degree: 'Bachelor of Science in Mathematics, Physics & Computer Science',
    gpa: '3.99 / 4.0',
    location: 'Vijayawada, India',
    dates: 'July 2014 – April 2017',
    description: 'Multidisciplinary foundation across mathematics, physics and computer science — developing strong analytical and problem-solving skills.',
  },
]

function EducationCard({ edu, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: '0 12px 30px rgba(30, 58, 95, 0.15)', transition: { duration: 0.2 } }}
      className="edu-card"
      style={{
        display: 'flex',
        background: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(30,58,95,0.07)',
        border: '1px solid #e5e7eb',
        borderLeft: '4px solid #1e3a5f',
      }}
    >
      {/* Left: university image */}
      <img
        src={edu.image}
        alt={edu.school}
        className="edu-card-img"
        style={{
          width: 220,
          height: 180,
          flexShrink: 0,
          objectFit: 'cover',
          objectPosition: edu.objectPosition || 'center',
          display: 'block',
          borderRadius: '12px 0 0 12px',
          imageOrientation: 'from-image',
          imageRendering: 'high-quality',
        }}
        onError={(e) => { e.target.style.display = 'none' }}
      />

      {/* Right: text content */}
      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
        {/* University name */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 18,
          fontWeight: 700,
          color: '#0f2044',
          lineHeight: 1.3,
        }}>
          {edu.school}
        </h3>

        {/* Degree */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 15,
          fontWeight: 600,
          color: '#1e3a5f',
          lineHeight: 1.4,
        }}>
          {edu.degree}
        </p>

        {/* Meta row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 2 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
            <FaStar size={11} color="#f59e0b" />
            GPA {edu.gpa}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
            <FaMapMarkerAlt size={11} color="#1e3a5f" />
            {edu.location}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
            <FaCalendar size={11} color="#1e3a5f" />
            {edu.dates}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 14,
          color: '#6b7280',
          fontStyle: 'italic',
          lineHeight: 1.6,
          marginTop: 4,
        }}>
          {edu.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <>
      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <motion.section
        id="education"
        className="bg-[#f8f9fa]"
        style={{ padding: '80px 60px 96px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Heading */}
          <motion.div
            className="text-center"
            style={{ marginBottom: 56 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-bold text-[#0f2044]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px' }}
            >
              Education
            </h2>
          </motion.div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {education.map((edu, i) => (
              <EducationCard key={`${edu.school}-${i}`} edu={edu} index={i} />
            ))}
          </div>

        </div>
      </motion.section>
    </>
  )
}
