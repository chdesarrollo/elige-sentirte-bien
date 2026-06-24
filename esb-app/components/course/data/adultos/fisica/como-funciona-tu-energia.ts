import { Course } from "@/components/course/types";

export const comoFuncionaTuEnergia: Course = {
    id: "como-funciona-tu-energia",
    title: "Cómo funciona tu energía",
    section: "adultos",
    dimension: "fisica",
    price: 0, // luego se ajustará a pago
    description: ``,
    days: [
        {
            day: 1,
            title: "Conociendo tu energía",
            purpose: "Entender cómo se manifiesta tu energía en el día a día",
            activity: [
                "Observa tus patrones de energía a lo largo del día",
                "Identifica las actividades que te energizan y las que te agotan",
                "Escribe tres momentos en los que has sentido una gran energía"
            ],
            questions: [
                "¿Qué actividades me hacen sentir vivo?",
                "¿Dónde siento mi energía más fuerte?"
            ],
            help: "Tu energía es un recurso valioso que puedes gestionar",
            closure: "Hoy empiezo a escuchar mi energía",
            phrase: "Escucho mi energía"
        }
    ]
};
