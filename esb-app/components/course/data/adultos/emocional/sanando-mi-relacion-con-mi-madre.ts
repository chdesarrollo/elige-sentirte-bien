import { Course } from "@/components/course/types";

export const sanandoMiRelacionConMiMadre: Course = {
    id: "sanando-mi-relacion-con-mi-madre",
    title: "Sanando mi relación con mi madre",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Sanando mi relación con mi madre</strong></h1>
    Bienvenido a este espacio
La relación con tu madre no es solo un recuerdo.
Es una sensación.
Está en cómo te sientes contigo en cómo te hablas en cómo buscas afecto en cuánto te permites recibir
A veces fue cercana pero no suficiente
A veces estuvo pero no conectó
A veces dio mucho pero no lo que necesitabas
Y eso deja algo muy profundo:
una forma de sentirte una forma de necesitar una forma de vincularte
Este proceso no es para juzgarla ni para idealizarla
Es para entender cómo esa relación vive en ti hoy y empezar a suavizar lo que duele
Porque sanar esta relación no es cambiarla a ella
es dejar de tratarte desde esa herida
Cómo trabajar este proceso
No respondas desde lo que “debería ser una madre”
responde desde lo que viviste
Y sobre todo… desde cómo te sientes hoy
Punto clave
No siempre te faltó amor
A veces te faltó la forma en que lo necesitabas.`,

    days: [
        {
            day: 1,
            title: "El vínculo emocional", 
            purpose: "Reconocer cómo fue tu conexión emocional con tu madre.", 
            activity: ["Escribe cómo te sentías ocn tu madre: ej. seguro, escuchado, juzgado, ignorado, acomapado", "No describas hechos, describe emociones"], 
            questions: ["¿Cómo me sentía cuando estaba con ella?"], 
            help: "La relación con tu madre se recuerda más por cómo te hacía sentir que por lo que hacía.", 
            closure: "Hoy conectaste con la emoción base del vínculo", 
            phrase:"Reconozco cómo me sentía"
        },
    ]
}
