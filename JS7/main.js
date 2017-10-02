$('#addDynamicExtraFieldButton').click(function(event) {
  addDynamicExtraField();
  return false;
});

function addDynamicExtraField() {
  var div = $('<div/>', {
    'class': 'DynamicExtraField'
  }).appendTo($('#DynamicExtraFieldsContainer'));
  var br = $('<br/>').appendTo(div);
  var textarea = $('<input/>', {
    name: 'DynamicExtraField[]',
    'class': 'inp'
  }).appendTo(div);
  var input = $('<input/>', {
    value: '-',
    type: 'button',
    'class': 'DeleteDynamicExtraField'
  }).appendTo(div);

  var zero = $('<span/>', {
    html: '',
    type: 'text',
    'class': 'notinfo'
  }).appendTo(div);

  input.click(function() {
    $(this).parent().remove();
  });
};
$("#getInf").click(function(event) {

  $.each($('.inp'), function() {
    if (this.value.length == 0) {
      this.style.border = "2px solid red";
      let z = $(this).siblings("span");
      z.html(" Заполните поле");
    } else {
      this.style.border = "";
      $(this).siblings("span").html("");
    }
  });
  let values = [];
  $.each($('.inp'), function() {
    if (this.value.length > 0) {
      values += this.value + " ";
    }
  });
  $("#rez").val(values);
});


$("#check1:radio").on("change", function() {
  $(".inp1").attr('class', 'inp');
  $(".inp:even").attr('class', 'inp1');
});
$("#check2:radio").on("change", function() {
  $(".inp1").attr('class', 'inp');
  $(".inp:odd").attr('class', 'inp1');
});

$("#check3:radio").on("change", function() {
  $(".inp1").attr('class', 'inp');
});
$("#but4").click(function(event) {
  $("#les4 span").html("");
  $(".les4-1").css("display", "block");
});
$("#op1").click(function(event) {
  $("#les4 span").html("");
  $(".les4-1").css("display", "none");
  $("#les4 span").html("Вы выбрали опцию 1");
});
$("#op2").click(function(event) {
  $("#les4 span").html("");
  $(".les4-1").css("display", "none");
  $("#les4 span").html("Вы выбрали опцию 2");
});

$("#but5").click(function addSpisok() {
  var jq = $('#les5-1').val();
  let newLi = $('<li"> ' + jq + ' </li>').on("click", function() {
    let font = this.style.background;
    $(this).css("cursor", "pointer");
    if (font == "") {
      $(this).css("background", "#F2190A");
    } else {
      $(this).css("background", "");
    };
  });

  $('#les5').append(newLi);
  $('#les5-1').val('');
})

$("#les5  li").click(function fn4() {
  let font = this.style.background;
  if (font == "") {
    $(this).css("background", "#F2190A");
  } else {
    $(this).css("background", "");
  }
});
