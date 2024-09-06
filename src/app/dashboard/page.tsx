/* eslint-disable react/no-unescaped-entities */

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Cog, PlayCircle, HelpCircle, Mail } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import DownloadButton from './DownloadButton'

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Midpilot Integration Guide</CardTitle>
          <CardDescription>
            Welcome to the Midpilot integration guide! This document will walk you through the process of adding the Midpilot component to your React application.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="toc" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="toc">Table of Contents</TabsTrigger>
          <TabsTrigger value="component">Step 1: Component</TabsTrigger>
          <TabsTrigger value="dependencies">Step 2: Dependencies</TabsTrigger>
          <TabsTrigger value="env">Step 3: Environment</TabsTrigger>
          <TabsTrigger value="run">Step 4: Run</TabsTrigger>
        </TabsList>
        <TabsContent value="toc">
          <Card>
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { href: "#1-adding-the-midpilot-component", text: "Adding the Midpilot Component", icon: <Code className="w-5 h-5 mr-2" /> },
                  { href: "#2-installing-dependencies", text: "Installing Dependencies", icon: <Cog className="w-5 h-5 mr-2" /> },
                  { href: "#3-configuring-environment-variables", text: "Configuring Environment Variables", icon: <BookOpen className="w-5 h-5 mr-2" /> },
                  { href: "#4-running-your-application", text: "Running Your Application", icon: <PlayCircle className="w-5 h-5 mr-2" /> },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="flex items-center text-blue-600 hover:underline">
                      {item.icon}
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="component">
          <Card>
            <CardHeader>
              <CardTitle id="1-adding-the-midpilot-component">Adding the Midpilot Component</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Download the{' '}
                  <DownloadButton />
                   file.
                </li>
                <li>Place this file in your project&apos;s <code className="bg-gray-100 p-1 rounded">/src</code> directory.</li>
                <li>In the component where you want to display the Midpilot button, add the following import statement:</li>
              </ol>
              <pre className="bg-gray-100 p-4 rounded-md mt-4 overflow-x-auto">
                <code>import Midpilot from &apos;./Midpilot&apos;;</code>
              </pre>
              <p className="mt-4">Within your component&apos;s JSX, add the Midpilot component:</p>
              <pre className="bg-gray-100 p-4 rounded-md mt-2 overflow-x-auto">
                <code>&lt;Midpilot /&gt;</code>
              </pre>
         
              
              <p className="mt-4">Your application should now run with the Midpilot component successfully integrated.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dependencies">
          <Card>
            <CardHeader>
              <CardTitle id="2-installing-dependencies">Installing Dependencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open your terminal.</li>
                <li>Navigate to your project&apos;s root directory:</li>
              </ol>
              <pre className="bg-gray-100 p-4 rounded-md mt-4 overflow-x-auto">
                <code>cd path/to/your/project</code>
              </pre>
              <p className="mt-4">Run the following command to install the required packages:</p>
              <pre className="bg-gray-100 p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm i retell-client-js-sdk@1.3.3 lucide-react@0.400.0</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="env">
          <Card>
            <CardHeader>
              <CardTitle id="3-configuring-environment-variables">Configuring Environment Variables</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Locate or create a <code className="bg-gray-100 p-1 rounded">.env</code> file in your project's root directory.</li>
                <li>Add the following lines to the <code className="bg-gray-100 p-1 rounded">.env</code> file:</li>
              </ol>
              <p className="mt-2">Add the following lines to the .env file:</p>
              <pre className="bg-gray-100 p-4 rounded-md mt-4 overflow-x-auto">
                <code>
                  REACT_APP_AGENT_ID="your_agent_id"
                </code>
          
              </pre>
              <pre className="bg-gray-100 p-4 rounded-md mt-4 overflow-x-auto">
             
                <code>
                  REACT_APP_AGENT_TOKEN="your_agent_token"
                </code>
              </pre>
              <p className="mt-4 text-sm text-gray-600">Note: Ensure there are no spaces around the equal signs.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="run">
          <Card>
            <CardHeader>
              <CardTitle id="4-running-your-application">Running Your Application</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>In your terminal, ensure you're in your project's root directory.</li>
                <li>Start your React application:</li>
              </ol>
              <pre className="bg-gray-100 p-4 rounded-md mt-4 overflow-x-auto">
                <code>npm start</code>
              </pre>
              <p className="mt-4">Your application should now run with the Midpilot component successfully integrated.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle id="5-troubleshooting">Troubleshooting</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you encounter any issues during the installation or integration process, please don&apos;t hesitate to reach out for support. Our CTO, Thomas, is available to assist you with any technical difficulties:
          </p>
          <Button variant="outline" className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <Link href="mailto:thomas.irgens@midpilot.com">
              thomas.irgens@midpilot.com
            </Link>
          </Button>
          <p className="mt-4">
            We&apos;re committed to ensuring a smooth integration experience and are here to help resolve any challenges you may face.
          </p>
       
        </CardContent>
      </Card>
    </div>
  )
}