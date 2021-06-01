import { useEffect, useState } from 'react';
//** Whenever you provide once jsx inside of another jsx tag that inner element is provided to outer one as a prop called children */
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    //** Cleanup function */
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
  //   return window.location.pathname === path ? children : null;
};

export default Route;
