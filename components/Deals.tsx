import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface DealsProps {
  onBack: () => void;
}

export const Deals: React.FC<DealsProps> = ({ onBack }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-12 w-full">
      {/* Modern Back Button - Top Left - Icon Only */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-30 group p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 shadow-2xl hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] active:scale-95"
        aria-label="Back to Menu"
      >
         <ArrowLeft className="w-6 h-6 text-gray-200 group-hover:text-yellow-500 transition-transform duration-300 group-hover:-translate-x-1" />
      </button>

      {/* Background blobs similar to Hero */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-red-600/20 rounded-full blur-[60px] sm:blur-[100px] animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-yellow-500/20 rounded-full blur-[60px] sm:blur-[100px] animate-pulse-soft" style={{animationDelay: '1s'}}></div>

      <div className="z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-sm font-bold tracking-wider animate-in fade-in slide-in-from-bottom-4">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>EXCITEMENT LOADING</span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bebas font-extrabold text-white mb-2 drop-shadow-2xl animate-in zoom-in-50 duration-500">
          DEALS
        </h1>
        
        <div className="relative inline-block mb-8">
             <h2 className="text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 font-bebas tracking-[0.1em] animate-pulse">
                COMING SOON
             </h2>
             <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
        </div>

        <p className="text-gray-400 text-base sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light mb-12 animate-in slide-in-from-bottom-8 duration-700 delay-150">
            We are cooking up some <span className="text-yellow-500 font-semibold">spicy offers</span> and <span className="text-red-500 font-semibold">exclusive bundles</span> just for you. Stay hungry, stay tuned!
        </p>
        
        {/* Loading Animation Dots */}
        <div className="flex gap-3 justify-center items-center">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>

        {/* Decorative Ticket Stub style elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#111111] border-r border-gray-800 hidden md:block"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-24 h-24 rounded-full bg-[#111111] border-l border-gray-800 hidden md:block"></div>
      </div>
    </div>
  );
};