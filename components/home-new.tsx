"use client"; // Add this line

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";

const HomeNew = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <nav className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">NoCode Consulting</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Company
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Templates
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Reviews
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Learn
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-white"
              type="button"
            >
              <MoonIcon className="h-6 w-6" />
            </button>
            <a
              className="ml-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:border-gray-800"
              href="#"
            >
              Schedule 1-Hour
            </a>
            <a
              className="ml-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-200 border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 dark:border-gray-800"
              href="#"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <header className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Build enterprise software without writing code.
            </h2>
            <p className="mt-3 max-w-md text-lg text-gray-500 dark:text-gray-400 sm:text-xl">
              We help companies build apps and automate work with no-code software.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
              <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700">Schedule 1-Hour</Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              alt="Abstract shapes"
              className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
        </div>
      </header>
      <main className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
        <section className="mt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Company partners</h3>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="Airtable"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="Zapier"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="Softr"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="Stacker"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="Noloco"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="FlutterFlow"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
          </div>
        </section>
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white dark:bg-gray-700">
            <CardHeader>
              <Avatar>
                <AvatarImage alt="Connor Gustafson" src="/placeholder.svg?height=48&width=48" />
              </Avatar>
              <div className="ml-4">
                <CardTitle>Connor Gustafson</CardTitle>
                <CardDescription>CEO</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Software designed for speed and scale. Build user-interfaces, SaaS apps, internal tools and automation
                better and faster with no-code.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
            </CardFooter>
          </Card>
        </section>
        <section className="mt-12">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Trusted by top-tier organizations
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8 lg:grid-cols-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-700">
              <img
                alt="Organization"
                className="max-h-12"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
          </div>
        </section>
        <section className="mt-12 bg-white dark:bg-gray-700 py-8 px-6 rounded-lg">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Expert Development Services</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Discover how companies use no-code software for speed and scale.
          </p>
          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">Schedule 1-Hour</Button>
        </section>
        <footer className="mt-12 py-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">nocodeconsulting.com</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Build enterprise software without writing code. We help companies build apps and automate work with
                no-code software.
              </p>
              <div className="flex mt-4 space-x-6">
                <FacebookIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                <TwitterIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                <InstagramIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                <YoutubeIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                <InstagramIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                <LinkedinIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Expert Development
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Schedule 1-Hour
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

export default HomeNew;