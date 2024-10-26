let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let cent = document.getElementById("cent")
let api = `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906`
 let getweather = async () => {
    let res = await fetch(`${api}&q=${inp.value}`)
    let data = await res.json()
    console.log(data)
    cent.innerText=await (`${data.current.temp_c}°C`)
}