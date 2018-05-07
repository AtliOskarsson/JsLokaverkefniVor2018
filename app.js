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
      document.getElementById("hold").innerHTML += "<div> <h2>" + source["eventDateName"] + "</h2> <img src=" + 
                                                   source["imageSource"]+"> <p>" + source["eventHallName"] + "<br>" +
                                                   source["dateOfShow"] +  "</div>"
    };
  }
});

function cleanTime(tick){


};
