import { SlMenu } from 'react-icons/sl';
import { useState } from 'react';

export default function AppDrawer({ menu, items }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleDrawer() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Foo onClick={handleDrawer} />
      <Menu
        items={items}
        menu={menu}
        active={isOpen}
        onShow={() => setIsOpen(false)}
      />
    </>
  );
}
function Foo({ onClick }) {
  return <SlMenu className="slMenu" size="30px" onClick={onClick} />;
}

function Menu({ items, menu, active, onShow }) {
  const heading = menu.map((head) => <h1 key={head}>{head}</h1>);
  const list = items.map((item, i) => (
    <p onClick={onShow} key={i}>
      {item}
    </p>
  ));

  return (
    <div className={active ? 'opened' : 'closed'} onClick={onShow}>
      <div className="content">
        {heading}
        {list}
      </div>
    </div>
  );
}
