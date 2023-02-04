console.log('Hello World!');
function language(){
  btn = document.getElementById("link");
  btn.style.display = "block";
}

function load(){
 var btn = document.getElementById("body");
for(let i=0;i<btn.length;i++){
  btn[1].style.display= "none";
  btn[2].style.display="block";
}
}
window.onload = function link(){ var link = document.getElementsByTagName("a");
for(let x=0; x<link.length; x++){
  link[1].href="https://www.indeed.com"
  link[2].href="https://www.globallink.com"
  link[3].href="https://www.linkedin.com/in/iyanuoluwa-oyeboade-59729a25a"
  }
}
function hide(){
  document.getElementById("link").style.display="none";
}
