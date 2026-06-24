import { Course } from "@/components/course/types";
import { act } from "react";

export const misHabitosDeExito: Course = {
    id: "mis-habitos-de-exito",
    title: "Mis hábitos de éxito",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Mis hábitos de éxito</strong></h1>
    Revisa tu día de ayer.
No lo que planeaste. Lo que realmente hiciste.
Ahí están tus hábitos.
No necesitas imaginar una mejor versión tuya. Necesitas empezar a actuar distinto en cosas pequeñas y repetirlo.
Este proceso no es para hacer más. Es para dejar de fallar en lo básico.
Aquí no vas a depender de motivación. Vas a construir algo que funcione incluso cuando no tengas ganas.
Cómo trabajar este proceso
Un hábito a la vez.
No sumes más. No compenses. No adelantes días.
Haz lo que corresponde hoy.
Punto clave
No estás fallando por falta de disciplina. Estás fallando porque lo haces difícil de sostener.`,
    days: [
        {
         day: 1,
         title: "Elegir lo correcto", 
         purpose: "Definir un hábito que sí puedas sostener",
         activity: ["Elige un hábito que sabes que te hace bien pero no has logrado mantener.", "Haz que tu objetivo sea específico y concreto.", "Escribe por qué es importante para ti sostener este hábito.", "Define una acción concreta que puedas hacer hoy para empezar a construir este hábito.", "Asegúrate de que tu hábito puedas hacerlo incluso en un mal día."],
         questions: ["¿Esto es realista o estoy exagerando?", "¿Podría hacerlo incluso sin ganas?"], 
         help: "Un buen hábito no empieza grande, empieza posible.", 
         closure: "Hoy dejaste de elegir desde la emoción y empezaste a elegir desde la realidad.", 
         phrase: "Lo hago posible"
        },
    ]
}

        

