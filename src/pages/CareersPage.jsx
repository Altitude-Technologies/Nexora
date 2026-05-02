import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import { useScrollReveal }  from '../hooks/useScrollReveal'
import CTABand from '../components/CTABand'
import {
  ArrowRight, MapPin, Clock, Briefcase, Users, Zap,
  Heart, TrendingUp, Star, Globe, Code2, Palette,
  BarChart2, Bot, Smartphone, Plus, Minus, Coffee,
  BookOpen, Award, Laptop,
} from 'lucide-react'

const OPENINGS = [
  {
    title: 'Frontend Developer',
    type: 'Full-Time',
    location: 'Remote',
    dept: 'Engineering',
    icon: Code2,
    iconBg: 'rgba(103,232,249,0.35)', iconColor: '#0e7490',
    pastel: 'rgba(207,250,254,0.35)', border: 'rgba(103,232,249,0.30)',
    skills: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
    desc: 'Build beautiful, high-performance web interfaces for our clients using modern frameworks.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-Time',
    location: 'Remote',
    dept: 'Design',
    icon: Palette,
    iconBg: 'rgba(196,181,253,0.35)', iconColor: '#6d28d9',
    pastel: 'rgba(243,232,255,0.35)', border: 'rgba(196,181,253,0.30)',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    desc: 'Create intuitive and visually stunning user experiences across web and mobile products.',
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-Time',
    location: 'Remote',
    dept: 'Engineering',
    icon: Smartphone,
    iconBg: 'rgba(147,197,253,0.35)', iconColor: '#1d4ed8',
    pastel: 'rgba(219,234,254,0.35)', border: 'rgba(147,197,253,0.30)',
    skills: ['React Native', 'Android', 'iOS', 'Firebase'],
    desc: 'Develop cross-platform mobile applications with smooth UX and scalable architecture.',
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-Time',
    location: 'Remote',
    dept: 'Marketing',
    icon: BarChart2,
    iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    pastel: 'rgba(220,252,231,0.35)', border: 'rgba(134,239,172,0.30)',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
    desc: 'Drive growth for our clients through data-driven digital marketing campaigns.',
  },
  {
    title: 'AI & Automation Engineer',
    type: 'Full-Time',
    location: 'Remote',
    dept: 'AI',
    icon: Bot,
    iconBg: 'rgba(252,211,77,0.35)', iconColor: '#92400e',
    pastel: 'rgba(254,243,199,0.35)', border: 'rgba(252,211,77,0.30)',
    skills: ['Python', 'LLM APIs', 'Workflow Automation', 'Node.js'],
    desc: 'Build AI-powered systems, chatbots, and automation workflows for business clients.',
  },
  {
    title: 'Business Development Executive',
    type: 'Full-Time',
    location: 'Remote / Hybrid',
    dept: 'Sales',
    icon: TrendingUp,
    iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    pastel: 'rgba(220,252,231,0.35)', border: 'rgba(134,239,172,0.30)',
    skills: ['Lead Generation', 'Client Relations', 'Proposal Writing', 'CRM'],
    desc: 'Identify and convert new business opportunities while nurturing client relationships.',
  },
]

const PERKS = [
  { icon: Laptop,    title: 'Remote-First',         desc: 'Work from anywhere — we believe in flexibility and trust.'          },
  { icon: TrendingUp,title: 'Fast Growth',           desc: 'Grow your skills rapidly in a startup environment that moves fast.' },
  { icon: BookOpen,  title: 'Learning Budget',       desc: 'We invest in your learning — courses, books, and certifications.'   },
  { icon: Coffee,    title: 'Flexible Hours',        desc: 'No rigid 9-to-5. Deliver great work on your own schedule.'         },
  { icon: Heart,     title: 'Collaborative Culture', desc: 'A supportive team that celebrates wins and learns from failures.'   },
  { icon: Award,     title: 'Performance Bonuses',   desc: 'Your hard work is recognised and rewarded generously.'             },
]

const VALUES = [
  { icon: Zap,       label: 'Move Fast'         },
  { icon: Star,      label: 'Deliver Excellence' },
  { icon: Users,     label: 'Team First'         },
  { icon: Globe,     label: 'Think Big'          },
]

const FAQS = [
  { q: 'Is prior experience required?',         a: 'We value skills and passion over years of experience. Strong portfolio work and genuine enthusiasm matter most to us.'    },
  { q: 'Are all roles fully remote?',           a: 'Yes, all current openings are remote. Some sales roles may offer a hybrid option depending on location.'                 },
  { q: 'What is the hiring process like?',      a: 'Application → Portfolio/Task Review → Intro Call → Technical / Skills Round → Offer. We keep it fast — usually under 2 weeks.' },
  { q: 'Can I apply for multiple roles?',       a: 'Absolutely. If you feel you are a good fit for more than one role, apply for both and let us know in your cover note.'   },
]

