import {generateNestedMenu} from "./nestedMenu/generateNestedMenu.service.ts";

export function render(content:string):void{
    content = generateNestedMenu(content)
    document.getElementById('content')!.innerHTML = content
}