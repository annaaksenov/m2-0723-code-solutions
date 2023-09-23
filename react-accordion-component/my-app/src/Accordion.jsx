import { useState } from 'react';

export default function Accordion({ topics }) {
  const [isActive, setIsActive] = useState(false);

  function handleTopicClick(topicName) {
    setIsActive(topicName === isActive ? true : topicName);
  }

  let renderTopics = topics.map((topix, i) => (
    <Topic
      key={i}
      name={topix.name}
      des={topix.description}
      isActive={isActive === topix.name}
      onShow={() => handleTopicClick(topix.name)}
    />
  ));

  return (
    <div className="row">
      <div className="column">{renderTopics}</div>
    </div>
  );
}

function Topic({ name, des, isActive, onShow }) {
  const renderDiv = (
    <div onClick={onShow} className="btn-style">
      {name}
    </div>
  );
  const renderPara = <p>{des}</p>;

  return (
    <>
      {renderDiv}
      {isActive && renderPara}
    </>
  );
}
