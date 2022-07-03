'use strict';
// ページスクロールアニメーション
$(function (){
  $(function(){
    $('.sentence-btn,.gallery-btn,.profile-btn,.map-btn,.contact-btn').click(function(){
      let jumping = $(this).attr('href');
      let landing = $(jumping).offset().top;
      $('html,body').animate({
        'scrollTop': landing
      },500);
    });
  });
  $('.page-top-btn').click(function(){
    $('html,body').animate({
      'scrollTop':0
    },'slow');
  });
});
// モーダルアニメーション
{
  const open = document.getElementById("note-modal-open");
  const closeOne = document.getElementById("modal-close-icon");
  const closeTwo = document.getElementById("note-modal-close");
  const container = document.getElementById("modal");
  open.addEventListener("click",() => {
    container.style.display = "block";
  });
  closeOne.addEventListener("click",() => {
    container.style.display = "none";
  });
  closeTwo.addEventListener("click",() => {
    container.style.display = "none";
  });
  document.addEventListener("click", (e) => {
    if (e.target === modal){
      modal.style.display = "none";
    };
  });
}
{
  const profile = document.querySelector('.profile');
  const pfContent = document.querySelectorAll('pf-content');
  window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    // console.log(profile.offsetTop);
    if(window.pageYOffset >= profile.offsetTop){
      pfContent.classList.add('active');
    }
  });
  
}


