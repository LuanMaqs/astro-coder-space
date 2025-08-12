require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

const app = express();
app.use(express.json());

// PostgreSQL pool setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
      html,
    });

    res.json({ messageId: info.messageId });
  } catch (err) {
    console.error('Error sending email', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Meeting scheduling endpoint
app.post('/schedule-meeting', async (req, res) => {
  const { date, email, subject } = req.body;
  try {
    // schedule job
    const job = schedule.scheduleJob(new Date(date), async () => {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: `Meeting Reminder: ${subject}`,
        text: `This is a reminder for your meeting scheduled on ${date}`,
      });
      // Optionally record in database
      await pool.query(
        'INSERT INTO meetings (email, subject, scheduled_at) VALUES ($1, $2, $3)',
        [email, subject, date]
      );
    });

    res.json({ scheduled: true });
  } catch (err) {
    console.error('Error scheduling meeting', err);
    res.status(500).json({ error: 'Failed to schedule meeting' });
  }
});

// Database connection test
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ now: result.rows[0].now });
  } catch (err) {
    console.error('DB connection error', err);
    res.status(500).json({ error: 'DB connection failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));