import React, { useState, useEffect } from 'react';
import { CakeDough, OrderState } from '../types';
import { FILLINGS, PRICE_PER_KG, WHATSAPP_NUMBER } from '../constants';
import { Calculator, Send, Plus, Minus, Check } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [order, setOrder] = useState<OrderState>({
    dough: CakeDough.WHITE,
    fillings: [],
    weight: 1.5,
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    notes: ''
  });

  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate Price Effect
  useEffect(() => {
    let calculated = order.weight * PRICE_PER_KG;
    
    // Add small premium if premium fillings are selected (optional logic)
    const premiumFillings = order.fillings.filter(fId => 
      FILLINGS.find(fill => fill.id === fId)?.isPremium
    );
    
    // Add 5 BRL per kg for each premium filling
    if (premiumFillings.length > 0) {
      calculated += (5 * premiumFillings.length * order.weight);
    }

    setTotalPrice(calculated);
  }, [order.weight, order.fillings]);

  const handleFillingToggle = (fillingId: string) => {
    setOrder(prev => {
      const exists = prev.fillings.includes(fillingId);
      if (exists) {
        return { ...prev, fillings: prev.fillings.filter(f => f !== fillingId) };
      } else {
        // Limit to 2 fillings
        if (prev.fillings.length >= 2) return prev;
        return { ...prev, fillings: [...prev.fillings, fillingId] };
      }
    });
  };

  const incrementWeight = () => setOrder(prev => ({ ...prev, weight: Math.min(prev.weight + 0.5, 10) }));
  const decrementWeight = () => setOrder(prev => ({ ...prev, weight: Math.max(prev.weight - 0.5, 1) }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (order.fillings.length === 0) {
      alert("Por favor, escolha pelo menos um recheio.");
      return;
    }
    
    if (!order.customerName || !order.customerPhone) {
      alert("Por favor, preencha seus dados de contato.");
      return;
    }

    const fillingsNames = order.fillings.map(id => FILLINGS.find(f => f.id === id)?.name).join(' + ');
    
    const message = `
*PEDIDO - Neide Borges Confeitaria* 👩‍🍳
----------------------------
👤 *Cliente:* ${order.customerName}
📞 *Tel:* ${order.customerPhone}
📍 *Endereço:* ${order.customerAddress}

*DETALHES DO BOLO*
🍰 *Massa:* ${order.dough}
🥣 *Recheio(s):* ${fillingsNames}
⚖️ *Peso:* ${order.weight}kg

💰 *Valor Estimado:* R$ ${totalPrice.toFixed(2)}

📝 *Observações:* ${order.notes}
----------------------------
_Pedido via Site_
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pedidos" className="py-20 bg-brand-cream/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-chocolate/5">
          <div className="bg-brand-pink p-6 text-center text-white">
            <h2 className="text-3xl font-display font-bold flex items-center justify-center gap-3">
              <Calculator className="w-8 h-8" /> Faça seu Pedido
            </h2>
            <p className="opacity-90">Monte seu bolo e receba o orçamento na hora!</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 grid md:grid-cols-2 gap-10">
            {/* Left Column: Configuration */}
            <div className="space-y-8">
              {/* Dough Selection */}
              <div>
                <h3 className="font-bold text-brand-chocolate mb-3 text-lg">1. Escolha a Massa</h3>
                <div className="space-y-2">
                  {Object.values(CakeDough).map((dough) => (
                    <label key={dough} className={`bg-white flex items-center p-3 border rounded-xl cursor-pointer transition-all ${order.dough === dough ? 'border-brand-pink bg-brand-pinkLight' : 'border-slate-200 hover:border-brand-pink/50'}`}>
                      <input 
                        type="radio" 
                        name="dough" 
                        className="w-4 h-4 text-brand-pink focus:ring-brand-pink accent-brand-pink"
                        checked={order.dough === dough}
                        onChange={() => setOrder({...order, dough})}
                      />
                      <span className="ml-3 font-medium text-slate-700">{dough}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filling Selection */}
              <div>
                <h3 className="font-bold text-brand-chocolate mb-1 text-lg">2. Recheios (Máx. 2)</h3>
                <p className="text-xs text-slate-500 mb-3">*Recheios Premium adicionam R$5,00/kg</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FILLINGS.map((filling) => {
                    const isSelected = order.fillings.includes(filling.id);
                    return (
                      <button
                        key={filling.id}
                        type="button"
                        onClick={() => handleFillingToggle(filling.id)}
                        className={`text-left px-3 py-2 rounded-lg text-sm transition-all border flex justify-between items-center
                          ${isSelected 
                            ? 'bg-brand-chocolate text-white border-brand-chocolate shadow-md' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                      >
                        <span>{filling.name} {filling.isPremium && <span className="text-xs opacity-70 ml-1">(Premium)</span>}</span>
                        {isSelected && <Check className="w-4 h-4" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Weight Selection */}
              <div>
                <h3 className="font-bold text-brand-chocolate mb-3 text-lg">3. Peso Aproximado</h3>
                <div className="flex items-center gap-4 bg-white p-2 rounded-xl border border-slate-200 w-max">
                  <button 
                    type="button" 
                    onClick={decrementWeight}
                    className="p-2 bg-slate-100 rounded-lg shadow-sm hover:bg-brand-pinkLight text-brand-chocolate transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold w-20 text-center text-slate-900">{order.weight} kg</span>
                  <button 
                    type="button" 
                    onClick={incrementWeight}
                    className="p-2 bg-slate-100 rounded-lg shadow-sm hover:bg-brand-pinkLight text-brand-chocolate transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-slate-500 mt-2">Serve aprox. {Math.floor(order.weight * 10)} fatias</p>
              </div>
            </div>

            {/* Right Column: Customer Info & Total */}
            <div className="flex flex-col h-full">
              <div className="flex-grow space-y-6">
                <h3 className="font-bold text-brand-chocolate text-lg">4. Seus Dados</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Seu Nome</label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink outline-none transition-all placeholder:text-slate-400"
                      placeholder="Ex: Maria da Silva"
                      value={order.customerName}
                      onChange={e => setOrder({...order, customerName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full p-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink outline-none transition-all placeholder:text-slate-400"
                      placeholder="Ex: 11 99999-9999"
                      value={order.customerPhone}
                      onChange={e => setOrder({...order, customerPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Endereço de Entrega (Opcional)</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink outline-none transition-all placeholder:text-slate-400"
                      placeholder="Rua, Número, Bairro"
                      value={order.customerAddress}
                      onChange={e => setOrder({...order, customerAddress: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Observações</label>
                    <textarea 
                      className="w-full p-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink outline-none transition-all h-24 resize-none placeholder:text-slate-400"
                      placeholder="Ex: Escrever 'Parabéns João' no topo..."
                      value={order.notes}
                      onChange={e => setOrder({...order, notes: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-slate-500 font-medium">Total Estimado</span>
                  <span className="text-3xl font-bold text-brand-chocolate">R$ {totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 text-lg transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" /> Enviar Pedido no WhatsApp
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  Ao clicar, você será redirecionado para o WhatsApp para confirmar o pedido.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;