'use client';

import { useState } from 'react';
import PrivacyModal from '@/components/ui/PrivacyModal';

interface ContactFormProps {
  section?: 'dvere' | 'stolarstvo';
}

export default function ContactForm({ section = 'dvere' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdpr: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, section }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', gdpr: false });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Kontaktný formulár</h3>

        <div className="form-group">
          <input
            type="text"
            placeholder="Vaše meno ..."
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-row">
          <div className="form-group half">
            <input
              type="email"
              placeholder="Váš email ..."
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group half">
            <input
              type="tel"
              placeholder="Váš telefón ..."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            rows={6}
            placeholder="Vaša správa ..."
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <div className="form-footer">
          <div className="checkbox-container flex items-center gap-2 mb-4 lg:mb-0">
            <input
              type="checkbox"
              id="gdpr-contact"
              required
              checked={formData.gdpr}
              onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-dark focus:ring-dark"
            />
            <label htmlFor="gdpr-contact" className="text-sm text-gray-medium cursor-pointer">
              Odoslaním formuláru súhlasím s{' '}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-dark font-bold underline underline-offset-4 hover:text-gold transition-colors"
              >
                ochranou osobných údajov
              </button>{' '}
              *
            </label>
          </div>

          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Odosiela sa...' : 'Odoslať email'}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-green-600 text-sm font-semibold mt-4">Správa bola odoslaná!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm font-semibold mt-4">Nepodarilo sa odoslať správu. Skúste to znova.</p>
        )}
      </form>

      <PrivacyModal 
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </>
  );
}
