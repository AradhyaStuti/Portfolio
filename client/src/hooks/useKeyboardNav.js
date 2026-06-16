import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// gmail-style "g + letter" leader shortcuts. press g, then within
// ~1.2s press the destination key. ignored while typing in inputs.
const ROUTES = {
  h: '/',
  a: '/about',
  p: '/projects',
  c: '/contact',
};

const useKeyboardNav = (onToggleHelp) => {
  const navigate = useNavigate();

  useEffect(() => {
    let leader = false;
    let leaderTimer = null;

    const isTyping = (el) => {
      if (!el) return false;
      const tag = el.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
    };

    const clearLeader = () => {
      leader = false;
      if (leaderTimer) {
        clearTimeout(leaderTimer);
        leaderTimer = null;
      }
    };

    const onKey = (e) => {
      if (isTyping(document.activeElement)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // ? toggles the help modal (shift+/ on most layouts)
      if (e.key === '?') {
        e.preventDefault();
        onToggleHelp?.();
        return;
      }

      if (leader) {
        const key = e.key.toLowerCase();
        if (key === 'r') {
          // resume — fire the download
          e.preventDefault();
          window.open('/api/resume', '_blank', 'noopener');
          clearLeader();
          return;
        }
        if (ROUTES[key]) {
          e.preventDefault();
          navigate(ROUTES[key]);
        }
        clearLeader();
        return;
      }

      if (e.key === 'g') {
        leader = true;
        leaderTimer = setTimeout(clearLeader, 1200);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (leaderTimer) clearTimeout(leaderTimer);
    };
  }, [navigate, onToggleHelp]);
};

export default useKeyboardNav;
