import React, { useState, useEffect } from 'react';

const words = ['Developer', 'Designer', 'Director', 'Writer'];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // typeWriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => prevIndex === words.length - 1 ? 0 : prevIndex + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <>
      <h2 className="font-bold text-6xl text-gray-300" style={{ minHeight: '1em' }}>{`${words[index].substring(0, subIndex)}${subIndex === words[index].length ? '_' : ''}`}</h2>
    </>
  );
}

export default TypingEffect;