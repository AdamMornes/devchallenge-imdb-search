import React from 'react';
import logo from '@images/logo.png';

export default function Header() {
    return (
        <header className="bg-gray-800 py-3">
            <div class="container flex items-center justify-between text-white mx-auto">
                <a href="/" className="flex items-center text-2xl font-mono">
                    <span className="block relative w-16 rounded-full border-4 border-white-600 p-3 overflow-hidden mr-3">
                        <img src={logo} className="max-w-full max-h-full" alt="Mini Netflix" />
                        <span class="absolute block top-1/2 left-1/2 h-1 w-32 bg-white transform -translate-y-1/2 -translate-x-1/2 -rotate-45"></span>
                    </span>

                    Mini Netflix
                </a>
            </div>
        </header>
    )
}
