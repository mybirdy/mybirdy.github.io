console.log(`%c  MYBIRDY TECHNOLOGIES
\t  .--.
\t  ( @ >
\t  _) (
\t /    )
\t/_,'  / 
\t  /  / 
\t===m""m===  
`,"font-family:monospace");

import AOS from 'aos';

AOS.init();

/* Simple Loading */
let loadingContainer = document.getElementById('loadingContainerId');
let body = document.querySelector('body');
window.addEventListener('load',()=>{
    loadingContainer.style.opacity = 0;
    body.style.overflow = 'visible';
    loadingContainer.style.zIndex = -1;
})