import { Course } from "@/components/course/types";

export const sanandoElCorazon: Course = {
    id: "sanando-el-corazon",
    title: "Sanando el corazón",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Sanando el corazón, duelo por una ruptura amorosa</strong></h1>
Bienvenido a este espacio
Hay una diferencia entre estar solo y sentir la ausencia de alguien.
Lo que estás viviendo no es solo el final de una relación. Es el desorden que queda cuando algo que ocupaba espacio en tu vida ya no está.
No todo lo que duele es la persona. A veces duele la costumbre, la rutina, lo que compartían, lo que esperabas que pasara.
Y por eso no se resuelve solo con “seguir adelante”.
Este proceso no es para distraerte. Es para que entiendas qué estás sintiendo y dejes de quedarte atrapado en eso.
No necesitas estar bien hoy. Pero sí necesitas empezar a procesar lo que pasó.
Cómo trabajar este proceso
No intentes sentirte mejor.
Intenta ser honesto con lo que sientes.
Haz cada día sin adelantarte.
Punto clave
Evitar el dolor lo alarga. Atravesarlo lo transforma.`,
    days: [
        {
         day: 1,
         title: "Aceptar que terminó",
         purpose: "Dejar de negar o resistir el final de la relación.",
         activity: ["Escribe lo que pasó, sin explicaciones largas solo qué terminó", "Luego escribe: sí, esto terminó"],
         questions: ["¿Estoy aceptando o esperando que cambie?"], 
         help: "Mientras no aceptas el final, sigues atado a la expectativa.",
         closure: "Hoy dejaste de pelear con lo que ya pasó.",
         phrase: "Acepto que esto terminó"
        },

    ]
        
}