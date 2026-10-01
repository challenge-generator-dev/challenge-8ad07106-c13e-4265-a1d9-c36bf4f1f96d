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