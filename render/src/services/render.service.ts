import {loadNestedMenu} from "./nestedMenu/loadNestedMenu.service.ts";

export function render(content:string):void{
    content = loadNestedMenu(content)
    document.getElementById('content')!.innerHTML = content
}