/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Dpw8clQLluJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// pages/learn.tsx
import React from 'react';
import Input from '@/components/ui/input';
import Link from 'next/link';
export default function learn() {
  return (

    
    
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto my-8">
        <Input
          type="search"
          placeholder="Search videos..."
          className="w-full px-4 py-2 text-lg rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full max-w-6xl">
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">
              Introducing SQL for Softr 🚀 PostgreSQL, MySQL, SQL Server, and MariaDB
            </h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
              Introducing SQL for Softr 🚀 PostgreSQL, MySQL, SQL Server, and MariaDB
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">
              How Officeheads Built a Portal to Deliver More Value to Clients | Softr Customer Stories
            </h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
              How Officeheads Built a Portal to Deliver More Value to Clients | Softr Customer Stories
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">How to Resolve Package Dependency Issues</h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">How to Resolve Package Dependency Issues</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">Learn How Zapier Tables is Your Automated Database</h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
              Learn How Zapier Tables is Your Automated Database
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">With Zapier Central, you can boss AI around! 🤯 👀</h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
              With Zapier Central, you can boss AI around! 🤯 👀
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">What&apos;s New in FlutterFlow | May 2024</h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">What&apos;s New in FlutterFlow | May 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">This is My Ultimate Lead Management Workflow!</h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
              This is My Ultimate Lead Management Workflow!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">Lead Routing Management: How Can Zapier Help?</h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
              Lead Routing Management: How Can Zapier Help?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="#" className="relative aspect-video overflow-hidden rounded-lg" prefetch={false}>
            <img src="/placeholder.svg" alt="Video Thumbnail" width={350} height={200} className="object-cover" />
          </Link>
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">
              5 Ways to Make the Most of Zapier as a Startup Founder
            </h3>
            <p className="text-gray-500 line-clamp-2 dark:text-gray-400">5 Ways to Make the Most</p>
          </div>
        </div>
      </div>
    </div>
  )
}