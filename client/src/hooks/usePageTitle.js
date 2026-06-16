import { useEffect } from 'react';

// each page calls this with its own title; resets on unmount isn't needed
// because the next page will set its own before the user can read the gap.
const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} — Aradhya Stuti` : 'Aradhya Stuti';
  }, [title]);
};

export default usePageTitle;
