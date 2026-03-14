// ============================================
// DATA.JS — Aquí añades todo el contenido
// Sin tocar ningún otro archivo
// ============================================

const SITE_CONFIG = {
  nombre: "Edu's Prehistoric Explorer",
  descripcion: "Descubre animales extintos, ecosistemas del pasado y la ciencia detrás de los fósiles.",
  version: "1.1",
  adminPassword: "dino9173"
};

// ============================================
// ANIMALES
// ============================================

const ANIMALES = [
  {
    id: 1,
    nombre: "Tyrannosaurus rex",
    cientifico: "Tyrannosaurus rex",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Cretácico tardío (68–66 Ma)",
    dieta: "Carnívoro",
    tamaño: "12–13 m",
    peso: "8.000–14.000 kg",
    habitat: "Bosques y llanuras de América del Norte",
    lugarFosil: "Wyoming, EE.UU.",
    añoDescubrimiento: 1902,
    cientifico2: "Barnum Brown",
    descripcion: "El depredador terrestre más icónico. Tenía la mordida más potente de cualquier animal terrestre conocido: hasta 57.000 N.",
    clasificacion: ["Theropoda", "Dinosauria", "Carnívoro"]
  },
  {
    id: 2,
    nombre: "Mamut lanudo",
    cientifico: "Mammuthus primigenius",
    emoji: "🦣",
    estado: "extinto",
    periodo: "Pleistoceno (400.000–4.000 a.C.)",
    dieta: "Herbívoro",
    tamaño: "3,4 m de altura",
    peso: "6.000 kg",
    habitat: "Tundra fría de Eurasia y América del Norte",
    lugarFosil: "Siberia, Rusia",
    añoDescubrimiento: 1799,
    cientifico2: "Johann Blumenbach",
    descripcion: "Pariente del elefante asiático. Coexistió con humanos que lo cazaron y pintaron en cuevas. El último vivió en la isla de Wrangel.",
    clasificacion: ["Proboscidea", "Mammalia", "Herbívoro"]
  },
  {
    id: 3,
    nombre: "Megalodón",
    cientifico: "Otodus megalodon",
    emoji: "🦈",
    estado: "extinto",
    periodo: "Mioceno–Plioceno (23–3,6 Ma)",
    dieta: "Carnívoro",
    tamaño: "~15–18 m",
    peso: "~50.000–70.000 kg",
    habitat: "Océanos tropicales y templados globales",
    lugarFosil: "Múltiples localidades mundiales",
    añoDescubrimiento: 1835,
    cientifico2: "Louis Agassiz",
    descripcion: "El tiburón más grande que jamás existió. Sus dientes de 18 cm son el fósil más frecuente del Mioceno.",
    clasificacion: ["Chondrichthyes", "Lamniformes", "Superdepredador"]
  },
  {
    id: 4,
    nombre: "Triceratops",
    cientifico: "Triceratops horridus",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico tardío (68-66 Ma)",
    dieta: "Herbívoro",
    tamaño: "9 m de largo",
    peso: "6.000-12.000 kg",
    habitat: "Llanuras forestales de América del Norte",
    lugarFosil: "Colorado, EE.UU.",
    añoDescubrimiento: 1889,
    cientifico2: "Othniel Charles Marsh",
    descripcion: "Ceratopsio con tres cuernos y gran gola ósea. Coexistió con T. rex y es uno de los dinosaurios más reconocibles.",
    clasificacion: ["Ceratopsia", "Dinosauria", "Herbívoro"]
  },
  {
    id: 5,
    nombre: "Quetzalcoatlus",
    cientifico: "Quetzalcoatlus northropi",
    emoji: "🦅",
    estado: "extinto",
    periodo: "Cretácico tardío (68-66 Ma)",
    dieta: "Carnívoro/Piscívoro",
    tamaño: "Envergadura alar de 10–12 m",
    peso: "75–544 kg",
    habitat: "Zonas interiores, humedales y llanuras semiáridas de América del Norte",
    lugarFosil: "Texas, EE.UU.",
    añoDescubrimiento: 1971,
    cientifico2: "Douglas A. Lawson",
    descripcion: "El animal volador más grande conocido, un pterosaurio azdárquido con cuello largo y pico sin dientes, que probablemente se alimentaba en tierra firme similar a las cigüeñas modernas.",
    clasificacion: ["Pterosauria", "Azhdarchidae", "Carnívoro"]
  },
  {
    id: 6,
    nombre: "Velociraptor",
    cientifico: "Velociraptor mongoliensis",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Cretácico tardío (75–71 Ma)",
    dieta: "Carnívoro",
    tamaño: "2 m de largo",
    peso: "15 kg",
    habitat: "Desiertos y zonas semiáridas de Asia",
    lugarFosil: "Desierto del Gobi, Mongolia",
    añoDescubrimiento: 1924,
    cientifico2: "Peter Kaisen",
    descripcion: "Pequeño dinosaurio terópodo ágil con una gran garra en forma de hoz en cada pie. Probablemente tenía plumas y cazaba presas pequeñas.",
    clasificacion: ["Theropoda", "Dromaeosauridae", "Dinosauria", "Carnívoro"]
  },
  {
    id: 7,
    nombre: "Stegosaurus",
    cientifico: "Stegosaurus stenops",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Jurásico tardío (155–150 Ma)",
    dieta: "Herbívoro",
    tamaño: "9 m de largo",
    peso: "5.000 kg",
    habitat: "Llanuras y bosques abiertos",
    lugarFosil: "Colorado, EE.UU.",
    añoDescubrimiento: 1877,
    cientifico2: "Othniel Charles Marsh",
    descripcion: "Dinosaurio herbívoro con grandes placas óseas en la espalda y una cola con cuatro espinas defensivas llamadas thagomizer.",
    clasificacion: ["Thyreophora", "Stegosauria", "Dinosauria", "Herbívoro"]
  },
  {
    id: 8,
    nombre: "Brachiosaurus",
    cientifico: "Brachiosaurus altithorax",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Jurásico tardío (154–150 Ma)",
    dieta: "Herbívoro",
    tamaño: "25 m de largo",
    peso: "50.000–60.000 kg",
    habitat: "Bosques y llanuras cercanas a ríos",
    lugarFosil: "Colorado, EE.UU.",
    añoDescubrimiento: 1903,
    cientifico2: "Elmer Riggs",
    descripcion: "Gran dinosaurio saurópodo con cuello muy largo y patas delanteras más largas que las traseras, lo que le daba una postura inclinada hacia arriba.",
    clasificacion: ["Sauropoda", "Brachiosauridae", "Dinosauria", "Herbívoro"]
  },
  {
    id: 9,
    nombre: "Spinosaurus",
    cientifico: "Spinosaurus aegyptiacus",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Cretácico medio (99–93 Ma)",
    dieta: "Carnívoro",
    tamaño: "15 m de largo",
    peso: "7.000–9.000 kg",
    habitat: "Ríos y zonas pantanosas",
    lugarFosil: "Egipto",
    añoDescubrimiento: 1912,
    cientifico2: "Ernst Stromer",
    descripcion: "Gran dinosaurio terópodo semiacuático con una enorme vela dorsal formada por largas espinas vertebrales. Probablemente se alimentaba principalmente de peces.",
    clasificacion: ["Theropoda", "Spinosauridae", "Dinosauria", "Carnívoro"]
  },
  {
    id: 10,
    nombre: "Ankylosaurus",
    cientifico: "Ankylosaurus magniventris",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico tardío (68-66 Ma)",
    dieta: "Herbívoro",
    tamaño: "7 m de largo",
    peso: "6.000 kg",
    habitat: "Llanuras y bosques",
    lugarFosil: "Montana, EE.UU.",
    añoDescubrimiento: 1906,
    cientifico2: "Barnum Brown",
    descripcion: "Dinosaurio herbívoro fuertemente acorazado con placas óseas por todo el cuerpo y una gran maza en la cola para defenderse de depredadores.",
    clasificacion: ["Ankylosauria", "Ankylosauridae", "Dinosauria", "Herbívoro"]
  },
  {
    id: 11,
    nombre: "Diplodocus",
    cientifico: "Diplodocus longus",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Jurásico tardío (154–152 Ma)",
    dieta: "Herbívoro",
    tamaño: "25,5 m de largo",
    peso: "15.000 kg",
    habitat: "Llanuras con vegetación abundante",
    lugarFosil: "Colorado, EE.UU.",
    añoDescubrimiento: 1877,
    cientifico2: "Othniel Charles Marsh",
    descripcion: "Saurópodo de cuello largo y cola extremadamente larga, utilizado posiblemente como látigo defensivo.",
    clasificacion: ["Sauropoda", "Diplodocidae", "Dinosauria", "Herbívoro"]
  },
  {
    id: 12,
    nombre: "Allosaurus",
    cientifico: "Allosaurus fragilis",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Jurásico tardío (155-145 Ma)",
    dieta: "Carnívoro",
    tamaño: "11 m de largo",
    peso: "2.000-3.000 kg",
    habitat: "Llanuras y bosques abiertos",
    lugarFosil: "Utah, EE.UU.",
    añoDescubrimiento: 1877,
    cientifico2: "Othniel Charles Marsh",
    descripcion: "Gran dinosaurio terópodo depredador con fuertes mandíbulas y brazos relativamente largos con tres garras.",
    clasificacion: ["Theropoda", "Allosauridae", "Dinosauria", "Carnívoro"]
  },
  {
    id: 13,
    nombre: "Pachycephalosaurus",
    cientifico: "Pachycephalosaurus wyomingensis",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico tardío (70-66 Ma)",
    dieta: "Herbívoro",
    tamaño: "4,5 m de largo",
    peso: "450 kg",
    habitat: "Bosques y llanuras",
    lugarFosil: "Wyoming, EE.UU.",
    añoDescubrimiento: 1931,
    cientifico2: "Charles W. Gilmore",
    descripcion: "Dinosaurio herbívoro conocido por su cráneo extremadamente grueso y abombado, posiblemente utilizado en combates entre individuos.",
    clasificacion: ["Ornithischia", "Pachycephalosauridae", "Dinosauria", "Herbívoro"]
  },
  {
    id: 14,
    nombre: "Parasaurolophus",
    cientifico: "Parasaurolophus walkeri",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico tardío (76–73 Ma)",
    dieta: "Herbívoro",
    tamaño: "9,5 m de largo",
    peso: "2.500 kg",
    habitat: "Llanuras y bosques húmedos",
    lugarFosil: "Alberta, Canadá",
    añoDescubrimiento: 1922,
    cientifico2: "William Parks",
    descripcion: "Hadrosaurio con una cresta tubular muy larga en la cabeza que probablemente servía para producir sonidos o comunicación.",
    clasificacion: ["Ornithopoda", "Hadrosauridae", "Dinosauria", "Herbívoro"]
  },
  {
    id: 15,
    nombre: "Iguanodon",
    cientifico: "Iguanodon bernissartensis",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico temprano (126–122 Ma)",
    dieta: "Herbívoro",
    tamaño: "10 m de largo",
    peso: "3.500–5.000 kg",
    habitat: "Bosques y llanuras",
    lugarFosil: "Bernissart, Bélgica",
    añoDescubrimiento: 1825,
    cientifico2: "Gideon Mantell",
    descripcion: "Uno de los primeros dinosaurios descubiertos. Tenía un pulgar en forma de espina que posiblemente utilizaba para defensa.",
    clasificacion: ["Ornithopoda", "Iguanodontidae", "Dinosauria", "Herbívoro"]
  },
  {
    id: 16,
    nombre: "Compsognathus",
    cientifico: "Compsognathus longipes",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Jurásico tardío (155-150 Ma)",
    dieta: "Carnívoro",
    tamaño: "1,05 m de largo",
    peso: "3 kg",
    habitat: "Zonas costeras, lagunas y playas cálidas",
    lugarFosil: "Solnhofen, Alemania",
    añoDescubrimiento: 1859,
    cientifico2: "Johann A. Wagner",
    descripcion: "Pequeño dinosaurio terópodo carnívoro, uno de los dinosaurios más pequeños conocidos. Probablemente cazaba pequeños lagartos y mamíferos.",
    clasificacion: ["Theropoda", "Compsognathidae", "Dinosauria", "Carnívoro"]
  },
  {
    id: 17,
    nombre: "Argentinosaurus",
    cientifico: "Argentinosaurus huinculensis",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico tardío (97-94 Ma)",
    dieta: "Herbívoro",
    tamaño: "30-35 m de largo",
    peso: "70.000-100.000 kg",
    habitat: "Llanuras con vegetación y zonas cercanas a ríos",
    lugarFosil: "Neuquén, Patagonia, Argentina",
    añoDescubrimiento: 1987,
    cientifico2: "Guillermo Heredia",
    descripcion: "Gigantesco dinosaurio saurópodo considerado uno de los animales terrestres más grandes que han existido. Vivía en grandes llanuras del Cretácico.",
    clasificacion: ["Sauropoda", "Titanosauria", "Dinosauria", "Herbívoro"]
  },
  {
    id: 18,
    nombre: "Mosasaurus",
    cientifico: "Mosasaurus hoffmannii",
    emoji: "🦎",
    estado: "extinto",
    periodo: "Cretácico tardío (70–66 Ma)",
    dieta: "Carnívoro",
    tamaño: "15–18 m de largo",
    peso: "15.000 kg",
    habitat: "Océanos cálidos",
    lugarFosil: "Maastricht, Países Bajos",
    añoDescubrimiento: 1764,
    cientifico2: "Trabajadores de cantera cerca del río Mosa",
    descripcion: "Gran reptil marino depredador con cuerpo alargado, cola potente y fuertes mandíbulas con dientes afilados.",
    clasificacion: ["Squamata", "Mosasauridae", "Reptilia", "Carnívoro"]
  },
  {
    id: 19,
    nombre: "Deinonychus",
    cientifico: "Deinonychus antirrhopus",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Cretácico temprano (115–108 Ma)",
    dieta: "Carnívoro",
    tamaño: "3,4 m de largo",
    peso: "70–100 kg",
    habitat: "Bosques y llanuras",
    lugarFosil: "Montana, EE.UU.",
    añoDescubrimiento: 1964,
    cientifico2: "John Ostrom",
    descripcion: "Dinosaurio terópodo ágil con una gran garra curva en el pie utilizada para cazar. Su descubrimiento revolucionó la visión de los dinosaurios como animales lentos.",
    clasificacion: ["Theropoda", "Dromaeosauridae", "Dinosauria", "Carnívoro"]
  },
  {
    id: 20,
    nombre: "Plesiosaurus",
    cientifico: "Plesiosaurus dolichodeirus",
    emoji: "🦎",
    estado: "extinto",
    periodo: "Jurásico temprano (201–175 Ma)",
    dieta: "Carnívoro",
    tamaño: "3–5 m de largo",
    peso: "450 kg",
    habitat: "Océanos",
    lugarFosil: "Inglaterra",
    añoDescubrimiento: 1823,
    cientifico2: "Mary Anning",
    descripcion: "Reptil marino con cuello muy largo, cabeza pequeña y cuatro grandes aletas para nadar. Inspiró la leyenda del monstruo del Lago Ness.",
    clasificacion: ["Plesiosauria", "Sauropterygia", "Reptilia", "Carnívoro"]
  },
  {
    id: 21,
    nombre: "Dimetrodon",
    cientifico: "Dimetrodon grandis",
    emoji: "🦎",
    estado: "extinto",
    periodo: "Pérmico temprano (295–272 Ma)",
    dieta: "Carnívoro",
    tamaño: "3 m de largo",
    peso: "250 kg",
    habitat: "Zonas pantanosas",
    lugarFosil: "Texas, EE.UU.",
    añoDescubrimiento: 1878,
    cientifico2: "Edward Drinker Cope",
    descripcion: "Animal con una gran vela dorsal formada por espinas vertebrales, probablemente usada para regular la temperatura corporal. No era un dinosaurio sino un sinápsido, más emparentado con los mamíferos.",
    clasificacion: ["Synapsida", "Sphenacodontidae", "Carnívoro"]
  },
  {
    id: 22,
    nombre: "Dodo",
    cientifico: "Raphus cucullatus",
    emoji: "🦤",
    estado: "extinto",
    periodo: "Holoceno (extinto en el siglo XVII)",
    dieta: "Omnívoro",
    tamaño: "1 m de alto",
    peso: "10–18 kg",
    habitat: "Bosques tropicales",
    lugarFosil: "Isla Mauricio",
    añoDescubrimiento: 1598,
    cientifico2: "Marineros neerlandeses",
    descripcion: "Ave no voladora que se extinguió poco después de la llegada de los humanos a su isla. Se convirtió en símbolo de la extinción causada por el ser humano.",
    clasificacion: ["Aves", "Columbiformes", "Raphidae", "Omnívoro"]
  },
  {
    id: 23,
    nombre: "Elefante africano",
    cientifico: "Loxodonta africana",
    emoji: "🐘",
    estado: "viviente",
    periodo: "Actual (Holoceno)",
    dieta: "Herbívoro",
    tamaño: "6–7 m de largo",
    peso: "4.000–7.000 kg",
    habitat: "Sabana africana",
    lugarFosil: "África",
    añoDescubrimiento: 1758,
    cientifico2: "Carl Linnaeus",
    descripcion: "El animal terrestre más grande que vive actualmente. Pariente vivo del mamut lanudo.",
    clasificacion: ["Mammalia", "Proboscidea", "Elephantidae", "Herbívoro"]
  },
  {
    id: 24,
    nombre: "Jirafa",
    cientifico: "Giraffa camelopardalis",
    emoji: "🦒",
    estado: "viviente",
    periodo: "Actual (Holoceno)",
    dieta: "Herbívoro",
    tamaño: "5–6 m de largo",
    peso: "800–1.200 kg",
    habitat: "Sabana africana",
    lugarFosil: "África",
    añoDescubrimiento: 1758,
    cientifico2: "Carl Linnaeus",
    descripcion: "El animal terrestre más alto del mundo, conocido por su largo cuello y manchas características.",
    clasificacion: ["Mammalia", "Artiodactyla", "Giraffidae", "Herbívoro"]
  },
  {
    id: 25,
    nombre: "León",
    cientifico: "Panthera leo",
    emoji: "🦁",
    estado: "viviente",
    periodo: "Actual (Holoceno)",
    dieta: "Carnívoro",
    tamaño: "2–3,3 m de largo",
    peso: "150–250 kg",
    habitat: "Sabana y praderas",
    lugarFosil: "África",
    añoDescubrimiento: 1758,
    cientifico2: "Carl Linnaeus",
    descripcion: "Gran felino social que vive en grupos llamados manadas y es uno de los principales depredadores de África.",
    clasificacion: ["Mammalia", "Carnivora", "Felidae", "Carnívoro"]
  },
  {
    id: 26,
    nombre: "Cocodrilo del Nilo",
    cientifico: "Crocodylus niloticus",
    emoji: "🐊",
    estado: "viviente",
    periodo: "Actual (Holoceno)",
    dieta: "Carnívoro",
    tamaño: "4–5 m de largo",
    peso: "500–750 kg",
    habitat: "Ríos y lagos",
    lugarFosil: "África",
    añoDescubrimiento: 1768,
    cientifico2: "Josephus Laurenti",
    descripcion: "Gran reptil semiacuático con fuertes mandíbulas. Lleva prácticamente sin cambiar desde el Cretácico.",
    clasificacion: ["Reptilia", "Crocodylia", "Crocodylidae", "Carnívoro"]
  },
  {
    id: 27,
    nombre: "Pingüino emperador",
    cientifico: "Aptenodytes forsteri",
    emoji: "🐧",
    estado: "viviente",
    periodo: "Actual (Holoceno)",
    dieta: "Carnívoro",
    tamaño: "1,1 m de alto",
    peso: "22–45 kg",
    habitat: "Antártida",
    lugarFosil: "Antártida",
    añoDescubrimiento: 1844,
    cientifico2: "George Robert Gray",
    descripcion: "El pingüino más grande del mundo, adaptado a temperaturas extremadamente frías. Incuba los huevos en pleno invierno antártico.",
    clasificacion: ["Aves", "Sphenisciformes", "Spheniscidae", "Carnívoro"]
  },
  {
    id: 28,
    nombre: "Carnotaurus",
    cientifico: "Carnotaurus sastrei",
    emoji: "🦖",
    estado: "extinto",
    periodo: "Cretácico tardío (72–69 Ma)",
    dieta: "Carnívoro",
    tamaño: "7,5–8 m de largo",
    peso: "1.500–2.000 kg",
    habitat: "Llanuras y bosques de América del Sur",
    lugarFosil: "Chubut, Patagonia, Argentina",
    añoDescubrimiento: 1984,
    cientifico2: "José Bonaparte",
    descripcion: "Terópodo único con dos cuernos sobre los ojos, el único dinosaurio carnívoro conocido con esta característica. Tenía brazos extremadamente reducidos, incluso más que el T. rex.",
    clasificacion: ["Theropoda", "Abelisauridae", "Dinosauria", "Carnívoro"]
  },
  {
    id: 29,
    nombre: "Therizinosaurus",
    cientifico: "Therizinosaurus cheloniformis",
    emoji: "🦕",
    estado: "extinto",
    periodo: "Cretácico tardío (70–66 Ma)",
    dieta: "Herbívoro",
    tamaño: "9–10 m de largo",
    peso: "3.000–5.000 kg",
    habitat: "Bosques y zonas con vegetación densa de Asia",
    lugarFosil: "Desierto del Gobi, Mongolia",
    añoDescubrimiento: 1948,
    cientifico2: "Evgeny Maleev",
    descripcion: "Dinosaurio terópodo herbívoro con las garras más largas conocidas: hasta 1 metro. Pese a pertenecer al grupo de los carnívoros, evolucionó hacia una dieta de plantas.",
    clasificacion: ["Theropoda", "Therizinosauria", "Dinosauria", "Herbívoro"]
  },
  {
    id: 30,
    nombre: "Ichthyosaurus",
    cientifico: "Ichthyosaurus communis",
    emoji: "🐬",
    estado: "extinto",
    periodo: "Jurásico temprano (200–190 Ma)",
    dieta: "Carnívoro",
    tamaño: "2–3,5 m de largo",
    peso: "90–200 kg",
    habitat: "Océanos del Jurásico temprano",
    lugarFosil: "Dorset, Inglaterra",
    añoDescubrimiento: 1821,
    cientifico2: "Mary Anning",
    descripcion: "Reptil marino con forma similar a un delfín moderno, resultado de la evolución convergente. Mary Anning descubrió el primer esqueleto completo en Lyme Regis con solo 12 años.",
    clasificacion: ["Reptilia", "Ichthyosauria", "Carnívoro"]
  },
  {
    id: 31,
    nombre: "Pteranodon",
    cientifico: "Pteranodon longiceps",
    emoji: "🦅",
    estado: "extinto",
    periodo: "Cretácico tardío (86–84 Ma)",
    dieta: "Piscívoro",
    tamaño: "Envergadura de 6–7 m",
    peso: "20–25 kg",
    habitat: "Costas y mares interiores de América del Norte",
    lugarFosil: "Kansas, EE.UU.",
    añoDescubrimiento: 1876,
    cientifico2: "Othniel Charles Marsh",
    descripcion: "El pterosaurio más conocido, con una gran cresta ósea en la cabeza y sin dientes. Planeaba sobre el Mar de Niobrara cazando peces, similar a las fragatas actuales.",
    clasificacion: ["Pterosauria", "Pteranodontidae", "Piscívoro"]
  },
  {
    id: 32,
    nombre: "Smilodon",
    cientifico: "Smilodon fatalis",
    emoji: "🐆",
    estado: "extinto",
    periodo: "Pleistoceno (2,5 Ma – 10.000 a.C.)",
    dieta: "Carnívoro",
    tamaño: "1,7–2,5 m de largo",
    peso: "160–280 kg",
    habitat: "Praderas y bosques de América",
    lugarFosil: "La Brea, California, EE.UU.",
    añoDescubrimiento: 1842,
    cientifico2: "Peter Wilhelm Lund",
    descripcion: "El felino dientes de sable más famoso. Sus caninos superiores medían hasta 28 cm. Miles de especímenes han sido recuperados de los pozos de alquitrán de La Brea en Los Ángeles.",
    clasificacion: ["Mammalia", "Carnivora", "Felidae", "Carnívoro"]
  }
];

