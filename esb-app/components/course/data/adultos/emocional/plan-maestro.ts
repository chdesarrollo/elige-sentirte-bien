import { Course } from "@/components/course/types";

export const planMaestro: Course = {
  id: "plan-maestro",
  title: "Plan Maestro - Elige Sentirte Bien",
  section: "adultos",
  dimension: "emocional",
  price: 0, // luego será pago
  description: `
 <strong> <h1>Bienvenida al proceso de Plan Maestro</h1> </strong>
<p> Este proceso es una experiencia de transformación personal que ocurre cuando 
decides dejar de vivir en automático.

Aquí no vienes a cumplir actividades. Vienes a observarte, cuestionarte y tomar 
decisiones distintas.

Cada día está diseñado para llevarte paso a paso desde el reconocimiento de tu 
realidad hasta la integración de nuevas formas de vivir.

No necesitas hacerlo perfecto. Necesitas hacerlo con verdad.</p>

<strong> <h2>¿De qué se trata este proceso?</h2> </strong>
<p>Este proceso está construido para acompañarte en cinco momentos: reconocer 
tu vida como es, comprender por qué es así, responsabilizarte de lo que 
depende de ti, aprender a regular tu mundo interno y finalmente integrar nuevas 
formas de actuar en tu día a día.
No busca que cambies todo en un instante. Busca que cambies la forma en que 
te relacionas contigo. </p>

<strong> <h2> ¿Para quién es este proceso? </h2> </strong>
Para quien siente que su vida puede ser distinta pero no sabe cómo lograrlo.
Para quien se ha dado cuenta de que repite comportamientos, emociones o 
decisiones.
Para quien quiere dejar de reaccionar y empezar a elegir.

<strong> <h2>¿Cómo se va a vivir el proceso? </h2> </strong>
Día a día, a través de ejercicios de observación, escritura y acción consciente.
No se trata de hacerlo perfecto, se trata de hacerlo honesto.
Compromiso consciente. Este proceso requiere presencia.
Si decides hacerlo, hazlo de verda
La transformación no ocurre cuando entiendes. Ocurre cuando practicas distinto.
`,
  days: [
    {
      day: 1,
      title: "Inicio consciente",
      purpose: "Dar un sentido personal al proceso y asumirlo como propio",
      activity: [
        " Nombra tu cuaderno como si fuera un proyecto de vida",
        "Escribe qué representa ese nombre.", 
        "Define tres razones por las que haces este proceso",
        "Escribe qué esperas lograr con este proceso"
      ],
      questions: [
        "¿Qué me trajo hasta aquí?",
        "¿Qué no quiero seguir repitiendo?"
      ],
      help: "El compromiso real nace cuando entiendes para qué haces algo",
      closure: "Este proceso comienza cuando lo haces tuyo",
      phrase: "Elijo iniciar en serio",
    },
    {
        day: 2,
        title: "Diagnóstico de vida",
        purpose: "Reconocer el estado real de tu vida sin evasión",
        activity: [
            "Divide tu vida en áreas (ej. trabajo, relaciones, salud, etc.) y califica tu satisfacción en cada una del 1 al 10",
            "Describe cómo está cada una con ejemplos concretos",
            "Señala una situación que represente cada área",
            "Califica cada área según tu percepción"
        ],
        questions: [
            "¿Qué estoy ignorando en mi vida?",
            "¿Qué áreas me incomoda ver?"
        ],
        help: "La realidad no cambia cuando la evitas, cambia cuando la enfrentas",
        closure: "Hoy dejo de evitar",
        phrase: "Veo mi vida sin filtros"
    },
    {
        day: 3,
        title: "Profundización",
        purpose: "Comprernder la distancia entre tu realidad y lo que quieres",
        activity: ["Elige dos áreas crítivas", "Escribe cómo te gustaría que fueran", "Describe qué te ha impedido llegar ahí", "Escribe qué si está en tus manos cambiar"
        ],
        questions: ["¿Qué estoy dejando de hacer?", "¿Qué estoy esperando que otro resuelva?"],
        help: "Entender la brecha te da dirección", 
        closure: "Empiezo a ver mis responsabilidad",
        phrase: "Empiezo a ver mi responsabilidad"
      
    },
    {
      day: 4,
      title: "Conciencia emocional",
      purpose: "Reconocer el impacto emocional de tu realidad",
      activity: ["Recuerda lo trabajado", "Escribe cómo te hace sentir", "Nombra acciones específicas", "Relaciona emoción con situación"
      ],
      questions: ["¿Qué emoción aparece más?", "¿Qué estoy evitando senitr?"],
      help: "Las emociones no son el problema, son la señal",
      closure:"Lo que siento me muestra el camino",
      phrase: "Reconozco lo que siento como información valiosa"

    },
    {
      day: 5,
      title:"Obsrevación del pensamiento",
      purpose: "Identificar cómo piensas frente a tu vida",
      activity: ["Escribe pensamientos frecuentes sobre ti", "Identifica si son limitantes o potenciadores", "Detecta cuál se repite más",  "Escribe cuándo aparece" ],
      questions: ["¿Qué me digo constantemente?", "¿Esto me ayuda o me limita?"],
      help: "Tu diálogo interno dirige tu comportamiento",
      closure:"Empiezo a escucharme",
      phrase: "Observo lo que pienso sin juzgarlo"

    },
    {
      day: 6,
      title: "Historia personal",
      purpose: "Relacionar tu presente con tu historia",
      activity: ["Escribe momentos que te marcaron", "Identifica qué aprendiste de ellos", "Relaciona esos aprendizajes con tu vida actual", "Detecta patrones"],
      questions: ["¿Qué sigo repitiendo?", "¿Qué sigo creyendo?"],
      help: "Tu historia influye, pero no te define",
      closure: "Empiezo a entender de dónde vengo",
      phrase: "Veo mi historia con compasión y claridad"

    },
    {
      day: 7,
      title: "Identidad actual",
      purpose: "Definir quién eres hoy de forma consciente",
      activity: ["Escribe quién eres hoy", "Describe cómo actúas en tu vida diaria", "Identifica incoherencias", "Define qué quieres sostener y qué no"],
      questions: ["¿Estoy siendo quien quiero ser?", "¿Qué parte de mí quiero cambiar?"],
      help: "La claridad de identidad permite decisiones más coherentes", 
      closure: "Hoy me veo con más claridad",
      phrase: "Defino quién soy hoy con honestidad"
    
    },
    {
      day: 8,
      title:"Autoabandono",
      purpose: "Reconocer de manera concreta cómo te has dejado de elegir en tu vida cotidiana y cómo eso ha sostenido tu realidad actual.",
      activity: ["Haz una lista de situaciones recientes (últimos 6 meses) donde actuaste en contra de lo que sabías que era mejor para ti", "No generalices. Escribe hechos concretos: decisiones, conversaciones, hábitos, relaciones", "Al lado de cada situación escribe qué sabías que debías hacer y no hiciste", "Identifica el costo de cada una de esas decisiones en tu vida (emocional, tiempo, energía, relaciones, dinero)"],
      questions: ["¿En qué momentos elegí evitar en lugar de actuar?", "¿Qué miedo estaba presente en esas decisiones?", "¿Qué estoy intentando evitar cuando me abandono?"],
      help: "El autoabandono no es falta de capacidad, es una forma de protección. Identificarlo te permite dejar de justificarlo.",
      closure: "No te estás fallando por debilidad, te estás evitando por miedo.", 
      phrase: "Dejo de abandonarme"
    },
    {
      day: 9,
      title: "Relación interna y diálogo personal",
      purpose: "Hacer visible la forma en que te hablas y cómo ese diálogo influye en tus decisiones y en tu identidad.",
      activity: ["Durante el día, cada vez que tengas un pensamiento sobre ti, anótalo tal cual aparece", "Al final del día, revisa lo que escribiste y clasifica los pensamientos en tres categorías: juicio, exigencia, comparación", "Identifica cuáles son los más frecuentes", "Elige tres pensamientos repetitivos y escribe qué efecto tienen en tu comportamiento"],
      questions: ["¿Cómo me hablo cuando me equivoco?", "¿Mi diálogo me impulsa o me limita?", "¿A quién se parece la voz con la que me hablo?"], 
      help: "Tu diálogo interno no es neutro. Está moldeando tu conducta todos los días.",
      closure: "No puedes cambiar lo que no escuchas.",
      phrase: "Escucho cómo me hablo"
      
    },
    {
      day: 10,
      title: "Autoimagen", 
      purpose: "Confrontar la imagen que tienes de ti mismo y cuestionar su veracidad.",
      activity: ["Escribe sin filtro todo lo que consideras negativo de ti", "Luego, toma cada afirmación y responde: ¿esto es un hecho o una interpretación?", "Escribe una situación específica que haya reforzado esa idea", "Ahora escribe una situación que la contradiga"], 
      questions: ["¿Qué partes de mi identidad he construido desde experiencias aisladas?","¿Qué etiquetas me he puesto que ya no son ciertas?"], 
      help: "No eres lo que te pasó. Eres lo que has decidido creer sobre eso.",
      closure: "Tu identidad no es fija, es interpretada.",
      phrase: "Cuestiono lo que creo de mí"
    },
    {
      day: 11,
      title: "Origen de creencias", 
      purpose: "Identificar de dónde provienen las ideas que tienes sobre ti y sobre la vida.", 
      activity: ["Toma las ideas más repetidas del día anterior", "Escribe cuándo recuerdas haber pensado eso por primera vez", "Identifica quién estaba presente o qué situación lo generó", "Escribe qué significado le diste en ese momento"], 
      questions: ["¿Esta creencia nació de una experiencia o de una interpretación?", "¿Era cierto en ese momento o solo lo parecía?","¿Sigue siendo útil hoy?" ], 
      help: "Muchas de tus creencias no nacieron desde la conciencia, nacieron desde la interpretación emocional.", 
      closure: "Entender el origen reduce su poder.", 
      phrase: "Reconozco de dónde viene lo que creo"
    },

    {
      day: 12,
      title: "Evaluación de creencias", 
      purpose: "Evaluación de creencias", 
      activity: ["Haz una tabla con dos columnas: creencias que me limitan y creencias que me impulsan", "Ubica cada creencia identificada", "Para cada creencia limitante escribe qué efecto tiene en tu vida", "Escribe una versión alternativa más funcional, pero realista"], 
      questions: ["¿Qué me ha costado sostener estas creencias?", "¿Qué cambiaría si dejo de creerlas?"], 
      help: "No necesitas eliminar una creencia, necesitas dejar de alimentarla.", 
      closure: "Hoy empiezo a elegir qué sostener.", 
      phrase: "Elijo en qué creer"

    },
    {
      day: 13,
      title: "Elección de cambio", 
      purpose: "Definir con precisión el patrón principal que vas a transformar en este proceso.", 
      activity: ["Revisa todo lo trabajado", "Identifica el patrón que más impacto tiene en tu vida", "Escríbelo como un comportamiento concreto (no abstracto)", "Describe cuándo aparece, cómo actúas y qué consecuencias tiene"], 
      questions: ["Si transformo esto, ¿qué cambiaría en mi vida?", "¿Qué me ha impedido cambiarlo hasta ahora?"], 
      help: "No puedes cambiar todo al mismo tiempo. Elige en qué enfocar tu energía.",
      closure: "La transformación empieza cuando decides dónde intervenir.", 
      phrase: "Elijo qué transformar"
      
    }, 
    {
      day: 14,
      title: "Estructura del patrón",
      purpose: "Comprender cómo funciona internamente el patrón que elegiste.", 
      activity: ["Toma el patrón elegido", "Descríbelo en secuencia: situación → pensamiento → emoción → acción → resultado", "Hazlo con un ejemplo real", "Identifica en qué parte puedes intervenir"], 
      questions: ["¿Dónde se activa realmente el patrón?", "¿Qué lo dispara?", "¿Qué lo sostiene?"], 
      help: "Los patrones no son aleatorios, siguen una secuencia.", 
      closure: "Si entiendes la secuencia, puedes intervenirla.", 
      phrase: "Entiendo cómo funciono"

    }, 
    {
      day: 15, 
      title: "Responsabilidad consciente", 
      purpose: "Asumir con claridad qué parte del patrón depende de ti y qué vas a empezar a hacer diferente.", 
      activity: ["Toma la secuencia del día anterior", "Señala específicamente en qué momento puedes actuar distinto", "Define una acción concreta que vas a aplicar cuando aparezca el patrón", "Escribe un compromiso claro contigo (qué harás, cuándo y cómo)"], 
      questions: ["¿Qué parte de esto está bajo mi control?", "¿Qué decisión he estado evitando tomar?", "¿Qué voy a hacer diferente a partir de hoy?"], 
      help: "La responsabilidad no es culpa, es capacidad de respuesta.", 
      closure: "Hoy dejas de explicarte y empiezas a actuar.", 
      phrase: "Me hago responsable de lo que me corresponde"
    }, 
    {
      day: 16, 
      title: "Diseño de acción consciente", 
      purpose: "Traducir la comprensión del patrón en una estrategia clara de acción aplicable en tu vida diaria.", 
      activity: ["Toma el patrón y la intervención definida el día anterior", "Escribe tres situaciones reales en las que ese patrón suele aparecer", "Para cada situación, define exactamente qué vas a hacer diferente", "Escribe la acción en formato concreto: qué harás, qué dirás o qué evitarás"],
      questions: ["¿Mi acción es lo suficientemente clara como para ejecutarla sin pensar?", "¿Qué podría hacerme fallar al momento de aplicarla?"], 
      help: "El cambio no ocurre en la intención, ocurre en la precisión de la acción.", 
      closure: "Hoy conviertes conciencia en estrategia.", 
      phrase: "Sé cómo voy a actuar"

    }, 
    {
      day: 17,
      title: "Primera ejecucuión consciente", 
      purpose: "Aplicar por primera vez la intervención definida en una situación real.", 
      activity: ["Durante el día, identifica cuándo aparece el patrón", 
        "Aplica la acción definida, aunque no te sientas completamente seguro", "Al final del día, escribe qué ocurrió exactamente", "Describe qué hiciste diferente y qué resultado generó"
      ], 
      questions: ["¿Pude aplicar la acción que definí?", "¿Qué me costó más al momento de hacerlo?", "¿En qué momento estuve a punto de volver a lo mismo?"],
      help: "La primera vez no es perfecta, es consciente.", 
      closure: "Actuar diferente, aunque sea una vez, ya rompe el patrón.", 
      phrase: "Doy el primer paso"
    }, 
    {
      day: 18,
      title: "Observación de ejecución", 
      purpose: "Analizar con detalle lo que ocurrió al intentar cambiar tu comportamiento.", 
      activity: ["Revisa la situación del día anterior", "Describe paso a paso lo que pensaste, sentiste e hiciste", "Identifica en qué momento fue más difícil sostener el cambio", "Ajusta tu acción si es necesario"],
      questions: ["¿Qué parte del proceso fue más débil?", "¿Qué necesito ajustar para hacerlo mejor la próxima vez?"], 
      help: "El cambio se construye ajustando, no exigiendo perfección.", 
      closure: "Observar con detalle mejora tu capacidad de actuar.", 
      phrase: "Aprendo de lo que hago"
    }, 
    {
      day: 19,
      title: "Sostenimiento del cambio",
      purpose: "Reforzar la nueva acción a través de repetición intencional", 
      activity: ["Identifica una nueva situación donde puedas aplicar el cambio", "Ejecuta la acción nuevamente", "Hazlo incluso si la situación es pequeña", "Registra qué ocurrió"], 
      questions: ["¿Fue más fácil esta vez?", "¿Qué cambió respecto al primer intento?"], 
      help: "La repetición construye nuevas respuestas automáticas.", 
      closure: "Repetir es entrenar tu mente y tu conducta.", 
      phrase: "Sostengo el cambio con práctica"

    }, 
    {
      day: 20,
      title: "Identificación de resistencias",
      purpose: "Reconocer las formas en que te resistes a cambiar incluso cuando ya sabes qué hacer.", 
      activity: ["Escribe momentos en los que no aplicaste el cambio", "Describe qué pensaste en ese momento", "Identifica qué te dijiste para justificar no actuar", "Escribe qué evitaste al no cambiar"], 
      questions: ["¿Cómo me justifico para no cambiar?", "¿Qué estoy protegiendo al no actuar diferente?"], 
      help: "La resistencia no es falta de disciplina, es una forma de protección interna.", 
      closure: "Entender tu resistencia te permite atravesarla.", 
      phrase: "Reconozco mi resistencia"    
    },
    {
      day: 21,
      title: "Intervención de resistencias",
      purpose: "Diseñar una respuesta concreta para los momentos en que aparezca la resistencia.", 
      activity: ["Toma las justificaciones identificadas", "Escribe una respuesta consciente para cada una", "Define una acción mínima que harás incluso con resistencia", "Comprométete a ejecutarla"], 
      questions: ["¿Qué puedo hacer incluso cuando no tengo ganas?", "¿Cómo reduzco la exigencia para poder avanzar?"], 
      help: "No necesitas eliminar la resistencia, necesitas actuar a pesar de ella.", 
      closure: "Hoy aprendes a moverte con resistencia.", 
      phrase: "Me muevo a pesar de la resistencia"
    },
    {
      day: 22,
      title: "Consolidación de conducta",
      purpose: "Convertir la acción consciente en una práctica más estable.", 
      activity: ["Define una rutina mínima que incluya tu nueva acción", "Establece cuándo la vas a aplicar", "Ejecuta durante el día", "Registra cumplimiento"], 
      questions: ["¿Estoy siendo constante?", "¿Qué facilita que lo haga?"], 
      help: "La consistencia es más importante que la intensidad", 
      closure: "Lo que repites se vuelve parte de ti.", 
      phrase: "Convierto el cambio en hábito"
    }, 
    {
      day: 23,
      title: "Observación del pensamiento en tiempo real", 
      purpose: "Detectar los pensamientos justo en el momento en que influyen en tu comportamiento.", 
      activity: ["Durante el día, cuando sientas incomodidad, detente", "Escribe qué estás pensando en ese instante", "Identifica si ese pensamiento impulsa o limita tu acción", "Observa si actúas según ese pensamiento"], 
      questions: ["¿Qué pensamientos aparecen antes de actuar?", "¿Estoy creyendo todo lo que pienso?"], 
      help: "El pensamiento automático dirige tu conducta si no lo haces consciente.", 
      closure: "Hoy empiezo a detectar el origen de mis acciones.", 
      phrase: "Observo lo que pienso en el momento"

    }, 
    {
      day: 24,
      title: "Reemplazo consciente", 
      purpose: "Aprender a intervenir tus pensamientos para modificar tu comportamiento.", 
      activity: ["Toma un pensamiento limitante identificado", "Escríbelo tal cual aparece", "Escribe una versión alternativa más útil y realista", "Aplica ese nuevo pensamiento cuando aparezca el original"], 
      questions: ["¿Este nuevo pensamiento me permite actuar diferente?", "¿Lo puedo sostener en una situación real?"], 
      help: "No se trata de pensar positivo, se trata de pensar funcional", 
      closure: "Hoy empiezas a dirigir tu mente", 
      phrase: "Elijo cómo pensar"
    },
    {
      day: 25,
      title: "Refuerzo interno", 
      purpose: "Consolidar una nueva forma de pensar y actuar a través de repetición consciente.", 
      activity: ["Escribe tres ideas clave que quieres empezar a creer", "Relacionalas con acciones concretas", "Repítelas antes de enfrentar situaciones desafiantes", "Observa cómo influyen en tu comportamiento"], 
      questions: ["¿Estas ideas están alineadas con lo que estoy haciendo?", "¿Estoy empezando a actuar diferente?"], 
      help: "Lo que repites con conciencia se convierte en referencia interna.", 
      closure: "Estás construyendo una nueva forma de responder.", 
      phrase: "Refuerzo en quién me estoy convirtiendo"
    },

    {
      day: 26, 
      title: "Expansión del cambio", 
      purpose: "Llevar el cambio que has trabajado a otros contextos de tu vida, evitando que se quede limitado a una sola situación.", 
      activity: ["Identifica al menos tres contextos distintos donde tu patrón también aparece (trabajo, familia, pareja, decisiones personales, etc.)", "Describe cómo se manifiesta en cada uno", "Define cómo aplicarías tu nueva forma de actuar en esos contextos", "Elige uno y ejecútalo hoy" ], 
      questions: ["¿Dónde más estoy repitiendo este patrón sin darme cuenta?", "¿Estoy aplicando el cambio solo cuando es fácil?"], 
      help: "Un cambio real no es situacional, es transversal.", 
      closure: "Hoy empiezas a llevar tu cambio a toda tu vida.", 
      phrase: "Llevo mi cambio a toda mi vida"
    }, 
    {
      day: 27,
      title: "Coherencia personal",
      purpose: "Alinear lo que piensas, lo que dices y lo que haces en relación con el cambio que estás construyendo.", 
      activity: ["Escribe qué estás pensando actualmente sobre tu proceso", "Escribe qué estás diciendo a otros o a ti mismo", "Escribe qué estás haciendo realmente", "Identifica incoherencias y define un ajuste concreto"], 
      questions: ["¿Estoy siendo coherente o me estoy engañando?", "¿Dónde estoy diciendo algo que no estoy sosteniendo?"], 
      help: "La incoherencia debilita cualquier proceso de cambio.", 
      closure: "Alinearte contigo mismo fortalece tu identidad.", 
      phrase: "Soy coherente conmigo"
    
    },
    {
      day: 28,
      title: "Relación con el entorno", 
      purpose:  "Reconocer cómo tu entorno influye en tu proceso y cómo estás respondiendo a esa influencia.", 
      activity: ["Identifica personas, espacios o dinámicas que facilitan tu cambio", "Identifica cuáles lo dificultan", "Describe cómo reaccionas frente a cada uno", "Define una forma distinta de responder ante lo que te afecta"], 
      questions: ["¿Estoy dejando que mi entorno defina mi comportamiento?", "¿Cómo puedo sostenerme sin depender del entorno?"], 
      help: "No puedes controlar tu entorno, pero sí cómo respondes a él.", 
      closure: "Tu estabilidad no puede depender de lo externo", 
      phrase: "Me sostengo en mí"
    },
    {
      day: 29,
      title: "Autocuidado consciente", 
      purpose: "Reconocer el autocuidado como una decisión activa que sostiene tu proceso.", 
      activity: ["Identifica en qué momentos te vuelves a descuidar", "Describe qué haces cuando eso ocurre", "Define tres acciones concretas de autocuidado aplicables a tu día a día"],
      questions: ["¿Qué necesito realmente para sostenerme?", "¿Por qué dejo de cuidarme cuando más lo necesito?"], 
      help: "El autocuidado no es ocasional, es estructural", 
      closure: "Cuidarte es parte del cambio, no un extra.", 
      phrase: "Me sostengo a través de mí" 
    },
    {
      day: 30,
      title: "Evaluación profunda del proceso",
      purpose: "Reconocer con claridad qué ha cambiado y qué sigue en proceso.", 
      activity: ["Vuelve al día 1 y lee lo que escribiste", "Compara con tu estado actual", "Escribe cambios concretos en pensamientos, emociones y acciones", "Identifica qué aún no has logrado sostener"], 
      questions: ["¿Qué cambio es real y verificable?", "¿Qué sigo evitando trabajar?"], 
      help: "Evaluar no es juzgar, es ubicarte nuevamente.", 
      closure: "Hoy ves tu proceso completo.", 
      phrase: "Reconozco mi evolución"
    },
    {
      day: 31,
      title: "Regulación consciente",
      purpose: "Fortalecer tu capacidad de pausar antes de reaccionar y elegir tu respuesta.", 
      activity:["Identifica una situación reciente donde reaccionaste automáticamente", "Reescríbela aplicando una pausa consciente (detenerte, observar, elegir)", "Define qué harás la próxima vez", "Durante el día, practica pausar antes de responder en cualquier situación"], 
      questions: ["¿En qué momento pierdo el control?", "¿Qué cambia cuando me detengo antes de actuar?"],
      help: "La pausa es el punto donde aparece la elección.", 
      closure: "Responder distinto es el verdadero cambio.", 

    phrase: "Me detengo antes de actuar"
    }, 
    {
      day: 32,
      title: "Proyección y sostenibilidad", 
      purpose: "Definir cómo vas a sostener este proceso más allá de estos días.", 
      activity: ["Escribe qué prácticas te han funcionado", "Define cuáles vas a mantener", "Establece una estructura mínima semanal", "Define qué harás cuando vuelvas a un patrón antiguo"],
      questions: ["¿Qué necesito para no volver a lo mismo?", "¿Cómo voy a sostener este cambio en el tiempo?"], 
      help: "El cambio real se mide en lo que logras sostener", 
      closure: "Hoy diseñas tu continuidad",
      phrase: "Sostengo mi proceso"
    },

    {

      day: 33,
      title: "Cierre consciente e integración",
      purpose: "Cerrar el proceso reconociendo tu transformación y asumiendo un compromiso real contigo.", 
      activity: ["Escribe cómo llegaste a este proceso (pensamientos, emociones, situación)", "Escribe cómo estás hoy en esos mismos aspectos", "Describe qué cambió en tu forma de pensar, sentir y actuar", "Escribe una carta dirigida a ti mismo donde establezcas compromisos claros, realistas y medibles", "Incluye qué harás cuando falles, no solo cuando lo hagas bien"], 
      questions: ["¿Quién soy hoy en comparación con quien inició?", "¿Qué ya no estoy dispuesto a seguir permitiendo en mi vida?", "¿Qué decisiones concretas voy a sostener a partir de ahora?"], 
      help: "Cerrar un proceso no es terminar, es integrar y asumir continuidad con mayor conciencia.", 
      closure: "Este proceso no se termina aquí. Se refleja en cómo decides vivir después de esto.", 
      phrase: "Soy responsable de mi vida"
    }

  ],
  
};