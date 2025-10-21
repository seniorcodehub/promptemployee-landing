"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Locale = "es" | "en";

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav_features: "Características",
    nav_how: "Cómo funciona",
    nav_testimonials: "Testimonios",
    nav_get_started: "Empezar",

    hero_title_1: "Contrata y Gestiona tu",
    hero_title_2: "Fuerza de Trabajo Digital",
    hero_title_3: "con IA",
    hero_desc:
      "No vendemos chatbots. Ofrecemos una plantilla de Trabajadores Digitales listos para integrarse en tus equipos humanos, aumentando productividad y capacidad.",
    hero_cta_primary: "Empezar",
    hero_cta_secondary: "Ver demo",

    features_title: "¿Por qué Promptemployee?",
    features_sub:
      "Una solución completa para adoptar IA a nivel empresarial sin código y sin dependencias",

    feature_1_title: "Panel de Orquestación Visual",
    feature_1_desc:
      "Hub no-code donde los managers conectan visualmente bases de datos, APIs y CRMs a cada Trabajador Digital. Sin escribir una línea de código.",
    feature_2_title: "Arquitectura Multi-Modelo",
    feature_2_desc:
      "Elige el motor de IA más adecuado para cada tarea (GPT-4, Claude 3, etc.). Optimiza costes y rendimiento según tus necesidades.",
    feature_3_title: "Servicio Integral",
    feature_3_desc:
      "Desarrollamos y mantenemos los MCPs (conectores de datos), eliminando la carga técnica y garantizando una implementación exitosa.",
    feature_4_title: "Empleados que Aprenden",
    feature_4_desc:
      "Sistema de memoria persistente ligado a cada compañero humano. Aprenden del contexto y recomiendan proactivamente nuevas conexiones.",
    feature_5_title: "Calidad de Respuesta Inigualable",
    feature_5_desc:
      "Sin alucinaciones. Garantizamos acceso e interpretación precisa de información, proporcionando respuestas fiables basadas en datos reales.",
    feature_6_title: "Sin Dependencias",
    feature_6_desc:
      "Arquitectura abierta y multi-modelo. Siempre podrás usar la mejor y más rentable tecnología de IA disponible en el mercado.",

    how_title: "Cómo Funciona",
    how_sub: "Tres simples pasos para desplegar tu fuerza de trabajo digital",
    how_step_1_title: "Conecta",
    how_step_1_desc:
      "Usa el panel visual para conectar las capacidades de tu empresa: bases de datos, APIs, CRMs. Nuestros MCPs hacen el trabajo pesado.",
    how_step_2_title: "Configura",
    how_step_2_desc:
      "Personaliza cada Trabajador Digital en minutos sin código. Define su rol, expertise y acceso a datos para tu caso de uso específico.",
    how_step_3_title: "Despliega",
    how_step_3_desc:
      "Los Trabajadores Digitales se integran en tus equipos humanos, asisten 24/7 y aumentan la productividad inmediatamente.",

    stats_1: "80%",
    stats_1_label: "Reducción en tiempo de tareas repetitivas",
    stats_2: "0 líneas",
    stats_2_label: "De código necesario para configurar",
    stats_3: "24/7",
    stats_3_label: "Disponibilidad de trabajadores digitales",
    stats_4: "Multi-modelo",
    stats_4_label: "Flexibilidad de IA engines",

    testimonials_title: "Lo que dicen nuestros clientes",
    testimonials_sub:
      "Empresas que transforman sus operaciones con Trabajadores Digitales",

    cta_title: "¿Listo para contratar tu primer Trabajador Digital?",
    cta_sub:
      "Únete al futuro del trabajo empresarial. Despliega empleados de IA hoy y experimenta el poder de la productividad aumentada.",
    cta_primary: "Contratar ahora",
    cta_secondary: "Agenda una demo",
    cta_note:
      "Suscripción flexible • Desarrollo de MCPs incluido • Sin vendor lock-in",

    footer_slogan: "El futuro del trabajo es híbrido",
    footer_about: "Sobre Nosotros",
    footer_contact: "Contacto",
    footer_privacy: "Privacidad",
    footer_terms: "Términos",
  },
  en: {
    nav_features: "Features",
    nav_how: "How It Works",
    nav_testimonials: "Testimonials",
    nav_get_started: "Get Started",

    hero_title_1: "Hire and Manage Your",
    hero_title_2: "Digital Workforce",
    hero_title_3: "with AI",
    hero_desc:
      "We don't sell chatbots. We offer a roster of Digital Workers ready to integrate into your human teams, boosting productivity and capacity.",
    hero_cta_primary: "Get Started",
    hero_cta_secondary: "Watch Demo",

    features_title: "Why Promptemployee?",
    features_sub:
      "A complete solution for enterprise AI adoption with no-code and no vendor lock-in",

    feature_1_title: "Visual Orchestration Panel",
    feature_1_desc:
      "No-code hub where managers visually connect databases, APIs, and CRMs to each Digital Worker. Without writing a single line of code.",
    feature_2_title: "Multi-Model Architecture",
    feature_2_desc:
      "Choose the most suitable AI engine for each task (GPT-4, Claude 3, etc.). Optimize costs and performance based on your needs.",
    feature_3_title: "Full-Service Support",
    feature_3_desc:
      "We develop and maintain MCPs (data connectors), eliminating technical burden and guaranteeing successful implementation.",
    feature_4_title: "Employees That Learn",
    feature_4_desc:
      "Persistent memory system tied to each human partner. They learn from context and proactively recommend new connections.",
    feature_5_title: "Unmatched Response Quality",
    feature_5_desc:
      "No hallucinations. We guarantee precise information access and interpretation, providing reliable answers based on real data.",
    feature_6_title: "No Dependencies",
    feature_6_desc:
      "Open and multi-model architecture. You can always use the best and most cost-effective AI technology available in the market.",

    how_title: "How It Works",
    how_sub: "Three simple steps to deploy your digital workforce",
    how_step_1_title: "Connect",
    how_step_1_desc:
      "Use the visual panel to connect your company's capabilities: databases, APIs, CRMs. Our MCPs do the heavy lifting.",
    how_step_2_title: "Configure",
    how_step_2_desc:
      "Customize each Digital Worker in minutes without code. Define their role, expertise, and data access for your specific use case.",
    how_step_3_title: "Deploy",
    how_step_3_desc:
      "Digital Workers integrate into your human teams, assist 24/7, and immediately boost productivity.",

    stats_1: "80%",
    stats_1_label: "Reduction in repetitive task time",
    stats_2: "0 lines",
    stats_2_label: "Of code needed to configure",
    stats_3: "24/7",
    stats_3_label: "Digital workers availability",
    stats_4: "Multi-model",
    stats_4_label: "AI engine flexibility",

    testimonials_title: "What Our Clients Say",
    testimonials_sub:
      "Companies transforming their operations with Digital Workers",

    cta_title: "Ready to hire your first Digital Worker?",
    cta_sub:
      "Join the future of enterprise work. Deploy AI employees today and experience the power of augmented productivity.",
    cta_primary: "Hire Now",
    cta_secondary: "Schedule a Demo",
    cta_note:
      "Flexible subscription • MCP development included • No vendor lock-in",

    footer_slogan: "The future of work is hybrid",
    footer_about: "About Us",
    footer_contact: "Contact",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
  },
};

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[locale];
      return dict[key] ?? key;
    },
    [locale]
  );

  const toggle = useCallback(() => {
    setLocale((l) => (l === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ locale, t, toggle, setLocale }),
    [locale, t, toggle]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

