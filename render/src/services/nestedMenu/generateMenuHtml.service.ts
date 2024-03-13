import {NestedMenu, SubMenu} from "./nestedMenu.types.ts";

type SelectFunction = (value:string)=>void;

const keyStyle = `
    padding: 4px;
    line-height: 1;
    cursor: pointer;
`

function parseKey(rawKey:string):[string, string]{
    const [name, style] = rawKey.split('{')
    return [
        name.trim(),
        style?.replace('|',':').replace('}','')
    ]
}

window.selectFunctions = {}

function renderKey(key:string, level: number, onSelect: SelectFunction):string{
    const [name, style] = parseKey(key)
    window.selectFunctions[`onSelect_${level}`] = onSelect
    return `<div 
        style="${style};${keyStyle}" 
        class="menuItem"
        onClick="window.selectFunctions.onSelect_${level}('${key}')"
    >
            ${name}
    </div>`
}

const subMenuDefaultStyle = `
    border: 1px solid black;
    font-family: Roboto;
    min-width: 130px;
    min-height: 120px;
    background-color: white;
    overflow-y: auto;
    border-radius: 5px;
    height: 100%;
`


export function assembleSubMenu(subMenu:SubMenu, level:number):void{
    const onSelect = (key:string)=>{
        const value = subMenu[key]
        if (typeof value === 'string') console.log('clicked',value)
        else assembleSubMenu(value,level+1)
    }
    const html =  `<div style="${subMenuDefaultStyle}">
        ${Object.keys(subMenu).map((key:string)=>renderKey(key, level, onSelect)).join('')}
    </div>
    <div id="subMenu_${level+1}" style="display: flex;"></div>
    `
    render(`subMenu_${level}`, html)
}

async function render(where:string, what: string):Promise<void>{
    await new Promise(resolve=>setTimeout(resolve,0))
    document.getElementById(where)!.innerHTML = what
}

export function initializeNestedMenu({style, subMenu}:NestedMenu):void{
    render('nestedMenu',`<div style="${style}"><div id="subMenu_0" style="display: flex;"></div></div>`)
    assembleSubMenu(subMenu, 0)
}