$("#addfield").click(function(event) {
  addfield();
  return false;

})

function addfield() {
  let div = $("<div/>",{
  class: 'DynamicExtraField')}.appendTo(div);
  var br = $('<br/>').appendTo(div);
  $('#addField').click(function(event) {
    addfield();
    return false;
 });
 
