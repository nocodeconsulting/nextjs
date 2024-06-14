import { SVGProps } from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zjGDaDUMl8Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function company() {
    return (
      <div className="bg-white dark:bg-gray-900">
        <nav className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">NoCode Consulting</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Company
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Templates
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Reviews
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Learn
            </a>
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Schedule 1-Hour</button>
            <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Login
            </button>
          </div>
        </nav>
        <main className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The power of no-code software.</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We focus on 3 core components in designing and delivering no-code applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Database</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Build a single source of truth that connects your data, workflows and teams.
                </p>
                <div className="flex items-center space-x-2">
                  <DatabaseIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  <DatabaseIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  <DatabaseIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">User Interface</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create a user-friendly interface with roles and permissions for accessing data.
                </p>
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  <LockIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  <SettingsIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  <GlobeIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Automation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automate your custom workflows and integrate AI into your apps.
                </p>
                <div className="flex items-center space-x-2">
                  <BotIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  <XIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Here's what to expect when working with our development team:
              </h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white mr-4">1</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Submit Application</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Please give us some information about your project, so that we can ensure a good fit. We'll provide a
                  candid evaluation of possible outcomes.
                </p>
                <p className="text-gray-600 dark:text-gray-300">Less than 5 minutes to complete</p>
                <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">Get Started</button>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white mr-4">2</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Introductory Call</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  After reviewing your application, we'll schedule a free introductory call to clarify project details,
                  address questions, provide a cost estimate, and help you decide on next steps.
                </p>
                <p className="text-gray-600 dark:text-gray-300">30 minute video call</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white mr-4">3</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Development Sprints</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our team will schedule weekly meetings with you to keep you informed of the progress, discuss the
                  project and incorporate your feedback. This iterative approach ensures we stay in line and optimize the
                  final solution until it perfectly aligns with your vision.
                </p>
                <p className="text-gray-600 dark:text-gray-300">1.5 hour development sprints</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-gray-900 dark:text-white mr-4">4</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Customer Support</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We offer ongoing support for our deliverables during the post-delivery phase, ensuring optimal
                  performance and satisfaction.
                </p>
                <p className="text-gray-600 dark:text-gray-300">24/7 email support</p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Airtable</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Airtable is a no-code platform for building collaborative apps.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Expert Certification &rarr;
                </a>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Zapier</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Zapier connects your apps to streamline your mission-critical processes.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Expert Certification &rarr;
                </a>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stacker</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stacker makes it easy to build customer portals, CRMs, internal tools, and other business apps.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Expert Certification &rarr;
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Softr</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Softr let's you build internal tools and client partner portals from your data, without code.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Expert Certification &rarr;
                </a>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Noloco</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Noloco is a no-code client portal and custom app builder for agencies and SMBs.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Expert Certification &rarr;
                </a>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">FlutterFlow</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  FlutterFlow is a low-code builder for developing native mobile applications and web apps.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
                  Expert Certification &rarr;
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <a href="#" className="text-gray-900 dark:text-white font-bold text-xl">
                nocodeconsulting.com
              </a>
              <p className="text-gray-600 dark:text-gray-300">Build enterprise software without writing code.</p>
              <p className="text-gray-600 dark:text-gray-300">
                We help companies build apps and automate work with no-code software.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <YoutubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  function BotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    )
  }
  
  
  function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
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
  
  
  function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
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
  
  
  function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
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
  
  
  function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
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