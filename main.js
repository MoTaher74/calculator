const screen = document.getElementById("screen");

const btn = document.querySelectorAll(".btn");

for (item of btn){
    item.addEventListener('click',(e) =>{
        // console.log("clicked");
        btntext = e.target.innerText;
        // console.log(btntext);
        if(btntext == '÷'){
            btntext = '/';
        }
        if(btntext =='×'){
            btntext ='*';
        }

        if(btntext =='π'){
            btntext = Math.PI;
        }
        if(btntext =='AC'){
            btntext = '';
            screen.value = btntext;
        }
        if(btntext =='π'){
            btntext = Math.PI;
        }
        if(btntext == 'xl'){
            btntext = Math.pow(screen.value,2);
        }
        if(btntext == 'exp'){
            btntext = Math.exp(screen.value);
        }
        if(btntext == 'log'){
            btntext = Math.log(screen.value);
        }
        if(btntext == 'sin'){
            btntext = Math.sin(screen.value);
        }
        if(btntext == 'cos'){
            btntext = Math.cos(screen.value);
        }
        if(btntext == 'tan'){
            btntext = Math.tan(screen.value);
        }
        if(btntext == '√'){
            btntext = Math.sqrt(screen.value);
        }
      
        screen.value += btntext;
        
    })
}