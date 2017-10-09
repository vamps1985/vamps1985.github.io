




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
    'class': 'inp'
  }).appendTo(div);
  var del = $('<input/>', {
    value: '-',
    type: 'button',
    'class': 'DeleteDynamicExtraField'
  }).appendTo(div);
  var zero = $('<span/>', {
    html: '',
    type: 'text',
    'class': 'notinfo'
  }).appendTo(div);

  del.click(function() {
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
  $(".les4-1").show(500);
});

$("#op1").click(function(event) {
  $("#les4 span").html("");
  $(".les4-1").hide(500);
  $("#les4 span").html("Вы выбрали опцию 1");
});
$("#op2").click(function(event) {
  $("#les4 span").html("");
    $(".les4-1").hide(500);
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

$(".les6").mouseenter(function() {
  $(".les6-1").show(1000);
}).mouseleave(function() {
  $(".les6-1").hide(1000);
})
$("img").mouseenter(function() {
  $("img").removeClass("img1");
  let les7 = $(this).attr("src");
  let les7_1 = $(this).attr("alt");
  if (les7_1 == "") {
    $(".rez6").html("нет атрибута alt");
    $(".rez6").css("color", "red");
    $(this).addClass("img1");
  } else {
    $("img").removeClass("img1");
    $(".rez6").css("color", "");
    $(".rez6").html("url=" + les7 + " " + "alt=" + les7_1);
  }
})

$("a").mouseenter(function() {
  let les7 = $(this).attr("title");
  let les7_1 = $(this).attr("target");
  if ((les7_1 == "") || (les7 == "") || (!les7) || (!les7_1)) {
    $(".rez6").html("нет атрибута target или title");
    $(".rez6").css("color", "red");
  } else {
    $(".rez6").css("color", "");
    $(".rez6").html("title=" + les7 + " " + "target=" + les7_1);
  }
})

$("#les9-1").click(function() {
  for (var i = 1; i < 7; i++) {
    let len = $("h" + i).length;
    if (len > 0) {
      let div = $("#les9")
      var br = $('<br/>').appendTo(div);
      let h1 = $('<span/>', {
        html: ("тегов h" + i + " = " + len),
        'class': 'h1'
      }).appendTo(div);
    } else {
      let div = $("#les9")
      var br = $('<br/>').appendTo(div);
      let h1 = $('<span/>', {
        html: ("тегов h" + i + " Нет на странице"),
        'class': 'h2'
      }).appendTo(div);
    }
  }
  $("#les9").attr("id", "les8-2");
});


$("#les10-1").click(function() {
  let mass = ['head meta[name=description]', 'head meta[name=keywords]', 'head meta[name=title]'];
  let str = "";
  for (var i = 0; i < mass.length; i++) {
    let les13 = $(mass[i]).attr('content');
    let ind = mass[i].indexOf("=");
    let nameMass = mass[i].slice(ind + 1);
    let nameMass1 = nameMass.slice(0, -1);
    if (les13.length > 0) {
      str = str + "тег meta=" + nameMass1 + " має довжину " + les13.length + "<br>";
    } else {
      str = str + "тег meta=" + nameMass1 + " не вказаний";
    }
    $(".les10-2").html(str);
  }
})
