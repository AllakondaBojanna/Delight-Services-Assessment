import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const OCR: React.FC = () => {
  const [text, setText] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      Tesseract.recognize(
        e.target.files[0],
        'eng',
        { logger: (m) => console.log(m) }
      ).then(({ data: { text } }) => {
        setText(text);
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <p>{text}</p>
    </div>
  );
};

export default OCR;
