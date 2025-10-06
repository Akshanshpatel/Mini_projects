let buttons=document.querySelectorAll('button')
let input=document.querySelector('input')

//buttons text
for(let button of buttons){
    button.addEventListener('click',function(e){
        let buttonText=e.target.innerText;
        if(buttonText==='AC'){
            input.value=''
        }
        else if(buttonText==='='){
            try {
                input.value=eval(input.value)
            } catch (error) {
                input.value='is ts tuff twin?'
            }
        }
        else{
            input.value+=buttonText;
        }
        //input gets removed after 10 sec if idle
        setTimeout(()=>{
            input.value=''
        },10000)
    })
}





































