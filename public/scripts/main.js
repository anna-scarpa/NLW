import Modal  from "./modal.js"

const modal = Modal()

const modalTitle= document.querySelector(".modal h2")
const modalDescripition = document.querySelector (".modal p")
const modalButton = document.querySelector(".modal button")

// Pegar todos os botons com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

// Add event.listten em todos os botões
checkButtons.forEach(button => {
    // add a escuta
    button.addEventListener("click", handleClick)
   
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}` )


    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescripition.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` 
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}