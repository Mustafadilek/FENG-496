

export class Patient{
    private name: string;
    private surname: string;
    private id:number;
    constructor(name:string,surname:string){
        this.name=name;
        this.surname=surname

    }
     setName(name:string){
       this.name=name;

     }
     setId(id:number){
      this.id=id;

    }
     setSurname(surname:string){
        this.surname=surname;
        
      }
      getName(){
        return this.name
      }
      getSurname(){
        return this.surname;
      }
      getId(){
        return this.id;
      }
   
   
}