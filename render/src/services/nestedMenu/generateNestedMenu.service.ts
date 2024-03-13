import {NestedMenu, SubMenu} from "./nestedMenu.types.ts";
import {getMenuObect} from "./getMenuObect.service.ts";
import {initializeNestedMenu} from "./generateMenuHtml.service.ts";

const menuRe = /<pre.*>(.+)<\/pre>/s

function getMenuSrc(content:string):NestedMenu{
    const nestedMenuSrc = menuRe.exec(content)![1]
    const subMenu:SubMenu = getMenuObect(nestedMenuSrc)
    const style = /<pre.+style="(.+)"/.exec(content)?.[1]||''
    return {subMenu, style}
}
export function generateNestedMenu(content:string):string{
    if (!content.includes('nestedMenu')||!content.includes('pre')) return content
    const nestedMenu:NestedMenu = getMenuSrc(content)
    initializeNestedMenu(nestedMenu)
    return content.replace(menuRe, '<div id="nestedMenu"></div>')
}