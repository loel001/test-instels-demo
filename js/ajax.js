const getError = function () {
  $('.popup__wrap').addClass('popup__wrap--error');
  setTimeout(function() {
    $('.popup__wrap').removeClass('popup__wrap--error');
  }, 1000);
};

const errorHandler = function (errorMessage) {
  if ($("div").is(".error")) {
    document.querySelector("body").removeChild(document.querySelector(".error"));
  }
  const node = $("<div/>").text(errorMessage);
  node.addClass('error');
  $('body').append(node);
  getError();
};

const successHandler = function () {
  $('.popup__wrapper').addClass('hide');
  $('.popup__sending').addClass('show');
};

$('.popup form').submit(function(e) {
  e.preventDefault();
  const arr = $(".popup form input"), obj = {};
  $.each(arr, function(index, el){
    obj[el.name] ? obj[el.name].push(el.value) : (obj[el.name] = el.value);
  });

  const request = $.ajax({
    url: "#",
    type: 'POST',
    data: JSON.stringify(obj),
    contentType: 'application/json',
    async: false,
    dataType: 'JSON',
  });
  request.done(function() {
    successHandler();
  });
  request.fail(function(jqXHR, textStatus) {
    errorHandler(textStatus);
  });

});
