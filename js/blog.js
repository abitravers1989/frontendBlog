
function init() {
    postClicked()
    createNewPostClickListener()
}

fetch('http://localhost:5000/posts')
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

function postClicked() {
    const showResults = document.querySelector('.showResults');
    showResults.addEventListener('click', goToNewPage)
}

function goToNewPage(e) {
    event.stopPropagation();
    const blogTitle = event.target.attributes[0].value
    window.location.href = `template.html/?${blogTitle}`
}

const buttonPlaceHolder = document.querySelector('.buttonPlaceHolder');

function createNewPostButton() {
    const createNewPostButton = document.createElement('button');
    createNewPostButton.type = 'submit';
    createNewPostButton.innerText = 'Create New Post';
    createNewPostButton.className = "createNewPostButton";
    console.log(buttonPlaceHolder)
    buttonPlaceHolder.appendChild(createNewPostButton);
}

function createNewPostClickListener() {
    const createNewPostButton = document.getElementsByTagName("button");
    console.log(createNewPostButton);
    buttonPlaceHolder.addEventListener('click', goToCreatePostPage)
}

function goToCreatePostPage(e) {
    event.stopPropagation();
    window.location.href = `createPost.html`
}

init()
setTimeout(createNewPostButton, 250);



//how to see source of any website
//window.fetch('https://developer.mozilla.org/en-US/').then(returnedData => returnedData.text()).then(body => console.log(body));