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
  Linkedin, Instagram, Youtube,
  ChevronLeft, ChevronRight, Mail
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(link.href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 150);
                  }}
                  className="text-slate-600 font-medium hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('contacto');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 150);
                }}
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
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-[1.05] text-brand-blue">
              Transformo líderes para elevar el desempeño de sus equipos<h1 className="text-brand-gold italic"> sin sacrificar el bienestar</h1>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-brand-blue/80 max-w-lg font-sans font-medium leading-relaxed">
              Acompaño a líderes emergentes y organizaciones a mejorar su desempeño, comunicación y cultura desde el liderazgo consciente
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
              src="/Header_Fondo.png"
              alt="Deisy Mavares - Liderazgo"
              className="relative z-10 w-full h-[500px] lg:h-[700px] object-cover rounded-[2rem] border-[1px] border-brand-gold shadow-[0_20px_40px_rgba(92,67,134,0.15)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const PurposeBanner = () => {
  return (
    <section className="py-6 md:py-8 bg-brand-blue relative overflow-hidden border-y border-brand-gold/20 shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-2xl lg:text-3xl font-serif text-white tracking-wide">
            "Mi propósito es conectar a las <span className="text-brand-gold italic font-medium">personas/organizaciones</span> con su propósito."
          </p>
        </motion.div>
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
              src="/about.jpeg"
              alt="Deisy Mavares"
              className="relative z-10 rounded-2xl shadow-2xl premium-shadow transition-all duration-700"
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
                Mi historia no comienza solo con una maleta desde Venezuela a Panamá, comienza con una decisión: transformarme para poder transformar a otros.
                Hoy ayudo a líderes y equipos a alcanzar alto desempeño sin sacrificar su bienestar, porque entendí que el verdadero éxito organizacional nace del equilibrio humano.
              </p>
              <p>
                Como especialista en transformación humana, mi filosofía se basa en que el éxito organizacional es el resultado directo del bienestar de sus líderes y equipos. No se trata solo de números, sino de la calidad humana que los géneros.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, text: "Coach Ontológico" },
                { icon: Sparkles, text: "Practitioner en PNL" },
                { icon: Target, text: "Estratega Humana" },
                { icon: Zap, text: "Facilitadora de procesos de transformación" }
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

