
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Plus, Minus, ChefHat, ShoppingBag, X } from 'lucide-react';
import { MenuItem } from '../types';

interface MakeYourBurgerProps {
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

interface BeefPatty {
  id: string;
  weight: number; // in grams
  quantity: number;
}

interface ChickenPatty {
  type: 'Crispy' | 'Grilled';
  size: 'Small' | 'Regular';
  quantity: number;
}

interface BurgerState {
  bun: 'Brioche' | 'Potato';
  mayo: boolean;
  beefPatties: BeefPatty[];
  chickenPatties: ChickenPatty[];
  cheeseSlices: number;
  veggies: {
    iceberg: boolean;
    onion: 'None' | 'Raw' | 'Grilled';
    tomato: boolean;
    pickles: boolean;
    jalapenos: boolean;
  };
  addons: {
    mushrooms: 'None' | 'Raw' | 'Grilled';
    beefPepperoni: number; // number of sets (5pcs per set)
    chickenPepperoni: number; // number of sets
  };
  nuggets: boolean;
  sauces: Record<string, number>;
  instructions: string;
}

const INITIAL_STATE: BurgerState = {
  bun: 'Brioche',
  mayo: false,
  beefPatties: [],
  chickenPatties: [],
  cheeseSlices: 0,
  veggies: {
    iceberg: false,
    onion: 'None',
    tomato: false,
    pickles: false,
    jalapenos: false,
  },
  addons: {
    mushrooms: 'None',
    beefPepperoni: 0,
    chickenPepperoni: 0,
  },
  nuggets: false,
  sauces: {
    'Garlic': 0,
    'Toumiyah': 0,
    'Honey Mustard': 0,
    'BBQ': 0,
    'Hot Jalapeño': 0,
    'Chef Signature': 0,
  },
  instructions: '',
};

export const MakeYourBurger: React.FC<MakeYourBurgerProps> = ({ onBack, onAddToCart }) => {
  const [state, setState] = useState<BurgerState>(INITIAL_STATE);
  const [customBeefWeight, setCustomBeefWeight] = useState<number>(100);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Prices
  const PRICES = {
    bun: 70,
    mayo: 0,
    beefPerGram: 4,
    chickenSmall: 180,
    chickenRegular: 320,
    cheese: 60,
    iceberg: 40,
    onion: 30,
    tomato: 30,
    pickles: 50,
    jalapenos: 50,
    mushrooms: 100,
    pepperoniSet: 100, // for 5 pieces
    nuggets: 250, // for 3 pieces
    sauce: 70,
  };

  // Logic
  const totalPrice = () => {
    let total = PRICES.bun; // Bun is mandatory

    // Beef
    state.beefPatties.forEach(p => {
      total += (p.weight * PRICES.beefPerGram) * p.quantity;
    });

    // Chicken
    state.chickenPatties.forEach(p => {
      const price = p.size === 'Small' ? PRICES.chickenSmall : PRICES.chickenRegular;
      total += price * p.quantity;
    });

    // Cheese
    total += state.cheeseSlices * PRICES.cheese;

    // Veggies
    if (state.veggies.iceberg) total += PRICES.iceberg;
    if (state.veggies.onion !== 'None') total += PRICES.onion;
    if (state.veggies.tomato) total += PRICES.tomato;
    if (state.veggies.pickles) total += PRICES.pickles;
    if (state.veggies.jalapenos) total += PRICES.jalapenos;

    // Addons
    if (state.addons.mushrooms !== 'None') total += PRICES.mushrooms;
    total += state.addons.beefPepperoni * PRICES.pepperoniSet;
    total += state.addons.chickenPepperoni * PRICES.pepperoniSet;

    // Nuggets
    if (state.nuggets) total += PRICES.nuggets;

    // Sauces
    Object.values(state.sauces).forEach((qty) => {
      total += (qty as number) * PRICES.sauce;
    });

    return total;
  };

  const hasPatty = state.beefPatties.length > 0 || state.chickenPatties.length > 0;

  const handleAddBeef = (weight: number) => {
    setState(prev => {
      const existing = prev.beefPatties.find(p => p.weight === weight);
      if (existing) {
        return {
          ...prev,
          beefPatties: prev.beefPatties.map(p => p.weight === weight ? { ...p, quantity: p.quantity + 1 } : p)
        };
      }
      return {
        ...prev,
        beefPatties: [...prev.beefPatties, { id: Math.random().toString(), weight, quantity: 1 }]
      };
    });
  };

  const handleRemoveBeef = (weight: number) => {
    setState(prev => {
        const existing = prev.beefPatties.find(p => p.weight === weight);
        // Added explicit cast to number for quantity to fix comparison errors
        if (existing && (existing.quantity as number) > 1) {
             return {
                ...prev,
                beefPatties: prev.beefPatties.map(p => p.weight === weight ? { ...p, quantity: p.quantity - 1 } : p)
            };
        }
        return {
            ...prev,
            beefPatties: prev.beefPatties.filter(p => p.weight !== weight)
        };
    });
  };

  const handleUpdateChicken = (type: 'Crispy' | 'Grilled', size: 'Small' | 'Regular', delta: number) => {
    setState(prev => {
        const existing = prev.chickenPatties.find(p => p.type === type && p.size === size);
        if (existing) {
             // Added explicit cast to number for quantity to fix comparison errors
             const newQty = (existing.quantity as number) + delta;
             if (newQty <= 0) {
                 return { ...prev, chickenPatties: prev.chickenPatties.filter(p => !(p.type === type && p.size === size)) };
             }
             return {
                 ...prev,
                 chickenPatties: prev.chickenPatties.map(p => (p.type === type && p.size === size) ? { ...p, quantity: newQty } : p)
             };
        }
        if (delta > 0) {
            return {
                ...prev,
                chickenPatties: [...prev.chickenPatties, { type, size, quantity: 1 }]
            };
        }
        return prev;
    });
  };

  const getChickenQty = (type: 'Crispy' | 'Grilled', size: 'Small' | 'Regular'): number => {
      // Added explicit cast to number for quantity to fix return type expectations
      return (state.chickenPatties.find(p => p.type === type && p.size === size)?.quantity as number) || 0;
  };

  const generateDescription = () => {
    let lines: string[] = [];
    lines.push(`• Bun: ${state.bun} (Mayo: ${state.mayo ? 'Yes' : 'No'})`);
    
    // Patties
    const beefStr = state.beefPatties.map(p => `${p.quantity}x Beef ${p.weight}g`).join(', ');
    const chickenStr = state.chickenPatties.map(p => `${p.quantity}x ${p.type} (${p.size})`).join(', ');
    if (beefStr) lines.push(`• Patties: ${beefStr}`);
    if (chickenStr) lines.push(`• Patties: ${chickenStr}`);

    // Cheese
    if (state.cheeseSlices > 0) lines.push(`• Cheese: ${state.cheeseSlices} slices`);

    // Veggies
    let vegList = [];
    if (state.veggies.iceberg) vegList.push('Iceberg');
    if (state.veggies.onion !== 'None') vegList.push(`Onion (${state.veggies.onion})`);
    if (state.veggies.tomato) vegList.push('Tomato');
    if (state.veggies.pickles) vegList.push('Pickles');
    if (state.veggies.jalapenos) vegList.push('Jalapeños');
    if (vegList.length > 0) lines.push(`• Veggies: ${vegList.join(', ')}`);

    // Addons
    let addonList = [];
    if (state.addons.mushrooms !== 'None') addonList.push(`Mushrooms (${state.addons.mushrooms})`);
    if (state.addons.beefPepperoni > 0) addonList.push(`${state.addons.beefPepperoni * 5}x Beef Pepperoni`);
    if (state.addons.chickenPepperoni > 0) addonList.push(`${state.addons.chickenPepperoni * 5}x Chicken Pepperoni`);
    if (state.nuggets) addonList.push('3x Nuggets on Top');
    if (addonList.length > 0) lines.push(`• Add-ons: ${addonList.join(', ')}`);

    // Sauces
    // Added explicit cast to number for 'q' to fix comparison error in filter
    const sauceList = Object.entries(state.sauces).filter(([_, q]) => (q as number) > 0).map(([n, q]) => `${q}x ${n}`);
    if (sauceList.length > 0) lines.push(`• Sauces: ${sauceList.join(', ')}`);

    if (state.instructions) lines.push(`• Note: ${state.instructions}`);

    return lines.join('\n');
  };

  const handleAddToCart = () => {
      const customItem: MenuItem = {
          id: `custom-${Date.now()}`,
          name: 'Custom Creation',
          description: 'A burger built just for you.',
          price: totalPrice(),
          category: 'Custom',
          customDetails: generateDescription()
      };
      onAddToCart(customItem);
      setSuccessModalOpen(true);
  };

  const handleReset = () => {
      setState(INITIAL_STATE);
      setSuccessModalOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111111] pb-32 relative">
       {/* Background Elements */}
       <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]"></div>
       </div>

