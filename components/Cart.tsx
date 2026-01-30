
import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, MapPin, Phone, User, FileText, Bike, ShoppingBag, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [errors, setErrors] = useState<{name?: boolean; phone?: boolean; address?: boolean}>({});

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const validateForm = () => {
    const newErrors: {name?: boolean; phone?: boolean; address?: boolean} = {};
    let isValid = true;

    if (!customerName.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!customerPhone.trim()) {
      newErrors.phone = true;
      isValid = false;
    }
    if (orderType === 'delivery' && !customerAddress.trim()) {
      newErrors.address = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    if (!validateForm()) {
        return;
    }

    const orderTypeLabel = orderType === 'delivery' ? 'Home Delivery' : 'Takeaway';
    let message = `*New Order from Website (${orderTypeLabel})*\n\n`;
    
    message += `*Name:* ${customerName}\n`;
    message += `*Phone:* ${customerPhone}\n`;
    if (orderType === 'delivery') {
        message += `*Address:* ${customerAddress}\n`;
    }
    if (instructions) message += `*Instructions:* ${instructions}\n`;
    message += `\n------------------\n`;

    items.forEach(item => {
      message += `- ${item.name} (x${item.quantity}): ${item.price * item.quantity}/-\n`;
      if (item.customDetails) {
          message += `  ${item.customDetails.replace(/\n/g, '\n  ')}\n`;
      }
    });
    message += `\n*Total Amount: ${totalAmount}/-*`;
    message += `\n\nPlease confirm my order.`;

    // Updated WhatsApp link to custom business link
    const waBaseUrl = 'https://wa.me/message/GCCQJTH6ZQF6O1';
    const encodedMessage = encodeURIComponent(message);
    const url = `${waBaseUrl}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed inset-y-0 right-0 max-w-md w-full bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-3xl font-bebas tracking-wide text-gray-900 flex items-center gap-3">
              YOUR CART
              <span className="text-sm bg-red-600 text-white px-3 py-1 rounded-full font-sans font-black">{totalItems}</span>
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-50">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <ShoppingBag className="w-20 h-20 opacity-10" />
                <p className="text-xl font-bebas tracking-widest">EMPTY CART</p>
                <button 
                  onClick={onClose}
                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
                >
                  BROWSE MENU
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                    {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl p-4 flex gap-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                          {item.customDetails && (
                              <div className="mt-2 p-3 bg-gray-50 rounded-xl">
                                  <pre className="text-[10px] text-gray-500 font-sans whitespace-pre-wrap leading-tight">{item.customDetails}</pre>
                              </div>
                          )}
                          <p className="text-red-600 font-black text-lg mt-2 font-bebas tracking-wide">{item.price * item.quantity}/-</p>
                        </div>
                        
                        <div className="flex flex-col items-end justify-between">
                          <button 
                              onClick={() => onRemove(item.id)}
                              className="text-gray-300 hover:text-red-600 transition-colors p-2"
                          >
                              <Trash2 className="w-4 h-4" />
                          </button>
                          
                          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-3 py-1.5 border border-gray-100">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="text-gray-400 hover:text-red-600 disabled:opacity-30"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-base font-black text-gray-900 w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="text-gray-400 hover:text-red-600"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                          </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-[2rem] p-6 space-y-6 border border-gray-100">
                    <h3 className="text-gray-900 font-bebas tracking-widest text-2xl border-b border-gray-200 pb-3">ORDER DETAILS</h3>
                    
                    <div className="flex bg-white p-1 rounded-2xl border border-gray-200">
                        <button
                            onClick={() => { setOrderType('delivery'); setErrors(prev => ({...prev, address: false})); }}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                                orderType === 'delivery' 
                                    ? 'bg-red-600 text-white shadow-lg' 
                                    : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            <Bike className="w-5 h-5" />
                            DELIVERY
                        </button>
                        <button
                            onClick={() => setOrderType('takeaway')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                                orderType === 'takeaway' 
                                    ? 'bg-yellow-500 text-black shadow-lg' 
                                    : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            TAKEAWAY
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.name ? 'text-red-500' : 'text-gray-400'}`} />
                            <input 
                                type="text" 
                                placeholder="Your Name *"
                                value={customerName}
                                onChange={(e) => { setCustomerName(e.target.value); if(e.target.value) setErrors(prev => ({...prev, name: false})); }}
                                className={`w-full bg-white border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none transition-all ${
                                    errors.name 
                                    ? 'border-red-500 focus:ring-4 ring-red-500/10' 
                                    : 'border-gray-200 focus:border-red-600 focus:ring-4 ring-red-500/5'
                                }`}
                            />
                        </div>
                        <div className="relative">
                            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.phone ? 'text-red-500' : 'text-gray-400'}`} />
                            <input 
                                type="tel" 
                                placeholder="Phone Number *"
                                value={customerPhone}
                                onChange={(e) => { setCustomerPhone(e.target.value); if(e.target.value) setErrors(prev => ({...prev, phone: false})); }}
                                className={`w-full bg-white border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none transition-all ${
                                    errors.phone
                                    ? 'border-red-500 focus:ring-4 ring-red-500/10' 
                                    : 'border-gray-200 focus:border-red-600 focus:ring-4 ring-red-500/5'
                                }`}
                            />
                        </div>
                        
                        {orderType === 'delivery' && (
                            <div className="relative animate-in slide-in-from-top-2 duration-300">
                                <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.address ? 'text-red-500' : 'text-gray-400'}`} />
                                <input 
                                    type="text" 
                                    placeholder="Delivery Address *"
                                    value={customerAddress}
                                    onChange={(e) => { setCustomerAddress(e.target.value); if(e.target.value) setErrors(prev => ({...prev, address: false})); }}
                                    className={`w-full bg-white border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none transition-all ${
                                        errors.address
                                        ? 'border-red-500 focus:ring-4 ring-red-500/10' 
                                        : 'border-gray-200 focus:border-red-600 focus:ring-4 ring-red-500/5'
                                    }`}
                                />
                            </div>
                        )}

                         <div className="relative">
                            <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                            <textarea 
                                placeholder="Special Instructions (Optional)"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-red-600 outline-none transition-all resize-none h-28"
                            />
                        </div>
                    </div>
                </div>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Grand Total</span>
                <span className="text-red-600 text-3xl font-bebas">{totalAmount}/-</span>
              </div>
              
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-[1.5rem] shadow-xl shadow-green-600/20 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span className="font-bebas text-xl tracking-widest">SEND VIA WHATSAPP</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
