import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SOCIALS = [
  { icon: <FaGithub size={18} />,   href: 'https://github.com/',   label: 'GitHub'   },
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaTwitter size={18} />,  href: 'https://twitter.com/',  label: 'Twitter'  },
  { icon: <FaEnvelope size={18} />, href: 'mailto:you@email.com',  label: 'Email'    },
];

export const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      style={{
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: 9999,
        padding: '20px 10px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.40)',
        zIndex: 30,
      }}
    >
      {SOCIALS.map(({ icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.2, color: '#fff' }}
          style={{
            color: 'rgba(255,255,255,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s',
          }}
        >
          {icon}
        </motion.a>
      ))}
    </motion.div>
  );
};
