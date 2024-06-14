import { JSX, SVGProps } from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9JCMVpFrhMp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function reviewst() {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Accounting</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Finance</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">E-commerce</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Medical</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Enterprise</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Security</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Recruiting</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Media</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Online Agency</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">SaaS</div>
          <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold">Education</div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 mr-8">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="KOHR Golf" className="h-8 mr-4" />
              <h3 className="text-lg font-semibold">KOHR Golf</h3>
            </div>
            <p className="text-gray-800 font-semibold mb-2">Bill McInerney</p>
            <p className="text-gray-600 mb-4">CEO at KOHR Golf</p>
            <div className="flex items-center mb-4">
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
            </div>
            <p className="text-gray-700 mb-4">
              Connor's work with NoCode platforms like Airtable, Stacker, and Softr has been a game-changer for my
              business. He's ...
            </p>
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Coaching</div>
              <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold">Fitness</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 mr-8">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Villanova University" className="h-8 mr-4" />
              <h3 className="text-lg font-semibold">Villanova University</h3>
            </div>
            <p className="text-gray-800 font-semibold mb-2">Ann Miller</p>
            <p className="text-gray-600 mb-4">Director at Villanova University</p>
            <div className="flex items-center mb-4">
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
            </div>
            <p className="text-gray-700 mb-4">
              Connor is incredibly knowledgeable about Airtable and all of the complimentary products that enhance it's
              capabilitie...
            </p>
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">Education</div>
              <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold">Startups</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Cleer Tax & Bookkeeping" className="h-8 mr-4" />
              <h3 className="text-lg font-semibold">Cleer Tax & Bookkeeping</h3>
            </div>
            <p className="text-gray-800 font-semibold mb-2">Crystal Stranger</p>
            <p className="text-gray-600 mb-4">Partner at Cleer Tax</p>
            <div className="flex items-center mb-4">
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
              <StarIcon className="text-yellow-500 h-5 w-5 mr-1" />
            </div>
            <p className="text-gray-700 mb-4">
              Working with Connor has been amazing! He is super bright and always has great solutions. Many changes have
              been so mu...
            </p>
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold mr-4">
                Accounting
              </div>
              <div className="bg-gray-100 rounded-full px-4 py-1 text-gray-600 text-sm font-semibold">Bookkeeping</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }