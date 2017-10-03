$("#pas").click(function () {
  let spisok = ["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
  let inp = $("#inp").val();
  inp = inp.replace( /http:\/\//g, "" );
  inp = inp.replace( /https:\/\//g, "" );
  inp = inp.replace( "www.", "" );
  ind = inp.indexOf(".");
  inp = inp.slice(0, ind);
  inp = inp.replace( /l/g, "1" );
  inp = inp.replace( /o/g, "0" );
  inp = inp.replace( /i/g, "3" );
  inp = inp.replace( /s/g, "5" );
  let x1 = Math.floor(Math.random() * spisok.length);
  let x2 = Math.floor(Math.random() * spisok.length);
  let x3 = Math.floor(Math.random() * spisok.length);
  let x4 = Math.floor(Math.random() * spisok.length);


  let pas = (inp+spisok[x1]+spisok[x2]+spisok[x3]+spisok[x4]);
  $("#rez").html(pas);


});
