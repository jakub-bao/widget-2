import {NestedMenu, SubMenu} from "./nestedMenu.types.ts";

const keyStyle = `
    padding: 4px;
    line-height: 1;
    cursor: pointer;
`

function parseKey(rawKey:string):[string, string]{
    const [name, style] = rawKey.split('{')
    return [
        name.trim(),
        style.replace('|',':').replace('}','')
    ]
}

function renderKey(key:string):string{
    if (!key.includes('{')) return `<li>${key}</li>`
    const [name, style] = parseKey(key)
    return `<div 
        style="${style};${keyStyle}" 
        class="menuItem"
        onClick="select('${name}')"
    >
            ${name}
    </div>`
}

const menuStyle = `
    border: 1px solid black;
    font-family: Roboto;
    min-width: 130px;
    min-height: 120px;
    background-color: white;
    overflow-y: auto;
    border-radius: 5px;
`
export function generateSubMenu(subMenu:SubMenu, level:number):string{
    return `<div style="${menuStyle}">
        ${Object.keys(subMenu).map(renderKey).join('')}
    </div>
    ${}
    `
}

const wrapperStyle = `
    display: flex;
`

export function renderMenu({subMenu, style, selected}:NestedMenu):void{
    console.log(subMenu, selected)
    const html = `<div style="${wrapperStyle};${style}">${generateSubMenu(subMenu,0)}</div>`
    document.getElementById('nestedMenu')!.innerHTML = html
}

export function initializeNestedMenu(nestedMenu:NestedMenu):void{
    setTimeout(()=> {
        renderMenu(nestedMenu)
    },0)
}