document.getElementById('generate-email').addEventListener('click', () => {
    fetch('https://tempmail-ruddy.vercel.app/generate-email')
        .then(response => response.json())
        .then(data => {
            const email = data.email;
            document.getElementById('email-address').textContent = email;
            checkEmail(email);
        });
});

function checkEmail(email) {
    setInterval(() => {
        fetch(`https://tempmail-ruddy.vercel.app/get-email/${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.email) {
                    document.getElementById('email-content').textContent = JSON.stringify(data.data);
                }
            })
            .catch(() => {
                document.getElementById('email-content').textContent = 'El correo ha expirado o no se encontró.';
            });
    }, 60000); // Revisa cada minuto
}
