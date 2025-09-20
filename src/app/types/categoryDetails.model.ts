export interface CategoryDetails {
    _id: string,
    name: string,
    slug: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface subCategories {
    createdAt: string;
    image: string;
    name: string;
    slug: string
    updatedAt: string;
    __v: number;
    _id: string;
    category:string
}