import Banner from './Banner';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Carousel from './Carousel';

export default function RotatingBanner() {
  return (
    <>
      <Banner />
      <div>
        <PrevBtn />
      </div>
      <Carousel />
      <div>
        <NextBtn />
      </div>
    </>
  );
}
