export type MenuItem = {
    id: number,
    name: string,
    price: number
}

//Herencia
export type OrderItem = MenuItem & {
    quantity: number
}