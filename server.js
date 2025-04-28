const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve your HTML, CSS, JS files from 'public' folder

// POST route for newsletter subscription
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    console.log(`New subscriber: ${email}`);
    
    // You can store this email to database / Google Sheets / etc.
    
    return res.json({ message: '🎉 Thank you for subscribing! Our team will contact you soon.' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
