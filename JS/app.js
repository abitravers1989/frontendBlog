console.log("loaded")

//getting error because chrome does not allow localHost to localHost 
fetch('https://swapi.co/api/people/')
.then(response => response.json())
.then(jsonData => showResults(jsonData))
.catch(function(error)
{
    console.log(error)
})

//look into how to add no-cors in the fetch.


function showResults(jsonDataResult){
    const resultsSection = document.querySelector('#results')
    resultsSection.innerHTML = '';
    let html = '';
    console.log(jsonDataResult.results[0])
    //let results = jsonDataResult.results
    //console.log(result)
    jsonDataResult.results.forEach(person => {
        //console.log("working?")
         console.log(person.name) 
         html +=
         
         `<h3>${person.mass}:            ${person.name}   </h3>`
        
        
        
        }) 
        
        resultsSection.innerHTML = html;
    };

     


    // <div class="card" style="width: 18rem;">
    // <img class="card-img-top" alt="Card image cap">
    // <div class="card-body">
    //   <h5 class="card-title">Card title</h5>
    //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   <a href="#" class="btn btn-primary">Go somewhere</a>
    // </div>