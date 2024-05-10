var images = document.getElementById("images");
var videos = document.getElementById("videos");
var prevBtn = document.getElementById("Left");
var forwardBtn = document.getElementById("Right");
var img = document.getElementsByTagName("img");
var menu = document.getElementById("menu");
var list = document.getElementById("slide");
var vid = document.getElementsByTagName("video");
var videoprevBtn = document.getElementById("videoLeft");
var videoforwardBtn = document.getElementById("videoRight");

var position = 0;
function start(){
    position++;
    changeImage();
    changeVideo();
}

function changeImage(){
    if(position > img.length-1){
        position=0;
    }
    else if(position < 0)
    {
        position= img.length-1;
    }

    images.style.transform = `translateX(${-position*300}px)`;
}

function changeVideo(){
    if(position > vid.length-1){
        position=0;
    }
    else if(position < 0)
    {
        position= vid.length -1;
    }
  
    videos.style.transform = `translateX(${-position*300}px)`;
  }

forwardBtn.addEventListener("click", () => {
    position++;
    changeImage();
});
videoforwardBtn.addEventListener("click", () => {
    position++;
    changeVideo();
  });
  
  videoprevBtn.addEventListener("click", () => {
    position--;
    changeVideo();
  });
prevBtn.addEventListener("click", () => {
    position--;
    changeImage();
});

menu.addEventListener("click", () => {
    list.style.transform = `scaleY(${300}px)`;
});

function drop(){
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('#menu')){
        var dropdowns = document.getElementsByClassName("dropdownContent");
        for(var i =0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
};