export default function CareersPage() {
  const headerRef  = useRevealOnMount()
  const valuesRef  = useScrollReveal()
  const openRef    = useScrollReveal()
  const perksRef   = useScrollReveal()
  const faqRef     = useScrollReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 85% 40%, rgba(30,127,224,0.07) 0%, transparent 65%),
                       radial-gradient(ellipse 50% 40% at 10% 80%, rgba(13,18,48,0.04) 0%, transparent 60%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-20 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.07]"
          style={{ border: '2px solid #1E7FE0', transform: 'translate(35%,-20%)' }} />
        <div className="absolute right-0 top-20 w-[380px] h-[380px] rounded-full pointer-events-none opacity-[0.05]"
          style={{ border: '2px solid #0D1230', transform: 'translate(40%,-10%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(30,127,224,0.08)', color: '#1E7FE0', border: '1px solid rgba(30,127,224,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-brand" />
              We're Hiring
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-2 mb-6 leading-[1.1]">
              Build the Future with<br />
              <span className="text-gradient">Nexora</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed mb-10 max-w-2xl">
              Join a passionate team building next-gen digital products for businesses worldwide.
              We move fast, learn constantly, and celebrate every win together.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#openings"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl hover:-translate-y-px transition-transform duration-200 text-base"
                style={{ color: '#fff', boxShadow: '0 4px 20px rgba(30,127,224,0.4)' }}
              >
                View Open Roles <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold rounded-xl border-2 border-navy/20 hover:border-brand hover:text-brand hover:-translate-y-px transition-all duration-200 shadow-sm text-base"
              >
                Send Your Resume <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: '6+', label: 'Open Positions'  },
                { value: '100%', label: 'Remote Work'   },
                { value: 'Fast', label: 'Career Growth' },
                { value: '2wk', label: 'Hiring Process' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center px-5 py-3 rounded-xl"
                  style={{ background: 'rgba(30,127,224,0.05)', border: '1px solid rgba(30,127,224,0.15)', boxShadow: '0 2px 12px rgba(30,127,224,0.06)' }}>
                  <p className="font-display font-black text-2xl text-navy">{value}</p>
                  <p className="text-navy/45 text-xs mt-0.5 whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 bg-white" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <p className="text-navy/65 text-lg leading-relaxed mb-10">
              At Nexora, we're not just building products — we're building careers.
              Our culture is built on four core values:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {VALUES.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl px-4 py-4 text-sm font-semibold text-navy flex flex-col items-center gap-2"
                  style={{ background: 'rgba(207,250,254,0.4)', border: '1px solid rgba(103,232,249,0.3)' }}>
                  <Icon className="w-5 h-5 text-brand" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="openings" className="py-20" ref={openRef}
        style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">Join Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Open Positions
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">All roles are fully remote. We hire for talent, not location.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPENINGS.map(({ title, type, location, dept, icon: Icon, iconBg, iconColor, pastel, border, skills, desc }, i) => (
              <div key={title} className="rounded-2xl p-7 card-lift fade-up relative overflow-hidden flex flex-col group"
                style={{ background: pastel, backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: `1px solid ${border}`, boxShadow: '0 4px 32px rgba(13,18,48,0.06)', transitionDelay: `${(i % 3) * 0.07}s` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${iconColor}60, ${iconColor}20)` }} />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                    <Icon className="w-5 h-5" style={{ color: iconColor }} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${iconColor}12`, color: iconColor, border: `1px solid ${iconColor}25` }}>
                    {dept}
                  </span>
                </div>

                <h3 className="font-display font-bold text-navy text-lg mb-1">{title}</h3>
                <p className="text-navy/55 text-sm mb-4 leading-relaxed flex-1">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {skills.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background: 'rgba(13,18,48,0.05)', color: 'rgba(13,18,48,0.55)' }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-5 text-xs text-navy/45">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{type}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{location}</span>
                </div>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-px"
                  style={{ background: `${iconColor}12`, color: iconColor, border: `1px solid ${iconColor}25` }}
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Open application */}
          <div className="mt-10 rounded-2xl p-8 fade-up text-center"
            style={{ background: 'linear-gradient(135deg, rgba(30,127,224,0.05), rgba(13,18,48,0.03))', border: '1px solid rgba(30,127,224,0.12)' }}>
            <Briefcase className="w-8 h-8 text-brand mx-auto mb-3" />
            <h3 className="font-display font-bold text-xl text-navy mb-2">Don't see your role?</h3>
            <p className="text-navy/55 text-sm mb-5 max-w-md mx-auto">
              We're always looking for talented people. Send us your portfolio and tell us how you can contribute.
            </p>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 px-7 py-3 font-semibold rounded-xl text-white text-sm hover:-translate-y-px transition-transform duration-200"
              style={{ boxShadow: '0 4px 16px rgba(30,127,224,0.35)' }}
            >
              Send Open Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="py-20 bg-white" ref={perksRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">Why Join Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Life at Nexora
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">We take care of our team so they can do their best work.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PERKS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="glass-card rounded-2xl p-7 fade-up card-lift"
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-display font-bold text-navy text-base mb-1.5">{title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <CareersFAQ faqRef={faqRef} />

      <CTABand />
    </>
  )
}

function CareersFAQ({ faqRef }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 relative overflow-hidden" ref={faqRef}
      style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">FAQs</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Common Questions</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Everything you need to know before applying.</p>
        </div>
        <div className="space-y-3 fade-up">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div key={q} className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: isOpen ? '1px solid rgba(30,127,224,0.25)' : '1px solid rgba(13,18,48,0.08)', boxShadow: isOpen ? '0 8px 32px rgba(30,127,224,0.08)' : '0 2px 12px rgba(13,18,48,0.04)', background: isOpen ? 'rgba(207,250,254,0.25)' : 'rgba(255,255,255,0.9)' }}>
                <button className="w-full flex items-center justify-between px-7 py-5 text-left" onClick={() => setOpen(isOpen ? null : i)}>
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-xs transition-colors duration-300"
                      style={{ background: isOpen ? '#1E7FE0' : 'rgba(13,18,48,0.06)', color: isOpen ? '#fff' : '#0D1230' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-display font-bold text-base transition-colors duration-200 ${isOpen ? 'text-brand' : 'text-navy'}`}>{q}</span>
                  </div>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                    style={{ background: isOpen ? '#1E7FE0' : 'rgba(13,18,48,0.06)' }}>
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-navy" />}
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                  <div className="px-7 pb-6 flex gap-4">
                    <div className="w-px bg-brand/20 ml-3.5 flex-shrink-0" />
                    <p className="text-navy/60 text-sm leading-relaxed ml-3">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
