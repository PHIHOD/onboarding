'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

const DownloadButton = () => {
  const handleDownload = () => {
    const content = `
"use client";
// Use client ensures that the component is rendered on the client side in Next.js

import React, { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { Phone, PhoneOff, Loader } from "lucide-react";

const agentId = process.env.REACT_APP_AGENT_ID;
const agentToken = process.env.REACT_APP_AGENT_TOKEN;

const Midpilot = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [webClient, setWebClient] = useState(null);

  useEffect(() => {
    const client = new RetellWebClient();
    setWebClient(client);
    
    client.on("conversationStarted", () => {
      setIsCalling(true);
      setIsConnecting(false);
    });
    client.on("conversationEnded", () => setIsCalling(false));
    client.on("error", (error) => {
      console.error("An error occurred:", error);
      setIsCalling(false);
      setIsConnecting(false);
    });

    return () => client.stopConversation();
  }, []);

  const toggleConversation = async () => {
    if (!webClient) return;

    if (isCalling) {
      webClient.stopConversation();
    } else {
      setIsConnecting(true);
      const registerCallResponse = await registerCall(agentId);
      if (registerCallResponse.call_id) {
        webClient.startConversation({
          callId: registerCallResponse.call_id,
          sampleRate: 48000,
          enableUpdate: true,
        }).catch((error) => {
          console.error(error);
          setIsConnecting(false);
        });
      } else {
        setIsConnecting(false);
      }
    }
  };

  async function registerCall(agentId) {
    if (!agentId || !agentToken) {
      throw new Error("Agent ID or Token not set. Please check your environment variables.");
    }
    try {
      const response = await fetch(
        "https://api.retellai.com/v2/create-web-call",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + agentToken
          },
          body: JSON.stringify({ agent_id: agentId }),
        },
      );

      if (!response.ok) {
        throw new Error(\`Error: \${response.status}, \${response.statusText}\`);
      }

      return await response.json();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const spinKeyframes = \`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  \`;

  return (
    <>
      <style>{spinKeyframes}</style>
      <div>
        <div
          onClick={isConnecting ? null : toggleConversation}
          className={isCalling ? "calling" : isConnecting ? "connecting" : "not-calling"}
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '16px',
            height: '64px',
            width: '64px',
            borderRadius: '50%',
            color: 'white',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            cursor: isConnecting ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            backgroundColor: isCalling ? '#991b1b' : isConnecting ? '#000000' : '#000000',
          }}
          onMouseEnter={(e) => {
            if (!isConnecting) {
              e.currentTarget.style.backgroundColor = isCalling ? '#000000' : '#1f2937';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isCalling ? '#991b1b' : isConnecting ? '#000000' : '#000000';
          }}
        >
          {isCalling ? <PhoneOff className="h-6 w-6" /> : 
           isConnecting ? <Loader style={{ height: '24px', width: '24px', animation: 'spin 1s linear infinite' }} /> : 
           <Phone className="h-6 w-6" />}
        </div>
      </div>
    </>
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
    midpilot.js
    </Button>
  );
};

export default DownloadButton;