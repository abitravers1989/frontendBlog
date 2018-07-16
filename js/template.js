var homePageLink = document.querySelector('.homePageLink');

homePageLink.addEventListener('click', function(e){
  window.location.replace("http://localhost:8080/blog");
})  



  function moveDiv(){
      var movableDiv = document.querySelector('.movable-div');
      var movableDivbottom = movableDiv.getBoundingClientRect().bottom;
      var movableDivHeight = movableDiv.offsetHeight;
      var surroundingDiv = document.querySelector('.wrapper');
      var topOfDiv = surroundingDiv.getBoundingClientRect().top;
      var bottomOfDiv = surroundingDiv.getBoundingClientRect().bottom;
  }


    window.addEventListener('scroll', function(e){ 
      movableDiv.style.bottom = bottomOfDiv;
      movableDiv.position = "absolute";
    })

  moveDiv();

  function getURLParams(url){
      var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
      return queryString;
   }

  var url = window.location.href;
  var urlParams = getURLParams(url); 
  var replaced = urlParams.replace(/%20/g, " ");


   function upDateTitle(returnedPost){
      const titleSection = document.querySelector('.title')
      titleSection.innerHTML = returnedPost.title
   }
  
   fetch(`http://localhost:5000/posts/${replaced}`)
     .then(function(response){
      return response.json()
     })
     .then(function(returnedPost){
        const resultsSection = document.querySelector('.blog-content')
        resultsSection.innerHTML = '';
        let html = '';
            html+=
           `<div data-href="list-content ${returnedPost.title}"> ${returnedPost.content} </div>`        
        upDateTitle(returnedPost);     
       resultsSection.innerHTML = html;
     })
     .catch(function(err){
       console.log('Catch', err);
     })
    