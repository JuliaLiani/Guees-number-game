const input = document.querySelector("#guess")
const button = document.querySelector("#btn")
const answer = Math.floor(Math.random() * 20) + 1
input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    play()
  }
})
button.addEventListener("click", play)
function play() {
  const userNumber = document.querySelector("#guess").value
  if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please choose another number!",
    })
  } else if (isNaN(userNumber)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please choose another number!",
    })
  } else {
    if (userNumber < answer) {
      Swal.fire("Enter higher number!")
    } else if (userNumber > answer) {
      Swal.fire("Enter lower number!")
    } else {
      Swal.fire("You win!")
    }
  }
}
