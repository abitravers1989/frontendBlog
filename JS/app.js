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
         console.log(person.name)   })   
    };

    //console.log(jsonDataResult.results)
    //jsonDataResult.forEach(person => {
       // console.log(person.name) 
