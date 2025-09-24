import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  serviceId: 'service_ukqt9bm', 
  templateId: 'template_vg5pyxu',
  publicKey: 'rMxppyKpJoh4YPkKE',
};

export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  from_phone: string;
  service_needed: string;
  message: string;
  to_name: string;
  [key: string]: string;
}

export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

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

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const getEmailJSDebugInfo = () => {
  return {
    emailjsType: typeof emailjs,
    hasInit: typeof (emailjs as any).init !== 'undefined',
    hasSend: typeof (emailjs as any).send === 'function',
    serviceId: EMAILJS_CONFIG.serviceId,
    templateId: EMAILJS_CONFIG.templateId,
  };
};