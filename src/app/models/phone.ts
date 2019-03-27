export class Phone {
    constructor(){}
    public make:string;
    public model:string;
    public manufacturer:string;
    public os:string;
    public memory:string;
    public storage:string;
    public resolution:string;
    public cpu:string;
    public baseCost:number;
    public monthlyPayment:number;
    public baseMonthlyContract:number;
    public contractInMonths:number;
    public thumbnailPath:string;
    
    calculateMonthlyPayment(){
        this.monthlyPayment = this.baseCost/this.contractInMonths + this.baseMonthlyContract;
    }
}

