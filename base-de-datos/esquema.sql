CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    correo TEXT UNIQUE NOT NULL,
    hash_contrasena TEXT NOT NULL,
    genero genero,
    rol rol_usuario NOT NULL DEFAULT 'usuario',
    activo BOOLEAN NOT NULL DEFAULT true,
    creado_en TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    precio_actual NUMERIC(10,2) NOT NULL CHECK (precio_actual >= 0),
    moneda CHAR(3) NOT NULL DEFAULT 'COP',
    activo BOOLEAN NOT NULL DEFAULT true,
    visible BOOLEAN NOT NULL DEFAULT true,
    creado_en TIMESTAMP NOT NULL DEFAULT NOW(),
    actualizado_en TIMESTAMP
);

CREATE TABLE actividades (
    id SERIAL PRIMARY KEY,
    curso_id INTEGER NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    tipo tipo_actividad NOT NULL,
    orden INTEGER NOT NULL CHECK (orden > 0),
    activo BOOLEAN NOT NULL DEFAULT true,
    creado_en TIMESTAMP NOT NULL DEFAULT NOW(),
    actualizado_en TIMESTAMP
);

CREATE TABLE suscripciones (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    curso_id INTEGER NOT NULL REFERENCES cursos(id),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    fecha_fin_gracia DATE NOT NULL,
    estado estado_suscripcion NOT NULL,
    cancelada_en TIMESTAMP,
    creada_en TIMESTAMP NOT NULL DEFAULT NOW(),
    actualizado_en TIMESTAMP
);

CREATE TABLE pagos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    curso_id INTEGER NOT NULL REFERENCES cursos(id),
    suscripcion_id INTEGER REFERENCES suscripciones(id),
    monto NUMERIC(10,2) NOT NULL CHECK (monto >= 0),
    moneda CHAR(3) NOT NULL DEFAULT 'COP',
    estado estado_pago NOT NULL,
    metodo metodo_pago NOT NULL,
    id_pasarela TEXT UNIQUE,
    fecha_pago TIMESTAMP NOT NULL DEFAULT NOW(),
    creado_en TIMESTAMP NOT NULL DEFAULT NOW()
);
