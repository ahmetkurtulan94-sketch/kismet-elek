function openProduct(name){
  document.getElementById('modal-title').textContent=name;
  document.getElementById('modal').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeProduct(e){
  if(!e || e.target.id==='modal' || e.target.classList.contains('close')){
    document.getElementById('modal').classList.remove('show');
    document.body.style.overflow='';
  }
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct();});
