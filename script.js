


//vars
var con = document.getElementById("con")
var cloudi = document.getElementById("cloudi")

var main = document.getElementById("main")
  var csu
//type
var headerfact = {
  strings: [ "get a High-Performance PC ^500","get a High-Performance Macbook ^500", "get a High-Performance Linux Server ^500", "" ],
  smartBackspace: true,
  typeSpeed: 45,
  backSpeed: 45
}
var csubt = {
  strings: [ "A personal computer in the browser. ^500", "A personal computer on your phone. ^500", "A personal computer anytime.",
  "A personal computer anywhere. ^500", "A personal computer in the cloud."],
  smartBackspace: true,
  typeSpeed: 45,
  backSpeed: 45
}

var hf = new Typed("#sub", headerfact);
setTimeout(csub, 13000)
setTimeout(dest, 11500)


function dest(){
  hf.destroy();
}
function csub(){
 csu = new Typed("#sub2", csubt);
  con.style.opacity = "1";
  
  document.body.style.overflow = "hidden";
  
}
//FRONT END-========


//init
con.style.opacity = "0"

//Event ears
con.addEventListener('click', reveal)

//functions

function reveal(){
  
  con.style.opacity = "0"
  csu.destroy()
  con.style.display = "none"
  document.getElementById('spans').outerHTML = "";
  cloudi.outerHTML = '';
  main.style.padding = "0%"
  main.style.height = "0%"
  document.getElementById('h').style.overflow = "hidden";
  document.getElementById('iframe').style.overflow = "visible";
 

  }
  
  function hover(theid,theid2,theid3){
    
    theid.style.fontSize = "0%"
    theid.style.height = "0%"
    theid.style.width = "0%"
      theid2.style.visibility = "visible"
    theid3.style.visibility = "hidden"
  
    
  }
function outhover(theid,theid2,theid3){
    
    theid.style.fontSize = "25px"
    theid.style.height = "100%"
    theid.style.width = "100%"
      theid2.style.visibility = "hidden"
   theid3.style.visibility = "visible"

    
  }


