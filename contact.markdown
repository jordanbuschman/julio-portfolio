---
layout: page
title: Contact
permalink: /contact/
---

<link rel="stylesheet" href="{{ '/assets/css/contact.css' | relative_url }}">

<div class="page-content">
  <form id="contact-form">
    <label for="subject">Subject</label>
    <input type="text" name="subject" required>

    <label for="email">Email</label>
    <input type="email" name="email" required>

    <label for="message">Message</label>
    <textarea name="message" rows="6" required></textarea>

    <input type="submit" value="Send">
  </form>
</div>

<script src="https://www.google.com/recaptcha/api.js?render=6LeF_FcrAAAAAKgzqzmP6gykaXlf5Y4Y_LOi9Bq5"></script>
<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>