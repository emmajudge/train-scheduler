
  console.log("my javascript")
  // my web app's Firebase configuration -- double check that everything lines up
  var firebaseConfig = {
    apiKey: "AIzaSyADOal8mGh1tgk_pLDXwAaUWymmqNCE1L4",
    authDomain: "train-scheduler-65dfd.firebaseapp.com",
    databaseURL: "https://train-scheduler-65dfd.firebaseio.com",
    projectId: "train-scheduler-65dfd",
    storageBucket: "train-scheduler-65dfd.appspot.com",
    messagingSenderId: "414948885697",
    appId: "AIzaSyCi_GLCmIrl-yt-Cgd2soFRR2YSuNiwMak"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.database()
  // variables global
 


  // onclick

  $("#addtrain").on("click", function(event){
      event.preventDefault(); 
// get the value from th input
    console.log("on click")

    var trainName = $("#inputTrainName").val();
    var trainDestination = $("#inputDestination").val();
    var firstTrain = $("#inputFirstTrain").val();
    var trainFrequency = $("#inputFrequency").val();
    
console.log(trainName, trainDestination, firstTrain, trainFrequency)
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        first: firstTrain,
        frequency: trainFrequency

    }

        db.ref().push(newTrain)    

  })

  // PART-1
  // input from the form
  // push the info to firebase



  //PART2
  // lister from db // every time i get a object ==> append to the table

  db.ref().on("child_added", function(train){
      console.log(train.val().name)
      var trainName = train.val().name
      var trainDestination = train.val().destination
      var firstTrain = train.val().first
      var trainFrequency = train.val().frequency
      var nextTrain="";
      var minutesAway=0;

    //get the info into variables

    // coe the logic to calculate the next and the minytes
    

    //Jquery to create every row in the table

$("#traintable > tbody").append(`<tr><td scope='col>${trainName}</td><td scope='col>${trainDestination}</td><td scope='col>${trainName}</td><td scope='col>${trainName}</td></tr>`)
//     $("<tr>")
//     <th scope="row">1</th>
//     <td>trainName</td>
//     <td>trainDestination</td>
//     <td>@mdo</td>
// </tr>

    
  })




