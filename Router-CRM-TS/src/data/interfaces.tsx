export interface UserData {
    age: string,
    email: string,
    id: string,
    img: string,
    job: string,
    name: string ,
    favorite: boolean,
    }
    
export interface chunk {
        data: UserData[],
        q?: string,
        favorite?: boolean
    }

export interface smallerchunk{
    data: UserData
}

export interface ErrorData {
data: "Error: No route matches URL \"/contacts/3\""
error: {
    message: string,
    stack: string,
},
internal: Boolean,
status: number,
statusText: string,
}

export interface parameter {
    params?: {
        Id: string
    },
    request?: any
}