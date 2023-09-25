export default function Indicators({ current, items, onSelect }) {
  // const btn = items.map((itm) => <button key={itm}>{itm[current]}</button>)
  return (
    <div>
      {/* {btn} */}
      {items.map((item, i) => (
        <button
          key={item}
          onClick={() => onSelect(i)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              e.preventDefault();
              onSelect(i);
            }
          }}
          style={{ backgroundColor: i === current ? 'lightblue' : 'white' }}>
          {i}
        </button>
      ))}
    </div>
  );
}
