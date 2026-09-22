export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  category: "tradicional" | "gourmet" | "lujo" | "sin-alcohol";
  price: number;
  compareAtPrice?: number;
  image: string;
  badge?: string;
  weightKg: number;
  dimensionsCm: { width: number; height: number; depth: number };
  description: string;
  includes: string[];
  pairingNotes: string;
  packaging: string;
  shopifyVariantId?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "canasta-001",
    handle: "canasta-nochebuena-artesanal",
    title: "Canasta Nochebuena Artesanal",
    subtitle: "Sidra mexicana, mermelada gourmet y dulces típicos",
    category: "tradicional",
    price: 690,
    compareAtPrice: 790,
    image: "/images/canasta-1-nochebuena.jpg",
    badge: "Detalle Accesible",
    weightKg: 2.5,
    dimensionsCm: { width: 30, height: 25, depth: 20 },
    description:
      "El detalle navideño perfecto: cálido, accesible y con el auténtico sabor tradicional mexicano. Empacado a mano en huacal de pino con detalles rústicos.",
    includes: [
      "1 Botella de Sidra Artesanal Gasificada de Manzana (700 ml)",
      "1 Frasco de Mermelada Gourmet Frutos Rojos con Canela (250 g)",
      "1 Caja de Galletas Finas de Mantequilla y Especias Navideñas (150 g)",
      "1 Barra de Ate Artesanal Morelia con Nuez Pecana (180 g)",
      "Huacalito de pino estufado decorado con viruta natural y lazo escocés",
      "Tarjeta con sobre para dedicatoria personalizada incluida",
    ],
    pairingNotes: "Ideal para compartir en el brindis familiar o como detalle de agradecimiento entre colegas de trabajo.",
    packaging: "Huacal de madera artesanal con lazo festivo y cubierta protectora.",
    shopifyVariantId: "gid://shopify/ProductVariant/50508412158117",
  },
  {
    id: "canasta-002",
    handle: "canasta-dulce-navidad-botanera",
    title: "Canasta Dulce Navidad & Botanera",
    subtitle: "Vino tinto mexicano, trufas belgas y mix botanero selecto",
    category: "gourmet",
    price: 1250,
    compareAtPrice: 1450,
    image: "/images/canasta-2-botanera.jpg",
    badge: "Familiar & Oficina",
    weightKg: 3.5,
    dimensionsCm: { width: 35, height: 30, depth: 25 },
    description:
      "Una balanceada combinación de vino tinto joven de autor, nueces selectas, trufas de chocolate belga y botanas crujientes para abrir el apetito en Nochebuena.",
    includes: [
      "1 Botella de Vino Tinto Mexicano Valle de Guadalupe (750 ml)",
      "1 Frasco de Mix Botanero Premium: Nuez de la India, almendras tostadas y arándano (200 g)",
      "1 Estuche de Trufas Finas de Chocolate Belga (120 g)",
      "1 Frasco de Dip Gourmet de Queso Crema con Chipotle Dulce (210 g)",
      "1 Paquete de Crackers Artesanales Finas con Semillas de Sésamo (150 g)",
      "Canasta tejida artesanal con lazo de terciopelo dorado",
      "Tarjeta de dedicatoria personalizada con sobre caligrafiado",
    ],
    pairingNotes: "Acompaña a la perfección carnes frías, quesos suaves y canapés de apertura.",
    packaging: "Canasta artesanal de mimbre reforzado con envoltura de alta resistencia.",
    shopifyVariantId: "gid://shopify/ProductVariant/50508412190885",
  },
  {
    id: "canasta-003",
    handle: "arcon-gourmet-reserva-iberica",
    title: "Arcón Gourmet Reserva Ibérica",
    subtitle: "Vino Crianza DOCa, Jamón Serrano Reserva y Queso Curado",
    category: "gourmet",
    price: 1980,
    compareAtPrice: 2250,
    image: "/images/canasta-3-gourmet.jpg",
    badge: "Más Vendido",
    weightKg: 4.5,
    dimensionsCm: { width: 40, height: 35, depth: 30 },
    description:
      "Nuestra creación insignia. Una experiencia gastronómica sibarita con vinos españoles de crianza, charcutería madurada y quesos selectos en una presentación refinada.",
    includes: [
      "1 Botella de Vino Tinto Crianza DOCa Rioja / Ribera del Duero (750 ml)",
      "1 Paquete de Jamón Serrano Reserva Maduración 12 meses en finas lonchas (100 g)",
      "1 Cuña de Queso Curado de Oveja y Cabra Español (200 g)",
      "1 Frasco de Aceitunas Manzanilla Españolas Rellenas (300 g)",
      "1 Botella de Aceite de Oliva Virgen Extra Español (250 ml)",
      "1 Caja de Tostas Artesanales Gourmet / Picos Camperos (120 g)",
      "1 Tableta de Turrón Blando de Almendra Suprema (150 g)",
      "Caja rígida de lujo negra mate con detalles dorados y listón de terciopelo",
      "Tarjeta con dedicatoria personalizada y membrete especial",
    ],
    pairingNotes: "El maridaje español definitivo: vino tinto estructurado con queso curado y jamón serrano.",
    packaging: "Caja rígida con cierre magnético forrada en papel mate texturizado.",
    shopifyVariantId: "gid://shopify/ProductVariant/50508412223653",
  },
  {
    id: "canasta-004",
    handle: "arcon-ejecutivo-sommelier-destilados",
    title: "Arcón Ejecutivo Sommelier & Destilados",
    subtitle: "Tequila Añejo Cristalino / Whisky, Jamón de Bellota y Baúl de Madera",
    category: "lujo",
    price: 3450,
    compareAtPrice: 3950,
    image: "/images/canasta-4-ejecutivo.jpg",
    badge: "Edición Limitada",
    weightKg: 6.0,
    dimensionsCm: { width: 45, height: 40, depth: 35 },
    description:
      "El máximo nivel en regalos navideños ejecutivos. Destilado de prestigio internacional, jamón de bellota 100% ibérico y latería fina dentro de un baúl de madera artesanal.",
    includes: [
      "1 Botella de Tequila Cristalino Añejo Premium (750 ml) o Whisky Single Malt (700 ml)",
      "1 Sobre de Jamón de Bellota 100% Ibérico cortado artesanalmente (80 g)",
      "1 Lata de Mejillones Gourmet de las Rías Gallegas en Escabeche (115 g)",
      "1 Frasco de Mousse de Pato al Armagnac Francés (180 g)",
      "1 Frasco de Nueces Pecanas Glaseadas al Maple Canadiense (200 g)",
      "1 Caja de Bombones Finos de Autor Surtidos (200 g)",
      "Baúl de madera sólida entintada estilo vintage con herrajes metálicos de latón",
      "Sobre con sello de cera lacre auténtico y tarjeta personalizada",
    ],
    pairingNotes: "Diseñado para los paladares más exigentes y brindis de alta distinción corporativa.",
    packaging: "Baúl de madera reutilizable de alta ebanistería con cerradura decorativa.",
    shopifyVariantId: "gid://shopify/ProductVariant/50508412256421",
  },
  {
    id: "canasta-005",
    handle: "canasta-dulce-bienestar-organica",
    title: "Canasta Dulce Bienestar & Orgánica",
    subtitle: "Café de especialidad chiapaneco, miel pura y chocolate oaxaqueño",
    category: "sin-alcohol",
    price: 1190,
    compareAtPrice: 1350,
    image: "/images/canasta-5-organica.jpg",
    badge: "Sin Alcohol",
    weightKg: 3.0,
    dimensionsCm: { width: 32, height: 28, depth: 22 },
    description:
      "Una alternativa reconfortante, cálida y sin alcohol. Ideal para toda la familia, amantes del buen café mexicano y delicias naturales con empaque eco-chic.",
    includes: [
      "1 Bolsa de Café de Especialidad Orgánico de Chiapas en grano o molido (500 g)",
      "1 Frasco de Miel Pura de Abeja Floración de Azahar (300 g) con cuchara mielera de madera",
      "1 Frasco de Tisana Frutal Navideña: manzana, jamaica y canela en rama (150 g)",
      "1 Paquete de Galletas Artesanales de Avena, Arándano y Nuez sin azúcar refinada (180 g)",
      "1 Barra de Chocolate de Mesa 70% Cacao Oaxaqueño (200 g)",
      "Canasta de mimbre natural con listón de lino y ramita de cedro aromático",
      "Tarjeta con sobre para dedicatoria personalizada incluida",
    ],
    pairingNotes: "Perfecta para mañanas decembrinas, desayunos navideños y sobremesas cálidas en familia.",
    packaging: "Canasta tejida en fibras vegetales biodegradables con textiles de lino.",
    shopifyVariantId: "gid://shopify/ProductVariant/50508412289189",
  },
];
