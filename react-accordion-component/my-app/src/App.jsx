import './App.css';
import Accordion from './Accordion';
import './Accordion.css';
const topics = [
  {
    name: 'Hypertext Markup Language',
    description:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technoloaies for the World Wide Web.',
  },
  {
    name: 'Cascading Style Sheets',
    description:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.',
  },
];

function App() {
  return (
    <>
      <Accordion topics={topics} />
    </>
  );
}

export default App;
