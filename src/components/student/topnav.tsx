'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserAvatar } from '@/components/ui/UserAvatar'

export function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false)

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
            priority
          />
        </Link>
        <div className="text-2xl font-bold text-gray-700">Build Club SSN</div>
      </div>

      {/* Right side: Navigation Links and Avatar */}
      <div className="hidden md:flex items-center space-x-6">
        <Link rel= "preload" href="/about" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link rel= "preload" href="/student/eventsPage" className="text-gray-700 hover:text-gray-900">
          Events
        </Link>
        <Link rel= "preload" href="/student/ourTeam" className="text-gray-700 hover:text-gray-900">
          Our Team
        </Link>
        <UserAvatar />
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {/* <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link> */}
            <Link
              href="/student/eventsPage"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/student/ourTeam"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Our Team
            </Link>
            <div onClick={() => setMenuOpen(false)}>
              <UserAvatar />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
