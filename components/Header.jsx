import React from 'react'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
       <span className="font-extrabold text-xl">
        <Link href={"/"}>𝔸𝕀 𝕀𝕟𝕥𝕖𝕣𝕧𝕚𝕖𝕨 ℙ𝕝𝕒𝕔𝕖</Link>
        </span>

           {/* Sign in */}
              <div className="flex items-center gap-4">
                 <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="green">Get started→</Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>

                 </div> 
        </nav>
    )
}

export default Header