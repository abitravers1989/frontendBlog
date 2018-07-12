function init(){
    addEventListener2()
}  

fetch('http://localhost:5000/posts')
    .then(response => response.json())
    .then(jsonResponse => listBlogs(jsonResponse))
.catch(function(error)
{
    console.log(error)
});

function listBlogs(jsonData){
    const resultsSection = document.querySelector('.showResults')
    resultsSection.innerHTML = '';
    let html = '';
    jsonData.forEach(post => {
        html+=
        `<li> 
            <div data-href="${post.title}"> ${post.title}:  ${post.postTime} </div> 
        </li>`
});
    resultsSection.innerHTML = html;
}

function addEventListener2(){
    const showResults = document.querySelector('.showResults');
    showResults.addEventListener("click", goToNewPage)
}

function goToNewPage(e){
    event.stopPropagation();
    const blogTitle = event.target.attributes[0].value
    window.location.href = `template.html/?${blogTitle}`
}

init()