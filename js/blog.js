
function init() {
    addEventListener2()
}

fetch('http://localhost:5000/posts')
    //fetch('https://api.abitravers.com/posts')
    .then(response => response.json())
    .then(jsonResponse => listBlogs(jsonResponse))
    .catch(function (error) {
        console.log(error)
    });

const resultsSection = document.querySelector('.showResults')

function listBlogs(jsonData) {
    resultsSection.innerHTML = '';
    let html = '';
    jsonData.forEach(post => {
        let formattedTime = moment(post.postTime).format('MMMM Do YYYY');
        html +=
            `<li> 
            <div data-href="${post.title}"> ${formattedTime}:        ${post.title}</div> 
        </li>`
    });
    resultsSection.innerHTML = html;
}

function addEventListener2() {
    const showResults = document.querySelector('.showResults');
    showResults.addEventListener('click', goToNewPage)
}

function goToNewPage(e) {
    event.stopPropagation();
    const blogTitle = event.target.attributes[0].value
    window.location.href = `template.html/?${blogTitle}`
}

function createSearchButton() {
    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.innerText = 'Search Post Titles';
    console.log(resultsSection);
    resultsSection.appendChild(searchButton);
}

function createNewPostButton() {
    const createNewPostButton = document.createElement('button');
    createNewPostButton.type = 'submit';
    createNewPostButton.innerText = 'Search Post Titles';
    console.log(resultsSection);
    resultsSection.appendChild(createNewPostButton);
}

init()
createSearchButton()
createNewPostButton()




//how to see source of any website
//window.fetch('https://developer.mozilla.org/en-US/').then(returnedData => returnedData.text()).then(body => console.log(body));