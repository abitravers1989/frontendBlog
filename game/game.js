<style>

      .container{
          height: 800px;
          width: 900px;
          outline: 1px solid black;
          position: relative;
      }

 

      .guy{
          position: absolute;
          height: 50px;
          width: 50px;
          outline: 1px solid black;
          background-color: red;
          left: 0;
      }
  
  </style>

</head>

<body>
   

   <button class="open-button">Sart Game</button>

   <div class="container">
     <div class="mustache"></div>
     <div class="guy"></div>
     <!-- <div class="mustache" hidden ></div> -->
   </div>

   
</body>

<script>


const container = document.querySelector('.container');
const mustache = document.querySelector('.mustache');
const guy = document.querySelector('.guy');

var guyleft = 0;

function animate(e){
    if(e.keyCode ==39){
        guyleft += 2;
        guy.style.left = guyleft + 'px';
        // if (guyleft<=600){
        //     guyleft -=2;
        // }
    }
    if(e.keyCode ==37){
        guyleft -= 2;
        guy.style.left = guyleft + 'px';
        // if (guyleft<=0){
        //     guyleft +=2;
        // }
    }
}

document.onkeydown = animate;


const openButton = document.querySelector('.open-button');

openButton.addEventListener('click', function(){
    mustache.removeAttribute('hidden');
})

mustache.addEventListener('click', function(){

})