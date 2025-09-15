// Add "use client" for hooks and event handlers
"use client";

import { useState } from "react"; // 1. Import useState
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react"
import styles from './TestBuilder.module.css'; // Import CSS module

export default function TestBuilder() {
  // 2. Initialize state for the mobile navigation
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="min-h-screen">
    <Header />
    {/* Remove the x-data attribute from the section tag */}
<section className="overflow-hidden">
  <div className="bg-white">
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto pr-2">
              <a href="#">
                <img
                  src="https://static.shuffle.dev/uploads/files/63/633660fd6f74816bebda449597f0e0458a674f7b/logos/logo-cd3174126858f74fcc713ab70bcbcdd4.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-8">
                <li className="mr-14 font-medium text-gray-700 hover:text-gray-900 tracking-tight">
                  <a href="#">3D Visualization</a>
                </li>
                <li className="mr-14 font-medium text-gray-700 hover:text-gray-900 tracking-tight">
                  <a href="#">AR Surgery Tools</a>
                </li>
                <li className="mr-8 font-medium text-gray-700 hover:text-gray-900 tracking-tight border-r border-gray-300 pr-8">
                  <a href="#">Case Studies</a>
                </li>
                <li className="font-medium text-gray-700 hover:text-gray-900 tracking-tight">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-auto hidden lg:block">
              <div className="inline-block">
                <a
                  className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-cyan-600 hover:bg-cyan-700 rounded-lg focus:ring-4 focus:ring-cyan-300 transition duration-200"
                  href="#"
                >
                  Request Consultation
                </a>
              </div>
            </div>
            <div className="w-auto lg:hidden">
              {/* 3. Replace x-on:click with React's onClick */}
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <svg
                  className="text-cyan-600"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={28} fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    {/* Mobile Nav - Converted to React */}
    <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
      <div onClick={() => setMobileNavOpen(false)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  <img src="https://static.shuffle.dev/uploads/files/63/633660fd6f74816bebda449597f0e0458a674f7b/logos/logo-cd3174126858f74fcc713ab70bcbcdd4.png" alt=""/>
                </a>
              </div>
              <div className="w-auto p-2">
                <button onClick={() => setMobileNavOpen(false)} className="text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-16 w-full">
            <ul>
              <li className="mb-12 font-medium text-gray-700 hover:text-gray-900 tracking-tight"><a href="#">3D Visualization</a></li>
              <li className="mb-12 font-medium text-gray-700 hover:text-gray-900 tracking-tight"><a href="#">AR Surgery Tools</a></li>
              <li className="mb-12 font-medium text-gray-700 hover:text-gray-900 tracking-tight"><a href="#">Case Studies</a></li>
              <li className="font-medium text-gray-700 hover:text-gray-900 tracking-tight"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-end w-full pb-8"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-cyan-600 hover:bg-cyan-700 rounded-lg focus:ring-4 focus:ring-cyan-300 transition duration-200" href="#">Request Consultation</a></div>
        </div>
      </nav>
    </div>
    
    <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-lg">
              <span className="inline-block mb-8 px-3 py-1 text-cyan-800 font-semibold bg-cyan-100 rounded-full">
                Medical Technology Leaders
              </span>
              <h1 className="font-heading mb-12 text-6xl md:text-7xl text-gray-800 tracking-tighter">
                Precision in 3D Medical Visualization &amp; AR Surgery Tools
              </h1>
              <div className="flex flex-wrap -m-2 mb-14">
                <div className="w-auto p-2">
                  <a
                    className="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-cyan-600 hover:bg-cyan-700 rounded-lg focus:ring-4 focus:ring-cyan-300 transition duration-200"
                    href="#"
                  >
                    Request Consultation
                  </a>
                </div>
                <div className="w-auto p-2">
                  <a
                    className="inline-flex items-center px-5 py-4 bg-transparent hover:bg-cyan-50 border border-cyan-600 hover:border-cyan-700 rounded-lg focus:ring-4 focus:ring-cyan-300 transition duration-200"
                    href="#"
                  >
                    <span className="text-cyan-600 font-semibold tracking-tight">
                      View Case Studies
                    </span>
                  </a>
                </div>
              </div>
              <div className="max-w-md">
                <div className="flex flex-wrap -m-1.5">
                  <div className="w-auto p-1.5">
                    <div className="flex flex-wrap">
                      <div className="w-auto">
                        <img
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face"
                          alt=""
                        />
                      </div>
                      <div className="w-auto -ml-5">
                        <img
                          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=50&h=50&fit=crop&crop=face"
                          alt=""
                        />
                      </div>
                      <div className="w-auto -ml-5">
                        <img
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-1.5">
                    <p className="text-gray-700 tracking-tight">
                      Trusted by 500+ hospitals and medical institutions
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <img
              className="transform hover:-translate-y-2 transition duration-500 rounded"
              src="https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwwfDJ8fHwxNzU3ODkxODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&w=450"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
</section>
     {/* MARQUEE LOGO SECTION - Tailwind Only */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-xl font-semibold text-center text-gray-800">
      Trusted by 3000+ great companies
    </h2>

    <div className="relative mt-10">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 z-10 h-full w-[15%] bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-[15%] bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Marquee container */}
      <div className="overflow-hidden">
        <div className="flex animate-pulse hover:pause">
          {/* Create multiple sets for continuous scroll */}
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex flex-shrink-0 animate-slide">
              <img className="mx-8 h-12 w-auto flex-shrink-0" alt="client logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/597b4f4f-c359-4e9f-9b46-42d363069dcd.png" />
              <img className="mx-8 h-12 w-auto flex-shrink-0" alt="client logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/be9a2e74-d291-40ab-8dc3-d0467a80a913.png" />
              <img className="mx-8 h-12 w-auto flex-shrink-0" alt="client logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9c928742-6096-4545-9edb-ab5f1b95f5e2.png" />
              <img className="mx-8 h-12 w-auto flex-shrink-0" alt="client logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/d1589331-9ad1-4a04-91fb-2ca6118817f0.png" />
              <img className="mx-8 h-12 w-auto flex-shrink-0" alt="client logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9b9da7c5-9abf-4424-879e-88bd04e26845.png" />
              <img className="mx-8 h-12 w-auto flex-shrink-0" alt="client logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9d5b21e9-9fd9-4ce7-9331-9738fad25b5c.png" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Add custom CSS for the marquee animation */}
<style jsx global>{`
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  .animate-slide {
    animation: slide 30s linear infinite;
  }
  
  .hover\\:pause:hover .animate-slide {
    animation-play-state: paused;
  }
`}</style>



</main>
  )
}