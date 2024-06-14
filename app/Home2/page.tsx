"use client"; // Ensure this is at the top of the file

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

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
                    objectFit: "contain",
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
                href="/templates"
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Company partners</h3>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Airtable"
                className="max-h-12"
                height="48"
                src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/airtable logo.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Zapier"
                className="max-h-12"
                height="48"
                src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/zapier logo.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Softr"
                className="max-h-12"
                height="48"
                src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/softr logo.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Stacker"
                className="max-h-12"
                height="48"
                src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/stacker logo.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Noloco"
                className="max-h-12"
                height="48"
                src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/noloco logo.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="FlutterFlow"
                className="max-h-12"
                height="48"
                src="https://nocodeconsulting.blob.core.windows.net/nocodeconsulting/flutterflow logo.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>
          </div>
        </section>
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-1">
          <Card className="bg-white w-full md:w-full lg:w-full relative">
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
            <div className="hidden md:block absolute top-0 right-0 bg-[#ebf5ff] px-2 py-1 text-xs font-semibold text-gray-600 rounded-bl">
              NoCode Consulting
            </div>
          </Card>
        </section>
        <section className="mt-12">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Trusted by top-tier organizations</h3>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8 lg:grid-cols-8">
            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/stanford.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/villanova.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/indexVentures.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/kohrgolf.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/securityPal.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/cleerTax.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/compass.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>

            <div className="col-span- flex justify-center py-8 px-8 bg-gray-50">
              <img
                alt="Organization"
                className="max-h-12"
                height="96"
                src="https://nocodeconsulting.blob.core.windows.net/nextjs/meowwolf.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "contain",
                }}
                width="96"
              />
            </div>



          </div>
        </section>
        <section className="mt-12 bg-white py-8 px-6 rounded-lg">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Expert Development Services</h3>
          <p className="mt-2 text-gray-500">Discover how companies use no-code software for speed and scale.</p>
          <div className="mt-4 mb-8">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Schedule 1-Hour</Button>
          </div>
        </section>
        <footer className="bg-gray-100 p-2 md:p-4 w-full">
          <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-sm">
            <div className="grid gap-2">
              <h3 className="font-semibold">Company</h3>
              <Link href="#" prefetch={false}>
                About
              </Link>
              <Link href="#" prefetch={false}>
                Careers
              </Link>
              <Link href="#" prefetch={false}>
                Pricing
              </Link>
              <Link href="#" prefetch={false}>
                Reviews
              </Link>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Services</h3>
              <Link href="#" prefetch={false}>
                Expert Development
              </Link>
              <Link href="#" prefetch={false}>
                Schedule 1-Hour
              </Link>
              <Link href="#" prefetch={false}>
                Templates
              </Link>
              <Link href="#" prefetch={false}>
                Privacy
              </Link>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Resources</h3>
              <Link href="#" prefetch={false}>
                Blog
              </Link>
              <Link href="#" prefetch={false}>
                Community
              </Link>
              <Link href="#" prefetch={false}>
                Support
              </Link>
              <Link href="#" prefetch={false}>
                FAQs
              </Link>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Legal</h3>
              <Link href="#" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" prefetch={false}>
                Cookie Policy
              </Link>
              <Link href="#" prefetch={false}>
                Compliance
              </Link>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Contact</h3>
              <Link href="#" prefetch={false}>
                Support
              </Link>
              <Link href="#" prefetch={false}>
                Sales
              </Link>
              <Link href="#" prefetch={false}>
                Press
              </Link>
              <Link href="#" prefetch={false}>
                Partnerships
              </Link>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-2 md:order-last">
            <Link href="#" className="text-gray-400 hover:text-gray-500" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500" prefetch={false}>
              <YoutubeIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default home2;
