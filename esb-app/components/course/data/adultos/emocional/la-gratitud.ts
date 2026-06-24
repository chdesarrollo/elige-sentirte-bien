import { Course } from "@/components/course/types";

export const laGratitud: Course = {
    id: "la-gratitud",
    title: "La gratitud",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso La gratitud</strong></h1>
    Tu forma de ver la vida no es neutral. Está entrenada.
Y la mayoría del tiempo está entrenada para enfocarse en lo que falta, en lo que no salió bien y en lo que no es suficiente.
No porque así sea la realidad, sino porque así aprendiste a mirarla.
La gratitud no es una emoción espontánea. Es una habilidad que se entrena.
Si no la entrenas, tu atención se va a seguir yendo automáticamente hacia lo negativo, hacia la queja o hacia la insatisfacción constante.
Este proceso no es para “sentirte bien” por obligación. Es para cambiar el criterio con el que interpretas lo que vives.
Aquí no vas a negar lo difícil. Vas a dejar de ignorar lo que sí funciona, lo que sí tienes y lo que sí está aportando valor a tu vida.
La diferencia no está en tu realidad. Está en lo que eliges ver de ella.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde entrenas tu atención para identificar con precisión lo que sí está presente en tu vida y dejar de vivir desde la sensación constante de carencia.
No es repetir frases positivas. Es aprender a percibir diferente.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien siente que nunca es suficiente. Para quien se enfoca más en lo que falta que en lo que hay. Para quien quiere dejar de vivir desde la insatisfacción constante.
<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
A través de observación, registro y precisión.
No es escribir por escribir. Es entrenar tu forma de mirar.
Compromiso consciente
Si lo haces superficial, no cambia nada.
Esto solo funciona si te obligas a ver más allá de lo obvio.`,
    days: [
        {
         day: 1,
            title: "Interrupción de la queja",
            purpose: "Hacer consciente cuántas veces te enfocas en lo negativo de forma automática.", 
            activity: ["Durante el día, identifica cada vez que te quejas (mental o verbalmente)", "Registra al menos 5 momentos", "Escribe exactamente de qué te estabas quejando", "Al lado, escribe qué sí estaba funcionando en esa misma situación"], 
            questions: ["¿Con qué frecuencia me quejo sin darme cuenta?", "¿Puedo ver algo positivo en la misma situación?"],
            help: "La gratitud empieza cuando haces visible la queja automática.", 
            closure: "Hoy viste cómo tu atención se va a lo que no funciona", 
            phrase: "Detecto mi enfoque automático"
        },
    ]
}