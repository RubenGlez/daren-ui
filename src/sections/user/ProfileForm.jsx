import React, { useState } from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/Button';
import { validateField } from '../../utils/validationUtils';

const ProfileForm = props => {
  const [user, setUser] = useState(props.user);
  const [errors, setErrors] = useState({});

  const validate = (value, fieldId) => {
    if (fieldId === 'firstName' || fieldId === 'lastName') {
      setErrors({
        ...errors,
        [fieldId]: validateField(value, ['isEmpty']),
      });
    } else if (fieldId === 'phone') {
      setErrors({
        ...errors,
        [fieldId]: validateField(value, ['isEmpty', 'isNumeric']),
      });
    }
  };

  const _onChange = (e, value, fieldId) => {
    validate(value, fieldId);
    setUser({
      ...user,
      [fieldId]: value,
    });
  };

  return (
    <div className="dui-profile-form">
      <h2 className="dui-profile-form-title">Perfil</h2>

      <div className="dui-profile-form-section">
        <h3 className="dui-profile-form-section-title">Datos personales</h3>
        <div className="dui-profile-form-section-content">
          <Input
            fieldId={'firstName'}
            label={'Nombre'}
            value={user.firstName}
            error={errors.firstName}
            onChange={_onChange}
          />
          <Input
            fieldId={'lastName'}
            label={'Apellidos'}
            value={user.lastName}
            error={errors.lastName}
            onChange={_onChange}
          />
          <Input
            fieldId={'phone'}
            label={'Teléfono'}
            value={user.phone}
            error={errors.phone}
            onChange={_onChange}
          />
        </div>
      </div>

      <div className="dui-profile-form-section">
        <h3 className="dui-profile-form-section-title">Dirección</h3>
        <div className="dui-profile-form-section-content">
          <Input
            fieldId={'address'}
            label={'Dirección'}
            value={user.address}
            error={errors.address}
            onChange={_onChange}
          />
          <Input
            fieldId={'zipCode'}
            label={'Código Postal'}
            value={user.zipCode}
            error={errors.zipCode}
            onChange={_onChange}
          />
          <Input
            fieldId={'town'}
            label={'Localidad'}
            value={user.town}
            error={errors.town}
            onChange={_onChange}
          />
          <Input
            fieldId={'province'}
            label={'Provincia'}
            value={user.province}
            error={errors.province}
            onChange={_onChange}
          />
        </div>
      </div>

      <div className="dui-profile-form-footer">
        <Button
          text={'Guardar'}
          onClick={() => {
            props.updateUser(props.userId, user);
          }}
        />
      </div>
    </div>
  );
};

ProfileForm.defaultProps = {
  userId: null,
  user: {},
  updateUser: () => {},
};

export default ProfileForm;
