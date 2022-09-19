import faker from "faker"


const mount = (el)=>{
let products  =""
 

for(let i=0; i<10; i++){
  let name = faker.commerce.productName()  
  products += `<div>${name}</div>`
}

el.innerHTML = products
}
// if we re in dev mode (isolation => products by itself) then we run mount
if(process.env.NODE_ENV === 'development'){
  let element = document.querySelector('#dev-products')
 
  if(element){
    mount(element)
  }
}
// if we re in prod mode we export mount so will be called by container (HOST)
// cuz we don't want to run immediately the app
export { mount }