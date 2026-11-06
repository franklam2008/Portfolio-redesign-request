// Shared chrome for every page: Header, Footer, and the Page wrapper that
// adds the skip link and <main> landmark. Also two tiny text helpers.

function LogoMark() {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)',
      letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)',
    }}>
      FRANKL<span style={{ color: 'var(--accent)' }}>.</span>
    </span>
  );
}

function Header({ active }) {
  const { NavLink } = window.FrankLamDesignSystem_07ac32;
  return (
    <header className="site-header" style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '18px var(--space-6)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="/" aria-label="Frank Lam, home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <LogoMark />
      </a>
      <nav className="site-nav" aria-label="Main" style={{ display: 'flex', gap: 'var(--space-6)' }}>
        {window.SITE.navLinks.map((l) => (
          <NavLink key={l.key} href={l.href} active={active === l.key} aria-current={active === l.key ? 'page' : undefined}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-6)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3)',
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)',
    }}>
      <span>&copy; {new Date().getFullYear()} {window.SITE.ownerName}. Built with React.</span>
      <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
        {window.SITE.contactLinks.map((item) => {
          const external = /^https?:/.test(item.href);
          return (
            <a key={item.label} href={item.href} target={external || item.href.endsWith('.pdf') ? '_blank' : undefined} rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
              {item.label}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

// Every page renders inside this: skip link, header, <main>, footer.
function Page({ active, children }) {
  return (
    <React.Fragment>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header active={active} />
      <main id="main">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

// Renders **bold** segments inside a plain string (used for resume bullets).
function Rich({ text }) {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i} style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{part}</strong> : part));
}

// Small uppercase label. Pass as="h2" when it labels a real section.
function Eyebrow({ as: Tag = 'p', children, style }) {
  return <Tag className="eyebrow" style={style}>{children}</Tag>;
}

window.Header = Header;
window.Footer = Footer;
window.Page = Page;
window.Rich = Rich;
window.Eyebrow = Eyebrow;
