export class Product {
    id:number;
    name:string;
    description:string;
    price: number;
    imageUrl: string;
    garrenty: number;

    constructor(id ,name ,description ='',price=0,imageurl='https://fossil.scene7.com/is/image/FossilPartners/FS5724_main?$sfcc_fos_hi-res$',garrenty){
        this.id = id;
        this.name = name;
        this.description = description
        this.price = price;
        this.imageUrl = imageurl
        this.id = garrenty;
}
}
