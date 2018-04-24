console.log("loaded")

fetch('https://swapi.co/api/people/1/')
.then(response => response.json())
.then(jsonData => console.log(jsonData))
.catch(function(error)
{
    console.log(error)
})

//look into how to add no-cors in the fetch.

