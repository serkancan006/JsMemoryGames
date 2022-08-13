
    function bak2(saniye)
  {
    if(saniye%10==0)
    {
      $("#timer-saniyeler").html("00:00:"+saniye);
      saniye=saniye-1;
      var bak = "bak2("+saniye+")";
      var a=setTimeout(bak,1000);
    }
    else if(saniye==0)
    {
      $("#timer-saniyeler").html("00:00:00");
      clearTimeout(a);
    }
    else{
      $("#timer-saniyeler").html("00:00:0"+saniye);
      saniye=saniye-1;
      var bak = "bak2("+saniye+")";
      var a=setTimeout(bak,1000);
      }
  }
