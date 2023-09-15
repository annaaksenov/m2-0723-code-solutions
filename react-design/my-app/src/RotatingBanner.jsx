import Banner from './Banner';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Indicators from './Indicators';

export default function RotatingBanner({ items }) {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <Banner item={items[0]} />
      <PrevBtn />
      <Indicators count={items.length} />
      <NextBtn />
    </div>
  );
}
