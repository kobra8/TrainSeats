$(function() {
    console.log('dziala');
  
  var button = $(".show");
  var divimg = $(".cabin")
  var cabin = $(".optcab");
  var circle = $(".circle");
  var arrow = $(".arrow");
  var cabnumber = "1";
  var resultdiv = $(".result");
  var cabn = $("#cabn");
  var seatn = $("#seatn");
  var place = $(".cab1").find("option:selected").text();
  var seat = $(".cab1").val();
  var from = $(".from").val();
  var dest = $(".dest").val();
  var dirbutt = $(".direction");
  var divdir = $(".divdir");
  var arrleft = $(".arrspanleft");
  var arrright = $(".arrspanright");
  var again = $("<h3>Twoje ostatnie wyszukiwanie:</h3>");
  var selcab = $(".selectcab");
  var selarrow = $(".selarrow");
  var cookiesbutt = $(".cookiesbutt");
  var cookiesdiv = $(".cookies");
  var morelink = $(".morelink");
  var cookiesmore = $(".cookiesmore");
  
   //Sprawdzenie ciasteczka   
      checkCookie();
  
  cookiesbutt.on("click",function(){
    cookiesdiv.slideUp(500);
    cookiesmore.hide(500);
  })
  morelink.on("click", function(e){
    e.preventDefault();
    cookiesmore.show(500);  
  })
  
  
  //Animacja strzałki up
  
  selarrow.delay(5000).animate({
          color: 'red' 
                  },3000);
  
  //Wybór wagonu
  
  cabin.on("change", function(){
      cabnumber = cabin.val();
      showCab(cabnumber);
      arrow.slideUp(1000);
      resultdiv.slideUp(1000);
      cabn.hide(1000);
      seatn.hide(1000);
      circle.hide(1000);
  });
    
 function showCab(cabnumber) {
      $("#info").fadeIn(1000);
      selcab.hide(100);
      switch(cabnumber) {
        case "1":
         divimg.css("background-image", 'url("./img/cab_1.jpg")');
          $('select[class^="cab"]').hide();
          $("#seatopt").fadeIn(1000);
          $(".cab1").fadeIn(1000);
          break;
        case "2":
         divimg.css("background-image", 'url("./img/cab_2.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").fadeIn(1000);
           $(".cab2").fadeIn(1000);
           break;
        case "3":
         divimg.css("background-image", 'url("./img/cab_3.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").fadeIn(1000);
           $(".cab3").fadeIn(1000);
          break;
        case "4":
         divimg.css("background-image", 'url("./img/cab_4.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").fadeIn(1000);
           $(".cab456").fadeIn(1000);
          break;
        case "5":
         divimg.css("background-image", 'url("./img/cab_5.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").fadeIn(1000);
           $(".cab456").fadeIn(1000);
          break;
        case "6":
         divimg.css("background-image", 'url("./img/cab_6.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").fadeIn(1000);
           $(".cab456").fadeIn(1000);
          break;
        case "7":
         divimg.css("background-image", 'url("./img/cab_7.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").fadeIn(1000);
           $(".cab7").fadeIn(1000);
          break;
      default:
          divimg.css("background-image", 'url("./img/selectcab.jpg")');  
      } 
   }
  
  //Funkcja określania kierunku
      
  function direction(from,dest) {
    dirbutt.on("click", function(e){
      e.preventDefault();
      from = $(".from").val();
      dest = $(".dest").val();
      var reslutdir = from + dest;
      switch(reslutdir){
        case "12": // z Warszawy na PN
        case "13":
        case "14":
        case "15":
          
        case "23": // z Gdańska na PN
        case "24":
          
        case "43": // ze Słupska na PN
          
        case "52": // z Malborka na PN
        case "53":
        case "54":
          
        case "61": // z Krakowa na PN
        case "62":  
        case "63":  
        case "64":  
        case "65":  
        case "612":  
        case "616": 
          
        case "71": // z Rzeszowa na PN
        case "72":  
        case "73":  
        case "74":  
        case "75":  
        case "76":  
        case "78":  
        case "712":  
        case "716":  
          
        case "81": // z Tarnowa na PN
        case "82":  
        case "83":  
        case "84":  
        case "85":  
        case "86":    
        case "812":  
        case "816":  
          
        case "91": // z Katowic na PN
        case "92":  
        case "93":  
        case "44":  
        case "95":      
        case "912":  
        case "916":   
          
        case "101": // z Sosnowca na PN
        case "102":  
        case "103":  
        case "104":  
        case "105":      
        case "112":  
        case "116":    
          
        case ".111": // z B-B na PN
        case ".112":  
        case ".113":  
        case ".114":  
        case ".115":      
        case ".119":      
        case ".1110":      
        case ".1112":  
        case ".1116":  
          
        case "121": // z Częstochowy na PN
        case "122":  
        case "123":  
        case "124":  
        case "125":      
        case "1216": 
          
        case "131": // z Opola na PN
        case "132":  
        case "133":  
        case "134":  
        case "135":      
        case "139":      
        case "1310":      
        case "1312":      
        case "1316": 
          
        case "141": // z Wrocławia na PN
        case "142":  
        case "143":  
        case "144":  
        case "145":      
        case "149":      
        case "1410":      
        case "1412":      
        case "1416":   
          
        case "151": // z Jeleniej G. na PN
        case "152":  
        case "153":  
        case "154":  
        case "155":      
        case "159":      
        case "1510":      
        case "1512":      
        case "1513":      
        case "1514":      
        case "1416": 
          
        case "161": // z Włoszczowej na PN
        case "162":  
        case "163":  
        case "164":  
        case "165":
          console.log(reslutdir);
          divdir.fadeOut(100);
          $("h2").text("kierunek jazdy");
          divdir.fadeIn(300);
          arrleft.fadeOut(100);
          arrright.delay(300).fadeIn(500);
          break;
        case "16":  // z Warszawy na PD
        case "17":  
        case "18":  
        case "19":
        case "110":
        case "1.11":
        case "112":
        case "113":
        case "114":
        case "115":
        case "116":
          
        case "25": //z Gdańska na PD
        case "26":
        case "27":
        case "28":
        case "29":
        case "210":
        case "2.11":
        case "212":
        case "213":
        case "214":
        case "215":
        case "216":
         
        case "31": //z Kołobrzegu na PD
        case "32":
        case "34":
        case "35":
        case "36":
        case "37":
        case "38":
        case "39":
        case "310":
        case "3.11":
        case "312":
        case "313":
        case "314":
        case "315":
        case "316":
          
        case "41": //ze Słupska na PD
        case "42":
        case "45":
        case "46":
        case "47":
        case "48":
        case "49":
        case "410":
        case "4.11":
        case "412":
        case "413":
        case "414":
        case "415":
        case "416": 
          
        case "51": // z Malborka na PD
        case "56":
        case "57":
        case "58":
        case "59":
        case "510":
        case "5.11":
        case "512":
        case "513":
        case "514":
        case "515":
        case "516":
          
        case "67": // z Krakowa na PD
        case "68": 
          
        case "87": // z Tarnowa na PD 
             
        case "9.11": // z Katowic na PD
        case "913":  
        case "914":  
        case "915":  
            
        case "109": // z Sosnowca na PD
        case "10.11":  
        case "1013":  
        case "1014":  
        case "1015":        
           
        case "126": // z Częstochowy na PD
        case "127":  
        case "128":  
        case "129":  
        case "1210":  
        case "12.11":  
        case "1213":  
        case "1214":  
        case "1215":      
          
        case "1314": // z Opola na PD
        case "1315":  
          
        case "1415": // z Wrocławia na PD
                 
        case "166": // z Włoszczowej na PD
        case "167":  
        case "168":  
        case "169":  
        case "1610":   
        case "16.11":   
        case "1612":   
        case "1613":   
        case "1614":   
        case "1615": 
          console.log(reslutdir);
           divdir.fadeOut(100);
          $("h2").text("kierunek jazdy");
          divdir.fadeIn(300);
          arrright.fadeOut(100);
          arrleft.delay(300).fadeIn(500);
          break;
        default:
          divdir.fadeOut(100);
          $("h2").text("Nie ma takiej relacji");
          divdir.fadeIn(300);
          arrleft.fadeOut(100);
          arrright.fadeOut(100);
      }
    });
  }
  direction(from,dest);
  
  //Fukcja wyświetlania położenia miejsca
  
  function showSeat() {
    button.on("click", function(e){
      e.preventDefault();
      cabnumber = cabin.val();
       arrow.fadeOut(500);
      circle.fadeOut(500); 
      again.empty();
      // Wagon 1
    if (cabnumber == 1){
      seat = $(".cab1").val();
      place = $(".cab1").find("option:selected").text();
      for (var i = 1; i<=16; i++) {
        
        if(seat == i) {
          arrow.fadeIn(1000).attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i);
          circle.attr('class','circle').addClass("pos1kl"+i).fadeIn(2000);                         
              }
        
        else if(seat == i+'b') {
          arrow.delay(500).attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i+"b").fadeIn(1000);
          circle.delay(500).attr('class','circle').addClass("pos1b pos1kl"+i+"b").fadeIn(2000);
        }
        
        else if(seat == i+'c') {
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos1c pos1kl"+i+"c").fadeIn(2000);
        }
      }
    }
      
    // Wagon 2  
      else if (cabnumber == 2) {
        seat = $(".cab2").val();
        place = $(".cab2").find("option:selected").text();
        for (var i = 1; i<=17; i++) {
        if(seat == i) {
        
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos2a pos2kl"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
        
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos2b pos2kl"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos2c pos2kl"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos2d pos2kl"+i+"c").fadeIn(2000);
        }  
      }
        
    }
      
    // Wagon 3  
      else if (cabnumber == 3) {
        seat = $(".cab3").val();
        place = $(".cab3").find("option:selected").text();
        for (var i = 1; i<=5; i++) {
        if(seat == i) {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos3a posrest"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3b posrest"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3c posrest"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i+"d").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3d posrest"+i+"d").fadeIn(2000);
        }  
      }
        
    } 
      
     // Wagon 4 
      else if (cabnumber == 4) {
        seat = $(".cab456").val();
        place = $(".cab456").find("option:selected").text();
        for (var i = 1; i<=19; i++) {
        if(seat == i) {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos3a pos2kl"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3b pos2kl"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos4c pos2kl"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos4d pos2kl"+i+"c").fadeIn(2000);
        }  
      }
        
    }  
      
  // Wagon 5, 6
      else if ((cabnumber == 5) || (cabnumber == 6)){
        seat = $(".cab456").val();
        place = $(".cab456").find("option:selected").text();
        for (var i = 1; i<=19; i++) {
        if(seat == i) {
        
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos4d posleft"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos4c posleft"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3b posleft"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
       
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3a posleft"+i+"c").fadeIn(2000);
        }  
      }
        
    }    
    
      // Wagon 7
      else if (cabnumber == 7){
        seat = $(".cab7").val();
        place = $(".cab7").find("option:selected").text();
        for (var i = 1; i<=16; i++) {
        if(seat == i) {
        
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i).slideDown(1000);
          circle.attr('class','circle').addClass("pos7a pos7cab"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i+"b").slideDown(1000);
          circle.attr('class','circle').addClass("pos3b pos7cab"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
        
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i+"c").slideDown(1000);
          circle.attr('class','circle').addClass("pos7c pos7cab"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
         
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i+"c").slideDown(1000);
          circle.attr('class','circle').addClass("pos7d pos7cab"+i+"c").fadeIn(2000);
        }  
      }  
    }  
      if (cabnumber == 0){
        alert("Wybierz numer wagonu");
         resultdiv.hide();
        }
      
      //Przekazanie numerów do wyświetlenia
     else {
      cabn.text(cabnumber);
      seatn.text(place);
      resultdiv.slideDown(1000);
      cabn.delay(1000).slideDown(500);
      seatn.delay(1000).slideDown(500);
       
      // Ustawianie ciasteczka 
      setCookie("traincab", cabnumber);
      setCookie("trainseat", place);
        }
    });
      
  } // Koniec funkcji showSeat

 showSeat();

// Funkcje COOKIE
  
  function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (14*24*60*60*1000)); //Coookie na 14 dni
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cabc = getCookie("traincab"); //ciastko dla wagonu
    var seatc = getCookie("trainseat"); //ciastko dla miejsca
    if ((cabc != "") && (seatc != "")) {
        console.log(cabc);
        console.log(seatc);
      
      resultdiv.prepend(again);
      cabn.text(cabc);
      seatn.text(seatc);
      resultdiv.slideDown(1000);
      cabn.delay(1000).slideDown(500);
      seatn.delay(1000).slideDown(500);
      
        } 
  else {
        cabc = cabnumber;
        seatc = place;
        if ((cabc != "" && cabc != null) && (seatc != "" && seatc != null)){
            setCookie("traincab", cabc);
            setCookie("trainseat", seatc);
            console.log("Ciastko puste - tworzę nowe");
                }
        }
  
      } 
  
    
 
});