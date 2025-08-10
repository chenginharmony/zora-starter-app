'use client'

import { usePrivy } from '@privy-io/react-auth'
import Image from 'next/image'

export const Header = () => {
  const { authenticated, login, logout } = usePrivy()

  return (
    <header className="relative md:fixed md:top-0 md:left-0 md:right-0 z-50 bg-white border-gray-200">
      <div className="flex flex-row justify-between items-center px-10 py-6 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Image src={'/zorb.svg'} alt={'Zora Zorb Logo'} height={80} width={80} />
          <a href="/coins" className="text-xl text-blue-600 hover:underline">All Coins</a>
        </div>
        <button
          className="flex items-center border-2 border-black px-10 py-3 hover:border-gray-400 hover:text-gray-400"
          onClick={!authenticated ? login : logout}
        >
          <div className="text-2xl">{authenticated ? 'Logout' : 'Login'}</div>
        </button>
      </div>
    </header>
  )
}
