import { useState } from 'react';
import Banner from './Banner';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Indicators from './Indicators';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSelect(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner items={items[currentIndex]} />
      <div>
        <PrevBtn items={items} current={currentIndex} set={setCurrentIndex} />
        <Indicators
          onSelect={handleSelect}
          items={items}
          current={currentIndex}
        />
        <NextBtn items={items} current={currentIndex} set={setCurrentIndex} />
      </div>
    </div>
  );
}
