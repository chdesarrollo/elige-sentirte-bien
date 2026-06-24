import { Course } from "@/components/course/types";

export const gestionDeEmociones: Course = {
    id: "gestion-de-emociones",
    title: "Gestión de emociones",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Gestión de emociones</strong></h1>
    Cuando una emoción aparece, haces algo con ella.
A veces respondes bien. Muchas veces reaccionas sin pensar.
No porque quieras, sino porque no tienes una forma clara de gestionarla.
Este proceso no es para entender más tus emociones. Es para que tengas herramientas concretas para manejarlas cuando aparezcan.
Aquí no vas a analizar lo que sientes durante días. Vas a aprender qué hacer en el momento en que una emoción te afecta.
Porque la diferencia no está en lo que sientes, está en lo que haces cuando lo sientes.
¿De qué se trata este proceso?
Es un proceso práctico donde aprendes estrategias específicas para manejar emociones como enojo, ansiedad, frustración o tristeza.
Cada día vas a aplicar una herramienta concreta en situaciones reales.
No se trata de evitar emociones. Se trata de saber gestionarlas cuando aparecen.
¿Para quién es este proceso?
Para quien reacciona impulsivamente. Para quien se deja llevar por lo que siente. Para quien quiere tener control sobre su respuesta emocional.
¿Cómo se va a vivir el proceso?
Aplicando herramientas en tiempo real.
No es teoría. Es práctica diaria.
Compromiso consciente
No basta con leer las herramientas. Tienes que usarlas cuando más las necesitas.`,

    days: [
        {
         day: 1,
            title: "Pausa consciente", 
            purpose: "Evitar reaccionar de inmediato cuando aparece una emoción intensa",
            activity: ["Identifica una situación donde sientas una emoción fuerte", "Antes de reaccionar, detente 10 segundos", "No hables, no respondas, no actúes", "Solo observa lo que estás sintiendo", "Luego decide qué hacer"], 
            questions: ["¿Qué cambia cuando no reacciono de inmediato?", "¿Pude detenerme o actué en automático?"], 
            help: "La pausa rompe la reacción automática", 
            closure: "Hoy creaste espacio entre emoción y reacción.", 
            phrase: "Me detengo antes de reaccionar"
        },
        
    ]
}

