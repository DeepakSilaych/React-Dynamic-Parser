import React, { useState, useContext, createContext } from 'react';

const DynamicContentContext = createContext();

const defaultParseContent = (content) => {
  const regex = /\[([^\]:]*):([^\]]+)\]/g;
  let match;
  const keyValuePairs = [];

  while ((match = regex.exec(content)) !== null) {
    keyValuePairs.push({ type: match[1] || 'text', value: match[2], original: match[0] });
  }

  return keyValuePairs;
};

const DynamicContentProvider = ({ initialContent, children, parseContent = defaultParseContent }) => {
  const [keyValuePairs, setKeyValuePairs] = useState(parseContent(initialContent));

  const handleInputChange = (index, newValue) => {
    const updatedPairs = [...keyValuePairs];
    updatedPairs[index].value = newValue;
    setKeyValuePairs(updatedPairs);
  };

  const generateContent = () => {
    let updatedContent = initialContent;
    keyValuePairs.forEach(pair => {
      updatedContent = updatedContent.replace(pair.original, pair.value);
    });
    return { __html: updatedContent };
  };

  return (
    <DynamicContentContext.Provider value={{ keyValuePairs, handleInputChange, generateContent }}>
      {children}
    </DynamicContentContext.Provider>
  );
};

export { DynamicContentProvider, DynamicContentContext };
