// import { useState } from 'react'
import SearchableList from './SearchableList';
import './SearchableList.css';
import './App.css';

const quotes = [
  'Yer a wizard Harry.',
  "I hope you're pleased with yourselves.",
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure.',
  "You're a little scary sometimes, you know that? Brilliant... but scary",
  'There will be no foolish wabd-waving or silly incantations in  this class.',
  'It takes a great deal of bravery to stand up top our enemies, but just as much to stand up to be our friends.',
  'If there is one thing Voldemort cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is beautiful and terrible thing, and should therefore be treated with great caution.',
];

function App() {
  return (
    <div>
      <SearchableList quotes={quotes} />
    </div>
  );
}

export default App;
