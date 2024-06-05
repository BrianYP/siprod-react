import React, { useState } from 'react';
import './Register.css'

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
      setMensajeError('Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes enviar los datos del formulario a tu backend para procesar el registro
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Correo:', correo);
    console.log('Fecha de nacimiento:', fechaNacimiento);
    console.log('Contraseña:', contrasena);

    // Resetear los campos del formulario después del registro exitoso
    setNombre('');
    setApellidos('');
    setCorreo('');
    setFechaNacimiento('');
    setContrasena('');
    setConfirmarContrasena('');
    setMensajeError('');
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      {mensajeError && <p className="error-message">{mensajeError}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
