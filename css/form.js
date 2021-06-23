'use strict';

(function() {
  var link = document.querySelector('.contacts-info-button');
  var popup = document.querySelector('.feedback-form');
  var overlay = document.querySelector('.feedback-form-overlay');
  var close = popup.querySelector('.feedback-form-close');
  var form = popup.querySelector('form');
  var username = popup.querySelector('[name=username]');
  var email = popup.querySelector('[name=email]');
  var comment = popup.querySelector('[name=comment]');
  var storage_user = localStorage.getItem('username');
  var storage_email = localStorage.getItem('email');

  link.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.add('feedback-form-show');
    overlay.classList.add('feedback-form-overlay-show');

    if(storage_user && storage_email) {
      username.value = storage_user;
      email.value = storage_email;
      comment.focus();
      } else {
        username.focus();
      }
  });

  close.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.remove('feedback-form-show');
    popup.classList.remove('feedback-form-error');
    overlay.classList.remove('feedback-form-overlay-show');
  });

  form.addEventListener('submit', function(evt){
    if (!username.value || !email.value || !comment.value) {
        evt.preventDefault();
        popup.classList.remove('feedback-form-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('feedback-form-error');
    } else {
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
    }
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('feedback-form-show')) {
          popup.classList.remove('feedback-form-show');
          popup.classList.remove('feedback-form-error');
          overlay.classList.remove('feedback-form-overlay-show');
        }
    }
  });

  overlay.addEventListener('click', function() {
    if (popup.classList.contains('feedback-form-show')) {
        popup.classList.remove('feedback-form-show');
        popup.classList.remove('feedback-form-error');
        overlay.classList.remove('feedback-form-overlay-show');
    }
  });
}());