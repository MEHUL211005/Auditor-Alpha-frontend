import { useState } from 'react';
import Container from '../assets/Container.png';
import { navLinks } from '../data/content';
import ActionButton from './ActionButton';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#08090D] border-b border-gray-800/60 sticky top-0 z-50">
      <div className="max-w-[1200px] w-full h-[56px] pl-0 pr-[24px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5 h-[22px]">
          <img src={Container} alt="Logo" className="w-[22px] h-[22px] bg-[#00C9A7] rounded-[4px] flex-shrink-0" />

          <span className="font-['Inter'] font-bold text-[14px] leading-[21px] text-white tracking-normal whitespace-nowrap">
            Auditor Alpha
          </span>

          <span className="w-[38px] h-[19px] py-[1px] px-[5px] rounded-[3px] border border-[#00E599]/40 bg-[#00E599]/10 text-[#00E599] text-[10px] font-mono font-medium flex items-center justify-center leading-none uppercase">
            BETA
          </span>
        </div>

        <nav className="hidden md:flex items-center w-[629px] h-[21px] gap-[28px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['Inter'] font-medium text-[14px] leading-[21px] text-gray-300 hover:text-white transition-colors tracking-normal flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center w-[161px] h-[36px] gap-[10px]">
          <a href="#signin" className="font-['Inter'] font-normal text-[14px] leading-[21px] text-gray-300 hover:text-white transition-colors tracking-normal w-[45px] h-[21px] flex items-center justify-center">
            Sign in
          </a>
          <ActionButton variant="nav">
            <span className="w-[74px] h-[20px] font-['Inter'] font-bold text-[13px] leading-[19.5px] text-[#000000] text-center tracking-normal block">
              Get Started
            </span>
          </ActionButton>
        </div>

        <button
          className="md:hidden p-1 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090D] border-b border-gray-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-['Inter'] font-medium text-[14px] leading-[21px] text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-gray-800/60 flex flex-col gap-3">
            <a href="#signin" className="font-['Inter'] font-normal text-[14px] leading-[21px] text-gray-300 hover:text-white transition-colors">
              Sign in
            </a>
            <ActionButton variant="mobileNav">
              <span className="font-['Inter'] font-bold text-[13px] leading-[19.5px] text-[#000000] text-center tracking-normal">
                Get Started
              </span>
            </ActionButton>
          </div>
        </div>
      )}
    </header>
  );
}