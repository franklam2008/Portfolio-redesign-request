// Shared Header + Footer for the Frank Lam portfolio pages.
function LogoMark({ logoStyle }) {
  if (logoStyle === 'initials') {
    return (
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)',
        letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)',
      }}>
        FRANKL<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
    );
  }
  if (logoStyle === 'wordmark-text') {
    return (
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)',
        letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)',
      }}>
        frank<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
    );
  }
  return <img src="assets/logo-frank-wordmark-transparent.png" alt="frank" style={{ height: 20, display: 'block' }} />;
}

function Header({ active, logoStyle = 'image' }) {
  const { NavLink } = window.FrankLamDesignSystem_07ac32;
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '18px var(--space-6)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <LogoMark logoStyle={logoStyle} />
      </a>
      <nav style={{ display: 'flex', gap: 'var(--space-6)' }}>
        {window.SITE.navLinks.map((l) => (
          <NavLink key={l.key} href={l.href} active={active === l.key}>
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
      <span>&copy; 2026 {window.SITE.ownerName}. Built with React.</span>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        {window.SITE.contactLinks.map((item) => (
          <a key={item.label} href={item.href} target={item.href.startsWith('#') ? undefined : '_blank'} rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

window.Header = Header;
window.Footer = Footer;
