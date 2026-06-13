// ============================================================
// TERRA — Data: Módulos del Temario
// Fuente: TEMARIO.pdf & MODELO PEDAGOGICO.pdf
// ============================================================

export const STATIONS = [
  {
    id: 'rio',
    name: 'El Río',
    emoji: '🌊',
    periodo: 'Primer Período',
    desc: 'Ecosistemas fluviales y saberes del agua',
    color: 'rio',
    modules: ['m1', 'm2', 'm3']
  },
  {
    id: 'cielo',
    name: 'El Cielo',
    emoji: '🌙',
    periodo: 'Segundo Período',
    desc: 'Astronomía y calendarios ancestrales',
    color: 'cielo',
    modules: ['m4', 'm5', 'm6']
  },
  {
    id: 'tierra',
    name: 'La Tierra',
    emoji: '🌱',
    periodo: 'Tercer Período',
    desc: 'Suelo, vida y cerámica Quimbaya',
    color: 'tierra',
    modules: ['m7', 'm8', 'm9']
  }
]

export const MODULES = {
  m1: {
    id: 'm1',
    station: 'rio',
    num: 1,
    title: 'El Ecosistema Fluvial del Río La Vieja',
    competencias: ['IN', 'EF', 'EI'],
    sesiones: 4,
    contenido: {
      intro: `El río La Vieja es uno de los afluentes más importantes del río Cauca en el Eje Cafetero colombiano. Sus orillas son el hogar de una rica biodiversidad: garzas, iguanas, guaduales y peces de agua dulce conviven en este ecosistema vivo que es el "aula" principal de esta estación.`,
      conceptos: [
        'Ecosistema: conjunto de seres vivos y su entorno físico que interactúan entre sí.',
        'Bioma: gran región ecológica con características climáticas y biológicas similares.',
        'Cadena alimentaria: secuencia de quién come a quién en un ecosistema.',
        'Productores, consumidores y descomponedores: roles en el ecosistema.',
        'Biodiversidad: variedad de formas de vida en un ecosistema.'
      ],
      saberes: [
        {
          tipo: 'Saber ancestral Quimbaya',
          texto: 'Los Quimbaya consideraban los ríos como seres vivos con espíritu propio. El río La Vieja era llamado "la vena de la tierra" y su cuidado era responsabilidad colectiva del pueblo.'
        },
        {
          tipo: 'Saber campesino-mestizo',
          texto: 'Los pescadores locales reconocen las épocas de "subienda" (migración de peces), los cambios del nivel del río y los indicadores naturales de calidad del agua como la presencia de ciertas plantas y animales.'
        },
        {
          tipo: 'Tradición afrodescendiente',
          texto: 'Comunidades del norte del Valle del Cauca tienen prácticas de "balsaje" (navegación en balsa de guadua) como tecnología ancestral de transporte y conexión con el río.'
        }
      ],
      actividad: {
        nombre: '🔍 Salida al Aula Viva',
        descripcion: 'Visita a la orilla del río La Vieja o quebrada cercana. Identifica y registra en tu cuaderno: 3 productores, 2 consumidores y 1 descomponedor que observes. Dibuja una cadena alimentaria con lo que encuentres.'
      }
    },
    quiz: [
      {
        q: '¿Qué función cumplen los descomponedores en el ecosistema del río?',
        opts: [
          'Producir alimento mediante la fotosíntesis',
          'Descomponer materia orgánica y devolver nutrientes al suelo',
          'Cazar y consumir otros animales',
          'Filtrar el agua del río'
        ],
        correct: 1,
        feedback: {
          ok: '¡Correcto! Los descomponedores (hongos, bacterias) rompen la materia orgánica muerta y reciclan los nutrientes al ecosistema, cerrando el ciclo de la materia.',
          fail: 'Los descomponedores como hongos y bacterias se especializan en descomponer materia orgánica muerta, liberando nutrientes que pueden ser usados de nuevo por las plantas.'
        }
      },
      {
        q: '¿Por qué los Quimbaya llamaban al río "la vena de la tierra"?',
        opts: [
          'Porque el agua del río es de color rojo',
          'Porque reconocían al río como un ser vivo que da vida al territorio, como las venas al cuerpo',
          'Porque el río corre muy rápido',
          'Porque el río sirve solo para pescar'
        ],
        correct: 1,
        feedback: {
          ok: '¡Excelente! Esta cosmovisión Quimbaya reconoce al río como parte viva del territorio, no solo como un recurso. ¡Una forma de pensar muy similar a la ecología moderna!',
          fail: 'La metáfora "vena de la tierra" refleja la visión Quimbaya del río como un sistema vital del territorio, igual que las venas son vitales para el cuerpo humano.'
        }
      },
      {
        q: '¿Qué es la biodiversidad?',
        opts: [
          'La cantidad de agua en un ecosistema',
          'La variedad de formas de vida en un ecosistema o región',
          'El número de árboles en un bosque',
          'La velocidad a la que crecen las plantas'
        ],
        correct: 1,
        feedback: {
          ok: '¡Muy bien! La biodiversidad incluye la variedad de especies, genes y ecosistemas. El Eje Cafetero colombiano es uno de los 36 puntos "hotspot" de biodiversidad del mundo.',
          fail: 'Biodiversidad se refiere a la variedad de vida: diferentes especies de plantas, animales, hongos y microorganismos que conviven en un lugar.'
        }
      }
    ]
  },

  m2: {
    id: 'm2',
    station: 'rio',
    num: 2,
    title: 'Ciclo del Agua y Saberes del Río',
    competencias: ['UC', 'EI', 'RT'],
    sesiones: 4,
    contenido: {
      intro: `El agua nunca desaparece: viaja en un ciclo eterno entre la tierra, el río, las nubes y la lluvia. Las comunidades del Valle del Cauca han observado este ciclo por siglos y construido saberes propios sobre cómo predecir la lluvia, cuidar las fuentes y aprovechar el agua responsablemente.`,
      conceptos: [
        'Evaporación: el agua líquida se convierte en vapor por el calor.',
        'Condensación: el vapor de agua se enfría y forma gotas (nubes).',
        'Precipitación: el agua cae como lluvia, granizo o nieve.',
        'Infiltración: el agua penetra el suelo y recarga los acuíferos.',
        'Escorrentía: el agua fluye por la superficie hacia ríos y quebradas.'
      ],
      saberes: [
        {
          tipo: 'Saber campesino',
          texto: 'Los agricultores del Valle del Cauca identifican la llegada de las lluvias por señales naturales: el comportamiento de las hormigas arrieras, la floración del yarumo, y el color del cielo al atardecer.'
        },
        {
          tipo: 'Saber ancestral',
          texto: 'Las comunidades indígenas del Eje Cafetero realizaban rituales de "llamado de la lluvia" en épocas de sequía, reconociendo la interdependencia entre las acciones humanas y los ciclos naturales del agua.'
        }
      ],
      actividad: {
        nombre: '💧 Experimento: Ciclo del agua en una bolsa',
        descripcion: 'Llena una bolsa transparente con agua, añade unas gotas de colorante azul y ciérrala. Pégala en una ventana soleada. Observa durante 30 minutos y dibuja lo que ocurre: ¿dónde aparecen las gotas? ¿Qué parte del ciclo estás viendo?'
      }
    },
    quiz: [
      {
        q: '¿En qué etapa del ciclo del agua el vapor se convierte en nubes?',
        opts: ['Evaporación', 'Precipitación', 'Condensación', 'Infiltración'],
        correct: 2,
        feedback: {
          ok: '¡Correcto! En la condensación, el vapor de agua sube, se enfría en las capas altas de la atmósfera y se agrupa en pequeñas gotas formando las nubes.',
          fail: 'La condensación es cuando el vapor de agua se enfría y se convierte en pequeñas gotas de agua que forman las nubes.'
        }
      },
      {
        q: '¿Qué señal natural usan los campesinos del Valle para predecir la lluvia?',
        opts: [
          'El color del agua del río',
          'El comportamiento de las hormigas arrieras y la floración del yarumo',
          'La temperatura del suelo',
          'El número de estrellas visibles'
        ],
        correct: 1,
        feedback: {
          ok: '¡Excelente! Este saber campesino es una forma de "meteorología ancestral" basada en la observación cuidadosa de la naturaleza durante generaciones.',
          fail: 'Los campesinos observan indicadores biológicos como las hormigas arrieras (que entran a sus nidos antes de llover) y la floración del yarumo para predecir el clima.'
        }
      }
    ]
  },

  m3: {
    id: 'm3',
    station: 'rio',
    num: 3,
    title: 'Calidad del Agua — Kit de pH Casero',
    competencias: ['IN', 'EF', 'UC'],
    sesiones: 4,
    contenido: {
      intro: `El agua que bebemos, nadamos y pescamos puede verse limpia pero contener sustancias que la hacen ácida o básica. El pH es una escala del 0 al 14 que mide esto. Las plantas y animales del río son sensibles al pH: un río sano tiene pH entre 6.5 y 8.5. Hoy aprenderás a medirlo con materiales caseros.`,
      conceptos: [
        'pH: medida de acidez o basicidad de una solución (escala 0-14).',
        'Ácido (pH < 7): limón, vinagre. Dañino para peces en exceso.',
        'Neutro (pH = 7): agua pura.',
        'Básico o alcalino (pH > 7): jabón, bicarbonato.',
        'Indicador natural: sustancia vegetal que cambia de color según el pH.'
      ],
      saberes: [
        {
          tipo: 'Saber ancestral',
          texto: 'Las comunidades indígenas determinaban la calidad del agua observando qué animales la habitaban. La presencia de ciertas larvas de insectos (bioindicadores) señalaba agua limpia. ¡Hoy la ciencia confirma este método como "biomonitoreo"!'
        },
        {
          tipo: 'Saber afrodescendiente',
          texto: 'Abuelas del norte del Valle usaban la col morada (repollo morado) para hacer remedios, y observaban cómo cambiaba de color al contacto con diferentes plantas. Sin saberlo, ¡estaban haciendo indicadores de pH!'
        }
      ],
      actividad: {
        nombre: '🧪 Kit de pH con repollo morado',
        descripcion: 'Hierve hojas de repollo morado en agua hasta obtener un líquido violeta. Filtra y guarda el líquido. Prueba con: vinagre (ácido), agua del grifo (neutro), bicarbonato disuelto (básico). Registra los colores: rosado/rojo = ácido, violeta = neutro, verde/amarillo = básico.'
      }
    },
    quiz: [
      {
        q: '¿Qué pH tiene el agua pura?',
        opts: ['3', '7', '10', '14'],
        correct: 1,
        feedback: {
          ok: '¡Correcto! El agua pura tiene pH 7 (neutro). Por eso es el punto de referencia de la escala de pH.',
          fail: 'El agua pura tiene pH 7, que se considera neutro. Valores menores son ácidos y mayores son básicos.'
        }
      },
      {
        q: '¿Por qué el repollo morado puede usarse como indicador de pH?',
        opts: [
          'Porque tiene un sabor muy fuerte',
          'Porque contiene antocianinas, pigmentos que cambian de color según la acidez',
          'Porque es de color morado oscuro',
          'Porque crece cerca de los ríos'
        ],
        correct: 1,
        feedback: {
          ok: '¡Excelente! Las antocianinas son moléculas que cambian su estructura según el pH, lo que cambia el color que absorben. ¡Es química real con ingredientes de cocina!',
          fail: 'Las antocianinas son los pigmentos del repollo morado. Su estructura molecular cambia con el pH, haciendo que absorban diferentes colores de luz.'
        }
      }
    ]
  },

  m4: {
    id: 'm4',
    station: 'cielo',
    num: 4,
    title: 'Movimientos Astronómicos: Sol, Tierra y Luna',
    competencias: ['UC', 'EF', 'EI'],
    sesiones: 4,
    contenido: {
      intro: `Desde los Andes, el cielo nocturno de Cartago revela constelaciones que los Quimbaya usaban para navegar por el territorio y planificar la agricultura. La ciencia moderna explica los movimientos de la Tierra, el Sol y la Luna con precisión matemática, pero los saberes ancestrales los observaron con siglos de anticipación.`,
      conceptos: [
        'Rotación terrestre: giro de la Tierra sobre su eje (24 horas = 1 día).',
        'Traslación terrestre: órbita de la Tierra alrededor del Sol (365 días = 1 año).',
        'Inclinación axial: 23.5°, causa las estaciones del año.',
        'Sistema Sol-Tierra-Luna: el trio que determina mareas, eclipses y calendarios.',
        'Solsticio y equinoccio: momentos especiales del año astronómico.'
      ],
      saberes: [
        {
          tipo: 'Saber Quimbaya',
          texto: 'Los Quimbaya observaban el "camino del Sol" (la eclíptica) a lo largo del año. Marcaban con petroglifos las posiciones del sol al amanecer en fechas clave del calendario agrícola, creando un sistema de astronomía práctica.'
        },
        {
          tipo: 'Saber campesino',
          texto: 'Los agricultores del Valle del Cauca conocen las "cabañuelas" — un sistema de pronóstico climático basado en los primeros 12 días de enero, donde cada día representa el clima de un mes del año.'
        }
      ],
      actividad: {
        nombre: '☀️ Construye tu Gnomon',
        descripcion: 'Clava un palo vertical de 30cm en el suelo en un lugar soleado. Cada hora, desde las 8am hasta las 3pm, marca con una piedra la punta de la sombra. Une las marcas. La línea más corta indica el mediodía solar (Norte verdadero). ¿En qué dirección se mueve el Sol en Cartago?'
      }
    },
    quiz: [
      {
        q: '¿Cuánto tarda la Tierra en completar una vuelta alrededor del Sol?',
        opts: ['24 horas', '30 días', '365 días aproximadamente', '12 horas'],
        correct: 2,
        feedback: {
          ok: '¡Correcto! Una traslación completa dura 365 días y 6 horas aproximadamente. Por eso cada 4 años tenemos un "año bisiesto" de 366 días.',
          fail: 'La traslación de la Tierra alrededor del Sol dura aproximadamente 365 días (1 año). Las 24 horas son el tiempo de rotación (1 día).'
        }
      },
      {
        q: '¿Qué mide el gnomon?',
        opts: [
          'La temperatura del suelo',
          'La velocidad del viento',
          'La posición del Sol mediante la sombra que proyecta',
          'La humedad del aire'
        ],
        correct: 2,
        feedback: {
          ok: '¡Exacto! El gnomon es uno de los instrumentos astronómicos más antiguos de la humanidad. Los Quimbaya y otras culturas lo usaban para marcar el tiempo y las estaciones.',
          fail: 'El gnomon es una varilla vertical que proyecta una sombra. La longitud y dirección de esa sombra indica la posición del Sol en el cielo y la hora del día.'
        }
      }
    ]
  },

  m5: {
    id: 'm5',
    station: 'cielo',
    num: 5,
    title: 'Fases de la Luna y Calendario Agrícola',
    competencias: ['IN', 'EI', 'RT'],
    sesiones: 4,
    contenido: {
      intro: `La Luna no cambia de forma — lo que cambia es qué parte de su cara iluminada vemos desde la Tierra. Este ciclo de 29.5 días fue el primer "calendario" de la humanidad. En el Valle del Cauca, agricultores, pescadores y parteras aún hoy organizan sus actividades según las fases lunares.`,
      conceptos: [
        'Luna nueva: la Luna no es visible (entre Sol y Tierra).',
        'Luna creciente: la parte iluminada crece (cuarto creciente).',
        'Luna llena: vemos toda la cara iluminada.',
        'Luna menguante: la parte iluminada decrece (cuarto menguante).',
        'Ciclo sinódico: 29.5 días — la base del calendario lunar.'
      ],
      saberes: [
        {
          tipo: 'Saber agrícola campesino',
          texto: '"En luna llena, siembra el maíz; en luna nueva, poda los árboles". Los agricultores del Valle del Cauca usan el calendario lunar para determinar cuándo sembrar, cosechar, podar y hasta cuándo cortar la madera de guadua para que no la ataquen los gorgojos.'
        },
        {
          tipo: 'Saber afrodescendiente',
          texto: 'Las parteras tradicionales del norte del Valle calculaban las fechas aproximadas de nacimiento usando las fases de la luna al momento de la concepción, integrando los ciclos naturales con los ciclos del cuerpo.'
        }
      ],
      actividad: {
        nombre: '🌙 Diario Lunar',
        descripcion: 'Durante 30 días, observa la Luna cada noche (anota si está nublado). Dibuja su forma en tu cuaderno. Al final, identifica: ¿cuántos días duró el ciclo completo? ¿Coincide con el calendario lunar de tus familiares o vecinos agricultores?'
      }
    },
    quiz: [
      {
        q: '¿Por qué la Luna parece cambiar de forma?',
        opts: [
          'Porque la Luna se encoge y crece realmente',
          'Porque la Tierra proyecta su sombra sobre la Luna',
          'Porque vemos distintas porciones de la cara iluminada de la Luna según su posición',
          'Porque la Luna rota muy rápido'
        ],
        correct: 2,
        feedback: {
          ok: '¡Muy bien! La Luna siempre tiene la mitad iluminada por el Sol. Lo que cambia es qué porción de esa mitad iluminada podemos ver desde la Tierra según dónde esté la Luna en su órbita.',
          fail: 'La Luna no cambia de tamaño. Lo que cambia es nuestra perspectiva: según la posición de la Luna en su órbita, vemos más o menos de su cara iluminada por el Sol.'
        }
      },
      {
        q: '¿Qué fase lunar recomiendan los agricultores del Valle para sembrar maíz?',
        opts: ['Luna nueva', 'Cuarto creciente', 'Luna llena', 'Cuarto menguante'],
        correct: 2,
        feedback: {
          ok: '¡Correcto! Según el saber agrícola campesino, la luna llena favorece la germinación y el crecimiento de las plantas. La ciencia moderna investiga si la gravedad lunar afecta el movimiento del agua en los suelos.',
          fail: 'El saber campesino del Valle del Cauca recomienda sembrar el maíz en luna llena, pues se cree que favorece la germinación y el vigor de las plantas.'
        }
      }
    ]
  },

  m6: {
    id: 'm6',
    station: 'cielo',
    num: 6,
    title: 'Sombras con Gnomon — Construye un Reloj de Sol',
    competencias: ['IN', 'UC', 'EF'],
    sesiones: 4,
    contenido: {
      intro: `Un reloj de sol es la tecnología más antigua de medición del tiempo. A 4° de latitud norte (Cartago), el sol pasa casi verticalmente, haciendo que las sombras sean muy cortas al mediodía. Construir un gnomon funcional es integrar física, geometría y astronomía en un solo objeto.`,
      conceptos: [
        'Gnomon: objeto vertical que proyecta una sombra para indicar la hora.',
        'Mediodía solar: momento en que el sol está en su punto más alto y la sombra es la más corta.',
        'Latitud: distancia en grados desde el Ecuador. Cartago: 4° 44\' Norte.',
        'Declinación solar: ángulo del Sol respecto al Ecuador — cambia según la época del año.',
        'Hora solar vs. hora oficial: pueden diferir hasta 30 minutos en Colombia.'
      ],
      saberes: [
        {
          tipo: 'Astronomía Quimbaya',
          texto: 'Los arqueólogos han encontrado petroglifos (grabados en roca) en el Eje Cafetero que se cree servían como marcadores astronómicos. Algunas rocas con grabados están orientadas de forma que proyectan sombras específicas en los solsticios, funcionando como gnomos monumentales.'
        },
        {
          tipo: 'Tecnología ancestral',
          texto: 'La guadua (bambú nativo) era usada por comunidades ancestrales como varilla para medir sombras. Su perfecta verticalidad natural la convertía en el gnomon ideal en el trópico colombiano.'
        }
      ],
      actividad: {
        nombre: '🕰️ Tu reloj de sol de cartón',
        descripcion: 'Materiales: cartón, palillo de madera de 15cm, transportador, brújula. Pega el palillo vertical al centro del cartón. Orientado al norte magnético (usa brújula), sal al sol y cada hora marca la sombra y escribe la hora. Calibra tu reloj solar y úsalo al día siguiente. ¿Qué tan preciso es?'
      }
    },
    quiz: [
      {
        q: '¿Cuándo es más corta la sombra del gnomon?',
        opts: [
          'Al amanecer', 'Al mediodía solar', 'Al atardecer', 'A medianoche'
        ],
        correct: 1,
        feedback: {
          ok: '¡Correcto! Al mediodía solar el Sol está en su punto más alto en el cielo (cenit), por lo que la sombra cae más verticalmente y es la más corta del día.',
          fail: 'Al mediodía solar, el Sol alcanza su máxima altura en el cielo. Por eso la sombra del gnomon es la más corta y apunta directamente hacia el norte (en el hemisferio norte).'
        }
      },
      {
        q: '¿Por qué la guadua era el gnomon ideal para las comunidades andinas?',
        opts: [
          'Porque es el bambú más grande del mundo',
          'Porque crece perfectamente vertical y recta de forma natural',
          'Porque su color verde es fácil de ver',
          'Porque solo crece cerca del Ecuador'
        ],
        correct: 1,
        feedback: {
          ok: '¡Excelente! La guadua crece de forma naturalmente vertical y recta, lo que la hace perfecta para medir sombras sin necesidad de ajustes. Además es resistente y liviana.',
          fail: 'La guadua (Guadua angustifolia) es conocida por su crecimiento perfectamente vertical, lo que la convierte en una varilla ideal para un gnomon preciso sin necesidad de nivelarla.'
        }
      }
    ]
  },

  m7: {
    id: 'm7',
    station: 'tierra',
    num: 7,
    title: 'Organización Celular — De la Célula al Organismo',
    competencias: ['UC', 'EF', 'IN'],
    sesiones: 4,
    contenido: {
      intro: `Todo ser vivo está hecho de células — desde la bacteria más pequeña hasta la ceiba más grande del Valle del Cauca. La célula es la unidad mínima de vida, y su organización en tejidos, órganos y sistemas es lo que hace posible la extraordinaria diversidad biológica del territorio TERRA.`,
      conceptos: [
        'Célula: unidad básica y funcional de todos los seres vivos.',
        'Célula procariota: sin núcleo definido (bacterias).',
        'Célula eucariota: con núcleo y orgánulos (plantas, animales, hongos).',
        'Tejido → Órgano → Sistema → Organismo: niveles de organización.',
        'Membrana celular, citoplasma, núcleo: partes fundamentales de toda célula.'
      ],
      saberes: [
        {
          tipo: 'Saber ancestral',
          texto: 'Los alfareros Quimbaya, al trabajar la arcilla para hacer cerámicas, manipulaban materia viva (arcilla con microorganismos) sin saberlo. Los hongos y bacterias del barro fermentado daban plasticidad a la arcilla — ¡biotecnología ancestral!'
        },
        {
          tipo: 'Saber medicinal',
          texto: 'Las plantas medicinales usadas por curanderos del Valle del Cauca (sábila, ruda, manzanilla) funcionan porque sus células producen moléculas activas (principios activos) que interactúan con las células del cuerpo humano.'
        }
      ],
      actividad: {
        nombre: '🔬 Microscopio casero con agua',
        descripcion: 'Coloca una gota de agua en la punta de un gotero o jeringa pequeña. Mira a través de la gota como si fuera una lente. ¿Qué ves en hojas de musgo o en agua de un charco? Dibuja lo observado. Para ver células vegetales: corta una cebolla muy fina y observa con la gota de agua.'
      }
    },
    quiz: [
      {
        q: '¿Cuál es el nivel de organización más pequeño de los seres vivos?',
        opts: ['Tejido', 'Órgano', 'Célula', 'Sistema'],
        correct: 2,
        feedback: {
          ok: '¡Correcto! La célula es el nivel de organización más básico de la vida. Todo organismo vivo está formado por una o más células.',
          fail: 'La célula es la unidad más pequeña de vida. Los tejidos están formados por células, los órganos por tejidos, y los sistemas por órganos.'
        }
      },
      {
        q: '¿Cuál es la diferencia principal entre células procariotas y eucariotas?',
        opts: [
          'El tamaño: las procariotas son más grandes',
          'Las eucariotas tienen núcleo definido, las procariotas no',
          'Las procariotas tienen más mitocondrias',
          'Las eucariotas solo están en animales'
        ],
        correct: 1,
        feedback: {
          ok: '¡Excelente! Las células procariotas (bacterias) no tienen núcleo delimitado por membrana. Las eucariotas (animales, plantas, hongos) sí tienen núcleo con membrana propia.',
          fail: 'La diferencia clave es el núcleo: las células eucariotas tienen el material genético (ADN) dentro de un núcleo rodeado por membrana, mientras las procariotas no.'
        }
      }
    ]
  },

  m8: {
    id: 'm8',
    station: 'tierra',
    num: 8,
    title: 'Clasificación de Seres Vivos — Herbario del Territorio',
    competencias: ['IN', 'EI', 'RT'],
    sesiones: 4,
    contenido: {
      intro: `El Valle del Cauca tiene una de las biodiversidades más ricas del planeta. Clasificar los seres vivos es organizar esa diversidad en grupos para entenderla. Mientras la ciencia usa la taxonomía de Linneo, los pueblos ancestrales del Eje Cafetero tenían sus propios sistemas de clasificación basados en el uso, la forma y el comportamiento de los organismos.`,
      conceptos: [
        'Taxonomía: ciencia que clasifica a los seres vivos.',
        'Jerarquía: Reino → Filo → Clase → Orden → Familia → Género → Especie.',
        'Nombre científico: binomial en latín (Género + especie). Ej: Homo sapiens.',
        'Los 5 reinos: Animalia, Plantae, Fungi, Protista, Monera.',
        'Especie: grupo de organismos que pueden reproducirse entre sí.'
      ],
      saberes: [
        {
          tipo: 'Etnobotánica Quimbaya',
          texto: 'Los Quimbaya clasificaban las plantas en cuatro categorías funcionales: plantas de alimento, plantas de curación, plantas de ritual y plantas de construcción. Esta clasificación funcional se superpone con la taxonomía científica de formas fascinantes.'
        },
        {
          tipo: 'Saber campesino',
          texto: 'Los agricultores del Valle distinguen las "malezas buenas" (que retienen suelo y llaman insectos útiles) de las "malezas malas". Esta clasificación etnobotánica local a menudo coincide con lo que la ecología moderna llama "especies indicadoras".'
        }
      ],
      actividad: {
        nombre: '🌿 Herbario del Río La Vieja',
        descripcion: 'Recoge 5 plantas diferentes de los alrededores de tu escuela o casa (con raíz si es posible). Prénlalas entre papel periódico por 2 semanas. Luego pégalas en hojas de cartulina y anota: nombre común, nombre científico (búscalo en apps como iNaturalist), uso ancestral o medicinal conocido por tu familia.'
      }
    },
    quiz: [
      {
        q: '¿Cuál es el orden correcto de la jerarquía taxonómica (de mayor a menor)?',
        opts: [
          'Especie → Género → Familia → Orden → Clase → Filo → Reino',
          'Reino → Filo → Clase → Orden → Familia → Género → Especie',
          'Género → Especie → Familia → Clase → Orden → Filo → Reino',
          'Reino → Clase → Filo → Familia → Orden → Género → Especie'
        ],
        correct: 1,
        feedback: {
          ok: '¡Perfecto! Una forma de recordarlo: "Rey Felipe Compró Ovejas Finas, Gran Elegancia" (Reino, Filo, Clase, Orden, Familia, Género, Especie).',
          fail: 'La jerarquía va de lo más general a lo más específico: Reino → Filo → Clase → Orden → Familia → Género → Especie. Mnemotecnia: "Rey Felipe Compró Ovejas Finas, Gran Elegancia".'
        }
      },
      {
        q: '¿Cómo se escribe correctamente el nombre científico del ser humano?',
        opts: [
          'homo sapiens',
          'HOMO SAPIENS',
          'Homo sapiens',
          'Homo Sapiens'
        ],
        correct: 2,
        feedback: {
          ok: '¡Correcto! El nombre científico (binomial de Linneo) se escribe con el género en mayúscula y la especie en minúscula, ambos en cursiva o subrayados.',
          fail: 'La nomenclatura binomial se escribe con el primer nombre (género) con mayúscula inicial y el segundo (especie) en minúscula: Homo sapiens. Se escribe en cursiva o se subraya.'
        }
      }
    ]
  },

  m9: {
    id: 'm9',
    station: 'tierra',
    num: 9,
    title: 'El Suelo, Estados de la Materia y Cerámica Quimbaya',
    competencias: ['UC', 'EF', 'EI'],
    sesiones: 4,
    contenido: {
      intro: `El suelo no es solo "tierra": es un ecosistema complejo con millones de organismos, minerales, agua y aire. La cerámica Quimbaya transformaba la arcilla (suelo) usando calor — un proceso que involucra cambios de estado de la materia y reacciones químicas que los alfareros dominaban empíricamente hace más de 1500 años.`,
      conceptos: [
        'Suelo: mezcla de minerales, materia orgánica, agua, aire y organismos.',
        'Horizontes del suelo: capas O (orgánica), A (húmus), B (subsuelo), C (roca madre).',
        'Estados de la materia: sólido, líquido, gaseoso (y plasma).',
        'Cambios de estado: fusión, solidificación, evaporación, condensación, sublimación.',
        'Arcilla: partículas minerales muy finas del suelo con propiedades plásticas.'
      ],
      saberes: [
        {
          tipo: 'Tecnología Quimbaya',
          texto: 'Los alfareros Quimbaya conocían diferentes tipos de arcilla del río La Vieja y sus afluentes. Mezclaban arcillas con distintas propiedades para lograr la plasticidad, dureza y color deseados. Sus hornos de cocción alcanzaban temperaturas de 800-1000°C usando maderas seleccionadas por su poder calorífico.'
        },
        {
          tipo: 'Saber agrícola',
          texto: 'Los caficultores del Eje Cafetero hacen "prueba de puño" para evaluar su suelo: aprietan tierra húmeda con el puño y observan si se compacta (arcilloso), se desmorona (arenoso) o mantiene forma con poros (franco — el ideal para el café). ¡Pedología empírica!'
        }
      ],
      actividad: {
        nombre: '🏺 Arcilla viva — Haz una vasija',
        descripcion: 'Consigue arcilla natural de una quebrada o de una ferretería. Amásala con un poco de agua hasta que sea plástica. Construye una pequeña vasija usando la técnica "rollo" (churros de arcilla apilados). Deja secar al sol 3 días. Observa cómo cambia de estado: ¿qué le pasa al agua? ¿Qué le pasa al volumen? Esta es la misma técnica Quimbaya de hace 1500 años.'
      }
    },
    quiz: [
      {
        q: '¿Cuál es el horizonte del suelo más rico en nutrientes y materia orgánica?',
        opts: ['Horizonte C (roca madre)', 'Horizonte B (subsuelo)', 'Horizonte A (húmus)', 'Horizonte O (hojarasca)'],
        correct: 2,
        feedback: {
          ok: '¡Correcto! El horizonte A o "capa de húmus" es la más fértil: contiene materia orgánica descompuesta, nutrientes minerales y millones de microorganismos esenciales para las plantas.',
          fail: 'El horizonte A (capa vegetal superior con húmus) es el más rico en nutrientes y vida biológica. Es la capa que los agricultores protegen evitando la erosión.'
        }
      },
      {
        q: '¿Qué cambio de estado ocurre cuando se hornea la cerámica de arcilla?',
        opts: [
          'La arcilla se funde y luego solidifica',
          'El agua de la arcilla se evapora y los minerales se sinterizan (se unen por calor)',
          'La arcilla se sublima directamente a gas',
          'Ocurre una condensación dentro del horno'
        ],
        correct: 1,
        feedback: {
          ok: '¡Excelente! Al hornear, primero el agua se evapora (cambio de estado líquido → gas), luego los minerales de la arcilla se funden parcialmente y se unen (sinterización) creando la cerámica dura.',
          fail: 'En la cocción de cerámica, el agua de la arcilla se evapora (cambio de estado), y los minerales arcillosos se sinterizan: sus partículas se unen por calor sin fundirse completamente.'
        }
      }
    ]
  }
}

