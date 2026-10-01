# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Construir una SPA con React, TypeScript, hooks y Context API

### Reto
- Tema: React TypeScript
- Seniority: junior-l2
- Tipo: practical
- Título: Construcción de una SPA con React y TypeScript
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Estructura básica de la SPA — objetivo: Crear la estructura básica de la aplicación con las rutas principales. — entregable (NO resolver): Aplicación con rutas básicas funcionales.
- Fase 2: Registro de solicitudes — objetivo: Implementar la funcionalidad para registrar solicitudes de préstamos. — entregable (NO resolver): Formulario funcional para registrar solicitudes con validaciones y manejo de errores.
- Fase 3: Visualización del estado de las solicitudes — objetivo: Implementar la funcionalidad para que los usuarios puedan ver el estado de sus solicitudes. — entregable (NO resolver): Página funcional para visualizar el estado de las solicitudes con manejo de errores.
- Fase 4: Notificaciones de estado de solicitud — objetivo: Implementar la funcionalidad para notificar a los usuarios sobre el estado de sus solicitudes. — entregable (NO resolver): Sistema de notificaciones funcional con manejo de errores.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});

// === ARCHIVO: package.json ===
{
  "name": "loan-management-spa",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx}\""
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.1",
    "axios": "^1.6.7",
    "formik": "^2.4.5",
    "yup": "^1.3.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.0",
    "@testing-library/react": "^14.2.1",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.12",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^3.2.5",
    "ts-jest": "^29.1.2",
    "@testing-library/jest-dom": "^6.4.2"
  },
  "eslintConfig": {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  "prettier": {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 80
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { LoanProvider } from './context/LoanContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoanProvider>
      <App />
    </LoanProvider>
  </React.StrictMode>
);

// === ARCHIVO: src/App.tsx ===
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanRequestForm from './pages/LoanRequestForm';
import LoanStatus from './pages/LoanStatus';
import { useLoanContext } from './context/LoanContext';
import NotificationSystem from './components/NotificationSystem';

const App = () => {
  const { state } = useLoanContext();

  return (
    <Router>
      <div className="app-container">
        <NotificationSystem />
        <Routes>
          <Route path="/" element={<LoanRequestForm />} />
          <Route path="/status" element={<LoanStatus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// === ARCHIVO: index.html ===
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sistema de Gestión de Préstamos</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/pages/LoanRequestForm.tsx ===
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLoanRequests } from '../hooks/useLoanRequests';
import { LoanRequest } from '../types/loan';
import { useContext } from 'react';
import { LoanContext } from '../context/LoanContext';

const validationSchema = Yup.object({
  clientName: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .required('El nombre del cliente es obligatorio'),
  clientEmail: Yup.string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  clientId: Yup.string()
    .matches(/^[0-9]{8,10}$/, 'La cédula debe tener entre 8 y 10 dígitos')
    .required('La cédula del cliente es obligatoria'),
  amount: Yup.number()
    .min(100000, 'El monto mínimo es de $100,000')
    .max(50000000, 'El monto máximo es de $50,000,000')
    .required('El monto del préstamo es obligatorio'),
  term: Yup.number()
    .min(1, 'El plazo mínimo es de 1 mes')
    .max(60, 'El plazo máximo es de 60 meses')
    .required('El plazo del préstamo es obligatorio'),
  purpose: Yup.string()
    .oneOf(
      ['personal', 'vivienda', 'negocio', 'educacion', 'vehiculo'],
      'Seleccione un propósito válido'
    )
    .required('El propósito del préstamo es obligatorio'),
});

export const LoanRequestForm: React.FC = () => {
  const navigate = useNavigate();
  const { submitRequest, isLoading, error } = useLoanRequests();
  const { addNotification } = useContext(LoanContext);

  const initialValues: Omit<LoanRequest, 'id' | 'status' | 'createdAt'> = {
    clientName: '',
    clientEmail: '',
    clientId: '',
    amount: 0,
    term: 12,
    purpose: 'personal',
  };

  const handleSubmit = async (
    values: Omit<LoanRequest, 'id' | 'status' | 'createdAt'>,
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      await submitRequest(values);
      addNotification({
        id: Date.now().toString(),
        type: 'success',
        message: 'Su solicitud de préstamo ha sido registrada exitosamente.',
        timestamp: new Date().toISOString(),
      });
      resetForm();
      navigate('/status');
    } catch (err) {
      addNotification({
        id: Date.now().toString(),
        type: 'error',
        message: error || 'Error al registrar la solicitud. Por favor intente nuevamente.',
        timestamp: new Date().toISOString(),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="loan-request-form-container">
      <h2>Registrar Solicitud de Préstamo</h2>
      <p className="form-description">
        Complete el formulario para solicitar un préstamo. Los campos marcados con * son obligatorios.
      </p>

      {error && (
        <div className="error-banner" role="alert">
          <span>{error}</span>
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="loan-form" noValidate>
            <div className="form-group">
              <label htmlFor="clientName">
                Nombre completo del cliente *
              </label>
              <Field
                type="text"
                id="clientName"
                name="clientName"
                className={`form-control ${errors.clientName && touched.clientName ? 'is-invalid' : ''}`}
                placeholder="Ingrese el nombre completo"
              />
              <ErrorMessage name="clientName" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="clientEmail">
                Correo electrónico *
              </label>
              <Field
                type="email"
                id="clientEmail"
                name="clientEmail"
                className={`form-control ${errors.clientEmail && touched.clientEmail ? 'is-invalid' : ''}`}
                placeholder="correo@ejemplo.com"
              />
              <ErrorMessage name="clientEmail" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="clientId">
                Número de identificación *
              </label>
              <Field
                type="text"
                id="clientId"
                name="clientId"
                className={`form-control ${errors.clientId && touched.clientId ? 'is-invalid' : ''}`}
                placeholder="Ingrese su número de identificación"
              />
              <ErrorMessage name="clientId" component="div" className="error-message" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="amount">
                  Monto solicitado (COP) *
                </label>
                <Field
                  type="number"
                  id="amount"
                  name="amount"
                  className={`form-control ${errors.amount && touched.amount ? 'is-invalid' : ''}`}
                  placeholder="Monto en pesos colombianos"
                />
                <ErrorMessage name="amount" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="term">
                  Plazo (meses) *
                </label>
                <Field
                  as="select"
                  id="term"
                  name="term"
                  className={`form-control ${errors.term && touched.term ? 'is-invalid' : ''}`}
                >
                  <option value="">Seleccione el plazo</option>
                  {[1, 3, 6, 12, 18, 24, 36, 48, 60].map((month) => (
                    <option key={month} value={month}>
                      {month} {month === 1 ? 'mes' : 'meses'}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="term" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="purpose">
                Propósito del préstamo *
              </label>
              <Field
                as="select"
                id="purpose"
                name="purpose"
                className={`form-control ${errors.purpose && touched.purpose ? 'is-invalid' : ''}`}
              >
                <option value="">Seleccione el propósito</option>
                <option value="personal">Personal</option>
                <option value="vivienda">Vivienda</option>
                <option value="negocio">Negocio</option>
                <option value="educacion">Educación</option>
                <option value="vehiculo">Vehículo</option>
              </Field>
              <ErrorMessage name="purpose" component="div" className="error-message" />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting || isLoading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate('/status')}
              >
                Ver Mis Solicitudes
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoanRequestForm;

// === ARCHIVO: src/pages/LoanStatus.tsx ===
import React, { useEffect, useState } from 'react';
import { useLoanRequests } from '../hooks/useLoanRequests';
import { LoanRequest, LoanStatus } from '../types/loan';
import { useContext } from 'react';
import { LoanContext } from '../context/LoanContext';

const statusLabels: Record<LoanStatus, string> = {
  pending: 'Pendiente',
  approved: 'Aprobado',
  rejected: 'Rechazado',
  review: 'En revisión',
};

const statusColors: Record<LoanStatus, string> = {
  pending: '#f59e0b',
  approved: '#10b981',
  rejected: '#ef4444',
  review: '#3b82f6',
};

const purposeLabels: Record<string, string> = {
  personal: 'Personal',
  vivienda: 'Vivienda',
  negocio: 'Negocio',
  educacion: 'Educación',
  vehiculo: 'Vehículo',
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const LoanStatus: React.FC = () => {
  const { requests, isLoading, error, fetchRequests } = useLoanRequests();
  const { addNotification } = useContext(LoanContext);
  const [filteredStatus, setFilteredStatus] = useState<LoanStatus | ''>('');

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  useEffect(() => {
    if (error) {
      addNotification({
        id: Date.now().toString(),
        type: 'error',
        message: error,
        timestamp: new Date().toISOString(),
      });
    }
  }, [error, addNotification]);

  const filteredRequests = filteredStatus
    ? requests.filter((req) => req.status === filteredStatus)
    : requests;

  const handleRetry = () => {
    fetchRequests();
  };

  if (isLoading && requests.length === 0) {
    return (
      <div className="loan-status-container">
        <h2>Estado de Mis Solicitudes</h2>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando sus solicitudes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="loan-status-container">
      <h2>Estado de Mis Solicitudes</h2>
      <p className="page-description">
        Aquí puede visualizar el estado de todas sus solicitudes de préstamo.
      </p>

      {error && (
        <div className="error-banner" role="alert">
          <div className="error-content">
            <span>{error}</span>
            <button onClick={handleRetry} className="btn-retry">
              Reintentar
            </button>
          </div>
        </div>
      )}

      <div className="filters">
        <label htmlFor="status-filter">Filtrar por estado:</label>
        <select
          id="status-filter"
          value={filteredStatus}
          onChange={(e) => setFilteredStatus(e.target.value as LoanStatus | '')}
          className="filter-select"
        >
          <option value="">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="review">En revisión</option>
          <option value="approved">Aprobado</option>
          <option value="rejected">Rechazado</option>
        </select>
      </div>

      {filteredRequests.length === 0 ? (
        <div className="empty-state">
          <p>No hay solicitudes que mostrar.</p>
          <p className="empty-hint">
            Si acaba de realizar una solicitud, puede que aún esté procesándose.
          </p>
        </div>
      ) : (
        <div className="requests-list">
          {filteredRequests.map((request: LoanRequest) => (
            <div key={request.id} className="request-card">
              <div className="request-header">
                <span className="request-id">#{request.id.slice(-8)}</span>
                <span
                  className="request-status"
                  style={{ backgroundColor: statusColors[request.status] }}
                >
                  {statusLabels[request.status]}
                </span>
              </div>

              <div className="request-details">
                <div className="detail-row">
                  <span className="detail-label">Cliente:</span>
                  <span className="detail-value">{request.clientName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Correo:</span>
                  <span className="detail-value">{request.clientEmail}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Monto:</span>
                  <span className="detail-value">{formatCurrency(request.amount)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Plazo:</span>
                  <span className="detail-value">{request.term} meses</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Propósito:</span>
                  <span className="detail-value">{purposeLabels[request.purpose] || request.purpose}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Fecha de solicitud:</span>
                  <span className="detail-value">{formatDate(request.createdAt)}</span>
                </div>
              </div>

              {request.status === 'approved' && (
                <div className="success-message">
                  <span>✓ Su préstamo ha sido aprobado. Nos contactaremos pronto.</span>
                </div>
              )}

              {request.status === 'rejected' && (
                <div className="rejection-message">
                  <span>✗ Su solicitud fue rechazada. Puede intentar nuevamente.</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {requests.length > 0 && (
        <div className="requests-summary">
          <p>
            Total de solicitudes: <strong>{requests.length}</strong>
            {filteredStatus && (
              <span> ({filteredRequests.length} mostrados)</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoanStatus;


// === ARCHIVO: src/context/LoanContext.tsx ===
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { LoanRequest, LoanStatus, Notification } from '../types/loan';

interface LoanState {
  requests: LoanRequest[];
  notifications: Notification[];
  loading: boolean;
  error: string | null;
}

type LoanAction =
  | { type: 'SET_REQUESTS'; payload: LoanRequest[] }
  | { type: 'ADD_REQUEST'; payload: LoanRequest }
  | { type: 'UPDATE_REQUEST'; payload: LoanRequest }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' };

const initialState: LoanState = {
  requests: [],
  notifications: [],
  loading: false,
  error: null,
};

function loanReducer(state: LoanState, action: LoanAction): LoanState {
  switch (action.type) {
    case 'SET_REQUESTS':
      return { ...state, requests: action.payload, loading: false };
    case 'ADD_REQUEST':
      return { ...state, requests: [...state.requests, action.payload] };
    case 'UPDATE_REQUEST':
      return {
        ...state,
        requests: state.requests.map((req) =>
          req.id === action.payload.id ? action.payload : req
        ),
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] };
    default:
      return state;
  }
}

interface LoanContextType {
  state: LoanState;
  dispatch: React.Dispatch<LoanAction>;
  addNotification: (message: string, type: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;
  addRequest: (request: LoanRequest) => void;
  updateRequestStatus: (id: string, status: LoanStatus) => void;
  getRequestsByStatus: (status: LoanStatus) => LoanRequest[];
}

const LoanContext = createContext<LoanContextType | undefined>(undefined);

export function LoanProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(loanReducer, initialState);

  const addNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const notification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
      timestamp: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
    }, 5000);
  };

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const addRequest = (request: LoanRequest) => {
    dispatch({ type: 'ADD_REQUEST', payload: request });
  };

  const updateRequestStatus = (id: string, status: LoanStatus) => {
    const request = state.requests.find((r) => r.id === id);
    if (request) {
      const updatedRequest = { ...request, status, updatedAt: new Date().toISOString() };
      dispatch({ type: 'UPDATE_REQUEST', payload: updatedRequest });

      if (status === 'approved') {
        addNotification('Tu solicitud de préstamo ha sido aprobada', 'success');
      } else if (status === 'rejected') {
        addNotification('Tu solicitud de préstamo ha sido rechazada', 'error');
      }
    }
  };

  const getRequestsByStatus = (status: LoanStatus): LoanRequest[] => {
    return state.requests.filter((request) => request.status === status);
  };

  return (
    <LoanContext.Provider
      value={{
        state,
        dispatch,
        addNotification,
        removeNotification,
        addRequest,
        updateRequestStatus,
        getRequestsByStatus,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
}

export function useLoanContext() {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error('useLoanContext debe usarse dentro de un LoanProvider');
  }
  return context;
}

// === ARCHIVO: src/components/NotificationSystem.tsx ===
import React from 'react';
import { useLoanContext } from '../context/LoanContext';
import './NotificationSystem.css';

interface NotificationItemProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
}

function NotificationItem({ id, message, type, onClose }: NotificationItemProps) {
  const getIconForType = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      default:
        return '•';
    }
  };

  return (
    <div className={`notification-item notification-${type}`}>
      <span className="notification-icon">{getIconForType()}</span>
      <span className="notification-message">{message}</span>
      <button
        className="notification-close"
        onClick={() => onClose(id)}
        aria-label="Cerrar notificación"
      >
        ×
      </button>
    </div>
  );
}

export default function NotificationSystem() {
  const { state, removeNotification } = useLoanContext();
  const { notifications } = state;

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={removeNotification}
        />
      ))}
    </div>
  );
}

// === ARCHIVO: src/hooks/useLoanRequests.ts ===
import { useCallback, useEffect } from 'react';
import { useLoanContext } from '../context/LoanContext';
import { LoanRequest, LoanStatus } from '../types/loan';
import { submitLoanRequest, fetchLoanRequests, updateLoanStatus } from '../services/api';

interface UseLoanRequestsReturn {
  requests: LoanRequest[];
  loading: boolean;
  error: string | null;
  createRequest: (data: Omit<LoanRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  loadRequests: () => Promise<void>;
  approveRequest: (id: string) => Promise<void>;
  rejectRequest: (id: string) => Promise<void>;
  getRequestById: (id: string) => LoanRequest | undefined;
  getRequestsByStatus: (status: LoanStatus) => LoanRequest[];
}

export function useLoanRequests(): UseLoanRequestsReturn {
  const { state, dispatch, addNotification, updateRequestStatus } = useLoanContext();
  const { requests, loading, error } = state;

  const createRequest = useCallback(
    async (data: Omit<LoanRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      try {
        const newRequest = await submitLoanRequest(data);
        dispatch({ type: 'ADD_REQUEST', payload: newRequest });
        addNotification('Solicitud de préstamo creada exitosamente', 'success');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al crear la solicitud';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        addNotification(errorMessage, 'error');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch, addNotification]
  );

  const loadRequests = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const data = await fetchLoanRequests();
      dispatch({ type: 'SET_REQUESTS', payload: data });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar las solicitudes';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      addNotification(errorMessage, 'error');
    }
  }, [dispatch, addNotification]);

  const approveRequest = useCallback(
    async (id: string) => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        await updateLoanStatus(id, 'approved');
        updateRequestStatus(id, 'approved');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al aprobar la solicitud';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        addNotification(errorMessage, 'error');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch, updateRequestStatus, addNotification]
  );

  const rejectRequest = useCallback(
    async (id: string) => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        await updateLoanStatus(id, 'rejected');
        updateRequestStatus(id, 'rejected');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al rechazar la solicitud';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        addNotification(errorMessage, 'error');
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    [dispatch, updateRequestStatus, addNotification]
  );

  const getRequestById = useCallback(
    (id: string): LoanRequest | undefined => {
      return requests.find((request) => request.id === id);
    },
    [requests]
  );

  const getRequestsByStatusFilter = useCallback(
    (status: LoanStatus): LoanRequest[] => {
      return requests.filter((request) => request.status === status);
    },
    [requests]
  );

  useEffect(() => {
    if (requests.length === 0) {
      loadRequests();
    }
  }, [loadRequests, requests.length]);

  return {
    requests,
    loading,
    error,
    createRequest,
    loadRequests,
    approveRequest,
    rejectRequest,
    getRequestById,
    getRequestsByStatus: getRequestsByStatusFilter,
  };
}


// === ARCHIVO: src/types/loan.d.ts ===
export type LoanStatus = 'pending' | 'approved' | 'rejected' | 'in_review';

export type ClientType = 'new' | 'existing';

export interface LoanRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientType: ClientType;
  amount: number;
  term: number;
  purpose: string;
  income: number;
  status: LoanStatus;
  createdAt: string;
  updatedAt: string;
  rejectionReason?: string;
}

export interface LoanRequestInput {
  clientName: string;
  clientEmail: string;
  clientType: ClientType;
  amount: number;
  term: number;
  purpose: string;
  income: number;
}

export interface LoanStatusResponse {
  requestId: string;
  status: LoanStatus;
  lastUpdated: string;
  statusHistory: StatusHistoryEntry[];
  nextSteps?: string;
}

export interface StatusHistoryEntry {
  status: LoanStatus;
  timestamp: string;
  description: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  requestId?: string;
}

export interface NotificationPayload {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  requestId?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface LoanFormData {
  clientName: string;
  clientEmail: string;
  clientType: ClientType;
  amount: string | number;
  term: string | number;
  purpose: string;
  income: string | number;
}

export interface LoanFilters {
  status?: LoanStatus;
  clientType?: ClientType;
  minAmount?: number;
  maxAmount?: number;
  startDate?: string;
  endDate?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface LoanStats {
  totalRequests: number;
  approvedCount: number;
  rejectedCount: number;
  pendingCount: number;
  averageAmount: number;
  averageTerm: number;
}
// === ARCHIVO: src/services/api.ts ===
import axios, { AxiosInstance, AxiosError } from 'axios';
import {
  LoanRequest,
  LoanRequestInput,
  LoanStatusResponse,
  Notification,
  NotificationPayload,
  ApiResponse,
  ApiError,
  PaginatedResponse,
  LoanStats,
  LoanStatus
} from '../types/loan';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const mockLoans: LoanRequest[] = [
  {
    id: 'LOAN-001',
    clientName: 'Juan Pérez',
    clientEmail: 'juan.perez@email.com',
    clientType: 'existing',
    amount: 15000,
    term: 24,
    purpose: 'home_improvement',
    income: 3500,
    status: 'approved',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-17T14:20:00Z'
  },
  {
    id: 'LOAN-002',
    clientName: 'María García',
    clientEmail: 'maria.garcia@email.com',
    clientType: 'new',
    amount: 8000,
    term: 12,
    purpose: 'debt_consolidation',
    income: 2800,
    status: 'pending',
    createdAt: '2024-02-01T09:15:00Z',
    updatedAt: '2024-02-01T09:15:00Z'
  },
  {
    id: 'LOAN-003',
    clientName: 'Carlos López',
    clientEmail: 'carlos.lopez@email.com',
    clientType: 'existing',
    amount: 25000,
    term: 36,
    purpose: 'business',
    income: 5200,
    status: 'rejected',
    createdAt: '2024-01-20T11:45:00Z',
    updatedAt: '2024-01-25T16:30:00Z',
    rejectionReason: 'Insufficient income to cover the requested loan amount'
  }
];

const mockNotifications: Notification[] = [
  {
    id: 'NOTIF-001',
    type: 'success',
    title: 'Solicitud Aprobada',
    message: 'Tu solicitud de préstamo por $15,000 ha sido aprobada.',
    timestamp: '2024-01-17T14:20:00Z',
    read: true,
    requestId: 'LOAN-001'
  },
  {
    id: 'NOTIF-002',
    type: 'warning',
    title: 'Revisión en Progreso',
    message: 'Tu solicitud está siendo revisada por nuestro equipo.',
    timestamp: '2024-02-01T09:15:00Z',
    read: false,
    requestId: 'LOAN-002'
  },
  {
    id: 'NOTIF-003',
    type: 'error',
    title: 'Solicitud Rechazada',
    message: 'Tu solicitud de préstamo no pudo ser aprobada en esta ocasión.',
    timestamp: '2024-01-25T16:30:00Z',
    read: true,
    requestId: 'LOAN-003'
  }
];

class ApiService {
  private client: AxiosInstance;
  private useMock: boolean;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.useMock = import.meta.env.VITE_USE_MOCK !== 'false';

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const apiError = this.transformError(error);
        return Promise.reject(apiError);
      }
    );
  }

  private transformError(error: AxiosError): ApiError {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          return {
            code: 'BAD_REQUEST',
            message: 'La solicitud contiene datos inválidos. Por favor, verifica los campos e intenta nuevamente.'
          };
        case 401:
          return {
            code: 'UNAUTHORIZED',
            message: 'No tienes autorización para realizar esta acción.'
          };
        case 404:
          return {
            code: 'NOT_FOUND',
            message: 'El recurso solicitado no fue encontrado.'
          };
        case 500:
          return {
            code: 'SERVER_ERROR',
            message: 'Ha ocurrido un error en el servidor. Por favor, intenta más tarde.'
          };
        default:
          return {
            code: 'UNKNOWN_ERROR',
            message: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.'
          };
      }
    } else if (error.request) {
      return {
        code: 'NETWORK_ERROR',
        message: 'No se pudo conectar con el servidor. Verifica tu conexión a internet.'
      };
    } else {
      return {
        code: 'CLIENT_ERROR',
        message: 'Error al procesar la solicitud. Por favor, intenta nuevamente.'
      };
    }
  }

  async createLoanRequest(input: LoanRequestInput): Promise<ApiResponse<LoanRequest>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const isApproved = input.income >= input.amount * 0.3;
      const newLoan: LoanRequest = {
        id: `LOAN-${String(mockLoans.length + 1).padStart(3, '0')}`,
        ...input,
        status: isApproved ? 'approved' : 'rejected',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        rejectionReason: isApproved ? undefined : 'Income does not meet minimum requirements'
      };
      
      mockLoans.push(newLoan);
      
      return {
        success: true,
        data: newLoan
      };
    }

    try {
      const response = await this.client.post<LoanRequest>('/loans', input);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getLoanStatus(requestId: string): Promise<ApiResponse<LoanStatusResponse>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const loan = mockLoans.find(l => l.id === requestId);
      
      if (!loan) {
        return {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: `No se encontró la solicitud con ID: ${requestId}`
          }
        };
      }

      const statusHistory = this.generateStatusHistory(loan);
      
      return {
        success: true,
        data: {
          requestId: loan.id,
          status: loan.status,
          lastUpdated: loan.updatedAt,
          statusHistory,
          nextSteps: this.getNextSteps(loan.status)
        }
      };
    }

    try {
      const response = await this.client.get<LoanStatusResponse>(`/loans/${requestId}/status`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getAllLoans(): Promise<ApiResponse<LoanRequest[]>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      return {
        success: true,
        data: mockLoans
      };
    }

    try {
      const response = await this.client.get<LoanRequest[]>('/loans');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getNotifications(): Promise<ApiResponse<Notification[]>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      return {
        success: true,
        data: mockNotifications
      };
    }

    try {
      const response = await this.client.get<Notification[]>('/notifications');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async createNotification(payload: NotificationPayload): Promise<ApiResponse<Notification>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const newNotification: Notification = {
        id: `NOTIF-${String(mockNotifications.length + 1).padStart(3, '0')}`,
        ...payload,
        timestamp: new Date().toISOString(),
        read: false
      };
      
      mockNotifications.push(newNotification);
      
      return {
        success: true,
        data: newNotification
      };
    }

    try {
      const response = await this.client.post<Notification>('/notifications', payload);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async markNotificationAsRead(notificationId: string): Promise<ApiResponse<boolean>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const notification = mockNotifications.find(n => n.id === notificationId);
      if (notification) {
        notification.read = true;
      }
      
      return {
        success: true,
        data: true
      };
    }

    try {
      await this.client.patch(`/notifications/${notificationId}/read`);
      return {
        success: true,
        data: true
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  async getLoanStats(): Promise<ApiResponse<LoanStats>> {
    if (this.useMock) {
      await this.simulateNetworkDelay();
      
      const totalRequests = mockLoans.length;
      const approvedCount = mockLoans.filter(l => l.status === 'approved').length;
      const rejectedCount = mockLoans.filter(l => l.status === 'rejected').length;
      const pendingCount = mockLoans.filter(l => l.status === 'pending').length;
      
      const totalAmount = mockLoans.reduce((sum, l) => sum + l.amount, 0);
      const totalTerm = mockLoans.reduce((sum, l) => sum + l.term, 0);
      
      return {
        success: true,
        data: {
          totalRequests,
          approvedCount,
          rejectedCount,
          pendingCount,
          averageAmount: totalRequests > 0 ? totalAmount / totalRequests : 0,
          averageTerm: totalRequests > 0 ? totalTerm / totalRequests : 0
        }
      };
    }

    try {
      const response = await this.client.get<LoanStats>('/loans/stats');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      const apiError = error as ApiError;
      return {
        success: false,
        error: apiError
      };
    }
  }

  private generateStatusHistory(loan: LoanRequest): Array<{ status: LoanStatus; timestamp: string; description: string }> {
    const history = [
      {
        status: 'pending' as LoanStatus,
        timestamp: loan.createdAt,
        description: 'Solicitud recibida y en espera de revisión'
      }
    ];

    if (loan.status === 'in_review' || loan.status === 'approved' || loan.status === 'rejected') {
      history.push({
        status: 'in_review' as LoanStatus,
        timestamp: new Date(new Date(loan.createdAt).getTime() + 86400000).toISOString(),
        description: 'Solicitud en revisión por el equipo de riesgos'
      });
    }

    if (loan.status === 'approved') {
      history.push({
        status: 'approved' as LoanStatus,
        timestamp: loan.updatedAt,
        description: 'Solicitud aprobada'
      });
    } else if (loan.status === 'rejected') {
      history.push({
        status: 'rejected' as LoanStatus,
        timestamp: loan.updatedAt,
        description: loan.rejectionReason || 'Solicitud rechazada'
      });
    }

    return history;
  }

  private getNextSteps(status: LoanStatus): string | undefined {
    switch (status) {
      case 'pending':
        return ' nuestro equipo revisará tu solicitud en un plazo de 24-48 horas hábiles.';
      case 'approved':
        return ' recibirás los fondos en tu cuenta en un plazo de 2-3 días hábiles.';
      case 'rejected':
        return ' puedes presentar una nueva solicitud después de 30 días o contactar soporte para más información.';
      case 'in_review':
        return ' por favor ten paciencia mientras nuestro equipo completa la revisión.';
      default:
        return undefined;
    }
  }

  private async simulateNetworkDelay(): Promise<void> {
    const delay = Math.random() * 500 + 200;
    return new Promise(resolve => setTimeout(resolve, delay));
  }
}

export const apiService = new ApiService();
export default apiService;
// === ARCHIVO: src/utils/validators.ts ===
import * as Yup from 'yup';

const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s'-]+$/;

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  if (!phone || phone.trim() === '') {
    return true;
  }
  return PHONE_REGEX.test(phone);
};

export const validateName = (name: string): boolean => {
  if (!name || name.trim() === '') {
    return false;
  }
  return NAME_REGEX.test(name) && name.trim().length >= 2;
};

export const validateAmount = (amount: number): { valid: boolean; message?: string } => {
  if (typeof amount === 'string') {
    const parsed = parseFloat(amount);
    if (isNaN(parsed)) {
      return { valid: false, message: 'El monto debe ser un número válido' };
    }
    amount = parsed;
  }

  if (amount < 1000) {
    return { valid: false, message: 'El monto mínimo es de $1,000' };
  }

  if (amount > 100000) {
    return { valid: false, message: 'El monto máximo es de $100,000' };
  }

  return { valid: true };
};

export const validateTerm = (term: number): { valid: boolean; message?: string } => {
  if (typeof term === 'string') {
    const parsed = parseInt(term, 10);
    if (isNaN(parsed)) {
      return { valid: false, message: 'El plazo debe ser un número válido' };
    }
    term = parsed;
  }

  if (term < 3) {
    return { valid: false, message: 'El plazo mínimo es de 3 meses' };
  }

  if (term > 60) {
    return { valid: false, message: 'El plazo máximo es de 60 meses' };
  }

  return { valid: true };
};

export const validateIncome = (income: number, amount: number): { valid: boolean; message?: string } => {
  if (typeof income === 'string') {
    const parsed = parseFloat(income);
    if (isNaN(parsed)) {
      return { valid: false, message: 'El ingreso debe ser un número válido' };
    }
    income = parsed;
  }

  if (income < 0) {
    return { valid: false, message: 'El ingreso no puede ser negativo' };
  }

  if (income < 1000) {
    return { valid: false, message: 'El ingreso mínimo debe ser de $1,000' };
  }

  const monthlyPayment = calculateMonthlyPayment(amount, 24, 0.15);
  const incomeToPaymentRatio = monthlyPayment / income;

  if (incomeToPaymentRatio > 0.4) {
    return {
      valid: false,
      message: 'La cuota mensual no puede exceder el 40% de tus ingresos mensuales'
    };
  }

  return { valid: true };
};

export const calculateMonthlyPayment = (principal: number, term: number, annualRate: number): number => {
  const monthlyRate = annualRate / 12;
  const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
    (Math.pow(1 + monthlyRate, term) - 1);
  return Math.round(payment * 100) / 100;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const getLoanRequestSchema = () => {
  return Yup.object().shape({
    clientName: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(100, 'El nombre no puede exceder 100 caracteres')
      .matches(NAME_REGEX, 'El nombre solo puede contener letras, espacios y guiones')
      .required('El nombre es obligatorio'),

    clientEmail: Yup.string()
      .email('Ingresa un correo electrónico válido')
      .required('El correo electrónico es obligatorio'),

    clientType: Yup.string()
      .oneOf(['new', 'existing'], 'Selecciona un tipo de cliente válido')
      .required('Selecciona el tipo de cliente'),

    amount: Yup.number()
      .typeError('El monto debe ser un número válido')
      .min(1000, 'El monto mínimo es de $1,000')
      .max(100000, 'El monto máximo es de $100,000')
      .required('El monto del préstamo es obligatorio'),

    term: Yup.number()
      .typeError('El plazo debe ser un número válido')
      .min(3, 'El plazo mínimo es de 3 meses')
      .max(60, 'El plazo máximo es de 60 meses')
      .required('El plazo del préstamo es obligatorio'),

    purpose: Yup.string()
      .oneOf(
        ['home_improvement', 'debt_consolidation', 'business', 'education', 'vehicle', 'other'],
        'Selecciona un propósito válido'
      )
      .required('Selecciona el propósito del préstamo'),

    income: Yup.number()
      .typeError('El ingreso debe ser un número válido')
      .min(1000, 'El ingreso mínimo debe ser de $1,000')
      .required('Los ingresos mensuales son obligatorios')
      .test(
        'income-ratio',
        'La cuota mensual no puede exceder el 40% de tus ingresos',
        function (income) {
          const amount = this.parent.amount;
          if (!income || !amount) return true;
          const monthlyPayment = calculateMonthlyPayment(amount, 24, 0.15);
          return (monthlyPayment / income) <= 0.4;
        }
      )
  });
};

export const getLoanStatusSchema = () => {
  return Yup.object().shape({
    requestId: Yup.string()
      .matches(/^LOAN-\d{3}$/, 'El ID debe tener el formato LOAN-XXX')
      .required('El ID de solicitud es obligatorio')
  });
};

export const validateLoanRequest = async (data: {
  clientName: string;
  clientEmail: string;
  clientType: string;
  amount: number;
  term: number;
  purpose: string;
  income: number;
}): Promise<{ isValid: boolean; errors: Record<string, string> }> => {
  const schema = getLoanRequestSchema();

  try {
    await schema.validate(data, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errors: Record<string, string> = {};
      error.inner.forEach((err) => {
        if (err.path) {
          errors[err.path] = err.message;
        }
      });
      return { isValid: false, errors };
    }
    return {
      isValid: false,
      errors: { _form: 'Error de validación desconocido' }
    };
  }
};

export const PURPOSE_LABELS: Record<string, string> = {
  home_improvement: 'Mejora del hogar',
  debt_consolidation: 'Consolidación de deudas',
  business: 'Negocio',
  education: 'Educación',
  vehicle: 'Vehículo',
  other: 'Otro'
};

export const STATUS_LABELS: Record<string, string> = {
  pending: 'Pendiente',
  in_review: 'En revisión',
  approved: 'Aprobado',
  rejected: 'Rechazado'
};

export const STATUS_COLORS: Record<string, string> = {
  pending: '#f59e0b',
  in_review: '#3b82f6',
  approved: '#10b981',
  rejected: '#ef4444'
};


// === ARCHIVO: src/styles/global.css ===
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-primary-light: #3b82f6;
  --color-secondary: #64748b;
  --color-secondary-dark: #475569;
  --color-success: #22c55e;
  --color-success-light: #4ade80;
  --color-error: #ef4444;
  --color-error-light: #f87171;
  --color-warning: #f59e0b;
  --color-warning-light: #fbbf24;
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-hover: #f1f5f9;
  --color-border: #e2e8f0;
  --color-border-focus: #2563eb;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #ffffff;
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --border-radius-sm: 0.25rem;
  --border-radius: 0.375rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  --border-radius-xl: 1rem;
  --border-radius-full: 9999px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-4);
}

h1 {
  font-size: var(--font-size-4xl);
}

h2 {
  font-size: var(--font-size-3xl);
}

h3 {
  font-size: var(--font-size-2xl);
}

h4 {
  font-size: var(--font-size-xl);
}

h5 {
  font-size: var(--font-size-lg);
}

h6 {
  font-size: var(--font-size-base);
}

p {
  margin-bottom: var(--spacing-4);
  line-height: var(--line-height-relaxed);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

a:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--border-radius-sm);
}

a:active {
  color: var(--color-primary-dark);
}

ul, ol {
  margin-bottom: var(--spacing-4);
  padding-left: var(--spacing-6);
}

li {
  margin-bottom: var(--spacing-2);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-4);
}

th, td {
  padding: var(--spacing-3) var(--spacing-4);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

th {
  font-weight: var(--font-weight-semibold);
  background-color: var(--color-surface-hover);
}

tr:hover {
  background-color: var(--color-surface-hover);
}

.form-group {
  margin-bottom: var(--spacing-5);
}

.form-label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-muted);
}

.form-input:disabled,
.form-select:disabled,
.form-textarea:disabled {
  background-color: var(--color-surface-hover);
  cursor: not-allowed;
  opacity: 0.7;
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: var(--color-error);
}

.form-input.error:focus,
.form-select.error:focus,
.form-textarea.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-error {
  font-size: var(--font-size-sm);
  color: var(--color-error);
  margin-top: var(--spacing-1);
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.form-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-top: var(--spacing-1);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  border: 1px solid transparent;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4);
}

.btn-secondary {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-surface-hover);
}

.btn-secondary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(100, 116, 139, 0.2);
}

.btn-success {
  background-color: var(--color-success);
  color: var(--color-text-inverse);
}

.btn-success:hover:not(:disabled) {
  background-color: #16a34a;
}

.btn-danger {
  background-color: var(--color-error);
  color: var(--color-text-inverse);
}

.btn-danger:hover:not(:disabled) {
  background-color: #dc2626;
}

.btn-sm {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
}

.btn-lg {
  padding: var(--spacing-4) var(--spacing-8);
  font-size: var(--font-size-lg);
}

.btn-full {
  width: 100%;
}

.card {
  background-color: var(--color-surface);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.card-header {
  padding-bottom: var(--spacing-4);
  margin-bottom: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 0;
}

.card-body {
  padding: 0;
}

.card-footer {
  padding-top: var(--spacing-4);
  margin-top: var(--spacing-4);
  border-top: 1px solid var(--color-border);
}

.alert {
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-4);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
}

.alert-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-1);
}

.alert-message {
  font-size: var(--font-size-sm);
  margin-bottom: 0;
}

.alert-success {
  background-color: #f0fdf4;
  border: 1px solid var(--color-success-light);
  color: #166534;
}

.alert-error {
  background-color: #fef2f2;
  border: 1px solid var(--color-error-light);
  color: #991b1b;
}

.alert-warning {
  background-color: #fffbeb;
  border: 1px solid var(--color-warning-light);
  color: #92400e;
}

.alert-info {
  background-color: #eff6ff;
  border: 1px solid var(--color-primary-light);
  color: #1e40af;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  border-radius: var(--border-radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-pending {
  background-color: #fef3c7;
  color: #92400e;
}

.badge-approved {
  background-color: #dcfce7;
  color: #166534;
}

.badge-rejected {
  background-color: #fee2e2;
  color: #991b1b;
}

.badge-processing {
  background-color: #dbeafe;
  color: #1e40af;
}

.loader {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  min-height: 200px;
}

.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-modal);
}

.notification-container {
  position: fixed;
  top: var(--spacing-4);
  right: var(--spacing-4);
  z-index: var(--z-index-tooltip);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  max-width: 400px;
}

.notification {
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification-success {
  background-color: var(--color-success);
  color: var(--color-text-inverse);
}

.notification-error {
  background-color: var(--color-error);
  color: var(--color-text-inverse);
}

.notification-warning {
  background-color: var(--color-warning);
  color: var(--color-text-primary);
}

.notification-info {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

.page-header {
  margin-bottom: var(--spacing-8);
  padding-bottom: var(--spacing-6);
  border-bottom: 1px solid var(--color-border);
}

.page-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: 0;
}

.status-pending {
  color: var(--color-warning);
}

.status-approved {
  color: var(--color-success);
}

.status-rejected {
  color: var(--color-error);
}

.status-processing {
  color: var(--color-primary);
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-muted {
  color: var(--color-text-muted);
}

.text-success {
  color: var(--color-success);
}

.text-error {
  color: var(--color-error);
}

.text-warning {
  color: var(--color-warning);
}

.mt-1 { margin-top: var(--spacing-1); }
.mt-2 { margin-top: var(--spacing-2); }
.mt-3 { margin-top: var(--spacing-3); }
.mt-4 { margin-top: var(--spacing-4); }
.mt-6 { margin-top: var(--spacing-6); }
.mt-8 { margin-top: var(--spacing-8); }

.mb-1 { margin-bottom: var(--spacing-1); }
.mb-2 { margin-bottom: var(--spacing-2); }
.mb-3 { margin-bottom: var(--spacing-3); }
.mb-4 { margin-bottom: var(--spacing-4); }
.mb-6 { margin-bottom: var(--spacing-6); }
.mb-8 { margin-bottom: var(--spacing-8); }

.ml-auto { margin-left: auto; }
.mr-auto { margin-right: auto; }

.d-flex { display: flex; }
.d-block { display: block; }
.d-none { display: none; }
.d-inline-flex { display: inline-flex; }

.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.flex-1 { flex: 1; }

.align-items-center { align-items: center; }
.align-items-start { align-items: flex-start; }
.align-items-end { align-items: flex-end; }
.justify-content-center { justify-content: center; }
.justify-content-between { justify-content: space-between; }
.justify-content-end { justify-content: flex-end; }

.gap-1 { gap: var(--spacing-1); }
.gap-2 { gap: var(--spacing-2); }
.gap-3 { gap: var(--spacing-3); }
.gap-4 { gap: var(--spacing-4); }
.gap-6 { gap: var(--spacing-6); }

.w-100 { width: 100%; }
.h-100 { height: 100%; }

@media (max-width: 640px) {
  .container {
    padding: 0 var(--spacing-3);
  }

  h1 {
    font-size: var(--font-size-3xl);
  }

  h2 {
    font-size: var(--font-size-2xl);
  }

  .card {
    padding: var(--spacing-4);
    border-radius: var(--border-radius-md);
  }

  .btn {
    padding: var(--spacing-3) var(--spacing-4);
  }

  .notification-container {
    top: var(--spacing-2);
    right: var(--spacing-2);
    left: var(--spacing-2);
    max-width: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0f172a;
    --color-surface: #1e293b;
    --color-surface-hover: #334155;
    --color-border: #334155;
    --color-text-primary: #f1f5f9;
    --color-text-secondary: #cbd5e1;
    --color-text-muted: #64748b;
  }

  .alert-success {
    background-color: #052e16;
    border-color: #14532d;
    color: #dcfce7;
  }

  .alert-error {
    background-color: #450a0a;
    border-color: #7f1d1d;
    color: #fee2e2;
  }

  .alert-warning {
    background-color: #451a03;
    border-color: #78350f;
    color: #fef3c7;
  }

  .alert-info {
    background-color: #172554;
    border-color: #1e3a8a;
    color: #dbeafe;
  }

  th {
    background-color: var(--color-surface-hover);
  }

  tr:hover {
    background-color: var(--color-surface-hover);
  }

  .spinner-overlay {
    background-color: rgba(15, 23, 42, 0.8);
  }
}

```
