"use client";
import React, { useState, useEffect } from 'react'
import { sendEmail, initEmailJS, EmailTemplateParams, isValidEmail, isValidPhone, getEmailJSDebugInfo } from '@/lib/emailjs'
import NewsLetter from '@/components/NewsLetter';
import SocialFollow from '@/components/SocialFollow';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    useEffect(() => {
        initEmailJS();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!isValidPhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        try {
            const templateParams: EmailTemplateParams = {
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                service_needed: formData.subject,
                message: formData.message,
                to_name: 'Sug Team'
            };

            const debugInfo = getEmailJSDebugInfo();
            console.log('Template params:', templateParams);
            console.log('=== EMAILJS DEBUG INFO ===');
            console.log('Form data:', templateParams);
            console.log('Service ID:', debugInfo.serviceId);
            console.log('Template ID:', debugInfo.templateId);
            console.log('EmailJS object type:', debugInfo.emailjsType);
            console.log('EmailJS initialized available:', debugInfo.hasInit);
            console.log('EmailJS send function available:', debugInfo.hasSend);
            console.log('========================');

            const success = await sendEmail(templateParams);
            
            if (success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="container-fluid mt-5 pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mb-0">
                                <h4 className="m-0 text-uppercase font-weight-bold">Contact Us For Any Queries</h4>
                            </div>
                            <div className="bg-white border border-top-0 p-4 mb-3">
                                <div className="mb-4">
                                    <h6 className="text-uppercase font-weight-bold">Contact Info</h6>
                                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                                            <h6 className="font-weight-bold mb-0">Our Office</h6>
                                        </div>
                                        <p className="m-0">123 Street, New York, USA</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-envelope-open text-primary mr-2"></i>
                                            <h6 className="font-weight-bold mb-0">Email Us</h6>
                                        </div>
                                        <p className="m-0">info@example.com</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                                            <h6 className="font-weight-bold mb-0">Call Us</h6>
                                        </div>
                                        <p className="m-0">+012 345 6789</p>
                                    </div>
                                </div>
                                <h6 className="text-uppercase font-weight-bold mb-3">Contact Us</h6>
                                
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success mb-3" role="alert">
                                        <i className="fa fa-check-circle mr-2"></i>
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}
                                
                                {submitStatus === 'error' && (
                                    <div className="alert alert-danger mb-3" role="alert">
                                        <i className="fa fa-exclamation-circle mr-2"></i>
                                        Sorry, there was an error sending your message. Please try again.
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    className={`form-control p-4 ${errors.name ? 'is-invalid' : ''}`}
                                                    placeholder="Your Name" 
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className={`form-control p-4 ${errors.email ? 'is-invalid' : ''}`}
                                                    placeholder="Your Email" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="subject"
                                                    className={`form-control p-4 ${errors.subject ? 'is-invalid' : ''}`}
                                                    placeholder="Subject" 
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    className={`form-control p-4 ${errors.phone ? 'is-invalid' : ''}`}
                                                    placeholder="Phone" 
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="message"
                                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                            rows={4} 
                                            placeholder="Message" 
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                        ></textarea>
                                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                    </div>
                                    <div>
                                        <button 
                                            className="btn btn-primary font-weight-semi-bold px-4" 
                                            style={{ height: '50px' }}
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <i className="fa fa-spinner fa-spin mr-2"></i>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <SocialFollow />
                            <NewsLetter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
