interface VerificationEmailProps {
  name: string;
  verificationUrl: string;
}

export function VerificationEmail({
  name,
  verificationUrl,
}: VerificationEmailProps) {
  return `
    <div style="
      font-family: Arial, sans-serif;
      max-width:600px;
      margin:auto;
      padding:40px;
    ">
      <h1 style="color:#3D1152;">
        Bienvenido a Elige Sentirte Bien
      </h1>

      <p>
        Hola ${name},
      </p>

      <p>
        Gracias por registrarte.
        Para activar tu cuenta confirma tu correo electrónico.
      </p>

      <a
        href="${verificationUrl}"
        style="
          display:inline-block;
          background:#F44C7F;
          color:white;
          padding:14px 24px;
          border-radius:10px;
          text-decoration:none;
          font-weight:bold;
        "
      >
        Confirmar correo
      </a>

      <p style="margin-top:30px;color:#666;">
        Si no creaste esta cuenta puedes ignorar este mensaje.
      </p>
    </div>
  `;
}   