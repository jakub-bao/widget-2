export type SubMenu = {
    [key:string]:string|SubMenu
};

export type NestedMenu = {
    style?: string;
    selected: string[];
    subMenu: SubMenu;
}