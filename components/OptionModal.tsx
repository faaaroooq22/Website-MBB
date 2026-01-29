import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface OptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  options: string[];
  selectionType?: 'single' | 'multiple';
  onConfirm: (selections: { option: string; quantity: number }[]) => void;
}

export const OptionModal: React.FC<OptionModalProps> = ({ isOpen, onClose, item, options, selectionType = 'multiple', onConfirm }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [singleSelection, setSingleSelection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (selectionType === 'multiple') {
        const initialQuantities: Record<string, number> = {};
        options.forEach(opt => initialQuantities[opt] = 0);
        setQuantities(initialQuantities);
      } else {
        setSingleSelection(null);
      }
    }
  }, [isOpen, options, selectionType]);

  if (!isOpen || !item) return null;

  const updateQuantity = (option: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [option]: Math.max(0, (prev[option] || 0) + delta)
    }));
  };

  const handleConfirm = () => {
    if (selectionType === 'single') {
        if (singleSelection) {
            onConfirm([{ option: singleSelection, quantity: 1 }]);
            onClose();
        }
        return;
    }

    const selections = Object.entries(quantities)
      .filter(([_, qty]) => (qty as number) > 0)
      .map(([option, quantity]) => ({ option, quantity: quantity as number }));
    
    if (selections.length > 0) {
      onConfirm(selections);
      onClose();
    }
  };

  const totalSelected = selectionType === 'single' 
    ? (singleSelection ? 1 : 0) 
    : Object.keys(quantities).reduce((a, key) => a + (quantities[key] || 0), 0);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white border border-gray-100 rounded-[2.5rem] w-full max-w-md p-8 relative z-10 shadow-2xl animate-in zoom-in-95 duration-200">
        
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-300 hover:text-red-600 transition-colors">
          <X className="w-8 h-8" />
        </button>

        <h3 className="text-4xl font-bebas text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">
            {selectionType === 'single' ? 'Pick One Preference' : 'Select Your Options'}
        </p>

        <div className="space-y-4 max-h-[50vh] overflow-y-auto no-scrollbar pr-1">
          {options.map((option) => (
            <div 
                key={option} 
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 ${
                    selectionType === 'single'
                        ? singleSelection === option 
                            ? 'bg-red-50 border-red-600'
                            : 'bg-white border-gray-100 hover:border-gray-200 cursor-pointer'
                        : 'bg-gray-50 border-gray-100'
                }`}
                onClick={() => selectionType === 'single' && setSingleSelection(option)}
            >
              <span className={`font-bold tracking-tight ${
                  selectionType === 'single' && singleSelection === option ? 'text-red-600' : 'text-gray-700'
              }`}>{option}</span>
              
              {selectionType === 'multiple' ? (
                  <div className="flex items-center gap-4 bg-white rounded-2xl px-3 py-1.5 border border-gray-200 shadow-sm">
                    <button 
                      onClick={() => updateQuantity(option, -1)}
                      className={`text-gray-300 hover:text-red-600 transition-colors ${quantities[option] === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                      disabled={quantities[option] === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-gray-900 font-black w-6 text-center">{quantities[option] || 0}</span>
                    <button 
                      onClick={() => updateQuantity(option, 1)}
                      className="text-gray-300 hover:text-red-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
              ) : (
                  singleSelection === option && (
                      <div className="bg-red-600 rounded-full p-1.5">
                          <Check className="w-4 h-4 text-white" />
                      </div>
                  )
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={handleConfirm}
            disabled={totalSelected === 0}
            className={`w-full py-5 rounded-[1.5rem] font-bebas text-2xl tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
              totalSelected > 0 
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/20' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingBag className="w-6 h-6" />
            CONFIRM ORDER
          </button>
        </div>

      </div>
    </div>
  );
};