// gögn fengin frá http://apis.is/concerts
let concerts = [];
let concertio = {};
$.ajax({
  'url': 'https://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    for (let i = 0; i < response["results"].length; i++) {
      concerts.push(response["results"][i]);
    };
    console.log(concerts)
    for (let i = 0; i < concerts.length; i++) {
      let source = concerts[i]
      document.getElementById("hold").innerHTML += "<div id='holder'> <h2>" + source["eventDateName"] + "</h2> <img src=" + 
                                                   source["imageSource"]+"> <p>" + source["eventHallName"] + "<br>" +
                                                   source["dateOfShow"] +  "</div>"
    };
  }
});

function leita() {
      let input, filter, parent, child, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    parent = document.getElementById("hold");
    child = parent.getElementsByTagName("div");
    for (i = 0; i < child.length; i++) {
        h2 = child[i].getElementsByTagName("h2")[0];
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            child[i].style.display = "";
        } else {
            child[i].style.display = "none";

        }
    }
}

function cleanTime(tick){

};
