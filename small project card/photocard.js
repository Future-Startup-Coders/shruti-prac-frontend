let Shruti = {
    img : './InShot_20230824_114457632.jpg',
    name : "Shruti Sanjay Ghotane",
    mobileNo : 9356495362,
    qualification : "IT Engineer",
    mailId : "shrutighotane410@gmail.com"
}
let root = document.getElementById('root')

// const img = document.createElement('img')
// img.setAttribute('src','.\InShot_20230824_114457632.jpg')

 
let i = document.createElement('img')
i.setAttribute('src',Shruti.img)
i.setAttribute('alt',"NO IMG")
i.className = 'img'

let name = document.createElement('h1')
name.textContent = Shruti.name

let mobileNo = document.createElement('h2')
mobileNo.textContent =Shruti.mobileNo

let qualification = document.createElement('h2')
qualification.textContent =Shruti.qualification

let mailId = document.createElement('h2')
mailId.textContent =Shruti.mailId

root.appendChild(name)
root.appendChild(mobileNo)
root.appendChild(qualification)
root.appendChild(mailId)
root.appendChild(i)

const card = document.createElement('div')
card.className = 'card'
card.appendChild(img)
card.appendChild(right)

root.appendChild(card)