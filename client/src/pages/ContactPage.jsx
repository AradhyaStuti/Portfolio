import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useReveal from '../hooks/useReveal';
import usePageTitle from '../hooks/usePageTitle';

const ContactPage = () => {
  useReveal();
  usePageTitle('Contact');
  const formRef = useRef();
  const [form, setForm] = useState({ from_name: '', reply_to: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const mainEmail = emailjs.send('service_j2mfyrm', 'template_bhffo19', {
        from_name: form.from_name,
        reply_to: form.reply_to,
        subject: form.subject,
        message: form.message,
      }, 'eichvB040mOh_QKIo');

      const autoReply = emailjs.send('service_j2mfyrm', 'template_6jfu6oi', {
        to_email: form.reply_to,
        to_name: form.from_name,
      }, 'eichvB040mOh_QKIo');

      await Promise.all([mainEmail, autoReply]);
      setStatus('success');
      setForm({ from_name: '', reply_to: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="page">
      <div className="container">
        <span className="section-label">Contact</span>
        <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginTop: '8px', marginBottom: '16px' }}>Get in touch</h1>
        <p style={{ color: '#a1a1aa', marginBottom: '60px', maxWidth: '540px', fontSize: '16px', lineHeight: 1.7 }}>
          Hiring? Have a project? Or just want to talk shop about a hard problem — drop a message below, or reach me directly through any of the channels.
        </p>

        <div className="contact-grid">
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="card reveal" style={{ padding: '36px' }}>
              <h3 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '24px', color: '#f3ecdb' }}>Reach me at</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aradhya.mutants@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#c4c4c8', textDecoration: 'none', fontSize: '14px' }}
                >
                  <i className="fas fa-envelope" style={{ color: '#f3ecdb', width: '16px' }}></i>
                  aradhya.mutants@gmail.com
                </a>
                <a href="https://github.com/AradhyaStuti" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#c4c4c8', textDecoration: 'none', fontSize: '14px' }}>
                  <i className="fab fa-github" style={{ color: '#f3ecdb', width: '16px' }}></i>
                  AradhyaStuti
                </a>
                <a href="https://www.linkedin.com/in/aradhya-stuti" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#c4c4c8', textDecoration: 'none', fontSize: '14px' }}>
                  <i className="fab fa-linkedin" style={{ color: '#f3ecdb', width: '16px' }}></i>
                  aradhya-stuti
                </a>
              </div>
            </div>

            <div className="card reveal reveal-delay-1" style={{ padding: '36px' }}>
              <h3 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px', color: '#f3ecdb' }}>Open for</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', fontSize: '14px', lineHeight: 2 }}>
                <li><i className="fas fa-check" style={{ color: '#f3ecdb', marginRight: '10px', fontSize: '11px' }}></i>Freelance projects</li>
                <li><i className="fas fa-check" style={{ color: '#f3ecdb', marginRight: '10px', fontSize: '11px' }}></i>Full-time opportunities</li>
                <li><i className="fas fa-check" style={{ color: '#f3ecdb', marginRight: '10px', fontSize: '11px' }}></i>Open source collaboration</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="card reveal reveal-delay-2" style={{ padding: '40px' }}>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} noValidate>
              <div className="detail-grid">
                <input type="text" name="from_name" placeholder="Name" aria-label="Your name" autoComplete="name" value={form.from_name} onChange={handleChange} required className="input" />
                <input type="email" name="reply_to" placeholder="Email" aria-label="Your email" autoComplete="email" value={form.reply_to} onChange={handleChange} required className="input" />
              </div>
              <input type="text" name="subject" placeholder="Subject" aria-label="Subject" value={form.subject} onChange={handleChange} required className="input" />
              <textarea name="message" placeholder="Your message..." aria-label="Your message" rows="6" value={form.message} onChange={handleChange} required className="input" style={{ resize: 'none' }} />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{
                  width: '100%', justifyContent: 'center', marginTop: '8px',
                  ...(status === 'success' ? { background: 'rgba(16,185,129,0.15)', color: '#34d399' } : {}),
                  ...(status === 'error' ? { background: 'rgba(239,68,68,0.15)', color: '#f87171' } : {}),
                }}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Sent Successfully!'}
                {status === 'error' && 'Failed — Try Again'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
