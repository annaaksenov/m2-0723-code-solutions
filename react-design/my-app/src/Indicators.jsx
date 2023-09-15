export default function Indicators({ items, count }) {
  const btn = items.map((itm) => <button>{itm[count]}</button>);
  return <>{btn}</>;
}
