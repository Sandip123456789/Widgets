import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //** this if condition helps to open link in new tab */
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    //** This function is going to communicate over to those Route component that URL has just changed */
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
