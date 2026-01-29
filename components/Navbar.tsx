import React, { useState, useEffect } from 'react';
import { ShoppingCart, UtensilsCrossed, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (view: 'home' | 'deals' | 'menu', hash?: string) => void;
  currentView: 'home' | 'deals' | 'menu';
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const updateStatus = () => {
      const now = new Date();
      const pakistanTimeStr = now.toLocaleString("en-US", { timeZone: "Asia/Karachi" });
      const pakistanDate = new Date(pakistanTimeStr);
      const hour = pakistanDate.getHours();
      const day = pakistanDate.getDay();
      const openHour = 17;
      let isShopOpen = false;
      let closingTime = (day === 1 || day === 6 || day === 0) ? 4 : 3;
      
      if (hour < 5) {
        isShopOpen = hour < closingTime;
      } else {
        isShopOpen = hour >= openHour;
      }
      setIsOpen(isShopOpen);
    };

    updateStatus();
    window.addEventListener('scroll', handleScroll);
    const statusInterval = setInterval(updateStatus, 60000);
    const flipInterval = setInterval(() => setIsFlipped(prev => !prev), 4500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(statusInterval);
      clearInterval(flipInterval);
    };
  }, []);

  const navLinks = [
    { name: 'MENU', href: '#', view: 'menu' },
    { name: 'DEALS', href: '#', view: 'deals' },
    { name: 'ABOUT', href: '#about', view: 'home' },
    { name: 'CONTACT', href: '#contact', view: 'home' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
      e.preventDefault();
      onNavigate(link.view as 'home' | 'deals' | 'menu', link.href !== '#' ? link.href : undefined);
  };

  const StatusBadge = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`perspective-1000 ${mobile ? 'w-28 h-8' : 'w-40 h-12'}`}>
      <div className={`relative w-full h-full transition-transform duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front: Status */}
        <div className={`absolute inset-0 backface-hidden flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-4 rounded-xl border transition-all duration-500 shadow-sm ${isOpen ? 'bg-green-500/10 border-green-500/40 text-green-600' : 'bg-red-500/10 border-red-500/40 text-red-600'}`}>
          <Clock className={mobile ? "w-3 h-3" : "w-5 h-5"} />
          <span className={`${mobile ? "text-xs" : "text-xl"} font-bebas tracking-wider uppercase whitespace-nowrap`}>
            {isOpen ? 'OPEN NOW' : 'CLOSED'}
          </span>
        </div>
        
        {/* Back: Hours */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl px-2`}>
          <div className="flex flex-col items-center justify-center leading-[1.1] text-center">
             <span className={`${mobile ? "text-[8px]" : "text-[11px]"} font-black tracking-tight text-white uppercase`}>Mon-Thu 5PM - 3AM</span>
             <span className={`${mobile ? "text-[8px]" : "text-[11px]"} font-black tracking-tight text-white uppercase`}>Fri-Sun 5PM - 4AM</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-neutral-100 py-2 shadow-sm' 
        : 'bg-transparent border-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between h-auto gap-2">
          
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto h-full gap-4">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); onNavigate('home', '#home'); }}
              className="flex-shrink-0 flex items-center group"
            >
              <img 
                src="https://raw.githubusercontent.com/faaaroooq22/menu-mrbeefburgrz/main/Logo.png" 
                alt="Logo" 
                className={`transition-all duration-500 h-10 md:h-16 w-auto drop-shadow-sm`} 
              />
              <div className="flex flex-col ml-3 border-l-2 border-neutral-200 pl-3">
                <span className="font-bebas text-xl md:text-2xl tracking-tighter text-orange-500 leading-none uppercase">MR. BEEF BURGRZ</span>
                <span className="font-cursive text-gray-500 text-[11px] md:text-sm whitespace-nowrap">Juicy to the last bite!</span>
              </div>
            </a>

            <div className="flex md:hidden items-center gap-2">
              <StatusBadge mobile />
              <button onClick={onOpenCart} className="relative p-2 text-gray-700 bg-white rounded-lg border border-neutral-200 hover:border-orange-500 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8 border-r border-neutral-200 pr-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`relative font-bebas text-xl tracking-widest transition-colors duration-300 group ${
                    (currentView === 'deals' && link.name === 'DEALS') || (currentView === 'menu' && link.name === 'MENU')
                      ? 'text-orange-600' 
                      : 'text-gray-500 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${((currentView === 'deals' && link.name === 'DEALS') || (currentView === 'menu' && link.name === 'MENU')) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenCart}
                className="relative group flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-orange-600/20 active:scale-95 border border-white/10"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="tracking-widest font-bebas text-lg uppercase">CART</span>
                {cartCount > 0 && (
                  <span className="bg-white text-orange-600 text-xs font-black px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <StatusBadge />
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden flex flex-col w-full transition-all duration-500 overflow-x-auto no-scrollbar ${isScrolled ? 'bg-white/95' : 'bg-white/40'}`}>
        <div className="flex justify-between items-center px-6 py-3 gap-8">
           {navLinks.map((link) => (
              <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`font-bebas text-lg tracking-widest whitespace-nowrap transition-colors ${((currentView === 'deals' && link.name === 'DEALS') || (currentView === 'menu' && link.name === 'MENU')) ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
              >
                  {link.name}
              </a>
           ))}
        </div>
      </div>
    </nav>
  );
};