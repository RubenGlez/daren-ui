import React from 'react';
import Input from './Input';
import moment from 'moment';


const InputDate = props => {
  const formatValue = inputValue => {
    const numericDate = inputValue.replace(/[^\w\s]/gi, '');
    if (numericDate.length === 6) return moment(numericDate, 'DDMMYY').isValid() ? moment(numericDate, 'DDMMYY').format('DD/MM/YYYY') : inputValue;
    return moment(numericDate, 'DDMMYYYY').isValid() ? moment(numericDate, 'DDMMYYYY').format('DD/MM/YYYY') : inputValue;
  };

  return (
    <Input
      {...props}
      iconRight={'calendar'}
      onBlur={(e, value, fieldId) => {
        const formattedValue = formatValue(value);
        props.onBlur(e, formattedValue, fieldId);
      }}
    />
  );
};

InputDate.defaultProps = {
  fieldId: '',
  placeholder: 'dd/mm/aaaa',
  label: '',
  value: '',
  onBlur: () => {},
};

export default InputDate;
