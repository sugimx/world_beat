# EmailJS Setup Instructions

This document provides step-by-step instructions to set up EmailJS for the contact form.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission

Hello,

You have received a new contact form submission:

👤 {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Service: {{service_needed}}
Message: {{message}}

Best regards,
Your Website
```

4. Set the template name (e.g., "contact_form")
5. Note down the **Template ID**

## 4. Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Configure the Application

1. Open `lib/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your actual service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your actual template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your actual public key
};
```

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check your email for the test message

## Template Variables

The following variables are available in your email template:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{from_phone}}` - The sender's phone number
- `{{service_needed}}` - The subject of the message
- `{{message}}` - The message content

## Troubleshooting

### Common Issues:

1. **"Service not found" error**: Check that your Service ID is correct
2. **"Template not found" error**: Verify your Template ID
3. **"Invalid public key" error**: Ensure your Public Key is correct
4. **Emails not being sent**: Check your email service configuration

### Debug Mode:

You can enable debug mode by adding this to your EmailJS configuration:

```typescript
emailjs.init(EMAILJS_CONFIG.publicKey, {
  debug: true
});
```

## Security Notes

- The public key is safe to use in client-side code
- Never expose your private keys or sensitive credentials
- EmailJS handles the security of sending emails
- Consider adding rate limiting for production use

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

For higher volumes, consider upgrading to a paid plan.
