import Link from 'next/link';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <nav className="px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">NoCode Consulting</div>
        <div className="space-x-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Company
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Templates
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Reviews
          </Link>
          <Select>
            <SelectTrigger id="learn" aria-label="Learn">
              <SelectValue placeholder="Learn" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="faq">FAQ</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Schedule 1-Hour
          </Button>
          <Button variant="secondary" className="bg-purple-600 hover:bg-purple-700">
            Login
          </Button>
        </div>
      </nav>
      <header className="px-8 py-16">
        <div className="max-w-3xl">
          <Badge className="mb-6" variant="secondary">
            No-Code Development Agency
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Build enterprise software without writing code.</h1>
          <p className="text-xl mb-6">We help companies build apps and automate work with no-code software.</p>
          <div className="flex space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Schedule 1-Hour
            </Button>
          </div>
        </div>
      </header>
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Company partners</h2>
        <div className="flex justify-between space-x-4 mb-16">
          <img src="/next.svg" alt="Airtable logo" className="h-10" />
          <img src="/vercel.svg" alt="Zapier logo" className="h-10" />
          <img src="/placeholder.svg" alt="Softr logo" className="h-10" />
          <img src="/placeholder.svg" alt="Stacker logo" className="h-10" />
          <img src="/placeholder.svg" alt="Noloco logo" className="h-10" />
          <img src="/placeholder.svg" alt="FlutterFlow logo" className="h-10" />
        </div>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="CEO's Profile" />
            <AvatarFallback>CG</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <div className="text-base font-semibold">Connor Gustafson</div>
            <div className="text-sm">CEO</div>
            <p className="text-sm my-2">
              Software designed for speed and scale. Build user-interfaces, SaaS apps, internal tools and automation better and faster with no-code.
            </p>
            <Button variant="secondary" className="bg-[#bd1e59]">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <footer className="px-8 py-4 text-center">
        <div className="text-xl font-bold">NoCode Consulting</div>
      </footer>
    </div>
  );
}
