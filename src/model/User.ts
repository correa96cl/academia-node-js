import { v4 as uuidV4 } from 'uuid';

class User {
    id?: string;
    numberDocument: number;
    typeDocument?: number;
    name: string;
    last_name?: string;
    nationality?: number;
    created_at: Date;
    updated_at: Date;
    state: number;
    age?: number;


    constructor(){
        if (!this.id){
            this.id = uuidV4();
        }
    }

}

export { User }