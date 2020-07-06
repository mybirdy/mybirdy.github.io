console.log(`%c  MYBIRDY TECHNOLOGIES
\t  .--.
\t  ( @ >
\t  _) (
\t /    )
\t/_,'  / 
\t  /  / 
\t===m""m===  
`,"font-family:monospace");

import Bound from 'bounds.js';

const boundary = Bound({
    margins:{top: 0}
})
    
const image = document.querySelectorAll('[data-src]');
/* Lazy loading Images */
const enter = (image) =>{
    return() =>{
        image.src = image.dataset.src;
        boundary.unWatch(image);
    }
}
image.forEach(img=>{
    boundary.watch(img,enter(img));
})

