export interface PitchInterface {
    id: number,
    name: string,
    address : string,
    rating: number,
    image_url: string
}


export interface PitchDetailsInterface extends PitchInterface {
    description: string,
    price: number,
    duration: number, 
    // available_slots: number,
}