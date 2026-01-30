import React, { useRef, useState, useEffect } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import { Plus, ChevronLeft, ChevronRight, Flame, Utensils, Drumstick, Package, ArrowLeft, ShoppingCart, CupSoda } from 'lucide-react';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  onBack: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

const NAV_ITEMS = [
  { label: 'Classic Beef', targetId: 'sec-house-of-beef', icon: Flame, color: 'text-orange-500' },
  { label: 'Premium Beef', targetId: 'sec-premium-beef', icon: Utensils, color: 'text-red-600' },
  { label: 'Zingsters', targetId: 'sec-house-of-chicken', icon: Drumstick, color: 'text-orange-600' },
  { label: 'Broast', targetId: 'sec-broast', icon: Utensils, color: 'text-amber-600' },
  { label: 'Snacks', targetId: 'sec-snacks', icon: Package, color: 'text-orange-400' },
  { label: 'Fries', targetId: 'sec-fries', icon: Flame, color: 'text-yellow-600' },
  { label: 'Drinks', targetId: 'sec-drinks', icon: CupSoda, color: 'text-blue-500' },
  { label: 'Extras', targetId: 'sec-addons', icon: Package, color: 'text-gray-500' },
];

export const Menu: React.FC<MenuProps> = ({ onAddToCart, onBack, cartCount, onOpenCart }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        // High offset to ensure headings aren't hidden by the navigation bar and header
        const headerOffset = 260; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  const scrollNav = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 200;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  const getContainerId = (category: string) => {
      if (category === 'House of Beef') return 'sec-house-of-beef';
      if (category === 'House of Chicken') return 'sec-house-of-chicken';
      if (category === 'Chicken Broast') return 'sec-broast';
      if (category === 'Snacks') return 'sec-snacks';
      if (category.includes('Fries')) return 'sec-fries';
      if (category === 'Drinks') return 'sec-drinks';
      if (category === 'Add-ons') return 'sec-addons';
      return undefined;
  };

  const getSubcategorySectionId = (category: string, subcategory: string) => {
      if (category === 'House of Beef') {
          if (subcategory.includes('Premium')) return 'sec-premium-beef';
      }
      return undefined;
  };

  return (
    <div className="min-h-screen bg-[#fafafa] relative pt-16 pb-32">
      {/* Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100 h-16 flex items-center px-4 justify-between">
          <button 
            onClick={onBack}
            className="group p-2 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-all active:scale-95 flex items-center justify-center"
            aria-label="Back to Home"
          >
             <ArrowLeft className="w-5 h-5 text-gray-200 group-hover:text-orange-500 transition-colors" />
          </button>
          
          <div className="flex flex-col items-center">
               <span className="text-[9px] text-gray-400 tracking-[0.2em] font-black uppercase leading-none">Explore Our</span>
               <span className="font-bebas text-xl text-gray-900 leading-none">LEGENDARY MENU</span>
          </div>

          <button 
            onClick={onOpenCart}
            className="relative p-2 bg-white border border-neutral-200 rounded-xl hover:border-orange-500 transition-all active:scale-95"
          >
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                </span>
            )}
          </button>
      </div>

      <div className="container mx-auto px-4 text-center mt-12 mb-10 reveal active">
        <p className="font-cursive text-orange-600 text-2xl opacity-90 underline decoration-yellow-400 decoration-4 underline-offset-4">Juicy, flavorful, and made fresh for you.</p>
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-xl border-y border-neutral-100 mb-16 py-4 shadow-sm group/nav">
        <div className="max-w-7xl mx-auto relative px-10">
            
            {showLeftArrow && (
              <button 
                onClick={() => scrollNav('left')}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg border border-neutral-100 text-orange-600 transition-all hover:bg-orange-600 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth justify-start md:justify-center"
            >
                {NAV_ITEMS.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToSection(item.targetId)}
                        className="flex flex-col items-center gap-2 min-w-[90px] group transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-2xl border border-neutral-100 flex items-center justify-center bg-neutral-50 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-300 shadow-sm">
                            <item.icon className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors`} />
                        </div>
                        <span className="text-[10px] font-black text-gray-400 group-hover:text-orange-600 uppercase tracking-widest transition-colors whitespace-nowrap">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {showRightArrow && (
              <button 
                onClick={() => scrollNav('right')}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg border border-neutral-100 text-orange-600 transition-all hover:bg-orange-600 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            )}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-20">
          {categories.map((category) => {
            const categoryItems = MENU_ITEMS.filter(item => item.category === category);
            const subcategories = Array.from(new Set(categoryItems.map(item => item.subcategory || 'General')));
            const containerIdVal = getContainerId(category);

            return (
              <div key={category} id={containerIdVal} className="reveal active scroll-mt-64">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className={`text-4xl sm:text-7xl font-bebas tracking-tighter uppercase text-gray-900`}>
                      {category}
                    </h3>
                    <div className="h-0.5 flex-1 bg-neutral-200"></div>
                </div>
                
                {subcategories.map(subcategory => {
                  const items = categoryItems.filter(item => (item.subcategory || 'General') === subcategory);
                  const showSubheader = subcategory !== 'General';
                  const sectionId = getSubcategorySectionId(category, subcategory);

                  return (
                    <div key={subcategory} id={sectionId} className="mb-10 last:mb-0 scroll-mt-64">
                      {showSubheader && (
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                          {subcategory}
                        </h4>
                      )}
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                        {items.map((item) => (
                          <div 
                            key={item.id}
                            onClick={() => onAddToCart(item)}
                            className={`group relative flex flex-col p-3 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer tap-highlight-transparent active:scale-95 overflow-hidden`}
                          >
                            {item.isPopular && (
                                <div className="absolute -top-1 -right-1 bg-orange-600 text-white text-[7px] md:text-[9px] font-black px-2 md:px-3 py-1 rounded-bl-xl md:rounded-bl-2xl z-10 tracking-widest shadow-lg">
                                    TOP
                                </div>
                            )}

                            <div className="flex flex-col h-full relative z-10">
                              <h5 className="font-bebas text-lg md:text-3xl tracking-tight text-gray-900 mb-0.5 md:mb-1 group-hover:text-orange-600 transition-colors leading-none">
                                {item.name}
                              </h5>
                              
                              <p className="text-[9px] md:text-sm text-gray-400 leading-tight mb-2 md:mb-4 flex-grow">
                                {item.description}
                              </p>

                              <div className="flex justify-between items-center pt-2 md:pt-3 border-t border-neutral-50">
                                <span className="text-base md:text-2xl font-bebas text-gray-900">
                                  {item.price}/-
                                </span>
                                
                                <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-neutral-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                                    <Plus className="w-3 h-3 md:w-6 md:h-6" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
