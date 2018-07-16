
function init(){
    addEventListener2()
    clickedCreatePost()
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
        let formattedTime = moment(post.postTime).format('MMMM Do YYYY');
        // let formattedTime = moment(post.postTime).format('MMMM Do YYYY, h:mm:ss a');
        html+=
        `<li> 
            <div data-href="${post.title}"> ${formattedTime}:        ${post.title}</div> 
        </li>`
});
    resultsSection.innerHTML = html;
}

function clickedSearchButton(){

}

function searchTitle(){

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

function clickedCreatePost(){
    const createPostDiv = document.querySelector('.createBlog');
    createPostDiv.addEventListener("click", createTextBox)
}

function createTextBox(){
    const textArea = document.querySelector('.textArea');
    textArea.classList.toggle('is-visible');
}
// do srarah's promise to show this then post it 
    

init()



//how to see source of any website
//window.fetch('https://developer.mozilla.org/en-US/').then(returnedData => returnedData.text()).then(body => console.log(body));