
// ============================================
// HABLEMOS DE SUICIDIO - GRUPOS DE APOYO MUTUO
// CESFAM PEÑAFLOR
// ============================================

// Datos de contacto institucionales
const WHATSAPP_NUMBER = "56946683522";
const CONTACT_EMAIL = "gamhablemosdesuicidio@gmail.com";

// Mensaje inicial de WhatsApp
const WHATSAPP_MESSAGE =
  "Hola, quisiera recibir información sobre el proyecto Hablemos de Suicidio y los Grupos de Apoyo Mutuo (GAM) del CESFAM Peñaflor.";


// ============================================
// BOTÓN DE WHATSAPP
// ============================================

const whatsappButton = document.getElementById("whatsapp-link");

if (whatsappButton) {
  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  whatsappButton.href = whatsappURL;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener noreferrer";
}


// ============================================
// BOTÓN DE CORREO ELECTRÓNICO
// ============================================

const emailButton = document.getElementById("email-link");

if (emailButton) {
  const subject = "Consulta sobre Hablemos de Suicidio - GAM";

  const body =
    "Hola, quisiera recibir más información sobre el proyecto Hablemos de Suicidio y los Grupos de Apoyo Mutuo (GAM) del CESFAM Peñaflor.";

  emailButton.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

