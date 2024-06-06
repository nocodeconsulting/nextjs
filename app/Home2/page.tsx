"use client"; // Ensure this is at the top of the file

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "lucide-react";

const home2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                <img
                  alt="NoCode Consulting"
                  height={50}
                  src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/nocode-consulting-logo.png"
                  style={{
                    aspectRatio: "200/50",
                    objectFit: "cover",
                  }}
                  width={200}
                />
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Company
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Templates
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Reviews
              </a>
              <a
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Learn
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      <main className="w-full px-4 sm:px-6 lg:px-8 mt-12">
        <section className="mt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Company partners</h3>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
          <Card className="bg-white">
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
              <p className="text-gray-500">
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Trusted by top-tier organizations</h3>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8 lg:grid-cols-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
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
        <section className="mt-12 bg-white py-8 px-6 rounded-lg">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Expert Development Services</h3>
          <p className="mt-2 text-gray-500">Discover how companies use no-code software for speed and scale.</p>
          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">Schedule 1-Hour</Button>
        </section>
        <footer className="mt-12 py-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">nocodeconsulting.com</h2>
              <p className="mt-2 text-gray-500">
                Build enterprise software without writing code. We help companies build apps and automate work with
                no-code software.
              </p>
              <div className="flex mt-4 space-x-6">
                <FacebookIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                <TwitterIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                <InstagramIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                <YoutubeIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                <InstagramIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                <LinkedinIcon className="h-6 w-6 text-gray-400 hover:text-gray-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Expert Development
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Schedule 1-Hour
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
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

export default home2;