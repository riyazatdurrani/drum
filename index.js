var a=Math.floor( Math.random()*6)+1;
var dImage = "images/"+"dice"+a+".png";
  var image1=document.querySelectorAll("img")[0].setAttribute("src",dImage);

  var b=Math.floor( Math.random()*6)+1;
  var dImage = "images/"+"dice"+b+".png";
    var image2=document.querySelectorAll("img")[1].setAttribute("src",dImage);

    if(a>b){
      document.querySelector("h1").innerHTML= "player 1 won";
    }
    else if(b>a){
      document.querySelector("h1").innerHTML= "player 2 won";
    }
else{
  document.querySelector("h1").innerHTML= "GAME DRAW";
}