       {/* Header */}
       <div className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 shadow-lg px-4 py-3 flex items-center justify-between">
           <button 
             onClick={onBack}
             className="p-2 bg-gray-900 border border-gray-700 rounded-full hover:bg-gray-800 hover:border-yellow-500 transition-all group"
           >
               <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-yellow-500 transition-colors" />
           </button>
           
           <div className="flex flex-col items-center">
               <span className="text-[10px] text-gray-400 tracking-widest uppercase">Make Your</span>
               <span className="font-bebas text-xl text-white leading-none">BURGER</span>
           </div>

           <div className="bg-gray-900 px-3 py-1.5 rounded-lg border border-red-900/50 min-w-[80px] text-center">
               <span className="block text-[8px] text-gray-400 uppercase font-bold">Total</span>
               <span className="font-bebas text-lg text-yellow-500">{totalPrice()}/-</span>
           </div>
       </div>

       <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 relative z-10">
           
           {/* Step 1: Bun */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500">
               <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                   <h3 className="font-bebas text-2xl text-white">1. Choose Bun <span className="text-red-500 text-sm font-sans ml-2">(Mandatory)</span></h3>
                   <span className="text-sm text-yellow-500 font-bold">70/-</span>
               </div>
               <div className="grid grid-cols-2 gap-4">
                   {['Brioche', 'Potato'].map((bun) => (
                       <button
                           key={bun}
                           onClick={() => setState(p => ({ ...p, bun: bun as any }))}
                           className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center gap-2 ${
                               state.bun === bun 
                               ? 'bg-yellow-500/10 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]' 
                               : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                           }`}
                       >
                           <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${state.bun === bun ? 'border-yellow-500' : 'border-gray-500'}`}>
                               {state.bun === bun && <div className="w-2 h-2 rounded-full bg-yellow-500"></div>}
                           </div>
                           <span className={`font-bold ${state.bun === bun ? 'text-yellow-500' : 'text-gray-300'}`}>{bun} Bun</span>
                       </button>
                   ))}
               </div>
           </section>

