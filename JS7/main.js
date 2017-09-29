$('#addDynamicExtraFieldButton').click(function(event) {
    addDynamicExtraField();
    return false;
 });
function addDynamicExtraField() {
    var div = $('<div/>', {
        'class' : 'DynamicExtraField'
    }).appendTo($('#DynamicExtraFieldsContainer'));
    var br = $('<br/>').appendTo(div);

    var textarea = $('<input/>', {
        name : 'DynamicExtraField[]',
        'class' : 'inp'
    }).appendTo(div);
    var input = $('<input/>', {
        value : '-',
        type : 'button',
        'class' : 'DeleteDynamicExtraField'
    }).appendTo(div);
    input.click(function() {
        $(this).parent().remove();
    });
}

$("#getInf").click(function(event) {
  var list = $(".inp").value;
  console.log(list);

    return false;
 });
 var listv = [];
list = $("#getInf").val;
console.log(list);
