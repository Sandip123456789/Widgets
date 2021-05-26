import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is front end Js framework',
  },
  {
    title: 'Why use React?',
    content: 'Most favourite JS library and most used',
  },
  {
    title: 'How you use React?',
    content: 'You use React by creating components',
  },
];

export default () => {
  return (
    <div>
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};
