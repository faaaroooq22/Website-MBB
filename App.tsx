import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { OptionModal } from './components/OptionModal';
import { Deals } from './components/Deals';
import { MakeYourBurger } from './components/MakeYourBurger';
import { MenuItem, CartItem } from './types';
import { Instagram, Facebook, Youtube, MapPin, Star, ChevronUp, Phone, MessageCircle, ShoppingBag, ArrowRight, ChefHat, Sparkles, Quote, ExternalLink, Linkedin, RefreshCw, UtensilsCrossed, ArrowLeft, Search, X, Share2, Bookmark, Navigation, Clock, Package, CupSoda } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831-1.003-.104z"/>
  </svg>
);

const GOOGLE_REVIEWS_LINK = "https://www.google.com/search?q=mr.+beef+burgrz+karachi+reviews";
const LINKEDIN_LINK = "https://www.linkedin.com/company/mr-beef-burgrz/";

const Hero: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
    return (
        <header id="home" className="relative w-full pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden bg-white border-b border-neutral-100">
            {/* Dynamic faint glows for Light Theme */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-400 rounded-full blur-[100px] md:blur-[180px] animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-yellow-300 rounded-full blur-[120px] md:blur-[220px] animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="max-w-5xl space-y-4 md:space-y-8 reveal active">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-600 text-white font-black tracking-[0.2em] text-[10px] md:text-xs mb-0 md:mb-4 shadow-[0_10px_30px_rgba(234,88,12,0.3)] uppercase">
                        <Sparkles size={16} className="fill-current animate-spin-slow" />
                        PREMIUM SMASH BURGERS
                    </div>
                    <h1 className="font-bebas text-[18vw] sm:text-[14vw] md:text-[10vw] text-gray-900 tracking-tighter leading-[0.9] md:leading-[0.85] drop-shadow-sm px-2">
                        JUICY TO THE <br /> <span className="text-orange-500 underline decoration-yellow-400 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">LAST BITE!</span>
                    </h1>
                    <div className="pt-2 md:pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        <p className="font-cursive text-gray-600 text-2xl md:text-5xl -rotate-2">Karachi's finest smash burgers.</p>
                        <button 
                          onClick={onOrderClick} 
                          className="group relative bg-orange-600 text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl font-bebas text-2xl md:text-4xl tracking-widest shadow-2xl shadow-orange-600/30 hover:bg-orange-500 transition-all active:scale-95 overflow-hidden border border-white/20"
                        >
                          <span className="relative z-10 uppercase font-bebas">ORDER NOW</span>
                          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
                <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
            </div>
        </header>
    );
};

