function ActualizarReloj() {
    const now = new Date();
    let hora = now.getHours();
    const ampm = hora >= 12 ? 'PM' : 'AM';
    hora = hora % 12 || 12;  // Convertir a formato de 12 horas
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const tiempo_string = `${hora}:${minutos} ${ampm}`;

    document.getElementById('reloj').textContent = tiempo_string;
}

// Actualizar el reloj cada segundo
setInterval(ActualizarReloj, 1000);

// Inicializar el reloj
ActualizarReloj();