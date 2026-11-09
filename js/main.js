"use strict";
const pets = [
 {name:'Bella',type:'dog',age:2,trait:'Playful and energetic',image:'images/gallery-dog.svg'},
 {name:'Charlie',type:'dog',age:5,trait:'Calm and friendly',image:'images/gallery-dog.svg'},
 {name:'Luna',type:'cat',age:1,trait:'Curious and affectionate',image:'images/gallery-cat.svg'},
 {name:'Milo',type:'cat',age:3,trait:'Gentle and independent',image:'images/gallery-cat.svg'}
];
const petList=document.querySelector('#pet-list');
if(petList){
 const search=document.querySelector('#pet-search'), type=document.querySelector('#pet-type'), sort=document.querySelector('#pet-sort'),count=document.querySelector('#pet-count');
 function render(){
  const q=search.value.trim().toLowerCase();
  const results=pets.filter(p=>(type.value==='all'||p.type===type.value)&&[p.name,p.trait,p.type].join(' ').toLowerCase().includes(q)).sort((a,b)=>sort.value==='age'?a.age-b.age:a.name.localeCompare(b.name));
  petList.replaceChildren();
  for(const pet of results){const card=document.createElement('article');card.className='pet-card';const img=document.createElement('img');img.src=pet.image;img.alt=`Illustration representing ${pet.name}, a ${pet.type}`;img.loading='lazy';const heading=document.createElement('h3');heading.textContent=pet.name;const info=document.createElement('p');info.textContent=`${pet.type==='dog'?'Dog':'Cat'} · ${pet.age} ${pet.age===1?'year':'years'} · ${pet.trait}`;const link=document.createElement('a');link.href='enquiry.html';link.textContent='Ask about adoption';card.append(img,heading,info,link);petList.append(card)}
  count.textContent=`${results.length} example ${results.length===1?'profile':'profiles'} found.`;
 }
 [search,type,sort].forEach(el=>el.addEventListener(el===search?'input':'change',render));render();
}
const dialog=document.querySelector('#gallery-dialog');
if(dialog){document.querySelectorAll('.gallery-item').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('#gallery-large');img.src=button.dataset.full;img.alt=button.querySelector('img').alt;document.querySelector('#gallery-caption').textContent=button.dataset.caption;dialog.showModal()}));document.querySelector('#gallery-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()})}
const hours=document.querySelector('#support-hours');
if(hours)hours.addEventListener('input',()=>{const n=Number(hours.value);document.querySelector('#hours-preview').textContent=hours.value!==''&&hours.validity.valid?`That is approximately ${n*12} volunteer hours per year (estimate).`:''});
for(const form of document.querySelectorAll('#enquiry-form,#contact-form')){
 const status=form.querySelector('.form-status');
 const controls=[...form.querySelectorAll('input:not([type=hidden]),select,textarea')];
 function validate(control){const error=document.getElementById(`${control.id}-error`);const valid=control.checkValidity();const message=valid?'':control.validity.valueMissing?'Please complete this field.':control.validity.typeMismatch?'Please enter a valid email address.':control.validity.patternMismatch?'Please use a valid phone number (7–20 permitted characters).':control.validity.tooShort?'Please provide more detail.':control.validity.rangeOverflow||control.validity.rangeUnderflow?'Please enter a number within the allowed range.':'Please check this value.';if(error)error.textContent=message;control.setAttribute('aria-invalid',String(!valid));return valid}
 controls.forEach(c=>{c.addEventListener('blur',()=>validate(c));c.addEventListener('input',()=>{if(c.getAttribute('aria-invalid')==='true')validate(c)})});
 form.addEventListener('submit',async e=>{
  e.preventDefault();status.textContent='';const invalid=controls.filter(c=>!validate(c));if(invalid.length){status.textContent='Please correct the highlighted fields before submitting.';invalid[0].focus();return}
  const data=new FormData(form);
  const isNetlify=location.hostname.endsWith('.netlify.app')||location.hostname.endsWith('.netlify.com');
  if(isNetlify){status.textContent='Sending your message…';try{const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data).toString()});if(!response.ok)throw Error('Submission unsuccessful');status.textContent='Thank you. Your message was submitted successfully.';form.reset();controls.forEach(c=>c.removeAttribute('aria-invalid'));}catch(error){status.textContent='The message could not be sent. Please try again or contact the shelter directly.';}return}
  const subject=form.id==='enquiry-form'?'Paws & Claws enquiry':'Paws & Claws contact message';
  const lines=[...data.entries()].filter(([key])=>key!=='form-name').map(([key,value])=>`${key}: ${value}`);
  const recipient=''; // Add the verified organisation email address before using mailto fallback.
  const uri=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  status.textContent='Your email application will open. Add the organisation’s verified recipient address and press Send. The website has not sent your message.';
  window.location.href=uri;
 });
}

// Responsive accessible navigation and resilient externally hosted illustrative photographs.
const menuToggle=document.querySelector('.menu-toggle');
if(menuToggle){const navigation=document.querySelector('#main-navigation');menuToggle.addEventListener('click',()=>{const expanded=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('is-open',!expanded)});navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('img[data-fallback]').forEach(img=>img.addEventListener('error',()=>{if(img.src!==new URL(img.dataset.fallback,document.baseURI).href){img.src=img.dataset.fallback;img.alt+=' (illustration fallback)'}}));
