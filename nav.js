// nav.js — highlight active nav item based on current filename
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();
