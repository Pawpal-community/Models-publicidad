import visibilityDilemma1 from "../assets/images/Llantilandia-foto-con-banner.webp";
import visibilityDilemma2 from "../assets/images/foto-visibility-5.webp";
import visibilityDilemma3 from "../assets/images/f-v-6.webp";
import visibilityDilemma4 from "../assets/images/Foto-4-en-estadio.webp";

// second solution images
import solutions1 from "../assets/images/solutions-2-1_11zon.webp";
import solutions2 from "../assets/images/solutions-2--2_11zon.webp";
import solutions3 from "../assets/images/solutions-2-3_11zon.webp";
import solutions4 from "../assets/images/solutions-2-5_11zon.webp";
import solutions5 from "../assets/images/solutions-2-6_11zon.webp";

import questionMarkeb from "../assets/images/questionmarkweb.jpg";



const services = [
  {
    title: "Activaciones que Impactan",
    features: [
      "Degustaciones interactivas (como caso éxito FritoLay)",
      "Organizacion de juegos y actividades interactivas",
      "Branding estratégicos en estadios con edecanes"
    ],
    icon: `<svg xmlns="http://www.w3.org2000/svg" viewBox="0 0 640 512" fill="currentColor" class="w-6 h-6">
      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
    </svg>`, // Grupo interactuando
  },
  {
    title: "Edecanes Expertas",
    features: [
      "Selección rigurosa por perfil de marca",
      "Entrenamiento en persuasión conversacional",
      "Ventas aseguradas"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="w-6 h-6">
      <path d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c30.1 15.1 52.6 44.2 58.7 79.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-2.1-13.2-3.5-26.6-3.5-40.3c0-48.8 18.7-93.3 49.5-126.6c-.7 0-1.4-.1-2.1-.1H321.6c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48c-2.3 5-4.5 10-6.6 15.1c-24.2 57.3-2.1 125 52 156.7c-14.2 5.8-26.6 14.4-36.9 25.1l-2.2 2.5c-24.6 28.2-39 64.3-39 102.6v4.1h144.4l-2.7-12.9c-10.3-49.5 5.8-100.3 44.4-134.6c6.4-5.7 13.4-10.7 20.8-14.8c15.3-8.6 28.1-20.1 37.3-33.7c-3.8-4.1-7.2-8.6-10.1-13.6c-14.1-23.8-12.2-54 4.7-75.8z"/>
    </svg>`, // Equipo profesional
  },
  {
    title: "Supervisión Garantizada",
    features: [
      "Reportes de actividades en tiempo real",
      "Fotografías HD de cada actividad",
      "Checklist de cumplimiento de marca"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-6 h-6">
      <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V123.9L231.5 360.5c-12.3 12.3-32.3 12.3-44.6 0l-112-112c-12.3-12.3-12.3-32.3 0-44.6s32.3-12.3 44.6 0L192 289.9 451.9 32H384zM0 448c0-35.3 28.7-64 64-64H352c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V448z"/>
    </svg>`, // Documento con check
  },
  // {
  //   title: "Flexibilidad Total",
  //   features: [
  //     "Paquetes desde 4 hasta 40 edecanes",
  //     "Adaptables a supermercados/estadios/eventos",
  //     "Horarios extendidos y últimos cambios"
  //   ],
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6">
  //     <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
  //   </svg>`, // Reloj adaptable
  // }
];

const solutions = [
  {
    title: "Dale visibilidad a tu marca o evento con nuestras modelos/edecanes",
    painPoint:
      "Tus activaciones de producto pasan desapercibidas en supermercados/estadios, sin lograr experiencias memorables para la marca.",
    agitatepainPoint:
      "Stands de degustación aburridos y banners pasivos te hacen perder valiosas oportunidades de venta. Mientras tus competidores atraen multitudes, tu marca se vuelve invisible.",
    solution:
      "¡Convertimos los espacios en escenarios para tu marca! Modelos/edecanes profesionales realizan degustaciones interactivas (como Butterball), organizan juegos con premios (éxito con FritoLay) y convierten multitudes en estadios en audiencias comprometidas con tu marca. Mira ejemplos en video.",
      images: [visibilityDilemma1, visibilityDilemma2, visibilityDilemma3, visibilityDilemma4] // Imágenes de activaciones de producto
  },
  {
    title: "Interacciones Auténticas que Convierten",
    painPoint:
      "Las degustaciones forzadas y promotores sin entrenamiento no generan conexiones reales con tu audiencia.",
    agitatepainPoint:
      "¿De qué sirve ofrecer muestras si el 80% de los clientes las recibe con indiferencia? Las interacciones robóticas destruyen tu inversión en activaciones.",
    solution:
      "Nuestras edecanes son especialistas en engagement real: convierten degustaciones en recuerdos memorables que tendra la gente sobre tu marca. ",
    images: [solutions5] // Imagen: 1) Modelo riendo con cliente, 2) Capacitación de equipo
  },
  {
    title: "No mas inversiones a Ciegas en Eventos",
    painPoint:
      "Financias activaciones, pero no tienes transparencia: sin pruebas de ejecución ni retorno de inversión.",
    agitatepainPoint:
      "¿Los modelos realmente asistieron? ¿Los banners fueron colocados correctamente? Sin supervisión en tiempo real, estás pagando por promesas, no por resultados.",
    solution:
      "Recibe reportes de supervisión con GPS + fotos en HD en tiempo real. Documentamos cada producto degustado, juego realizado y banner colocado. Todo eso para que lleves total control de tus activaciones.",
      images: [questionMarkeb], // Imagen de reporte fotográfico/dashboard
  },
];

const faqs = [
  {
    question: "¿Qué tipos de eventos pueden cubrir con sus edecanes?",
    answer: "Cubrimos todo tipo de activaciones de marca: degustaciones interactivas en supermercados, branding en estadios deportivos, promociones en ferias comerciales, lanzamientos de producto y eventos corporativos. Nuestros paquetes son adaptables."
  },
  {
    question: "¿Cómo garantizan la calidad de sus edecanes?",
    answer: "Implementamos un riguroso proceso de selección por perfil de marca + entrenamiento en técnicas de persuasión conversacional. Cada edecán recibe coaching en protocolo de marca, interacción con público y manejo de productos."
  },
  {
    question: "¿Qué incluyen sus reportes de supervisión?",
    answer: "Entregamos en tiempo real: fotos HD de cada actividad, checklist de cumplimiento de branding y métricas de engagement. Como ejemplo, en nuestra activación con butterball donde dimos a degustar 200+ muestas en un dia"
  },
  // {
  //   question: "¿Miden el ROI de las activaciones?",
  //   answer: "Sí, implementamos sistemas de tracking: contabilizamos muestras distribuidas, leads captados mediante QR codes, y en eventos medimos incremento en ventas en el punto de activación. Con Butterball logramos un 23% de conversión directa."
  // },
  {
    question: "¿Pueden manejar cambios de último momento?",
    answer: "¡Absolutamente! Pero eso dependerá del tipo de cambios, si es de actividades, se les puede avisar al momento, si es de edecan, se necesita un tiempo de anticipación para poder hacer el cambio."
  },
  {
    question: "¿Tienen experiencia en estadios deportivos?",
    answer: "Somos líderes en branding para eventos deportivos. Para Llantilandia activamos 15 edecanes en el Estadio Olímpico con interacciones que alcanzaron 92% de recordación de marca, documentado con fotos HD y reportes de alcance."
  },
  {
    question: "¿Qué seguridad ofrecen durante las activaciones?",
    answer: "En todos nuestros eventos/activaciones enviamos por defecto supervisores que se encargan de monitorear el ambiente y personas del lugar, asi como el trabajo de las edecanes y reportes que se tengan que hacer a la marca o encargado."
  },
  {
    question: "¿Qué necesito para contratar sus servicios?",
    answer: "Solo necesitamos: 1) Brief de marca 2) Fechas y ubicaciones 3) Objetivos específicos. Nosotros desarrollamos una propuesta estratégica con mockups de activación y presupuesto detallado en menos de 48h."
  },
];

export { services, solutions, faqs };
