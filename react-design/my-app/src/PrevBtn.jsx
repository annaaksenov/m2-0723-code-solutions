export default function PrevBtn({ items, current, set }) {
  function handlePrev() {
    const prevIndex = (current - 1 + items.length) % items.length;
    set(prevIndex);
  }
  return <button onClick={handlePrev}>Previous</button>;
}
