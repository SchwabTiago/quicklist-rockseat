let inputNewItem = document.getElementById("new-item")
let form = document.querySelector("form")
let ul = document.querySelector(".list")
let notification = document.getElementById("remove-notification")

function showNotification() {
    notification.classList.add("show")

    setTimeout(() => {
        notification.classList.remove("show")
    }, 2000)
}

function newChildren() {
    const value = inputNewItem.value
    if (!value) return

    const li = document.createElement("li")
    li.classList.add("list-item")

    const label = document.createElement("label")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const span = document.createElement("span")
    span.textContent = value

    const button = document.createElement("button")

    const img = document.createElement("img")
    img.src = "./assets/image/trash_icon.svg"
    img.alt = "Remover item"

    label.appendChild(checkbox)
    label.appendChild(span)
    button.appendChild(img)
    li.appendChild(label)
    li.appendChild(button)

    button.addEventListener("click", () => {
        li.remove()
        showNotification()
    })

    ul.appendChild(li)
    inputNewItem.value = ""
}

form.onsubmit = (event) => {
    event.preventDefault()
    newChildren()
}