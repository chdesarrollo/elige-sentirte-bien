export type Day = {
  day: number;
  title: string;
  purpose: string;
  activity: string[];
  questions: string[];
  help: string;
  closure: string;
  phrase: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  section: "adultos" | "niños" | "jovenes" | "parejas" | "padres";
  dimension:
    | "emocional"
    | "fisica"
    | "espiritual"
    | "intelectual"
    | "ocupacional"
    | "ambiental"
    | "social";
  price: number;
  days: Day[];
};