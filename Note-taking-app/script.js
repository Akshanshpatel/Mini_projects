let input=document.querySelector('input')
let btn=document.querySelector('button')
let h2tag=document.querySelector('h2')
let ul=document.getElementById('ul')
let firstInput=true;

btn.addEventListener('click',function(e){
    e.preventDefault();

    let text=input.value.trim();
    if(text==="")return;
    //Heading for h2

    if(firstInput){
        h2tag.innerHTML=input.value;
        firstInput=false;
        input.placeholder='Enter text now!!'
    }else{
        let li=document.createElement('li')
        li.innerText=text;
        ul.appendChild(li)
        //removing li element on click
        li.addEventListener('click',function(){
            li.remove();
        })
    }
    
    //clearing input box content after adding text
    input.value='';
    
    
    





})




