import HTMLWrapper from "../class/HTMLWrapper.js";

export function $(selector){
    return new HTMLWrapper(document.querySelector(selector))
}

export const $$ = selector=>[...document.querySelectorAll(selector)].map(element=>new HTMLWrapper(element))


