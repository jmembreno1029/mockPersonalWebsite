function loadRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){

            results = JSON.parse(this.responseText);
            for(let i = 0; i < results.length; i++){
                console.log(results[i].name);
                let ul = document.getElementById("repositories");
                let li = document.createElement("li");
                let a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);
            }
            
        }
    }
xhttp.open("GET", "https://api.github.com/users/jmembreno1029/repos", true)
xhttp.send();

}

$(document).ready(function(){
    $(".fa").hover(function(){
        $(this).css("transform", "scale(1.5)");
        }, function(){
        $(this).css("transform", "scale(1)");
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#repoBtn").toggle();
    });
});

