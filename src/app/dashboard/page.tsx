import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container">
      <header className="dashboard-header mb-8">
        <h1 className="text-display-2">Welcome to Midpilot Docs</h1>
        <h2 className="text-body-1 mb-4">Midpilot Integration Guide</h2>
      </header>
      
      <div className="integration-guide">
        <h2 className="text-heading-1 mb-4">1. Adding the Midpilot Component</h2>
        <ol className="list-decimal list-inside mb-6">
          <li>Locate the `Midpilot.js` file provided by Midpilot.</li>
          <li>Place this file in your project's `/src` directory, preferably in a `/components` subdirectory.</li>
          <li>Import the Midpilot component in your desired file:
            <pre className="bg-gray-100 p-2 mt-2 rounded"><code>import Midpilot from './Midpilot';</code></pre>
          </li>
          <li>Add the Midpilot component to your JSX:
            <pre className="bg-gray-100 p-2 mt-2 rounded"><code>&lt;Midpilot /&gt;</code></pre>
          </li>
        </ol>

        <h2 className="text-heading-1 mb-4">2. Installing Dependencies</h2>
        <p className="mb-4">Run the following command in your project root:</p>
        <pre className="bg-gray-100 p-2 mb-6 rounded"><code>npm i retell-client-js-sdk@1.3.3 lucide-react@0.400.0</code></pre>

        <h2 className="text-heading-1 mb-4">3. Configuring Environment Variables</h2>
        <p className="mb-4">Add these lines to your `.env` file:</p>
        <pre className="bg-gray-100 p-2 mb-6 rounded"><code>
REACT_APP_AGENT_ID=""
REACT_APP_AGENT_TOKEN=""
        </code></pre>

        <h2 className="text-heading-1 mb-4">4. Running Your Application</h2>
        <p className="mb-6">Start your React application as usual (e.g., `npm start` or `yarn start`).</p>

        <h2 className="text-heading-1 mb-4">5. Troubleshooting</h2>
        <p className="mb-4">If you encounter any issues, please contact our CTO, Thomas:</p>
        <p className="mb-6">Email: thomas.irgens@midpilot.com</p>
      </div>
    </div>
  );
}
