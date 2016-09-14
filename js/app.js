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
        case "12":
        case "13":
        case "14":
        case "15":
        case "21";  
        case "31";  
        case "41";  
        case "51";
        case "61";
        case "71";
        case "81";
        case "91";
        case "101";
        case "111";
        case "121";
        case "131";
        case "141";
        case "151";
        case "161";
          console.log("PD - PN");
          break;
        case "16";  
        case "17";  
        case "18";  
        case "19";
        case "110";
        case "111";
        case "112";
        case "113";
        case "114";
        case "115";
        case "116";
          console.log("PN - PD");
          break;
        default:
          console.log("Miasta wyjazdu i docelowe muszą byc różne")
      }
    });
  }
  direction(from,dest);
  
  //Fukcja wyświetlania położenia miejsca
  
  function showSeat() {
    button.on("click", function(e){
      e.preventDefault();
      cabnumber = cabin.val();
    
      // Wagon 1
    if (cabnumber == 1){
      seat = $(".cab1").val();
      place = $(".cab1").find("option:selected").text();
      for (var i = 1; i<=16; i++) {
        if(seat == i) {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos1kl"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos1b pos1kl"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.hide(300);
          circle.hide(300);
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
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos2a pos2kl"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos2b pos2kl"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos2c pos2kl"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
          arrow.hide(300);
          circle.hide(300);
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
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos3a posrest"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3b posrest"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posrest"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3c posrest"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
          arrow.hide(300);
          circle.hide(300);
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
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos3a pos2kl"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3b pos2kl"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos2kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos4c pos2kl"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
          arrow.hide(300);
          circle.hide(300);
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
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos4d posleft"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("pos4c posleft"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("posleft"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("pos3b posleft"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
          arrow.hide(300);
          circle.hide(300);
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
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i).slideDown(1000);
          circle.attr('class','circle').addClass("pos7a pos7cab"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i+"b").slideDown(1000);
          circle.attr('class','circle').addClass("pos3b pos7cab"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.hide(300);
          circle.hide(300);
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos7cab"+i+"c").slideDown(1000);
          circle.attr('class','circle').addClass("pos7c pos7cab"+i+"c").fadeIn(2000);
        }
        else if(seat == i+'d') {
          arrow.hide(300);
          circle.hide(300);
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
      checkCookie();
     
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
    if (cabc != "") {
        console.log(cabc);
    } else {
        cabc = cabnumber;
        if (cabc != "" && cabc != null) {
            setCookie("traincab", cabc);
            console.log("Ciastko puste - tworzę nowe");
        }
      }
  var seatc = getCookie("trainseat"); //ciastko dla miejsca
    if (seatc != "") {
        console.log(seatc);
    } else {
        seatc = place;
        if (seatc != "" && seatc != null) {
            setCookie("trainseat", seatc);
            console.log("Ciastko puste - tworzę nowe");
        }
      }
  
    }

  
  
  
});