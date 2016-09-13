$(function() {
    console.log('dziala');
  
  var button = $(".show");
  var divimg = $(".cabin")
  var cabin = $(".optcab");
  var cabnumber = "1";
  
  cabin.on("change", function(){
      cabnumber = cabin.val();
      showCab(cabnumber);
  });
    
 function showCab(cabnumber) {
      switch(cabnumber) {
        case "1":
         divimg.css("background-image", 'url("./img/cab_1.jpg")');
          $('select[class^="cab"]').hide();
          $("#seatopt").show();
          $(".cab1").show();
          break;
        case "2":
         divimg.css("background-image", 'url("./img/cab_2.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").show();
           $(".cab2").show();
           break;
        case "3":
         divimg.css("background-image", 'url("./img/cab_3.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").show();
           $(".cab3").show();
          break;
        case "4":
         divimg.css("background-image", 'url("./img/cab_4.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").show();
           $(".cab456").show();
          break;
        case "5":
         divimg.css("background-image", 'url("./img/cab_5.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").show();
           $(".cab456").show();
          break;
        case "6":
         divimg.css("background-image", 'url("./img/cab_6.jpg")');
           $('select[class^="cab"]').hide();
           $("#seatopt").show();
           $(".cab456").show();
          break;
        case "7":
         divimg.css("background-image", 'url("./img/cab_7.jpg")');
          break;
      default:
          divimg.css("background-image", 'url("./img/selectcab.jpg")');  
      } 
   }
  
  
  function showSeat() {
    button.on("click", function(e){
      e.preventDefault();
      var circle = $(".circle");
      var arrow = $(".arrow");
      cabnumber = cabin.val();
    
      // Wagon 1
    if (cabnumber == 1){
      var seat = $(".cab1").val();
      for (var i = 1; i<=16; i++) {
        if(seat == i) {
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i).fadeIn(1000);
          circle.attr('class','circle').addClass("pos1kl"+i).fadeIn(2000);
        }
        else if(seat == i+'b') {
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i+"b").fadeIn(1000);
          circle.attr('class','circle').addClass("posb pos1kl"+i+"b").fadeIn(2000);
        }
        else if(seat == i+'c') {
          arrow.attr('class','arrow fa fa-hand-o-down fa-4x').addClass("pos1kl"+i+"c").fadeIn(1000);
          circle.attr('class','circle').addClass("posc pos1kl"+i+"c").fadeIn(2000);
        }
      }
    }
      
    // Wagon 2  
      else if (cabnumber == 2) {
        var seat = $(".cab2").val();
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
        var seat = $(".cab3").val();
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
      
     // Wagon 4 5 6  
      else if (cabnumber == 4) {
        var seat = $(".cab456").val();
        for (var i = 1; i<=17; i++) {
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
      
      
    });
  }

 showSeat();



  
  
  
  
  });