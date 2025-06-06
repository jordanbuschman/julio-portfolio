const SITE_KEY = '6LeF_FcrAAAAAKgzqzmP6gykaXlf5Y4Y_LOi9Bq5';

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const screen = document.getElementsByClassName('screen')[0];
    screen.classList.remove('hidden')

    grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(SITE_KEY, { action: 'LOGIN' });

        const form = event.target;
        const formData = new FormData(form);
        formData.append('token', token);

        let payload = {};
        formData.forEach((value, key) => {
            payload[key] = value;
        });
 
        // TODO: try / catch
        const response = await fetch('https://api.julionunesmd.com/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        screen.classList.add('hidden');
    });
});