// ============================================
// NOTICIAS
// ============================================

const NOTICIAS = [
  {
    id: 1,
    titulo: "Nuevo titanosaurio hallado en Argentina con 98% del esqueleto intacto",
    fecha: "Enero 2025",
    fuente: "Nature",
    url: "https://www.nature.com",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Argentinosaurus_BW.jpg/480px-Argentinosaurus_BW.jpg",
    resumen: "Paleontólogos de Neuquén han desenterrado uno de los saurópodos más completos jamás encontrados, con escamas de piel preservadas."
  },
  {
    id: 2,
    titulo: "El ADN más antiguo del mundo: 2 millones de años en el permafrost",
    fecha: "Diciembre 2024",
    fuente: "Nature",
    url: "https://www.nature.com/articles/s41586-022-05453-y",
    categoria: "ciencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woolly_mammoth_model_Royal_BC_Museum_in_Victoria.jpg/480px-Woolly_mammoth_model_Royal_BC_Museum_in_Victoria.jpg",
    resumen: "Científicos han secuenciado fragmentos genéticos de mamíferos extintos del Ártico, batiendo todos los récords anteriores de preservación de ADN antiguo."
  },
  {
    id: 3,
    titulo: "Patagotitan mayorum: el dinosaurio más grande del mundo tiene nueva medida oficial",
    fecha: "Agosto 2024",
    fuente: "PLOS ONE",
    url: "https://journals.plos.org/plosone/",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Patagotitan_mayorum_001.jpg/480px-Patagotitan_mayorum_001.jpg",
    resumen: "Un nuevo estudio revisó los huesos del titanosaurio argentino y confirmó 37 metros de longitud y 70 toneladas de peso, convirtiéndolo oficialmente en el animal terrestre más grande conocido."
  },
  {
    id: 4,
    titulo: "Descubren en China un dinosaurio con plumas de colores iridiscentes",
    fecha: "Junio 2024",
    fuente: "Science",
    url: "https://www.science.org",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Microraptor_gui_holotype.jpg/480px-Microraptor_gui_holotype.jpg",
    resumen: "Análisis de melanosomas en fósiles de Liaoning revelan que algunos dinosaurios emplumados del Cretácico tenían plumaje metálico similar al de los colibríes modernos."
  },
  {
    id: 5,
    titulo: "El Spinosaurus era más acuático de lo que se pensaba, confirma nuevo estudio",
    fecha: "Mayo 2024",
    fuente: "Nature",
    url: "https://www.nature.com/articles/s41586-020-2190-3",
    categoria: "ciencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Spinosaurus_Update_%28Steveoc_86%29.jpg/480px-Spinosaurus_Update_%28Steveoc_86%29.jpg",
    resumen: "Análisis de isótopos en los dientes del Spinosaurus confirman que pasaba la mayor parte de su vida dentro del agua, siendo el único dinosaurio semiacuático conocido."
  },
  {
    id: 6,
    titulo: "Fósil de Archaeopteryx revela que podía volar activamente",
    fecha: "Marzo 2024",
    fuente: "Nature Communications",
    url: "https://www.nature.com/ncomms/",
    categoria: "ciencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Archaeopteryx_lithographica_%28Berlin_specimen%29.jpg/480px-Archaeopteryx_lithographica_%28Berlin_specimen%29.jpg",
    resumen: "Tomografías computarizadas del espécimen de Berlín demuestran que el Archaeopteryx tenía las adaptaciones cerebrales necesarias para el vuelo activo, no solo el planeo."
  },
  {
    id: 7,
    titulo: "Hallan huellas de dinosaurios en el techo de una mina en Bolivia",
    fecha: "Febrero 2024",
    fuente: "BBC Science",
    url: "https://www.bbc.com/news/science-environment",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dinosaur_footprints_trackway.jpg/480px-Dinosaur_footprints_trackway.jpg",
    resumen: "Más de 5.000 huellas de dinosaurios del Cretácico tardío, incluyendo titanosaurios y terópodos, fueron documentadas en una pared vertical de 80 metros en Cal Orcko, Bolivia."
  },
  {
    id: 8,
    titulo: "Nuevo estudio reconstruye el color del T. rex: probablemente era marrón con manchas",
    fecha: "Enero 2024",
    fuente: "Current Biology",
    url: "https://www.cell.com/current-biology/home",
    categoria: "ciencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tyrannosaurus_rex_mmartyniuk_wiki.png/480px-Tyrannosaurus_rex_mmartyniuk_wiki.png",
    resumen: "Análisis de melanosomas en parientes cercanos del T. rex sugieren que este gran depredador tenía coloración críptica parda con marcas, no la piel gris escamosa de las películas."
  },
  {
    id: 9,
    titulo: "Desenterrado en Marruecos el cefalópodo más grande del Cámbrico",
    fecha: "Noviembre 2023",
    fuente: "Science Advances",
    url: "https://www.science.org/journal/sciadv",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Burgess_shale_anomalocaris.jpg/480px-Burgess_shale_anomalocaris.jpg",
    resumen: "Un nuevo espécimen de Anomalocaris de 50 cm de longitud hallado en el Anti-Atlas marroquí es el más grande y mejor preservado del período Cámbrico conocido hasta la fecha."
  },
  {
    id: 10,
    titulo: "Científicos clavan la fecha exacta del impacto de Chicxulub: primavera boreal",
    fecha: "Octubre 2023",
    fuente: "Nature",
    url: "https://www.nature.com",
    categoria: "ciencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Chicxulub_impact.jpg/480px-Chicxulub_impact.jpg",
    resumen: "Análisis de líneas de crecimiento en huesos de peces fosilizados en el sitio de Tanis (Dakota del Norte) indica que el asteroide impactó en primavera del hemisferio norte, hace 66 millones de años."
  },
  {
    id: 11,
    titulo: "El primer dinosaurio de Somalia identificado: un saurópodo jurásico",
    fecha: "Septiembre 2023",
    fuente: "PeerJ",
    url: "https://peerj.com",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Giraffatitan_brancai_mounted_NHM_Berlin.jpg/480px-Giraffatitan_brancai_mounted_NHM_Berlin.jpg",
    resumen: "Vértebras halladas en depósitos jurásicos del norte de Somalia fueron descritas como pertenecientes a un nuevo saurópodo, el primer dinosaurio registrado en ese país."
  },
  {
    id: 12,
    titulo: "Proyecto de desextinción del mamut lanudo entra en fase de pruebas en 2026",
    fecha: "Agosto 2023",
    fuente: "Colossal Biosciences",
    url: "https://colossal.com",
    categoria: "ciencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woolly_mammoth_model_Royal_BC_Museum_in_Victoria.jpg/480px-Woolly_mammoth_model_Royal_BC_Museum_in_Victoria.jpg",
    resumen: "La empresa Colossal Biosciences anuncia que sus elefantes asiáticos modificados genéticamente con características del mamut lanudo entrarán en fase de gestación experimental a partir de 2026."
  },
  {
    id: 13,
    titulo: "Descubierto en España un yacimiento del Jurásico con 30 dinosaurios",
    fecha: "Julio 2023",
    fuente: "El País Ciencia",
    url: "https://elpais.com/ciencia/",
    categoria: "descubrimiento",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Morrison_Formation_layers.jpg/480px-Morrison_Formation_layers.jpg",
    resumen: "En Teruel, el yacimiento de Riodeva amplía su catálogo con nuevos restos de al menos seis especies distintas, consolidando la región como uno de los mayores tesoros paleontológicos de Europa."
  },
  {
    id: 14,
    titulo: "Los saurópodos usaban el cuello de forma lateral, no vertical",
    fecha: "Noviembre 2024",
    categoria: "curiosidad",
    resumen: "Un nuevo estudio biomecánico sugiere que los dinosaurios de cuello largo alcanzaban vegetación a los lados, no en lo alto de los árboles como se creía.",
    fuente: null
    },
    {
    id: 15,
    titulo: "Fósiles de tiburón de 6 metros del Oligoceno hallados en Marruecos",
    fecha: "Octubre 2024",
    categoria: "descubrimiento",
    resumen: "La nueva especie llena un hueco evolutivo entre los tiburones blancos modernos y sus parientes extintos del Eoceno.",
    fuente: null
    },
    {
      id: 16,
      titulo: "Reconstruyen el color de un pterosaurio por primera vez",
      fecha: "Septiembre 2024",
      categoria: "ciencia",
      resumen: "Melanosomas en fósiles de Tupuxuara revelan una coloración rojiza en la cresta, posiblemente usada para señalización visual entre individuos.",
      fuente: null
    },
    {
      id: 17,
      titulo: "¿Por qué los insectos del Carbonífero eran gigantes?",
      fecha: "Agosto 2024",
      categoria: "curiosidad",
      resumen: "Con un 35% de oxígeno atmosférico, los insectos podían crecer sin límite. Las libélulas llegaban a 70 cm de envergadura.",
      fuente: null
    },
    {
      id: 18,
      titulo: "Koleken inakayali: el nuevo carnívoro patagónico con brazos aún más cortos que el T. rex",
      fecha: "Mayo 2024",
      categoria: "descubrimiento",
      resumen: "Descubierto en la Formación La Colonia de Argentina, este abelisáurido es una especie completamente nueva. Sus extremidades anteriores apenas sobresalían del cuerpo, incluso menos que las del tiranosaurio.",
      fuente: "https://www.nationalgeographic.com/premium/article/new-carnivorous-dinosaur-patagonia-argentina"
    },
    {
      id: 19,
      titulo: "Titanomachya gimenezi: el titanosaurio enano del fin del Cretácico",
      fecha: "Abril 2024",
      categoria: "descubrimiento",
      resumen: "Hallado en Patagonia, este saurópodo sorprendentemente pequeño podría haber reducido su tamaño para adaptarse a la reducción de tierra firme por la transgresión del océano Atlántico.",
      fuente: "https://www.nationalgeographic.com/science/article/new-dinosaur-titanosaur-patagonia-fossils"
    },
    {
      id: 20,
      titulo: "Fona herzogae: el dinosaurio que cavaba su propia madriguera",
      fecha: "Julio 2024",
      categoria: "descubrimiento",
      resumen: "Este herbívoro del Cretácico de Utah vivía en madrigueras subterráneas. Gracias a ese hábito, sus fósiles se conservaron en cantidad inusual: varios esqueletos completos en la misma capa rocosa.",
      fuente: "https://www.nationalgeographic.com/science/article/dinosaur-burrow-fossil-new-species"
    },
    {
      id: 21,
      titulo: "Spinosaurus mirabilis: nueva especie del depredador más largo de la historia",
      fecha: "Febrero 2025",
      categoria: "descubrimiento",
      resumen: "Una cresta ósea en forma de cimitarra encontrada en Níger pertenece a una especie completamente nueva de Spinosaurus. El animal superaba los 15 metros de longitud y habitaba ecosistemas fluviales hace 95 millones de años.",
      fuente: "https://www.nationalgeographic.com/science/article/spinosaurus-scimitar-head-crest"
    },
    {
      id: 22,
      titulo: "Chadititan calvoi: un nuevo titanosaurio de 78 millones de años en Patagonia",
      fecha: "Marzo 2025",
      categoria: "descubrimiento",
      resumen: "Descubierto en una cantera de Neuquén junto a más de 400 fósiles de tortugas, peces y cocodrilos, este titanosaurio de 7 metros arroja nueva luz sobre la biodiversidad del Cretácico tardío en el hemisferio sur.",
      fuente: "https://www.nationalgeographic.com/science/article/new-titanosaur-dinosaur-fossils-patagonia"
    },
    {
      id: 23,
      titulo: "Confirmado: Nanotyrannus era una especie real, no un T. rex joven",
      fecha: "Enero 2026",
      categoria: "ciencia",
      resumen: "Después de 40 años de debate, una nueva investigación aporta la evidencia más sólida hasta la fecha de que Nanotyrannus lancensis era una especie independiente de tiranosáurido y no simplemente un Tyrannosaurus rex juvenil.",
      fuente: "https://www.nationalgeographic.com/history/article/dead-world-nanotyrannus-video"
    },
    {
      id: 24,
      titulo: "Se descubren más de 50 nuevas especies de dinosaurio al año — y el ritmo no para",
      fecha: "2024",
      categoria: "curiosidad",
      resumen: "Gracias a la apertura de países como China, Argentina y Mongolia a la paleontología, el ritmo de descubrimientos no tiene precedentes: una especie nueva cada semana de media.",
      fuente: "https://www.nationalgeographic.com/science/article/why-now-is-the-best-time-ever-for-dinosaur-discoveries"
    },  
    {
      id: 14,
      titulo: "Descubren en Argentina un dinosaurio con piel preservada en 3D",
      fecha: "Febrero 2025",
      fuente: "Nature",
      url: "https://www.nature.com",
      categoria: "descubrimiento",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Argentinosaurus_BW.jpg/480px-Argentinosaurus_BW.jpg",
      resumen: "Un hadrosáurido del Cretácico tardío hallado en Neuquén presenta impresiones de piel tridimensionales que revelan patrones de escamas nunca vistos antes en dinosaurios sudamericanos."
    },
    {
      id: 15,
      titulo: "El Mosasaurus tenía aletas caudales similares a los tiburones, confirma nuevo fósil",
      fecha: "Febrero 2025",
      fuente: "Science Advances",
      url: "https://www.science.org/journal/sciadv",
      categoria: "ciencia",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mosasaur_BW.jpg/480px-Mosasaur_BW.jpg",
      resumen: "Un espécimen excepcionalmente bien preservado de Platecarpus hallado en Kansas muestra tejidos blandos que confirman que los mosasaurios tenían una aleta caudal bilobulada, haciéndolos nadadores mucho más eficientes de lo que se creía."
    },
    {
      id: 16,
      titulo: "Huellas de dinosaurios del Cretácico emergen en Texas tras sequía extrema",
      fecha: "Enero 2025",
      fuente: "BBC Science",
      url: "https://www.bbc.com/news/science-environment",
      categoria: "descubrimiento",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dinosaur_footprints_trackway.jpg/480px-Dinosaur_footprints_trackway.jpg",
      resumen: "La bajada extrema del nivel del río Paluxy en el Parque Estatal Dinosaur Valley expuso más de 60 huellas de Acrocanthosaurus y saurópodos que llevaban décadas sumergidas bajo el agua."
    },
    {
      id: 17,
      titulo: "Nuevo estudio revela que el Triceratops y el Torosaurus eran la misma especie",
      fecha: "Diciembre 2024",
      fuente: "Journal of Vertebrate Paleontology",
      url: "https://www.tandfonline.com/journals/ujvp20",
      categoria: "ciencia",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Triceratops_liveDB.jpg/480px-Triceratops_liveDB.jpg",
      resumen: "Un análisis de 50 cráneos confirma que el Torosaurus no es una especie distinta sino un Triceratops adulto maduro cuya gola ósea se transformaba con la edad, reabriendo uno de los debates más polémicos de la paleontología."
    },
    {
      id: 18,
      titulo: "Hallan en Marruecos el trilobite más grande jamás descubierto: 45 cm",
      fecha: "Noviembre 2024",
      fuente: "Scientific Reports",
      url: "https://www.nature.com/srep/",
      categoria: "descubrimiento",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Trilobite_Paradoxides.jpg/480px-Trilobite_Paradoxides.jpg",
      resumen: "Un ejemplar de Paradoxides destouches hallado en el Anti-Atlas marroquí mide 45 centímetros de longitud, convirtiéndose en el trilobite más grande conocido del registro fósil del Cámbrico."
    },
    {
      id: 19,
      titulo: "El Velociraptor cazaba de noche, sugieren nuevos análisis de sus órbitas oculares",
      fecha: "Octubre 2024",
      fuente: "PLOS ONE",
      url: "https://journals.plos.org/plosone/",
      categoria: "ciencia",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Velociraptor_dinoguy2.jpg/480px-Velociraptor_dinoguy2.jpg",
      resumen: "Mediciones de las cavidades orbitales de dromaeosáuridos indican que el Velociraptor y sus parientes tenían ojos grandes adaptados a la visión nocturna, lo que sugiere que eran depredadores crepusculares o nocturnos."
    },
    {
      id: 20,
      titulo: "Descubierto en España el cocodrilo terrestre del Jurásico más completo de Europa",
      fecha: "Septiembre 2024",
      fuente: "Palaeontologia Electronica",
      url: "https://palaeo-electronica.org",
      categoria: "descubrimiento",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Morrison_Formation_layers.jpg/480px-Morrison_Formation_layers.jpg",
      resumen: "Investigadores del CSIC describen un nuevo cocodrilomorfo terrestre del Jurásico tardío hallado en Teruel con el 80% del esqueleto completo, el más completo de este tipo encontrado en Europa hasta la fecha."
    },
    {
      id: 21,
      titulo: "El Smilodon no rugía: tenía vocalizaciones similares a los felinos modernos",
      fecha: "Agosto 2024",
      fuente: "Current Biology",
      url: "https://www.cell.com/current-biology/home",
      categoria: "ciencia",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Smilodon_fatalis_Sergiodlarosa.jpg/480px-Smilodon_fatalis_Sergiodlarosa.jpg",
      resumen: "Análisis del hueso hioides de Smilodon fatalis indica que carecía de la anatomía necesaria para rugir como leones y tigres, produciendo en cambio sonidos más similares a los guepardos o pumas actuales."
    },
    {
      id: 22,
      titulo: "Nuevo pterosaurio gigante descubierto en Chile con envergadura de 7 metros",
      fecha: "Julio 2024",
      fuente: "Nature Communications",
      url: "https://www.nature.com/ncomms/",
      categoria: "descubrimiento",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pteranodon_longiceps_mmartyniuk_wiki.png/480px-Pteranodon_longiceps_mmartyniuk_wiki.png",
      resumen: "Fragmentos de huesos hallados en la Formación Quebrada Morada de Chile corresponden a un pterosaurio azdárquido del Cretácico tardío con una envergadura estimada de 7 metros, el mayor encontrado en Sudamérica."
    },
    {
      id: 23,
      titulo: "El Carnotaurus podía correr a 48 km/h, el dinosaurio carnívoro más rápido conocido",
      fecha: "Junio 2024",
      fuente: "PLOS ONE",
      url: "https://journals.plos.org/plosone/",
      categoria: "ciencia",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carnotaurus_DB.jpg/480px-Carnotaurus_DB.jpg",
      resumen: "Un modelo biomecánico basado en la musculatura de la cola del Carnotaurus sastrei sugiere que este abelisáurido podía alcanzar velocidades de hasta 48 km/h, siendo el dinosaurio carnívoro grande más veloz conocido hasta la fecha."
    }
];

