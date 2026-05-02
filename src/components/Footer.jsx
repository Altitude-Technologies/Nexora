import { useState } from 'react'
import { Link } from 'react-router-dom'
import nexoraLogo from '../assets/nexora.jpeg'
import PrivacyModal from './PrivacyModal'
import TermsModal from './TermsModal'

const SERVICES_LINKS = [
  { label: 'Web Development',   to: '/services/web-development'    },
  { label: 'Mobile Apps',       to: '/services/mobile-app'         },
  { label: 'UI/UX Design',      to: '/services/ui-ux'              },
  { label: 'AI & Automation',   to: '/ai-automation'               },
  { label: 'Digital Marketing', to: '/services/digital-marketing'  },
]

const COMPANY_LINKS = [
  { label: 'About Us',          to: '/about'   },
  { label: 'Our Work',          to: '/work'    },
  { label: 'Pricing',           to: '/pricing'  },
  { label: 'Careers',           to: '/careers'  },
  { label: 'Contact',           to: '/contact' },
  { label: 'Free Consultation', to: '/contact' },
]

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms,   setShowTerms]   = useState(false)

  return (
    <footer style={{ background: '#0D1230' }}>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms   && <TermsModal   onClose={() => setShowTerms(false)}   />}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* ── Brand ── */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5">
              <img src={nexoraLogo} alt="Dextriva" className="h-10 w-auto rounded" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building the next generation of digital products — powered by AI, designed for scale,
              and built for businesses that mean business.
            </p>
          </div>

          {/* ── Services ── */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Services</h5>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h5>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Dextriva. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => setShowPrivacy(true)} className="text-white/25 text-xs hover:text-white/55 transition-colors">Privacy Policy</button>
            <button onClick={() => setShowTerms(true)}   className="text-white/25 text-xs hover:text-white/55 transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  )
}
