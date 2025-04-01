import React from 'react';
import Head from 'next/head';

export default function Home() {
return (
<div className='container'>
<Head>
<title>Home Page</title>
<meta name='description' content='Generated Home Page' />
</Head>
<nav>
<ul>
<li><a href='/'>Home</a></li>
<li><a href='/about'>About</a></li>
<li><a href='/contact'>Contact</a></li>
</ul>
</nav>
<div className='search-bar'>
<input type='text' placeholder='Search...' />
</div>
<footer>
<p>© 2025 AI Generated Company</p>
</footer>
</div>
);
}

const containerStyle = {
maxWidth: '1200px',
margin: '0 auto',
padding: '50px',
boxSizing: 'border-box',
};

const ulStyle = {
display: 'flex',
justifyContent: 'space-between'
};

const inputStyle = {
padding: '10px 20px',
borderRadius: '20px',
border: '2px solid #ccc',
margin: '30px auto',
display: 'block',
width: '80%',
};