
let searchBox=document.querySelector('input')
let submit=document.querySelector('button')
let list=document.querySelector('#list')

submit.addEventListener('click',function(){
    let searchText=searchBox.value;
    let data=fetchData(searchText);
    searchBox.value='';
})

function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        list.innerHTML=''
        console.log(response.data)
        makingCard(response.data);
    })
    
}

function makingCard(datas){
   for(let data of datas){
     let figure=document.createElement('figure')

     if(data.show.image){

         figure.innerHTML=`
         <img src=${data.show.image.original} />
         <h2>${data.show.name}</h2>
         `
        //  <p>${data.show.summary}</p>
         list.appendChild(figure)
     }
   }
}
























