
let header = document.querySelector('.head')

window.onscroll = function () {
  if (window.pageYOffset > 130) {
    header.style.background = "rgba(0, 0, 0, 0.4)";
  }
  else if (window.scrollY < 130) {
    header.style.background = "rgba(0,0,0,0)";
  }
}


if (document.querySelector('#swiper-recall')) {
  let profileSlideOffset = (window.innerWidth - document.querySelector('#wrap').clientWidth) / 2
  const profileSlider = new Swiper('#swiper-recall', {
    speed: 400,
    direction: 'horizontal',
    slidesPerView: "auto",
    slidesOffsetBefore: profileSlideOffset,
    slidesOffsetAfter: profileSlideOffset,
    spaceBetween: 30,
  })
};






const modalOpen = document.querySelector('.footer-block__btn')

if (modalOpen)
  modalOpen.addEventListener('click', function () {
    modal.classList.add('activity')
    document.body.style.overflow = "hidden"
  })





let herobtn = document.querySelector('.hero-block__btn')
let modal = document.querySelector('.modal')
let exit = document.querySelector('.modal-block__exit')

if (herobtn) {
  herobtn.addEventListener('click', function () {
    modal.classList.add('activity')
    document.body.style.overflow = "hidden"
  })
}

if (exit) {
  exit.addEventListener('click', function () {
    modal.classList.remove('activity')
    document.body.style.overflow = "visible"
  })
}


let recallmodal = document.querySelector('.recallmodal')
let exitmodal = document.querySelector('.recallmodal-block__exit')
let openmodal = document.querySelectorAll('.recall-block__readmore')


if (openmodal)
  openmodal.forEach(function (entrys) {
    entrys.addEventListener('click', function () {
      recallmodal.classList.add('show')
      document.body.style.overflow = "hidden"
    });
  });


if (exitmodal) {
  exitmodal.addEventListener('click', function () {
    recallmodal.classList.remove('show')
    document.body.style.overflow = "visible"
  })
}

let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu')
let menublock = document.querySelector('.menu-block')

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.add('burgershow')
    menuBg.classList.toggle('active')
    document.body.style.overflow = "hidden"
  })
}

let modalServices = document.querySelector('.modalservices');
let modalServices1 = document.querySelector('.modalservices.v1');
let modalServices2 = document.querySelector('.modalservices.v2');
let modalServices3 = document.querySelector('.modalservices.v3');
let modalServices4 = document.querySelector('.modalservices.v4');
let modalServices5 = document.querySelector('.modalservices.v5');


let modalserv = document.querySelector('.services-block__item');
let modalserv1 = document.querySelector('.services-block__item.v1');
let modalserv2 = document.querySelector('.services-block__item.v2');
let modalserv3 = document.querySelector('.services-block__item.v3');
let modalserv4 = document.querySelector('.services-block__item.v4');
let modalserv5 = document.querySelector('.services-block__item.v5');

let modalServicesBtn = document.getElementById('modalbtn');
let modalServicesBtn1 = document.getElementById('modalbtn1');
let modalServicesBtn2 = document.getElementById('modalbtn2');
let modalServicesBtn3 = document.getElementById('modalbtn3');
let modalServicesBtn4 = document.getElementById('modalbtn4');
let modalServicesBtn5 = document.getElementById('modalbtn5');

modalserv.addEventListener('click', selectDate1);
modalServicesBtn.addEventListener('click', function(){
  modalServices.classList.remove('active');
});

function selectDate1(){
  modalServices.classList.add('active');
}
modalserv1.addEventListener('click', selectDate2);
modalServicesBtn1.addEventListener('click', function(){
  modalServices1.classList.remove('active');
});

function selectDate2(){
  modalServices1.classList.add('active');
}
modalserv2.addEventListener('click', selectDate3);
modalServicesBtn2.addEventListener('click', function(){
  modalServices2.classList.remove('active');
});

function selectDate3(){
  modalServices2.classList.add('active');
}
modalserv3.addEventListener('click', selectDate4);
modalServicesBtn3.addEventListener('click', function(){
  modalServices3.classList.remove('active');
});

function selectDate4(){
  modalServices3.classList.add('active');
}
modalserv4.addEventListener('click', selectDate5);
modalServicesBtn4.addEventListener('click', function(){
  modalServices4.classList.remove('active');
});

function selectDate5(){
  modalServices4.classList.add('active');
}
modalserv5.addEventListener('click', selectDate6);
modalServicesBtn5.addEventListener('click', function(){
  modalServices5.classList.remove('active');
});

