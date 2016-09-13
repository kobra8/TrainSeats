$(function() {
    console.log('dziala');
  
  var button = $(".show");
  var divimg = $(".cabin")
  var cabin = $(".cabinopt");
  var seatfield = $(".seat");
  var cabnumber = "1";
  
  cabin.on("change", function(){
      cabnumber = cabin.val();
      showCab(cabnumber);
      console.log(cabnumber);
  });
    
 function showCab(cabnumber) {
      switch(cabnumber) {
        case "1":
         divimg.css("background-image", 'url("./img/cab_1.jpg")');
          break;
        case "2":
         divimg.css("background-image", 'url("./img/cab_2.jpg")');
          break;
        case "3":
         divimg.css("background-image", 'url("./img/cab_3.jpg")');
          break;
        case "4":
         divimg.css("background-image", 'url("./img/cab_4.jpg")');
          break;
        case "5":
         divimg.css("background-image", 'url("./img/cab_5.jpg")');
          break;
        case "6":
         divimg.css("background-image", 'url("./img/cab_6.jpg")');
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
      var shift = 10;
      var circle = $(".circle");
      var arrow = $(".arrow");
      var seat = seatfield.val();
      cabnumber = cabin.val();
      var x = 193;
      var y = 43;
    
    if (cabnumber == 1){
      x = 1493;
      y = 43;
      console.log(x,y);
      switch(seat) {
        case "15" :
          arrow.toggleClass("pos1").fadeIn(1000);
          circle.toggleClass("pos1").fadeIn(2000);
          break;
        case "16" :
          arrow.toggleClass("pos2").fadeIn(1000);
          circle.toggleClass("pos2");
          break;
        case "25" :
          circle.addClass("pos3");
          break; 
        default:
          circle.css("display","none");
          arrow.css("display","none");
      }
    }
      else if (cabnumber == 2) {
         x = 393;
        y = 43;
      console.log(x,y);
      }
      
      
      
      
    });
  }

 showSeat();



  
  
  
  
  });