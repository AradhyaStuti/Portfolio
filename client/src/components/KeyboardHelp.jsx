import { useEffect } from 'react';

const SHORTCUTS = [
  { keys: ['g', 'h'], label: 'Go to Home' },
  { keys: ['g', 'a'], label: 'Go to About' },
  { keys: ['g', 'p'], label: 'Go to Projects' },
  { keys: ['g', 'c'], label: 'Go to Contact' },
  { keys: ['g', 'r'], label: 'Download Resume' },
  { keys: ['?'], label: 'Toggle this help' },
  { keys: ['Esc'], label: 'Close' },
];

const Kbd = ({ children }) => (
  <span
    style={{
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: '11px',
      fontWeight: 600,
      color: '#f3ecdb',
      background: 'rgba(243,236,219,0.08)',
      border: '1px solid rgba(243,236,219,0.18)',
      padding: '3px 8px',
      borderRadius: '4px',
      minWidth: '22px',
      display: 'inline-block',
      textAlign: 'center',
    }}
  >
    {children}
  </span>
);

const KeyboardHelp = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(10,10,12,0.72)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'pageIn 0.18s ease-out forwards',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card"
        style={{ padding: '32px', maxWidth: '420px', width: '100%' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#f3ecdb', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Keyboard shortcuts
          </h3>
          <button
            onClick={onClose}
            aria-label="Close help"
            style={{ background: 'none', border: 'none', color: '#71717a', fontSize: '14px', cursor: 'pointer', padding: '4px' }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {SHORTCUTS.map(({ keys, label }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '13px', color: '#c4c4c8' }}>{label}</span>
              <span style={{ display: 'flex', gap: '4px' }}>
                {keys.map((k, i) => (
                  <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    {i > 0 && <span style={{ color: '#52525b', fontSize: '10px' }}>then</span>}
                    <Kbd>{k}</Kbd>
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '11px', color: '#71717a', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(243,236,219,0.08)' }}>
          Press <Kbd>?</Kbd> anytime to bring this back.
        </p>
      </div>
    </div>
  );
};

export default KeyboardHelp;
