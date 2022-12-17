
var facts = [];
// Get Response (Initial) CAT image
var xhttpCatImage = new XMLHttpRequest();

xhttpCatImage.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var catApi = JSON.parse(this.responseText);
        // console.log(catApi);
        document.getElementById("catImage").src = catApi;
    }
};
xhttpCatImage.open("GET", "http://shibe.online/api/cats?count=1", true);
xhttpCatImage.send();

// Get Response (Initial) CAT Facts
var xhttpCatFact = new XMLHttpRequest();

xhttpCatFact.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var catApi = JSON.parse(this.responseText);
        facts = catApi.data;
        // console.log(catApi);
        for (index = 0; index < facts.length; index++) {
            //Create new element
            var newP = document.createElement("p");
            newP.setAttribute("id", index);
            newP.innerText = facts[index];
            newP.classList.add("fact-style");
            //Add event listener
            newP.addEventListener("click", deleteFact);

            //Append Child to the Container
            var divContainer = document.getElementById("container-facts");
            divContainer.appendChild(newP);

        }
    }
};
xhttpCatFact.open("GET", "https://meowfacts.herokuapp.com/?count=2", true);
xhttpCatFact.send();


// Delete Fact from View
function deleteFact(event) {
    event.target.classList.add("bubbleEffect");
    setTimeout(() => { event.target.remove(); }, 1000);
}


// Get Response (Clickable Event) Both CAT image & facts
document.getElementById("button-generate").addEventListener("click", function (event) {
    facts = [];
    // Get Response (Initial) CAT image
    var xhttpCatImage2 = new XMLHttpRequest();

    xhttpCatImage2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var catApi = JSON.parse(this.responseText);
            // console.log(catApi);
            document.getElementById("catImage").src = catApi;
        }
    };
    xhttpCatImage2.open("GET", "http://shibe.online/api/cats?count=1", true);
    xhttpCatImage2.send();

    // Get Response (Initial) CAT Facts
    var xhttpCatFact2 = new XMLHttpRequest();

    xhttpCatFact2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var catApi = JSON.parse(this.responseText);
            facts = catApi.data;
            // console.log(catApi);
            for (index = 0; index < facts.length; index++) {
                //Create new element
                var newP = document.createElement("p");
                newP.setAttribute("id", index);
                newP.innerText = facts[index];
                newP.classList.add("fact-style");
                
                //Add event listener
                newP.addEventListener("click", deleteFact);


                //Append Child to the Container
                var divContainer = document.getElementById("container-facts");
                divContainer.appendChild(newP);
            }
        }
    };
    xhttpCatFact2.open("GET", "https://meowfacts.herokuapp.com/?count=2", true);
    xhttpCatFact2.send();
});