import {NestedMenu, SubMenu} from "./nestedMenu.types.ts";

const keyStyle = `
    padding: 4px;
    line-height: 1;
`

function renderKey(key:string):string{
    if (!key.includes('{')) return `<li>${key}</li>`
    const style = /\{(.+)}/.exec(key)![1].replace(/\|/g,':')
    return `<div style="${style};${keyStyle}">${key.replace(/\{.+}/,'')}</div>`
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
export function generateSubMenu(subMenu :SubMenu):string{
    return `<div style="${menuStyle}">
        ${Object.keys(subMenu).map(renderKey).join('')}
    </div>`
}

const wrapperStyle = `
    display: flex;
`
export function generateMenuHtml({subMenu, style}:NestedMenu):string{
    console.log(subMenu)
    return `<div style="${wrapperStyle};${style}">${generateSubMenu(subMenu)}</div>`
}