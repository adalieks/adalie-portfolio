function swapImages(){
    var get = document.getElementById('get-image');
   if (get.src.match("./img/clean-avatar.png")){
     get.src = "./img/reveal-avatar.png";
    }
   else{
     get.src = "./img/clean-avatar.png";
    }
  }