const OurStory: React.FC = () => {
    return (
        <section id="about" className="py-12 md:py-16 bg-white relative overflow-hidden border-b border-neutral-100">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="text-center mb-16 reveal active">
                    <span className="font-cursive text-4xl text-orange-600 block mb-4">Alhamdulillah.</span>
                    <h2 className="font-bebas text-6xl md:text-8xl text-gray-900 leading-none uppercase">
                        OUR <span className="text-orange-500 underline decoration-yellow-400 decoration-4 underline-offset-4">STORY</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-12 gap-12 items-start reveal active">
                    <div className="md:col-span-7 space-y-6 text-gray-700 font-inter text-lg leading-relaxed">
                        <p className="font-bold text-gray-900 text-2xl leading-snug">
                            Mr. Beef Burgrz was built from a lifelong love for cooking. 
                        </p>
                        <p>
                            The owner grew up cooking food at home and learning flavors the traditional way. After working in different jobs over the years, that passion finally turned into a profession, taking the role of head chef to serve food with purpose.
                        </p>
                        <div className="bg-neutral-50 p-8 rounded-3xl border-l-8 border-orange-500 shadow-xl shadow-neutral-100">
                            <p className="italic text-gray-900 font-medium mb-4">
                                "We officially started on 29th August 2025 with one simple mission: to serve the same quality of food that we use in our own home."
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-1 bg-orange-500"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Established 2025</span>
                            </div>
                        </div>
                        <p>
                            Quality comes first for us. From ingredients to preparation, everything is kept premium and handled with care. In a world where many things are served in the name of beef, we stay true to our name.
                        </p>
                    </div>
                    
                    <div className="md:col-span-5 space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-lg group hover:border-orange-200 transition-colors">
                            <h4 className="font-bebas text-3xl text-orange-600 mb-4 flex items-center gap-3">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white"><ChefHat size={18} /></div>
                                REAL BEEF FLAVOR
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our smash burgers are made with 100% pure cow beef. No mixing. No shortcuts. This is how we stand for real beef flavor.
                            </p>
                        </div>
                        
                        <div className="bg-orange-600 p-8 rounded-3xl border border-orange-700 shadow-lg text-white group hover:bg-orange-700 transition-colors">
                            <h4 className="font-bebas text-3xl text-yellow-400 mb-4 flex items-center gap-3">
                                <Sparkles size={24} className="fill-yellow-400" />
                                THE DIFFERENCE
                            </h4>
                            <p className="text-sm text-orange-50 leading-relaxed">
                                Many people avoid beef burgers because of an unpleasant smell. We invite you to try our smash burgers once and feel the difference. The taste speaks for itself.
                            </p>
                        </div>
                        
                        <div className="px-4 py-2 flex items-center gap-4">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                Trusted by Beef Lovers
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-20 pt-10 border-t border-neutral-100 text-center reveal active">
                    <p className="text-gray-500 font-inter text-sm max-w-2xl mx-auto leading-loose italic bg-white inline-block px-10 relative">
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-neutral-200 font-serif">"</span>
                        With the support and trust of our customers, Mr. Beef Burgrz is proudly becoming one of the top choices for real beef burgers.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ReviewSection: React.FC = () => {
    return (
        <section id="reviews" className="py-24 bg-neutral-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl text-center reveal active">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-bold text-xs mb-8 border border-orange-100 uppercase tracking-widest">
                    <Star size={14} className="fill-orange-600" />
                    Trusted by many
                </div>
                <h2 className="font-bebas text-6xl md:text-8xl text-gray-900 leading-none uppercase mb-6">
                    4.9 RATING OF <br /><span className="text-orange-500">143+ CUSTOMERS</span>
                </h2>
                <div className="flex justify-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={40} className="text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-500 font-inter text-xl mb-12 max-w-xl mx-auto">
                    We take pride in our quality and taste. Check what our legendary customers have to say about us on Google.
                </p>
                <a 
                    href={GOOGLE_REVIEWS_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 bg-white border-2 border-orange-600 text-orange-600 px-12 py-5 rounded-2xl font-bebas text-2xl tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-xl shadow-orange-100 hover:shadow-orange-200 uppercase"
                >
                    Review it on Google <ExternalLink size={20} />
                </a>
            </div>
        </section>
    );
};

const LiveMap = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  return (
    <section id="location" className="py-24 bg-white relative border-t border-neutral-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-12 text-center reveal active">
          <h2 className="font-bebas text-6xl md:text-8xl text-gray-900 leading-none mb-4 uppercase">
            VISIT <span className="text-orange-500">US</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <MapPin size={16} className="text-orange-600" /> Malir, Karachi, Pakistan
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border-8 border-neutral-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] reveal active h-[850px] lg:h-[700px] bg-white relative group">
          {/* Business Profile Sidebar - Styled as Google Search Result */}
          <div className="w-full lg:w-[420px] h-full overflow-y-auto no-scrollbar border-r border-neutral-100 flex flex-col bg-white shrink-0 z-20">
            {/* Search Bar Header */}
            <div className="p-4 bg-white sticky top-0 z-30 flex items-center gap-3 border-b border-neutral-100">
               <div className="flex-1 bg-white border border-neutral-200 rounded-full px-4 py-2 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                     <MapPin size={16} className="text-gray-400" />
                     <span className="text-sm font-medium text-gray-800">Mr. Beef Burgrz</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Search size={16} />
                    <div className="w-px h-3 bg-gray-200"></div>
                    <X size={16} />
                  </div>
               </div>
            </div>

            {/* Business Images */}
            <div className="grid grid-cols-2 gap-0.5 h-48 sm:h-56 shrink-0 bg-neutral-200 overflow-hidden">
               <img 
                 src="https://raw.githubusercontent.com/faaaroooq22/menu-mrbeefburgrz/main/Logo.png" 
                 alt="Storefront" 
                 className="w-full h-full object-contain bg-neutral-900 p-8" 
               />
               <img 
                 src="https://raw.githubusercontent.com/faaaroooq22/menu-mrbeefburgrz/refs/heads/main/cow2.png" 
                 alt="Kitchen" 
                 className="w-full h-full object-cover bg-orange-600 p-4" 
               />
            </div>
            
            {/* Core Info */}
            <div className="p-6">
               <div className="mb-6">
                 <h3 className="text-3xl font-inter font-medium text-gray-900 tracking-tight leading-none mb-2">Mr. Beef Burgrz</h3>
                 <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-bold text-gray-800">4.9</span>
                    <div className="flex text-yellow-400">
                       {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-sm text-gray-500">(143) · Rs 1-1,000</span>
                 </div>
                 <p className="text-sm text-gray-500 mt-1">Fast food restaurant</p>
               </div>
               
               <button className="w-full py-2.5 px-4 border border-neutral-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 mb-6 shadow-sm active:scale-[0.98]">
                 <UtensilsCrossed size={16} className="text-gray-400" />
                 Manage your Business Profile
               </button>
               
               <div className="flex items-center gap-6 text-xs text-gray-500 py-3 border-b border-neutral-100 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><RefreshCw size={12} className="text-blue-600" /></div>
                    <span className="font-medium">9,725 views</span>
                  </div>
               </div>
               
               {/* Google Tabs */}
               <div className="flex items-center gap-0 border-b border-neutral-100 mb-6 overflow-x-auto no-scrollbar">
                  {['Overview', 'Menu', 'Reviews', 'About'].map((tab) => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 text-sm font-bold whitespace-nowrap transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                      {tab}
                      {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>}
                    </button>
                  ))}
               </div>
               
               {/* Tab Content Mockup */}
               {activeTab === 'Overview' && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm relative overflow-hidden group/ad">
                       <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"><X size={16} /></button>
                       <p className="text-sm font-bold text-gray-900 mb-2">Show up more often on Google</p>
                       <div className="flex gap-4 items-start">
                          <div className="flex-1">
                            <p className="text-[12px] text-gray-600 leading-relaxed mb-4">Get $380 in Google Ads credit. Offer for new advertisers only. Terms and conditions apply.</p>
                            <button className="px-5 py-2 bg-white text-blue-600 border border-neutral-200 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors shadow-sm">Start now</button>
                          </div>
                          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                             <Sparkles className="text-blue-500 w-8 h-8" />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        {[
                          { icon: Navigation, label: 'Directions', color: 'bg-blue-600 text-white' },
                          { icon: Bookmark, label: 'Save', color: 'bg-white text-blue-600 border border-neutral-200' },
                          { icon: MapPin, label: 'Nearby', color: 'bg-white text-blue-600 border border-neutral-200' },
                          { icon: Share2, label: 'Share', color: 'bg-white text-blue-600 border border-neutral-200' },
                        ].map((btn, i) => (
                          <div key={i} className="flex flex-col items-center gap-1.5">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center ${btn.color} cursor-pointer hover:shadow-md transition-all active:scale-95`}>
                              <btn.icon size={18} />
                            </div>
                            <span className="text-[11px] font-medium text-gray-600">{btn.label}</span>
                          </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-neutral-100 space-y-5">
                       <div className="flex items-start gap-4 group/item cursor-pointer">
                          <MapPin className="text-gray-400 w-5 h-5 shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-800 leading-tight">Malir, Karachi, Pakistan</p>
                            <span className="text-xs text-blue-600 font-medium group-hover/item:underline">Copy address</span>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <Clock className="text-gray-400 w-5 h-5 shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-800 font-medium">Open · Closes 3:00 AM</p>
                            <span className="text-xs text-gray-500">More hours</span>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <Phone className="text-gray-400 w-5 h-5 shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-600 font-medium">+92 324 0460398</p>
                       </div>
                    </div>
                 </div>
               )}
            </div>
          </div>
          
          {/* Main Map Canvas Area */}
          <div className="flex-1 relative bg-neutral-100 z-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1818290264287!2d67.18142277537198!3d24.902723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3392ef5b27601%3A0x9d51235b4df2a83f!2sMr.%20Beef%20Burgrz!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.1] contrast-[1.05]"
            >
            </iframe>
            
            {/* Top Google Floating Filters Mockup (Desktop only) */}
            <div className="absolute top-4 left-4 right-4 hidden lg:flex items-center gap-3 overflow-x-auto no-scrollbar pointer-events-none">
                {[
                  { label: 'Nearby restaurants', icon: UtensilsCrossed },
                  { label: 'Hotels', icon: MapPin },
                  { label: 'Things to do', icon: Star },
                  { label: 'Bars', icon: CupSoda },
                  { label: 'Coffee', icon: Clock },
                  { label: 'Takeout', icon: ShoppingBag },
                  { label: 'Groceries', icon: Package }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-neutral-200 px-4 py-2.5 rounded-full shadow-md shrink-0 pointer-events-auto cursor-pointer hover:bg-neutral-50 transition-colors">
                    <f.icon size={16} className="text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">{f.label}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'deals' | 'make-burger' | 'menu'>('home');
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [currentOptionItem, setCurrentOptionItem] = useState<MenuItem | null>(null);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [modalSelectionMode, setModalSelectionMode] = useState<'single' | 'multiple'>('multiple');

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: 'home' | 'deals' | 'menu', hash?: string) => {
    setCurrentView(view);
    if (view === 'home' && hash) {
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const offset = 100;
                const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: "smooth" });
            }
        }, 150);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddToCartClick = (item: MenuItem) => {
    if (item.id === 'a5') {
        setCurrentOptionItem(item);
        setCurrentOptions(['Garlic', 'Chipotle', 'Toumiya', 'Honey Mustard', 'Hot Jalapeño', 'Barbecue', 'Chef\'s Signature']);
        setModalSelectionMode('multiple');
        setOptionModalOpen(true);
        return;
    }
    if (item.id === 'd1') {
        setCurrentOptionItem(item);
        setCurrentOptions(['7up', 'Pepsi']);
        setModalSelectionMode('multiple');
        setOptionModalOpen(true);
        return;
    }
    if (item.id === 'b2' || item.id === 'b3') {
        setCurrentOptionItem(item);
        setCurrentOptions(['Grilled Onion', 'Raw Onion']);
        setModalSelectionMode('single');
        setOptionModalOpen(true);
        return;
    }
    addToCart(item);
  };

  const handleOptionConfirm = (selections: { option: string; quantity: number }[]) => {
    if (!currentOptionItem) return;
    selections.forEach(sel => {
        const variantItem = { ...currentOptionItem, id: `${currentOptionItem.id}-${sel.option}`, name: `${currentOptionItem.name} (${sel.option})` };
        addToCart(variantItem, sel.quantity);
    });
  };

  const addToCart = (item: MenuItem, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
      return [...prev, { ...item, quantity: quantity }];
    });
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Define which views should show the standard Navbar
  const showNavbar = currentView === 'home';

  return (
    <div className="min-h-screen text-gray-900 flex flex-col relative bg-white">
      {showNavbar && (
          <Navbar 
            cartCount={totalItems} 
            onOpenCart={() => setIsCartOpen(true)}
            onNavigate={(v, h) => handleNavigate(v as any, h)}
            currentView={currentView === 'deals' ? 'deals' : 'home'}
          />
      )}
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={(id) => setCartItems(prev => prev.filter(i => i.id !== id))}
        onUpdateQuantity={(id, delta) => setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))}
      />

      <OptionModal 
        isOpen={optionModalOpen}
        onClose={() => setOptionModalOpen(false)}
        item={currentOptionItem}
        options={currentOptions}
        selectionType={modalSelectionMode}
        onConfirm={handleOptionConfirm}
      />

      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero onOrderClick={() => handleNavigate('menu')} />
            
            <OurStory />

            <section id="purity-promise" className="py-24 bg-orange-600 relative overflow-hidden border-y border-orange-700">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-20 blur-[100px] rounded-full"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10 py-16">
                    <h2 className="font-bebas text-6xl sm:text-8xl text-center text-white mb-20 tracking-tighter reveal uppercase text-shadow-lg">
                        THE <span className="text-yellow-400 underline decoration-white/20 underline-offset-8 font-bebas">PROMISE</span> OF PURITY
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group reveal">
                            <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full"></div>
                            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl transition-transform duration-500">
                                <img src="https://raw.githubusercontent.com/faaaroooq22/menu-mrbeefburgrz/refs/heads/main/cow2.png" alt="Pure Beef" className="w-full h-auto drop-shadow-2xl" />
                                <div className="absolute bottom-10 left-0 right-0 text-center">
                                  <span className="font-bebas text-4xl text-white tracking-widest drop-shadow-md">100% PURE BEEF</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-10 reveal">
                            <div className="bg-white p-12 rounded-3xl shadow-2xl space-y-6">
                                <p className="font-cursive text-3xl text-orange-600 leading-tight">
                                    "Bringing authentic, premium smash burgers to the people of Karachi."
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium font-inter">
                                    We believe great food starts with passion and ends with satisfaction. Our team focuses on maintaining premium standards, hygiene, and freshness in every single order.
                                </p>
                                <div className="pt-8 border-t border-neutral-100 flex gap-10 items-center">
                                  <div className="text-center">
                                    <span className="block text-4xl font-bebas text-orange-600">80/20</span>
                                    <span className="text-xs text-gray-400 font-bold tracking-widest uppercase font-inter">Ratio</span>
                                  </div>
                                  <div className="text-center">
                                    <span className="block text-4xl font-bebas text-yellow-600 font-bebas">FRESH</span>
                                    <span className="text-xs text-gray-400 font-bold tracking-widest uppercase font-inter">Grind</span>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReviewSection />
            <LiveMap />
          </>
        ) : currentView === 'menu' ? (
          <Menu 
            onAddToCart={handleAddToCartClick} 
            onBack={() => handleNavigate('home')} 
            cartCount={totalItems}
            onOpenCart={() => setIsCartOpen(true)}
          />
        ) : currentView === 'deals' ? (
          <Deals onBack={() => handleNavigate('home')} />
        ) : (
            <MakeYourBurger onBack={() => handleNavigate('home')} onAddToCart={addToCart} />
        )}
      </main>

      {currentView === 'home' && (
      <footer id="contact" className="relative bg-orange-600 text-white pt-24 pb-12 mt-auto border-t border-orange-700">
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 mb-20">
                 <div className="space-y-8 text-center lg:text-left">
                     <h3 className="font-bebas text-6xl text-white tracking-tighter leading-none uppercase drop-shadow-md">
                        MR. BEEF BURGRZ
                     </h3>
                     <p className="text-orange-50 text-xl max-w-md mx-auto lg:mx-0 font-medium font-inter">Juicy smash burgers, crispy chicken, and loaded fries. <br/> <span className="text-yellow-300 font-bold">#KarachiSpecial</span></p>
                     
                     <div className="flex gap-4 justify-center lg:justify-start">
                        <a href="https://www.instagram.com/mr.beefburgrz?igsh=bW5xZm43bmR6Ymsw" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-2 border border-white/30 shadow-sm backdrop-blur-sm">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/share/1A5ejXApa7/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-2 border border-white/30 shadow-sm backdrop-blur-sm">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="https://youtube.com/@mrbeefburgrz?si=vQ-h8ygT5oiEFdEo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-2 border border-white/30 shadow-sm backdrop-blur-sm">
                            <Youtube className="w-6 h-6" />
                        </a>
                        <a href="https://www.tiktok.com/@mrbeefburgrz?_r=1&_t=ZS-91N9HD5GTdx" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-2 border border-white/30 shadow-sm backdrop-blur-sm">
                            <TikTokIcon className="w-6 h-6" />
                        </a>
                        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-2 border border-white/30 shadow-sm backdrop-blur-sm">
                            <Linkedin className="w-6 h-6" />
                        </a>
                     </div>
                 </div>
                 
                 <div className="grid sm:grid-cols-2 gap-12 text-center sm:text-left">
                     <div className="space-y-6">
                         <h4 className="font-bebas text-2xl text-yellow-300 tracking-widest border-b border-white/20 w-fit pb-1 mx-auto sm:mx-0 uppercase drop-shadow-sm">GET IN TOUCH</h4>
                         <div className="space-y-4">
                            <a href="tel:+923240460398" className="flex items-center justify-center sm:justify-start gap-4 text-orange-50 hover:text-white transition-colors font-inter group">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white border border-white/30 shadow-sm group-hover:bg-white group-hover:text-orange-600 transition-all"><Phone className="w-5 h-5" /></div>
                              +92 324 0460398
                            </a>
                            <a href="https://wa.me/message/GCCQJTH6ZQF6O1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-4 text-orange-50 hover:text-white transition-colors font-inter group">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white border border-white/30 shadow-sm group-hover:bg-white group-hover:text-orange-600 transition-all"><MessageCircle className="w-5 h-5" /></div>
                              WhatsApp Us
                            </a>
                            <a href="https://maps.app.goo.gl/Y4brSsZDP2oCEQKTA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-4 text-orange-50 hover:text-white transition-colors font-inter group">
                              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white border border-white/30 shadow-sm group-hover:bg-white group-hover:text-orange-600 transition-all"><MapPin className="w-5 h-5" /></div>
                              Find Our Location
                            </a>
                         </div>
                     </div>
                     <div className="space-y-6 flex flex-col items-center sm:items-start">
                         <h4 className="font-bebas text-2xl text-yellow-300 tracking-widest border-b border-white/20 w-fit pb-1 uppercase drop-shadow-sm">LEGENDARY LINKS</h4>
                         <div className="space-y-4 flex flex-col items-center sm:items-start w-full">
                            <button onClick={() => handleNavigate('menu')} className="block text-orange-50 hover:text-white transition-colors uppercase font-bold tracking-widest text-2xl font-bebas text-center sm:text-left w-full sm:w-auto">Browse Menu</button>
                            <button onClick={() => handleNavigate('home', '#about')} className="block text-orange-50 hover:text-white transition-colors uppercase font-bold tracking-widest text-2xl font-bebas text-center sm:text-left w-full sm:w-auto">Our Story</button>
                            <button onClick={() => handleNavigate('home', '#purity-promise')} className="block text-orange-50 hover:text-white transition-colors uppercase font-bold tracking-widest text-2xl font-bebas text-center sm:text-left w-full sm:w-auto">Our Promise</button>
                            <a href={GOOGLE_REVIEWS_LINK} target="_blank" rel="noopener noreferrer" className="block text-orange-50 hover:text-white transition-colors uppercase font-bold tracking-widest text-2xl font-bebas text-center sm:text-left w-full sm:w-auto">Reviews</a>
                            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="block text-orange-50 hover:text-white transition-colors uppercase font-bold tracking-widest text-2xl font-bebas text-center sm:text-left w-full sm:w-auto">LinkedIn</a>
                         </div>
                     </div>
                 </div>
             </div>
             
             <div className="pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-orange-100 text-sm gap-4 text-center">
                 <p className="font-bold tracking-wide font-inter uppercase">&copy; 2025 MR. BEEF BURGRZ. CRAFTED FOR REAL BEEF LOVERS.</p>
             </div>
         </div>
      </footer>
      )}

      {/* FIXED CHECKOUT BAR */}
      {totalItems > 0 && currentView !== 'make-burger' && (
        <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div 
                onClick={() => setIsCartOpen(true)}
                className="group relative bg-white border border-orange-600/30 rounded-full p-2 pr-3 md:pr-4 flex items-center justify-between cursor-pointer shadow-[0_15px_50px_-10px_rgba(234,88,12,0.4)] hover:scale-[1.03] transition-all duration-300 w-full max-w-[360px] pointer-events-auto overflow-hidden"
            >
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-bebas text-2xl md:text-3xl shadow-lg shadow-orange-600/20">
                        {totalItems}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-[0.2em] font-black leading-none mb-1 font-inter">Subtotal</span>
                        <div className="text-xl md:text-2xl font-bebas text-gray-900 tracking-wide leading-none">{totalAmount}/-</div>
                    </div>
                </div>
                <button className="bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bebas text-lg md:text-xl tracking-widest flex items-center gap-2 group-hover:bg-orange-800 transition-colors shadow-sm whitespace-nowrap uppercase">
                    CHECKOUT <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      )}

      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className={`fixed right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-xl hover:bg-orange-400 transition-all duration-300 z-40 transform hover:scale-110 active:scale-95 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'} ${totalItems > 0 ? 'bottom-32' : 'bottom-8'}`}
      >
        <ChevronUp className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;
