"use client";

import { useState, useTransition } from "react";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (error) {
        console.log("LOGIN ERROR:", error);
        alert(error.message);
      }
      const res = await fetch("/api/check-user?email=" + email);
      const user = await res.json();

      if (!user.emailVerified) {
        alert("Por favor, verifica tu correo electrónico antes de iniciar sesión");
        return;
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Iniciar sesión</CardTitle>
          <CardDescription>Inicia sesión con tu correo</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label>Correo electrónico</Label>
              <Input
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
              />
            </div>

            <div className="grid gap-2">
              <Label>Contraseña</Label>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isPending}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Iniciando sesión..." : "Continuar"}
            </Button>
          </div>
          <Link href="/register" className="text-balance text-center text-xs text-muted-foreground">
                    ¿No tienes una cuenta?{" "}
                    <span className="underline cursor-pointer">
                        Regístrate aquí
                    </span>
            </Link>
        </CardContent>
            
      </Card>
      
    </form>
  );
}