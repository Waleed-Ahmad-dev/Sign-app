// Static banner and logo URLs - REPLACE THESE WITH YOUR ACTUAL IMAGE URLs
// IMPORTANT: These MUST be publicly accessible HTTPS URLs for email clients to display them
// FIXED: REMOVED TRAILING SPACES FROM ALL IMAGE URLS (THIS WAS CAUSING INVALID URLS)
const LOGO_URL = 'https://i.ibb.co/fdm26sWN/7-1.png';
const BANNER_URL = 'https://i.ibb.co/LzybSZGZ/banner-email.png';
const LINKEDIN_ICON = "https://i.ibb.co/gbV8yQhV/li.png";
const FACEBOOK_ICON = "https://i.ibb.co/S4F4J6jj/fb.png";
const INSTAGRAM_ICON = "https://i.ibb.co/3tHTSpL/insta.png";
const YOUTUBE_ICON = "https://i.ibb.co/S41zxN1W/yt.png";

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

    // Basic validation to check if required fields are filled
    if (!name || !title || !phone || !email) {
        alert('Please fill out all the required fields (Name, Title, Phone, and Email).');
        return;
    }

    // Ensure website has proper URL format
    let formattedWebsite = website;
    if (formattedWebsite && !formattedWebsite.startsWith('http')) {
        formattedWebsite = 'https://' + formattedWebsite;
    }

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
                                    ${website ? `<strong>W:</strong> <a href="${formattedWebsite}" target="_blank" style="color: #000000; text-decoration: none;">${website.replace(/^https?:\/\//, '')}</a>` : ''}
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

    // Displaying the signature in the preview box
    document.getElementById('signature-box').innerHTML = signatureHTML;
    
    // Store clean HTML for copying
    document.getElementById('signature-html').innerHTML = signatureHTML;
    
    // Enable the copy button
    document.getElementById('copy-btn').disabled = false;
}

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
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
            
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
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
        
    } catch (err) {
        console.error('Failed to copy signature: ', err);
        
        // Final fallback - show instructions
        alert('Failed to copy signature automatically. Please:\n\n1. Click on the signature preview\n2. Press Ctrl+A (Cmd+A on Mac) to select all\n3. Press Ctrl+C (Cmd+C on Mac) to copy\n4. Paste into your email signature settings');
    }
}

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