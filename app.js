Array.from(document.getElementsByClassName('input')).forEach((e,i)=>{
     e.addEventListener('keyup', (el)=>{
        if(e.ariaValueMax.length >0){
              document.getElementsByClassName('bi')[i].style.color = "yellow";
        } else{
            document.getElementsByClassName('bi')[i].style.tranform = "rotate(0deg)";

        }
    })
     })
