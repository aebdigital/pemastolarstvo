exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body);

    if (!data.email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) };
    }

    const sender = process.env.SMTP2GO_SENDER;
    const apiKey = process.env.SMTP2GO_API_KEY;
    const recipient = process.env.CONTACT_FORM_RECIPIENT;

    if (!sender || !apiKey || !recipient) {
      console.error('Missing SMTP2GO env vars');
      return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error' }) };
    }

    let subject = '';
    let htmlBody = '';

    if (data.type === 'inquiry') {
      subject = `Nový dopyt od: ${data.firstName} ${data.lastName}`;
      htmlBody = `
        <h2>Nový dopyt z konfigurátora dverí</h2>
        <p><strong>Meno:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefón:</strong> ${data.phone}</p>
        <p><strong>Adresa:</strong> ${data.address}, ${data.zipCode} ${data.city}</p>
        ${data.company ? `<p><strong>Firma:</strong> ${data.company}</p>` : ''}
        ${data.message ? `<p><strong>Poznámka:</strong> ${data.message}</p>` : ''}
        <hr />
        <h3>Položky dopytu:</h3>
        <ul>
          ${data.items.map((item) => `
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
      subject = `Nová správa od: ${data.name}`;
      htmlBody = `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefón:</strong> ${data.phone}</p>` : ''}
        <p><strong>Správa:</strong></p>
        <p>${data.message}</p>
      `;
    }

    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        to: [recipient],
        sender: sender,
        subject: subject,
        html_body: htmlBody,
        custom_headers: [
          { header: 'Reply-To', value: data.email }
        ],
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.data || result.data.failed > 0) {
      console.error('SMTP2GO error:', result);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error('Contact function error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};