// ============================================
// YACIMIENTOS
// ============================================

const YACIMIENTOS = [
  {
    id: 1,
    nombre: "Hell Creek Formation",
    pais: "🇺🇸 Montana, EE.UU.",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 47.3, lng: -106.5,
    emoji: "🦖",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hell_Creek_Badlands.jpg/640px-Hell_Creek_Badlands.jpg",
    desc: "Uno de los yacimientos más famosos del mundo. Datado en 66-68 Ma, preserva la fauna del final del Cretácico justo antes del impacto del asteroide.",
    hallazgos: [
      { e: "🦖", t: "Tyrannosaurus rex — múltiples especímenes completos" },
      { e: "🦕", t: "Triceratops horridus — cráneo y esqueleto completo" },
      { e: "🦕", t: "Edmontosaurus — hadrosauro gigante" },
      { e: "🦴", t: "Ankylosaurus magniventris" }
    ],
    link: "https://en.wikipedia.org/wiki/Hell_Creek_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 2,
    nombre: "Solnhofen Limestone",
    pais: "🇩🇪 Baviera, Alemania",
    era: "Jurásico",
    color: "#2a9a40",
    lat: 48.9, lng: 11.0,
    emoji: "🐦",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Archaeopteryx_lithographica_%28Berlin_specimen%29.jpg/480px-Archaeopteryx_lithographica_%28Berlin_specimen%29.jpg",
    desc: "Calizas de aguas poco profundas del Jurásico tardío (~150 Ma). La excepcional preservación permite ver impresiones de plumas y tejidos blandos.",
    hallazgos: [
      { e: "🐦", t: "Archaeopteryx lithographica — el fósil más famoso del mundo" },
      { e: "🦅", t: "Rhamphorhynchus — pterosaurio con cola larga" },
      { e: "🐟", t: "Peces y medusas preservados en detalle" },
      { e: "🦎", t: "Compsognathus longipes — dinosaurio pequeño" }
    ],
    link: "https://en.wikipedia.org/wiki/Solnhofen_Limestone",
    linkText: "Wikipedia"
  },
  {
    id: 3,
    nombre: "Burgess Shale",
    pais: "🇨🇦 Columbia Británica, Canadá",
    era: "Paleozoico",
    color: "#c8a030",
    lat: 51.4, lng: -116.5,
    emoji: "🦐",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Burgess_shale_anomalocaris.jpg/480px-Burgess_shale_anomalocaris.jpg",
    desc: "Patrimonio Mundial UNESCO. Pizarras del Cámbrico Medio (~508 Ma) con preservación extraordinaria de tejidos blandos. Ventana única a la Explosión Cámbrica.",
    hallazgos: [
      { e: "🦑", t: "Anomalocaris — mayor depredador del Cámbrico" },
      { e: "🐌", t: "Hallucigenia — criatura con espinas en la espalda" },
      { e: "👁️", t: "Opabinia — 5 ojos y garra frontal" },
      { e: "🦀", t: "Marrella splendens — el fósil más abundante del sitio" }
    ],
    link: "https://www.pc.gc.ca/en/lhn-nhs/bc/burgess",
    linkText: "Parks Canada"
  },
  {
    id: 4,
    nombre: "Gobi Desert — Flaming Cliffs",
    pais: "🇲🇳 Ömnögovi, Mongolia",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 44.1, lng: 100.5,
    emoji: "🥚",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bayanzag_Flaming_Cliffs.jpg/640px-Bayanzag_Flaming_Cliffs.jpg",
    desc: "Bayanzag — los Acantilados en Llamas. Roy Chapman Andrews descubrió aquí los primeros nidos de huevos de dinosaurio en 1923. Formación Djadokhta, 75 Ma.",
    hallazgos: [
      { e: "🥚", t: "Primeros nidos de huevos de dinosaurio descubiertos" },
      { e: "🦖", t: "Velociraptor mongoliensis — espécimen original" },
      { e: "🦕", t: "Protoceratops — ceratópsido primitivo abundante" },
      { e: "🦴", t: "Oviraptor philoceratops" }
    ],
    link: "https://en.wikipedia.org/wiki/Flaming_Cliffs",
    linkText: "Wikipedia"
  },
  {
    id: 5,
    nombre: "Liaoning Formation",
    pais: "🇨🇳 Liaoning, China",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 41.5, lng: 120.8,
    emoji: "🐦",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Microraptor_gui_holotype.jpg/480px-Microraptor_gui_holotype.jpg",
    desc: "Yacimientos del Cretácico inferior (~130 Ma) con preservación excepcional de plumas. Revolucionó la comprensión de la evolución de las aves desde los dinosaurios.",
    hallazgos: [
      { e: "🐦", t: "Microraptor gui — dinosaurio con 4 alas emplumadas" },
      { e: "🦖", t: "Sinosauropteryx — primer dinosaurio con plumas confirmadas" },
      { e: "🌸", t: "Archaefructus — primera planta con flores" },
      { e: "🦎", t: "Psittacosaurus — ceratópsido primitivo" }
    ],
    link: "https://en.wikipedia.org/wiki/Yixian_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 6,
    nombre: "Morrison Formation",
    pais: "🇺🇸 Wyoming/Colorado, EE.UU.",
    era: "Jurásico",
    color: "#2a9a40",
    lat: 41.8, lng: -108.5,
    emoji: "🦕",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Morrison_Formation_layers.jpg/640px-Morrison_Formation_layers.jpg",
    desc: "La formación jurásica más productiva de Norteamérica. 150 Ma, se extiende por 13 estados. Fue el epicentro de la Bone Wars entre Cope y Marsh en el siglo XIX.",
    hallazgos: [
      { e: "🦕", t: "Diplodocus longus — saurópodo de 27m" },
      { e: "🦕", t: "Brachiosaurus altithorax — cuello de 9m de altura" },
      { e: "🦖", t: "Allosaurus fragilis — mayor depredador del Jurásico" },
      { e: "🦕", t: "Stegosaurus armatus" }
    ],
    link: "https://en.wikipedia.org/wiki/Morrison_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 7,
    nombre: "Tendaguru",
    pais: "🇹🇿 Lindi, Tanzania",
    era: "Jurásico",
    color: "#2a9a40",
    lat: -10.0, lng: 39.0,
    emoji: "🦕",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Giraffatitan_brancai_mounted_NHM_Berlin.jpg/480px-Giraffatitan_brancai_mounted_NHM_Berlin.jpg",
    desc: "El yacimiento jurásico más importante de África. Expediciones alemanas (1909-1913) extrajeron 225 toneladas de fósiles. El Giraffatitan del Museo de Berlín proviene de aquí.",
    hallazgos: [
      { e: "🦕", t: "Giraffatitan brancai — esqueleto completo en el Museum für Naturkunde" },
      { e: "🦕", t: "Dicraeosaurus hansemanni — saurópodo con espinas" },
      { e: "🦖", t: "Elaphrosaurus bambergi — terópodo esbelto" },
      { e: "🦴", t: "Kentrosaurus aethiopicus — estegosáurido africano" }
    ],
    link: "https://en.wikipedia.org/wiki/Tendaguru_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 8,
    nombre: "Ischigualasto (Valle de la Luna)",
    pais: "🇦🇷 San Juan, Argentina",
    era: "Triásico",
    color: "#c85030",
    lat: -29.9, lng: -67.9,
    emoji: "🦖",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ischigualasto_Valle_de_la_Luna.jpg/640px-Ischigualasto_Valle_de_la_Luna.jpg",
    desc: "Patrimonio Mundial UNESCO. Formación del Triásico tardío (~231 Ma) con algunos de los dinosaurios más primitivos conocidos. El yacimiento triásico más completo del mundo.",
    hallazgos: [
      { e: "🦖", t: "Eoraptor lunensis — uno de los primeros dinosaurios conocidos" },
      { e: "🦖", t: "Herrerasaurus ischigualastensis — dinosaurio carnívoro primitivo" },
      { e: "🦎", t: "Eodromaeus murphi — pequeño terópodo" },
      { e: "🦴", t: "Pisanosaurus mertii — primer ornitísquio" }
    ],
    link: "https://whc.unesco.org/en/list/966",
    linkText: "UNESCO"
  },
  {
    id: 9,
    nombre: "Messel Pit",
    pais: "🇩🇪 Hesse, Alemania",
    era: "Cenozoico",
    color: "#5a8aaa",
    lat: 49.9, lng: 8.75,
    emoji: "🐴",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Messel_pit_from_above.jpg/640px-Messel_pit_from_above.jpg",
    desc: "Patrimonio Mundial UNESCO. Antiguo lago volcánico del Eoceno (~47 Ma) con preservación excepcional. El contenido estomacal, piel y pelo de los animales están preservados.",
    hallazgos: [
      { e: "🐴", t: "Propalaeotherium — caballo primitivo del tamaño de un zorro" },
      { e: "🐍", t: "Messelophis variabilis — serpiente con patas vestigiales" },
      { e: "🦅", t: "Gastornis — ave gigante depredadora de 2m" },
      { e: "🦎", t: "Darwinius masillae — primate ancestral" }
    ],
    link: "https://whc.unesco.org/en/list/720",
    linkText: "UNESCO"
  },
  {
    id: 10,
    nombre: "Ediacara Hills",
    pais: "🇦🇺 Australia del Sur, Australia",
    era: "Paleozoico",
    color: "#c8a030",
    lat: -31.2, lng: 138.6,
    emoji: "🫧",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Dickinsonia_costata.jpg/480px-Dickinsonia_costata.jpg",
    desc: "El yacimiento que dio nombre al período Ediacárico (~550 Ma). Aquí se descubrieron los primeros organismos multicelulares complejos conocidos, la Biota de Ediacara.",
    hallazgos: [
      { e: "🫧", t: "Dickinsonia costata — organismo enigmático de hasta 1m" },
      { e: "🫧", t: "Charniodiscus — organismo similar a una hoja" },
      { e: "🫧", t: "Spriggina floundersi — posible ancestro de los artrópodos" },
      { e: "🫧", t: "Tribrachidium — organismo con simetría triple" }
    ],
    link: "https://en.wikipedia.org/wiki/Ediacara_Hills",
    linkText: "Wikipedia"
  },
  {
    id: 11,
    nombre: "La Brea Tar Pits",
    pais: "🇺🇸 California, EE.UU.",
    era: "Cenozoico",
    color: "#5a8aaa",
    lat: 34.06, lng: -118.36,
    emoji: "🐆",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/La_Brea_Tar_Pits_Lake_Pit.jpg/640px-La_Brea_Tar_Pits_Lake_Pit.jpg",
    desc: "Depósitos de alquitrán del Pleistoceno (10.000-50.000 años) en pleno Los Ángeles. Más de 3,5 millones de fósiles extraídos, incluida la mayor colección de megafauna del Pleistoceno.",
    hallazgos: [
      { e: "🐆", t: "Smilodon fatalis — diente de sable más completo del mundo" },
      { e: "🦁", t: "Panthera atrox — león americano extinto" },
      { e: "🦣", t: "Mammuthus columbi — mamut colombino" },
      { e: "🦅", t: "Teratornis merriami — ave voladora de 3,5m de envergadura" }
    ],
    link: "https://tarpits.org",
    linkText: "La Brea Tar Pits"
  },
  {
    id: 12,
    nombre: "Dinosaur Provincial Park",
    pais: "🇨🇦 Alberta, Canadá",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 50.75, lng: -111.5,
    emoji: "🦕",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dinosaur_Provincial_Park_hoodoos.jpg/640px-Dinosaur_Provincial_Park_hoodoos.jpg",
    desc: "Patrimonio Mundial UNESCO. Badlands de Alberta con la mayor concentración de fósiles del Cretácico tardío (~75 Ma). Más de 40 especies de dinosaurios identificadas.",
    hallazgos: [
      { e: "🦕", t: "Centrosaurus apertus — ceratópsido en manada" },
      { e: "🦖", t: "Gorgosaurus libratus — tiranosáurido" },
      { e: "🦴", t: "Corythosaurus casuarius — hadrosáurido con cresta" },
      { e: "🦕", t: "Styracosaurus albertensis" }
    ],
    link: "https://whc.unesco.org/en/list/71",
    linkText: "UNESCO"
  },
  {
    id: 13,
    nombre: "Chengjiang Biota",
    pais: "🇨🇳 Yunnan, China",
    era: "Paleozoico",
    color: "#c8a030",
    lat: 24.7, lng: 102.9,
    emoji: "🦑",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Chengjiang_fossil_site_maotianshan_shales.jpg/640px-Chengjiang_fossil_site_maotianshan_shales.jpg",
    desc: "Patrimonio Mundial UNESCO. Pizarras del Cámbrico Inferior (~520 Ma), 10 Ma más antiguo que Burgess Shale. Preserva la diversificación animal más temprana conocida.",
    hallazgos: [
      { e: "🐟", t: "Myllokunmingia — posible pez más primitivo conocido" },
      { e: "🦑", t: "Amplectobelua — pariente de Anomalocaris" },
      { e: "👁️", t: "Fuxianhuia — artrópodo primitivo con cerebro preservado" },
      { e: "🦴", t: "Haikouichthys — vertebrado más antiguo conocido" }
    ],
    link: "https://whc.unesco.org/en/list/1388",
    linkText: "UNESCO"
  },
  {
    id: 14,
    nombre: "Joggins Fossil Cliffs",
    pais: "🇨🇦 Nova Scotia, Canadá",
    era: "Paleozoico",
    color: "#c8a030",
    lat: 45.7, lng: -64.4,
    emoji: "🌳",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Joggins_Fossil_Cliffs.jpg/640px-Joggins_Fossil_Cliffs.jpg",
    desc: "Patrimonio Mundial UNESCO. Acantilados del Carbonífero (~310 Ma), el 'Carboniferous Rainforest'. Darwin los llamó el lugar más notable del mundo para la geología.",
    hallazgos: [
      { e: "🌳", t: "Lepidodendron — árbol de 30m preservado en posición vertical" },
      { e: "🦎", t: "Hylonomus lyelli — reptil más antiguo conocido" },
      { e: "🦟", t: "Arthropleura — ciempiés gigante de 2,5m" },
      { e: "🌿", t: "Bosque carbonífero completo in situ" }
    ],
    link: "https://whc.unesco.org/en/list/1285",
    linkText: "UNESCO"
  },
  {
    id: 15,
    nombre: "Patagonia — Neuquén",
    pais: "🇦🇷 Neuquén, Argentina",
    era: "Cretácico",
    color: "#3aaa30",
    lat: -38.5, lng: -68.0,
    emoji: "🦕",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Argentinosaurus_BW.jpg/480px-Argentinosaurus_BW.jpg",
    desc: "La región con mayor concentración de saurópodos gigantes del mundo. El Cretácico de Neuquén ha producido los animales más grandes que jamás caminaron sobre la Tierra.",
    hallazgos: [
      { e: "🦕", t: "Argentinosaurus huinculensis — posiblemente el animal más grande de la historia" },
      { e: "🦖", t: "Giganotosaurus carolinii — mayor carnívoro del Cretácico" },
      { e: "🦕", t: "Patagotitan mayorum — titanosaurio de 70 toneladas" },
      { e: "🥚", t: "Sauropod nesting sites — miles de huevos" }
    ],
    link: "https://en.wikipedia.org/wiki/Neuqu%C3%A9n_Group",
    linkText: "Wikipedia"
  },
  {
    id: 16,
    nombre: "Olduvai Gorge",
    pais: "🇹🇿 Arusha, Tanzania",
    era: "Cenozoico",
    color: "#5a8aaa",
    lat: -2.99, lng: 35.35,
    emoji: "🧑",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Olduvai_Gorge%2C_Tanzania.jpg/640px-Olduvai_Gorge%2C_Tanzania.jpg",
    desc: "La 'Cuna de la Humanidad'. Los Leakey descubrieron aquí fósiles de homininos de 1,8 Ma. Cambió para siempre la comprensión de la evolución humana.",
    hallazgos: [
      { e: "🧑", t: "Homo habilis — primera especie del género Homo" },
      { e: "🦴", t: "Paranthropus boisei — robusto australopitecino" },
      { e: "🪨", t: "Industria lítica Olduvayense — herramientas de 1,8 Ma" },
      { e: "🧑", t: "Homo erectus — múltiples especímenes" }
    ],
    link: "https://en.wikipedia.org/wiki/Olduvai_Gorge",
    linkText: "Wikipedia"
  },
  {
    id: 17,
    nombre: "Ghost Ranch",
    pais: "🇺🇸 Nuevo México, EE.UU.",
    era: "Triásico",
    color: "#c85030",
    lat: 36.32, lng: -106.48,
    emoji: "🦖",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ghost_Ranch_Landscape.jpg/640px-Ghost_Ranch_Landscape.jpg",
    desc: "Formación Chinle del Triásico tardío (~210 Ma). En 1947 se descubrió una acumulación masiva de miles de esqueletos de Coelophysis.",
    hallazgos: [
      { e: "🦖", t: "Coelophysis bauri — miles de esqueletos en un solo depósito" },
      { e: "🦎", t: "Hesperosuchus agilis — cocodrilomorfo primitivo" },
      { e: "🦴", t: "Chindesaurus bryansmalli — dinosaurio saurísquio primitivo" },
      { e: "🌿", t: "Flora del Triásico tardío preservada" }
    ],
    link: "https://en.wikipedia.org/wiki/Ghost_Ranch",
    linkText: "Wikipedia"
  },
  {
    id: 18,
    nombre: "Riversleigh",
    pais: "🇦🇺 Queensland, Australia",
    era: "Cenozoico",
    color: "#5a8aaa",
    lat: -19.1, lng: 138.7,
    emoji: "🦘",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Riversleigh_Fossil_Site.jpg/640px-Riversleigh_Fossil_Site.jpg",
    desc: "Patrimonio Mundial UNESCO. Registro fósil del Oligoceno al Pleistoceno (~25-0 Ma) de la fauna australiana. Documenta la evolución de los marsupiales australianos.",
    hallazgos: [
      { e: "🦘", t: "Procoptodon goliah — canguro gigante de 2m" },
      { e: "🦁", t: "Thylacoleo carnifex — leon marsupial de 100 kg" },
      { e: "🐊", t: "Quinkana — cocodrilo terrestre" },
      { e: "🦆", t: "Dromornis stirtoni — ave no voladora de 500 kg" }
    ],
    link: "https://whc.unesco.org/en/list/586",
    linkText: "UNESCO"
  },
  {
    id: 19,
    nombre: "Lyme Regis",
    pais: "Dorset, Reino Unido",
    era: "Jurásico",
    color: "#2a9a40",
    lat: 50.7252,
    lng: -2.9366,
    emoji: "🦕",
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/49/Cliff_east_of_Lyme_Regis_-_geograph.org.uk_-_6221144.jpg",
    desc: "Lyme Regis es uno de los yacimientos fósiles más famosos del mundo y forma parte de la llamada Costa Jurásica, un sitio declarado Patrimonio de la Humanidad por la UNESCO. Sus acantilados y playas contienen rocas que abarcan millones de años de historia geológica y han producido numerosos fósiles bien conservados de reptiles marinos y otros organismos del Jurásico temprano. Muchos descubrimientos importantes fueron realizados aquí por la paleontóloga Mary Anning en el siglo XIX.",
    hallazgos: [
      { e: "🦎", t: "Ichthyosaurus — esqueletos completos" },
      { e: "🦴", t: "Plesiosaurus — reptiles marinos del Jurásico" },
      { e: "🦕", t: "Scelidosaurus — dinosaurio temprano" },
      { e: "🐚", t: "Ammonites — fósiles marinos abundantes" }
    ],
    link: "https://en.wikipedia.org/wiki/Lyme_Regis",
    linkText: "https://en.wikipedia.org/wiki/Lyme_Regis"
  },
  {
    id: 19,
    nombre: "Bahariya Formation",
    pais: "🇪🇬 Oasis de Bahariya, Egipto",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 28.3, lng: 28.8,
    emoji: "🦖",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Spinosaurus_Update_%28Steveoc_86%29.jpg/480px-Spinosaurus_Update_%28Steveoc_86%29.jpg",
    desc: "Formación del Cretácico medio (~95 Ma) en el desierto del Sáhara. Stromer descubrió aquí los primeros restos de Spinosaurus en 1912, destruidos en la Segunda Guerra Mundial.",
    hallazgos: [
      { e: "🦖", t: "Spinosaurus aegyptiacus — descubierto aquí originalmente" },
      { e: "🦖", t: "Carcharodontosaurus saharicus — rival del T. rex" },
      { e: "🦕", t: "Paralititan stromeri — saurópodo gigante" },
      { e: "🐊", t: "Stomatosuchus inermis — cocodrilo de 10m" }
    ],
    link: "https://en.wikipedia.org/wiki/Bahariya_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 20,
    nombre: "Nemegt Formation",
    pais: "🇲🇳 Ömnögovi, Mongolia",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 43.5, lng: 100.8,
    emoji: "🦖",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bayanzag_Flaming_Cliffs.jpg/640px-Bayanzag_Flaming_Cliffs.jpg",
    desc: "Formación del Cretácico tardío (~75-70 Ma) en el Gobi. Considerada la más rica de Asia, con depredadores gigantes y saurópodos enormes.",
    hallazgos: [
      { e: "🦖", t: "Tarbosaurus bataar — el T. rex asiático" },
      { e: "🦕", t: "Therizinosaurus cheloniformis — garras de 1m" },
      { e: "🦕", t: "Nemegtosaurus mongoliensis — saurópodo gigante" },
      { e: "🦆", t: "Deinocheirus mirificus — brazos de 2,4m" }
    ],
    link: "https://en.wikipedia.org/wiki/Nemegt_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 21,
    nombre: "Dashanpu Formation",
    pais: "🇨🇳 Sichuan, China",
    era: "Jurásico",
    color: "#2a9a40",
    lat: 29.3, lng: 104.7,
    emoji: "🦕",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Chengjiang_fossil_site_maotianshan_shales.jpg/640px-Chengjiang_fossil_site_maotianshan_shales.jpg",
    desc: "Formación del Jurásico medio (~165 Ma). El yacimiento jurásico más productivo de Asia, con más de 8.000 huesos excavados en una sola cantera.",
    hallazgos: [
      { e: "🦕", t: "Shunosaurus lii — saurópodo con maza en la cola" },
      { e: "🦕", t: "Omeisaurus tianfuensis — cuello de 9m" },
      { e: "🦖", t: "Yangchuanosaurus shangyouensis — mayor carnívoro jurásico asiático" },
      { e: "🐟", t: "Peces y tortugas jurásicas preservados" }
    ],
    link: "https://en.wikipedia.org/wiki/Shaximiao_Formation",
    linkText: "Wikipedia"
  },
  {
    id: 22,
    nombre: "Dinosaur Ridge",
    pais: "🇺🇸 Colorado, EE.UU.",
    era: "Cretácico",
    color: "#3aaa30",
    lat: 39.7, lng: -105.2,
    emoji: "🦶",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dinosaur_footprints_trackway.jpg/480px-Dinosaur_footprints_trackway.jpg",
    desc: "Cresta rocosa del Cretácico inferior (~100 Ma) con cientos de huellas de dinosaurios perfectamente preservadas en la roca, visibles a simple vista.",
    hallazgos: [
      { e: "🦶", t: "Más de 300 huellas de Iguanodon preservadas" },
      { e: "🦕", t: "Huellas de saurópodos gigantes" },
      { e: "🦖", t: "Rastros de terópodos carnívoros" },
      { e: "🦴", t: "Huesos de Stegosaurus in situ" }
    ],
    link: "https://en.wikipedia.org/wiki/Dinosaur_Ridge",
    linkText: "Wikipedia"
  },
  {
    id: 23,
    nombre: "Karoo Basin",
    pais: "🇿🇦 Cabo Occidental, Sudáfrica",
    era: "Paleozoico",
    color: "#c8a030",
    lat: -32.5, lng: 22.0,
    emoji: "🦎",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Dickinsonia_costata.jpg/480px-Dickinsonia_costata.jpg",
    desc: "Cuenca sedimentaria del Pérmico-Triásico (~260-240 Ma). Registra la mayor extinción de la historia (96% especies) y la recuperación posterior. La fauna de sinápsidos más completa del mundo.",
    hallazgos: [
      { e: "🦎", t: "Lystrosaurus — el animal que sobrevivió la Gran Extinción" },
      { e: "🦎", t: "Gorgonops — depredador sinápsido de colmillos" },
      { e: "🦎", t: "Dicynodon — herbívoro dominante del Pérmico" },
      { e: "🦴", t: "Registro completo de la extinción Pérmico-Triásico" }
    ],
    link: "https://en.wikipedia.org/wiki/Karoo_Supergroup",
    linkText: "Wikipedia"
  }
];

