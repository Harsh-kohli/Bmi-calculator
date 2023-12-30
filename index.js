const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector("#cm").value)
    const weight = parseInt(document.querySelector("#kg").value)
    const results = document.querySelector("#results")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid Height"
        results.style.backgroundColor = "red"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
        results.style.backgroundColor = "red"
    } else {
        const result = (weight / ((height * height) / 10000)).toFixed(2)
        if (result <= 18.6) {
            results.style.backgroundColor = "yellow"
        } else if (18.7 < result && result < 24.91) {
            results.style.backgroundColor = "green"
        } else {
            results.style.backgroundColor = "red"
        }
        results.innerHTML = result
    }
})
