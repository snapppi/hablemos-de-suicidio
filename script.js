
// ============================================
// HABLEMOS DE SUICIDIO - GRUPOS DE APOYO MUTUO
// CESFAM PEÑAFLOR
// ============================================

// Datos de contacto institucionales
const WHATSAPP_NUMBER = "56946683522";
const CONTACT_EMAIL = "gamhablemosdesuicidio@gmail.com";

// Mensaje inicial para WhatsApp
const WHATSAPP_MESSAGE =
  "Hola, quisiera recibir información sobre el proyecto Hablemos de Suicidio y los Grupos de Apoyo Mutuo (GAM) del CESFAM Peñaflor.";


// ============================================
// CONFIGURACIÓN DEL BOTÓN DE WHATSAPP
// ============================================

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  whatsappButton.href = whatsappUrl;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener noreferrer";
}


// ============================================
// CONFIGURACIÓN DEL BOTÓN DE CORREO
// ============================================

const emailButton = document.getElementById("emailButton");

if (emailButton) {
  const emailSubject =
    "Consulta sobre Hablemos de Suicidio – GAM";

  const emailBody =
    "Hola, quisiera recibir más información sobre el proyecto Hablemos de Suicidio y los Grupos de Apoyo Mutuo (GAM) del CESFAM Peñaflor.";

  emailButton.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}
