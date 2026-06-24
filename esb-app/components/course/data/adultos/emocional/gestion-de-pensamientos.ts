import { Course } from "@/components/course/types";

export const gestionDePensamientos: Course = {
    id: "gestion-de-pensamientos",
    title: "Gestión de pensamientos",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Gestión de pensamientos</strong></h1>
    No es lo que pasa. Es lo que te dices sobre lo que pasa.
Un mismo hecho puede generar calma o estrés, seguridad o duda, acción o bloqueo.
La diferencia no está en la situación. Está en el pensamiento que aparece… y en si lo sigues o no.
Este proceso no es para que dejes de tener pensamientos negativos.
Es para que dejes de creértelos todos.
Porque no todo lo que piensas es verdad. Y no todo lo que piensas necesita ser obedecido.
Aquí vas a aprender algo muy práctico:
detectar lo que te dices darte cuenta cuando eso te afecta y decidir cómo actuar sin dejarte llevar automáticamente
Sin teoría complicada. Sin ejercicios irreales.
Esto lo haces en tu día, mientras trabajas, hablas, decides y vives.
<h2><strong>¿De qué se trata este proceso?</strong></h2>
De aprender a manejar lo que pasa por tu mente para que no dirija tu vida sin darte cuenta.
<h2><strong>¿Para quién es este proceso?</strong></h2>
Para quien piensa demasiado Para quien se llena de dudas Para quien se bloquea por lo que piensa
<h2><strong>¿Cómo se va a vivir el proceso?</strong></h2>
En situaciones reales.
No necesitas tiempo extra. Solo atención.
Compromiso consciente
Hoy no vas a creer todo lo que piensas.`,
    days: [
        {
         day: 1,
         title: "Darte cuenta", 
         purpose: "Empezar a notar lo que te dices durante el día.", 
         activity: ["Hoy, cada vez que algo te incomode, pregúntate: ¿qué me estoy diciendo ahora mismo?", "Hazlo al menos 3 veces en el día"],
         questions: ["¿Qué me digo cuando algo no sale como quiero?", "¿Soy duro o flexible conmigo?"], 
         help: "No te afecta solo lo que pasa, sino lo que piensas sobre eso.", 
         closure: "Hoy empezaste a escucharte", 
         phrase: "Me doy cuenta de lo que me digo"
        },
    ]
}
