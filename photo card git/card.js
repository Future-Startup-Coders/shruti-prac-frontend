let profile ={
    img : 'download (1).jpg',
    name : "Shruti Sanjay Ghotane",
    qualification : "IT Engineer",
    mailId : "shrutighotane@gmail.com",
    mobileNo : 1234567890
}
 let root = document.getElementById('root')

 let img = document.createElement('img')
 img.setAttribute('src',profile.img)
 img.className = 'img'

 let name = document.createElement('h1')
 name.textContent = profile.name

 let qualification = document.createElement('h1')
 qualification.textContent = profile.qualification

 let mailId = document.createElement('h1')
 mailId.textContent = profile.mailId

 let mobileNo = document.createElement('h1')
 mobileNo.textContent = profile.mobileNo

 let mainDiv = document.createElement('div')
 mainDiv.className = 'main'

 root.appendChild(img)
 mainDiv.appendChild(name)
 mainDiv.appendChild(qualification)
 mainDiv.appendChild(mailId)
 mainDiv.appendChild(mobileNo)


 root.appendChild(mainDiv)

//  let card = document.createElement('div')
// card.className = 'card'
// card.appendChild(img)
// card.appendChild(right)

// root.appendChild(card)
 
