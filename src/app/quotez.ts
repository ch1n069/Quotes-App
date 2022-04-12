
export class Quotez {
    id:number;
    quote:string;
    author:string;
    upvotes:number;
    downvotes:number;
    date:number;

    constructor(id:number , quote:string, author:string , upvotes:number, downvotes:number, date:number){
        this.id = id;
        this.quote = quote;
        this.author = author; 
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.date = date;

    }
}