export const GLOSARIO = [
  { id: 'g1', term: 'Biodiversidad', station: 'rio', color: 'rio',
    sci: 'Variedad de seres vivos (genes, especies, ecosistemas) presentes en un territorio. Colombia es el segundo país más biodiverso del mundo.',
    anc: 'Para los Quimbaya, la diversidad de seres vivos era expresión de la abundancia del territorio. Cada especie tenía un nombre y una función reconocida en la comunidad.' },
  { id: 'g2', term: 'Ecosistema', station: 'rio', color: 'rio',
    sci: 'Sistema formado por los seres vivos de un lugar y su entorno físico (agua, suelo, clima), todos interactuando entre sí.',
    anc: 'El concepto andino de "territorio vivo" equivale al ecosistema: todo conectado, nada separado. El río, el suelo, las plantas y las personas son parte del mismo sistema.' },
  { id: 'g3', term: 'pH', station: 'rio', color: 'rio',
    sci: 'Escala de 0 a 14 que mide la acidez o basicidad de una solución. pH 7 = neutro, < 7 = ácido, > 7 = básico.',
    anc: 'Las abuelas del norte del Valle del Cauca reconocían las propiedades "agrias" (ácidas) o "amargas" (básicas) de plantas medicinales sin conocer la escala de pH.' },
  { id: 'g4', term: 'Gnomon', station: 'cielo', color: 'cielo',
    sci: 'Varilla o estructura vertical que proyecta una sombra. Permite determinar la hora solar y la posición del Sol mediante la longitud y dirección de su sombra.',
    anc: 'Los Quimbaya usaban varas de guadua como gnomons rituales para marcar los solsticios y equinoccios, determinando los momentos clave del calendario agrícola.' },
  { id: 'g5', term: 'Traslación', station: 'cielo', color: 'cielo',
    sci: 'Movimiento de la Tierra alrededor del Sol, que dura aproximadamente 365 días y 6 horas (1 año). Causa los cambios estacionales.',
    anc: 'El "camino del Sol" en el cielo a lo largo del año era mapeado por los Quimbaya en petroglifos, que registraban las posiciones del amanecer en fechas clave.' },
  { id: 'g6', term: 'Antocianinas', station: 'rio', color: 'rio',
    sci: 'Pigmentos naturales presentes en plantas (repollo morado, mora, flor de Jamaica) que cambian de color según el pH del medio en que están.',
    anc: 'Usadas instintivamente por curanderas del Valle del Cauca en preparados medicinales con frutas moradas, sin conocer su nombre científico.' },
  { id: 'g7', term: 'Taxonomía', station: 'tierra', color: 'tierra',
    sci: 'Ciencia que clasifica, nombra y describe a los seres vivos en grupos jerárquicos basados en sus características y relaciones evolutivas.',
    anc: 'Los sistemas de clasificación Quimbaya dividían los seres vivos en funcionales: medicina, alimento, ritual, construcción — una taxonomía práctica y ecológica.' },
  { id: 'g8', term: 'Horizonte del Suelo', station: 'tierra', color: 'tierra',
    sci: 'Cada una de las capas horizontales en que se divide el suelo. Desde arriba: O (hojarasca), A (húmus), B (subsuelo), C (roca madre).',
    anc: 'Los alfareros Quimbaya conocían los horizontes del suelo empíricamente: sabían que la arcilla útil estaba en los horizontes B y C, y que el horizonte A era tierra de cultivo.' },
  { id: 'g9', term: 'Célula', station: 'tierra', color: 'tierra',
    sci: 'Unidad estructural y funcional más pequeña de todos los seres vivos. Toda célula proviene de otra célula (teoría celular).',
    anc: 'Los curanderos tradicionales reconocían las "unidades mínimas de vida" en sus preparados: el fermento de las chicha (levaduras) y el "moho verde" de la fruta podrida (hongos).' },
  { id: 'g10', term: 'Balsaje', station: 'rio', color: 'rio',
    sci: 'Técnica de navegación fluvial usando balsas de guadua (bambú). Practicada en el río La Vieja como medio de transporte y turismo ecológico.',
    anc: 'Tecnología ancestral de comunidades afrodescendientes del norte del Valle del Cauca. Las balsas de guadua se construyen sin clavos, usando la propia flexibilidad del bambú.' },
  { id: 'g11', term: 'Sinterización', station: 'tierra', color: 'tierra',
    sci: 'Proceso por el cual partículas sólidas se unen por calor sin llegar a fundirse completamente. Ocurre en la cocción de cerámica.',
    anc: 'Los alfareros Quimbaya lograban la sinterización de sus cerámicas con hornos de leña, controlando empíricamente la temperatura a través del color del fuego y del brillo de las piezas.' },
  { id: 'g12', term: 'Equinoccio', station: 'cielo', color: 'cielo',
    sci: 'Momento del año en que el Sol está directamente sobre el Ecuador, haciendo que el día y la noche tengan la misma duración (12 horas cada uno). Ocurre dos veces al año.',
    anc: 'Los pueblos andinos celebraban los equinoccios como fechas de renovación. En el Eje Cafetero, el equinoccio de marzo marcaba el inicio del primer ciclo de siembra del año.' }
]

