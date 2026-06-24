import { Course } from "@/components/course/types";

export const venciendoMisMiedos: Course = {
    id: "venciendo-mis-miedos",
    title: "Venciendo mis miedos",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Venciendo mis miedos</strong></h1>
    Bienvenido a este espacio
Aquí no vas a sentirte listo.
Y eso es intencional.
Porque si estás esperando seguridad, confianza o claridad para actuar… vas a seguir en el mismo lugar.
El miedo no se va antes de hacer las cosas se queda… mientras decides si avanzas o no
Y la mayoría de las veces no te detiene el miedo
te detiene lo que haces cuando aparece
evitas postergas te convences de que después
y así se va quedando todo lo importante
Este proceso no es para entender el miedo
es para dejar de obedecerlo
Aquí no vas a trabajar con ideas
vas a trabajar con acciones reales
pequeñas al inicio incómodas después necesarias siempre
Cómo trabajar este proceso
No busques hacerlo perfecto
hazlo aunque no tengas ganas aunque dudes aunque sientas resistencia
eso es parte del proceso
Punto clave
No necesitas eliminar el miedo
necesitas moverte con él.`,
    days: [
        {
         day: 1,
         title: "Identificar el miedo real", 
         purpose: "Dejar de hablar en generalidades y ubicar el miedo concreto.", 
         activity: ["Escribe qué es lo que te da miedo exactamente, no digas 'fracasar' di qué pasaría en concreto"], 
         questions: ["¿Estoy siendo específico o sigo en lo general?"],
         help: "El miedo difuso paraliza más que el miedo claro.", 
         closure: "Hoy le pusiste forma al miedo.", 
         phrase: "Veo mi miedo con claridad"
        },
    ]
}