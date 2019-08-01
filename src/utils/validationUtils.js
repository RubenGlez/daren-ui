export const isEmpty = value => {
  return (value === undefined || value === null || value === '');
};

export const isNumeric = value => {
  return /^[\d ]+$/.test(value);
};

export const validateField = (value, validations) => {
  let error;

  validations.forEach(validation => {
    switch (validation) {
    case 'isEmpty':
      error = isEmpty(value) ? 'Este campo no puede estar vacio' : null;
      break;
    case 'isNumeric':
      error = isNumeric(value) ? null : 'Este campo no puede contener letras';
      break;
    default:
    }
  });

  return error;
};
