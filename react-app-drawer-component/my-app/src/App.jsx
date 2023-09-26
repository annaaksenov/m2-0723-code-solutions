import AppDrawer from './AppDrawer';
import './AppDrawer.css';

const menu = ['Choose a Game'];

const items = ['Minecraft', 'Stardew Valley', 'Little Big Planet', 'Sims 4'];

function App() {
  return (
    <>
      <AppDrawer menu={menu} items={items} />
    </>
  );
}

export default App;
