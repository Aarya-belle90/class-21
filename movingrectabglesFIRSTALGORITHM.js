function isTouching(M,b){
    if((M.x - b.x < b.width/ 2 + M.width/2) && 
    (b.x - M.x < b.width/ 2 + M.width/2) && 
    (M.y - b.y < b.height/ 2 + M.height/2) && 
    (b.y - M.y < b.height/ 2 + M.height/2)){
      return true;
   }
   else{
     return false;
  
  
   }
   }
  function bounceoff(bx,fr){
    if ( (bx.y - fr.y < fr.height/ 2 + bx.height/2) && 
    (fr.y - bx.y < fr.height/ 2 + bx.height/2)){
  
      bx.velocityY= bx.velocityY * (-1);
    }
  }
  