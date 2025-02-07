function popsicle(ar){
    const int = ar.length

    return ar[int-1]
}



function darkmode(){
    
    const html = document.getElementById("Html")

    if (html.className == "dark"){
        html.className = ''
    }
    else{
        html.className = "dark"
    }

    const button = document.getElementById("darkmode-btn")

    if (button.innerHTML === `<img class="w-8" src="static/dark.svg">`){
        button.innerHTML = `<img class="w-8" src="static/light.svg">`
    }
    else{
        button.innerHTML = `<img class="w-8" src="static/dark.svg">`
    }
    
    const logo = document.getElementById("logo")

    if (logo.innerHTML === `<img class="w-12" src="static/favicon_light.ico" alt="">`){
        logo.innerHTML = `<img class="w-12" src="static/favicon.ico" alt="">`
    }
    else{
        logo.innerHTML = `<img class="w-12" src="static/favicon_light.ico" alt="">`
    }

    console.log(logo.innerHTML)
}
