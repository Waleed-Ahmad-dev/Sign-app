// Static banner and logo URLs - REPLACE THESE WITH YOUR ACTUAL IMAGE URLs
const BANNER_URL = './assets/banner-email.png'; // Replace with your banner image path
const LOGO_URL = './assets/logo.png'; // Replace with your logo image path

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

    // Creating signature preview
    const signatureHTML = `
        <div class="signature-content">
            <div class="signature-header">
                <div class="name">${name}</div>
            </div>
            <div class="signature-header">
                <div class="title">${title}</div>
            </div>
            
            <div class="signature-main">
                <div class="company-info">
                    <div class="logo-container">
                        <img src="${LOGO_URL}" alt="Premier Choice Logo" class="company-logo">
                    </div>
                    <div class="contact-info">
                        <p><strong>M:</strong> ${phone}</p>
                        ${tel ? `<p><strong>T:</strong> ${tel}</p>` : ''}
                        <p><strong>E:</strong> <a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a></p>
                        ${website ? `<p><strong>W:</strong> <a href="${website}" target="_blank" style="color: #000; text-decoration: none;">${website}</a></p>` : ''}
                    </div>
                </div>
                
                <div class="office-addresses">
                    <p><strong>Dubai Head Office:</strong> ${dubaiOffice}</p>
                    <p><strong>Pakistan Head Office:</strong> ${pakistanOffice}</p>
                </div>
                
                <img src="${BANNER_URL}" alt="Company Banner" class="signature-banner">
                
                <div class="social-links">
                    <a href="${linkedin}" target="_blank">
                        <img src="./assets/li.png" alt="LinkedIn" class="social-icon">
                        LinkedIn
                    </a>
                    <a href="${facebook}" target="_blank">
                        <img src="./assets/fb.png" alt="Facebook" class="social-icon">
                        Facebook
                    </a>
                    <a href="${instagram}" target="_blank">
                        <img src="./assets/insta.png" alt="Instagram" class="social-icon">
                        Instagram
                    </a>
                    <a href="${youtube}" target="_blank">
                        <img src="./assets/yt.png" alt="YouTube" class="social-icon">
                        YouTube
                    </a>
                </div>
                
                <div class="confidentiality-notice">
                    <p>CONFIDENTIALITY NOTICE:</p>
                    <p>This email is confidential and intended for the recipient specified in the message only.</p>
                    <p>It is strictly forbidden to share any part of this message with any third party.</p>
                    <p>If you received this message by mistake, please reply to this message and follow with its deletion.</p>
                </div>
            </div>
        </div>
    `;

    // Displaying the signature in the preview box
    document.getElementById('signature-box').innerHTML = signatureHTML;
    
    // Enable the copy button
    document.getElementById('copy-btn').disabled = false;
}

// Function to copy the signature to clipboard
async function copySignature() {
    const signatureBox = document.getElementById('signature-box');
    const signatureContent = signatureBox.querySelector('.signature-content');
    
    if (!signatureContent) {
        alert('Please generate a signature first.');
        return;
    }

    try {
        // Create a temporary container for the HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = signatureContent.outerHTML;
        
        // Remove any style elements that might interfere with email clients
        const styles = tempContainer.querySelectorAll('style');
        styles.forEach(style => style.remove());
        
        // Create a range and select the HTML content
        const range = document.createRange();
        range.selectNode(tempContainer);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        
        // Execute copy command
        const successful = document.execCommand('copy');
        
        if (successful) {
            // Show copy notification
            const notification = document.getElementById('copy-notification');
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        } else {
            // Fallback to Clipboard API if execCommand fails
            const htmlContent = tempContainer.innerHTML;
            const textContent = tempContainer.textContent || tempContainer.innerText || '';
            
            const clipboardItem = new ClipboardItem({
                'text/html': new Blob([htmlContent], { type: 'text/html' }),
                'text/plain': new Blob([textContent], { type: 'text/plain' })
            });
            
            await navigator.clipboard.write([clipboardItem]);
            
            // Show copy notification
            const notification = document.getElementById('copy-notification');
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
        
        // Clear selection
        window.getSelection().removeAllRanges();
    } catch (err) {
        console.error('Failed to copy signature: ', err);
        alert('Failed to copy signature. Please select and copy the signature manually.');
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
            this.value = 'http://' + this.value;
        }
    });
});