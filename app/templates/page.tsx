/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XsqnUTRxxmS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function templates() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Featured Items</h2>
              <p className="text-gray-600">Premium templates built for teams and individuals</p>
            </div>
            <Link className="text-blue-600 hover:underline" href="#" prefetch={false}>
              Learn more
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>AI Email Marketing</CardTitle>
                <CardDescription>Supercharge your email outreach with ChatGPT.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChartIcon className="h-5 w-5 text-gray-400" />
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xl font-bold">$390</div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-[#3b81f6] hover:bg-[#00a071]">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Automated Accounting</CardTitle>
                <CardDescription>Automate your bookkeeping and tax preparation.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChartIcon className="h-5 w-5 text-gray-400" />
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xl font-bold">$390</div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-[#3b81f6] hover:bg-[#00a071]">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Project Management CRM</CardTitle>
                <CardDescription>Transform the way you manage client projects.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChartIcon className="h-5 w-5 text-gray-400" />
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xl font-bold">$390</div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-[#3b81f6] hover:bg-[#00a071]">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>AI Lead Generation</CardTitle>
                <CardDescription>Automate your lead generation process.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChartIcon className="h-5 w-5 text-gray-400" />
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xl font-bold">$390</div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-[#3b81f6] hover:bg-[#00a071]">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Social Media Automation</CardTitle>
                <CardDescription>Streamline your content creation and publishing.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChartIcon className="h-5 w-5 text-gray-400" />
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xl font-bold">$390</div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-[#3b81f6] hover:bg-[#00a071]">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>LendingApp™</CardTitle>
                <CardDescription>Interface with your borrowers and loan officers.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChartIcon className="h-5 w-5 text-gray-400" />
                  <CogIcon className="h-5 w-5 text-gray-400" />
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xl font-bold">$390</div>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" className="bg-[#3b81f6] hover:bg-[#00a071]">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CogIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

