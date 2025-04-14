
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

// Load environment variables in non-production environments
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, '../dist')));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create transporter (in production, use real credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // replace with your email in production
        pass: process.env.EMAIL_PASS// replace with your password in production
      }
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // replace with recipient email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New message from your portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Catch-all handler to serve React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
