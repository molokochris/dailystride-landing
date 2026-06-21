import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Activity, Apple, Download } from "lucide-react";
import phoneImage from "../imports/image.png";

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
      <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Activity className="size-6" />
              </div>
              <span className="text-xl font-semibold">Dailystride</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
              <a href="#testimonial" className="hover:text-orange-400 transition-colors">Testimonial</a>
              <a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white"
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
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-3">
              {userAvatars.map((avatar, index) => (
                <ImageWithFallback
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  className="size-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">Trusted by 10k+ people</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Track your fitness journey
            <br />
            <span className="text-orange-500">one stride at a time.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Dailystride helps you stay motivated with personalized fitness tracking, 
            goal setting, and progress insights — all in one beautifully designed app.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <Apple className="size-8" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
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
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden w-64 h-[32rem]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1729860648211-20c98defeb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcnVubmluZyUyMGFwcCUyMHNtYXJ0cGhvbmUlMjBzY3JlZW58ZW58MXx8fHwxNzgyMDM1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Dailystride App Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Center Phone (Main) */}
              <div className="relative z-10">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden w-72 h-[36rem]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBydW5uaW5nJTIwZXhlcmNpc2UlMjBmaXRuZXNzfGVufDF8fHx8MTc4MjAzNTk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Dailystride App Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="hidden md:block relative">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden w-64 h-[32rem]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1729860648211-20c98defeb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcnVubmluZyUyMGFwcCUyMHNtYXJ0cGhvbmUlMjBzY3JlZW58ZW58MXx8fHwxNzgyMDM1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Dailystride App Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Background gradient orbs */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
