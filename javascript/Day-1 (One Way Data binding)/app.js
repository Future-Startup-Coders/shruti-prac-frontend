const data = {
    selected : ''

}

for (let i=3 ; i<=16; i++){
    data.info[i]= {
        available : true,
        name : ''
    }
}

function render(){
    const root = document.getElementById('root')
    root.innerHTML = ''
    const left = document.createElement('div')
    left.className = 'left'

for (let i=1 ; i<=16; i++){
    const button = document.createElement('button')
    button.className = 'btn'
    button.innerText = i
    
    if (data.selected == button.textContent){
        button.style.backgroundColor = 'green'
    }
    
    
    button.addEventListener('click',()=>{
        data.selected = button.innerText
        render()
    })
    left.appendChild(button)
 }

    const label = document.createElement('h1')
    label.innerText = 'Seat no : ' +data.selected.seatNo

    const bookedBy = document.createElement('h1')
    bookedBy.innerText = 'bookedBy : ' 
    const right = document.createElement('div')
    right.className = 'right'
    right.appendChild(label)


    const mainDiv =document.createElement('div')
    mainDiv.className = "mainDiv"
    mainDiv.appendChild(left)
    mainDiv.appendChild(right)

    let headline = document.createElement('h1')
    headline.textContent = 'Booking system'

    root.appendChild(headline)
    root.appendChild(mainDiv)
}