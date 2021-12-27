var contn=document.getElementById("container");
contn.style.width="600px";
contn.style.height="600px";
contn.style.borderColor="black";
contn.style.borderWidth="3px";
contn.style.borderStyle="solid";



var box1=document.getElementById("box");
box1.style.borderRadius="50%";
box1.style.width="60px";
box1.style.height="60px";
box1.style.backgroundColor="red";
box1.style.position="relative";

var cell1=document.getElementById("cell");
cell1.style.borderRadius="50%";
cell1.style.width="60px";
cell1.style.height="60px";
cell1.style.backgroundColor="red";
cell1.style.position="relative";
cell1.style.display="none";
cell1.style.top="480px";
cell1.style.left="70px";

function move(){
    var box1=document.getElementById("box");
    var poe=0;
    var anim=setInterval(animate,1);
    function animate(){
    if (poe==540){
        clearInterval(anim);
        animate2();
    }
    else{
    poe++;
    
     box1.style.top=poe+"px";
     box1.style.left=poe+"px";
    
   } 
}
}
function animate2(){
      var poe=540;
      var anim=setInterval(animate,2);
      function animate(){
        if(poe==0){
            clearInterval(anim);
            box1.style.borderRadius="0px";
            animate3();
        }
        else{
            poe--;
            box1.style.top=poe+"px";
      }
      
}
}

function animate3(){
    var poe=0;
    
    var poe1=540;
    var anim=setInterval(animate,1);
    function animate(){
       
      if(poe==540 ){
       
          clearInterval(anim);
          
          box1.style.borderRadius="50%";
          animate4();
        }
      else{
          poe++;
          box1.style.top=poe+"px";
          poe1--;
          box1.style.left=poe1+"px";
        }
     }
}
  function animate4(){
    cell1.style.display="block";
   
    animate5();
}
function animate6(){
    cell1.style.display="none";
}
   
function animate5(){
    var poe=540;
    var anim=setInterval(animate,5);
    function animate(){
        if(poe==0){
           clearInterval(anim);
            animate6();
        }
        else{
          poe--;
          box1.style.top=poe+"px";
         
        }
    }
}