const ServiceCard = ({ service }: { service: any }) => (
  <>
    <div className="w-14 h-14 bg-[#F4F1FA] rounded-2xl flex items-center justify-center mb-8">
      <service.icon size={22} className="text-brand-blue" />
    </div>
    <h4 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h4>
    <p className="text-slate-500/90 text-sm mb-6 leading-relaxed font-sans">
      {service.desc}
    </p>
    <div className="mb-8 pl-4 border-l-2 border-brand-gold">
      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">QUÉ RESUELVE:</span>
      <p className="text-[13px] font-serif italic text-brand-blue/90 leading-relaxed pr-2">{service.solucion}</p>
    </div>
    <ul className="space-y-4 mb-10 flex-grow">
      {service.items.map((item: string, j: number) => (
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
  </>
);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const services = [
    {
      title: "Conferencias de Impacto",
      desc: "Inspiración de alto nivel para eventos corporativos y convenciones.",
      solucion: "Despierta a equipos desmotivados y alinea su mentalidad con los objetivos urgentes del negocio.",
      items: ["BIENESTAR Y PRODUCTIVIDAD", "LIDERAZGO CONSCIENTE", "RESILIENCIA EJECUTIVA"],
      icon: Globe,
    },
    {
      title: "Talleres de Transformación",
      desc: "Experiencias inmersivas para el desarrollo de habilidades blandas.",
      solucion: "Disuelve la fricción interna y enseña a canalizar el estrés hacia altos niveles de desempeño.",
      items: ["GESTIÓN EMOCIONAL", "MANEJO DEL ESTRÉS", "COMUNICACIÓN ASERTIVA"],
      icon: Users,
    },
    {
      title: "Programas de Cultura",
      desc: "Diseño e implementación de culturas de bienestar sostenibles.",
      solucion: "Transforma un clima tóxico de alta rotación en un entorno de pertenencia que atrae y retiene talento.",
      items: ["TRANSFORMACIÓN DE EQUIPOS", "CULTURA DE BIENESTAR", "ENGAGEMENT CORPORATIVO"],
      icon: Briefcase,
    },
    {
      title: "Mentorías Ejecutivas",
      desc: "Acompañamiento personalizado para lideres de alto nivel.",
      solucion: "Desbloquea techos de cristal y proporciona claridad mental para decisiones críticas en la alta gerencia.",
      items: ["COACHING EJECUTIVO", "DISOLUCIÓN DE BLOQUEOS", "PROPÓSITO DE VIDA"],
      icon: Heart,
    },
    {
      title: "Coaching 1:1 Y Mindset Wellness.",
      desc: "Acompañamiento personalizado para lideres de alto nivel.",
      solucion: "Reduce el burnout y fortalece la resiliencia mental frente a entornos empresariales hiper-exigentes.",
      items: ["COACHING EJECUTIVO", "DISOLUCIÓN DE BLOQUEOS", "PROPÓSITO DE VIDA"],
      icon: Heart,
    }
  ];

  const handleTouchStart = (e: globalThis.TouchEvent & { touches: TouchList }) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: globalThis.TouchEvent & { changedTouches: TouchList }) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < services.length - 1) setActiveIndex(activeIndex + 1);
      else if (diff < 0 && activeIndex > 0) setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section id="servicios" className="py-24 bg-brand-sage">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">Wellness Corporativo</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Servicios de Transformación</h3>
        </div>

        {/* Mobile: Single card + dots */}
        <div className="md:hidden">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(92,67,134,0.06)] flex flex-col border border-slate-50"
              >
                <ServiceCard service={services[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows & Dots */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => setActiveIndex(prev => Math.max(prev - 1, 0))}
              disabled={activeIndex === 0}
              aria-label="Anterior servicio"
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-brand-blue hover:bg-white hover:border-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-slate-200 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-brand-gold w-8 shadow-[0_0_8px_rgba(216,168,62,0.4)]" : "bg-slate-300 hover:bg-slate-400 w-2.5"
                    }`}
                  aria-label={`Ir al servicio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex(prev => Math.min(prev + 1, services.length - 1))}
              disabled={activeIndex === services.length - 1}
              aria-label="Siguiente servicio"
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-brand-blue hover:bg-white hover:border-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-slate-200 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Desktop/Tablet: Flex grid */}
        <div className="hidden md:flex flex-wrap justify-center items-stretch gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] bg-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_rgba(92,67,134,0.06)] flex flex-col border border-slate-50 transition-all duration-500 hover:shadow-[0_15px_50px_rgba(92,67,134,0.12)]"
            >
              <ServiceCard service={service} />
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: "Laila de la Garza",
      role: "Sales & Operation Manager",
      company: "MAC COSMETICS",
      text: "Durante el tiempo que he trabajado contigo, he observado que eres una persona muy dedicada y enfocada en tus objetivos. Has logrado revertir el rumbo del negocio en Panamá; tu tienda está brillando y se encuentra en el top #2 de la región. Esto es resultado de tu esfuerzo y compromiso.",
      image: "/woman_generic.png"
    },
    {
      name: "Joanna P. Duque S.",
      role: "Senior Sales and Education Executive LATAM (TR West)",
      company: "Makeup Cluster",
      text: "A lo largo de este tiempo, has demostrado ser una líder enfocada, dedicada y responsable. Es evidente tu compromiso con las metas y la disciplina en tu operación diaria. Quisiera resaltar especialmente tu interés genuino por tu equipo; esta cualidad resalta tu calidad humana y tu visión directiva. Tu dedicación se refleja mes a mes en el crecimiento del negocio y en el desarrollo constante de tus habilidades de liderazgo.",
      image: "/woman_generic.png"
    },
    {
      name: "Kristel Moreno S.",
      role: "Gerente Comercial",
      company: "Attenza Duty Free Panama",
      text: "Deisy aporta un valor excepcional al equipo gracias a su seguimiento constante y atención a cada detalle en tienda. Su enfoque garantiza una experiencia de cliente placentera y el cumplimiento de los objetivos de venta. Además, su excelente comunicación fortalece la relación entre el equipo interno, la marca y el distribuidor, impulsando una operación alineada y efectiva.",
      image: "/woman_generic.png"
    },
    {
      name: "Carlo Quintavalle",
      company: "Attenza Duty Free Panama",
      text: "A lo largo de este tiempo Deisy ha sido parte de mi equipo de ventas, y puedo decir con total convicción que su aporte ha sido consistente, valioso y en constante evolución. Deisy se caracteriza por su alto nivel de compromiso, su ética de trabajo y una genuina disposición por aprender, retarse y crecer profesionalmente. Puedo destacar su capacidad para asumir nuevos desafíos con una mentalidad abierta, su interés por desarrollarse más allá de su rol actual y su habilidad para generar conversaciones de valor, acompañar procesos y aportar desde la escucha y la empatía. Su crecimiento no solo es visible en resultados, sino también en la forma en que se relaciona.",
      image: "/man_generic.png"
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

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="bg-white/60 backdrop-blur-md p-8 rounded-xl relative group transition-all duration-500 hover:bg-white border border-slate-50 h-full flex flex-col shadow-[0_10px_40px_rgba(92,67,134,0.04)] hover:shadow-[0_15px_50px_rgba(92,67,134,0.1)]"
                  >
                    <Quote className="absolute top-6 right-6 text-brand-gold/10 w-16 h-16 group-hover:text-brand-gold/20 transition-colors" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
                    </div>
                    <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10 flex-grow">"{t.text}"</p>
                    <div className="flex items-center gap-4 relative z-10 mt-auto">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                      <div>
                        <p className="font-bold text-brand-blue">{t.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.15em]">{t.role}</p>
                        <p><span className=" text-brand-gold text-[10px] uppercase font-bold">{t.company}</span></p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
              aria-label="Anterior testimonio"
              className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-brand-blue hover:bg-brand-sage hover:border-brand-sage transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-slate-100 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.max(0, testimonials.length - itemsPerView) + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-brand-gold w-8" : "bg-slate-200 hover:bg-slate-300 w-2.5"
                    }`}
                  aria-label={`Ir a la página ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex(prev => Math.min(prev + 1, Math.max(0, testimonials.length - itemsPerView)))}
              disabled={currentIndex === Math.max(0, testimonials.length - itemsPerView)}
              aria-label="Siguiente testimonio"
              className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-brand-blue hover:bg-brand-sage hover:border-brand-sage transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-slate-100 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
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
              {['MAC COMESTICS', 'MAKEUP CLUSTER', 'ATTENZA DUTTY FREE'].map(logo => (
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
              Inicia hoy el camino hacia un rendimiento sostenible y un equipo plenamente comprometido. Escríbeme directamente por WhatsApp o envíame un correo para diseñar una propuesta a tu medida.
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

              <a href="mailto:deisymavares@gmail.com" className="flex items-center gap-5 group transition-all hover:translate-x-2">
                <div className="w-12 h-12 bg-brand-gold border border-brand-gold/50 rounded-2xl flex items-center justify-center text-brand-blue shadow-[0_0_15px_rgba(216,168,62,0.3)] group-hover:shadow-[0_0_25px_rgba(216,168,62,0.5)] transition-shadow">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Contáctame por Correo</p>
                  <p className="text-xs text-brand-gold">deisymavares@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl premium-shadow">
              <img
                src="/contactame.jpeg"
                alt="Deisy Mavares - Contáctame"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border-[1px] border-brand-gold/30 rounded-[2rem] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/50766055724"
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
          <PurposeBanner />
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
                  { id: 'Linkedin', icon: Linkedin, url: 'www.linkedin.com/in/deisy-mavares-0352a9404' },
                  { id: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mavaresdeisy/' },
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
              <p className="max-w-md mx-auto leading-relaxed text-brand-blue/70">© 2026 Todos los derechos reservados.<br /> No se trata solo de técnicas y herramientas, es transformación humana con impacto en la vida y en las organizaciones.</p>
            </div>
          </footer>

          <WhatsAppButton />
        </motion.div>
      )}
    </div>
  );
}
