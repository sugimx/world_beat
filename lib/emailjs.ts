import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  serviceId: 'service_ukqt9bm', // Replace with your EmailJS service ID
  templateId: 'template_vg5pyxu', // Replace with your EmailJS template ID
  publicKey: 'rMxppyKpJoh4YPkKE', // Replace with your EmailJS public key
};

// Email template parameters interface
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  from_phone: string;
  service_needed: string;
  message: string;
  to_name: string;
  [key: string]: string; // Index signature for EmailJS compatibility
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send email using EmailJS
export const sendEmail = async (templateParams: EmailTemplateParams): Promise<boolean> => {
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    return true;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone format (basic validation)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Debug helper to inspect EmailJS setup without exposing secrets
export const getEmailJSDebugInfo = () => {
  return {
    emailjsType: typeof emailjs,
    hasInit: typeof (emailjs as any).init !== 'undefined',
    hasSend: typeof (emailjs as any).send === 'function',
    serviceId: EMAILJS_CONFIG.serviceId,
    templateId: EMAILJS_CONFIG.templateId,
  };
};
