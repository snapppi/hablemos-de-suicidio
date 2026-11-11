
// ============================================
// HABLEMOS DE SUICIDIO - GRUPOS DE APOYO MUTUO
// CESFAM PEÑAFLOR
// ============================================

// Datos de contacto institucionales
const WHATSAPP_NUMBER = "56946683522";
const CONTACT_EMAIL = "gamhablemosdesuicidio@gmail.com";

// Mensaje inicial de WhatsApp
const WHATSAPP_MESSAGE =
  "¡Hola! Me interesa participar en los Grupos de Apoyo Mutuo del CESFAM Peñaflor. ¿Me podrían entregar más información?";


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
  const subject = "Información sobre los Grupos de Apoyo Mutuo";

  const body =
    "¡Hola!\n\n" +
    "Me interesa participar en los Grupos de Apoyo Mutuo del CESFAM Peñaflor. ¿Me podrían entregar más información? \n\n" +
    "¡Muchas gracias!";

  emailButton.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