           {/* Step 2: Mayo */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-75">
               <div className="flex justify-between items-center mb-4">
                   <h3 className="font-bebas text-2xl text-white">2. Mayo on Base</h3>
                   <span className="text-xs px-2 py-0.5 bg-green-900/30 text-green-400 rounded border border-green-800">FREE</span>
               </div>
               <div className="flex items-center justify-between bg-gray-800 p-3 rounded-xl border border-gray-700">
                   <span className="text-gray-300 ml-2">Add Mayonnaise?</span>
                   <button 
                       onClick={() => setState(p => ({ ...p, mayo: !p.mayo }))}
                       className={`w-12 h-6 rounded-full transition-colors relative ${state.mayo ? 'bg-yellow-500' : 'bg-gray-600'}`}
                   >
                       <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${state.mayo ? 'left-7' : 'left-1'}`}></div>
                   </button>
               </div>
           </section>

           {/* Step 3: Patties */}
           <section className={`bg-gray-900/50 border p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-100 ${!hasPatty ? 'border-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.1)]' : 'border-gray-800'}`}>
               <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                   <h3 className="font-bebas text-2xl text-white">3. Select Patty <span className="text-red-500 text-sm font-sans ml-2">(Mandatory)</span></h3>
                   {!hasPatty && <span className="text-xs text-red-400 animate-pulse">Select at least one</span>}
               </div>
               
               {/* Beef Section */}
               <div className="mb-6">
                   <h4 className="text-yellow-500 font-bold mb-3 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Beef Patty (4/- per gram)
                   </h4>
                   <div className="grid grid-cols-3 gap-2 mb-3">
                       {[70, 125, 150].map(weight => {
                           // Explicitly cast quantity to number to solve potential 'unknown' comparison issues
                           const qty = (state.beefPatties.find(p => p.weight === weight)?.quantity as number) || 0;
                           return (
                               <button 
                                   key={weight}
                                   onClick={() => handleAddBeef(weight)}
                                   className={`relative py-3 rounded-lg border flex flex-col items-center transition-all ${qty > 0 ? 'bg-red-900/20 border-red-500' : 'bg-gray-800 border-gray-700 hover:border-gray-600'}`}
                               >
                                   <span className="text-white font-bold">{weight}g</span>
                                   <span className="text-xs text-gray-400">{(weight as number) * 4}/-</span>
                                   {(qty as number) > 0 && (
                                       <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">
                                           {qty}
                                       </div>
                                   )}
                                   {(qty as number) > 0 && (
                                       <div 
                                         onClick={(e) => { e.stopPropagation(); handleRemoveBeef(weight); }}
                                         className="absolute -top-2 -left-2 bg-gray-700 text-white w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-600"
                                       >
                                           <Minus className="w-3 h-3" />
                                       </div>
                                   )}
                               </button>
                           );
                       })}
                   </div>
                   {/* Custom Beef */}
                   <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
                       <input 
                           type="number" 
                           min="100"
                           value={customBeefWeight}
                           onChange={(e) => setCustomBeefWeight(parseInt(e.target.value) || 0)}
                           className="bg-transparent w-20 text-center border-b border-gray-600 text-white focus:outline-none focus:border-yellow-500"
                       />
                       <span className="text-sm text-gray-400">grams (Custom)</span>
                       <button 
                           // Added explicit cast to number for customBeefWeight comparison
                           disabled={(customBeefWeight as number) <= 100}
                           onClick={() => handleAddBeef(customBeefWeight)}
                           className="ml-auto bg-red-600 px-3 py-1 rounded text-xs font-bold disabled:opacity-50 hover:bg-red-500 transition-colors"
                       >
                           ADD
                       </button>
                   </div>
                   {/* Using &gt; to safely render greater than symbol in JSX text */}
                   <p className="text-[10px] text-gray-500 mt-1">*Custom beef must be &gt; 100g</p>
               </div>

               {/* Chicken Section */}
               <div>
                   <h4 className="text-yellow-500 font-bold mb-3 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Chicken Patty
                   </h4>
                   <div className="space-y-3">
                       {['Crispy', 'Grilled'].map(type => (
                           <div key={type} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                               <span className="block text-gray-300 font-bold text-sm mb-2">{type} Chicken</span>
                               <div className="flex gap-2">
                                   {['Small', 'Regular'].map(size => {
                                       const qty = getChickenQty(type as any, size as any);
                                       const price = size === 'Small' ? 180 : 320;
                                       const weight = size === 'Small' ? '60g' : '110g';
                                       return (
                                           <div key={size} className="flex-1 bg-gray-900 rounded border border-gray-800 p-2 flex justify-between items-center">
                                               <div className="flex flex-col">
                                                   <span className="text-xs text-gray-300">{size} ({weight})</span>
                                                   <span className="text-xs text-yellow-500 font-bold">{price}/-</span>
                                               </div>
                                               <div className="flex items-center gap-2">
                                                   {/* Added explicit cast to number for qty comparison */}
                                                   {(qty as number) > 0 && (
                                                       <button onClick={() => handleUpdateChicken(type as any, size as any, -1)} className="p-0.5 bg-gray-700 rounded hover:bg-gray-600"><Minus className="w-3 h-3" /></button>
                                                   )}
                                                   {(qty as number) > 0 && <span className="text-sm font-bold w-3 text-center">{qty}</span>}
                                                   <button onClick={() => handleUpdateChicken(type as any, size as any, 1)} className="p-0.5 bg-gray-700 rounded hover:bg-gray-600"><Plus className="w-3 h-3" /></button>
                                               </div>
                                           </div>
                                       );
                                   })}
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           </section>

           {/* Step 4: Cheese */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-150">
               <div className="flex justify-between items-center mb-4">
                   <h3 className="font-bebas text-2xl text-white">4. Cheddar Cheese</h3>
                   <span className="text-sm text-yellow-500">60/- per slice</span>
               </div>
               <div className="flex justify-between items-center bg-gray-800 p-4 rounded-xl border border-gray-700">
                   <span className="text-gray-300">Quantity</span>
                   <div className="flex items-center gap-4 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-600">
                       <button onClick={() => setState(p => ({...p, cheeseSlices: Math.max(0, p.cheeseSlices - 1)}))} className="text-gray-400 hover:text-white"><Minus className="w-5 h-5"/></button>
                       <span className="text-white font-bold w-6 text-center">{state.cheeseSlices}</span>
                       <button onClick={() => setState(p => ({...p, cheeseSlices: p.cheeseSlices + 1}))} className="text-gray-400 hover:text-white"><Plus className="w-5 h-5"/></button>
                   </div>
               </div>
           </section>

           {/* Step 5: Veggies */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-200">
               <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                   <h3 className="font-bebas text-2xl text-white">5. Vegetables</h3>
               </div>
               <div className="space-y-2">
                   {/* Iceberg */}
                   <div onClick={() => setState(p => ({...p, veggies: {...p.veggies, iceberg: !p.veggies.iceberg}}))} className={`flex justify-between items-center p-3 rounded-lg border cursor-pointer ${state.veggies.iceberg ? 'bg-green-900/20 border-green-500' : 'bg-gray-800 border-gray-700'}`}>
                       <span className="text-gray-300">Iceberg Lettuce</span>
                       <div className="flex items-center gap-2">
                           <span className="text-xs text-gray-500">40/-</span>
                           {state.veggies.iceberg && <Check className="w-4 h-4 text-green-500" />}
                       </div>
                   </div>

                   {/* Tomatoes */}
                   <div onClick={() => setState(p => ({...p, veggies: {...p.veggies, tomato: !p.veggies.tomato}}))} className={`flex justify-between items-center p-3 rounded-lg border cursor-pointer ${state.veggies.tomato ? 'bg-red-900/20 border-red-500' : 'bg-gray-800 border-gray-700'}`}>
                       <span className="text-gray-300">Tomatoes</span>
                       <div className="flex items-center gap-2">
                           <span className="text-xs text-gray-500">30/-</span>
                           {state.veggies.tomato && <Check className="w-4 h-4 text-red-500" />}
                       </div>
                   </div>

                    {/* Pickles */}
                   <div onClick={() => setState(p => ({...p, veggies: {...p.veggies, pickles: !p.veggies.pickles}}))} className={`flex justify-between items-center p-3 rounded-lg border cursor-pointer ${state.veggies.pickles ? 'bg-green-900/20 border-green-500' : 'bg-gray-800 border-gray-700'}`}>
                       <span className="text-gray-300">Pickles</span>
                       <div className="flex items-center gap-2">
                           <span className="text-xs text-gray-500">50/-</span>
                           {state.veggies.pickles && <Check className="w-4 h-4 text-green-500" />}
                       </div>
                   </div>

                   {/* Jalapenos */}
                   <div onClick={() => setState(p => ({...p, veggies: {...p.veggies, jalapenos: !p.veggies.jalapenos}}))} className={`flex justify-between items-center p-3 rounded-lg border cursor-pointer ${state.veggies.jalapenos ? 'bg-red-900/20 border-red-500' : 'bg-gray-800 border-gray-700'}`}>
                       <span className="text-gray-300">Jalapeños</span>
                       <div className="flex items-center gap-2">
                           <span className="text-xs text-gray-500">50/-</span>
                           {state.veggies.jalapenos && <Check className="w-4 h-4 text-red-500" />}
                       </div>
                   </div>

                   {/* Onions */}
                   <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                       <div className="flex justify-between mb-2">
                           <span className="text-gray-300">Onions (30/-)</span>
                       </div>
                       <div className="flex gap-2">
                           {['None', 'Raw', 'Grilled'].map(opt => (
                               <button 
                                   key={opt}
                                   onClick={() => setState(p => ({...p, veggies: {...p.veggies, onion: opt as any}}))}
                                   className={`flex-1 py-1.5 rounded text-xs font-bold transition-colors ${state.veggies.onion === opt ? 'bg-yellow-500 text-black' : 'bg-gray-900 text-gray-400'}`}
                               >
                                   {opt}
                               </button>
                           ))}
                       </div>
                   </div>
               </div>
           </section>

           {/* Step 6: Add-ons */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-300">
               <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                   <h3 className="font-bebas text-2xl text-white">6. Other Add-ons</h3>
               </div>
               <div className="space-y-4">
                   {/* Mushrooms */}
                   <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                       <div className="flex justify-between mb-2">
                           <span className="text-gray-300">Mushrooms (100/-)</span>
                       </div>
                       <div className="flex gap-2">
                           {['None', 'Raw', 'Grilled'].map(opt => (
                               <button 
                                   key={opt}
                                   onClick={() => setState(p => ({...p, addons: {...p.addons, mushrooms: opt as any}}))}
                                   className={`flex-1 py-1.5 rounded text-xs font-bold transition-colors ${state.addons.mushrooms === opt ? 'bg-yellow-500 text-black' : 'bg-gray-900 text-gray-400'}`}
                               >
                                   {opt}
                               </button>
                           ))}
                       </div>
                   </div>

                   {/* Pepperoni */}
                   <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                       <div className="flex justify-between mb-3 border-b border-gray-600 pb-2">
                           <span className="text-gray-300">Pepperoni (5 pcs / 100/-)</span>
                       </div>
                       <div className="space-y-3">
                           {/* Beef Pepperoni */}
                           <div className="flex justify-between items-center">
                               <span className="text-sm text-gray-400">Beef Pepperoni</span>
                               <div className="flex items-center gap-3 bg-gray-900 px-2 py-1 rounded border border-gray-600">
                                    <button onClick={() => setState(p => ({...p, addons: {...p.addons, beefPepperoni: Math.max(0, p.addons.beefPepperoni - 1)}}))} className="text-gray-400 hover:text-white"><Minus className="w-3 h-3"/></button>
                                    <span className="text-white font-bold w-4 text-center text-xs">{state.addons.beefPepperoni}</span>
                                    <button onClick={() => setState(p => ({...p, addons: {...p.addons, beefPepperoni: p.addons.beefPepperoni + 1}}))} className="text-gray-400 hover:text-white"><Plus className="w-3 h-3"/></button>
                               </div>
                           </div>
                           {/* Chicken Pepperoni */}
                           <div className="flex justify-between items-center">
                               <span className="text-sm text-gray-400">Chicken Pepperoni</span>
                               <div className="flex items-center gap-3 bg-gray-900 px-2 py-1 rounded border border-gray-600">
                                    <button onClick={() => setState(p => ({...p, addons: {...p.addons, chickenPepperoni: Math.max(0, p.addons.chickenPepperoni - 1)}}))} className="text-gray-400 hover:text-white"><Minus className="w-3 h-3"/></button>
                                    <span className="text-white font-bold w-4 text-center text-xs">{state.addons.chickenPepperoni}</span>
                                    <button onClick={() => setState(p => ({...p, addons: {...p.addons, chickenPepperoni: p.addons.chickenPepperoni + 1}}))} className="text-gray-400 hover:text-white"><Plus className="w-3 h-3"/></button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           {/* Step 7: Nuggets */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-300">
               <div className="flex items-center justify-between bg-gray-800 p-3 rounded-xl border border-gray-700">
                   <div className="flex flex-col">
                       <h3 className="font-bebas text-xl text-white">7. Nuggets on Burger</h3>
                       <span className="text-xs text-yellow-500">3 Pieces (250/-)</span>
                   </div>
                   <button 
                       onClick={() => setState(p => ({ ...p, nuggets: !p.nuggets }))}
                       className={`w-12 h-6 rounded-full transition-colors relative ${state.nuggets ? 'bg-yellow-500' : 'bg-gray-600'}`}
                   >
                       <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${state.nuggets ? 'left-7' : 'left-1'}`}></div>
                   </button>
               </div>
           </section>

