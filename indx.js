let stone = document.querySelector("#stone")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let score = document.querySelector(".score ")
let result = document.querySelector(".result")
let choices = ["Stone", "Paper", "Scissor"]
let user_choice;
let computer;


// Game Logic
const game = (user_choice, computer) => {
  if (user_choice === computer) {
    result.textContent =` Computer also chose ${user_choice}, It's a Tie`
  } else if (user_choice === "Stone" && computer == "Paper") {
    result.textContent =" Computer Chose Paper , you loose" 
  

  }
  else if (user_choice === "Stone" && computer == "Scissor") {
    result.textContent =`Computer chose ${computer},You win` 
  }
  else if (user_choice === "Scissor" && computer == "Paper") {
    result.textContent =`Computer chose ${computer}, You Win`
  } else if (user_choice === "Scissor" && computer == "Stone") {
    result.textContent =`Computer chose ${computer}, You loose`
  } else if (user_choice === "Paper" && computer == "Stone") {
    result.textContent = `Computer chose ${computer}, You Win`
  }
  else if (user_choice === "Paper" && computer === "Scissor") {
    result.textContent =`Computer chose ${computer},You Loose`
  } else {
    result.textContent ="invalid choices" 
  }

}





// event listener for stone div
stone.addEventListener("click", () => {
  // this will create a random computer choice



  computer = choices[Math.floor(Math.random() * 3)];

  //this will update choice of user
  user_choice = stone.innerHTML;
  game(user_choice, computer)




})


// event listener for paper div
paper.addEventListener("click", () => {
  // this will create a random computer choice


  computer = choices[Math.floor(Math.random() * 3)];
  //this will update choice of user
  user_choice = paper.innerHTML

  game(user_choice, computer)

})



// event listener for scissor div
scissor.addEventListener("click", () => {
  // this will create a random computer choice


  computer = choices[Math.floor(Math.random() * 3)];
  //this will update choice of user
  user_choice = scissor.innerHTML
  game(user_choice, computer)


})










