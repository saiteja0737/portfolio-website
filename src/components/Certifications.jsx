import { motion } from 'framer-motion'
import { FaUniversity } from 'react-icons/fa'

const certs = [
  {
    name: 'AWS Certified Cloud Practitioner',
    logoUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    issuer: 'Amazon Web Services',
    date: 'February 2026',
    link: 'https://www.credly.com/badges/37da05d1-ec5e-4e8f-9f55-5e1fe57e6963/linked_in_profile',
  },
  {
    name: 'CAIIB — Certified Associate of Indian Institute of Bankers',
    Icon: FaUniversity,
    issuer: 'Indian Institute of Banking and Finance',
    date: 'January 2023',
  },
  {
    name: 'JAIIB — Junior Associate of Indian Institute of Bankers',
    Icon: FaUniversity,
    issuer: 'Indian Institute of Banking and Finance',
    date: 'August 2022',
  },
]

function CertCard({ cert, index }) {
  const Icon = cert.Icon || null

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(30, 58, 95, 0.15)', transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center cursor-default"
      style={{
        background: 'white',
        borderRadius: 16,
        borderTop: '4px solid #1e3a5f',
        boxShadow: '0 2px 12px rgba(30,58,95,0.07)',
        border: '1px solid #e5e7eb',
        padding: '32px 24px',
        gap: 12,
      }}
    >
      {/* Logo / Icon */}
      <div style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
        {cert.logoUrl ? (
          <img
            src={cert.logoUrl}
            alt={cert.name}
            style={{ width: 64, height: 64, objectFit: 'contain' }}
          />
        ) : (
          <Icon size={64} color="#1e3a5f" />
        )}
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 16,
        fontWeight: 700,
        color: '#0f2044',
        lineHeight: 1.4,
      }}>
        {cert.name}
      </h3>

      {/* Issuer */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 13,
        color: '#4b5563',
        lineHeight: 1.4,
      }}>
        {cert.issuer}
      </p>

      {/* Date */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 13,
        color: '#2d5a8e',
        fontWeight: 500,
      }}>
        {cert.date}
      </p>

      {/* Verified badge — AWS only */}
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 8,
            display: 'inline-block',
            background: '#dcfce7',
            color: '#16a34a',
            fontSize: 12,
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: 50,
            textDecoration: 'none',
          }}
        >
          ✓ Verified on Credly
        </a>
      )}
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <>
      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <motion.section
        id="certifications"
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
              Certifications
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>

        </div>
      </motion.section>
    </>
  )
}
