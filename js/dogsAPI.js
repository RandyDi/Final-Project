var shibeOn = true;
var search = false;
var savedSearch = "";

 // Adds image elemetns to the container-content Div
 for(var number = 0; number < 5; number++){
    var imageElement = document.createElement("img");
    imageElement.setAttribute("id", "dogImages"+number);
   var divContainer = document.getElementById("container-content");
    divContainer.appendChild(imageElement);
};

// Adding Event Listeners to images
document.getElementById("dogImages0").addEventListener("click", deleteImage);
document.getElementById("dogImages1").addEventListener("click", deleteImage);
document.getElementById("dogImages2").addEventListener("click", deleteImage);
document.getElementById("dogImages3").addEventListener("click", deleteImage);
document.getElementById("dogImages4").addEventListener("click", deleteImage);

// Get Response (Initial) Dog image
var xhttpImage = new XMLHttpRequest();

xhttpImage.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dogApi = JSON.parse(this.responseText);
        // console.log(dogApi);
        for(index = 0; index < 5; index++){
            var name = "dogImages" + index;
            document.getElementById(name).src = dogApi[index];   
        }
    }
};
xhttpImage.open("GET", "http://shibe.online/api/shibes?count=5", true);
xhttpImage.send();


// Get Response (Clickable Event) Both Dog image & facts
document.getElementById("button-selector1").addEventListener("click", function (event) {
        // Get Response Dog image
        shibeOn = true;
        search = false;
        event.preventDefault();
        var xhttpImage2 = new XMLHttpRequest();

        xhttpImage2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var dogApi2 = JSON.parse(this.responseText);
                // console.log(dogApi);
                for(index = 0; index < 5; index++){
                    var name = "dogImages" + index;
                    document.getElementById(name).src = dogApi2[index];   
                }
            }
        };
        xhttpImage2.open("GET", "http://shibe.online/api/shibes?count=5", true);
        xhttpImage2.send();
});

// Get Response (Clickable Event) Both Dog image & facts
document.getElementById("button-selector2").addEventListener("click", function (event) {
    shibeOn = false;
    search = false
    event.preventDefault();
        var xhttpImage2 = new XMLHttpRequest();
        xhttpImage2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var dogApi2 = JSON.parse(this.responseText);
                // console.log(dogApi2);
                for(index = 0; index < 5; index++){
                    var name = "dogImages" + index;
                    document.getElementById(name).src = dogApi2.message[index];
                }
            }
        };
        xhttpImage2.open("GET", "https://dog.ceo/api/breeds/image/random/5", true);
        xhttpImage2.send();
});

function deleteImage(event){
    event.target.classList.add("bubbleEffect");
    setTimeout(() => {
        // First Delete
        var name = event.target.id;
        event.target.remove();
        // Create New
        var newImg = document.createElement("img");
        newImg.setAttribute("id", name);
        newImg.addEventListener("click", deleteImage);
        var imgContainer = document.getElementById("container-content");
        imgContainer.appendChild(newImg);
        if(shibeOn == false && search == false){
        var xhttpImageReplace = new XMLHttpRequest();
        xhttpImageReplace.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dogApi2 = JSON.parse(this.responseText);
                document.getElementById(name).src = dogApi2.message;
            }
        };
        xhttpImageReplace.open("GET", "https://dog.ceo/api/breeds/image/random/1", true);
        xhttpImageReplace.send();
    }
    else if(search == true && shibeOn == false){

        var xhttpImageReplace = new XMLHttpRequest();
        xhttpImageReplace.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var dogApi2 = JSON.parse(this.responseText);
                document.getElementById(name).src = dogApi2.message;
            }
        };
        xhttpImageReplace.open("GET", "https://dog.ceo/api/breed/"+ savedSearch +"/images/random/1", true);
        xhttpImageReplace.send();
    }
    else{
        var xhttpImageReplace = new XMLHttpRequest();

        xhttpImageReplace.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var dogApi2 = JSON.parse(this.responseText);
                document.getElementById(name).src = dogApi2;   
            }
        };
        xhttpImageReplace.open("GET", "http://shibe.online/api/shibes?count=1", true);
        xhttpImageReplace.send();
    }
    },1000);
}

document.getElementById("response-Search").addEventListener("submit", function(event){
event.preventDefault();
shibeOn = false;
search = true
var breedName = document.getElementById("search-ID").value;
savedSearch = breedName;
savedSearch = savedSearch.replace(/\s+/g ,'/');
savedSearch = savedSearch.toLowerCase();

        var xhttpImage2 = new XMLHttpRequest();
        xhttpImage2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var dogApi2 = JSON.parse(this.responseText);
                // console.log(dogApi2);
                for(index = 0; index < 5; index++){
                    var name = "dogImages" + index;
                    document.getElementById(name).src = dogApi2.message[index];
                }
            }
        };
        xhttpImage2.open("GET", "https://dog.ceo/api/breed/"+ savedSearch +"/images/random/5", true);
        xhttpImage2.send();
});