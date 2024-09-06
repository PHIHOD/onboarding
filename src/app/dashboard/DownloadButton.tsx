'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

const DownloadButton = () => {
  const handleDownload = () => {
    const content = `// midpilot.js
import React from 'react';

const Midpilot = () => {
  return (
    <button className="midpilot-button">
      Midpilot Button
    </button>
  );
};

export default Midpilot;`;

    const blob = new Blob([content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'midpilot.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="default"
      className="mt-4"
      onClick={handleDownload}
    >
      Download midpilot.js
    </Button>
  );
};

export default DownloadButton;