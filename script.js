let form = document.querySelector('.js-form'),
    input = document.querySelectorAll('.js-input'),
    email = document.querySelector('.js-input-email'),
    phone = document.querySelector('.js-input-number'),
    select = document.querySelector('.js-select'),
    checkbox = document.querySelector('.js-input-checkbox'),
    checkboxLable = document.querySelector('.js-input-checkbox-lable'),
    modal = document.querySelector('.js-modal');

const mask = new IMask (phone, {
  mask: '+7(000)000-00-00',
  lazy: false
});

function validateEmail (email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    
form.onsubmit = function (event) {
  event.preventDefault();
  let emailVal = email.value,
      phoneVal = phone.value;
      emptyInputs = Array.from(input).filter(input => input.value ==='');

  input.forEach(function (input) {
    if ((input.value === '')) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  })

  if (phoneVal === '+7(___)___-__-__') {
    phone.classList.add('error');
    return false;
  } else {
    phone.classList.remove('error');
  }

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (!validateEmail(emailVal)) {
    email.classList.add('error');
    return false;
  } else {
    email.classList.remove('error');
  }

  if (select.value === '0') {
    select.classList.add('error');
    return false;
  } else {
    select.classList.remove('error');
  }

  if(!checkbox.checked) {
    checkboxLable.classList.add('error');
    return false;
  } else {
    checkboxLable.classList.remove('error')
    modal.classList.add('modal--active');
  }
  event.target.reset();

  modal.addEventListener("click", function() {
      modal.classList.remove('modal--active');
    }
  );
}


// При наличии серверной части при помощи jQuery и Ajax мы могли бы отправиль форму и получить ответ от сервера не перезагружая страницу


// $.ajax({
//         url:     url, //путь на файл серверной части
//         type:     "POST", //метод отправки
//         data: $(form).serialize(),  // преобразуем в 1 строку 
//         success: function(response) { //если все хорошо и форма отпрвлена делай это:
//              modal.classList.add('modal--active');
//              $(form)[0].reset();
//         },
//         error: function(response) { // если все плохо и форма не отправлена делай это:
// 
// 
//         }
//      });

// Так же валидировать можно было при помощи плагина jQuery Validation Plugin. Но тогда нужно было бы подгрузить еще 1 файл. А через cdn по какой то причине у меня не отрабатывал.