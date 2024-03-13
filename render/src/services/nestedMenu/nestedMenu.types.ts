export type SubMenu = {
    [key:string]:string|SubMenu
};

export type NestedMenu = {
    style?: string;
    subMenu: SubMenu

}