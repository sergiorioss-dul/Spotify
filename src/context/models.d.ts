export interface IUser {
    name: string
    email: string
    password: string
    favSongs?: Song[]
}

export interface ISong {
    url: string
    image: string
}

export interface IUserLogin {
    email: string
    password: string
}
