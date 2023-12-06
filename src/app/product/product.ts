export interface Product {
    // id: number;
    // title: string;
    // price: number;
    // description: string;
    // category: string;
    // image: string;
    // rating: RatingProps;
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    lastChangePassword: string;
    roles: any;
}

interface RatingProps{
    rate: number;
    count: number;
}

export interface Roles{
    name: string;
}