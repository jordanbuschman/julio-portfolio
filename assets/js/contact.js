document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6Lc7hlErAAAAANQt85l8stsz4FBU4PY6YAqp8THE', { action: 'LOGIN' });

        const form = event.target;
        const formData = new FormData(form);
        formData.append('token', token);

        let payload = {};
        formData.forEach((value, key) => {
            payload[key] = value;
        });
 
        const response = await fetch('https://api.julionunesmd.com/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    });
});