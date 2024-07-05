import React, { useContext } from 'react';
import { DynamicContentContext } from './DynamicContentProvider';

const DynamicContentForm = () => {
  const { keyValuePairs, handleInputChange } = useContext(DynamicContentContext);
  return (
    <>
      {keyValuePairs.map((pair, index) => (
        <div className="input-container" key={index}>
          <label htmlFor={`input-${index}`}>{pair.type}: </label>
          <input
            id={`input-${index}`}
            type={pair.type === 'url' ? 'url' : 'text'}
            value={pair.value}
            placeholder={pair.value}
            className='text-black mb-2'
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
    </>
  );
};

export default DynamicContentForm;
