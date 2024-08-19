document.getElementById('generate-email').addEventListener('click', () => {
    const email = generateTempEmail();
    document.getElementById('email-address').textContent = email;
    // Aquí podrías agregar lógica para mostrar correos recibidos
});

function generateTempEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}@tempmail.com`;
}
