import { Course } from "@/components/course/types";

export const alcanzaTusMetas: Course = {
  id: "alcanza-tus-metas",
  title: "Alcanza tus metas",
  section: "adultos",
  dimension: "emocional",
  price: 4,
  description: `<p> <h1><strong>Bienvenida al proceso Alcanza tus metas</strong></h1>

Este proceso no es para pensar en lo que quieres. Es para lograrlo.
Aquí no vas a trabajar únicamente en definir metas, sino en desarrollar la 
capacidad de ejecutarlas y sostenerlas.
Muchas personas saben lo que quieren, pero no logran avanzar de forma 
constante. Este proceso está diseñado para cerrar esa brecha entre intención y 
resultado. 
Vas a definir, ejecutar, observar y ajustar.
No necesitas más ideas. Necesitas acción sostenida.

<h2><strong>¿De qué se trata este proceso?</strong> </h2>
Es un proceso práctico donde transformas una meta en acciones concretas, 
identificas cómo te comportas frente a la ejecución y desarrollas la disciplina 
necesaria para sostener el avance.
Aquí la meta no es solo lograr un resultado. Es convertirte en alguien que 
ejecuta lo que se propone.


<h2><strong>¿Para quién es este proceso?</strong> </h2>
Para quien tiene metas pero no las concreta.
Para quien empieza con intención pero no sostiene.
Para quien quiere dejar de postergar y empezar a avanzar.
<h2><strong>¿Cómo se va a vivir el proceso?</strong> </h2>
Día a día, con acciones concretas.
Lo importante no es lo que escribes, es lo que haces.
Compromiso consciente
Si decides hacer este proceso, hazlo con acción real</p>`,

  days: [
    {
      day: 1,
      title: "Definir tu meta" ,
      purpose: "Elegir una meta concreta que será el foco del proceso",
      activity: [
            "Escribe tres metas que quieres lograr actualmente",
            "Para cada meta define si depende totalmente de ti o de factores externos",
            "Identifica los obstáculos que podrían surgir y cómo los enfrentarás"
        ],
        questions: ["¿Qué quiero lograr en los próximos 30 días?","¿Qué acciones concretas puedo tomar diariamente para avanzar hacia esa meta?","¿Qué obstáculos podrían surgir y cómo puedo enfrentarlos?"],
        help: "Una meta sin un plan de acción es solo un deseo",
        closure: "Hoy defino mi meta y mi plan de acción",
        phrase: "Defino mi meta con claridad"   


        }
  ],
};