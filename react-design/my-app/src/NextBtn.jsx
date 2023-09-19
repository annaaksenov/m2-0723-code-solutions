export default function NextBtn({ items, current, set }) {
  function handleNext() {
    let nextIndex = current + 1;
    if (nextIndex >= items.length) {
      nextIndex = 0;
    }
    set(nextIndex);
  }
  return <button onClick={handleNext}>Next</button>;
}
