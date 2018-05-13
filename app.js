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
      tickTock = cleanTime(source["dateOfShow"])
      document.getElementById("hold").innerHTML += "<div id='holder'> <h2>" + source["eventDateName"] + "</h2> <img src=" + 
                                                   source["imageSource"]+"> <p>" + source["eventHallName"] + "<br>" +
                                                   tickTock[0] + "<br>" + tickTock[1] + "</div>"
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
    };
};

function cleanTime(tick){
  let dateTime = tick.split("T");
  let date = dateTime[0].split("-")
  let dateString = date[2] + '/' + date[1] + "/" + date[0]
  let timeString = dateTime[1].slice(0,5)
  return [dateString, timeString]
};
