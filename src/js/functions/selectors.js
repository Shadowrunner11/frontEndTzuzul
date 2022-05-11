import HTMLWrapper from "../class/HTMLWrapper.js";

export function $(selector){
    return new HTMLWrapper(document.querySelector(selector))
}


