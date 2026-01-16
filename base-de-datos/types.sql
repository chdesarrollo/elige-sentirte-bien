CREATE TYPE rol_usuario AS ENUM ('usuario', 'admin');
CREATE TYPE genero AS ENUM ('femenino', 'masculino', 'noespecificar');
CREATE TYPE tipo_actividad AS ENUM ('video', 'texto', 'imagen', 'ejercicio');
CREATE TYPE estado_suscripcion AS ENUM ('activa', 'en_gracia', 'vencida', 'cancelada');
CREATE TYPE estado_pago AS ENUM ('pendiente', 'aprobado', 'rechazado');
CREATE TYPE metodo_pago AS ENUM ('tarjeta', 'pse', 'paypal', 'transferencia', 'otro');
