import { Course } from "@/components/course/types";

export const sanandoMiRelacionConMiPadre: Course = {
    id: "sanando-mi-relacion-con-mi-padre",
    title: "Sanando mi relación con mi padre",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Sanando mi relación con mi padre</strong></h1>
    Bienvenido a este espacio
Hay relaciones que no se terminan… solo cambian de forma.
La relación con tu padre es una de ellas.
Aunque no lo veas aunque no hablen aunque haya distancia
sigue presente
En lo que esperas en lo que te cuesta en cómo reaccionas en cómo te tratas
A veces no duele por lo que pasó sino por lo que faltó
Por lo que necesitabas y no llegó
Por lo que esperabas y nunca fue
Este proceso no es para cambiarlo a él
Es para que dejes de cargar lo que esa relación dejó en ti
Porque hay algo importante que necesitas ver:
no todo se resuelve con una conversación no todo se sana con cercanía
Pero sí puedes dejar de vivir desde esa herida
<h2> <strong>Cómo trabajar este proceso</strong></h2>
No intentes justificar ni tampoco exagerar
Sé honesto
Si algo incomoda, ahí hay información
Punto clave
Sanar no siempre es acercarte
A veces es dejar de esperar.`,

    days: [
        {
            day: 1,
            title: "La verdad de la relación", 
            purpose: "Salir de la versión idealizada o negada de la relación.", 
            activity: ["Escribe cómo fue tu relación con tu padre sin suavizar, sin justificar, sin adornar, sólo escribe lo que fue. "],
            questions: ["¿Estoy viendo lo que fue… o lo que me hubiera gustado que fuera?"], 
            help: "No puedes sanar algo que no estás dispuesto a ver con claridad.", 
            closure: "Hoy dejaste de maquillar la historia.", 
            phrase: "Veo lo que fue"
        },
    ]
}
