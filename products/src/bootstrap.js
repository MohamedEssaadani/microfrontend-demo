import faker from "faker"

let products  =""
 

for(let i=0; i<10; i++){
  let name = faker.commerce.productName()  
  products += `<div>${name}</div>`
}

document.querySelector('#dev-products').innerHTML = products