import { Course } from "@/components/course/types"; 

export const amorPropio: Course = {
    id: "amor-propio",
    title: "Amor propio",
    section: "adultos",
    dimension: "emocional",
    price: 7, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Amor propio</strong></h1>
Este proceso no es para sentirte bien contigo por momentos. Es para cambiar la 
forma en que te relacionas contigo misma.
El amor propio no es lo que dices de ti, es cómo te tratas en lo cotidiano.
Muchas personas creen que se quieren, pero se exigen en exceso, se hablan 
mal, se abandonan o se ponen en último lugar.
Este proceso está diseñado para que puedas ver eso con claridad y empezar a 
transformarlo.
Vas a observarte, confrontarte, decidir y actuar distinto contigo.
No se trata de pensar bonito. Se trata de tratarte mejor de forma real.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde identificas cómo es tu relación contigo misma, 
reconoces tus patrones de autoabandono y empiezas a construir una forma más 
consciente de tratarte.
Aquí el objetivo no es sentirte mejor por un momento. Es dejar de relacionarte 
contigo desde la exigencia, la culpa o el descuido.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien se exige demasiado.
Para quien se pone en último lugar.
Para quien siente que podría tratarse mejor, pero no sabe cómo hacerlo en la 
práctica.

<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
Día a día, observando y actuando distinto contigo.
No es lo que escribes, es cómo empiezas a tratarte.
Compromiso consciente
Si haces este proceso, hazlo con honestidad.
No para verte bien, sino para verte de verdad`,
    days: [
        {
            day: 1,
            title: "Relación contigo misma",
            purpose: "Hacer consciente cómo es realmente tu relación contigo, más allá de lo que crees",
            activity: [ "Escribe cómo dirías que es tu relación contigo misma", "Luego describe cómo te tratas en un día normal (pensamientos, palabras, acciones)", "Compara ambas descripciones", "Identifica si hay coherencia o contradicción"],
            questions: ["¿Me trato como creo que me trato?", "¿Hay diferencia entre lo que pienso de mí y como actú conmigo?", "¿Estoy siendo honesta o idealizando?"],
            help: "El amor propio no se define por lo que crees, sino por cómo actúas contigo",
            closure: "Hoy veo mi relación conmigo misma con claridad",
            phrase: "Me observo con honestidad",
        }, 
        {
            day: 2,
            title: "Diálogo interno",
            purpose: "Identificar cómo es tu diálogo interno y cómo te hablas a ti misma",
            activity: [ "Durante el día, presta atención a cómo te hablas a ti misma", "Escribe los pensamientos que tienes sobre ti a lo largo del día", "Identifica si esos pensamientos son amables, exigentes, críticos o de apoyo"],
            questions: ["¿Cómo me hablo a mí misma?", "¿Qué tipo de pensamientos tengo sobre mí?", "¿Estoy siendo amable o exigente conmigo?"],
            help: "El amor propio se refleja en el diálogo interno que tienes contigo misma",
            closure: "Hoy escucho mi diálogo interno con atención",
            phrase: "Escucho cómo me hablo a mí misma",
            
        }
    ]
};