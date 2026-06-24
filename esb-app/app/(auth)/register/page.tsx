"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { string } from "zod";
import { toast } from "sonner";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: "/dashboard",
  });

  if (error) {
    console.log(error);
    return;
  }

  const token = crypto.randomUUID();

  await fetch("/api/save-verification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      token,
    }),
  });

  const verificationUrl =
    `${window.location.origin}/api/verify-email?token=${token}`;

  await fetch("/api/send-verification-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      verificationUrl,
    }),
  });

  toast.success(
    "Cuenta creada. Revisa tu correo para verificar tu cuenta."
  );
};

  return (
    <form onSubmit={handleRegister}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Crear cuenta</CardTitle>
          <CardDescription>
            Regístrate con tu correo electrónico
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div>
            <Label>Nombre</Label>
            <Input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label>Correo electrónico</Label>
              <Input
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label>Contraseña</Label>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Número de teléfono</Label>
              <Input
                type="tel"
                placeholder="123-456-7890"
              />
            </div>
            <div className="grid gap-2">
              <Label>País</Label>
              <Input
                type="text"
                placeholder="Tu país"
              />
            </div>
            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
          </div>
          <Link href="/login" className="text-xs text-muted-foreground">
  ¿Ya tienes una cuenta? <span className="underline">Inicia sesión</span>
</Link>
        </CardContent>
      </Card>
    </form>
  );
}