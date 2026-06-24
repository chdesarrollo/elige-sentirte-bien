import { Course } from "@/components/course/types";

export const propositoDeVida: Course = {
    id: "proposito-de-vida",
    title: "Propósito de vida",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Propósito de vida</strong></h1>
    No estás aquí para encontrar una frase que resuma tu vida.
Estás aquí para dejar de moverte sin cuestionar hacia dónde vas.
El propósito no es algo que aparece claro de un momento a otro. Es algo que se construye cuando empiezas a observar cómo vives, qué eliges y qué sostienes.
Probablemente ya haces muchas cosas bien. Pero eso no significa que todo lo que haces tenga sentido para ti.
Este proceso no busca que “descubras tu misión”. Busca que empieces a tomar decisiones con más intención.
Porque el problema no es no saber qué hacer. Es seguir haciendo cosas que no conectan contigo.
<h2>Cómo trabajar este proceso</h2>
No respondas rápido.
Responde real.
No pienses en lo ideal. Piensa en lo que estás viviendo.
Punto clave
Tu propósito no está lejos. Está en lo que eliges repetir cada día.`,
    days: [
        {
         day: 1,
         title: "Dónde estás realmente", 
         purpose: "Tomar conciencia de tu punto actual.", 
         activity: ["Describe tu vida hoy de forma concreta: ¿En qué pasas tu tiempo?", "¿Qué haces con frecuencia?", "¿Qué te hace sentir bien?", "¿Qué te hace sentir mal?", "¿Qué te gustaría cambiar?" ,"Hazlo sin justificar y sin suavizar."],
         questions: ["¿Estoy satisfecho con cómo vivo hoy?", "¿Qué parte de mi vida no se siente alineada?"], 
         help: "No puedes definir dirección sin ver tu realidad", 
         closure: "Hoy viste tu punto de partida real.", 
         phrase: "Veo dónde estoy"
        },
    ]
}

