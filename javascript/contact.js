document.addEventListener("DOMContentLoaded", () => {

    // Inicializar EmailJS
    emailjs.init("Z0MaKiiwmQhmxBkKF");

    const form = document.getElementById("form");
    const status = document.getElementById("status");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        status.innerText = "Enviando mensaje...";

        emailjs.sendForm("service_r04huic", "template_yq7vop8", this)
            .then(() => {
                status.innerText = "Mensaje enviado correctamente ✅";
                form.reset();
            })
            .catch(() => {
                status.innerText = "Error al enviar el mensaje ❌";
            });
    });

});