function selectDate6(){
  modalServices5.classList.add('active');
}
// function selectDate2(){
//   if(this.classList.contains('disabled')){
//     modalServices1.classList.remove('active');
//   }else {
//     modalServices1.classList.add('active');
//   }
// }
// function selectDate3(){
//   if(this.classList.contains('disabled')){
//     modalServices2.classList.remove('active');
//   }else {
//     modalServices2.classList.add('active');
//   }
// }
// function selectDate4(){
//   if(this.classList.contains('disabled')){
//     modalServices3.classList.remove('active');
//   }else {
//     modalServices3.classList.add('active');
//   }
// }
// function selectDate5(){
//   if(this.classList.contains('disabled')){
//     modalServices4.classList.remove('active');
//   }else {
//     modalServices4.classList.add('active');
//   }
// }
// function selectDate6(){
//   if(this.classList.contains('disabled')){
//     modalServices5.classList.remove('active');
//   }else {
//     modalServices5.classList.add('active');
//   }
// }








let SuccessModalV2 = document.querySelector('.modalform.v2');
let SuccessModalOpenV2 = document.querySelector('.form-block__buttons')
let SuccessModal = document.querySelector('.modalform');
let SuccessModalOpen = document.querySelector('.form-block__button');
SuccessModalOpen.addEventListener('click', selectDate);
SuccessModalOpenV2.addEventListener('click',selectDateV2)


function selectDateV2(){
  if(this.classList.contains('disabled')){
    SuccessModalV2.classList.remove('active');
}else {
    SuccessModalV2.classList.add('active');
}
}

function selectDate(){
  if(this.classList.contains('disabled')){
      SuccessModal.classList.remove('active');
  }else {
      SuccessModal.classList.add('active');
  }
}

const hideMenu = document.querySelector('.menu-block')
const menuBg = document.querySelector('.menu-bg')
document.addEventListener('click', (e) => {
  if (e.target === menuBg) {
    menu.classList.remove('burgershow')
    menuBg.classList.remove('active')
    document.body.style.overflow = "auto"
  }
})


//Валидация
$("#cphone").mask("+7 (000) 000-00-00");

$.validator.addMethod("pwcheckallowedchars", function (value) {
  return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value)
}, "Недопустимое значение");

$('.form-block__action').validate({
  rules: {
    cname: {
      required: true,
      minlength: 2,
      pwcheckallowedchars: true
    },
    cemail: {
      required: true,
      email: true
    },
    cphone: {
      required: true,
      minlength: 18
    },
    area: {
      required: true,
      maxlength: 10000
    }
  },
  messages: {
    cname: {
      required: 'Поле не заполнено',
      minlength: 'Минимум 2 символа'
    },
    cemail: {
      required: 'Поле не заполнено',
      email: 'Введите правильный email'
    },
    cphone: {
      required: 'Поле не заполнено',
      minlength: 'Введите номер полностью'
    },
    area: {
      required: 'Поле не заполнено',
      minlength: 'Минимум 10 символов',
      maxlength: 'Максимум 10000 символов'
    }
  },
  onkeyup: function (element) {
    let submit = document.querySelector('#form-block__action .form-block__button')

    if ($('#form-block__action').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },
});


$("#iphone").mask("+7 (000) 000-00-00");

$.validator.addMethod("pwcheckallowedchars", function (value) {
  return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value)
}, "Недопустимое значение");

$('.form-block__actions').validate({
  rules: {
    cname: {
      required: true,
      minlength: 2,
      pwcheckallowedchars: true
    },
    cemail: {
      required: true,
      email: true
    },
    cphone: {
      required: true,
      minlength: 18
    },
    area: {
      required: true,
      maxlength: 10000
    }
  },
  messages: {
    cname: {
      required: 'Поле не заполнено',
      minlength: 'Минимум 2 символа'
    },
    cemail: {
      required: 'Поле не заполнено',
      email: 'Введите правильный email'
    },
    cphone: {
      required: 'Поле не заполнено',
      minlength: 'Введите номер полностью'
    },
    area: {
      required: 'Поле не заполнено',
      minlength: 'Минимум 10 символов',
      maxlength: 'Максимум 10000 символов'
    }
  },
  onkeyup: function (element) {
    let submit = document.querySelector('#form-block__actions .form-block__buttons')

    if ($('#form-block__actions').validate().checkForm()) {
      submit.classList.remove('disabled')
    } else {
      submit.classList.add('disabled')
    }
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];
    if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
      return;
    } else if (element.name in this.submitted || element.name in this.invalid) {
      this.element(element);
    }
  },
});