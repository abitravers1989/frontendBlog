
function init() {
    addEventListener2()
    clickedCreatePost()
}

fetch('https://api.abitravers.com/posts')
    .then(response => response.json())
    .then(jsonResponse => listBlogs(jsonResponse))
    .catch(function (error) {
        console.log(error)
    });

function listBlogs(jsonData) {
    const resultsSection = document.querySelector('.showResults')
    resultsSection.innerHTML = '';
    let html = '';
    jsonData.forEach(post => {
        let formattedTime = moment(post.postTime).format('MMMM Do YYYY');
        // let formattedTime = moment(post.postTime).format('MMMM Do YYYY, h:mm:ss a');
        html +=
            `<li> 
            <div data-href="${post.title}"> ${formattedTime}:        ${post.title}</div> 
        </li>`
    });
    resultsSection.innerHTML = html;
}

function clickedSearchButton() {

}

function searchTitle() {

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

function clickedCreatePost() {
    const createPostDiv = document.querySelector('.createBlog');
    createPostDiv.addEventListener('click', createTextBox)
}

function createTextBox() {
    const textArea = document.querySelector('.textArea');
    textArea.classList.toggle('is-visible');
}

const textArea = document.querySelector('.textArea');

const saveButton = document.getElementsByTagName("button");
saveButton[1].addEventListener('click', postTexttoAPI);

function postTexttoAPI() {
    const headerData = { 'Content-Type': 'application/json', 'clinetPassword': 'xxxxx' }
    const text = textArea.value
    const bodyFromPage = { 'content': text, userName: "Abi", title: "NewTest" }
    try {
        fetch('https://api.abitravers.com/posts', {
            method: 'POST',
            headers: headerData,
            body: JSON.stringify(bodyFromPage)

        })
            //add stream reader for readablestream
            .then(function (response) {
                return console.log("post" + textArea.value + "Response Status" + response.status)
            })
    }
    //add logging in
    catch (error) {
        console.log(error);
    }
}


init()



//how to see source of any website
//window.fetch('https://developer.mozilla.org/en-US/').then(returnedData => returnedData.text()).then(body => console.log(body));