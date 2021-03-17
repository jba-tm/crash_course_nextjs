import {IWithRouter} from "./IWithRouter";


export interface IPost extends IWithRouter{
    post: {
        id: number,
        title: string,
        body: string,
    }
}

export interface IPosts {
    posts: [
        {
            id: number,
            title: string,
            body: string
        }
    ]
}
