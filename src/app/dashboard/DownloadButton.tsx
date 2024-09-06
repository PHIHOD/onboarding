'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

const DownloadButton = () => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([`// midpilot.js
import React from 'react';

const Midpilot = () => {
  return (
    <button className="midpilot-button">
      Midpilot Button
    </button>
  );
};

export default Midpilot;`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "midpilot.js";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Button
      variant="outline"
      className="mt-4"
      onClick={handleDownload}
    >
      Download midpilot.js
    </Button>
  );
};

export default DownloadButton;