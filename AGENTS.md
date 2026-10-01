# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Construcción de una SPA con React y TypeScript**.

| | |
|---|---|
| Tema | React TypeScript |
| Nivel | junior-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 18 |
| Patron arquitectonico | componentes funcionales con hooks y Context API |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 18.2.0
- react-dom 18.2.0
- @types/react 18.2.56
- @types/react-dom 18.2.19
- react-router-dom 6.22.1
- typescript 5.3.3
- formik 2.4.5
- yup 1.3.3
- @testing-library/react 14.2.1
- jest 29.7.0
- axios 1.6.7

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Estructura básica de la SPA**: Aplicación con rutas básicas funcionales.
- **Fase 2 — Registro de solicitudes**: Formulario funcional para registrar solicitudes con validaciones y manejo de errores.
- **Fase 3 — Visualización del estado de las solicitudes**: Página funcional para visualizar el estado de las solicitudes con manejo de errores.
- **Fase 4 — Notificaciones de estado de solicitud**: Sistema de notificaciones funcional con manejo de errores.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (15)

- `vite.config.ts`
- `package.json`
- `tsconfig.json`
- `src/main.tsx`
- `src/App.tsx`
- `index.html`
- `src/pages/LoanRequestForm.tsx`
- `src/pages/LoanStatus.tsx`
- `src/context/LoanContext.tsx`
- `src/components/NotificationSystem.tsx`
- `src/hooks/useLoanRequests.ts`
- `src/types/loan.d.ts`
- `src/services/api.ts`
- `src/utils/validators.ts`
- `src/styles/global.css`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/components`
- `src/pages`
- `src/context`
- `src/hooks`
- `src/types`
- `src/utils`
- `src/services`
- `src/styles`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **componentes funcionales con hooks y Context API**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Brecha que el reto ataca: Construir una SPA con React, TypeScript, hooks y Context API

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
