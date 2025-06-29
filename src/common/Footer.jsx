import { useState } from "react";
import React ,{useEffect} from "react";
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto p-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-4 group">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/008/460/149/non_2x/story-pen-ink-logo-vector.jpg" 
                className="h-10 w-10 rounded-full ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all duration-300 mr-3" 
                alt="Storytail Logo" 
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Storytail
              </span>
            </a>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Unleash your creativity with our AI-powered storytelling platform. Transform your imagination into captivating narratives with stunning visuals.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 group">
                <svg
                  className="w-5 h-5 text-purple-400 group-hover:text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                 >
                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.495.997.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.403c1.02.005 2.045.138 3.005.403 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                  </svg>

              </a>
              <a href="#" className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Create Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Gallery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 inline-block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 mb-8 border border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Stay Creative!</h3>
              <p className="text-gray-300">Get weekly inspiration and storytelling tips delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-purple-500/30 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 <span className="text-purple-400 font-medium">Shreyas Badgujar™</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-purple-300 transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};
export default Footer;