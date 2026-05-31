import Link from 'next/link';
import styles from './landing.module.css';

const LogoSvg = () => (
  <svg className={styles.navLogoIcon} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ng" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#E8820C" />
      </linearGradient>
    </defs>
    <g transform="translate(100,100)">
      <path d="M0,-70 C5,-22 22,-5 0,0 C-22,-5 -5,-22 0,-70Z" fill="url(#ng)" />
      <path d="M0,70 C-5,22 -22,5 0,0 C22,5 5,22 0,70Z" fill="url(#ng)" />
      <path d="M-70,0 C-22,5 -5,22 0,0 C-5,-22 -22,-5 -70,0Z" fill="url(#ng)" />
      <path d="M70,0 C22,-5 5,-22 0,0 C5,22 22,5 70,0Z" fill="url(#ng)" />
      <line x1="0" y1="-26" x2="0" y2="-42" stroke="#1B2A4A" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="0" cy="-44" r="2.5" fill="#1B2A4A" />
      <line x1="0" y1="26" x2="0" y2="42" stroke="#1B2A4A" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="0" cy="44" r="2.5" fill="#1B2A4A" />
      <line x1="-26" y1="0" x2="-42" y2="0" stroke="#1B2A4A" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="-44" cy="0" r="2.5" fill="#1B2A4A" />
      <line x1="26" y1="0" x2="42" y2="0" stroke="#1B2A4A" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="44" cy="0" r="2.5" fill="#1B2A4A" />
      <line x1="-18" y1="-18" x2="-38" y2="-38" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="-43" cy="-43" r="6" fill="none" stroke="#1B2A4A" strokeWidth="3" />
      <line x1="18" y1="-18" x2="38" y2="-38" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="43" cy="-43" r="6" fill="none" stroke="#1B2A4A" strokeWidth="3" />
      <line x1="-18" y1="18" x2="-38" y2="38" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="-43" cy="43" r="6" fill="none" stroke="#1B2A4A" strokeWidth="3" />
      <line x1="18" y1="18" x2="38" y2="38" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="43" cy="43" r="6" fill="none" stroke="#1B2A4A" strokeWidth="3" />
    </g>
  </svg>
);

