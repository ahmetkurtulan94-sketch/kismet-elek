function openProduct(name){const t=document.getElementById('modal-title');const m=document.getElementById('modal');if(t&&m){t.textContent=name;m.classList.add('show');document.body.style.overflow='hidden'}}
function closeProduct(e){const m=document.getElementById('modal');if(!m)return;if(!e||e.target.id==='modal'||e.target.classList.contains('close')){m.classList.remove('show');document.body.style.overflow=''}}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct()});
const q=document.getElementById('quoteForm');if(q){q.addEventListener('submit',e=>{e.preventDefault();const msg=`Merhaba, Kısmet Elek için teklif almak istiyorum.\n\nAd Soyad: ${document.getElementById('qname').value}\nTelefon: ${document.getElementById('qphone').value}\nÜrün: ${document.getElementById('qproduct').value}\nÖlçü/Adet: ${document.getElementById('qsize').value}\nNot: ${document.getElementById('qnote').value}`;window.open('https://wa.me/905469228020?text='+encodeURIComponent(msg),'_blank')})}
const menu=document.querySelector('.menu');if(menu){menu.addEventListener('click',()=>{let n=document.querySelector('nav');if(n){n.style.display=n.style.display==='flex'?'none':'flex';n.style.flexDirection='column';n.style.position='absolute';n.style.top='82px';n.style.left='0';n.style.right='0';n.style.padding='18px 5%';n.style.background='#241b15';n.style.zIndex='20'}})}

/* FINAL fixed WhatsApp */
document.addEventListener('DOMContentLoaded', function(){
  if (!document.querySelector('.whatsapp-fixed')) {
    const a=document.createElement('a');
    a.className='whatsapp-fixed';
    a.href='https://wa.me/905469228020';
    a.target='_blank';
    a.rel='noopener';
    a.textContent='WhatsApp';
    document.body.appendChild(a);
  }
});
