import React from 'react';
import Head from 'next/head';

export default function Contact() {
return (
<div>
<Head>
<title>Contact Us</title>
<meta name='description' content='Get in touch with us' />
</Head>
<h1>Contact Us</h1>
<p>Please use the form below to contact us.</p>
<form>
<input type='text' placeholder='Your name' />
<input type='email' placeholder='Your email' />
<textarea placeholder='Your message'></textarea>
<button type='submit'>Send</button>
</form>
</div>
);
}