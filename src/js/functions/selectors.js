import HTMLWrapper from "../class/HTMLWrapper.js";

export const $ = (selector, node=document)=> new HTMLWrapper(node.querySelector(selector))

export const $$ = (selector, node=document)=>[...node.querySelectorAll(selector)]
                                                    .map(element=>new HTMLWrapper(element))