export const CICLO_TERRA = [
  { num: '1', name: 'Salir a Ver', icon: '👁️' },
  { num: '2', name: 'Escuchar al Sabedor', icon: '👂' },
  { num: '3', name: 'Indagar', icon: '🔍' },
  { num: '4', name: 'Traducir', icon: '📝' },
  { num: '5', name: 'Devolver', icon: '🔄' }
]

export const PUNTOS_MAPA = [
  { id: 'p1', name: 'Río La Vieja', lat: 4.743, lng: -75.912, icon: '🌊', color: '#1a9bb5',
    desc: 'Afluente del río Cauca. Ecosistema fluvial principal de la Estación El Río. Biodiversidad: garzas, iguanas, guaduales, peces nativos.' },
  { id: 'p2', name: 'Parque La Isleta', lat: 4.742, lng: -75.911, icon: '🏝️', color: '#1a9bb5',
    desc: 'Punto de observación del río La Vieja en Cartago. Lugar histórico para el balsaje y observación de fauna fluvial.' },
  { id: 'p3', name: 'I.E. Sor María Juliana', lat: 4.747, lng: -75.908, icon: '🏫', color: '#ffd428',
    desc: 'Institución Educativa. Punto de partida del Modelo TERRA. Grado 6° Ciencias Naturales.' },
  { id: 'p4', name: 'Centro Cartago', lat: 4.746, lng: -75.913, icon: '⛪', color: '#ffd428',
    desc: 'Centro histórico de Cartago, Valle del Cauca. Ciudad fundada en el territorio Quimbaya.' },
  { id: 'p5', name: 'Zona Cafetera (Quindío)', lat: 4.534, lng: -75.672, icon: '☕', color: '#c2713a',
    desc: 'Territorio ancestral Quimbaya. Paisaje Cultural Cafetero, Patrimonio de la Humanidad UNESCO. Cerámicas y orfebrería Quimbaya halladas en esta región.' },
  { id: 'p6', name: 'Museo del Oro Quimbaya', lat: 4.535, lng: -75.674, icon: '🏺', color: '#c2713a',
    desc: 'Armenia, Quindío. Museo dedicado a la cultura Quimbaya con colecciones de cerámica, orfebrería y objetos cotidianos. Referente para la Estación La Tierra.' }
]