const LogoSvgSmall = ({ width = 18, height = 18 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ng2" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#E8820C" />
      </linearGradient>
    </defs>
    <g transform="translate(100,100)">
      <path d="M0,-70 C5,-22 22,-5 0,0 C-22,-5 -5,-22 0,-70Z" fill="url(#ng2)" />
      <path d="M0,70 C-5,22 -22,5 0,0 C22,5 5,22 0,70Z" fill="url(#ng2)" />
      <path d="M-70,0 C-22,5 -5,22 0,0 C-5,-22 -22,-5 -70,0Z" fill="url(#ng2)" />
      <path d="M70,0 C22,-5 5,-22 0,0 C5,22 22,5 70,0Z" fill="url(#ng2)" />
    </g>
  </svg>
);

const StarSvg = ({ id, style }: { id: string; style: React.CSSProperties }) => (
  <svg className={styles.heroStar} style={style} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={id} x1=".5" y1="0" x2=".5" y2="1">
        <stop offset="0%" stopColor="#F5A623" />
        <stop offset="100%" stopColor="#E8820C" />
      </linearGradient>
    </defs>
    <g transform="translate(50,50)">
      <path d="M0,-40 C3,-12 12,-3 0,0 C-12,-3 -3,-12 0,-40Z" fill={`url(#${id})`} />
      <path d="M0,40 C-3,12 -12,3 0,0 C12,3 3,12 0,40Z" fill={`url(#${id})`} />
      <path d="M-40,0 C-12,3 -3,12 0,0 C-3,-12 -12,-3 -40,0Z" fill={`url(#${id})`} />
      <path d="M40,0 C12,-3 3,-12 0,0 C3,12 12,3 40,0Z" fill={`url(#${id})`} />
    </g>
  </svg>
);

const FeatureWatermarks = {
  realtime: (
    <svg className={styles.featureWatermark} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="55" width="14" height="38" rx="3" fill="#3B82F6" />
      <rect x="28" y="35" width="14" height="58" rx="3" fill="#6366F1" />
      <rect x="48" y="20" width="14" height="73" rx="3" fill="#8B5CF6" />
      <rect x="68" y="42" width="14" height="51" rx="3" fill="#3B82F6" />
      <line x1="5" y1="95" x2="95" y2="95" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="15" cy="52" r="3.5" fill="#F5A623" />
      <circle cx="35" cy="32" r="3.5" fill="#F5A623" />
      <circle cx="55" cy="17" r="3.5" fill="#F5A623" />
      <circle cx="75" cy="39" r="3.5" fill="#F5A623" />
      <polyline points="15,52 35,32 55,17 75,39" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  privacy: (
    <svg className={styles.featureWatermark} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 8 L88 24 L88 52 C88 72 70 88 50 94 C30 88 12 72 12 52 L12 24 Z" stroke="#10B981" strokeWidth="4" fill="#10B981" fillOpacity="0.15" />
      <polyline points="34,50 45,62 66,38" stroke="#F5A623" strokeWidth="5" />
    </svg>
  ),
  lightning: (
    <svg className={styles.featureWatermark} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="58,5 20,55 48,55 42,95 80,45 52,45" fill="#F5A623" />
    </svg>
  ),
  globe: (
    <svg className={styles.featureWatermark} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round">
      <circle cx="50" cy="50" r="42" stroke="#3B82F6" strokeWidth="3.5" fill="#3B82F6" fillOpacity="0.1" />
      <ellipse cx="50" cy="50" rx="20" ry="42" stroke="#3B82F6" strokeWidth="3" />
      <line x1="8" y1="50" x2="92" y2="50" stroke="#3B82F6" strokeWidth="3" />
      <path d="M15 28 Q50 38 85 28" stroke="#3B82F6" strokeWidth="2.5" />
      <path d="M15 72 Q50 62 85 72" stroke="#3B82F6" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="5" fill="#F5A623" stroke="none" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="#F5A623" strokeWidth="2" opacity="0.5" />
    </svg>
  ),
  events: (
    <svg className={styles.featureWatermark} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="18,10 18,78 38,60 52,90 64,84 50,54 72,54" fill="#8B5CF6" />
      <circle cx="72" cy="28" r="12" fill="none" stroke="#F5A623" strokeWidth="4" />
      <line x1="80" y1="36" x2="92" y2="48" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  selfhosted: (
    <svg className={styles.featureWatermark} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="12" width="76" height="22" rx="4" stroke="#1B2A4A" strokeWidth="4" fill="#1B2A4A" fillOpacity="0.08" />
      <rect x="12" y="42" width="76" height="22" rx="4" stroke="#1B2A4A" strokeWidth="4" fill="#1B2A4A" fillOpacity="0.08" />
      <rect x="12" y="72" width="76" height="22" rx="4" stroke="#1B2A4A" strokeWidth="4" fill="#1B2A4A" fillOpacity="0.08" />
      <circle cx="76" cy="23" r="5" fill="#10B981" stroke="none" />
      <circle cx="76" cy="53" r="5" fill="#10B981" stroke="none" />
      <circle cx="76" cy="83" r="5" fill="#EF4444" stroke="none" />
      <line x1="22" y1="23" x2="58" y2="23" stroke="#6366F1" strokeWidth="3" />
      <line x1="22" y1="53" x2="58" y2="53" stroke="#6366F1" strokeWidth="3" />
      <line x1="22" y1="83" x2="58" y2="83" stroke="#6366F1" strokeWidth="3" />
    </svg>
  ),
};

export default function LandingPage() {
  return (
    <div className={styles.body}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <LogoSvg />
          <span className={styles.navLogoText}>
            Nova <span>Analytics</span>
          </span>
        </Link>
        <div className={styles.navActions}>
          <Link href="/login" className={`${styles.btn} ${styles.btnGhost}`}>
            Log in
          </Link>
          <Link href="/signup" className={`${styles.btn} ${styles.btnPrimary}`}>
            Get started
          </Link>
        </div>
      </nav>

      <section className={styles.hero}>
        <StarSvg id="sg1" style={{ top: '10%', left: '7%', width: 30, animation: 'floatA 6s ease-in-out infinite' }} />
        <StarSvg id="sg2" style={{ top: '22%', right: '9%', width: 20, animation: 'floatB 8s ease-in-out infinite 1s' }} />
        <StarSvg id="sg3" style={{ top: '60%', left: '4%', width: 15, animation: 'floatC 7s ease-in-out infinite 2s' }} />
        <StarSvg id="sg4" style={{ top: '70%', right: '6%', width: 23, animation: 'floatA 9s ease-in-out infinite .5s' }} />
        <StarSvg id="sg5" style={{ top: '36%', left: '93%', width: 13, animation: 'floatB 5.5s ease-in-out infinite 3s' }} />
        <StarSvg id="sg6" style={{ top: '83%', left: '17%', width: 18, animation: 'floatC 7.5s ease-in-out infinite 1.5s' }} />
        <StarSvg id="sg7" style={{ top: '14%', left: '53%', width: 11, animation: 'floatA 10s ease-in-out infinite 4s' }} />

        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Privacy-first analytics platform
        </div>
        <h1>
          Understand your data.<br />
          Own your <span className="accent">insights.</span>
        </h1>
        <p>
          Nova Analytics gives your team a clear, real-time view of what matters
          — without compromising your users&apos; privacy.
        </p>
        <div className={styles.heroActions}>
          <Link href="/signup" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
            Start for free
          </Link>
          <Link href="/login" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}>
            Log in to dashboard
          </Link>
        </div>

        <div className={styles.heroPreview}>
          <div className={styles.previewFrame}>
            <div className={styles.previewTopbar}>
              <div className={styles.previewDot} style={{ background: '#FF5F57' }} />
              <div className={styles.previewDot} style={{ background: '#FEBC2E' }} />
              <div className={styles.previewDot} style={{ background: '#28C840' }} />
              <div style={{ flex: 1, marginLeft: 8, background: 'var(--border)', height: 20, borderRadius: 4, maxWidth: 220 }} />
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewSidebar}>
                <div className={styles.previewSidebarLogo}>
                  <LogoSvgSmall />
                  <span className={styles.previewSidebarLogoText}>Nova Analytics</span>
                </div>
                <div className={`${styles.previewNavItem} ${styles.previewNavItemActive}`}>
                  <span className={styles.previewNavDot} />Dashboard
                </div>
                <div className={styles.previewNavItem}>
                  <span className={styles.previewNavDot} />Websites
                </div>
                <div className={styles.previewNavItem}>
                  <span className={styles.previewNavDot} />Events
                </div>
                <div className={styles.previewNavItem}>
                  <span className={styles.previewNavDot} />Reports
                </div>
                <div className={styles.previewNavItem}>
                  <span className={styles.previewNavDot} />Settings
                </div>
              </div>
              <div className={styles.previewMain}>
                <div className={styles.previewStats}>
                  <div className={styles.previewStat}>
                    <div className={styles.previewStatLabel}>Visitors</div>
                    <div className={styles.previewStatValue}>24.8k</div>
                    <div className={styles.previewStatChange}>↑ 12.4%</div>
                  </div>
                  <div className={styles.previewStat}>
                    <div className={styles.previewStatLabel}>Pageviews</div>
                    <div className={styles.previewStatValue}>91.2k</div>
                    <div className={styles.previewStatChange}>↑ 8.1%</div>
                  </div>
                  <div className={styles.previewStat}>
                    <div className={styles.previewStatLabel}>Bounce rate</div>
                    <div className={styles.previewStatValue}>38.2%</div>
                    <div className={styles.previewStatChange} style={{ color: '#F87171' }}>↑ 2.3%</div>
                  </div>
                  <div className={styles.previewStat}>
                    <div className={styles.previewStatLabel}>Avg. time</div>
                    <div className={styles.previewStatValue}>2:47</div>
                    <div className={styles.previewStatChange}>↑ 5.6%</div>
                  </div>
                </div>
                <div className={styles.previewChartArea}>
                  <div className={styles.previewChartTitle}>Visitors — Last 30 days</div>
                  <div className={styles.previewChartBars}>
                    <div className={styles.previewBar} style={{ height: '35%' }} />
                    <div className={styles.previewBar} style={{ height: '50%' }} />
                    <div className={styles.previewBar} style={{ height: '42%' }} />
                    <div className={styles.previewBar} style={{ height: '65%' }} />
                    <div className={styles.previewBar} style={{ height: '58%' }} />
                    <div className={styles.previewBar} style={{ height: '72%' }} />
                    <div className={styles.previewBar} style={{ height: '68%' }} />
                    <div className={styles.previewBar} style={{ height: '80%' }} />
                    <div className={styles.previewBar} style={{ height: '75%' }} />
                    <div className={styles.previewBar} style={{ height: '90%' }} />
                    <div className={styles.previewBar} style={{ height: '85%' }} />
                    <div className={styles.previewBar} style={{ height: '95%' }} />
                    <div className={styles.previewBar} style={{ height: '88%' }} />
                    <div className={styles.previewBar} style={{ height: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statsStrip}>
        <div className={styles.statsStripInner}>
          <div>
            <div className={styles.statItemValue}>100%</div>
            <div className={styles.statItemLabel}>Cookie-free tracking</div>
          </div>
          <div>
            <div className={styles.statItemValue}>&lt;1kb</div>
            <div className={styles.statItemLabel}>Script footprint</div>
          </div>
          <div>
            <div className={styles.statItemValue}>∞</div>
            <div className={styles.statItemLabel}>Data ownership — yours forever</div>
          </div>
        </div>
      </div>

      <section className={styles.features}>
        <div>
          <span className={styles.sectionLabel}>Features</span>
          <h2 className={styles.sectionTitle}>
            Everything your team needs.<br />Nothing it doesn&apos;t.
          </h2>
          <p className={styles.sectionSub}>
            Built for teams who want clarity without complexity and data without compromise.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            {FeatureWatermarks.realtime}
            <h3>Real-time dashboard</h3>
            <p>See live visitor counts, page views, and events as they happen — no refresh needed.</p>
          </div>
          <div className={styles.featureCard}>
            {FeatureWatermarks.privacy}
            <h3>Privacy by design</h3>
            <p>No cookies, no fingerprinting, no personal data collection. GDPR compliant out of the box.</p>
          </div>
          <div className={styles.featureCard}>
            {FeatureWatermarks.lightning}
            <h3>Lightweight script</h3>
            <p>Under 1kb tracking script. Zero impact on your page performance or Core Web Vitals.</p>
          </div>
          <div className={styles.featureCard}>
            {FeatureWatermarks.globe}
            <h3>Global audience insights</h3>
            <p>Visitor locations, languages, devices, and referrers — all in one clean view.</p>
          </div>
          <div className={styles.featureCard}>
            {FeatureWatermarks.events}
            <h3>Custom events & goals</h3>
            <p>Track button clicks, form submissions, and conversions with a single line of code.</p>
          </div>
          <div className={styles.featureCard}>
            {FeatureWatermarks.selfhosted}
            <h3>Self-hosted</h3>
            <p>Your data stays on your infrastructure. No third-party access, ever.</p>
          </div>
        </div>
      </section>

      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.sectionLabel}>How it works</span>
          <h2 className={styles.sectionTitle}>Up and running in minutes.</h2>
          <p className={styles.sectionSub}>No complicated setup, no data engineering required.</p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Create your account</h3>
              <p>Sign up and add your first website in under 60 seconds.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Add the script</h3>
              <p>Paste one line of code into your site&apos;s HTML. That&apos;s it.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Watch data flow</h3>
              <p>Your dashboard populates in real time. No configuration needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className={styles.ctaCard}>
            <h2>Ready to take control of your analytics?</h2>
            <p>Join teams who chose privacy-first insights over surveillance capitalism.</p>
            <div className={styles.ctaActions}>
              <Link href="/signup" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnWhite}`}>
                Create free account
              </Link>
              <Link href="/login" className={`${styles.btn} ${styles.btnLg} ${styles.btnGhostWhite}`}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="#" className={styles.footerLogo}>
          <LogoSvgSmall width={22} height={22} />
          <span className={styles.footerLogoText}>Nova Analytics</span>
        </a>
        <span className={styles.footerCopy}>© 2025 Nova Analytics. All rights reserved.</span>
        <div className={styles.footerLinks}>
          <a href="#">Privacy</a>
          <a href="#">Docs</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
