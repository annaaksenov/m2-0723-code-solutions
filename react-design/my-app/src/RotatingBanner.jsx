import { useState } from 'react';
import Banner from './Banner';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Indicators from './Indicators';

export default function RotatingBanner({ items }) {
  const [currentIndex /*setCurrentIndex*/] = useState(0);
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevBtn />
      <Indicators count={items.length} current={currentIndex} />
      <NextBtn />
    </div>
  );
}
