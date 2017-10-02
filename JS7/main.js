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
    if (this.value.length==0) {
      this.style.border = "2px solid red";
      let z = $(this).siblings("span");
      z.html(" Заполните");
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


$("#check1:radio").on("change", function(){
  $(".inp1").attr('class', 'inp');
  $(".inp:even").attr('class', 'inp1');


 });

$("#check2:radio").on("change", function(){
    $(".inp1").attr('class', 'inp');
  $(".inp:odd").attr('class', 'inp1');
});



$("#check3:radio").on("change", function(){
    $(".inp1").attr('class', 'inp'); });
