let str = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.taget); 
        if(e.target.innerHTML == 'RESET'){
            str = "";
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == '='){
            str = eval(str);
            document.querySelector('input').value = str;
        }else{
            str = str + e.target.innerHTML;
             document.querySelector('input').value = str;
        }
        
    })
})
