import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRCodeGenerator;
