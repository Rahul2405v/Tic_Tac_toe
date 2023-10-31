//let x=document.getElementsByClassName(container);
let myDivs = document.querySelectorAll('.boxes');

myDivs.forEach(function(div){
  div.innerHTML='';
});

let z=true;
myDivs.forEach(function(div) {
  div.addEventListener('click', function() {
    
    if(z){
      if(div.innerHTML ==''){
       div.innerHTML='X';
      check();
      document.getElementById('initial').innerHTML="Next player is O";
      }
    }
    else{
      if(div.innerHTML ==''){
       div.innerHTML='O';
      check();
      document.getElementById('initial').innerHTML="Next player is X";
      }
    }
    z=!z;
  });
});

function check(){
  let arr=[[0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]];
  arr.forEach(elem=>{
    if(myDivs[elem[0]].innerHTML != '' && myDivs[elem[1]].innerHTML != '' && myDivs[elem[2]].innerHTML != '' && myDivs[elem[0]].innerHTML==myDivs[elem[1]].innerHTML && myDivs[elem[1]].innerHTML==myDivs[elem[2]].innerHTML){
      verified(myDivs[elem[0]].innerHTML);
     
    }
  });

  function verified(el){
    let str="the winner is "+el;
    document.getElementById('emer').innerHTML=str;
    document.getElementById('emer').style.zIndex=2;
    document.getElementById("content").style.display="none";
  }
}