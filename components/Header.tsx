import React from 'react'; // Import React (for clarity and consistency)
import { Button } from "@/components/ui/button";

type Props = React.SVGProps<SVGSVGElement>;

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold">
          NoCode Consulting
          <span className="block w-full h-1 mt-1 bg-blue-100" />
        </h1>
        <nav className="flex space-x-6 text-gray-500">
          <a href="#" className="hover:text-black">Company</a>
          <a href="#" className="hover:text-black">Templates</a>
          <a href="#" className="hover:text-black">Reviews</a>
          <a href="#" className="hover:text-black">Learn</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MoonIcon className="w-6 h-6 text-gray-500" />
        </button>
        <Button className="bg-[#6366F1] text-white">Schedule 1-Hour</Button>
        <Button variant="outline">Login</Button>
      </div>
    </header>
  );
}

function MoonIcon(props: Props) {
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
  );
}

export default Header;
