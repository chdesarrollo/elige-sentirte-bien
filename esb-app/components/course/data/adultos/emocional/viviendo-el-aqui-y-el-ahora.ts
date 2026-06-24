import { Course } from "@/components/course/types";

export const viviendoElAquiYElAhora: Course = {
    id: "viviendo-el-aqui-y-el-ahora",
    title: "Viviendo el aquí y el ahora",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Viviendo el aquí y el ahora</strong></h1>
    Bienvenido a este espacio
No estás tan presente como crees.
Tu cuerpo está aquí pero tu mente no siempre
se va a lo que ya pasó o se adelanta a lo que aún no ocurre
y en ese movimiento constante te pierdes lo que sí está pasando
tu vida, ahora
No es falta de tiempo es falta de presencia
Este proceso no es para controlar tu mente
es para que dejes de irte sin darte cuenta y aprendas a volver
Cómo trabajar este proceso
No se trata de estar concentrado todo el tiempo
se trata de notar cuándo te fuiste y regresar
Punto clave
Volver al presente es una decisión repetida.`,
    days: [
        {
         day: 1,
         title: "Darte cuenta", 
         purpose: "Reconocer cuántas veces tu mente no está en el presente.", 
         activity: ["Durante el día pregúntate varias veces '¿Dónde está mi mente ahora, en el pasado, en el futuro o en el presente?'"], 
         questions: ["¿Cuántas veces me fui sin darme cuenta?", "¿En qué situaciones me voy más?"],
         help: "No puedes cambiar algo que no ves.", 
         closure: "Hoy empezaste a notar tu mente.", 
         phrase: "Me doy cuenta"
        },
    ]
}
