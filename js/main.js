(function(){
  var b=document.getElementById('menuBtn'),n=document.getElementById('nav');
  b.addEventListener('click',function(){var o=n.classList.toggle('aberto');b.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('aberto');b.setAttribute('aria-expanded',false)}});
  var r=document.documentElement;
  try{var s=localStorage.getItem('tema');if(s)r.setAttribute('data-tema',s)}catch(e){}
  document.getElementById('tema').addEventListener('click',function(){
    var escuro=r.getAttribute('data-tema')==='escuro'||(!r.getAttribute('data-tema')&&!matchMedia('(prefers-color-scheme: light)').matches);
    var novo=escuro?'claro':'escuro';r.setAttribute('data-tema',novo);
    try{localStorage.setItem('tema',novo)}catch(e){}
  });
  document.getElementById('ano').textContent=new Date().getFullYear();
})();
