import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Midpilot Integration Guide</h1>
      <p>
        Welcome to the Midpilot integration guide! This document will walk you
        through the process of adding the Midpilot component to your React
        application. By following these steps, you&apos;ll be able to seamlessly
        incorporate Midpilot&apos;s functionality into your project.
      </p>

      <h2>Table of Contents</h2>
      <ol>
        <li>
          <Link href="#1-adding-the-midpilot-component">
            Adding the Midpilot Component
          </Link>
        </li>
        <li>
          <Link href="#2-installing-dependencies">Installing Dependencies</Link>
        </li>
        <li>
          <Link href="#3-configuring-environment-variables">
            Configuring Environment Variables
          </Link>
        </li>
        <li>
          <Link href="#4-running-your-application">Running Your Application</Link>
        </li>
        <li>
          <Link href="#5-troubleshooting">Troubleshooting</Link>
        </li>
      </ol>

      <h2 id="1-adding-the-midpilot-component">1. Adding the Midpilot Component</h2>
      <p>To begin, let&apos;s add the Midpilot component to your React application:</p>
      <ol>
        <li>Locate the <code>Midpilot.js</code> file provided by Midpilot.</li>
        <li>
          Place this file in your project&apos;s <code>/src</code> directory. A common
          practice is to store it in a <code>/components</code> subdirectory.
        </li>
        <li>
          In the component where you want to display the Midpilot button (e.g.,
          <code>App.js</code>), add the following import statement at the top of
          the file:
        </li>
      </ol>
      <pre>
        <code>import Midpilot from &apos;./Midpilot&apos;;</code>
      </pre>
      <p>4. Within your component&apos;s JSX, add the Midpilot component wherever you&apos;d like it to appear:</p>
      <pre>
        <code>&lt;Midpilot /&gt;</code>
      </pre>

      <h2 id="2-installing-dependencies">2. Installing Dependencies</h2>
      <p>Midpilot requires certain dependencies to function correctly. Follow these steps to install them:</p>
      <ol>
        <li>Open your terminal.</li>
        <li>Navigate to your project&apos;s root directory:</li>
      </ol>
      <pre>
        <code>cd path/to/your/project</code>
      </pre>
      <ol start={3}>
        <li>Run the following command to install the required packages:</li>
      </ol>
      <pre>
        <code>npm i retell-client-js-sdk@1.3.3 lucide-react@0.400.0</code>
      </pre>
      <p>This command will install the specified versions of <code>retell-client-js-sdk</code> and <code>lucide-react</code>.</p>

      <h2 id="3-configuring-environment-variables">3. Configuring Environment Variables</h2>
      <p>Midpilot needs specific environment variables to authenticate and function properly:</p>
      <ol>
        <li>Locate or create a <code>.env</code> file in your project&apos;s root directory.</li>
        <li>
          Add the following lines to the <code>.env</code> file, replacing the empty quotes with your actual Midpilot credentials:
        </li>
      </ol>
      <pre>
        <code>
          REACT_APP_AGENT_ID=&quot;&quot;
          <br />
          REACT_APP_AGENT_TOKEN=&quot;&quot;
        </code>
      </pre>
      <p>Note: Ensure there are no spaces around the equal signs.</p>

      <h2 id="4-running-your-application">4. Running Your Application</h2>
      <p>After completing the above steps, you should be ready to run your application with Midpilot integrated:</p>
      <ol>
        <li>In your terminal, ensure you&apos;re in your project&apos;s root directory.</li>
        <li>Start your React application as you normally would (typically with <code>npm start</code> or <code>yarn start</code>).</li>
        <li>Your application should now run with the Midpilot component successfully integrated.</li>
      </ol>

      <h2 id="5-troubleshooting">5. Troubleshooting</h2>
      <p>
        If you encounter any issues during the installation or integration process, please don&apos;t hesitate to reach out for support. Our CTO, Thomas, is available to assist you with any technical difficulties:
      </p>
      <p>
        Email: <a href="mailto:thomas.irgens@midpilot.com">thomas.irgens@midpilot.com</a>
      </p>
      <p>
        We&apos;re committed to ensuring a smooth integration experience and are here to help resolve any challenges you may face.
      </p>
      <p>
        Thank you for choosing Midpilot! We look forward to enhancing your application with our powerful features.
      </p>
    </div>
  );
}
