import React, { useState } from "react";
import { Bell, MessageSquare, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Dashboard", href: "#", active: true },
  { name: "Employees", href: "#" },
  { name: "Attendance", href: "#" },
  { name: "Payroll", href: "#" },
  { name: "Recruitment", href: "#" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between 
                    bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          worklytics
        </span>
      </div>

      {/* Desktop Navigation - Glass Pill Design */}
      <div
        className="hidden lg:flex items-center bg-white/40 backdrop-blur-xl 
                      border border-white/40 rounded-[2rem] p-1.5 shadow-inner">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-6 py-2 rounded-[1.5rem] text-sm font-semibold transition-all duration-300 ${
              link.active
                ? "bg-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] scale-105"
                : "text-gray-700 hover:bg-white/50 hover:text-black"
            }`}>
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Side - Liquid Buttons */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-3">
          <button
            className="p-2.5 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/50 
                             shadow-sm hover:bg-white hover:scale-110 transition-all relative group">
            <Bell size={20} className="text-gray-700 group-hover:shake" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          <button
            className="p-2.5 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/50 
                             shadow-sm hover:bg-white hover:scale-110 transition-all">
            <MessageSquare size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Profile with Glass Ring */}
        <div className="p-0.5 rounded-2xl bg-gradient-to-tr from-white/80 to-transparent shadow-md">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border border-white/20">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-800 hover:bg-white/40 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Glass Menu */}
      {isOpen && (
        <div
          className="absolute top-[calc(100%+10px)] left-4 right-4 bg-white/70 backdrop-blur-2xl 
                        rounded-3xl border border-white/40 shadow-2xl lg:hidden z-50 
                        flex flex-col p-3 gap-1 overflow-hidden animate-in fade-in zoom-in duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                link.active
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-white/60"
              }`}
              onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
