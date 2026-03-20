import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate request
    if (!data.email && !data.inquiry) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.smtp2go.com',
      port: Number(process.env.SMTP_PORT) || 2525,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER || process.env.SMTP2GO_SENDER,
        pass: process.env.SMTP_PASS || process.env.SMTP2GO_API_KEY,
      },
    });

    const to = process.env.CONTACT_FORM_RECIPIENT || process.env.EMAIL_TO || 'pmpprodukt@gmail.com';
    const from = process.env.SMTP2GO_SENDER || process.env.EMAIL_FROM || 'web@dvereastolarstvo.sk';

    let subject = 'Nová správa z webu dvereastolarstvo.sk';
    let htmlContent = '';

    if (data.type === 'inquiry') {
      // Configuration inquiry
      subject = `Nový dopyt od: ${data.firstName} ${data.lastName}`;
      htmlContent = `
        <h2>Nový dopyt z konfigurátora</h2>
        <p><strong>Meno:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefón:</strong> ${data.phone}</p>
        <p><strong>Adresa:</strong> ${data.street}, ${data.zipCode} ${data.city}</p>
        ${data.company ? `<p><strong>Firma:</strong> ${data.company}</p>` : ''}
        ${data.message ? `<p><strong>Poznámka:</strong> ${data.message}</p>` : ''}
        
        <hr />
        <h3>Položky dopytu:</h3>
        <ul>
          ${data.items.map((item: any) => `
            <li>
              <strong>${item.configuration.doorType === 'ramove' ? 'Rámové dvere' : 'Sendvičové dvere'}</strong> - 
              Model ${item.configuration.modelId} (v${item.configuration.variantIndex})<br />
              Dekor: ${item.configuration.colorName}<br />
              Rozmer: ${item.configuration.width}x${item.configuration.height}x${item.configuration.thickness} cm<br />
              Zárubeň: ${item.configuration.frameType === 'falcove' ? 'Falcová' : 'Bezfalcová'}<br />
              Zámok: ${item.configuration.lockType}<br />
              Montáž: ${item.configuration.assembly ? 'ÁNO' : 'NIE'}<br />
              Množstvo: ${item.quantity} ks
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      // Simple contact form
      subject = `Nová správa od: ${data.name}`;
      htmlContent = `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefón:</strong> ${data.phone}</p>` : ''}
        <p><strong>Správa:</strong></p>
        <p>${data.message}</p>
      `;
    }

    await transporter.sendMail({
      from: `"${data.name || 'Webový formulár'}" <${from}>`,
      to,
      replyTo: data.email,
      subject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
