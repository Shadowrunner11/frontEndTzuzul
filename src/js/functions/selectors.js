import HTMLWrapper from "../class/HTMLWrapper.js";

export function $(selector, node=document){
    return new HTMLWrapper(node.querySelector(selector))
}

export const $$ = (selector, node=document)=>[...node.querySelectorAll(selector)].map(element=>new HTMLWrapper(element))


