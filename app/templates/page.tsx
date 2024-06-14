/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z4yyPDDMk9O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardFooter, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function templates() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <header className="flex items-center justify-between p-4 md:px-6 lg:px-8 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CloudLightningIcon className="w-6 h-6" />
          <span className="text-lg font-semibold tracking-tight">AI Solutions</span>
        </Link>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <section className="grid gap-8 lg:gap-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              AI-Powered No-Code Templates
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Streamline your operations and unlock new possibilities with our cutting-edge AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="AI Email Marketing"
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">AI Email Marketing</h3>
                <p className="text-sm text-gray-500">Supercharge your email outreach with ChatGPT.</p>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold">$390</span>
                  <Button>Purchase</Button>
                </div>
              </CardFooter>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Automated Accounting"
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Automated Accounting</h3>
                <p className="text-sm text-gray-500">Automate your bookkeeping and tax preparation.</p>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold">$390</span>
                  <Button>Purchase</Button>
                </div>
              </CardFooter>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Project Management CRM"
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Project Management CRM</h3>
                <p className="text-sm text-gray-500">Transform the way you manage client projects.</p>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold">$390</span>
                  <Button>Purchase</Button>
                </div>
              </CardFooter>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="AI Lead Generation"
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">AI Lead Generation</h3>
                <p className="text-sm text-gray-500">Automate your lead generation process.</p>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold">$390</span>
                  <Button>Purchase</Button>
                </div>
              </CardFooter>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="Social Media Automation"
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">Social Media Automation</h3>
                <p className="text-sm text-gray-500">Streamline your content creation and publishing.</p>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold">$390</span>
                  <Button>Purchase</Button>
                </div>
              </CardFooter>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/placeholder.svg"
                width={500}
                height={400}
                alt="LendingApp™"
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">LendingApp™</h3>
                <p className="text-sm text-gray-500">Interface with your borrowers and loan officers.</p>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold">$390</span>
                  <Button>Purchase</Button>
                </div>
              </CardFooter>
            </div>
          </div>
        </section>
        <section className="grid gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              AI Solutions for Your Business
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our AI-driven tools and services to streamline your operations and stay ahead of the curve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Marketing</CardTitle>
                <CardDescription>
                  Automate your email campaigns and engage with customers like never before.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    Personalized email content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    Optimized send times
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    A/B testing and analytics
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 lg:px-8 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 AI Solutions Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CloudLightningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}