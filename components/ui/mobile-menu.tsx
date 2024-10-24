'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute  top-full z-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight} : { maxHeight: 0 }}
      >
        <ul className=" px-4 py-2 bg-gray-800/100">
          <li>
            <Link
                href="/#phosphatation"
                className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}>
              Phosphatation
            </Link>
          </li>
          <li>
            <Link
                href="/#zingage"
                className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}>
              Zingage
            </Link>
          </li>
          <li>
            <Link
                href="/#brunissage"
                className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}>
              Brunissage
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
            >
              Demander un devis

            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
