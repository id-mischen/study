namespace Rainy{
    export namespace Chen{
        export class ShowName{
            name:string ;
            constructor(data:string){
                this.name = data ;
            }
            public inputName(){
                return this.name ;
            }
        }
    }
}

let a = new Rainy.Chen.ShowName("rainy") ;
    a.inputName();