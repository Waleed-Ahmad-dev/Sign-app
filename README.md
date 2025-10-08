# 📧 Premier Choice **Email Signature Generator** (HTML • CSS • JavaScript)

> A production‑ready, table‑based **Email Signature Generator** that creates copy‑pasteable signatures compatible with **Gmail, Outlook, Apple Mail, Yahoo**, and more. Built with vanilla **HTML, CSS, and JavaScript**, optimized for **email client compatibility** and **Clipboard API** copying.

![HTML](https://img.shields.io/badge/HTML5-Project-orange)
![CSS](https://img.shields.io/badge/CSS3-Responsive-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Clipboard%20API-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🔗 Table of Contents

- [Overview](#-overview)
- [Live Behavior (What It Does)](#-live-behavior-what-it-does)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [How It Works (High Level)](#-how-it-works-high-level)
- [Line‑by‑Line Code Walkthrough](#-line-by-line-code-walkthrough)
  - [1) `index.html`](#1-indexhtml)
  - [2) `style.css`](#2-stylecss)
  - [3) `script.js`](#3-scriptjs)
- [Email Client Compatibility Notes](#-email-client-compatibility-notes)
- [Troubleshooting & Common Pitfalls](#-troubleshooting--common-pitfalls)
- [Security Notes](#-security-notes)
- [Deploying on Hostinger (Static Hosting)](#-deploying-on-hostinger-static-hosting)
- [SEO Keywords](#-seo-keywords)
- [Changelog](#-changelog)
- [License](#-license)

---

## 🔎 Overview

This repository contains a **self‑contained Email Signature Generator** built for **Premier Choice International**. Users fill in a simple form (name, title, phone, etc.), click **Generate Signature**, preview the signature, and then click **Copy Signature** to put **HTML + Plain Text** onto the clipboard for easy pasting into email settings.

The generator uses a **table‑based layout** inside the signature HTML to ensure **maximum compatibility** across email clients (many email clients remove/limit modern CSS).

---

## ⚙️ Live Behavior (What It Does)

- Collects **user input** (Full Name, Job Title, Mobile, Tel, Email, Website).
- Includes **fixed company addresses** and **fixed social links** (disabled inputs).
- Generates **responsive, table‑based signature HTML** with **logo**, **contact info**, **banner**, **social icons**, and **confidentiality notice**.
- **Copies** the generated signature to the clipboard using the **Clipboard API** (with a fallback for older browsers).
- Displays a **preview** and a **“Signature copied”** toast message.

---

## 🌟 Key Features

- ✅ **Email‑safe** tables & inline styles in the signature markup.
- ✅ **Clipboard API** support with **HTML + Text** payloads (and legacy fallback).
- ✅ **Form validation** for required fields and email format.
- ✅ **Auto‑format** website to `https://` when needed.
- ✅ **Responsive** UI for desktop & mobile.
- ✅ **No external build tools** — just open `index.html` and go.
- ✅ **Great for teams** — fixed addresses & social URLs prevent mistakes.

---

## 🗂 Project Structure

```
/ (root)
├── index.html   # App UI & containers
├── style.css    # App styles (responsive)
└── script.js    # Logic: generate + copy + validate
```

> **Assets** (logo, banner, social icons) are referenced by **public HTTPS URLs** inside `script.js`.

---

## 🚀 Quick Start

1. **Download** this repo or copy the three files: `index.html`, `style.css`, `script.js`.
2. Ensure your image URLs (logo, banner, icons) are **public** and **HTTPS**.
3. Open `index.html` in a browser.
4. Fill the form → **Generate Signature** → **Copy Signature**.
5. Paste into your email client’s **signature settings** (Gmail/Outlook/etc.).

> Tip: Gmail → ⚙️ Settings → **See all settings** → **General** → **Signature** → **Create new** → paste.

---

## 🧠 How It Works (High Level)

- The HTML provides a **form** and a **preview area**.
- CSS styles the page (grid layout, inputs, buttons, preview card, responsive rules).
- JS:
  - Reads the inputs and **builds a signature HTML string** via template literals.
  - Injects the signature into the **preview** and a **hidden `<div>`** for clean copying.
  - Uses **Clipboard API** to copy HTML + Plain Text (with a DOM‑selection fallback).
  - Adds **input validation** + **UX touches** (success toast, disabled copy button until ready).

---

## 🔍 Line‑by‑Line Code Walkthrough

Below is a **thorough, line‑by‑line explanation** of each file. For readability, closing tags or repeated patterns are grouped when they are identical or purely structural.

> **Note:** Your `script.js` contains public image URLs with **trailing spaces** (e.g., `...png␠␠`). Many email clients and some browsers treat those as invalid. **Remove trailing spaces** from all URLs.

### 1) `index.html`

```html
<!DOCTYPE html> <!-- Standards mode declaration -->
<html lang="en"> <!-- Root element; language set to English for accessibility/SEO -->
<head>
    <meta charset="UTF-8"> <!-- UTF‑8 encoding for international characters -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive scaling on mobile -->
    <title>Email Signature Generator</title> <!-- Browser tab title & SEO keyword -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css  ">
    <!-- Loads Font Awesome icons (note: URL currently has trailing spaces; remove them) -->
    <link rel="stylesheet" href="style.css"> <!-- Local stylesheet for UI -->
</head>
<body>

<div class="container"> <!-- Page card -->
    <h1>Email Signature Generator</h1> <!-- Main heading (accessible & SEO) -->

    <div class="content-wrapper"> <!-- Two-column responsive layout -->
        <!-- User Inputs -->
        <form id="signature-form"> <!-- Unique id used in JS -->
            <div class="input-group"> <!-- Field group: Full Name -->
                <label for="name">Full Name *</label> <!-- Asterisk indicates required -->
                <input type="text" id="name" placeholder="Enter your full name" required>
            </div>
            <div class="input-group"> <!-- Field group: Job Title -->
                <label for="title">Job Title *</label>
                <input type="text" id="title" placeholder="Enter your job title" required>
            </div>
            <div class="input-group"> <!-- Field group: Mobile Number -->
                <label for="phone">Mobile Number *</label>
                <input type="text" id="phone" placeholder="Enter your mobile number (e.g., +923186294023)" required>
            </div>
            <div class="input-group"> <!-- Field group: Telephone Number (optional) -->
                <label for="tel">Telephone Number</label>
                <input type="text" id="tel" placeholder="Enter your telephone number (e.g., 923011233333)">
            </div>
            <div class="input-group"> <!-- Field group: Email -->
                <label for="email">Email Address *</label>
                <input type="email" id="email" placeholder="Enter your email" required>
            </div>
            <div class="input-group"> <!-- Field group: Website (auto https:// on blur) -->
                <label for="website">Website URL</label>
                <input type="text" id="website" placeholder="Enter your website URL (e.g., www.premierchoiceint.com)">
            </div>
            <div class="input-group"> <!-- Fixed: Dubai office (disabled) -->
                <label for="dubai-office">Dubai Office Address</label>
                <input type="text" id="dubai-office" value="Office 1013, Onyx Tower 1, The Greens, Dubai, UAE." disabled>
            </div>
            <div class="input-group"> <!-- Fixed: Pakistan office (disabled) -->
                <label for="pakistan-office">Pakistan Office Address</label>
                <input type="text" id="pakistan-office" value="Premier Choice, Bahria Food Street, Phase 7, Islamabad, Pakistan." disabled>
            </div>

            <!-- Social Links (Fixed and disabled to ensure brand consistency) -->
            <div class="input-group">
                <label for="linkedin">LinkedIn URL</label>
                <input type="text" id="linkedin" value="https://www.linkedin.com/company/premier-choice-international/posts/?feedView=all" disabled>
            </div>
            <div class="input-group">
                <label for="facebook">Facebook URL</label>
                <input type="text" id="facebook" value="  https://www.facebook.com/share/17ANbBfiRm/  " disabled>
            </div>
            <div class="input-group">
                <label for="instagram">Instagram URL</label>
                <input type="text" id="instagram" value="https://www.instagram.com/premierchoicepk/  " disabled>
            </div>
            <div class="input-group">
                <label for="youtube">YouTube URL</label>
                <input type="text" id="youtube" value="https://www.youtube.com/@premierchoicepk  " disabled>
            </div>

            <button type="button" id="generate-btn">Generate Signature</button> <!-- Triggers JS generation -->
        </form>

        <!-- Signature Preview column -->
        <div class="preview-section">
            <h2>Signature Preview</h2>
            <div class="signature-box" id="signature-box">
                <div class="placeholder"> <!-- Shown until user generates -->
                    <i class="fas fa-signature"></i>
                    <p>Your signature will appear here after you fill the form and click "Generate Signature"</p>
                </div>
            </div>

            <!-- Copy Button -->
            <button id="copy-btn" class="copy-btn">Copy Signature</button> <!-- Disabled until generated -->
            <div class="copy-notification" id="copy-notification">Signature copied to clipboard!</div>
            
            <!-- Hidden container for clean HTML signature (for copying) -->
            <div id="signature-html" style="display: none;"></div>
        </div>
    </div>
</div>

<script src="script.js"></script> <!-- Binds events & logic -->

</body>
</html>
```

**What’s important here?**  
- A **semantic layout** with clear IDs for JS hooks.
- A dedicated **preview area** and a **hidden container** to store **clean HTML** for copying.
- **Disabled inputs** keep brand assets/links consistent across the team.

---

### 2) `style.css`

```css
/* Base styles */
:root {
    --primary-color: #2980b9;
    --primary-dark: #1c5a85;
    --secondary-color: #3498db;
    --light-gray: #f4f4f4;
    --medium-gray: #e9ecef;
    --dark-gray: #333;
    --border-color: #ddd;
    --success-color: #27ae60;
    --error-color: #e74c3c;
    --signature-font: Arial, Helvetica, sans-serif;
}
/* CSS variables centralize theme colors & font */

* { box-sizing: border-box; } /* Includes padding/border in element width */

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--light-gray);
    color: var(--dark-gray);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 30px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h1 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 30px;
    font-weight: 600;
}

.content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

#signature-form { flex: 1; min-width: 300px; } /* Left column */
.preview-section { flex: 1; min-width: 300px; } /* Right column */

.preview-section h2 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.input-group { margin-bottom: 20px; }
.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark-gray);
}

.input-group input {
    width: 100%;
    padding: 12px 15px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.input-group input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(41, 128, 185, 0.2);
}

.input-group input:disabled {
    background-color: #f9f9f9;
    color: #666;
    cursor: not-allowed;
}

.input-group input:required:valid {
    border-left: 3px solid var(--success-color);
}

.input-group input:required:invalid:not(:placeholder-shown) {
    border-left: 3px solid var(--error-color);
}

/* Signature Box Styling */
.signature-box {
    margin-top: 20px;
    padding: 20px;
    background-color: var(--medium-gray);
    border-radius: 8px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.placeholder {
    text-align: center;
    color: #777;
}

.placeholder i {
    font-size: 48px;
    margin-bottom: 15px;
    color: #bbb;
}

.signature-content {
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    color: #333;
    border: 1px solid var(--border-color);
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    font-family: var(--signature-font);
}

/* Buttons */
button {
    padding: 12px 24px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 10px;
    display: block;
    width: 100%;
    font-weight: 600;
}

button:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
}

button:active { transform: translateY(0); }

.copy-btn { background-color: var(--success-color); }
.copy-btn:hover { background-color: #219653; }

/* Copy Notification */
.copy-notification {
    margin-top: 10px;
    color: var(--success-color);
    font-weight: bold;
    display: none;
    text-align: center;
    padding: 10px;
    background-color: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container { margin: 15px auto; padding: 15px; }
    .content-wrapper { flex-direction: column; gap: 20px; }
    .signature-box { min-height: 300px; }
    .company-info { flex-direction: column; } /* Future-proofing for inner flex layouts */
    .logo-container {
        width: auto;
        padding-right: 0;
        border-right: none;
        border-bottom: 1px solid #000;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .contact-info { padding-left: 0; }
    .social-links { justify-content: center; }
    .signature-content { padding: 10px; }
}

@media (max-width: 480px) {
    .container { margin: 10px auto; padding: 10px; }
    h1 { font-size: 1.5rem; }
    .input-group input { padding: 10px 12px; }
    .signature-header .name { font-size: 16px; }
    .signature-header .title { font-size: 13px; }
    .contact-info p, .office-addresses p { font-size: 13px; }
    .social-links { gap: 10px; }
    .social-links a { font-size: 12px; }
    button { padding: 10px 15px; font-size: 14px; }
}
```
**Highlights**
- Uses CSS **variables** for consistent theming.
- Adds **UX validation colors** on inputs.
- Provides **mobile‑first** responsive breakpoints at `768px` and `480px`.

---

### 3) `script.js`

```js
// Static banner and logo URLs - REPLACE THESE WITH YOUR ACTUAL IMAGE URLs
// IMPORTANT: These MUST be publicly accessible HTTPS URLs for email clients to display them
// FIXED: REMOVED TRAILING SPACES FROM ALL IMAGE URLS (THIS WAS CAUSING INVALID URLS)
const LOGO_URL = 'https://i.ibb.co/fdm26sWN/7-1.png  ';
const BANNER_URL = 'https://i.ibb.co/LzybSZGZ/banner-email.png  ';
const LINKEDIN_ICON = "https://i.ibb.co/gbV8yQhV/li.png  ";
const FACEBOOK_ICON = "https://i.ibb.co/S4F4J6jj/fb.png  ";
const INSTAGRAM_ICON = "https://i.ibb.co/3tHTSpL/insta.png  ";
const YOUTUBE_ICON = "https://i.ibb.co/S41zxN1W/yt.png  ";
```
- **These constants define all image assets** used in the signature.
- **Remove trailing spaces** at the end of the strings (after `.png`) to avoid loading failures in email clients.

```js
// Function to generate the email signature
function generateSignature() {
    // Getting values from the form
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const phone = document.getElementById('phone').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const dubaiOffice = document.getElementById('dubai-office').value;
    const pakistanOffice = document.getElementById('pakistan-office').value;
    const linkedin = document.getElementById('linkedin').value.trim();
    const facebook = document.getElementById('facebook').value.trim();
    const instagram = document.getElementById('instagram').value.trim();
    const youtube = document.getElementById('youtube').value.trim();
```
- Pulls **user inputs** and **fixed values** by ID. `.trim()` cleans whitespace around social URLs.

```js
    // Basic validation to check if required fields are filled
    if (!name || !title || !phone || !email) {
        alert('Please fill out all the required fields (Name, Title, Phone, and Email).');
        return;
    }
```
- Simple **required field guard**; stops generation if missing essentials.

```js
    // Ensure website has proper URL format
    let formattedWebsite = website;
    if (formattedWebsite && !formattedWebsite.startsWith('http')) {
        formattedWebsite = 'https://' + formattedWebsite;
    }
```
- Normalizes the website to **absolute URL** (so links work in clients).

```js
    // Creating signature preview - using table-based layout for email compatibility
    const signatureHTML = `
        <table border="0" cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #333333; line-height: 1.4; max-width: 600px; border-collapse: collapse;">
            <tr>
                <td style="padding-bottom: 8px; font-size: 18px; font-weight: bold; color: #000000;">${name}</td>
            </tr>
            <tr>
                <td style="padding-bottom: 12px; font-size: 14px; color: #555555;">${title}</td>
            </tr>
            <tr>
                <td>
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top">
                                <img src="${LOGO_URL}" alt="Premier Choice Logo" style="display: block; max-height: 90px; width: auto;">
                            </td>
                            <td valign="top" style="padding-left: 15px;">
                                <p style="margin: 0; padding: 0; font-size: 14px; line-height: 1.4;">
                                    <strong>M:</strong> ${phone}<br>
                                    ${tel ? `<strong>T:</strong> ${tel}<br>` : ''}
                                    <strong>E:</strong> <a href="mailto:${email}" style="color: #000000; text-decoration: none;">${email}</a><br>
                                    ${website ? `<strong>W:</strong> <a href="${formattedWebsite}" target="_blank" style="color: #000000; text-decoration: none;">${website.replace(/^https?:\\/\\//, '')}</a>` : ''}
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 0 5px 0;">
                    <p style="margin: 0; padding: 0; font-size: 14px; line-height: 1.4;">
                        <strong>Dubai Head Office:</strong> ${dubaiOffice}
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px 0 10px 0;">
                    <p style="margin: 0; padding: 0; font-size: 14px; line-height: 1.4;">
                        <strong>Pakistan Head Office:</strong> ${pakistanOffice}
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 0;">
                    <img src="${BANNER_URL}" alt="Company Banner" style="display: block; max-width: 100%; height: auto; border: none;">
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 0 5px 0;">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                        <tr>
                            <td style="padding-right: 15px;">
                                <a href="${linkedin}" target="_blank" style="text-decoration: none; color: #000000;">
                                    <img src="${LINKEDIN_ICON}" alt="LinkedIn" style="display: inline-block; width: 24px; height: 24px; margin-right: 5px; vertical-align: middle;">
                                    LinkedIn
                                </a>
                            </td>
                            <td style="padding-right: 15px;">
                                <a href="${facebook}" target="_blank" style="text-decoration: none; color: #000000;">
                                    <img src="${FACEBOOK_ICON}" alt="Facebook" style="display: inline-block; width: 24px; height: 24px; margin-right: 5px; vertical-align: middle;">
                                    Facebook
                                </a>
                            </td>
                            <td style="padding-right: 15px;">
                                <a href="${instagram}" target="_blank" style="text-decoration: none; color: #000000;">
                                    <img src="${INSTAGRAM_ICON}" alt="Instagram" style="display: inline-block; width: 24px; height: 24px; margin-right: 5px; vertical-align: middle;">
                                    Instagram
                                </a>
                            </td>
                            <td>
                                <a href="${youtube}" target="_blank" style="text-decoration: none; color: #000000;">
                                    <img src="${YOUTUBE_ICON}" alt="YouTube" style="display: inline-block; width: 24px; height: 24px; margin-right: 5px; vertical-align: middle;">
                                    YouTube
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding-top: 10px; font-size: 12px; color: #000000;">
                    <p style="margin: 5px 0; padding: 0; line-height: 1.4;">CONFIDENTIALITY NOTICE:</p>
                    <p style="margin: 5px 0; padding: 0; line-height: 1.4;">This email is confidential and intended for the recipient specified in the message only.</p>
                    <p style="margin: 5px 0; padding: 0; line-height: 1.4;">It is strictly forbidden to share any part of this message with any third party.</p>
                    <p style="margin: 5px 0; padding: 0; line-height: 1.4;">If you received this message by mistake, please reply to this message and follow with its deletion.</p>
                </td>
            </tr>
        </table>
    `;
```
- Builds the **entire, email‑safe signature** using nested tables and **inline styles**.
- Uses conditional template string for **Tel** and **Website** only when provided.
- Keeps image tags as **`display:block`** to avoid gaps in email clients.

```js
    // Displaying the signature in the preview box
    document.getElementById('signature-box').innerHTML = signatureHTML;
    
    // Store clean HTML for copying
    document.getElementById('signature-html').innerHTML = signatureHTML;
    
    // Enable the copy button
    document.getElementById('copy-btn').disabled = false;
}
```
- Injects the generated HTML into the **preview** and **hidden container**.
- Enables the **Copy** button only after generation.

```js
// FIXED: COMPLETELY REWRITTEN COPY FUNCTION TO PROPERLY HANDLE HTML FOR EMAIL CLIENTS
async function copySignature() {
    const signatureHtml = document.getElementById('signature-html').innerHTML;
    
    if (!signatureHtml) {
        alert('Please generate a signature first.');
        return;
    }

    try {
        // Modern Clipboard API - preferred method
        if (navigator.clipboard && navigator.clipboard.write) {
            // Create clipboard items with both HTML and plain text
            const htmlBlob = new Blob([signatureHtml], { type: 'text/html' });
            const plainText = signatureHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            const textBlob = new Blob([plainText], { type: 'text/plain' });
            
            // Create clipboard item
            const clipboardItem = new ClipboardItem({
                'text/html': htmlBlob,
                'text/plain': textBlob
            });
            
            // Write to clipboard
            await navigator.clipboard.write([clipboardItem]);
            
            // Show success notification
            const notification = document.getElementById('copy-notification');
            notification.style.display = 'block';
            setTimeout(() => { notification.style.display = 'none'; }, 3000);
            
            return;
        }
        
        // Fallback for older browsers
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = signatureHtml;
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '-9999px';
        tempContainer.style.opacity = '0';
        document.body.appendChild(tempContainer);
        
        // Select the content
        const range = document.createRange();
        range.selectNodeContents(tempContainer);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        // Copy using execCommand (older method)
        document.execCommand('copy');
        
        // Clean up
        selection.removeAllRanges();
        document.body.removeChild(tempContainer);
        
        // Show success notification
        const notification = document.getElementById('copy-notification');
        notification.style.display = 'block';
        setTimeout(() => { notification.style.display = 'none'; }, 3000);
        
    } catch (err) {
        console.error('Failed to copy signature: ', err);
        
        // Final fallback - show instructions
        alert('Failed to copy signature automatically. Please:\n\n1. Click on the signature preview\n2. Press Ctrl+A (Cmd+A on Mac) to select all\n3. Press Ctrl+C (Cmd+C on Mac) to copy\n4. Paste into your email signature settings');
    }
}
```
- Copies **HTML + Plain Text** for broad compatibility (e.g., Gmail sometimes prefers HTML payloads).
- Provides a **full DOM selection fallback** using `document.execCommand('copy')` for older browsers.

```js
// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to generate button
    document.getElementById('generate-btn').addEventListener('click', generateSignature);
    
    // Add event listener to copy button
    document.getElementById('copy-btn').addEventListener('click', copySignature);
    
    // Initially disable the copy button
    document.getElementById('copy-btn').disabled = true;
    
    // Add form validation on input
    const requiredInputs = document.querySelectorAll('input[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (!this.value) {
                this.style.borderLeft = '3px solid var(--error-color)';
            } else {
                this.style.borderLeft = '3px solid var(--success-color)';
            }
        });
    });
    
    // Add input validation for email format
    document.getElementById('email').addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderLeft = '3px solid var(--error-color)';
        } else {
            this.style.borderLeft = '3px solid var(--success-color)';
        }
    });
    
    // Add input validation for website format
    document.getElementById('website').addEventListener('blur', function() {
        if (this.value && !this.value.startsWith('http')) {
            this.value = 'https://' + this.value;
        }
    });
});
```
- Binds **click handlers** for Generate and Copy.
- **Disables Copy** until a signature exists.
- Adds **realtime validation** on required inputs + email format.
- **Auto‑prefixes** website with `https://` on blur.

---

## 📬 Email Client Compatibility Notes

- Use **tables + inline CSS** in signature HTML (already implemented).
- Keep images on **public HTTPS** URLs.
- Add `alt=""` text on images for accessibility (already included).
- Avoid external CSS/JS in the signature itself (clients strip them).
- Test in **Gmail Web, Gmail Mobile (Android/iOS), Outlook Desktop, Outlook Web, Apple Mail**.

---

## 🧯 Troubleshooting & Common Pitfalls

1. **Images not showing?**  
   - Ensure URLs are **public** and **HTTPS**.  
   - **Remove trailing spaces** from URL constants in `script.js`.

2. **Gmail paste loses formatting?**  
   - Use the **Copy Signature** button (Clipboard API sends **HTML**).  
   - If needed, paste into a new **Google Doc** first, then copy again into Gmail.

3. **Broken links for the website field?**  
   - The script **auto‑prefixes** `https://` but only after blur; ensure you leave the field or type full URL.

4. **Disabled social links still editable?**  
   - Confirm `disabled` attribute remains on inputs. This is by design for brand consistency.

---

## 🔒 Security Notes

- This is a **static client‑side** app; no data is sent to a server.
- Avoid placing **secret or internal URLs** in the generated signature.
- Host images on a trusted CDN or company domain.

---

## ☁️ Deploying on Hostinger (Static Hosting)

1. Zip your three files (`index.html`, `style.css`, `script.js`).  
2. Log into **Hostinger** → **hPanel** → **Files** → **File Manager**.  
3. Upload the zip to your site root (e.g., `/public_html`) and **Extract**.  
4. Visit `https://your-domain.com/` to load the app.

> Optionally create a `/assets` folder for self‑hosted images and update the constants in `script.js`.

---

## 🔎 SEO Keywords

**Email Signature Generator**, **Gmail signature HTML**, **Outlook HTML signature**, **table‑based email signature**, **Clipboard API HTML copy**, **vanilla JavaScript form**, **responsive CSS layout**, **public HTTPS image URLs**, **inline CSS for email**, **Premier Choice International**.

---

## 📝 Changelog

- **v1.0** — Initial release: form + table‑based signature + HTML/PlainText copy + validation.

---

## 📄 License

Released under the **MIT License**. You are free to use, modify, and distribute this project.

---

### ✅ Final Note: Fix the Image URLs
Update your constants to **remove trailing spaces** (recommended):

```js
const LOGO_URL = 'https://i.ibb.co/fdm26sWN/7-1.png';
const BANNER_URL = 'https://i.ibb.co/LzybSZGZ/banner-email.png';
const LINKEDIN_ICON = 'https://i.ibb.co/gbV8yQhV/li.png';
const FACEBOOK_ICON = 'https://i.ibb.co/S4F4J6jj/fb.png';
const INSTAGRAM_ICON = 'https://i.ibb.co/3tHTSpL/insta.png';
const YOUTUBE_ICON = 'https://i.ibb.co/S41zxN1W/yt.png';
```