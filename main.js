

const input = document.querySelector("input");
const btnAgregar = document.querySelector(".btnAgregar")
const ul = document.querySelector("ul")
const mje = document.querySelector(".mje")


btnAgregar.addEventListener("click", (e) => {

    e.preventDefault();

    const texto = input.value


    if (texto !== "") {

        const li = document.createElement("li")
        const p = document.createElement("p")

        p.textContent = texto

        li.appendChild(p)
        ul.appendChild(li)
        li.appendChild(agregarBtnBorrar())

        input.value = ""
        mje.style.display = "none"
    }
})


const agregarBtnBorrar = () => {

    const btnBorrar = document.createElement("button")

    btnBorrar.textContent = "Borrar"


    btnBorrar.addEventListener("click", (e) => {
        e.target.parentElement.remove()

        const items = document.querySelectorAll("li")
        if (items.length === 0) {
            mje.style.display = "block"
        }

    })

    return btnBorrar

}