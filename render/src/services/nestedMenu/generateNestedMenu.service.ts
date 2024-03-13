import {NestedMenu, SubMenu} from "./nestedMenu.types.ts";
import {getMenuObect} from "./getMenuObect.service.ts";
import {generateMenuHtml} from "./generateMenuHtml.service.ts";

export function generateNestedMenu(content:string):string{
    if (!content.includes('nestedMenu')||!content.includes('pre')) return content
    const menuRe = /<pre.*>(.+)<\/pre>/s
    const nestedMenuSrc = menuRe.exec(content)![1]
    const subMenu:SubMenu = getMenuObect(nestedMenuSrc)
    const style = /<pre.+style="(.+)"/.exec(content)?.[1]||''
    return content.replace(menuRe, generateMenuHtml({subMenu, style}))
}