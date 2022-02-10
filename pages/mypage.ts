export interface myface {

    id: number;
    name: string;
}

export class myclass implements myface {
    id: number;
    name: string;
    

    
    constructor(_nam: string) {
        this.id=2;
        this.name="ddd";
    }

    getmyname(name: string): string{
        return 'Hello ' + name;
        
    }
}

export class abcd {

    constructor() {

    }

    getabcd() {
        let foo:myclass = new myclass('dd');
        let a = foo.getmyname('sandeep');

    }
}