'use strict';
(() => {
 const config=window.PORTFOLIO_PROFILE || {};
 function safeUrl(raw){if(typeof raw!=='string'||!raw.trim())return '';try{const u=new URL(raw,document.baseURI);return ['http:','https:'].includes(u.protocol)||(u.protocol==='file:'&&!/^[a-z][a-z0-9+.-]*:/i.test(raw)&&!raw.startsWith('//'))?u.href:'';}catch{return '';}}
 function loadImage(id,url,fallback,position){const image=document.getElementById(id);if(!image)return;const initial=document.getElementById('profile-initials');const source=safeUrl(url);let triedFallback=false;image.referrerPolicy='no-referrer';if(position&&CSS.supports('object-position',position))image.style.objectPosition=position;image.onerror=()=>{if(!triedFallback){triedFallback=true;image.src=fallback;}else{image.hidden=true;if(id==='profile-photo')initial.hidden=false;}};image.onload=()=>{image.hidden=false;if(id==='profile-photo')initial.hidden=true;};image.src=source||fallback;}
 loadImage('profile-photo',config.imageUrl,'assets/fotoprofil.jpg',config.objectPosition);
 loadImage('hero-background',config.backgroundUrl,'assets/latar-griselda.jpg',config.backgroundPosition);
 const photo=document.getElementById('profile-photo');if(photo&&typeof config.imageAlt==='string')photo.alt=config.imageAlt;
 const layer=document.querySelector('.petal-layer');for(let i=0;i<14;i++){const petal=document.createElement('i');petal.className='petal';petal.style.setProperty('--left',`${(i*29)%100}%`);petal.style.setProperty('--duration',`${14+i%7*2}s`);petal.style.setProperty('--delay',`${-i*2.7}s`);layer.append(petal);}
 const pause=document.querySelector('.motion-toggle');pause.hidden=false;pause.addEventListener('click',()=>{const paused=document.body.classList.toggle('is-paused');pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'▷ Putar animasi':'Ⅱ Jeda animasi';});
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal-in');observer.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.biodata,.project,.school-path article,.skill').forEach(el=>observer.observe(el));}
})();
