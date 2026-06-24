"use client";

import { useState } from "react";
import { Day } from "./types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Target, PenLine, Lightbulb, CheckCircle, Quote, ChevronDown, ChevronUp, } from "lucide-react";

export function DayCard({
  day,
  unlocked,
  isActive,
  onToggle,
  onComplete,
}: {
  day: Day;
  unlocked: boolean;
  isActive: boolean
  onToggle: () => void;
  onComplete: () => void;
}) 
{
  const [checked, setChecked] = useState<boolean[]>([]);
  const [notes, setNotes] = useState("");

  if (!isActive) {
  return (
    <div
      onClick={unlocked ? onToggle : undefined}
      className={`
        bg-white rounded-3xl border transition-all cursor-pointer
        ${
          unlocked
            ? "border-[#E8DDF1] hover:border-[#F44C7F]"
            : "border-[#E8DDF1] opacity-60"
        }
      `}
    >
      <div className="p-5 flex items-center justify-between">

        <div className="flex gap-4 items-center">

          <div
            className={`
              w-12 h-12 rounded-2xl flex items-center justify-center
              ${
                unlocked
                  ? "bg-[#F44C7F]"
                  : "bg-[#E8DDF1]"
              }
            `}
          >
            <span className="text-white font-bold">
              {day.day}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#7A5A8A]">
              Lectura
            </p>

            <h3 className="font-semibold text-[#3D1152]">
              {day.title}
            </h3>
          </div>
        </div>

        {unlocked ? (
          <Unlock
            size={18}
            className="text-[#F44C7F]"
          />
        ) : (
          <Lock
            size={18}
            className="text-[#9CA3AF]"
          />
        )}
      </div>
    </div>
  );
}

  return (
    <Card className="
      bg-white
      rounded-3xl
      border-2
      border-[#F44C7F]
      overflow-hidden
      shadow-sm
    "
>
      <CardHeader>
        <div
  onClick={onToggle}
  className="cursor-pointer p-5 flex justify-between items-center"
>
  <div className="flex gap-4 items-center">
    <div className="w-12 h-12 rounded-2xl bg-[#F44C7F] flex items-center justify-center">
      <span className="text-white font-bold">
        {day.day}
      </span>
    </div>

    <div>
      <p className="text-xs uppercase tracking-wider text-[#7A5A8A]">
        Lectura
      </p>

      <h3 className="font-semibold text-[#3D1152]">
        {day.title}
      </h3>
    </div>
  </div>

  <ChevronUp
    size={18}
    className="text-[#F44C7F]"
  />
</div>
      </CardHeader>
<div className="bg-[#F44C7F] px-5 py-3">
  <h4 className="text-white font-bold uppercase tracking-wide text-sm">
    Día {day.day} — {day.title}
  </h4>
</div>
      <CardContent className="p-5 space-y-6">
        <div className="flex gap-3">
  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
    <Target
      size={16}
      className="text-[#3D1152]"
    />
  </div>

  <div>
    <p className="text-[11px] font-bold uppercase tracking-widest text-[#3D1152] mb-1">
      Propósito
    </p>

    <p className="text-sm text-[#7A5A8A]">
      {day.purpose}
    </p>
  </div>
</div>
<div className="flex gap-3">
  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
    <PenLine
      size={16}
      className="text-[#F44C7F]"
    />
  </div>

  <div className="flex-1">
    <p className="text-[11px] font-bold uppercase tracking-widest text-[#3D1152] mb-3">
      Actividad
    </p>

    <div className="space-y-3">
      {day.activity.map((item, i) => (
        <div
          key={i}
          className="flex gap-3"
        >
          <span className="w-5 h-5 rounded-full bg-[#F44C7F] text-white text-[10px] font-bold flex items-center justify-center mt-1">
            {i + 1}
          </span>

          <p className="text-sm text-[#7A5A8A]">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="bg-[#FAF5FF] border border-[#F0E8F8] rounded-2xl p-4">
  <p className="text-[11px] font-bold uppercase tracking-widest text-[#3D1152] mb-3">
    Reflexión
  </p>

  <div className="space-y-2">
    {day.questions.map((q, i) => (
      <p
        key={i}
        className="text-sm text-[#7A5A8A]"
      >
        • {q}
      </p>
    ))}
  </div>

  <p className="text-xs italic text-[#9CA3AF] mt-3">
    Escribe tus reflexiones en tu cuaderno.
  </p>
</div>
<div className="flex gap-3">
  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
    <Lightbulb
      size={16}
      className="text-amber-500"
    />
  </div>

  <div>
    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-1">
      Ayuda
    </p>

    <p className="text-sm text-[#7A5A8A]">
      {day.help}
    </p>
  </div>
</div>
<div className="flex gap-3">
  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
    <CheckCircle
      size={16}
      className="text-[#3D1152]"
    />
  </div>

  <div>
    <p className="text-[11px] font-bold uppercase tracking-widest text-[#3D1152] mb-1">
      Cierre
    </p>

    <p className="text-sm text-[#7A5A8A]">
      {day.closure}
    </p>
  </div>
</div>
<div className="bg-[#F44C7F] rounded-2xl p-4 flex gap-3">
  <Quote
    size={20}
    className="text-white/70"
  />

  <p className="text-white italic font-semibold">
    {day.phrase}
  </p>
</div>
<Button
  onClick={onComplete}
  className="
    w-full
    bg-[#F44C7F]
    hover:bg-[#e03e6f]
    text-white
    rounded-xl
    h-12
  "
>
  Completar día
</Button>
      </CardContent>
    </Card>
  );
}