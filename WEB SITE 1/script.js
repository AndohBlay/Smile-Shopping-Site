document.addEventListener('DOMContentLoaded', ()=>{

  let serachform = document.querySelector('.serach-form');
  document.querySelector('#search-btn').onclick = ()=>{
    serachform.classList.toggle('active');
  }


  let navbar = document.querySelector('.navbar');
  document.querySelector('#menu-btn');

  navbar.classList.toggle('show');

});

