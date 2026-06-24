import { Course } from "@/components/course/types";

export const yoPuedoSanarMiAdiccion: Course = {
    id: "yo-puedo-sanar-mi-adiccion",
    title: "Yo puedo sanar mi adicción",
    section: "adultos",
    dimension: "emocional",
    price: 0, // luego será pago
    description: `<h1> <strong>Bienvenida al proceso Yo puedo sanar mi adicción</strong></h1>
    Bienvenido a este espacio
Si estás aquí, ya sabes algo importante:
esto no es solo un hábito
es algo que sientes que a veces te gana
algo que has intentado controlar prometer posponer dejar
y vuelve
A veces con fuerza a veces en momentos específicos a veces cuando menos lo esperas
Y no siempre es falta de voluntad
es repetición es escape es automatismo
Este proceso no es para juzgarte
ni para exigirte perfección
es para que empieces a entender qué está pasando realmente y cómo empezar a cambiarlo
Cómo trabajar este proceso
No busques hacerlo perfecto
si fallas un día no abandones
esto no se trata de hacerlo perfecto se trata de hacerlo continuo
Punto clave
No eres débil
pero sí necesitas estrategia
Cierre
No se trata de “nunca más”
se trata de empezar a recuperar control.`,
    days: [
        {
            day: 1,
            title: "Nombrar la adicción", 
            purpose: "Dejar de minimizar o suavizar lo que estás viviendo", 
            activity: ["Escribe con claridad ¿cuál es mi adicción? (hazlo sin justificar ni disfrazar)"], 
            questions: ["¿He estado minimizando o normalizando mi adicción?"],
            help: "Lo que no se nombre con claridad, no se transforma", 
            closure: "Hoy dejaste del rodear el tema y lo enfrentaste con honestidad.",
            phrase: "Puedo nombrar mi adicción con claridad y la veo como lo que es."
        },
    ]
}