// ============================================
// LIBROS_DATA (con páginas Kindle)
// ============================================

const LIBROS_DATA = [
  {
    id: 1, titulo: "The Rise and Fall of the Dinosaurs", autor: "Steve Brusatte", tipo: "recomendado",
    descripcion: "La historia definitiva del ascenso y caída de los dinosaurios, narrada por uno de los paleontólogos más importantes del mundo.",
    categoria: "Paleontología", emoji: "🦖",
    portada: "https://covers.openlibrary.org/b/isbn/9780062490421-L.jpg",
    googleBooks: "https://books.google.com/books?id=aOMtDwAAQBAJ",
    paginas: [
      { titulo: "Prólogo: El mundo de los dinosaurios", contenido: "<p class='drop-cap'>Durante 180 millones de años, los dinosaurios dominaron la Tierra. Eran los animales más grandes, más veloces y más fascinantes que jamás han pisado este planeta. Y luego, en un instante geológico, desaparecieron.</p><p>Pero la historia de los dinosaurios no es solo una historia de extinción. Es una historia de origen, de evolución, de supervivencia contra todo pronóstico. Es la historia de cómo un grupo de reptiles poco prometedores del Triásico se convirtieron en los amos del mundo.</p>" },
      { titulo: "Capítulo 1: Los orígenes", contenido: "<h3>El mundo del Triásico</h3><p class='drop-cap'>Hace 250 millones de años, la vida en la Tierra estuvo a punto de desaparecer. La Gran Extinción del Pérmico eliminó el 96% de todas las especies marinas y el 70% de los vertebrados terrestres.</p><p>Fue en este mundo devastado donde surgieron los dinosaurios. No de golpe, no como los gigantes que conocemos, sino como criaturas pequeñas y ágiles que corrían sobre dos patas por los márgenes del supercontinente Pangea.</p>" },
      { titulo: "Capítulo 2: La conquista del mundo", contenido: "<h3>La revolución jurásica</h3><p class='drop-cap'>El Jurásico fue el período de los gigantes. Los saurópodos alcanzaron tamaños que desafían la imaginación. El Brachiosaurus podía elevar su cabeza a 13 metros de altura.</p><p class='nota'>Fragmento resumido con fines divulgativos. Para leer el texto completo, haz clic en Leer completo.</p>" }
    ]
  },
  {
    id: 2, titulo: "Prehistoric Life", autor: "DK Publishing", tipo: "recomendado",
    descripcion: "Enciclopedia visual definitiva de la evolución de la vida en la Tierra, desde los primeros microbios hasta los humanos modernos.",
    categoria: "Enciclopedia", emoji: "🌍",
    portada: "https://covers.openlibrary.org/b/isbn/9780756682347-L.jpg",
    googleBooks: "https://www.google.com/search?q=Prehistoric+Life+DK+Publishing+book",
    paginas: [
      { titulo: "Introducción: 4.000 millones de años de vida", contenido: "<p class='drop-cap'>La historia de la vida en la Tierra es la historia más larga y más extraordinaria que existe. Comenzó hace aproximadamente 3.800 millones de años con organismos unicelulares invisibles al ojo humano.</p><p>Esta enciclopedia es una ventana a ese pasado profundo. A través de fósiles, reconstrucciones científicas y el trabajo de generaciones de paleontólogos, podemos ver cómo fue cambiando la vida a lo largo del tiempo geológico.</p>" },
      { titulo: "Era Paleozoica: El amanecer de los animales", contenido: "<h3>La explosión cámbrica</h3><p class='drop-cap'>Hace 541 millones de años ocurrió algo extraordinario: en un período de apenas 20 millones de años, aparecieron casi todos los grandes grupos de animales que conocemos hoy.</p><p>Los mares del Cámbrico eran un mundo alien. Trilobites, anomalócaris, crinoídeos… formas de vida que no se parecen a nada que exista hoy.</p>" }
    ]
  },
  {
    id: 3, titulo: "T. rex and the Crater of Doom", autor: "Walter Alvarez", tipo: "recomendado",
    descripcion: "El geólogo que descubrió la evidencia del asteroide de Chicxulub cuenta la historia de ese hallazgo que cambió la paleontología.",
    categoria: "Ciencia", emoji: "☄️",
    portada: "https://covers.openlibrary.org/b/isbn/9780691016306-L.jpg",
    googleBooks: "https://www.google.com/search?q=T+rex+Crater+of+Doom+Walter+Alvarez",
    paginas: [
      { titulo: "El día que cambió el mundo", contenido: "<p class='drop-cap'>Hace 66 millones de años, un asteroide de 10 kilómetros de diámetro impactó en lo que hoy es la Península de Yucatán. En cuestión de horas, el mundo que conocían los dinosaurios dejó de existir.</p><p>Este libro cuenta cómo un geólogo y su padre, premio Nobel de física, encontraron la evidencia de ese impacto en una delgada capa de arcilla en los Apeninos italianos.</p>" },
      { titulo: "La capa de iridio", contenido: "<h3>Una pista en la roca</h3><p class='drop-cap'>El iridio es un elemento extremadamente raro en la corteza terrestre, pero abundante en los meteoritos. Cuando Walter Alvarez encontró concentraciones anómalas de iridio exactamente en el límite Cretácico-Paleógeno en todo el mundo, la conclusión era inevitable.</p><p class='nota'>Fragmento resumido con fines divulgativos. Para leer el texto completo, haz clic en Leer completo.</p>" }
    ]
  },
  {
    id: 4, titulo: "The Dinosaur Artist", autor: "Paige Williams", tipo: "recomendado",
    descripcion: "La increíble historia del tráfico ilegal de fósiles y la batalla por preservar el patrimonio paleontológico del Gobi.",
    categoria: "Historia", emoji: "🦴",
    portada: "https://covers.openlibrary.org/b/isbn/9780316382076-L.jpg",
    googleBooks: "https://www.google.com/search?q=The+Dinosaur+Artist+Paige+Williams",
    paginas: [
      { titulo: "El mercado negro de fósiles", contenido: "<p class='drop-cap'>En 2012, un esqueleto casi completo de Tarbosaurus bataar apareció en una subasta en Nueva York con un precio inicial de un millón de dólares. El problema: era ilegal. Mongolia prohibió la exportación de fósiles en 1924.</p><p>Este libro sigue el caso de Eric Prokopi, el paleontólogo comercial que excavó, preparó y vendió el esqueleto, y la batalla diplomática y legal que desencadenó.</p>" },
      { titulo: "Mongolia recupera su patrimonio", contenido: "<h3>El regreso del depredador</h3><p class='drop-cap'>Cuando el esqueleto del Tarbosaurus aterrizó en el aeropuerto de Ulán Bator en 2013, miles de mongoles salieron a recibirlo. Para ellos no era solo un fósil: era parte de su identidad nacional.</p><p class='nota'>Fragmento resumido con fines divulgativos. Para leer el texto completo, haz clic en Leer completo.</p>" }
    ]
  },
  {
    id: 5, titulo: "Jurassic West", autor: "John Foster", tipo: "recomendado",
    descripcion: "Guía científica completa de la fauna de la Formación Morrison, la más productiva del Jurásico norteamericano.",
    categoria: "Técnico", emoji: "🗺️",
    portada: "https://covers.openlibrary.org/b/isbn/9780253348449-L.jpg",
    googleBooks: "https://www.google.com/search?q=Jurassic+West+John+Foster+book",
    paginas: [
      { titulo: "La Formación Morrison", contenido: "<p class='drop-cap'>Hace 150 millones de años, el oeste de Norteamérica era un paisaje de llanuras inundables, ríos meandriformes y bosques de coníferas. Era el hogar de los dinosaurios más grandes que jamás pisaron el continente.</p><p>La Formación Morrison se extiende por más de un millón de kilómetros cuadrados en 13 estados, y es la fuente de más esqueletos de dinosaurios jurásicos que cualquier otra formación del mundo.</p>" }
    ]
  },
  {
    id: 6, titulo: "Wonderful Life", autor: "Stephen Jay Gould", tipo: "recomendado",
    descripcion: "El clásico de Gould sobre el Burgess Shale y lo que los animales del Cámbrico nos dicen sobre la contingencia de la evolución.",
    categoria: "Evolución", emoji: "🦐",
    portada: "https://covers.openlibrary.org/b/isbn/9780393307009-L.jpg",
    googleBooks: "https://www.google.com/search?q=Wonderful+Life+Stephen+Jay+Gould",
    paginas: [
      { titulo: "El Burgess Shale", contenido: "<p class='drop-cap'>En 1909, Charles Doolittle Walcott descubrió en las Montañas Rocosas canadienses una roca que cambiaría para siempre nuestra comprensión de la vida. Las pizarras de Burgess contenían animales del Cámbrico medio preservados con una fidelidad extraordinaria.</p><p>Gould usó estos fósiles para argumentar algo radical: la evolución no progresa hacia la complejidad de manera inevitable. Es contingente, dependiente del azar.</p>" }
    ]
  },
  {
    id: 7, titulo: "Dinosaurios de la Patagonia", autor: "Fernando Novas", tipo: "recomendado",
    descripcion: "La guía definitiva sobre los gigantes de Patagonia, escrita por el principal paleontólogo argentino especializado en dinosaurios.",
    categoria: "Paleontología", emoji: "🦕",
    portada: "https://covers.openlibrary.org/b/isbn/9789871256419-L.jpg",
    googleBooks: "https://www.google.com/search?q=Dinosaurios+Patagonia+Fernando+Novas",
    paginas: [
      { titulo: "La tierra de los gigantes", contenido: "<p class='drop-cap'>Ningún lugar en la Tierra ha producido más dinosaurios gigantes que la Patagonia argentina. En los últimos 30 años, esta región semiárida ha entregado al mundo el mayor carnívoro conocido, el mayor herbívoro conocido, y decenas de especies nuevas.</p><p>Fernando Novas ha pasado su carrera excavando estos monstruos bajo el sol patagónico, y este libro es el resultado de décadas de trabajo de campo.</p>" }
    ]
  },
  {
    id: 8, titulo: "Your Inner Fish", autor: "Neil Shubin", tipo: "recomendado",
    descripcion: "Cómo el cuerpo humano guarda vestigios evolutivos de peces, reptiles y mamíferos primitivos.",
    categoria: "Evolución", emoji: "🐟",
    portada: "https://covers.openlibrary.org/b/isbn/9780307277459-L.jpg",
    googleBooks: "https://books.google.com/books?id=7sxT1OvRk2EC",
    paginas: [
      { titulo: "Capítulo 1: Encontrando tu pez interior", contenido: "<p class='drop-cap'>Mira tu mano. Cinco dedos, una palma, una muñeca. Ahora mira la aleta de un pez. Parece completamente diferente. Sin embargo, bajo la piel, los huesos cuentan una historia sorprendente: tú y ese pez compartís el mismo plano estructural básico, heredado de un ancestro común que vivió hace 375 millones de años.</p><p>En 2004, mi equipo encontró en el Ártico canadiense un fósil que cambiaría nuestra comprensión de cómo los vertebrados conquistaron la tierra. Lo llamamos Tiktaalik roseae.</p>" },
      { titulo: "Capítulo 2: Los genes que compartimos", contenido: "<h3>Construyendo cabezas</h3><p class='drop-cap'>Uno de los descubrimientos más sorprendentes de la biología moderna es que todos los animales con cabeza, desde los tiburones hasta los humanos, construyen esa cabeza usando prácticamente los mismos genes.</p><p class='nota'>Fragmento resumido con fines divulgativos. Para leer el texto completo, haz clic en Leer completo.</p>" }
    ]
  },
  {
    id: 9, titulo: "The Feathered Dragon", autor: "Alan Feduccia", tipo: "recomendado",
    descripcion: "Análisis detallado de la evolución de las aves desde los dinosaurios emplumados, con especial atención a los fósiles de Liaoning.",
    categoria: "Evolución", emoji: "🐦",
    portada: "https://covers.openlibrary.org/b/isbn/9781421438221-L.jpg",
    googleBooks: "https://www.google.com/search?q=The+Feathered+Dragon+Feduccia",
    paginas: [
      { titulo: "El origen de las aves", contenido: "<p class='drop-cap'>Durante más de un siglo, la pregunta de cómo evolucionaron las aves dividió a los paleontólogos. ¿Descendían de dinosaurios terópodos, o de reptiles arcosaurios más primitivos? Los fósiles de Liaoning resolvieron el debate de manera definitiva.</p><p>Las pizarras volcánicas del Cretácico inferior de China preservaron decenas de especies de dinosaurios con plumas en un estado de conservación extraordinario.</p>" }
    ]
  },
  {
    id: 10, titulo: "Paleoart: Visions of the Prehistoric Past", autor: "Zoë Lescaze", tipo: "recomendado",
    descripcion: "El libro más completo sobre arte paleontológico histórico, desde las primeras reconstrucciones del siglo XIX hasta las ilustraciones científicas modernas.",
    categoria: "Arte", emoji: "🎨",
    portada: "https://covers.openlibrary.org/b/isbn/9783791356006-L.jpg",
    googleBooks: "https://www.google.com/search?q=Paleoart+Visions+Prehistoric+Past+Lescaze",
    paginas: [
      { titulo: "El arte de reconstruir el pasado", contenido: "<p class='drop-cap'>Antes de que existieran las películas, antes de los museos modernos, los artistas del siglo XIX se enfrentaron a un reto imposible: dar vida a criaturas que nadie había visto jamás, basándose únicamente en huesos fragmentados y la imaginación.</p><p>Este libro reúne más de 200 años de arte paleontológico, desde las primeras reconstrucciones especulativas de Duria Antiquior hasta las ilustraciones hiperrealistas de los artistas contemporáneos.</p>" }
    ]
  },
  {
    id: 11, titulo: "Dinosaur Odyssey", autor: "Scott Sampson", tipo: "recomendado",
    descripcion: "Una visión ecosistémica de los dinosaurios como parte de ecosistemas complejos, no como monstruos aislados.",
    categoria: "Paleontología", emoji: "🌿",
    portada: "https://covers.openlibrary.org/b/isbn/9780520246164-L.jpg",
    googleBooks: "https://www.google.com/search?q=Dinosaur+Odyssey+Scott+Sampson",
    paginas: [
      { titulo: "Los dinosaurios en su ecosistema", contenido: "<p class='drop-cap'>Durante demasiado tiempo hemos pensado en los dinosaurios como criaturas aisladas: el T. rex aquí, el Triceratops allá. Pero los animales no existen en el vacío. Viven en ecosistemas, interactúan con plantas, con insectos, con el clima.</p><p>Este libro reconstruye los ecosistemas completos del Mesozoico, situando a los dinosaurios en su contexto ecológico real.</p>" }
    ]
  },
  {
    id: 12, titulo: "The Princeton Field Guide to Dinosaurs", autor: "Gregory S. Paul", tipo: "recomendado",
    descripcion: "La guía de campo más completa de todos los dinosaurios conocidos, con siluetas y datos de más de 700 especies.",
    categoria: "Referencia", emoji: "📋",
    portada: "https://covers.openlibrary.org/b/isbn/9780691137209-L.jpg",
    googleBooks: "https://www.google.com/search?q=Princeton+Field+Guide+Dinosaurs+Gregory+Paul",
    paginas: [
      { titulo: "La guía de referencia definitiva", contenido: "<p class='drop-cap'>Gregory S. Paul lleva décadas produciendo las reconstrucciones esqueléticas más precisas de dinosaurios del mundo. Sus siluetas en escala son la referencia estándar que usan los paleontólogos para comparar tamaños.</p><p>Esta guía cubre más de 700 especies con datos de tamaño, peso, período y localización geográfica. Es el libro que todo amante de los dinosaurios debería tener.</p>" }
    ]
  },
  {
    id: 13, titulo: "En Busca de los Dinosaurios", autor: "José Luis Sanz", tipo: "recomendado",
    descripcion: "El paleontólogo español más reconocido repasa la historia de los descubrimientos de dinosaurios en España y el mundo.",
    categoria: "Paleontología", emoji: "🇪🇸",
    portada: "https://covers.openlibrary.org/b/isbn/9788420647494-L.jpg",
    googleBooks: "https://www.google.com/search?q=En+Busca+Dinosaurios+Jose+Luis+Sanz",
    paginas: [
      { titulo: "Los dinosaurios de España", contenido: "<p class='drop-cap'>España es uno de los países europeos con mayor riqueza paleontológica. Desde los yacimientos de Teruel hasta los de Cuenca, pasando por las huellas de La Rioja, la Península Ibérica guarda un tesoro de fósiles que pocos conocen.</p><p>José Luis Sanz ha dedicado su vida a desenterrar y estudiar estos animales, y este libro es su relato personal de esa búsqueda.</p>" }
    ]
  },
  {
    id: 14, titulo: "Biodiversity Heritage Library", autor: "biodiversitylibrary.org", tipo: "digital",
    descripcion: "Millones de páginas de publicaciones científicas históricas de libre acceso sobre historia natural.",
    categoria: "Archivo digital", emoji: "🌐",
    portada: "",
    googleBooks: "https://www.biodiversitylibrary.org",
    paginas: [
      { titulo: "Sobre esta biblioteca", contenido: "<p class='drop-cap'>La Biodiversity Heritage Library es el mayor archivo digital de literatura científica sobre biodiversidad del mundo. Contiene más de 60 millones de páginas de libros, revistas y manuscritos sobre historia natural, paleontología y biología.</p><p>Todo el contenido es de acceso libre y gratuito. Visita biodiversitylibrary.org para explorar la colección completa.</p>" }
    ]
  },
  {
    id: 15, titulo: "Palaeontologia Electronica", autor: "palaeo-electronica.org", tipo: "digital",
    descripcion: "Revista científica de paleontología de acceso completamente libre con artículos revisados por pares.",
    categoria: "Revista científica", emoji: "🔓",
    portada: "",
    googleBooks: "https://palaeo-electronica.org",
    paginas: [
      { titulo: "Sobre esta revista", contenido: "<p class='drop-cap'>Palaeontologia Electronica es una revista científica de paleontología de acceso completamente libre. Fue una de las primeras revistas científicas en existir únicamente en formato digital, desde 1998.</p><p>Todos los artículos están revisados por pares y son descargables gratuitamente en PDF. Visita palaeo-electronica.org para acceder a todos los artículos.</p>" }
    ]
  }
];

