"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { courses } from "@/components/course/data";
import { DayCard } from "@/components/course/day-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Heart, Lock, Unlock } from "lucide-react";



  

export default function CoursePage() {
  
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [activeDay, setActiveDay] = useState(1);

  if (!course) return <p>Proceso no encontrado</p>;

  const handleComplete = (dayNumber: number) => {
  if (!completedDays.includes(dayNumber)) {
    setCompletedDays((prev) => [...prev, dayNumber]);
  }

  setActiveDay(dayNumber + 1);
};

  const progress = Math.round(
    (completedDays.length / course.days.length) * 100
  );

  return (
    <main>
    <div className=" bg-[#FAF7FC]">
      {/* HERO */}

      <div className="pt-12 pb-6 px-5 bg-[#3D1152] rounded-b-[40px] shadow-lg">
        <div className="max-w-4xl mx-auto relative z-10 px-6 ">
          <Link href="/dashboard" className="inline-flex items-center text-white/90 hover:text-white mb-6 bg-white/10 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm transition-all">
            <ArrowLeft size={18} className="mr-1" />
            Volver
          </Link>
          
          <div className="flex gap-2 mb-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20">
              {course.section}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20">
              {course.dimension}
            </span>
          </div>

          <h1 className="font-display text-3xl text-white leading-tight mb-2">
            {course.title}
          </h1>
            <div
              className="text-white/80 w-full text-sm leading-relaxed mb-10 px"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />
            {/* Progress */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-white/60 mb-1">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F44C7F]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
            
        
          <div className="flex items-center justify-between mt-6 bg-black/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-white/60 text-xs">Precio total</span>
              <span className="text-white text-xl font-bold">${course.price} <span className="text-sm font-normal">USD</span></span>
            </div>
            <button className="bg-[#F44C7F] text-white px-6 py-2.5 rounded-xl font-semibold shadow-md active:scale-95 transition-transform">
              Comprar Proceso
            </button>
          </div>
        </div>

        
      </div>
      

      {/* CONTENT */}
     <div className="max-w-4xl mx-auto px-6 py-10">

        <h2 className="text-xl font-semibold text-[#3D1152] mb-6">
          Contenido del proceso
        </h2>

        <div className="space-y-4">
          {course.days.map((day, index) => {
            const unlocked =
              index === 0 ||
              completedDays.includes(course.days[index - 1].day);

            return (
              <DayCard
                key={day.day}
                day={day}
                unlocked={unlocked}
                isActive={activeDay === day.day}
                onToggle={() =>
                  setActiveDay(activeDay === day.day ? 0 : day.day)
                }
                onComplete={() => handleComplete(day.day)}
              />
            );
          })}
        </div>
    </div>
    </div>
  </main>
  );
}