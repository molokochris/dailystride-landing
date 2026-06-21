import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Activity, Apple, Download } from "lucide-react";
import logoSymbol from "../public/logo_symbol.svg";
import logoText from "../public/logo_text.svg";
import appleIcon from "../public/app-store.svg";
import googlePlayIcon from "../public/google-play.svg";
import phoneMock0 from "./assets/images/phone-mock-0.png";
import phoneMock1 from "./assets/images/phone-mock-1.png";
import phoneMock2 from "./assets/images/phone-mock-2.png";
import phoneMock3 from "./assets/images/phone-mock-3.png";

export default function App() {
  // Mock user avatars for trust indicator
  const userAvatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-orange-100/40">
      {/* Navigation */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 ml-4">
              <img src={logoSymbol} alt="logo symbol" className="w-12 h-8" />
              <img src={logoText} alt="logo text" className="h-4" />
            </div>

            {/* CTA Button */}
            <Button
              className="bg-[#50BF56] hover:bg-[#3AA940] text-[#FFFFFF]"
              size="lg"
            >
              Download App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your future is built daily.
            <br />
            <span className="text-[#50BF56]">one stride at a time.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Track habits, break bad ones, and stay consistent with <span className="font-semibold underline underline-offset-6 decoration-dashed">Dailystride</span> - your simple daily growth companion.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled="true"
              className="pointer-events-none cursor-not-allowed opacity-50 inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <img src={appleIcon} alt="apple icon" className="size-8" />
              <div className="text-left">
                {/* <div className="text-xs">Download on the</div> */}
                <div className="text-lg font-semibold">App Store</div>
                <div className="text-xs">coming soon..</div></div>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <img src={googlePlayIcon} alt="google play icon" className="size-8" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Phone Mockups */}
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-end justify-center gap-8">
              {/* Left Phone */}
              <div className="hidden md:block relative">
                <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={phoneMock2} alt="mock phone 1" className="w-64" />
                </div>
              </div>

              {/* Center Phone (Main) */}
              <div className="relative z-10">
                <div className="w-70">
                  <img src={phoneMock0} alt="mock phone 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Phone */}
              <div className="hidden md:block relative">
                <div className="transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={phoneMock3} alt="mock phone 3" className="w-64 h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Background gradient orbs */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
