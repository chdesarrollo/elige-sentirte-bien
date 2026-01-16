Elige Sentirte Bien – Plataforma de Cursos Digitales
Descripción general

Elige Sentirte Bien es una plataforma digital en desarrollo cuyo objetivo es permitir a las personas acceder a contenido educativo multimedia (cursos) mediante pagos recurrentes, gestionando de forma automática el acceso, la expiración de suscripciones y el historial de pagos.

El proyecto está diseñado desde el inicio con un enfoque en:

escalabilidad,

mantenibilidad,

seguridad de la información,

y claridad en el modelo de negocio.

Actualmente, el repositorio contiene el diseño completo de la base de datos, que constituye la columna vertebral del sistema.

Objetivo del proyecto

Construir una plataforma que permita:

Registrar usuarios de manera segura

Vender cursos de forma individual

Gestionar suscripciones mensuales con período de gracia

Registrar todos los pagos realizados (sin borrarlos nunca)

Controlar el acceso a los cursos únicamente mediante pagos aprobados

Escalar en el futuro a miles o millones de usuarios

Estado actual del proyecto

✅ Fase completada

Diseño del modelo de datos

Creación de tablas relacionales

Definición de tipos ENUM para reglas de negocio

Índices para optimización de consultas

Pruebas básicas de integridad referencial

🚧 Fase siguiente

Desarrollo del backend

Conexión a la base de datos

Autenticación de usuarios

Control de acceso a cursos

Tecnologías utilizadas (hasta ahora)

PostgreSQL
Base de datos relacional principal del proyecto.

SQL
Lenguaje para definición de esquema, reglas e índices.

El backend se desarrollará posteriormente (probablemente en Python o JavaScript), pero aún no forma parte de este repositorio.

Estructura del repositorio
elige-sentirte-bien/
│
├── database/
│   ├── types.sql      # Tipos ENUM (roles, estados, métodos de pago, etc.)
│   ├── schema.sql     # Tablas principales del sistema
│   ├── indexes.sql    # Índices para optimización
│   └── tests.sql      # Inserts y pruebas de integridad
│
├── .gitignore
└── README.md

Modelo de datos (resumen conceptual)

El sistema se basa en las siguientes entidades principales:

usuarios
Información básica del usuario, credenciales cifradas y rol.

cursos
Cursos disponibles en la plataforma, con precio y estado.

actividades
Contenido interno de cada curso (videos, texto, imágenes, ejercicios).

suscripciones
Relación entre usuario y curso, con fechas de inicio, vencimiento y período de gracia.

pagos
Registro histórico e inmutable de todos los pagos realizados.

El acceso a un curso depende exclusivamente de la existencia de una suscripción activa asociada a un pago aprobado.

Decisiones de diseño importantes

Los pagos nunca se eliminan

Los usuarios no se borran, solo se desactivan

Las suscripciones vencidas permanecen como historial

Las reglas complejas de negocio se validan en el backend

La base de datos prioriza integridad y trazabilidad

Público objetivo

Este proyecto está orientado inicialmente a usuarios de Latinoamérica, pero fue diseñado para permitir expansión internacional, incluyendo:

múltiples monedas,

distintos métodos de pago,

y crecimiento progresivo del catálogo de cursos.

Nota para desarrolladores

Este repositorio representa una fase temprana pero crítica del proyecto.
El foco está en hacer bien las bases, evitando retrabajo en frontend o backend.

Cualquier cambio futuro deberá respetar el modelo de datos existente o justificarse explícitamente.

Autora

Proyecto desarrollado como iniciativa personal dentro del proceso de construcción de una plataforma de autogestión digital.