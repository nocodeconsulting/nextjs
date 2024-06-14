"use client"; // Ensure this is at the top of the file

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Home3 = () => {
  // Initialize theme state with default 'light'
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-black text-white'}`}>
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                <img
                  alt="NoCode Consulting"
                  height={50}
                  src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/nocode-consulting-logo.png"
                  style={{
                    aspectRatio: "200/50",
                    objectFit: "contain",
                  }}
                  width={200}
                />
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/company"
              >
                Company
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/templates"
              >
                Templates
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/reviews"
              >
                Reviews
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/learn"
              >
                Learn
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              type="button"
              onClick={toggleTheme}
            >
              <MoonIcon className="h-6 w-6" />
            </button>
            <a
              className="ml-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:border-gray-800"
              href="https://calendly.com/nocodeconsulting/private-consulting-hour-main?month=2024-06"
            >
              Schedule 1-Hour
            </a>
            <a
              className="ml-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 dark:border-gray-800"
              href="https://www.nocodeconsulting.com/dashboard"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <header className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-10">
          <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
  Build enterprise software without writing code.
</h2>
<p className="mt-3 max-w-md text-lg text-gray-500 sm:text-xl">
  We help companies build apps and automate work with no-code software.
</p>

            <div className="mt-8 flex space-x-4">
      <a href="https://www.nocodeconsulting.com/dashboard">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
      </a>
      <a href="https://calendly.com/nocodeconsulting/private-consulting-hour-main">
        <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700">Schedule 1-Hour</Button>
      </a>
    </div>
          </div>
          <div className="lg:w-1/2">
            <img
              alt="Abstract shapes"
              className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              height="400"
              src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/nocode-consulting-cover.png"
              style={{
                aspectRatio: "400/400",
                objectFit: "contain",
              }}
              width="400"
            />
          </div>
        </div>
      </header>
      <main className="w-full px-4 sm:px-6 lg:px-8 mt-12">
      <section className="mt-8">
  <h3 className="text-lg font-medium leading-6 text-custom">Company partners</h3>
  <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 lg:grid-cols-6">
    {[
      { name: "Airtable", logo: "airtable logo.svg" },
      { name: "Zapier", logo: "zapier logo.svg" },
      { name: "Softr", logo: "softr logo.svg" },
      { name: "Stacker", logo: "stacker logo.svg" },
      { name: "Noloco", logo: "noloco logo.svg" },
      { name: "FlutterFlow", logo: "flutterflow logo.png" }
    ].map((partner, index) => (
      <div key={index} className="col-span-1 flex justify-center py-8 px-8 bg-custom  bg-gray-50 dark:bg-gray-800">
        <img
          alt={partner.name}
          className="max-h-12"
          height="48"
          src={`https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/${partner.logo}`}
          style={{
            aspectRatio: "48/48",
            objectFit: "contain",
          }}
          width="96"
        />
      </div>
    ))}
  </div>
</section>


<section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-1">
  <Card className="bg-custom text-custom w-full md:w-full lg:w-full relative">
    <CardHeader className="flex flex-col md:flex-row items-start md:items-center">
      <Avatar className="mb-2 md:mb-0">
        <img src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/connor%20gustafson.png" alt="Connor Gustafson" />
      </Avatar>
      <div className="ml-0 md:ml-2 flex flex-col">
        <CardTitle>Connor Gustafson</CardTitle>
        <CardDescription className="mt-0.5">CEO</CardDescription>
      </div>
    </CardHeader>
    <CardContent className="mt-1">
      <p>
        <strong>Software designed for speed and scale.</strong>
        <br />
        Build user-interfaces, SaaS apps, internal tools and automation better and faster with no-code.
      </p>
    </CardContent>
    <CardFooter className="mt-1">
      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Schedule 1-Hour</Button>
    </CardFooter>
  </Card>
</section>

        <section className="mt-12">
  <h3 className="text-lg font-medium leading-6 light:text-gray-900 dark:text-white">Trusted by top-tier organizations</h3>
  <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8 lg:grid-cols-8">
    {[
      "stanford.png", "villanova.png", "indexVentures.svg", "kohrgolf.png",
      "securityPal.svg", "cleerTax.png", "compass.svg", "meowwolf.svg"
    ].map((image, index) => (
      <div key={index} className="col-span-1 flex justify-center py-8 px-8 light:bg-gray-50  bg-gray-50 dark:bg-gray-800">
        <img
          alt="Organization"
          className="max-h-12"
          height="96"
          src={`https://nocodeconsulting.blob.core.windows.net/nextjs/${image}`}
          style={{
            aspectRatio: "48/48",
            objectFit: "contain",
          }}
          width="96"
        />
      </div>
    ))}
  </div>
</section>

        <section className="mt-12 bg-custom-bg light:bg-white dark:bg-black py-8 px-6 rounded-lg">
  <h3 className="text-lg font-medium leading-6 light:text-gray-900 dark:text-gray-100">Expert Development Services</h3>
  <p className="mt-2 light:text-gray-500 dark:text-gray-400">Discover how companies use no-code software for speed and scale.</p>
  <div className="mt-4 mb-8">
    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Submit Application</Button>
  </div>
</section>

<footer className="bg-custom p-2 md:p-4 w-full">
  <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-sm text-custom">
    <div className="grid gap-2">
      <h3 className="font-semibold">Company</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        About
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Careers
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Pricing
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Reviews
      </Link>
    </div>
    <div className="grid gap-2">
      <h3 className="font-semibold">Services</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Expert Development
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Schedule 1-Hour
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Templates
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Privacy
      </Link>
    </div>
    <div className="grid gap-2">
      <h3 className="font-semibold">Resources</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Blog
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Community
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Support
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        FAQs
      </Link>
    </div>
    <div className="grid gap-2">
      <h3 className="font-semibold">Legal</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Privacy Policy
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Terms of Service
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Cookie Policy
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Compliance
      </Link>
    </div>
    <div className="grid gap-2">
      <h3 className="font-semibold">Contact</h3>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Support
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Sales
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Press
      </Link>
      <Link href="#" prefetch={false} className="hover:text-gray-700 dark:hover:text-gray-300">
        Partnerships
      </Link>
    </div>
  </div>
  <div className="mt-8 flex justify-center space-x-2 md:order-last">
    <Link href="#" className="hover:text-gray-500 dark:hover:text-white" prefetch={false}>
      <FacebookIcon className="h-6 w-6" />
    </Link>
    <Link href="#" className="hover:text-gray-500 dark:hover:text-white" prefetch={false}>
      <TwitterIcon className="h-6 w-6" />
    </Link>
    <Link href="#" className="hover:text-gray-500 dark:hover:text-white" prefetch={false}>
      <InstagramIcon className="h-6 w-6" />
    </Link>
    <Link href="#" className="hover:text-gray-500 dark:hover:text-white" prefetch={false}>
      <YoutubeIcon className="h-6 w-6" />
    </Link>
    <Link href="#" className="hover:text-gray-500 dark:hover:text-white" prefetch={false}>
      <LinkedinIcon className="h-6 w-6" />
    </Link>
  </div>
</footer>


      </main>
    </div>
  )
}

export default Home3;
