class HTMLWrapper{
   constructor(element){
       this.element = element
   }
   on(event, callback, option = false){
       this.element.addEventListener(event, callback, option)
       return this
   }
   onClick(callback, option = false){
       return this.on('click', callback, option)
   }
   onChange(callback, option = false){
       return this.on('input', callback, option)
   }
   setText(text){
       this.element.textContent = text
       return this
   }
}

export default HTMLWrapper
