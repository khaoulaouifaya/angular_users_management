export class User {
    idUser! : number
    icon! : String
    firstName! : String
    lastName! : String
    email! : String
    constructor(idUser:number,icon:String,firstName:String,lastName:String,email:String){
        this.idUser=idUser;
        this.icon= icon;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }
}