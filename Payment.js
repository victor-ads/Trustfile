// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Validate the form fields
            const amount = document.getElementById('amount').value;
            const paymentMethod = document.getElementById('payment-method').value;
            const terms = document.getElementById('terms').checked;

            if (amount <= 0) {
                alert('Amount must be greater than zero.');
                return;
            }

            if (!paymentMethod) {
                alert('Please select a payment method.');
                return;
            }

            if (!terms) {
                alert('Please agree to the terms and conditions.');
                return;
            }

            // For demonstration, redirect to Paystack payment URL
            if (paymentMethod === 'paystack') {
                const uniqueCompanyPaymentUrl = 'https://example.com/paystack-payment-url'; // Replace with actual company payment URL
                window.location.href = uniqueCompanyPaymentUrl;
            }

            // Your submit handling code here
            console.log('Form submitted!');
        });
    }
});
