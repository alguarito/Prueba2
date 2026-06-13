const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chartjs-BP_PX2VW.js","assets/rolldown-runtime-QTnfLwEv.js","assets/leaflet-C3thvLVr.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-QTnfLwEv.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=`modulepreload`,n=function(e){return`/PRUEBA/`+e},r={},i=function(e,i,a){let o=Promise.resolve();if(i&&i.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=n(i,a),i in r)return;r[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.href===i&&(!o||n.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:t,o||(l.as=`script`),l.crossOrigin=``,l.href=i,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,t)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},a=`true`,o=`false`,s=a===`true`,c=o===`true`;function l(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:a,onRegistered:o,onRegisteredSW:l,onRegisterError:u}=e,d,f,p,m=async(e=!0)=>{await f,s||p?.()};async function h(){if(`serviceWorker`in navigator){if(d=await i(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/PRUEBA/sw.js`,{scope:`/PRUEBA/`,type:`classic`})).catch(e=>{u?.(e)}),!d)return;if(p=()=>{d?.messageSkipWaiting()},!c)if(s)d.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),d.addEventListener(`installed`,e=>{e.isUpdate||a?.()});else{let e=!1,t=()=>{e=!0,d?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};d.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&a?.():n.isExternal?t():!e&&a?.():n.isUpdate||a?.()}),d.addEventListener(`waiting`,t)}d.register({immediate:t}).then(e=>{l?l(`/PRUEBA/sw.js`,e):o?.(e)}).catch(e=>{u?.(e)})}}return f=h(),m}var u=[{id:`rio`,name:`El Río`,emoji:`🌊`,periodo:`Primer Período`,desc:`Ecosistemas fluviales y saberes del agua`,color:`rio`,modules:[`m1`,`m2`,`m3`]},{id:`cielo`,name:`El Cielo`,emoji:`🌙`,periodo:`Segundo Período`,desc:`Astronomía y calendarios ancestrales`,color:`cielo`,modules:[`m4`,`m5`,`m6`]},{id:`tierra`,name:`La Tierra`,emoji:`🌱`,periodo:`Tercer Período`,desc:`Suelo, vida y cerámica Quimbaya`,color:`tierra`,modules:[`m7`,`m8`,`m9`]}],d={m1:{id:`m1`,station:`rio`,num:1,title:`El Ecosistema Fluvial del Río La Vieja`,competencias:[`IN`,`EF`,`EI`],sesiones:4,contenido:{intro:`El río La Vieja es uno de los afluentes más importantes del río Cauca en el Eje Cafetero colombiano. Sus orillas son el hogar de una rica biodiversidad: garzas, iguanas, guaduales y peces de agua dulce conviven en este ecosistema vivo que es el "aula" principal de esta estación.`,conceptos:[`Ecosistema: conjunto de seres vivos y su entorno físico que interactúan entre sí.`,`Bioma: gran región ecológica con características climáticas y biológicas similares.`,`Cadena alimentaria: secuencia de quién come a quién en un ecosistema.`,`Productores, consumidores y descomponedores: roles en el ecosistema.`,`Biodiversidad: variedad de formas de vida en un ecosistema.`],saberes:[{tipo:`Saber ancestral Quimbaya`,texto:`Los Quimbaya consideraban los ríos como seres vivos con espíritu propio. El río La Vieja era llamado "la vena de la tierra" y su cuidado era responsabilidad colectiva del pueblo.`},{tipo:`Saber campesino-mestizo`,texto:`Los pescadores locales reconocen las épocas de "subienda" (migración de peces), los cambios del nivel del río y los indicadores naturales de calidad del agua como la presencia de ciertas plantas y animales.`},{tipo:`Tradición afrodescendiente`,texto:`Comunidades del norte del Valle del Cauca tienen prácticas de "balsaje" (navegación en balsa de guadua) como tecnología ancestral de transporte y conexión con el río.`}],actividad:{nombre:`🔍 Salida al Aula Viva`,descripcion:`Visita a la orilla del río La Vieja o quebrada cercana. Identifica y registra en tu cuaderno: 3 productores, 2 consumidores y 1 descomponedor que observes. Dibuja una cadena alimentaria con lo que encuentres.`}},quiz:[{q:`¿Qué función cumplen los descomponedores en el ecosistema del río?`,opts:[`Producir alimento mediante la fotosíntesis`,`Descomponer materia orgánica y devolver nutrientes al suelo`,`Cazar y consumir otros animales`,`Filtrar el agua del río`],correct:1,feedback:{ok:`¡Correcto! Los descomponedores (hongos, bacterias) rompen la materia orgánica muerta y reciclan los nutrientes al ecosistema, cerrando el ciclo de la materia.`,fail:`Los descomponedores como hongos y bacterias se especializan en descomponer materia orgánica muerta, liberando nutrientes que pueden ser usados de nuevo por las plantas.`}},{q:`¿Por qué los Quimbaya llamaban al río "la vena de la tierra"?`,opts:[`Porque el agua del río es de color rojo`,`Porque reconocían al río como un ser vivo que da vida al territorio, como las venas al cuerpo`,`Porque el río corre muy rápido`,`Porque el río sirve solo para pescar`],correct:1,feedback:{ok:`¡Excelente! Esta cosmovisión Quimbaya reconoce al río como parte viva del territorio, no solo como un recurso. ¡Una forma de pensar muy similar a la ecología moderna!`,fail:`La metáfora "vena de la tierra" refleja la visión Quimbaya del río como un sistema vital del territorio, igual que las venas son vitales para el cuerpo humano.`}},{q:`¿Qué es la biodiversidad?`,opts:[`La cantidad de agua en un ecosistema`,`La variedad de formas de vida en un ecosistema o región`,`El número de árboles en un bosque`,`La velocidad a la que crecen las plantas`],correct:1,feedback:{ok:`¡Muy bien! La biodiversidad incluye la variedad de especies, genes y ecosistemas. El Eje Cafetero colombiano es uno de los 36 puntos "hotspot" de biodiversidad del mundo.`,fail:`Biodiversidad se refiere a la variedad de vida: diferentes especies de plantas, animales, hongos y microorganismos que conviven en un lugar.`}}]},m2:{id:`m2`,station:`rio`,num:2,title:`Ciclo del Agua y Saberes del Río`,competencias:[`UC`,`EI`,`RT`],sesiones:4,contenido:{intro:`El agua nunca desaparece: viaja en un ciclo eterno entre la tierra, el río, las nubes y la lluvia. Las comunidades del Valle del Cauca han observado este ciclo por siglos y construido saberes propios sobre cómo predecir la lluvia, cuidar las fuentes y aprovechar el agua responsablemente.`,conceptos:[`Evaporación: el agua líquida se convierte en vapor por el calor.`,`Condensación: el vapor de agua se enfría y forma gotas (nubes).`,`Precipitación: el agua cae como lluvia, granizo o nieve.`,`Infiltración: el agua penetra el suelo y recarga los acuíferos.`,`Escorrentía: el agua fluye por la superficie hacia ríos y quebradas.`],saberes:[{tipo:`Saber campesino`,texto:`Los agricultores del Valle del Cauca identifican la llegada de las lluvias por señales naturales: el comportamiento de las hormigas arrieras, la floración del yarumo, y el color del cielo al atardecer.`},{tipo:`Saber ancestral`,texto:`Las comunidades indígenas del Eje Cafetero realizaban rituales de "llamado de la lluvia" en épocas de sequía, reconociendo la interdependencia entre las acciones humanas y los ciclos naturales del agua.`}],actividad:{nombre:`💧 Experimento: Ciclo del agua en una bolsa`,descripcion:`Llena una bolsa transparente con agua, añade unas gotas de colorante azul y ciérrala. Pégala en una ventana soleada. Observa durante 30 minutos y dibuja lo que ocurre: ¿dónde aparecen las gotas? ¿Qué parte del ciclo estás viendo?`}},quiz:[{q:`¿En qué etapa del ciclo del agua el vapor se convierte en nubes?`,opts:[`Evaporación`,`Precipitación`,`Condensación`,`Infiltración`],correct:2,feedback:{ok:`¡Correcto! En la condensación, el vapor de agua sube, se enfría en las capas altas de la atmósfera y se agrupa en pequeñas gotas formando las nubes.`,fail:`La condensación es cuando el vapor de agua se enfría y se convierte en pequeñas gotas de agua que forman las nubes.`}},{q:`¿Qué señal natural usan los campesinos del Valle para predecir la lluvia?`,opts:[`El color del agua del río`,`El comportamiento de las hormigas arrieras y la floración del yarumo`,`La temperatura del suelo`,`El número de estrellas visibles`],correct:1,feedback:{ok:`¡Excelente! Este saber campesino es una forma de "meteorología ancestral" basada en la observación cuidadosa de la naturaleza durante generaciones.`,fail:`Los campesinos observan indicadores biológicos como las hormigas arrieras (que entran a sus nidos antes de llover) y la floración del yarumo para predecir el clima.`}}]},m3:{id:`m3`,station:`rio`,num:3,title:`Calidad del Agua — Kit de pH Casero`,competencias:[`IN`,`EF`,`UC`],sesiones:4,contenido:{intro:`El agua que bebemos, nadamos y pescamos puede verse limpia pero contener sustancias que la hacen ácida o básica. El pH es una escala del 0 al 14 que mide esto. Las plantas y animales del río son sensibles al pH: un río sano tiene pH entre 6.5 y 8.5. Hoy aprenderás a medirlo con materiales caseros.`,conceptos:[`pH: medida de acidez o basicidad de una solución (escala 0-14).`,`Ácido (pH < 7): limón, vinagre. Dañino para peces en exceso.`,`Neutro (pH = 7): agua pura.`,`Básico o alcalino (pH > 7): jabón, bicarbonato.`,`Indicador natural: sustancia vegetal que cambia de color según el pH.`],saberes:[{tipo:`Saber ancestral`,texto:`Las comunidades indígenas determinaban la calidad del agua observando qué animales la habitaban. La presencia de ciertas larvas de insectos (bioindicadores) señalaba agua limpia. ¡Hoy la ciencia confirma este método como "biomonitoreo"!`},{tipo:`Saber afrodescendiente`,texto:`Abuelas del norte del Valle usaban la col morada (repollo morado) para hacer remedios, y observaban cómo cambiaba de color al contacto con diferentes plantas. Sin saberlo, ¡estaban haciendo indicadores de pH!`}],actividad:{nombre:`🧪 Kit de pH con repollo morado`,descripcion:`Hierve hojas de repollo morado en agua hasta obtener un líquido violeta. Filtra y guarda el líquido. Prueba con: vinagre (ácido), agua del grifo (neutro), bicarbonato disuelto (básico). Registra los colores: rosado/rojo = ácido, violeta = neutro, verde/amarillo = básico.`}},quiz:[{q:`¿Qué pH tiene el agua pura?`,opts:[`3`,`7`,`10`,`14`],correct:1,feedback:{ok:`¡Correcto! El agua pura tiene pH 7 (neutro). Por eso es el punto de referencia de la escala de pH.`,fail:`El agua pura tiene pH 7, que se considera neutro. Valores menores son ácidos y mayores son básicos.`}},{q:`¿Por qué el repollo morado puede usarse como indicador de pH?`,opts:[`Porque tiene un sabor muy fuerte`,`Porque contiene antocianinas, pigmentos que cambian de color según la acidez`,`Porque es de color morado oscuro`,`Porque crece cerca de los ríos`],correct:1,feedback:{ok:`¡Excelente! Las antocianinas son moléculas que cambian su estructura según el pH, lo que cambia el color que absorben. ¡Es química real con ingredientes de cocina!`,fail:`Las antocianinas son los pigmentos del repollo morado. Su estructura molecular cambia con el pH, haciendo que absorban diferentes colores de luz.`}}]},m4:{id:`m4`,station:`cielo`,num:4,title:`Movimientos Astronómicos: Sol, Tierra y Luna`,competencias:[`UC`,`EF`,`EI`],sesiones:4,contenido:{intro:`Desde los Andes, el cielo nocturno de Cartago revela constelaciones que los Quimbaya usaban para navegar por el territorio y planificar la agricultura. La ciencia moderna explica los movimientos de la Tierra, el Sol y la Luna con precisión matemática, pero los saberes ancestrales los observaron con siglos de anticipación.`,conceptos:[`Rotación terrestre: giro de la Tierra sobre su eje (24 horas = 1 día).`,`Traslación terrestre: órbita de la Tierra alrededor del Sol (365 días = 1 año).`,`Inclinación axial: 23.5°, causa las estaciones del año.`,`Sistema Sol-Tierra-Luna: el trio que determina mareas, eclipses y calendarios.`,`Solsticio y equinoccio: momentos especiales del año astronómico.`],saberes:[{tipo:`Saber Quimbaya`,texto:`Los Quimbaya observaban el "camino del Sol" (la eclíptica) a lo largo del año. Marcaban con petroglifos las posiciones del sol al amanecer en fechas clave del calendario agrícola, creando un sistema de astronomía práctica.`},{tipo:`Saber campesino`,texto:`Los agricultores del Valle del Cauca conocen las "cabañuelas" — un sistema de pronóstico climático basado en los primeros 12 días de enero, donde cada día representa el clima de un mes del año.`}],actividad:{nombre:`☀️ Construye tu Gnomon`,descripcion:`Clava un palo vertical de 30cm en el suelo en un lugar soleado. Cada hora, desde las 8am hasta las 3pm, marca con una piedra la punta de la sombra. Une las marcas. La línea más corta indica el mediodía solar (Norte verdadero). ¿En qué dirección se mueve el Sol en Cartago?`}},quiz:[{q:`¿Cuánto tarda la Tierra en completar una vuelta alrededor del Sol?`,opts:[`24 horas`,`30 días`,`365 días aproximadamente`,`12 horas`],correct:2,feedback:{ok:`¡Correcto! Una traslación completa dura 365 días y 6 horas aproximadamente. Por eso cada 4 años tenemos un "año bisiesto" de 366 días.`,fail:`La traslación de la Tierra alrededor del Sol dura aproximadamente 365 días (1 año). Las 24 horas son el tiempo de rotación (1 día).`}},{q:`¿Qué mide el gnomon?`,opts:[`La temperatura del suelo`,`La velocidad del viento`,`La posición del Sol mediante la sombra que proyecta`,`La humedad del aire`],correct:2,feedback:{ok:`¡Exacto! El gnomon es uno de los instrumentos astronómicos más antiguos de la humanidad. Los Quimbaya y otras culturas lo usaban para marcar el tiempo y las estaciones.`,fail:`El gnomon es una varilla vertical que proyecta una sombra. La longitud y dirección de esa sombra indica la posición del Sol en el cielo y la hora del día.`}}]},m5:{id:`m5`,station:`cielo`,num:5,title:`Fases de la Luna y Calendario Agrícola`,competencias:[`IN`,`EI`,`RT`],sesiones:4,contenido:{intro:`La Luna no cambia de forma — lo que cambia es qué parte de su cara iluminada vemos desde la Tierra. Este ciclo de 29.5 días fue el primer "calendario" de la humanidad. En el Valle del Cauca, agricultores, pescadores y parteras aún hoy organizan sus actividades según las fases lunares.`,conceptos:[`Luna nueva: la Luna no es visible (entre Sol y Tierra).`,`Luna creciente: la parte iluminada crece (cuarto creciente).`,`Luna llena: vemos toda la cara iluminada.`,`Luna menguante: la parte iluminada decrece (cuarto menguante).`,`Ciclo sinódico: 29.5 días — la base del calendario lunar.`],saberes:[{tipo:`Saber agrícola campesino`,texto:`"En luna llena, siembra el maíz; en luna nueva, poda los árboles". Los agricultores del Valle del Cauca usan el calendario lunar para determinar cuándo sembrar, cosechar, podar y hasta cuándo cortar la madera de guadua para que no la ataquen los gorgojos.`},{tipo:`Saber afrodescendiente`,texto:`Las parteras tradicionales del norte del Valle calculaban las fechas aproximadas de nacimiento usando las fases de la luna al momento de la concepción, integrando los ciclos naturales con los ciclos del cuerpo.`}],actividad:{nombre:`🌙 Diario Lunar`,descripcion:`Durante 30 días, observa la Luna cada noche (anota si está nublado). Dibuja su forma en tu cuaderno. Al final, identifica: ¿cuántos días duró el ciclo completo? ¿Coincide con el calendario lunar de tus familiares o vecinos agricultores?`}},quiz:[{q:`¿Por qué la Luna parece cambiar de forma?`,opts:[`Porque la Luna se encoge y crece realmente`,`Porque la Tierra proyecta su sombra sobre la Luna`,`Porque vemos distintas porciones de la cara iluminada de la Luna según su posición`,`Porque la Luna rota muy rápido`],correct:2,feedback:{ok:`¡Muy bien! La Luna siempre tiene la mitad iluminada por el Sol. Lo que cambia es qué porción de esa mitad iluminada podemos ver desde la Tierra según dónde esté la Luna en su órbita.`,fail:`La Luna no cambia de tamaño. Lo que cambia es nuestra perspectiva: según la posición de la Luna en su órbita, vemos más o menos de su cara iluminada por el Sol.`}},{q:`¿Qué fase lunar recomiendan los agricultores del Valle para sembrar maíz?`,opts:[`Luna nueva`,`Cuarto creciente`,`Luna llena`,`Cuarto menguante`],correct:2,feedback:{ok:`¡Correcto! Según el saber agrícola campesino, la luna llena favorece la germinación y el crecimiento de las plantas. La ciencia moderna investiga si la gravedad lunar afecta el movimiento del agua en los suelos.`,fail:`El saber campesino del Valle del Cauca recomienda sembrar el maíz en luna llena, pues se cree que favorece la germinación y el vigor de las plantas.`}}]},m6:{id:`m6`,station:`cielo`,num:6,title:`Sombras con Gnomon — Construye un Reloj de Sol`,competencias:[`IN`,`UC`,`EF`],sesiones:4,contenido:{intro:`Un reloj de sol es la tecnología más antigua de medición del tiempo. A 4° de latitud norte (Cartago), el sol pasa casi verticalmente, haciendo que las sombras sean muy cortas al mediodía. Construir un gnomon funcional es integrar física, geometría y astronomía en un solo objeto.`,conceptos:[`Gnomon: objeto vertical que proyecta una sombra para indicar la hora.`,`Mediodía solar: momento en que el sol está en su punto más alto y la sombra es la más corta.`,`Latitud: distancia en grados desde el Ecuador. Cartago: 4° 44' Norte.`,`Declinación solar: ángulo del Sol respecto al Ecuador — cambia según la época del año.`,`Hora solar vs. hora oficial: pueden diferir hasta 30 minutos en Colombia.`],saberes:[{tipo:`Astronomía Quimbaya`,texto:`Los arqueólogos han encontrado petroglifos (grabados en roca) en el Eje Cafetero que se cree servían como marcadores astronómicos. Algunas rocas con grabados están orientadas de forma que proyectan sombras específicas en los solsticios, funcionando como gnomos monumentales.`},{tipo:`Tecnología ancestral`,texto:`La guadua (bambú nativo) era usada por comunidades ancestrales como varilla para medir sombras. Su perfecta verticalidad natural la convertía en el gnomon ideal en el trópico colombiano.`}],actividad:{nombre:`🕰️ Tu reloj de sol de cartón`,descripcion:`Materiales: cartón, palillo de madera de 15cm, transportador, brújula. Pega el palillo vertical al centro del cartón. Orientado al norte magnético (usa brújula), sal al sol y cada hora marca la sombra y escribe la hora. Calibra tu reloj solar y úsalo al día siguiente. ¿Qué tan preciso es?`}},quiz:[{q:`¿Cuándo es más corta la sombra del gnomon?`,opts:[`Al amanecer`,`Al mediodía solar`,`Al atardecer`,`A medianoche`],correct:1,feedback:{ok:`¡Correcto! Al mediodía solar el Sol está en su punto más alto en el cielo (cenit), por lo que la sombra cae más verticalmente y es la más corta del día.`,fail:`Al mediodía solar, el Sol alcanza su máxima altura en el cielo. Por eso la sombra del gnomon es la más corta y apunta directamente hacia el norte (en el hemisferio norte).`}},{q:`¿Por qué la guadua era el gnomon ideal para las comunidades andinas?`,opts:[`Porque es el bambú más grande del mundo`,`Porque crece perfectamente vertical y recta de forma natural`,`Porque su color verde es fácil de ver`,`Porque solo crece cerca del Ecuador`],correct:1,feedback:{ok:`¡Excelente! La guadua crece de forma naturalmente vertical y recta, lo que la hace perfecta para medir sombras sin necesidad de ajustes. Además es resistente y liviana.`,fail:`La guadua (Guadua angustifolia) es conocida por su crecimiento perfectamente vertical, lo que la convierte en una varilla ideal para un gnomon preciso sin necesidad de nivelarla.`}}]},m7:{id:`m7`,station:`tierra`,num:7,title:`Organización Celular — De la Célula al Organismo`,competencias:[`UC`,`EF`,`IN`],sesiones:4,contenido:{intro:`Todo ser vivo está hecho de células — desde la bacteria más pequeña hasta la ceiba más grande del Valle del Cauca. La célula es la unidad mínima de vida, y su organización en tejidos, órganos y sistemas es lo que hace posible la extraordinaria diversidad biológica del territorio TERRA.`,conceptos:[`Célula: unidad básica y funcional de todos los seres vivos.`,`Célula procariota: sin núcleo definido (bacterias).`,`Célula eucariota: con núcleo y orgánulos (plantas, animales, hongos).`,`Tejido → Órgano → Sistema → Organismo: niveles de organización.`,`Membrana celular, citoplasma, núcleo: partes fundamentales de toda célula.`],saberes:[{tipo:`Saber ancestral`,texto:`Los alfareros Quimbaya, al trabajar la arcilla para hacer cerámicas, manipulaban materia viva (arcilla con microorganismos) sin saberlo. Los hongos y bacterias del barro fermentado daban plasticidad a la arcilla — ¡biotecnología ancestral!`},{tipo:`Saber medicinal`,texto:`Las plantas medicinales usadas por curanderos del Valle del Cauca (sábila, ruda, manzanilla) funcionan porque sus células producen moléculas activas (principios activos) que interactúan con las células del cuerpo humano.`}],actividad:{nombre:`🔬 Microscopio casero con agua`,descripcion:`Coloca una gota de agua en la punta de un gotero o jeringa pequeña. Mira a través de la gota como si fuera una lente. ¿Qué ves en hojas de musgo o en agua de un charco? Dibuja lo observado. Para ver células vegetales: corta una cebolla muy fina y observa con la gota de agua.`}},quiz:[{q:`¿Cuál es el nivel de organización más pequeño de los seres vivos?`,opts:[`Tejido`,`Órgano`,`Célula`,`Sistema`],correct:2,feedback:{ok:`¡Correcto! La célula es el nivel de organización más básico de la vida. Todo organismo vivo está formado por una o más células.`,fail:`La célula es la unidad más pequeña de vida. Los tejidos están formados por células, los órganos por tejidos, y los sistemas por órganos.`}},{q:`¿Cuál es la diferencia principal entre células procariotas y eucariotas?`,opts:[`El tamaño: las procariotas son más grandes`,`Las eucariotas tienen núcleo definido, las procariotas no`,`Las procariotas tienen más mitocondrias`,`Las eucariotas solo están en animales`],correct:1,feedback:{ok:`¡Excelente! Las células procariotas (bacterias) no tienen núcleo delimitado por membrana. Las eucariotas (animales, plantas, hongos) sí tienen núcleo con membrana propia.`,fail:`La diferencia clave es el núcleo: las células eucariotas tienen el material genético (ADN) dentro de un núcleo rodeado por membrana, mientras las procariotas no.`}}]},m8:{id:`m8`,station:`tierra`,num:8,title:`Clasificación de Seres Vivos — Herbario del Territorio`,competencias:[`IN`,`EI`,`RT`],sesiones:4,contenido:{intro:`El Valle del Cauca tiene una de las biodiversidades más ricas del planeta. Clasificar los seres vivos es organizar esa diversidad en grupos para entenderla. Mientras la ciencia usa la taxonomía de Linneo, los pueblos ancestrales del Eje Cafetero tenían sus propios sistemas de clasificación basados en el uso, la forma y el comportamiento de los organismos.`,conceptos:[`Taxonomía: ciencia que clasifica a los seres vivos.`,`Jerarquía: Reino → Filo → Clase → Orden → Familia → Género → Especie.`,`Nombre científico: binomial en latín (Género + especie). Ej: Homo sapiens.`,`Los 5 reinos: Animalia, Plantae, Fungi, Protista, Monera.`,`Especie: grupo de organismos que pueden reproducirse entre sí.`],saberes:[{tipo:`Etnobotánica Quimbaya`,texto:`Los Quimbaya clasificaban las plantas en cuatro categorías funcionales: plantas de alimento, plantas de curación, plantas de ritual y plantas de construcción. Esta clasificación funcional se superpone con la taxonomía científica de formas fascinantes.`},{tipo:`Saber campesino`,texto:`Los agricultores del Valle distinguen las "malezas buenas" (que retienen suelo y llaman insectos útiles) de las "malezas malas". Esta clasificación etnobotánica local a menudo coincide con lo que la ecología moderna llama "especies indicadoras".`}],actividad:{nombre:`🌿 Herbario del Río La Vieja`,descripcion:`Recoge 5 plantas diferentes de los alrededores de tu escuela o casa (con raíz si es posible). Prénlalas entre papel periódico por 2 semanas. Luego pégalas en hojas de cartulina y anota: nombre común, nombre científico (búscalo en apps como iNaturalist), uso ancestral o medicinal conocido por tu familia.`}},quiz:[{q:`¿Cuál es el orden correcto de la jerarquía taxonómica (de mayor a menor)?`,opts:[`Especie → Género → Familia → Orden → Clase → Filo → Reino`,`Reino → Filo → Clase → Orden → Familia → Género → Especie`,`Género → Especie → Familia → Clase → Orden → Filo → Reino`,`Reino → Clase → Filo → Familia → Orden → Género → Especie`],correct:1,feedback:{ok:`¡Perfecto! Una forma de recordarlo: "Rey Felipe Compró Ovejas Finas, Gran Elegancia" (Reino, Filo, Clase, Orden, Familia, Género, Especie).`,fail:`La jerarquía va de lo más general a lo más específico: Reino → Filo → Clase → Orden → Familia → Género → Especie. Mnemotecnia: "Rey Felipe Compró Ovejas Finas, Gran Elegancia".`}},{q:`¿Cómo se escribe correctamente el nombre científico del ser humano?`,opts:[`homo sapiens`,`HOMO SAPIENS`,`Homo sapiens`,`Homo Sapiens`],correct:2,feedback:{ok:`¡Correcto! El nombre científico (binomial de Linneo) se escribe con el género en mayúscula y la especie en minúscula, ambos en cursiva o subrayados.`,fail:`La nomenclatura binomial se escribe con el primer nombre (género) con mayúscula inicial y el segundo (especie) en minúscula: Homo sapiens. Se escribe en cursiva o se subraya.`}}]},m9:{id:`m9`,station:`tierra`,num:9,title:`El Suelo, Estados de la Materia y Cerámica Quimbaya`,competencias:[`UC`,`EF`,`EI`],sesiones:4,contenido:{intro:`El suelo no es solo "tierra": es un ecosistema complejo con millones de organismos, minerales, agua y aire. La cerámica Quimbaya transformaba la arcilla (suelo) usando calor — un proceso que involucra cambios de estado de la materia y reacciones químicas que los alfareros dominaban empíricamente hace más de 1500 años.`,conceptos:[`Suelo: mezcla de minerales, materia orgánica, agua, aire y organismos.`,`Horizontes del suelo: capas O (orgánica), A (húmus), B (subsuelo), C (roca madre).`,`Estados de la materia: sólido, líquido, gaseoso (y plasma).`,`Cambios de estado: fusión, solidificación, evaporación, condensación, sublimación.`,`Arcilla: partículas minerales muy finas del suelo con propiedades plásticas.`],saberes:[{tipo:`Tecnología Quimbaya`,texto:`Los alfareros Quimbaya conocían diferentes tipos de arcilla del río La Vieja y sus afluentes. Mezclaban arcillas con distintas propiedades para lograr la plasticidad, dureza y color deseados. Sus hornos de cocción alcanzaban temperaturas de 800-1000°C usando maderas seleccionadas por su poder calorífico.`},{tipo:`Saber agrícola`,texto:`Los caficultores del Eje Cafetero hacen "prueba de puño" para evaluar su suelo: aprietan tierra húmeda con el puño y observan si se compacta (arcilloso), se desmorona (arenoso) o mantiene forma con poros (franco — el ideal para el café). ¡Pedología empírica!`}],actividad:{nombre:`🏺 Arcilla viva — Haz una vasija`,descripcion:`Consigue arcilla natural de una quebrada o de una ferretería. Amásala con un poco de agua hasta que sea plástica. Construye una pequeña vasija usando la técnica "rollo" (churros de arcilla apilados). Deja secar al sol 3 días. Observa cómo cambia de estado: ¿qué le pasa al agua? ¿Qué le pasa al volumen? Esta es la misma técnica Quimbaya de hace 1500 años.`}},quiz:[{q:`¿Cuál es el horizonte del suelo más rico en nutrientes y materia orgánica?`,opts:[`Horizonte C (roca madre)`,`Horizonte B (subsuelo)`,`Horizonte A (húmus)`,`Horizonte O (hojarasca)`],correct:2,feedback:{ok:`¡Correcto! El horizonte A o "capa de húmus" es la más fértil: contiene materia orgánica descompuesta, nutrientes minerales y millones de microorganismos esenciales para las plantas.`,fail:`El horizonte A (capa vegetal superior con húmus) es el más rico en nutrientes y vida biológica. Es la capa que los agricultores protegen evitando la erosión.`}},{q:`¿Qué cambio de estado ocurre cuando se hornea la cerámica de arcilla?`,opts:[`La arcilla se funde y luego solidifica`,`El agua de la arcilla se evapora y los minerales se sinterizan (se unen por calor)`,`La arcilla se sublima directamente a gas`,`Ocurre una condensación dentro del horno`],correct:1,feedback:{ok:`¡Excelente! Al hornear, primero el agua se evapora (cambio de estado líquido → gas), luego los minerales de la arcilla se funden parcialmente y se unen (sinterización) creando la cerámica dura.`,fail:`En la cocción de cerámica, el agua de la arcilla se evapora (cambio de estado), y los minerales arcillosos se sinterizan: sus partículas se unen por calor sin fundirse completamente.`}}]}},f=[{id:`g1`,term:`Biodiversidad`,station:`rio`,color:`rio`,sci:`Variedad de seres vivos (genes, especies, ecosistemas) presentes en un territorio. Colombia es el segundo país más biodiverso del mundo.`,anc:`Para los Quimbaya, la diversidad de seres vivos era expresión de la abundancia del territorio. Cada especie tenía un nombre y una función reconocida en la comunidad.`},{id:`g2`,term:`Ecosistema`,station:`rio`,color:`rio`,sci:`Sistema formado por los seres vivos de un lugar y su entorno físico (agua, suelo, clima), todos interactuando entre sí.`,anc:`El concepto andino de "territorio vivo" equivale al ecosistema: todo conectado, nada separado. El río, el suelo, las plantas y las personas son parte del mismo sistema.`},{id:`g3`,term:`pH`,station:`rio`,color:`rio`,sci:`Escala de 0 a 14 que mide la acidez o basicidad de una solución. pH 7 = neutro, < 7 = ácido, > 7 = básico.`,anc:`Las abuelas del norte del Valle del Cauca reconocían las propiedades "agrias" (ácidas) o "amargas" (básicas) de plantas medicinales sin conocer la escala de pH.`},{id:`g4`,term:`Gnomon`,station:`cielo`,color:`cielo`,sci:`Varilla o estructura vertical que proyecta una sombra. Permite determinar la hora solar y la posición del Sol mediante la longitud y dirección de su sombra.`,anc:`Los Quimbaya usaban varas de guadua como gnomons rituales para marcar los solsticios y equinoccios, determinando los momentos clave del calendario agrícola.`},{id:`g5`,term:`Traslación`,station:`cielo`,color:`cielo`,sci:`Movimiento de la Tierra alrededor del Sol, que dura aproximadamente 365 días y 6 horas (1 año). Causa los cambios estacionales.`,anc:`El "camino del Sol" en el cielo a lo largo del año era mapeado por los Quimbaya en petroglifos, que registraban las posiciones del amanecer en fechas clave.`},{id:`g6`,term:`Antocianinas`,station:`rio`,color:`rio`,sci:`Pigmentos naturales presentes en plantas (repollo morado, mora, flor de Jamaica) que cambian de color según el pH del medio en que están.`,anc:`Usadas instintivamente por curanderas del Valle del Cauca en preparados medicinales con frutas moradas, sin conocer su nombre científico.`},{id:`g7`,term:`Taxonomía`,station:`tierra`,color:`tierra`,sci:`Ciencia que clasifica, nombra y describe a los seres vivos en grupos jerárquicos basados en sus características y relaciones evolutivas.`,anc:`Los sistemas de clasificación Quimbaya dividían los seres vivos en funcionales: medicina, alimento, ritual, construcción — una taxonomía práctica y ecológica.`},{id:`g8`,term:`Horizonte del Suelo`,station:`tierra`,color:`tierra`,sci:`Cada una de las capas horizontales en que se divide el suelo. Desde arriba: O (hojarasca), A (húmus), B (subsuelo), C (roca madre).`,anc:`Los alfareros Quimbaya conocían los horizontes del suelo empíricamente: sabían que la arcilla útil estaba en los horizontes B y C, y que el horizonte A era tierra de cultivo.`},{id:`g9`,term:`Célula`,station:`tierra`,color:`tierra`,sci:`Unidad estructural y funcional más pequeña de todos los seres vivos. Toda célula proviene de otra célula (teoría celular).`,anc:`Los curanderos tradicionales reconocían las "unidades mínimas de vida" en sus preparados: el fermento de las chicha (levaduras) y el "moho verde" de la fruta podrida (hongos).`},{id:`g10`,term:`Balsaje`,station:`rio`,color:`rio`,sci:`Técnica de navegación fluvial usando balsas de guadua (bambú). Practicada en el río La Vieja como medio de transporte y turismo ecológico.`,anc:`Tecnología ancestral de comunidades afrodescendientes del norte del Valle del Cauca. Las balsas de guadua se construyen sin clavos, usando la propia flexibilidad del bambú.`},{id:`g11`,term:`Sinterización`,station:`tierra`,color:`tierra`,sci:`Proceso por el cual partículas sólidas se unen por calor sin llegar a fundirse completamente. Ocurre en la cocción de cerámica.`,anc:`Los alfareros Quimbaya lograban la sinterización de sus cerámicas con hornos de leña, controlando empíricamente la temperatura a través del color del fuego y del brillo de las piezas.`},{id:`g12`,term:`Equinoccio`,station:`cielo`,color:`cielo`,sci:`Momento del año en que el Sol está directamente sobre el Ecuador, haciendo que el día y la noche tengan la misma duración (12 horas cada uno). Ocurre dos veces al año.`,anc:`Los pueblos andinos celebraban los equinoccios como fechas de renovación. En el Eje Cafetero, el equinoccio de marzo marcaba el inicio del primer ciclo de siembra del año.`}],p=[{num:`1`,name:`Salir a Ver`,icon:`👁️`},{num:`2`,name:`Escuchar al Sabedor`,icon:`👂`},{num:`3`,name:`Indagar`,icon:`🔍`},{num:`4`,name:`Traducir`,icon:`📝`},{num:`5`,name:`Devolver`,icon:`🔄`}],m=[{id:`p1`,name:`Río La Vieja`,lat:4.743,lng:-75.912,icon:`🌊`,color:`#1a9bb5`,desc:`Afluente del río Cauca. Ecosistema fluvial principal de la Estación El Río. Biodiversidad: garzas, iguanas, guaduales, peces nativos.`},{id:`p2`,name:`Parque La Isleta`,lat:4.742,lng:-75.911,icon:`🏝️`,color:`#1a9bb5`,desc:`Punto de observación del río La Vieja en Cartago. Lugar histórico para el balsaje y observación de fauna fluvial.`},{id:`p3`,name:`I.E. Sor María Juliana`,lat:4.747,lng:-75.908,icon:`🏫`,color:`#ffd428`,desc:`Institución Educativa. Punto de partida del Modelo TERRA. Grado 6° Ciencias Naturales.`},{id:`p4`,name:`Centro Cartago`,lat:4.746,lng:-75.913,icon:`⛪`,color:`#ffd428`,desc:`Centro histórico de Cartago, Valle del Cauca. Ciudad fundada en el territorio Quimbaya.`},{id:`p5`,name:`Zona Cafetera (Quindío)`,lat:4.534,lng:-75.672,icon:`☕`,color:`#c2713a`,desc:`Territorio ancestral Quimbaya. Paisaje Cultural Cafetero, Patrimonio de la Humanidad UNESCO. Cerámicas y orfebrería Quimbaya halladas en esta región.`},{id:`p6`,name:`Museo del Oro Quimbaya`,lat:4.535,lng:-75.674,icon:`🏺`,color:`#c2713a`,desc:`Armenia, Quindío. Museo dedicado a la cultura Quimbaya con colecciones de cerámica, orfebrería y objetos cotidianos. Referente para la Estación La Tierra.`}];l({onNeedRefresh(){},onOfflineReady(){}});var h={get:(e,t)=>{try{return JSON.parse(localStorage.getItem(`terra_`+e))??t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(`terra_`+e,JSON.stringify(t))}catch{}}},ee=15,g=50,_=200;function v(){return h.get(`xp`,0)}function y(e){let t=v()+e;h.set(`xp`,t),S(),C(e)}function b(e){return Math.floor(e/_)+1}function x(e){return e%_}function S(){let e=v(),t=Math.min(100,Math.round(x(e)/_*100)),n=document.getElementById(`sidebar-xp-fill`),r=document.getElementById(`sidebar-xp-val`),i=document.getElementById(`header-xp-val`);n&&(n.style.width=t+`%`),r&&(r.textContent=e+` XP`),i&&(i.textContent=e+` XP`)}function C(e){let t=document.createElement(`div`);t.textContent=`+${e} XP ⚡`,t.style.cssText=`
    position:fixed; bottom:90px; right:20px; z-index:9999;
    background:hsl(45,100%,50%); color:#1a0e00;
    font-family:var(--font-heading); font-weight:900; font-size:16px;
    padding:10px 20px; border-radius:100px;
    box-shadow:0 4px 20px hsla(45,100%,50%,0.5);
    animation:xpToast 1.8s cubic-bezier(0.34,1.56,0.64,1) forwards;
    pointer-events:none;
  `,document.body.appendChild(t);let n=document.createElement(`style`);n.textContent=`@keyframes xpToast{0%{opacity:0;transform:translateY(20px) scale(0.7)}20%{opacity:1;transform:translateY(0) scale(1)}70%{opacity:1;transform:translateY(-8px) scale(1.05)}100%{opacity:0;transform:translateY(-30px) scale(0.9)}}`,document.head.appendChild(n),setTimeout(()=>{t.remove(),n.remove()},1900)}function te(){let e=new Date().toDateString(),t=h.get(`streakDate`,null),n=h.get(`streak`,0);if(t!==e){let r=new Date;r.setDate(r.getDate()-1),t===r.toDateString()?n++:t!==e&&(n=1),h.set(`streak`,n),h.set(`streakDate`,e)}return n}var w={view:`home`,moduleId:null,progress:h.get(`progress`,{}),quizState:{},chartInstances:{},leafletMap:null},T=()=>window.innerWidth>=768,E=e=>document.getElementById(e),D=E(`splash`),O=E(`shell`),k=E(`main-content`),A=E(`header-title`),j=E(`header-page-title`),M=E(`btn-back`),ne=E(`btn-progress`),re=E(`sidebar-progress-btn`),ie=()=>document.querySelectorAll(`[data-view]`);setTimeout(()=>{D.classList.add(`exit`),setTimeout(()=>{D.style.display=`none`,O.classList.remove(`hidden`),te(),S(),L(),I(`home`)},600)},2100),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-view]`);if(!t)return;let n=t.dataset.view;w.view===n&&!w.moduleId||(w.moduleId=null,N(n))}),M.addEventListener(`click`,()=>{w.moduleId&&(w.moduleId=null,N(`estaciones`))}),ne.addEventListener(`click`,Q),re?.addEventListener(`click`,Q),E(`btn-xp-badge`)?.addEventListener(`click`,Q);function N(e){P(e),M.classList.toggle(`hidden`,!w.moduleId),I(e),k.scrollTo({top:0,behavior:`instant`})}function P(e){ie().forEach(t=>t.classList.toggle(`active`,t.dataset.view===e))}var F={home:`Inicio`,estaciones:`Módulos`,mapa:`Territorio`,glosario:`Glosario`};function I(e){w.view=e,Object.values(w.chartInstances).forEach(e=>e.destroy?.()),w.chartInstances={},w.leafletMap&&e!==`mapa`&&(w.leafletMap.remove(),w.leafletMap=null),k.innerHTML=``,k.className=`main`;let t=w.moduleId?`Módulo ${d[w.moduleId]?.num}`:F[e]||`TERRA`;j&&(j.textContent=t),A&&(A.textContent=t===`Inicio`?`TERRA`:t);let n=document.createElement(`div`);switch(n.className=`view`,e){case`home`:R(n);break;case`estaciones`:z(n);break;case`mapa`:de(n);break;case`glosario`:pe(n);break;case`module`:B(n,w.moduleId);break}k.appendChild(n)}function L(){let e=E(`sidebar-progress-rows`);e&&(e.innerHTML=[{id:`rio`,emoji:`🌊`,cls:`rio`},{id:`cielo`,emoji:`🌙`,cls:`cielo`},{id:`tierra`,emoji:`🌱`,cls:`tierra`}].map(e=>{let t=$(e.id);return`
      <div class="sidebar__prow">
        <span class="sidebar__prow-label">${e.emoji}</span>
        <div class="sidebar__prow-track">
          <div class="sidebar__prow-fill ${e.cls}" style="width:${t}%"></div>
        </div>
        <span class="sidebar__prow-pct">${t}%</span>
      </div>`}).join(``),S())}function R(e){let t=Object.keys(d).length,n=Object.values(w.progress).filter(e=>e.done).length,r=Math.round(n/t*100),i=$(`rio`),a=$(`cielo`),o=$(`tierra`),s=v(),c=b(s),l=x(s),f=Math.min(100,Math.round(l/_*100)),m=h.get(`streak`,1);e.innerHTML=`
    <div class="home">

      <!-- Hero -->
      <div class="hero">
        <img class="hero__img" src="/assets/hero.png"
          alt="Territorio TERRA: Río La Vieja, El Cielo Andino y La Tierra Quimbaya"
          loading="lazy"
          onerror="this.style.display='none'"/>
        <div class="hero__overlay">
          <div class="hero__tag">🌿 Modelo Pedagógico TERRA · Grado 6°</div>
          <h1 class="hero__title">Ciencia desde<br>la Raíz</h1>
          <p class="hero__sub">I.E. Sor María Juliana · Cartago, Valle del Cauca · PhD. Álvaro Cárdenas Orozco</p>
        </div>
      </div>

      <!-- Gamification strip -->
      <div class="gamification-strip">
        <!-- XP card -->
        <div class="xp-card" style="grid-column:span 1">
          <div class="gamification-card__label">⚡ Nivel ${c}</div>
          <div class="gamification-card__num">${s} XP</div>
          <div class="xp-track">
            <div class="xp-fill" style="width:${f}%"></div>
          </div>
          <div class="gamification-card__sub">${l}/${_} para siguiente nivel</div>
        </div>
        <!-- Streak card -->
        <div class="streak-card" style="grid-column:span 1">
          <div class="gamification-card__label">🔥 Racha</div>
          <div class="gamification-card__num">${m}</div>
          <div class="gamification-card__sub">${m===1?`día`:`días`} seguidos</div>
        </div>
      </div>

      <!-- Top grid: progress + cycle (desktop: 2 cols) -->
      <div class="home-top-grid">

        <!-- Progress -->
        <div class="progress-card">
          <div class="progress-card__header">
            <span class="progress-card__title">📊 Mi Progreso</span>
            <span class="progress-card__pct">${r}%</span>
          </div>
          <div class="progress-bars">
            <div class="progress-bar-row">
              <span class="progress-bar-label text-rio">🌊 Río</span>
              <div class="progress-bar-track"><div class="progress-bar-fill rio" style="width:${i}%"></div></div>
              <span style="font-size:11px;font-weight:700;font-family:var(--font-heading);color:var(--c-rio-dark);width:32px;text-align:right">${i}%</span>
            </div>
            <div class="progress-bar-row">
              <span class="progress-bar-label text-cielo">🌙 Cielo</span>
              <div class="progress-bar-track"><div class="progress-bar-fill cielo" style="width:${a}%"></div></div>
              <span style="font-size:11px;font-weight:700;font-family:var(--font-heading);color:var(--c-cielo-dark);width:32px;text-align:right">${a}%</span>
            </div>
            <div class="progress-bar-row">
              <span class="progress-bar-label text-tierra">🌱 Tierra</span>
              <div class="progress-bar-track"><div class="progress-bar-fill tierra" style="width:${o}%"></div></div>
              <span style="font-size:11px;font-weight:700;font-family:var(--font-heading);color:var(--c-tierra-dark);width:32px;text-align:right">${o}%</span>
            </div>
          </div>
        </div>

        <!-- Ciclo TERRA -->
        <div class="cycle-section">
          <div class="section-title">🔄 Ciclo TERRA</div>
          <div class="cycle-steps">
            ${p.map(e=>`
              <div class="cycle-step">
                <div class="cycle-step__num">${e.num}</div>
                <div class="cycle-step__icon">${e.icon}</div>
                <div class="cycle-step__name">${e.name}</div>
              </div>`).join(``)}
          </div>
        </div>
      </div>

      <!-- Station cards -->
      <div>
        <div class="section-title" style="margin-bottom:var(--sp-4)">🗺️ Estaciones Territoriales</div>
        <div class="station-cards">
          ${u.map(e=>{let t=$(e.id);return`
              <div class="station-card ${e.color}" data-station="${e.id}" id="station-card-${e.id}"
                role="button" tabindex="0" aria-label="Ir a Estación ${e.name}">
                <div class="station-card__icon">${e.emoji}</div>
                <div class="station-card__body">
                  <div class="station-card__periodo">${e.periodo}</div>
                  <div class="station-card__name">Estación ${e.name}</div>
                  <div class="station-card__desc">${e.desc}</div>
                  <div class="station-card__modules">
                    📚 ${e.modules.length} módulos &middot; ${t}% ✓
                  </div>
                </div>
                <div class="station-card__arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>`}).join(``)}
        </div>
      </div>

      <div style="height:8px"></div>
    </div>
  `,e.querySelectorAll(`.station-card`).forEach(e=>{let t=()=>{w.moduleId=null,P(`estaciones`),I(`estaciones`),setTimeout(()=>{document.getElementById(`station-section-`+e.dataset.station)?.scrollIntoView({behavior:`smooth`,block:`start`})},80)};e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&t()})})}function z(e){let t={IN:`#0e9fb5`,EF:`#c2713a`,UC:`#3d8c56`,EI:`#8050c8`,RT:`#b8961a`};e.innerHTML=`
    <div class="estaciones">
      ${u.map(e=>`
        <div id="station-section-${e.id}">
          <div class="station-section-header ${e.color}">
            <div class="station-section-emoji">${e.emoji}</div>
            <div>
              <div class="station-section-name">Estación ${e.name}</div>
              <div class="station-section-desc">${e.periodo} · ${e.desc}</div>
            </div>
          </div>
          <div class="modules-list">
            ${e.modules.map(n=>{let r=d[n],i=w.progress[n]?.done,a=e.color===`rio`?`var(--c-rio-pale)`:e.color===`cielo`?`var(--c-cielo-pale)`:`var(--c-tierra-pale)`,o=e.color===`rio`?`var(--c-rio-dark)`:e.color===`cielo`?`var(--c-cielo-dark)`:`var(--c-tierra-dark)`,s=r.competencias.map(e=>`<span class="badge" style="background:${t[e]}18;color:${t[e]};border:1.5px solid ${t[e]}40">${e}</span>`).join(``);return`
                <div class="module-card" data-module="${n}" id="module-card-${n}"
                  role="button" tabindex="0" aria-label="Módulo ${r.num}: ${r.title}">
                  <div class="module-card__num" style="background:${a};color:${o};border:1.5px solid ${o}30">${r.num}</div>
                  <div class="module-card__body">
                    <div class="module-card__title">${r.title}</div>
                    <div class="module-card__meta">
                      ${s}
                      <span style="color:var(--c-text-dim);font-size:11px">📅 ${r.sesiones} sesiones</span>
                    </div>
                  </div>
                  <div class="module-card__status ${i?`done`:``}">${i?`✅`:`⭕`}</div>
                </div>`}).join(``)}
          </div>
        </div>
      `).join(`<div style="height:4px"></div>`)}
    </div>`,e.querySelectorAll(`.module-card`).forEach(e=>{let t=()=>ae(e.dataset.module);e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&t()})})}function ae(e){w.moduleId=e,w.view=`module`,M.classList.remove(`hidden`),P(`estaciones`),k.innerHTML=``,k.scrollTo({top:0,behavior:`instant`});let t=document.createElement(`div`);t.className=`view`,B(t,e),k.appendChild(t);let n=d[e];j&&(j.textContent=`Módulo ${n.num}: ${n.title.substring(0,40)}${n.title.length>40?`…`:``}`),A&&(A.textContent=`Módulo ${n.num}`)}function B(e,t){let n=d[t],r=u.find(e=>e.id===n.station),i=n.station,a={IN:`Indagación`,EF:`Explicación`,UC:`Uso Científico`,EI:`Escucha Intercultural`,RT:`Reciprocidad`},o={IN:`#0e9fb5`,EF:`#c2713a`,UC:`#3d8c56`,EI:`#8050c8`,RT:`#b8961a`},s=n.competencias.map(e=>`<span class="badge" style="background:${o[e]}18;color:${o[e]};border:1.5px solid ${o[e]}40">
      ${e}: ${a[e]}
    </span>`).join(``),c=t===`m3`||t===`m4`||t===`m5`?`
    <div class="module-section">
      <div class="chart-container">
        <div class="chart-title">${t===`m3`?`Escala de pH — Sustancias Comunes`:t===`m4`?`Horas de Luz Solar en Cartago por Mes`:`Ciclo Lunar — 29.5 Días`}</div>
        <canvas id="chart-${t}"></canvas>
      </div>
    </div>`:``,l=n.contenido.saberes.map(e=>`
    <div class="saber-card">
      <div class="saber-card__type">${e.tipo}</div>
      <div class="saber-card__text">${e.texto}</div>
    </div>`).join(``);T()?e.innerHTML=`
      <div class="module-detail-desktop">
        <!-- Left: hero + content -->
        <div class="module-detail-main">
          <div class="module-hero ${i}">
            <div class="module-hero__station">
              ${r.emoji} Estación ${r.name} · ${r.periodo}
            </div>
            <h2 class="module-hero__title">${n.title}</h2>
            <div class="module-hero__badges">${s}
              <span class="badge" style="background:var(--c-gold-pale);color:var(--c-gold-dark);border:1.5px solid hsl(45,100%,72%)">
                📅 ${n.sesiones} sesiones
              </span>
            </div>
          </div>

          <div class="module-body">
            <div class="module-section">
              <h3>🌍 Contexto Territorial</h3>
              <p>${n.contenido.intro}</p>
            </div>
            <div class="module-section">
              <h3>📚 Conceptos Científicos</h3>
              <ul>${n.contenido.conceptos.map(e=>`<li>${e}</li>`).join(``)}</ul>
            </div>
            ${c}
            <div class="module-section">
              <h3>🌿 Saberes del Territorio</h3>
              <div class="saber-grid">${l}</div>
            </div>
          </div>
        </div>

        <!-- Right sidebar: activity + quiz -->
        <div class="module-detail-side">
          <div style="margin-bottom:var(--sp-6)">
            <h3 style="font-family:var(--font-heading);font-size:16px;font-weight:900;color:var(--c-text);margin-bottom:var(--sp-3)">⚗️ Actividad Práctica</h3>
            <div class="activity-card">
              <div class="activity-card__title">${n.contenido.actividad.nombre}</div>
              <div class="activity-card__desc">${n.contenido.actividad.descripcion}</div>
            </div>
          </div>

          <h3 style="font-family:var(--font-heading);font-size:16px;font-weight:900;color:var(--c-text);margin-bottom:var(--sp-3)">🧠 Evalúa tu Aprendizaje</h3>
          <div class="quiz-container" id="quiz-${t}">
            ${W(t)}
          </div>
        </div>
      </div>
    `:e.innerHTML=`
      <div class="module-detail">
        <div class="module-hero ${i}">
          <div class="module-hero__station">
            ${r.emoji} Estación ${r.name} · ${r.periodo}
          </div>
          <h2 class="module-hero__title">${n.title}</h2>
          <div class="module-hero__badges">${s}
            <span class="badge" style="background:var(--c-gold-pale);color:var(--c-gold-dark);border:1.5px solid hsl(45,100%,72%)">📅 ${n.sesiones} sesiones</span>
          </div>
        </div>

        <div class="module-body">
          <div class="module-section">
            <h3>🌍 Contexto Territorial</h3>
            <p>${n.contenido.intro}</p>
          </div>
          <div class="module-section">
            <h3>📚 Conceptos Científicos</h3>
            <ul>${n.contenido.conceptos.map(e=>`<li>${e}</li>`).join(``)}</ul>
          </div>
          ${c}
          <div class="module-section">
            <h3>🌿 Saberes del Territorio</h3>
            ${l}
          </div>
          <div class="module-section">
            <h3>⚗️ Actividad Práctica</h3>
            <div class="activity-card">
              <div class="activity-card__title">${n.contenido.actividad.nombre}</div>
              <div class="activity-card__desc">${n.contenido.actividad.descripcion}</div>
            </div>
          </div>
          <div class="module-section">
            <h3>🧠 Evalúa tu Aprendizaje</h3>
            <div class="quiz-container" id="quiz-${t}">
              ${W(t)}
            </div>
          </div>
        </div>
      </div>
    `,t===`m3`&&oe(),t===`m4`&&se(),t===`m5`&&ce(),K(t,e)}var V=`#9ca3af`,H=`rgba(0,0,0,0.05)`,U={backgroundColor:`#fff`,titleColor:`#1a1a2e`,bodyColor:`#6b7280`,borderColor:`rgba(0,0,0,0.1)`,borderWidth:1,padding:10,cornerRadius:10};async function oe(){let{Chart:e,registerables:t}=await i(async()=>{let{Chart:e,registerables:t}=await import(`./chartjs-BP_PX2VW.js`).then(e=>e.t);return{Chart:e,registerables:t}},__vite__mapDeps([0,1]));e.register(...t);let n=document.getElementById(`chart-m3`);n&&(w.chartInstances.ph=new e(n,{type:`bar`,data:{labels:[`Limón`,`Vinagre`,`Lluvia ácida`,`Agua pura`,`Río La Vieja`,`Bicarbonato`,`Jabón`,`Lejía`],datasets:[{label:`pH`,data:[2.3,3,4.5,7,7.8,8.3,9.5,13],backgroundColor:[`hsl(0,78%,70%)`,`hsl(15,80%,65%)`,`hsl(30,80%,65%)`,`hsl(186,60%,60%)`,`hsl(186,85%,50%)`,`hsl(160,60%,55%)`,`hsl(220,65%,60%)`,`hsl(240,65%,60%)`],borderRadius:10,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1},tooltip:{...U,callbacks:{label:e=>`pH ${e.raw} — ${e.raw<7?`🔴 Ácido`:e.raw===7?`⚪ Neutro`:`🔵 Básico`}`}}},scales:{x:{ticks:{color:V,font:{size:10,family:`Inter`}},grid:{color:H}},y:{min:0,max:14,ticks:{color:V,stepSize:2},grid:{color:H},title:{display:!0,text:`pH`,color:V}}}}}))}async function se(){let{Chart:e,registerables:t}=await i(async()=>{let{Chart:e,registerables:t}=await import(`./chartjs-BP_PX2VW.js`).then(e=>e.t);return{Chart:e,registerables:t}},__vite__mapDeps([0,1]));e.register(...t);let n=document.getElementById(`chart-m4`);n&&(w.chartInstances.astro=new e(n,{type:`line`,data:{labels:[`Ene`,`Feb`,`Mar`,`Abr`,`May`,`Jun`,`Jul`,`Ago`,`Sep`,`Oct`,`Nov`,`Dic`],datasets:[{label:`Horas de luz`,data:[11.9,12,12.1,12.2,12.3,12.3,12.2,12.1,12,11.9,11.8,11.9],borderColor:`hsl(45,100%,50%)`,backgroundColor:`hsla(45,100%,50%,0.12)`,fill:!0,tension:.4,pointRadius:5,pointBackgroundColor:`hsl(45,100%,50%)`,pointBorderColor:`#fff`,pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1},tooltip:{...U,callbacks:{label:e=>`${e.raw}h de luz solar`}}},scales:{x:{ticks:{color:V,font:{size:11}},grid:{color:H}},y:{min:11.5,max:12.5,ticks:{color:V},grid:{color:H}}}}}))}async function ce(){let{Chart:e,registerables:t}=await i(async()=>{let{Chart:e,registerables:t}=await import(`./chartjs-BP_PX2VW.js`).then(e=>e.t);return{Chart:e,registerables:t}},__vite__mapDeps([0,1]));e.register(...t);let n=document.getElementById(`chart-m5`);if(!n)return;let r=Array.from({length:30},(e,t)=>t+1),a=r.map(e=>Math.round((Math.cos(e/29.5*Math.PI*2)+1)*50));w.chartInstances.moon=new e(n,{type:`line`,data:{labels:r,datasets:[{label:`% cara iluminada`,data:a,borderColor:`hsl(240,78%,58%)`,backgroundColor:`hsla(240,78%,58%,0.1)`,fill:!0,tension:.4,pointRadius:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1},tooltip:{...U,callbacks:{title:e=>`Día ${e[0].label}`,label:e=>{let t=e.raw;return t<5?`🌑 Luna Nueva`:t<45?`🌒 Creciente (${t}%)`:t<55?`🌓 Cuarto (${t}%)`:t<95?`🌔 Gibosa (${t}%)`:`🌕 Luna Llena (${t}%)`}}}},scales:{x:{title:{display:!0,text:`Día del ciclo`,color:V},ticks:{color:V,font:{size:10}},grid:{color:H}},y:{min:0,max:100,ticks:{color:V,callback:e=>e+`%`},grid:{color:H}}}}})}var le=[`A`,`B`,`C`,`D`];function W(e){let t=d[e].quiz,n=t.map((t,n)=>`<div class="quiz-dot" id="quiz-dot-${e}-${n}"></div>`).join(``);return`
    <div class="quiz-header">
      <div class="quiz-title">🧠 Quiz · Módulo ${d[e].num}</div>
      <div class="quiz-progress-wrap">
        <div class="quiz-progress" id="quiz-prog-${e}">1 / ${t.length}</div>
        <div class="quiz-progress-dots">${n}</div>
      </div>
    </div>
    <div class="quiz-body" id="quiz-body-${e}">
      ${G(e,0)}
    </div>`}function G(e,t){let n=d[e].quiz[t];return`
    <p class="quiz-question">${n.q}</p>
    <div class="quiz-options" id="quiz-opts-${e}-${t}">
      ${n.opts.map((n,r)=>`
        <button class="quiz-option" data-qidx="${t}" data-oidx="${r}"
          id="quiz-opt-${e}-${t}-${r}" data-letter="${le[r]}">
          ${n}
        </button>`).join(``)}
    </div>
    <div id="quiz-feedback-${e}-${t}" style="display:none"></div>
    <button class="quiz-btn" id="quiz-next-${e}-${t}" style="display:none">Siguiente →</button>`}function K(e){w.quizState[e]={current:0,score:0,answered:{}},q(e,0,`current`),J(e,0)}function q(e,t,n){let r=document.getElementById(`quiz-dot-${e}-${t}`);r&&(r.className=`quiz-dot ${n}`)}function J(e,t){let n=document.querySelectorAll(`#quiz-opts-${e}-${t} .quiz-option`);n.forEach(r=>{r.addEventListener(`click`,()=>{if(w.quizState[e].answered[t])return;let i=parseInt(r.dataset.oidx),a=d[e].quiz[t].correct,o=d[e].quiz[t].feedback;n.forEach(e=>{e.disabled=!0}),r.classList.add(`selected`);let s=i===a;s?(w.quizState[e].score++,r.classList.add(`correct`),y(ee),q(e,t,`done`)):(r.classList.add(`wrong`),n[a].classList.add(`correct`),q(e,t,``)),w.quizState[e].answered[t]=!0;let c=document.getElementById(`quiz-feedback-${e}-${t}`);c.style.display=`block`,c.className=`quiz-feedback ${s?`correct`:`wrong`}`,c.textContent=s?o.ok:o.fail;let l=document.getElementById(`quiz-next-${e}-${t}`);l.style.display=`block`;let u=d[e].quiz.length,f=t===u-1;l.textContent=f?`🏆 Ver Resultado`:`Siguiente →`,l.addEventListener(`click`,()=>{if(f)ue(e);else{let n=document.getElementById(`quiz-body-${e}`),r=document.getElementById(`quiz-prog-${e}`),i=t+1;r.textContent=`${i+1} / ${u}`,n.innerHTML=G(e,i),q(e,i,`current`),J(e,i)}},{once:!0})})})}function ue(e){let{score:t}=w.quizState[e],n=d[e].quiz.length,r=Math.round(t/n*100),i=r>=80?`🏆`:r>=60?`⭐`:`💪`,a=r>=80?`¡Excelente! Dominas este módulo.`:r>=60?`¡Muy bien! Sigue practicando.`:`¡Vuelve a intentarlo!`,o=w.progress[e]?.done;w.progress[e]={done:r>=60,score:t,total:n},h.set(`progress`,w.progress),!o&&r>=60&&y(g),L();let s=[`hsl(45,100%,55%)`,`hsl(142,75%,45%)`,`hsl(186,85%,50%)`,`hsl(240,78%,65%)`,`hsl(28,90%,58%)`],c=r>=60?Array.from({length:12},(e,t)=>{let n=s[t%s.length];return`<div class="confetti-dot" style="left:${10+t*7%80}%;background:${n};animation-delay:${(t*.12).toFixed(2)}s;border-radius:${t%2==0?`50%`:`2px`}"></div>`}).join(``):``,l=document.getElementById(`quiz-body-${e}`);l.innerHTML=`
    <div class="quiz-score quiz-score-wrapper" style="position:relative;overflow:hidden">
      ${c}
      <span class="quiz-score__trophy">${i}</span>
      <div class="quiz-score__num">${r}%</div>
      <div class="quiz-score__msg">${a}</div>
      <div class="quiz-score__sub">${t} de ${n} respuestas correctas</div>
      ${r>=60?`<div class="quiz-score__xp">⚡ +${g} XP ganados</div>`:``}
      <button class="quiz-btn" id="quiz-retry-${e}" style="margin-top:var(--sp-4)">🔄 Intentar de nuevo</button>
    </div>`,document.getElementById(`quiz-retry-${e}`)?.addEventListener(`click`,()=>{w.quizState[e]={current:0,score:0,answered:{}};let t=document.getElementById(`quiz-${e}`);t&&(t.innerHTML=W(e),K(e))})}function de(e){e.innerHTML=`
    <div class="mapa">
      ${T()?`
        <div class="mapa__left">
          <div class="mapa__header">
            <h2>🗺️ Territorio TERRA</h2>
            <p>Cuenca del Río La Vieja · Cartago, Valle del Cauca</p>
          </div>
          <div class="mapa__points">
            ${Y()}
          </div>
        </div>
        <div id="map" role="region" aria-label="Mapa interactivo del territorio TERRA"></div>
      `:`
        <div class="mapa__header">
          <h2>🗺️ Territorio TERRA</h2>
          <p>Cuenca del Río La Vieja · Cartago, Valle del Cauca</p>
        </div>
        <div id="map" role="region" aria-label="Mapa interactivo del territorio TERRA"></div>
        <div class="mapa__points">
          ${Y()}
        </div>
      `}
    </div>`,fe(e)}function Y(){return m.map(e=>`
    <div class="mapa__point-card" data-lat="${e.lat}" data-lng="${e.lng}" data-zoom="15" id="map-point-${e.id}">
      <div class="mapa__point-icon" style="background:${e.color}22;color:${e.color}">${e.icon}</div>
      <div>
        <div class="mapa__point-title">${e.name}</div>
        <div class="mapa__point-desc">${e.desc}</div>
      </div>
    </div>`).join(``)}async function fe(t){let n=await i(()=>import(`./leaflet-C3thvLVr.js`).then(t=>e(t.t(),1)),__vite__mapDeps([2,1]));!document.getElementById(`map`)||w.leafletMap||(w.leafletMap=n.map(`map`,{center:[4.744,-75.912],zoom:12,zoomControl:!0,scrollWheelZoom:!1,tap:!0}),n.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,{attribution:`© OpenStreetMap contributors`,maxZoom:18}).addTo(w.leafletMap),m.forEach(e=>{let t=n.divIcon({html:`<div style="width:40px;height:40px;border-radius:50%;background:${e.color};border:3px solid rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 16px rgba(0,0,0,.3)">${e.icon}</div>`,iconSize:[40,40],iconAnchor:[20,20],className:``});n.marker([e.lat,e.lng],{icon:t}).addTo(w.leafletMap).bindPopup(`<strong style="font-family:Nunito,sans-serif">${e.name}</strong><br/><small style="color:#6b7280">${e.desc}</small>`,{maxWidth:280}).on(`click`,()=>w.leafletMap.setView([e.lat,e.lng],15,{animate:!0}))}),t.querySelectorAll(`.mapa__point-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseFloat(e.dataset.lat),n=parseFloat(e.dataset.lng);w.leafletMap.setView([t,n],15,{animate:!0})})}))}function pe(e){let t=[...f].sort((e,t)=>e.term.localeCompare(t.term)),n=`all`;e.innerHTML=`
    <div class="glosario">
      <div class="search-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input type="search" class="search-input" id="glosario-search"
          placeholder="Buscar término científico o ancestral..." aria-label="Buscar en el glosario"/>
      </div>
      <div class="glosario-filters" id="glosario-filters">
        <button class="glosario-filter-btn active all" data-filter="all">🌿 Todos</button>
        <button class="glosario-filter-btn rio" data-filter="rio">🌊 El Río</button>
        <button class="glosario-filter-btn cielo" data-filter="cielo">🌙 El Cielo</button>
        <button class="glosario-filter-btn tierra" data-filter="tierra">🌱 La Tierra</button>
      </div>
      <div ${T()?`class="glosario-grid"`:``} id="glosario-list">
        ${X(t)}
      </div>
    </div>`;let r=e.querySelector(`#glosario-search`),i=e.querySelector(`#glosario-list`),a=e.querySelectorAll(`.glosario-filter-btn`);function o(){let e=r.value.toLowerCase().trim(),a=n===`all`?t:t.filter(e=>e.station===n||e.color===n);e&&(a=a.filter(t=>t.term.toLowerCase().includes(e)||t.sci.toLowerCase().includes(e)||t.anc.toLowerCase().includes(e))),i.innerHTML=X(a),Z(i)}r.addEventListener(`input`,o),a.forEach(e=>{e.addEventListener(`click`,()=>{a.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),n=e.dataset.filter,o()})}),Z(e)}function X(e){let t={rio:`var(--c-rio)`,cielo:`var(--c-cielo)`,tierra:`var(--c-tierra)`},n={rio:`🌊 El Río`,cielo:`🌙 El Cielo`,tierra:`🌱 La Tierra`};return e.length?e.map(e=>`
    <div class="glosario-item" id="glosario-item-${e.id}">
      <div class="glosario-term" data-id="${e.id}" role="button" tabindex="0" aria-expanded="false">
        <div class="glosario-term-left">
          <div class="glosario-term-dot" style="background:${t[e.color]||`#888`};box-shadow:0 0 6px ${t[e.color]||`#888`}80"></div>
          <div>
            <div class="glosario-term-name">${e.term}</div>
            <div class="glosario-term-station">${n[e.station]||``}</div>
          </div>
        </div>
        <svg class="glosario-term-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="glosario-def" id="glosario-def-${e.id}">
        <div class="glosario-def-sci">📖 <strong>Definición científica:</strong><br>${e.sci}</div>
        <div class="glosario-def-anc">🌿 <em>Saber ancestral/local:</em><br>${e.anc}</div>
        <div style="height:8px"></div>
      </div>
    </div>`).join(``):`<p style="text-align:center;color:var(--c-text-muted);padding:var(--sp-8);grid-column:1/-1">Sin resultados 🔍</p>`}function Z(e){e.querySelectorAll(`.glosario-term`).forEach(e=>{let t=()=>{let t=document.getElementById(`glosario-def-${e.dataset.id}`),n=e.querySelector(`.glosario-term-arrow`),r=t.classList.contains(`open`);document.querySelectorAll(`.glosario-def.open`).forEach(e=>e.classList.remove(`open`)),document.querySelectorAll(`.glosario-term-arrow.open`).forEach(e=>e.classList.remove(`open`)),r||(t.classList.add(`open`),n.classList.add(`open`))};e.addEventListener(`click`,t),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&t()})})}function Q(){let e=Object.keys(d).length,t=Object.values(w.progress).filter(e=>e.done).length;Math.round(t/e*100);let n=Object.values(w.progress).filter(e=>e.score!==void 0),r=n.length?Math.round(n.reduce((e,t)=>e+t.score/t.total*100,0)/n.length):0,i=v(),a=b(i),o=h.get(`streak`,1),s=document.createElement(`div`);s.className=`modal-overlay`,s.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-label="Mi Progreso">
      <div class="modal__handle"></div>
      <div class="modal__header">
        <h2 class="modal__title">📊 Mi Progreso</h2>
        <button class="modal__close" id="close-modal" aria-label="Cerrar">✕</button>
      </div>
      <div class="modal__body">
        <div class="modal-grid">
          <div class="modal-stat">
            <div class="modal-stat__icon">⚡</div>
            <div>
              <div class="modal-stat__label">XP Total</div>
              <div class="modal-stat__val text-gold">${i} XP</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">🎯</div>
            <div>
              <div class="modal-stat__label">Nivel</div>
              <div class="modal-stat__val">${a}</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">✅</div>
            <div>
              <div class="modal-stat__label">Módulos completados</div>
              <div class="modal-stat__val">${t} / ${e}</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">🔥</div>
            <div>
              <div class="modal-stat__label">Racha actual</div>
              <div class="modal-stat__val">${o} días</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">🧠</div>
            <div>
              <div class="modal-stat__label">Quizzes realizados</div>
              <div class="modal-stat__val">${n.length}</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">⭐</div>
            <div>
              <div class="modal-stat__label">Puntaje promedio</div>
              <div class="modal-stat__val text-green">${r>0?r+`%`:`—`}</div>
            </div>
          </div>
        </div>

        <div style="margin-bottom:var(--sp-3)">
          <div style="font-family:var(--font-heading);font-size:13px;font-weight:800;color:var(--c-text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:var(--sp-3)">Por estación</div>
          ${u.map(e=>{let t=$(e.id);return`
              <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-3)">
                <span style="font-size:24px">${e.emoji}</span>
                <div style="flex:1">
                  <div style="font-family:var(--font-heading);font-size:13px;font-weight:700;margin-bottom:5px;color:var(--c-text)">${e.name}</div>
                  <div class="progress-bar-track"><div class="progress-bar-fill ${e.color}" style="width:${t}%"></div></div>
                </div>
                <span style="font-family:var(--font-heading);font-size:15px;font-weight:900;min-width:38px;text-align:right;color:var(--c-text)">${t}%</span>
              </div>`}).join(``)}
        </div>

        <button class="reset-btn" id="reset-progress">🗑️ Reiniciar todo el progreso</button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector(`#close-modal`).addEventListener(`click`,()=>s.remove()),s.addEventListener(`click`,e=>{e.target===s&&s.remove()}),s.querySelector(`#reset-progress`).addEventListener(`click`,()=>{confirm(`¿Seguro que quieres reiniciar todo tu progreso?`)&&(w.progress={},h.set(`progress`,{}),h.set(`xp`,0),h.set(`streak`,0),s.remove(),L(),S(),I(w.view))})}function $(e){let t=u.find(t=>t.id===e);if(!t)return 0;let n=t.modules.filter(e=>w.progress[e]?.done).length;return Math.round(n/t.modules.length*100)}