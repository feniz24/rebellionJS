let user = prompt("Type your profession. (in lower case).")
if ( user == "student") { 
  console.log("You should study with these resources.")
}
else if ( user == "teacher" ) {
  console.log("You can take reference from these topics")
}
else if ( user == "guest" ) {
  console.log("You can assess these courses.")
}
else if ( user == "admin" ) {
  console.log("Welcome, admin!")
}
else {
 console.log(`Welcome from our site, ${user}.`)
}