// ============================================
// TRADUCCIONES
// ES = español (base), FR = francés
// ============================================

const TRADUCCIONES = {
  es: {
    nav_explorer:   "Animal Explorer",
    nav_landscapes: "Landscapes",
    nav_fossil:     "Fossil Science",
    nav_gallery:    "Gallery",
    nav_news:       "News",
    nav_books:      "Books",
    nav_updates:    "Updates",
    nav_comparator: "Comparator",

    home_badge:  "🔬 Divulgación científica · Paleontología",
    home_desc:   "Descubre animales extintos, ecosistemas del pasado y la ciencia detrás de los fósiles. Un viaje de 4.000 millones de años.",
    home_stat_animales:   "Animales",
    home_stat_noticias:   "Noticias",
    home_stat_libros:     "Libros",
    home_stat_version:    "Versión",
    home_card_explorer_titulo: "Animal Explorer",
    home_card_explorer_desc:   "Busca y explora fichas de animales actuales y prehistóricos con datos científicos.",
    home_card_landscapes_titulo: "Ancient Landscapes",
    home_card_landscapes_desc:   "Biomas extintos, reconstrucciones científicas y comparaciones pasado vs presente.",
    home_card_fossil_titulo: "Fossil Science",
    home_card_fossil_desc:   "Cómo se forman los fósiles, cómo se descubren y qué tecnología usan los científicos.",
    home_card_gallery_titulo: "Illustration Gallery",
    home_card_gallery_desc:   "Galería de reconstrucciones científicas y arte paleontológico.",
    home_card_news_titulo: "Science News",
    home_card_news_desc:   "Descubrimientos recientes, artículos simplificados y curiosidades científicas.",
    home_card_books_titulo: "Books & Resources",
    home_card_books_desc:   "Libros, revistas digitales y recursos educativos recomendados.",
    home_card_comparator_titulo: "Comparador de Tamaños",
    home_card_comparator_desc:   "Compara el tamaño de cualquier animal con otro y con un humano.",
    home_card_timeline_titulo:   "Timeline Geológico",
    home_card_timeline_desc:     "Explora los 17 períodos de la historia de la Tierra en un globo 3D interactivo.",
    home_card_fossilmap_titulo:  "Mapa de Yacimientos",
    home_card_fossilmap_desc:    "Localiza los 18 yacimientos paleontológicos más importantes del mundo.",

    explorer_label:       "🦕 Animal Explorer",
    explorer_titulo:      "Buscador de Animales",
    explorer_sub:         "Explora especies actuales y prehistóricas. Busca por nombre o filtra por tipo.",
    explorer_placeholder: "Buscar animal... (ej: T-Rex, mamut...)",
    explorer_buscar:      "Buscar",
    explorer_todos:       "Todos",
    explorer_extintos:    "Extintos",
    explorer_vivientes:   "Vivientes",
    explorer_sin_result:  "No se encontraron animales con ese nombre.",
    explorer_volver:      "← Volver a la lista",
    explorer_extinto:     "Extinto",
    explorer_viviente:    "Viviente",
    campo_dieta:          "Dieta",
    campo_tamaño:         "Tamaño",
    campo_peso:           "Peso",
    campo_habitat:        "Hábitat",
    campo_periodo:        "Época geológica",
    campo_año:            "Año descubrimiento",
    campo_fosil:          "Lugar del fósil",
    campo_cientifico:     "Descubierto por",
    campo_clasificacion:  "Clasificación",

    landscapes_label:  "🌋 Ancient Landscapes",
    landscapes_titulo: "Paisajes Antiguos",
    landscapes_sub:    "Cómo era la Tierra millones de años antes de que llegáramos.",
    tab_biomas:        "Biomas Antiguos",
    tab_recon:         "Reconstrucciones",
    tab_comparacion:   "Pasado vs Presente",
    tabla_lugar:       "Lugar",
    tabla_hace:        "Hace",
    tabla_entonces:    "Entonces",
    tabla_hoy:         "Hoy",
    bioma_clima:       "Clima",
    bioma_flora:       "Flora",
    bioma_fauna:       "Fauna",

    fossil_label:  "🦴 Fossil Science",
    fossil_titulo: "Ciencia de los Fósiles",
    fossil_sub:    "Cómo los científicos leen la historia de la vida en piedra.",
    fossil_como:   "¿Cómo se forma un fósil?",

    gallery_label:  "🎨 Illustration Gallery",
    gallery_titulo: "Galería de Ilustraciones",
    gallery_sub:    "Reconstrucciones científicas y arte paleontológico.",
    gallery_todos:       "Todos",
    gallery_animales:    "Animales prehistóricos",
    gallery_ecosistemas: "Ecosistemas",
    gallery_comp:        "Comparaciones",
    gallery_mostrando:   "Mostrando",
    gallery_ilustraciones: "ilustraciones",

    news_label:         "📰 Science News",
    news_titulo:        "Noticias Científicas",
    news_sub:           "Descubrimientos recientes, artículos simplificados y curiosidades.",
    news_todas:         "Todas",
    news_descubrimiento:"Descubrimientos",
    news_ciencia:       "Ciencia",
    news_curiosidad:    "Curiosidades",
    news_sin_result:    "No hay noticias en esta categoría todavía.",
    cat_descubrimiento: "Descubrimiento",
    cat_ciencia:        "Ciencia",
    cat_curiosidad:     "Curiosidad",

    books_label:       "📚 Books & Resources",
    books_titulo:      "Biblioteca Científica",
    books_sub:         "Libros, recursos digitales y material educativo para explorar más.",
    tab_recomendados:  "Libros recomendados",
    tab_digitales:     "Libros digitales",
    tab_recursos:      "Recursos educativos",

    updates_label:  "🔄 Updates",
    updates_titulo: "Actualizaciones",
    updates_sub:    "Registro de cambios del sitio. Actualización grande cada 1–2 meses.",
    updates_proximas: "Próximamente",
    badge_nuevo:     "Nueva versión",
    badge_contenido: "Contenido",
    badge_inicio:    "Inicio",
    badge_idioma:    "Idiomas",
    estado_desarrollo: "En desarrollo",
    estado_planificado: "Planificado",
    estado_idea:     "Idea",

    comparator_label:  "📏 Size Comparator",
    comparator_titulo: "Comparador de Tamaños",
    comparator_sub:    "Compara el tamaño de cualquier animal con otro y con un humano de referencia.",
    comparator_animal1: "Animal 1",
    comparator_animal2: "Animal 2",
    comparator_veces:  "veces más largo que",
    comparator_barras: "Comparación de longitud",
    comparator_ref:    "Humano (referencia)",

    footer_copy: "© 2025 Eduardo · Proyecto educativo de divulgación paleontológica",
  },

  fr: {
    nav_explorer:   "Explorateur",
    nav_landscapes: "Paysages",
    nav_fossil:     "Science des Fossiles",
    nav_gallery:    "Galerie",
    nav_news:       "Actualités",
    nav_books:      "Livres",
    nav_updates:    "Mises à jour",
    nav_comparator: "Comparateur",

    home_badge:  "🔬 Vulgarisation scientifique · Paléontologie",
    home_desc:   "Découvre des animaux disparus, des écosystèmes du passé et la science derrière les fossiles. Un voyage de 4 milliards d'années.",
    home_stat_animales:   "Animaux",
    home_stat_noticias:   "Actualités",
    home_stat_libros:     "Livres",
    home_stat_version:    "Version",
    home_card_explorer_titulo: "Explorateur d'Animaux",
    home_card_explorer_desc:   "Recherche et explore des fiches d'animaux actuels et préhistoriques avec des données scientifiques.",
    home_card_landscapes_titulo: "Paysages Anciens",
    home_card_landscapes_desc:   "Biomes disparus, reconstructions scientifiques et comparaisons passé vs présent.",
    home_card_fossil_titulo: "Science des Fossiles",
    home_card_fossil_desc:   "Comment se forment les fossiles, comment on les découvre et quelles technologies utilisent les scientifiques.",
    home_card_gallery_titulo: "Galerie d'Illustrations",
    home_card_gallery_desc:   "Galerie de reconstructions scientifiques et d'art paléontologique.",
    home_card_news_titulo: "Actualités Scientifiques",
    home_card_news_desc:   "Découvertes récentes, articles simplifiés et curiosités scientifiques.",
    home_card_books_titulo: "Livres & Ressources",
    home_card_books_desc:   "Livres, ressources numériques et matériel éducatif recommandés.",
    home_card_comparator_titulo: "Comparateur de Tailles",
    home_card_comparator_desc:   "Compare la taille de n'importe quel animal avec un autre et un humain.",
    home_card_timeline_titulo:   "Chronologie Géologique",
    home_card_timeline_desc:     "Explore les 17 périodes de l'histoire de la Terre sur un globe 3D interactif.",
    home_card_fossilmap_titulo:  "Carte des Sites Fossiles",
    home_card_fossilmap_desc:    "Localise les 18 sites paléontologiques les plus importants du monde.",
    
    explorer_label:       "🦕 Explorateur d'Animaux",
    explorer_titulo:      "Recherche d'Animaux",
    explorer_sub:         "Explore des espèces actuelles et préhistoriques. Recherche par nom ou filtre par type.",
    explorer_placeholder: "Rechercher un animal... (ex: T-Rex, mammouth...)",
    explorer_buscar:      "Rechercher",
    explorer_todos:       "Tous",
    explorer_extintos:    "Disparus",
    explorer_vivientes:   "Vivants",
    explorer_sin_result:  "Aucun animal trouvé avec ce nom.",
    explorer_volver:      "← Retour à la liste",
    explorer_extinto:     "Disparu",
    explorer_viviente:    "Vivant",
    campo_dieta:          "Régime",
    campo_tamaño:         "Taille",
    campo_peso:           "Poids",
    campo_habitat:        "Habitat",
    campo_periodo:        "Époque géologique",
    campo_año:            "Année de découverte",
    campo_fosil:          "Lieu du fossile",
    campo_cientifico:     "Découvert par",
    campo_clasificacion:  "Classification",

    landscapes_label:  "🌋 Paysages Anciens",
    landscapes_titulo: "Paysages Anciens",
    landscapes_sub:    "Comment était la Terre des millions d'années avant notre arrivée.",
    tab_biomas:        "Biomes Anciens",
    tab_recon:         "Reconstructions",
    tab_comparacion:   "Passé vs Présent",
    tabla_lugar:       "Lieu",
    tabla_hace:        "Il y a",
    tabla_entonces:    "Autrefois",
    tabla_hoy:         "Aujourd'hui",
    bioma_clima:       "Climat",
    bioma_flora:       "Flore",
    bioma_fauna:       "Faune",

    fossil_label:  "🦴 Science des Fossiles",
    fossil_titulo: "Science des Fossiles",
    fossil_sub:    "Comment les scientifiques lisent l'histoire de la vie dans la pierre.",
    fossil_como:   "Comment se forme un fossile ?",

    gallery_label:  "🎨 Galerie d'Illustrations",
    gallery_titulo: "Galerie d'Illustrations",
    gallery_sub:    "Reconstructions scientifiques et art paléontologique.",
    gallery_todos:       "Tous",
    gallery_animales:    "Animaux préhistoriques",
    gallery_ecosistemas: "Écosystèmes",
    gallery_comp:        "Comparaisons",
    gallery_mostrando:   "Affichage de",
    gallery_ilustraciones: "illustrations",

    news_label:         "📰 Actualités Scientifiques",
    news_titulo:        "Actualités Scientifiques",
    news_sub:           "Découvertes récentes, articles simplifiés et curiosités.",
    news_todas:         "Toutes",
    news_descubrimiento:"Découvertes",
    news_ciencia:       "Science",
    news_curiosidad:    "Curiosités",
    news_sin_result:    "Pas encore d'actualités dans cette catégorie.",
    cat_descubrimiento: "Découverte",
    cat_ciencia:        "Science",
    cat_curiosidad:     "Curiosité",

    books_label:       "📚 Livres & Ressources",
    books_titulo:      "Bibliothèque Scientifique",
    books_sub:         "Livres, ressources numériques et matériel éducatif pour en savoir plus.",
    tab_recomendados:  "Livres recommandés",
    tab_digitales:     "Livres numériques",
    tab_recursos:      "Ressources éducatives",

    updates_label:  "🔄 Mises à jour",
    updates_titulo: "Mises à jour",
    updates_sub:    "Journal des modifications du site. Grande mise à jour tous les 1-2 mois.",
    updates_proximas: "Prochainement",
    badge_nuevo:     "Nouvelle version",
    badge_contenido: "Contenu",
    badge_inicio:    "Début",
    badge_idioma:    "Langues",
    estado_desarrollo: "En développement",
    estado_planificado: "Planifié",
    estado_idea:     "Idée",

    comparator_label:  "📏 Comparateur de Tailles",
    comparator_titulo: "Comparateur de Tailles",
    comparator_sub:    "Compare la taille de n'importe quel animal avec un autre et avec un humain de référence.",
    comparator_animal1: "Animal 1",
    comparator_animal2: "Animal 2",
    comparator_veces:  "fois plus long que",
    comparator_barras: "Comparaison de longueur",
    comparator_ref:    "Humain (référence)",

    footer_copy: "© 2025 Eduardo · Projet éducatif de vulgarisation paléontologique",
  }
};

// ── SISTEMA DE IDIOMA ──
function getLang() {
  return localStorage.getItem('lang') || 'es';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  aplicarIdioma(lang);
}

function t(clave) {
  const lang = getLang();
  return (TRADUCCIONES[lang] && TRADUCCIONES[lang][clave])
    ? TRADUCCIONES[lang][clave]
    : (TRADUCCIONES['es'][clave] || clave);
}

function aplicarIdioma(lang) {
  document.querySelectorAll('.btn-idioma').forEach(b => {
    b.classList.remove('activo');
    if ((lang === 'fr' && b.textContent.trim() === 'FR') ||
        (lang === 'es' && b.textContent.trim() === 'ES')) {
      b.classList.add('activo');
    }
  });
  if (typeof renderPagina === 'function') renderPagina();
}