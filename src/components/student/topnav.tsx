'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserAvatar } from '@/components/ui/UserAvatar'

export function Topnav() {
  return (
    <nav className="bg-white shadow-md px-12 flex justify-between items-center max-md:px-6 max-sm:px-4 fixed top-0 left-0 right-0 z-50">
      {/* Left side: Logo */}
      <div className="flex items-center gap-4 pt-2">
        <Link href="/" passHref>
          <Image
            src="/buildclublogo4.png" 
            alt="Logo"
            width={100} 
            height={80} 
          />
        </Link>
        <div className='text-2xl font-bold text-gray-700'>Build Club SSN</div>
      </div>

      {/* Right side: Navigation Links and Avatar */}
      <div className="flex items-center space-x-6">
        <Link href="/about" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="/student/eventsPage" className="text-gray-700 hover:text-gray-900">
          Events
        </Link>
        <Link href="/student/ourTeam" className="text-gray-700 hover:text-gray-900">
          Our Team
        </Link>

        <UserAvatar />
      </div>
    </nav>
  )
}
