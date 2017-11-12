var myNum: number = 5;
var myString: string = "hello";
var myArr: Array<number> = [1,2,3,4];
var myObj: object = {name:'bill'};
var anythringVariable: any = "hey";
anythringVariable = "hey";
var arrayOne: Array<boolean> = [true, false]
var arrayTwo: any = [1, 'abc', true, 2]
var myObj: object = {x:5, y:5}

class Mynode {
    val: number;

    constructor(valueP: number){
        this.val = valueP;
    }
    doSomething(){
        console.log('hi');
    }
}
let newnode = new Mynode(1);

