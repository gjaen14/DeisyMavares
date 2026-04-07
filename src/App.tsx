/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, MessageCircle, CheckCircle2,
  Users, Award, Briefcase, Heart,
  ArrowRight, Star, Quote, Globe,
  Zap, ShieldCheck, Target, Sparkles,
  Linkedin, Instagram, Youtube
} from "lucide-react";

// --- Components ---

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-sage"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <img src="/Logo_2.png" alt="Deisy Mavares Logo" className="w-64 md:w-80 object-contain mx-auto drop-shadow-xl" />

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-px bg-brand-gold mt-6 mx-auto max-w-[150px]"
      />
    </motion.div>
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Deisy", href: "#sobre-deisy" },
    { name: "Servicios", href: "#servicios" },
    { name: "Programas", href: "#programas" },
    { name: "Resultados", href: "#resultados" },
    { name: "Empresas", href: "#empresas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-6 shadow-sm" : "py-10"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center transition-transform hover:scale-105">
          <img src="/Logo_2.png" alt="Deisy Mavares Logo" className="h-10 md:h-12 w-auto object-contain scale-[1.35] md:scale-250 origin-left" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-brand-gold"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-brand-green text-brand-blue px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-brand-gold/30 transition-all hover:scale-105"
          >
            Transforma tu Equipo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 font-medium hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-blue text-white px-6 py-3 rounded-full text-center font-bold"
              >
                Transforma tu Equipo Hoy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green via-brand-sage to-brand-sage overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase mb-8">
              Holística Empresarial
            </span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-[1.05] text-brand-blue">
              Alto rendimiento a través del <span className="text-brand-gold italic">bienestar</span> consciente.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-brand-blue/80 max-w-lg font-sans font-medium leading-relaxed">
              Cuidamos de tu equipo para que tú impulses tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-green text-brand-blue px-8 py-4 rounded-full font-sans font-bold text-lg text-center shadow-lg hover:shadow-brand-gold/30 hover:shadow-xl transition-all"
              >
                Transforma tu equipo hoy
              </motion.a>
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-brand-green text-brand-blue px-8 py-4 rounded-full font-sans font-bold text-lg text-center hover:bg-brand-green hover:text-white transition-all bg-white/40 backdrop-blur-sm"
              >
                Saber más
              </motion.a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full relative"
          >
            {/* Blurred shape behind image */}
            <div className="absolute top-8 left-8 w-full h-full bg-white/50 backdrop-blur-sm rounded-[2rem] z-0 hidden lg:block shadow-sm"></div>

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Deisy Mavares - Liderazgo"
              className="relative z-10 w-full h-[500px] lg:h-[650px] object-cover rounded-[2rem] border-[1px] border-brand-gold shadow-[0_20px_40px_rgba(92,67,134,0.15)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre-deisy" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-sage rounded-full z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-grey rounded-full z-0" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Deisy Mavares"
              className="relative z-10 rounded-2xl shadow-2xl premium-shadow grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 -right-8 z-20 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <Award className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Experiencia</p>
                  <p className="text-lg font-bold text-brand-blue">15+ Años de Impacto</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">Sobre Deisy Mavares</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
                Liderazgo Consciente & Bienestar Integral
              </h3>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Mi historia comienza con una maleta llena de sueños desde Venezuela hasta Panamá. Es un relato de resiliencia y determinación que me llevó a descubrir mi verdadero propósito: <span className="text-brand-blue font-bold">"Formar, capacitar y transformar vidas desde la conciencia y la ciencia."</span>
              </p>
              <p>
                Como especialista en transformación humana, mi filosofía se basa en que el éxito organizacional es el resultado directo del bienestar de sus líderes y equipos. No se trata solo de números, sino de la calidad humana que los genera.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, text: "Coach Ontológico" },
                { icon: Zap, text: "NeuroCoach" },
                { icon: Sparkles, text: "Practitioner en PNL" },
                { icon: Target, text: "Estratega Humana" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-brand-sage rounded-xl border border-brand-blue/5">
                  <item.icon className="text-brand-blue w-5 h-5" />
                  <span className="font-bold text-brand-blue text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Conferencias de Impacto",
      desc: "Inspiración de alto nivel para eventos corporativos y convenciones.",
      items: ["BIENESTAR Y PRODUCTIVIDAD", "LIDERAZGO CONSCIENTE", "RESILIENCIA EJECUTIVA"],
      icon: Globe,
    },
    {
      title: "Talleres de Transformación",
      desc: "Experiencias inmersivas para el desarrollo de habilidades blandas.",
      items: ["GESTIÓN EMOCIONAL", "MANEJO DEL ESTRÉS", "COMUNICACIÓN ASERTIVA"],
      icon: Users,
    },
    {
      title: "Programas de Cultura",
      desc: "Diseño e implementación de culturas de bienestar sostenibles.",
      items: ["TRANSFORMACIÓN DE EQUIPOS", "CULTURA DE BIENESTAR", "ENGAGEMENT CORPORATIVO"],
      icon: Briefcase,
    },
    {
      title: "Mentorías Ejecutivas",
      desc: "Acompañamiento personalizado para lideres de alto nivel.",
      items: ["COACHING EJECUTIVO", "DISOLUCIÓN DE BLOQUEOS", "PROPÓSITO DE VIDA"],
      icon: Heart,
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-brand-sage">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">Wellness Corporativo</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Servicios de Transformación</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_rgba(92,67,134,0.06)] flex flex-col h-full border border-slate-50 transition-all duration-500 hover:shadow-[0_15px_50px_rgba(92,67,134,0.12)]"
            >
              <div className="w-14 h-14 bg-[#F4F1FA] rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                <service.icon size={22} className="text-brand-blue" />
              </div>
              <h4 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h4>
              <p className="text-slate-500/90 text-sm mb-8 leading-relaxed font-sans">
                {service.desc}
              </p>
              <ul className="space-y-4 mb-10 flex-grow">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-500/90 tracking-widest uppercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="flex items-center gap-2 text-brand-gold font-bold text-[10px] tracking-widest uppercase mt-auto group/link transition-colors hover:text-brand-blue">
                Solicitar Propuesta <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentiator = () => {
  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-6">El Diferencial</h2>
            <p className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
              "No es yoga en la oficina. Es <span className="text-brand-gold">transformación real</span> del liderazgo desde adentro."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Estrategia + Bienestar", desc: "Integración perfecta entre objetivos de negocio y salud humana." },
            { title: "Transformación Profunda", desc: "Cambios reales en el comportamiento y la mentalidad del equipo." },
            { title: "Resultados Medibles", desc: "Impacto directo en productividad, clima laboral y engagement." },
            { title: "Metodología Propia", desc: "Basada en conciencia, ciencia y comportamiento humano." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <h4 className="text-brand-gold font-bold mb-3">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const testimonials = [
    {
      name: "Andrés Rodríguez",
      role: "CEO, TechSolutions",
      text: "La intervención de Deisy cambió por completo nuestra dinámica de equipo. Pasamos de un ambiente de estrés a uno de colaboración consciente.",
      image: "https://i.pravatar.cc/150?u=1"
    },
    {
      name: "Mariana Costa",
      role: "HR Director, GlobalLogistics",
      text: "Los resultados en productividad fueron inmediatos. El bienestar no es un lujo, es la base de nuestro rendimiento actual.",
      image: "https://i.pravatar.cc/150?u=2"
    },
    {
      name: "Carlos Méndez",
      role: "Gerente General, InnovaCorp",
      text: "Su metodología basada en ciencia y conciencia es lo que marca la diferencia. Altamente recomendado para cualquier líder.",
      image: "https://i.pravatar.cc/150?u=3"
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">Testimonios</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Resultados que Inspiran</h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-xl relative group transition-all duration-500 hover:bg-white"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/10 w-16 h-16 group-hover:text-brand-gold/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <p className="font-bold text-brand-blue">{t.name}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.15em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Section */}
        <div id="empresas" className="mt-24 pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">Empresas que confían en la transformación</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-60 transition-opacity duration-500">
              {['BANCO GLOBAL', 'TECH CORP', 'LOGISTICS X', 'INNOVA GROUP', 'ENERGY PLUS'].map(logo => (
                <span key={logo} className="text-xl md:text-2xl font-serif font-black tracking-tighter text-slate-900">{logo}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">Contacto</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">¿Listo para elevar tu liderazgo?</h3>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Inicia hoy el camino hacia un rendimiento sostenible y un equipo plenamente comprometido. Completa el formulario y me pondré en contacto contigo a la brevedad para diseñar una propuesta a medida.
            </p>
            <div className="space-y-6">
              {[
                { icon: Globe, text: "Panamá | Internacional", sub: "Sesiones presenciales y virtuales" },
                { icon: MessageCircle, text: "Consultoría Estratégica", sub: "Diagnóstico inicial sin costo" },
                { icon: Heart, text: "Bienestar Corporativo", sub: "Programas de alto impacto humano" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 border border-white/5 rounded-2xl flex items-center justify-center text-brand-gold">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{item.text}</p>
                    <p className="text-xs text-white/60">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl premium-shadow border border-white"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-blue transition-all placeholder:text-slate-300" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Empresa</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-blue transition-all placeholder:text-slate-300" placeholder="Nombre de tu organización" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Correo Corporativo</label>
                <input type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-blue transition-all placeholder:text-slate-300" placeholder="email@empresa.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Interés Principal</label>
                <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-blue transition-all text-slate-600">
                  <option>Conferencias Inspiracionales</option>
                  <option>Talleres de Wellness Corporativo</option>
                  <option>Programas de Transformación de Equipos</option>
                  <option>Mentoría Ejecutiva Individual</option>
                </select>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4">
                Lleva tu Liderazgo al Siguiente Nivel
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/50767163393"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 3, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[60] bg-brand-blue text-brand-gold p-4 rounded-full shadow-[0_10px_30px_rgba(92,67,134,0.3)] flex items-center justify-center group border border-white/10"
  >
    <div className="absolute right-full mr-4 bg-white text-brand-blue px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      ¿Hablamos por WhatsApp?
    </div>
    <MessageCircle size={28} strokeWidth={2} />
  </motion.a>
);

// --- Main App ---

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-brand-gold/30 selection:text-brand-blue">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Differentiator />
          <Results />
          <Contact />

          <footer className="bg-brand-sage relative py-16 text-center text-sm">
            {/* Relieve effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-brand-blue/[0.02] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <img src="/Logo_2.png" alt="Deisy Mavares Logo" className="h-30 w-auto object-contain mx-auto mb-10 drop-shadow-sm" />
              <div className="flex justify-center gap-6 mb-12">
                {[
                  { id: 'Linkedin', icon: Linkedin, url: '#' },
                  { id: 'Instagram', icon: Instagram, url: '#' },
                  { id: 'Youtube', icon: Youtube, url: '#' }
                ].map(social => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-[0_5px_15px_rgba(92,67,134,0.08)] flex items-center justify-center text-brand-blue hover:text-brand-gold hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.id}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
              <p className="max-w-md mx-auto leading-relaxed text-brand-blue/70">© 2026 Todos los derechos reservados. Estrategia y Bienestar para el alto rendimiento organizacional.</p>
            </div>
          </footer>

          <WhatsAppButton />
        </motion.div>
      )}
    </div>
  );
}
