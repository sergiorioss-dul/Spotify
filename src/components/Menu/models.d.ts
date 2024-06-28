interface IMenu {
    navLogin: INav[]
    setLoggin?: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

export interface INav {
    path: string
    _class: string
    text: string
}
