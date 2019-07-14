class Product{

    constructor(private _prodId:number,
        private _prodName:string,private _prodPrice:number){
    }

    public get prodId():number{
        return this._prodId;
    }
    
    public set prodId(prodId:number){
        this._prodId = prodId;
    }

    public get prodName():string{
        return this._prodName;
    }

    public set prodName(prodName:string){
        this._prodName = prodName;
    }

    public get prodPrice():number{
        return this._prodPrice;
    }

    public set prodPrice(prodPrice:number){
        this._prodPrice = prodPrice;
    }
}

var product = new Product(101,"Apple Watch",3456.67);

product.prodPrice=45654.45;

console.log(product.prodPrice) 

