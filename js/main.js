// Get Response (Initial) Dog image
var xhttpImage = new XMLHttpRequest();

xhttpImage.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dogApi = JSON.parse(this.responseText);
        // console.log(dogApi);
            document.getElementById("home-page-image").src = dogApi.message;   
    }
};
xhttpImage.open("GET", "https://dog.ceo/api/breeds/image/random/1", true);
xhttpImage.send();


