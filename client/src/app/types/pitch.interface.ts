export interface PitchInterface {
    id: number,
    name: string,
    address : string,
    rating: number,
    image_URL: string
}


export interface PitchDetailsInterface extends PitchInterface {
    description: string,
    price: number,
    available_slots: number,
}