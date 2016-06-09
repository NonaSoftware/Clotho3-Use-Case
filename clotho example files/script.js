$(document).ready(function(){
  var text = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
  var obj = JSON.parse(text);

  document.getElementById("demo").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;
  try{
    Clotho.create(obj);
  }
  catch(err){
    alert("didn't work: "+err);
  }
  alert("done");

});
