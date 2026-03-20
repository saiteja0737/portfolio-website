import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { HiAcademicCap } from 'react-icons/hi'

const companies = [
  {
    name: 'California State University, Sacramento',
    logo: 'https://www.google.com/s2/favicons?domain=csus.edu&sz=64',
    fallbackLogo: null,
    Icon: HiAcademicCap,
    location: 'Sacramento, CA',
    roles: [
      {
        title: 'Volunteer Research Assistant — Generative AI Project',
        period: 'Aug 2024 – Jan 2025',
        metrics: [
          { value: '2,000+',      label: 'Research Articles Processed' },
          { value: '1,300',       label: 'High-Relevance Papers Identified' },
          { value: 'BERTopic',    label: 'Topic Modeling Applied' },
          { value: 'NLP Pipeline',label: 'Built for Article Classification' },
        ],
      },
    ],
  },
  {
    name: 'State Bank of India',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg',
    Icon: null,
    location: 'Bangalore, India',
    roles: [
      {
        title: 'Associate',
        period: 'June 2022 – Jan 2023',
        metrics: [
          { value: '60+',  label: 'Loan Applications Assessed' },
          { value: '$1M+', label: 'Loan Portfolio Evaluated' },
          { value: '25%',  label: 'Processing Time Reduced' },
          { value: '30%',  label: 'Approval Accuracy Improved' },
          { value: '15%',  label: 'Defaults Reduced' },
        ],
      },
      {
        title: 'Junior Associate',
        period: 'Jan 2021 – May 2022',
        metrics: [
          { value: '50+',  label: 'Business Accounts Onboarded' },
          { value: '200+', label: 'Customer Profiles Verified' },
          { value: '30%',  label: 'Documentation Errors Reduced' },
          { value: '35%',  label: 'Product Sales Increased' },
        ],
      },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function MetricCard({ metric }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(30, 58, 95, 0.15)', transition: { duration: 0.2 } }}
      className="flex flex-col gap-1.5 cursor-default"
      style={{
        background: 'white',
        borderRadius: 12,
        padding: 16,
        borderLeft: '4px solid #1e3a5f',
        boxShadow: '0 2px 8px rgba(30,58,95,0.07)',
        flex: '1 1 180px',
        maxWidth: 220,
      }}
    >
      <span style={{ fontSize: 24, fontWeight: 700, color: '#0f2044', lineHeight: 1 }}>
        {metric.value}
      </span>
      <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.4, fontFamily: 'Inter, sans-serif' }}>
        {metric.label}
      </span>
    </motion.div>
  )
}

function MetricsGrid({ metrics }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
    >
      {metrics.map((m) => (
        <MetricCard key={m.label} metric={m} />
      ))}
    </motion.div>
  )
}

function RoleBlock({ role, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ paddingLeft: 36 }}
    >
      {/* Timeline dot — navy ring with white center */}
      <div
        className="absolute rounded-full z-10"
        style={{
          left: 0,
          top: 7,
          width: 14,
          height: 14,
          background: 'white',
          border: '4px solid #1e3a5f',
          boxShadow: '0 0 0 2px #1e3a5f22',
        }}
      />

      {/* Role header */}
      <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#0f2044', fontFamily: "'Playfair Display', serif" }}>
          {role.title}
        </h3>
        <span style={{ fontSize: 14, color: '#2d5a8e', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
          {role.period}
        </span>
      </div>

      <MetricsGrid metrics={role.metrics} />
    </motion.div>
  )
}

function CompanyBlock({ company, companyIndex }) {
  return (
    <div style={{ marginBottom: companyIndex === 0 ? 56 : 0 }}>
      {/* Company header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between flex-wrap gap-2"
        style={{ marginBottom: 32 }}
      >
        <div className="flex items-center gap-3">
          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              style={{ width: 36, height: 36, objectFit: 'contain' }}
              onError={(e) => {
                if (company.fallbackLogo && e.target.src !== company.fallbackLogo) {
                  e.target.src = company.fallbackLogo
                }
              }}
            />
          ) : (
            <company.Icon size={36} color="#1e3a5f" />
          )}
          <span style={{ fontSize: 25, fontWeight: 800, color: '#0f2044', fontFamily: "'Playfair Display', serif" }}>
            {company.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5" style={{ color: '#2d5a8e', fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
          <HiLocationMarker size={14} />
          <span>{company.location}</span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div
          className="absolute top-2 bottom-2"
          style={{ left: 6, width: 2, background: '#1e3a5f' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {company.roles.map((role, i) => (
            <RoleBlock key={role.title} role={role} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <>
      {/* Divider between Skills and Experience */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <motion.section
        id="experience"
        style={{ padding: '80px 60px 96px', background: '#f8f9fa' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>

          {/* Section heading */}
          <div className="text-center" style={{ marginBottom: 56 }}>
            <h2
              className="font-bold text-[#0f2044]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px' }}
            >
              Experience
            </h2>
          </div>

          {companies.map((company, i) => (
            <CompanyBlock key={company.name} company={company} companyIndex={i} />
          ))}

        </div>
      </motion.section>
    </>
  )
}
