import { Course } from "@/components/course/types";

export const gestionDelEstres: Course = {
    id: "gestion-del-estres",
    title: "Gestión del estrés",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Gestión del Estrés</strong></h1>
Este proceso no es para eliminar el estrés. Es para aprender a gestionarlo.
El estrés no siempre viene de lo que pasa afuera, viene de cómo lo interpretas, cómo lo manejas y cómo respondes.
Muchas personas viven con estrés constante sin darse cuenta de qué lo genera ni cómo lo sostienen.
Este proceso está diseñado para que puedas identificar qué lo activa en ti, cómo reaccionas y cómo empezar a responder de forma más consciente.
No se trata de evitar la presión. Se trata de no desbordarte frente a ella.
<h2> <strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde haces consciente tu forma de reaccionar ante el estrés, identificas tus detonantes y desarrollas respuestas más reguladas y efectivas.
Aquí el objetivo no es sentirte tranquilo todo el tiempo. Es saber qué hacer cuando el estrés aparece.
<h2> <strong>¿Para quién es este proceso?</strong></h2>
Para quien se siente saturado con frecuencia. Para quien reacciona impulsivamente bajo presión. Para quien quiere manejar mejor su energía y su respuesta emocional.
<h2> <strong>¿Cómo se va a vivir el proceso?</strong></h2>
Día a día, observando y respondiendo distinto en situaciones reales.
No es lo que sabes, es cómo reaccionas cuando algo te sobrepasa.
Compromiso consciente
Haz este proceso con honestidad.
No para evitar el estrés, sino para aprender a gestionarlo.`, 
    days: [
        {
         day: 1,
            title: "Consciencia del estrés",
            purpose: "Reconocer cómo se manifiesta el estrés en ti.", 
            activity: ["Identifica tres momentos recientes donde sentiste estrés", "Describe qué ocurrió en cada uno", "Escribe qué sentiste en el cuerpo y en la mente", "Identifica cómo reaccionaste"], 
            questions: ["¿Cómo sé que estoy estresado?", "¿Lo noto a tiempo o cuando ya estoy saturado?"], 
            help: "No puedes gestionar lo que no reconoces.", 
            closure: "Hoy hiciste visible tu experiencia de estrés.", 
            phrase: "Reconozco mi estrés"
        },
    ]
    
}
