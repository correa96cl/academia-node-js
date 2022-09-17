import { v4 as uuidV4 } from 'uuid';


class History{
    id?: string;
    description: string;
    weight: number;
    fat_percentage: number;
    created_at: Date;

    constructor(){
        if (!this.id){
            this.id = uuidV4();
        }
    }

}


export {History}