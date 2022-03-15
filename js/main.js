'use strict';

{
  const open = document.getElementById('open');
  const nav = document.querySelector('.nav');

  open.addEventListener('click', function(){
    nav.classList.toggle('show');
  });
}