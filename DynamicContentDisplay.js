import React, { useContext } from 'react';
import { DynamicContentContext } from './DynamicContentProvider';

const DynamicContentDisplay = () => {
  const { generateContent } = useContext(DynamicContentContext);
  return <div dangerouslySetInnerHTML={generateContent()} />;
};

export default DynamicContentDisplay;
