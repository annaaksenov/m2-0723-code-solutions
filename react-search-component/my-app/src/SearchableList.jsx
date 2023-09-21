import { useState } from 'react';

export default function SearchableList({ quotes }) {
  const [currentText, setCurrentText] = useState('');

  function handleText(e) {
    setCurrentText(e.target.value);
  }

  const filter = quotes.filter((qts) =>
    qts.toLowerCase().includes(currentText.toLowerCase())
  );
  return (
    <div className="row">
      <div className="column-one-fourth">
        <SearchBar current={currentText} onChange={handleText} />
      </div>
      <div className="column-three-fourth">
        <ListOfQuotes filter={filter} />
      </div>
    </div>
  );
}

function SearchBar({ current, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={current}
        onChange={onChange}
      />
    </>
  );
}

function ListOfQuotes({ filter }) {
  return (
    <>
      <ul>
        {filter.length === 0 ? (
          <p>No items match the filter.</p>
        ) : (
          filter.map((qts, i) => <li key={i}>{qts}</li>)
        )}
      </ul>
    </>
  );
}
