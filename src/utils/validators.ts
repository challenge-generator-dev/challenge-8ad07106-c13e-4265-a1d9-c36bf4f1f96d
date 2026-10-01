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