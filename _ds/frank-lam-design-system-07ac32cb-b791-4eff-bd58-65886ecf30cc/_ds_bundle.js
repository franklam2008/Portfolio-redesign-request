/* @ds-bundle: {"format":4,"namespace":"FrankLamDesignSystem_07ac32","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"}],"sourceHashes":{"components/core/Button.jsx":"2c99c05a472f","components/core/Card.jsx":"2b56a07384ce","components/core/Tag.jsx":"dc9afa87fdbd","components/forms/Input.jsx":"a73ca7d836c5","components/navigation/NavLink.jsx":"729996210235","ui_kits/case-study/CaseStudyBody.jsx":"4814b94e5a45","ui_kits/case-study/CaseStudyHeader.jsx":"3b7285334084","ui_kits/case-study/CaseStudyIntro.jsx":"a0a416ffc02f","ui_kits/case-study/NextProject.jsx":"035074ecb92c","ui_kits/case-study/TerminalFrame.jsx":"0d86215899b7","ui_kits/homepage/Contact.jsx":"315d30368dff","ui_kits/homepage/Footer.jsx":"32b1e7b1c3bb","ui_kits/homepage/Header.jsx":"cbe4d3993462","ui_kits/homepage/Hero.jsx":"f466a60b41ea","ui_kits/homepage/ProjectGrid.jsx":"1a5d1f3042f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FrankLamDesignSystem_07ac32 = window.FrankLamDesignSystem_07ac32 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 'var(--weight-medium)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
  textDecoration: 'none',
  lineHeight: 1
};
const sizes = {
  sm: {
    fontSize: 'var(--text-xs)',
    padding: '6px 10px'
  },
  md: {
    fontSize: 'var(--text-sm)',
    padding: '9px 16px'
  },
  lg: {
    fontSize: 'var(--text-base)',
    padding: '12px 20px'
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      borderColor: 'var(--border-subtle)',
      cursor: 'not-allowed'
    };
  }
  switch (variant) {
    case 'secondary':
      return {
        background: 'var(--surface-raised)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-default)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        borderColor: 'transparent'
      };
    case 'primary':
    default:
      return {
        background: 'var(--accent)',
        color: 'var(--text-on-accent)',
        borderColor: 'var(--accent)'
      };
  }
}

/**
 * Button — the primary interactive control: contact CTAs, "view project" links, form submit.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style,
  as: As = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = variantStyle(variant, disabled);
  let bg = v.background;
  let borderColor = v.borderColor;
  let transform = 'none';
  if (!disabled && hover) {
    if (variant === 'primary') bg = 'var(--accent-hover)';else if (variant === 'secondary') {
      bg = 'var(--sand-300)';
      borderColor = 'var(--border-strong)';
    } else if (variant === 'ghost') {
      bg = 'var(--surface-raised)';
    }
  }
  if (!disabled && active) {
    if (variant === 'primary') bg = 'var(--accent-active)';
    transform = 'translateY(1px)';
  }
  return /*#__PURE__*/React.createElement(As, _extends({
    onClick: disabled ? undefined : onClick,
    disabled: As === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...sizes[size],
      ...v,
      background: bg,
      borderColor,
      transform,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small chip for tech-stack labels and filters.
 */
function Tag({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      borderColor: 'var(--border-subtle)'
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--rust-700)',
      borderColor: 'transparent'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — flat, bordered project/case-study preview card. No shadow at rest.
 */
function Card({
  title,
  description,
  tags = [],
  meta,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--surface-page)',
      border: '1px solid',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      boxShadow: hover ? 'var(--shadow-sm)' : 'none',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-2)'
    }
  }, meta) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-secondary)'
    }
  }, description) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Input — the one form control needed for a contact form.
 */
