/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Droplets, 
  Clock, 
  MapPin, 
  Wifi, 
  ShieldCheck, 
  Menu, 
  X, 
  Timer, 
  CreditCard, 
  ArrowRight,
  Instagram,
  Facebook,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Rápido e Prático", 
      desc: "Lave e seque suas roupas em menos de 1 hora com nossas máquinas profissionais de alta performance." 
    },
    { 
      icon: <Droplets className="w-6 h-6" />, 
      title: "Eco-Friendly", 
      desc: "Utilizamos produtos biodegradáveis e sistemas que economizam até 40% de água e energia." 
    },
    { 
      icon: <Wifi className="w-6 h-6" />, 
      title: "Wi-Fi Gratuito", 
      desc: "Aproveite nossa conexão de alta velocidade enquanto espera suas roupas ficarem prontas." 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Aberto 24h", 
      desc: "Flexibilidade total para o seu dia a dia. Lave suas roupas a qualquer hora, com total segurança." 
    }
  ];

  const steps = [
    { number: "01", title: "Escolha sua Máquina", desc: "Selecione o tamanho ideal para sua carga de roupas." },
    { number: "02", title: "Pagamento Digital", desc: "Pague via Pix, cartão ou pelo nosso aplicativo exclusivo." },
    { number: "03", title: "Relaxe e Aproveite", desc: "Acompanhe o tempo pelo celular ou use nosso espaço de convivência." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <Droplets className="w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              LavaJet
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm font-medium hover:text-blue-600 transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="#localizacao" className="text-sm font-medium hover:text-blue-600 transition-colors">Onde Estamos</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95">
              Baixar App
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Benefícios</a>
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Como Funciona</a>
              <a href="#localizacao" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Onde Estamos</a>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold mt-4">
                Baixar Aplicativo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Redefinindo o Autoatendimento
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                Sua roupa limpa, <br />
                <span className="text-blue-600">sem esforço.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                A maneira mais rápida, moderna e sustentável de lavar suas roupas. 
                Economize tempo e dinheiro com nossas máquinas de alta tecnologia.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0 group">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all">
                  Ver Localização
                </button>
              </div>
              <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium tracking-wide">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>+2.000 clientes satisfeitos por mês</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl skew-y-3">
                <img 
                  src="https://picsum.photos/seed/laundry/800/1000" 
                  alt="Modern Laundry Interior" 
                  className="w-full h-auto object-cover h-[500px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-1 border border-blue-50"
              >
                <Zap className="text-blue-500 w-8 h-8 mb-2" />
                <span className="text-2xl font-bold">45 min</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Lavagem + Secagem</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-blue-50"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">Segurança 24h</div>
                  <div className="text-xs text-slate-500">Espaço monitorado</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-50 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Features Section */}
      <section id="beneficios" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a LavaJet?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Combinamos tecnologia de ponta com um ambiente agradável para tornar a tarefa de cuidar das suas roupas uma experiência prazerosa.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg h-[260px]">
                    <img src="https://picsum.photos/seed/lava1/400/600" alt="Process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-blue-600 rounded-3xl p-6 text-white text-center">
                    <span className="text-4xl font-bold leading-none">100%</span>
                    <p className="text-xs font-medium uppercase mt-2 opacity-80">Automatizado</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-slate-100 rounded-3xl p-6 text-center">
                    <Smartphone className="w-10 h-10 mx-auto text-blue-600 mb-2" />
                    <p className="text-xs font-bold leading-tight">Gestão pelo App</p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg h-[260px]">
                    <img src="https://picsum.photos/seed/lava2/400/600" alt="Process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-8 leading-tight">Como funciona o <br />autoatendimento?</h2>
              <p className="text-slate-600 mb-12">
                É simples, rápido e você não precisa levar nada. Nossas máquinas dosam automaticamente sabão e amaciante premium em todas as lavagens.
              </p>
              
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-black text-slate-100 transition-colors group-hover:text-blue-100">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                      <p className="text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
                <Timer className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <p className="text-sm text-blue-900 leading-relaxed font-medium">
                  <strong>Dica:</strong> Em apenas 15 minutos você completa o ciclo de secagem. Aproveite para ler um livro ou colocar o e-mail em dia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 bg-slate-900 text-white rounded-t-[60px] md:rounded-t-[100px]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços</h2>
            <p className="text-slate-400">Pague apenas pelo que precisar ou aproveite nossos créditos acumulativos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-10 rounded-[40px] border border-slate-700">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 block">Lave</span>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-bold">R$</span>
                <span className="text-6xl font-black">18</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Máquina de 10kg</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Sabão Premium incluso</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Amaciante Fresh incluso</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 30-35 minutos de lavagem</li>
              </ul>
              <button className="w-full py-4 rounded-full border border-slate-600 font-bold hover:bg-slate-700 transition-all">Ver Detalhes</button>
            </div>

            <div className="bg-white p-10 rounded-[40px] text-slate-900 relative shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
                Mais Popular
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 block">Combo</span>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-bold">R$</span>
                <span className="text-6xl font-black">30</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm text-slate-600">
                <li className="flex items-center gap-2 font-bold text-blue-600"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Lavagem + Secagem</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Insumos OMO e Comfort</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Até 10kg de roupas</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Finalize em menos de 1h</li>
              </ul>
              <button className="w-full py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">Começar Agora</button>
            </div>

            <div className="bg-slate-800 p-10 rounded-[40px] border border-slate-700">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 block">Seque</span>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-bold">R$</span>
                <span className="text-6xl font-black">18</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Ciclo de 45 minutos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Alta secagem profissional</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Roupas prontas para dobrar</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Tecnologia anti-rugas</li>
              </ul>
              <button className="w-full py-4 rounded-full border border-slate-600 font-bold hover:bg-slate-700 transition-all">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section id="localizacao" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-6 md:p-12 rounded-[50px]">
            <div>
              <span className="inline-block px-4 py-1 bg-white text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Encontre-nos
              </span>
              <h2 className="text-4xl font-bold mb-6">Estamos mais perto do que você imagina.</h2>
              <p className="text-slate-600 mb-10">
                Unidades pensadas para oferecer conveniência e facilidade. Localize a LavaJet mais próxima de você.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <MapPin />
                  </div>
                  <div>
                    <h5 className="font-bold">Unidade Centro</h5>
                    <p className="text-sm text-slate-500">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <Timer />
                  </div>
                  <div>
                    <h5 className="font-bold">Horário de Funcionamento</h5>
                    <p className="text-sm text-slate-500">Aberto todos os dias, 24 horas por dia.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 transition-transform active:scale-95">Abrir no Maps</button>
                <div className="flex items-center gap-1 text-slate-500">
                  {/* Rating stars */}
                  {[1,2,3,4,5].map(i => <Zap key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs font-bold ml-2">4.9/5 no Google</span>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-slate-200 rounded-[40px] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                 <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <span className="font-bold text-blue-900">Mapa Interativo vindo aí</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[50px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Pronto para liberar <br />seu tempo?</h2>
              <p className="text-blue-100 mb-12 text-lg max-w-xl mx-auto opacity-80">
                Baixe agora nosso aplicativo, ganhe a primeira lavagem gratuita e mude sua relação com a lavanderia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-700 px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl transition-all active:scale-95 flex items-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  App Store
                </button>
                <button className="bg-blue-900/40 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black text-lg hover:bg-blue-900/60 transition-all flex items-center gap-2">
                   <Smartphone className="w-6 h-6" />
                   Google Play
                </button>
              </div>
            </motion.div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Droplets className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight">LavaJet</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">Politica de Privacidade</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Trabalhe Conosco</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-slate-400">
            © 2026 LavaJet Lavanderia S.A. Todos os direitos reservados. 
          </div>
        </div>
      </footer>
    </div>
  );
}
