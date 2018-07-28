function init() {
    clickedCreatePost()
}

var homePageLink = document.querySelector('.homePageLink');

homePageLink.addEventListener('click', function (e) {
    window.location.replace("http://localhost:8080/blog");
})

function clickedCreatePost() {
    const createPostDiv = document.querySelector('.createBlog');
    createPostDiv.addEventListener('click', createTextBox)
}

function createTextBox() {
    const textArea = document.querySelector('.textArea');
    textArea.classList.toggle('is-visible');
}

const textArea = document.querySelector('.textArea');

const saveButton = document.getElementsByTagName('button');
saveButton[0].addEventListener('click', postTexttoAPI);

function postTexttoAPI() {
    const headerData = { 'Content-Type': 'application/json', 'clinetPassword': 'xxxxx' }
    const text = textArea.value
    const bodyFromPage = { 'content': text, userName: "Abi", title: "NewTest" }
    try {
        //https://api.abitravers.com/posts
        fetch('http://localhost:5000/posts', {
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