function Input({
  label,
  placeholder,
  type = 'text',
  multiline = false,
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, {
    type: multiline ? undefined : type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    rows: multiline ? 5 : undefined,
    style: {
      font: 'inherit',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)',
      border: '1px solid',
      borderColor: focus ? 'var(--accent)' : 'var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      outline: focus ? '2px solid var(--accent-soft)' : 'none',
      outlineOffset: '0px',
      resize: multiline ? 'vertical' : undefined,
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavLink — top-nav link with hover underline and active state.
 */
function NavLink({
  children,
  active = false,
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: active || hover ? 'var(--accent)' : 'transparent',
      paddingBottom: '2px',
      transition: 'border-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/CaseStudyBody.jsx
try { (() => {
function CaseStudyBody() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 var(--space-2)'
    }
  }, "The problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Every staging deploy needed a hand-written migration to match schema drift. That's slow and error-prone, and it's the kind of work a computer is better at than I am.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 var(--space-2)'
    }
  }, "What it does"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Connects to two Postgres instances, diffs `information_schema`, and emits a plain SQL migration file. No ORM required.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 var(--space-2)'
    }
  }, "Stack"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Rust, `tokio-postgres`, distributed as a single static binary.")));
}
window.CaseStudyBody = CaseStudyBody;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/CaseStudyBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/CaseStudyHeader.jsx
try { (() => {
function CaseStudyHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '18px var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../homepage/index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-frank-wordmark.png",
    alt: "frank",
    style: {
      height: 22,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(window.FrankLamDesignSystem_07ac32.NavLink, {
    href: "../homepage/index.html#work"
  }, "\u2190 Back to work"));
}
window.CaseStudyHeader = CaseStudyHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/CaseStudyHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/CaseStudyIntro.jsx
try { (() => {
function CaseStudyIntro() {
  const {
    Tag
  } = window.FrankLamDesignSystem_07ac32;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-3)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "2026 \u2014 Personal project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-4)'
    }
  }, "Schema-diff CLI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-secondary)',
      maxWidth: 620,
      margin: '0 0 var(--space-5)'
    }
  }, "A CLI that diffs two Postgres schemas and generates the migration \u2014 so you stop hand-writing ALTER statements after every staging deploy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Rust"), /*#__PURE__*/React.createElement(Tag, null, "Postgres"), /*#__PURE__*/React.createElement(Tag, null, "CLI")));
}
window.CaseStudyIntro = CaseStudyIntro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/CaseStudyIntro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/NextProject.jsx
try { (() => {
function NextProject() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../homepage/index.html#work",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--accent)',
      textDecoration: 'none'
    }
  }, "\u2190 All projects"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Frank Lam"));
}
window.NextProject = NextProject;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/NextProject.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/TerminalFrame.jsx
try { (() => {
function TerminalFrame() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      padding: '10px 14px',
      borderBottom: '1px solid rgba(251,248,241,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--rust-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--gold-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--moss-500)'
    }
  })), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--cream-200)',
      lineHeight: 'var(--leading-normal)',
      overflowX: 'auto'
    }
  }, `$ schemadiff --from staging --to local
+ ALTER TABLE orders ADD COLUMN refunded_at timestamptz;
+ CREATE INDEX orders_refunded_at_idx ON orders (refunded_at);
- DROP COLUMN orders.legacy_status;

3 changes. Write migration? [Y/n] y
✓ wrote migrations/0042_refund_tracking.sql`)));
}
window.TerminalFrame = TerminalFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/TerminalFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Contact.jsx
try { (() => {
function Contact() {
  const {
    Input,
    Button
  } = window.FrankLamDesignSystem_07ac32;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-tight)',
      fontWeight: 'var(--weight-semibold)',
      margin: '0 0 var(--space-2)',
      color: 'var(--text-primary)'
    }
  }, "Say hi."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      margin: '0 0 var(--space-5)'
    }
  }, "I read everything. I don't always reply fast."), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--state-success)'
    }
  }, "Sent. Thanks \u2014 I'll get back to you.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@example.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "What are you building?",
    multiline: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Send")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Frank Lam"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com",
    style: {
      color: 'var(--text-muted)'
    }
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hi@franklam.dev",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Email")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Header.jsx
try { (() => {
function Header({
  active
}) {
  const links = [{
    href: './index.html',
    label: 'Home',
    key: 'home'
  }, {
    href: '../case-study/index.html',
    label: 'Work',
    key: 'work'
  }, {
    href: '#now',
    label: 'Now',
    key: 'now'
  }, {
    href: '#contact',
    label: 'Contact',
    key: 'contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '18px var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-frank-wordmark.png",
    alt: "frank",
    style: {
      height: 22,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(window.FrankLamDesignSystem_07ac32.NavLink, {
    key: l.key,
    href: l.href,
    active: active === l.key
  }, l.label))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-6) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '0 0 var(--space-4)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Available for select projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-5)'
    }
  }, "Software engineer, based in San Francisco."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '0 0 var(--space-6)'
    }
  }, "I build small, focused tools \u2014 mostly backend, occasionally a CLI. Previously at a couple of startups you haven't heard of."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(window.FrankLamDesignSystem_07ac32.Button, {
    as: "a",
    href: "#contact",
    variant: "primary"
  }, "Get in touch"), /*#__PURE__*/React.createElement(window.FrankLamDesignSystem_07ac32.Button, {
    as: "a",
    href: "https://github.com",
    variant: "ghost"
  }, "GitHub")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/ProjectGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PROJECTS = [{
  meta: '2026',
  title: 'Schema-diff CLI',
  description: 'Diffs two Postgres schemas and generates the migration.',
  tags: ['Rust', 'Postgres'],
  href: '../case-study/index.html'
}, {
  meta: '2025',
  title: 'Queue',
  description: 'A minimal job queue with visibility timeouts, built on SQLite.',
  tags: ['Go', 'SQLite'],
  href: '#'
}, {
  meta: '2024',
  title: 'ledger.sh',
  description: 'A plaintext-accounting reconciler that runs entirely in the terminal.',
  tags: ['Shell', 'AWK'],
  href: '#'
}, {
  meta: '2023',
  title: 'Static site pipeline',
  description: 'The build pipeline behind this site — Markdown in, static HTML out.',
  tags: ['Node', 'Markdown'],
  href: '#'
}];
function ProjectGrid() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--space-6) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-5)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-5)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(window.FrankLamDesignSystem_07ac32.Card, _extends({
    key: p.title
  }, p)))));
}
window.ProjectGrid = ProjectGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/ProjectGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavLink = __ds_scope.NavLink;

})();
