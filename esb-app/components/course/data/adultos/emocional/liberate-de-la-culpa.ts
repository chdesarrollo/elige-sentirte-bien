import { Course } from "@/components/course/types";

export const liberateDeLaCulpa: Course = {
    id: "liberate-de-la-culpa",
    title: "Libérate de la culpa",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Libérate de la culpa</strong></h1>
    No toda culpa es un problema.
Hay una culpa que te muestra que hiciste algo que no está alineado con lo que
sabes que es correcto.
Esa culpa es útil.
El problema es cuando la conviertes en carga permanente,
cuando te quedas ahí sin corregir,
o cuando te culpas por cosas que ni siquiera dependen de ti.
La culpa mal gestionada no te hace mejor persona.
Te estanca, te desgasta y te mantiene mirando hacia atrás sin avanzar.
Este proceso no es para dejar de sentir culpa.
Es para aprender a usarla cuando aporta y soltarla cuando no corresponde.
Aquí no vas a justificarte.
Tampoco vas a castigarte.
Vas a aprender a diferenciar, asumir y soltar.
Porque no se trata de no equivocarte,
se trata de qué haces después de hacerlo.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
Es un proceso práctico donde identificas de qué te estás culpando, distingues si
esa culpa es válida o no, asumes lo que corresponde y sueltas lo que no
depende de ti.
No es reflexión pasiva.
Es toma de responsabilidad consciente.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien carga con errores del pasado.
Para quien se culpa constantemente.
Para quien no logra soltar situaciones que ya pasaron.
<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
Con honestidad y sin evasión.
No es sentirte mejor. Es ver con claridad.
Compromiso consciente
No maquilles lo que hiciste. Pero tampoco exageres lo que no te corresponde.`,

    days: [
        {
         day: 1,
         title: "Identificación de culpa",
         purpose: "Hacer consciente de qué te estás culpando actualmente.",
         activity: ["Escribe todas las situaciones por las que sientes culpa", "Incluye situaciones recientes y pasadas", "No filtres ni justifiques", "Escríbelas de forma concreta"],
         questions: ["¿De qué me culpo con más frecuencia?", "¿Hay algo que llevo cargando hace tiempo?"], 
         help: "No puedes trabajar lo que no haces visible", 
         closure: "Hoy hiciste visible tu carga.", 
         phrase: "Identifico mi culpa"
        },
        
    ]
}