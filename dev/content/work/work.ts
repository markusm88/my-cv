export interface Work {
    id:number,
    title:string,
    subtitle:string,
    breadcrumb:string,
    desc:string,
    shortDesc:string,
    boxClass: string,
    imgClass: string,
    img:[
        {
            imgTitle:string,
            imgUrl:string,
            imgDesc:string
        }
    ]
}