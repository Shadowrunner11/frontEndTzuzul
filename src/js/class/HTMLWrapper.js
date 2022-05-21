class HTMLWrapper{
   constructor(element){
       this.element = element
   }
   on(event, callback, option = false){
       this.element?.addEventListener(event, callback, option)
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
   content(){
       return this.element.value ?? this.element.textContent
   }

   appendElement(elementName, classes,id){
        const element = document.createElement(elementName)
        classes?.forEach(className => {
            element.classList.add(className)
        });

        if(id)element.id = id
        this.element.appendChild(element)
        
        return new HTMLWrapper(element)
   }
}

export default HTMLWrapper
