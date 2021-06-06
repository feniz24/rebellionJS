let user = prompt("Type your profession. (in lower case).")
switch (user){
  case "student":
    console.log("You should study with these resources.")
    break;
  case "teacher":
    console.log("You can take reference from these topics")
    break;
  case "guest":
    console.log("You can assess these courses.")
    break;
  case "admin":
    console.log("Welcome,admin!")
    break;
  default:
    console.log(`Welcome from our site, ${user}.`)
}