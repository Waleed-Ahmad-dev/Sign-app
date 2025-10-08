// Static banner and logo URLs - REPLACE THESE WITH YOUR ACTUAL IMAGE URLs
// IMPORTANT: These MUST be publicly accessible HTTPS URLs for email clients to display them
const LOGO_URL = 'https://premierchoiceint.com/wp-content/uploads/2023/02/pc-logo.png'; // Removed trailing spaces
const BANNER_URL = 'https://i.ibb.co/LzybSZGZ/banner-email.png'; // Removed trailing spaces
const LINKEDIN_ICON = 'https://premierchoiceint.com/wp-content/uploads/2023/02/linkedin.png';
const FACEBOOK_ICON = 'https://premierchoiceint.com/wp-content/uploads/2023/02/facebook.png';
const INSTAGRAM_ICON = 'https://premierchoiceint.com/wp-content/uploads/2023/02/instagram.png';
const YOUTUBE_ICON = 'https://premierchoiceint.com/wp-content/uploads/2023/02/youtube.png';

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
                            <td valign="top" style="padding-right: 15px; border-right: 1px solid #000000;">
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

// Fixed Function to copy the signature to clipboard
async function copySignature() {
    const signatureHtml = document.getElementById('signature-html').innerHTML;
    
    if (!signatureHtml) {
        alert('Please generate a signature first.');
        return;
    }

    // Create temporary container (must be attached to DOM)
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = signatureHtml;
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    tempContainer.style.opacity = '0';
    document.body.appendChild(tempContainer);

    try {
        // Create selection range
        const range = document.createRange();
        range.selectNodeContents(tempContainer);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // Attempt copy using execCommand
        const successful = document.execCommand('copy');
        
        if (!successful) {
            throw new Error('execCommand failed');
        }

        // Show success notification
        const notification = document.getElementById('copy-notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
        
    } catch (err) {
        console.error('Failed to copy signature via execCommand: ', err);
        
        // Fallback to modern Clipboard API
        try {
            // Check for ClipboardItem support
            if (typeof ClipboardItem !== 'undefined') {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'text/html': new Blob([signatureHtml], { type: 'text/html' }),
                        'text/plain': new Blob([signatureHtml], { type: 'text/plain' })
                    })
                ]);
                
                // Show success notification
                const notification = document.getElementById('copy-notification');
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 3000);
                return;
            }
        } catch (clipboardError) {
            console.error('Modern clipboard API failed: ', clipboardError);
        }
        
        // Final fallback - plain text copy
        try {
            await navigator.clipboard.writeText(signatureHtml);
            alert('Signature copied as plain text. Formatting may be lost when pasting into email.');
        } catch (finalError) {
            console.error('All copy methods failed: ', finalError);
            alert('Failed to copy signature. Please select the signature in the preview box and copy it manually.');
        }
    } finally {
        // Always clean up temporary container
        if (tempContainer.parentNode) {
            document.body.removeChild(tempContainer);
        }
        // Clear any selections
        window.getSelection().removeAllRanges();
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
        input.addEventListener('blur', function() {
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