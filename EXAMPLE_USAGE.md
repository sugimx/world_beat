# Contact Form with EmailJS - Example Usage

## Overview

The contact form has been successfully implemented with EmailJS integration. Here's what has been added:

## Features Implemented

✅ **EmailJS Integration**: Form submissions are sent via EmailJS
✅ **Form Validation**: Client-side validation for all fields
✅ **Loading States**: Shows loading spinner during submission
✅ **Success/Error Messages**: User feedback for form submission status
✅ **Responsive Design**: Works on all device sizes
✅ **TypeScript Support**: Full type safety

## Template Variables

Your email template uses these variables:

```
👤 {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Service: {{service_needed}}
Message: {{message}}
```

## Form Fields

- **Name**: Required text field
- **Email**: Required, validated email format
- **Phone**: Required, validated phone format
- **Subject**: Required text field (maps to `service_needed`)
- **Message**: Required textarea

## Setup Required

Before using the contact form, you need to:

1. **Set up EmailJS account** (see `EMAILJS_SETUP.md`)
2. **Update configuration** in `lib/emailjs.ts`:
   ```typescript
   export const EMAILJS_CONFIG = {
     serviceId: 'your_actual_service_id',
     templateId: 'your_actual_template_id', 
     publicKey: 'your_actual_public_key',
   };
   ```

## Usage Example

```tsx
import Contact from './contact/page';

// The contact page is ready to use
// Just navigate to /contact and fill out the form
```

## Form Behavior

1. **Validation**: Real-time validation as user types
2. **Submission**: Sends email via EmailJS when form is submitted
3. **Feedback**: Shows success/error messages
4. **Reset**: Clears form on successful submission
5. **Loading**: Disables form during submission

## Customization

You can customize:

- **Validation rules** in `validateForm()` function
- **Email template** in EmailJS dashboard
- **Styling** using Bootstrap classes
- **Error messages** in the validation logic

## Testing

1. Start development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form with test data
4. Submit and check your configured email

The form is now fully functional and ready for production use!
