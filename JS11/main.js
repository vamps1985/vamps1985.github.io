$("document").ready(function() {

$(".but3").on("click", function() {
  $("#les3_1").hide();
  let name = $(this).attr("name");

  localStorage.setItem("accept", name);

});

if ((localStorage.getItem('accept')==null)||(localStorage.getItem('accept')=="no")) {
  console.log(localStorage.getItem('accept'));
  setTimeout(func, 4000);
  function func() {
  let z = $("#les3_1").show();
}
}
  $('link').attr('href', '');
  if (localStorage["style"]) {
    var foo = localStorage["style"];
    $("head").append($("<link rel='stylesheet' href=" + foo + " type='text/css' media='screen' />"));

  } else {
  }
  if (window.localStorage) {
    console.log("Підтримує");
  } else {
    console.log("Не підтримує");
  }

$("#les3").bind("click", function() {
  let mass = ["vasya","40" , "kiev"," abrakadabra"];
  for (var i in mass) {
    localStorage.setItem(i, mass[i]);

  }
});

$(".style").on("change", function() {
  let check = $(".style");
  for (var i = 0; i < check.length; i++) {
    if ($(check[i]).prop('checked')) {
      let a = $('input[name=style]:checked').val();
      let lk = ("style" + a + ".css");
      $('link').attr('href', '');
      $("head").append($("<link rel='stylesheet' href=" + lk + " type='text/css' media='screen' />"));
      localStorage.setItem('style', "style" + a + ".css");
    }
  }
});

$("#les5").bind("click", function() {
  let ul = $("#les5_1");
  let local = localStorage;
$("#les5_1").empty();
  for (var key in local) {
    let les6_1 = $('<li>', {
      html: (key + ": " + local[key])
    }).appendTo(ul);

  }


})








});
