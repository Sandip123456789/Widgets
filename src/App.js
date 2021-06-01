import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

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

const options = [
  {
    label: 'A color is red',
    value: 'red',
  },
  {
    label: 'A color is green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  //** Logic used before Route component */
  // const showAccordion = () => {
  //   if (window.location.pathname === '/') {
  //     return <Accordion items={items} />;
  //   }
  // };

  // const showList = () => {
  //   if (window.location.pathname === '/list') {
  //     return <Search />;
  //   }
  // };

  // const showDropdown = () => {
  //   if (window.location.pathname === '/dropdown') {
  //     return (
  //       <Dropdown
  //         label="Select a Color"
  //         selected={selected}
  //         onSelectedChange={setSelected}
  //         options={options}
  //       />
  //     );
  //   }
  // };

  // const showTranslate = () => {
  //   if (window.location.pathname === '/translate') {
  //     return <Translate />;
  //   }
  // };

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* <Translate /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* {showDropdown ? (
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
      ) : null} */}
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
