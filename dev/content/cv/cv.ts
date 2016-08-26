// Defining an CV object, the properties and type they have
export interface Cv {
    type:string,
    typeCont:[{
        id: number,
        title:string,
        subtitle:string,
        year:string,
        href:string,
        info: [{
            infotext:string
        }]
    }]
}