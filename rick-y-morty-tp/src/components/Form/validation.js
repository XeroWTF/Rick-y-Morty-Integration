export default (data) => {
    const { email, password } = data;
    const errors = {};
  
    // Expresión regular para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Expresión regular para validar el formato de la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    // Validar el campo de email
    if (!emailRegex.test(email)) {
      errors.email = 'El email no es válido';
    }
  
    // Validar el campo de contraseña
    if (!passwordRegex.test(password)) {
      errors.password =
        'La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un dígito';
    }
  
    return errors;
  };
  