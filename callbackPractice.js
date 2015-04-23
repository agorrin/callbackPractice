/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var first = function(arr, callback) {
  var firstName = arr[0];
  callback(firstName)
}
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var last = function(arr, callback)  {
  var lastName = arr[arr.length - 1];
  callback(lastName);
}
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
var multiply = function(x, y, callback) {
  callback(x * y);
}
multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var contains = function(arr, str, callback) {
  var result;
  for (var i = 0;i < arr.length; i++)  {
    if (arr[i] === str) {
      result = true;
      break;
    }
    else {
      result = false;
    }
  }
  callback(result)  
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, callback)  {
  var uniqObj = {};
  var uniqArr = [];
  for (var i = 0; i <arr.length; i++) {
    uniqObj[arr[i]] = null;
  }

  for (var key in uniqObj)  {
    uniqArr.push(key);
  }
    
  
  callback(uniqArr);
}
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




//NEED HELP//

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var each = function(arr, callback)  {
  for (var i = 0;i < arr.length; i++)  {
    var indice = arr.indexOf(i);
    var item = arr[i];
    break;
  }
  callback(item, indice);
}
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
var getUserById = function(arr, str, callback) {
  var user = {
    name: , 
    email: ,
    address: 
  };
  for (var i = 0; i < arr.length; i++)  {
    if (users[i] === str)  {
      user.email.push(users[i].email);
      user.name.push(users[i].name);
      user.address.push(users[i].address);
    }
  }
  callback(user)
}

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
