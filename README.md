# Construcción de una SPA con React y TypeScript

El equipo de desarrollo de una fintech necesita crear una aplicación de página única (SPA) para gestionar las solicitudes de préstamos de los clientes. La aplicación debe permitir a los usuarios registrar sus solicitudes, ver el estado de sus solicitudes y recibir notificaciones cuando su solicitud sea aprobada o rechazada. Los usuarios pueden ser clientes existentes o nuevos. La aplicación debe manejar errores de red y validaciones de formulario de manera eficiente.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React TypeScript |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Estructura básica de la SPA

**Objetivo:** Crear la estructura básica de la aplicación con las rutas principales.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Diseña la estructura de la aplicación con las rutas para el registro de solicitudes, visualización del estado de las solicitudes y notificaciones.
- Implementa la navegación entre estas rutas.

**Entregable:** Aplicación con rutas básicas funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar los componentes para reutilización.
- Piensa en cómo manejar la navegación entre rutas.

</details>

### Fase 2: Registro de solicitudes

**Objetivo:** Implementar la funcionalidad para registrar solicitudes de préstamos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea un formulario para que los usuarios puedan registrar sus solicitudes de préstamos.
- Valida los datos del formulario antes de enviar la solicitud.
- Maneja los errores de red que puedan ocurrir durante el envío de la solicitud.

**Entregable:** Formulario funcional para registrar solicitudes con validaciones y manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los tipos de datos que necesitas validar.
- Piensa en cómo puedes manejar los errores de red de manera eficiente.

</details>

### Fase 3: Visualización del estado de las solicitudes

**Objetivo:** Implementar la funcionalidad para que los usuarios puedan ver el estado de sus solicitudes.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea una página donde los usuarios puedan ver el estado de sus solicitudes de préstamos.
- Muestra la información relevante sobre cada solicitud.
- Maneja los errores de red que puedan ocurrir al obtener la información de las solicitudes.

**Entregable:** Página funcional para visualizar el estado de las solicitudes con manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera qué información es relevante mostrar al usuario.
- Piensa en cómo puedes manejar los errores de red al obtener la información de las solicitudes.

</details>

### Fase 4: Notificaciones de estado de solicitud

**Objetivo:** Implementar la funcionalidad para notificar a los usuarios sobre el estado de sus solicitudes.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crea un sistema de notificaciones que informe a los usuarios cuando su solicitud sea aprobada o rechazada.
- Asegura que las notificaciones sean persistentes y se muestren incluso si el usuario navega a otra ruta.
- Maneja los errores de red que puedan ocurrir al enviar las notificaciones.

**Entregable:** Sistema de notificaciones funcional con manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo hacer que las notificaciones sean persistentes.
- Piensa en cómo puedes manejar los errores de red al enviar las notificaciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una SPA y por qué se usa en este caso?
- **paraQueSirve**: ¿Para qué sirve la estructura básica de la aplicación en la fase 1?
- **comoSeUsa**: ¿Cómo se usa el formulario de registro de solicitudes en la fase 2?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al enviar una solicitud y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación del sistema de notificaciones en la fase 4?

## Criterios de Evaluacion

- Implementar la estructura básica de la aplicación con las rutas principales.
- Crear un formulario funcional para registrar solicitudes con validaciones y manejo de errores.
- Implementar una página funcional para visualizar el estado de las solicitudes con manejo de errores.
- Crear un sistema de notificaciones funcional con manejo de errores.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
