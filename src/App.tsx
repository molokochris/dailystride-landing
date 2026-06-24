import logoSymbol from "/logo_symbol.svg";
import logoText from "/logo_text.svg";
import appleIcon from "/app-store.svg";
import googlePlayIcon from "/google-play.svg";
import phoneMock0 from "./assets/images/phone-mock-0.png";
import phoneMock2 from "./assets/images/phone-mock-2.png";
import phoneMock3 from "./assets/images/phone-mock-3.png";

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-orange-100/40 flex flex-col">
      {/* Navigation */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1 sm:gap-2 ml-0 sm:ml-4">
              <img
                src={logoSymbol}
                alt="logo symbol"
                className="w-5 h-5 sm:w-4 sm:h-4 object-contain"
              />
              <img
                src={logoText}
                alt="logo text"
                className="w-auto h-3.5 sm:h-4 object-contain"
              />
            </div>


            {/* CTA Button */}
            <button
              className="bg-[#50BF56] hover:bg-[#3AA940] text-[#FFFFFF] px-4 py-2 rounded-[0.4rem]"
            >
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 sm:py-16 md:py-24">
        <div className="text-center">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your future is built daily.
            <br />
            <span className="text-[#50BF56]">one stride at a time.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Track habits, break bad ones, and stay consistent with <span className="font-semibold underline underline-offset-6 decoration-dashed">DailyStride</span> - your simple daily growth companion.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled="true"
              className="pointer-events-none cursor-not-allowed opacity-50 inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <img src={appleIcon} alt="apple icon" className="size-8" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.molokochris.dailystride"
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
          <div className="flex items-center justify-center gap-4 mb-16">
            <p className="mt-3 text-sm text-gray-200">
              Now in review on Google Play. App Store release coming soon.
            </p>
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
                <div className="w-[280px]">
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
            {/* Purple Blob: Hidden on mobile, visible on small screens and up */}
            <div className="hidden sm:block absolute top-1/2 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10"></div>

            {/* Rose Blob: Hidden on mobile, visible on small screens and up */}
            <div className="hidden sm:block absolute top-1/3 right-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10"></div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2026 DailyStride
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy.html"
              className="text-gray-400 hover:text-[#50BF56] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:molokochrisp742@gmail.com"
              className="text-gray-400 hover:text-[#50BF56] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
