// console.log('Loaded!');


// // change the text if the main-text div

// var element = document.getElementById('main-text');

// element.innerHTML = 'New value';


// // move the image

// var img = document.getElementById('madi');
// var marginLeft = 0;
// function moveRight(){
//  marginLeft = marginLeft+1;
//  img.style.marginLeft = marginLeft + 'px';
// }

// img.onclick = function (){
//     var interval = setInterval(moveRight,50);
// };

//**************************************************************

// counter code
var button = document.getElementById('counter');
;
button.onclick= function (){
  // create a request object
  var request = new XMLHTTPRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function (){
      if(request.readyState===XMLHTTPRequest.DONE){
          //take some action
          if(request.status===200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //not done yet
  };
  //make the request
  request.open('GET', 'http://http://krish88077.imad.hasura-app.io/counter',true);
  request.send(null);
};