           {/* Step 8: Sauces */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-300">
               <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                   <h3 className="font-bebas text-2xl text-white">8. Sauces</h3>
                   <span className="text-sm text-yellow-500">70/- each</span>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {Object.keys(state.sauces).map(sauce => (
                       <div key={sauce} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg border border-gray-700">
                           <span className="text-sm text-gray-300">{sauce}</span>
                           <div className="flex items-center gap-3 bg-gray-900 px-2 py-1 rounded border border-gray-600">
                                <button onClick={() => setState(p => ({...p, sauces: {...p.sauces, [sauce]: Math.max(0, p.sauces[sauce] - 1)}}))} className="text-gray-400 hover:text-white"><Minus className="w-3 h-3"/></button>
                                <span className="text-white font-bold w-4 text-center text-xs">{state.sauces[sauce]}</span>
                                <button onClick={() => setState(p => ({...p, sauces: {...p.sauces, [sauce]: p.sauces[sauce] + 1}}))} className="text-gray-400 hover:text-white"><Plus className="w-3 h-3"/></button>
                           </div>
                       </div>
                   ))}
               </div>
           </section>

           {/* Step 9: Instructions */}
           <section className="bg-gray-900/50 border border-gray-800 p-5 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 delay-300">
               <h3 className="font-bebas text-2xl text-white mb-3">9. Special Instructions</h3>
               <textarea 
                   placeholder="Anything else the chef should know?"
                   value={state.instructions}
                   onChange={(e) => setState(p => ({...p, instructions: e.target.value}))}
                   className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm text-white focus:border-yellow-500 outline-none resize-none h-24"
               />
           </section>
       </div>

       {/* Sticky Bottom Bar */}
       <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800 p-4 z-50 flex items-center justify-center gap-4 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <button
                disabled={!hasPatty}
                onClick={handleAddToCart}
                className="w-full max-w-md bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-800 disabled:text-gray-500 text-black font-bold font-bebas tracking-wide text-xl py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
            >
                <ChefHat className="w-6 h-6" />
                {hasPatty ? `ADD TO CART (${totalPrice()}/-)` : 'SELECT A PATTY'}
            </button>
       </div>

       {/* Success Modal */}
       {successModalOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
               <div className="bg-gray-900 border border-yellow-500/50 rounded-2xl w-full max-w-sm p-6 relative z-10 shadow-2xl animate-in zoom-in-95">
                   <div className="flex flex-col items-center text-center">
                       <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500">
                           <Check className="w-8 h-8" />
                       </div>
                       <h3 className="font-bebas text-3xl text-white mb-2">ADDED TO CART!</h3>
                       <p className="text-gray-400 text-sm mb-6">Your custom masterpiece is ready.</p>
                       
                       <div className="flex flex-col w-full gap-3">
                           <button 
                               onClick={handleReset}
                               className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
                           >
                               MAKE ANOTHER
                           </button>
                           <button 
                               onClick={onBack}
                               className="w-full bg-gray-800 text-white font-bold py-3 rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors"
                           >
                               BACK TO HOME
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       )}
    </div>
  );
};
