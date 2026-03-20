import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}) {
  const subject = data.subject || `Nová správa z webu - ${data.name}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    replyTo: data.email,
    subject,
    html: `
      <h2>Nová správa z kontaktného formulára</h2>
      <p><strong>Meno:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefón:</strong> ${data.phone || "Neuvedené"}</p>
      <hr>
      <p><strong>Správa:</strong></p>
      <p>${data.message}</p>
    `,
  });
}

export async function sendInquiryEmail(data: {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  message?: string;
  cartItems: Array<{
    model: string;
    variant: number;
    doorType: string;
    quantity: number;
    configuration: Record<string, unknown>;
  }>;
}) {
  const itemsSummary = data.cartItems
    .map(
      (item, i) => `
      <h3>Položka ${i + 1}: ${item.model} - Variant ${item.variant}</h3>
      <p><strong>Typ:</strong> ${item.doorType}</p>
      <p><strong>Množstvo:</strong> ${item.quantity}</p>
      <p><strong>Rozmery:</strong> ${(item.configuration.height as string) || "N/A"} × ${(item.configuration.width as string) || "N/A"} × ${(item.configuration.thickness as string) || "N/A"}</p>
      <p><strong>Laminát:</strong> ${(item.configuration.laminate as string) || "N/A"}</p>
      <p><strong>Konštrukcia:</strong> ${(item.configuration.construction as string) || "N/A"}</p>
      <p><strong>Sklo:</strong> ${(item.configuration.glass as string) || "N/A"}</p>
      <p><strong>Otváranie:</strong> ${(item.configuration.opening as string) || "N/A"}</p>
      <p><strong>Rám:</strong> ${(item.configuration.frame as string) || "N/A"}</p>
      <p><strong>Zámok:</strong> ${(item.configuration.lock as string) || "N/A"}</p>
      <p><strong>Montáž:</strong> ${(item.configuration.assembly as string) || "N/A"}</p>
      ${(item.configuration.notes as string) ? `<p><strong>Poznámky:</strong> ${item.configuration.notes}</p>` : ""}
      <hr>
    `
    )
    .join("");

  const firstItem = data.cartItems[0];
  const subject = `Nový dopyt z PMP-Produkt konfigurátor dverí - ${firstItem?.model || ""}${firstItem?.variant || ""}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    replyTo: data.email,
    subject,
    html: `
      <h2>Nový dopyt z konfigurátora dverí</h2>
      <h3>Kontaktné údaje</h3>
      <p><strong>Meno:</strong> ${data.firstName} ${data.lastName}</p>
      ${data.company ? `<p><strong>Firma:</strong> ${data.company}</p>` : ""}
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefón:</strong> ${data.phone}</p>
      <p><strong>Adresa:</strong> ${data.address}, ${data.zipCode} ${data.city}</p>
      ${data.message ? `<p><strong>Poznámky:</strong> ${data.message}</p>` : ""}
      <hr>
      <h2>Objednané položky (${data.cartItems.length})</h2>
      ${itemsSummary}
    `,
  });
}
