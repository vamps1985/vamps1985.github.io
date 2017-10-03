$("#pas").click(function () {
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
  let ran1 = Math.random().toString(36);

  console.log(ran1);
  console.log(inp);


});
