
$(document).ready(function() {
  $("#les1").bind("click", function() {
    let a = prompt("Введите первое число");
    let b = prompt("Введите второе число");
    $.ajax ({
      type: "POST",
      url: "a1.php",
      data: ({num1: a, num2: b }),
      dataType: "html",
      success: function(data) {
        alert(data);
      }
    });
  });

$("#les2").click(function() {
  let input = $("#year").val();
  if ((input!= "")&&($("#year").val()>1900)&&($("#year").val()<2017)) {
    console.log(input);
    $.ajax ({
      type: "POST",
      url: "a2.php",
      data: ({year: input}),
      dataType: "html",
      success: fn2
    });
  }
  else {
    $("#rez2").html("Вы неверно ввели год рождения");
  }
});
function fn2(data) {
  $("#rez2").html(data);
}
});
$("#les3").click(function() {
  let sex1 = $(".sex");
  for (var i = 0; i < sex1.length; i++) {
    if (sex1[i].checked) {
      let input = $("#h").val();
      let sex = $(sex1[i]).attr("id");
      console.log(sex);
      $.ajax ({
        type: "POST",
        url: "a3.php",
        data: ({height:input, sex: sex}),
        dataType: "html",
        success: function(data) {
          $("#rez3").html(data );
        }
      });
    }
  }
});
function fn1() {
  $("#h").attr("value", $("#rh").val());
}
$("#sendMail").on("click", function() {
  let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  if (($("#fio").val()!="")&&(pattern.test($('#email').val()))&&($("#phone").val()!=""))
 {
   $.ajax ({
     type: "POST",
     url: "mail.php",
     data: ({fio: $("#fio").val(), email: $('#email').val(), phone: $("#phone").val() }),
     dataType: "html",
     success: function(data) {
       alert(data);
     }
   });
  } else {
     alert("Вы неверно заполнили поля");
  }
});
  $(".les6").bind("change", function() {
  $.get("goods.php", {art: $("select[name='art']").val()}, function(data) {
    data = JSON.parse(data);
    let les6 = $("#les6");
    les6.empty();
    for (let id in data) {
      let les6_1 = $('<li>', {
        html: (id + " " + data[id])
      }).appendTo(les6);
    }
  }
);
});
