export type ProductType = {
    id: number;
    name: string;
    image: string;
    onHand: number;
    description: string;
    salePrice: number;
    originalPrice: number;
    tag?: string[];
}

export type ProductTypeInCart = ProductType & {
    quantity: number;
}