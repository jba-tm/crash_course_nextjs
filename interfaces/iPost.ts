export interface IPosts {
    posts: [
        {
            id: number,
            title: string,
            body: string
        }
    ]
}

export interface IPost {
    post: {
        id: number,
        title: string,
        body: string
    }
}