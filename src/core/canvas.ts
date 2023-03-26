export class Scale{
    scale:number;
    original:number;
    virtual:number;
    constructor(){
        this.scale = 1.0;
        this.original=100;
        this.virtual=100;
    }
    fromScale(scale:Scale):Scale{
        this.scale = scale.scale;
        this.original=scale.original;
        this.virtual=scale.virtual;
        return this;
    }
    fromValue(original:number,virtual:number):Scale{
        this.scale = virtual/original;
        this.original = original;
        this.virtual = virtual;
        return this;
    }
    calculateVirtual(original:number):number{
        return this.scale*original;
    }
    calculateOriginal(virtual:number):number{
        return virtual/this.scale;
    }
}

// TODO: Create Mesh with angles here
// TODO: add more canvas related options here
class Canvas{
    scale:Scale;
    canvasContext:CanvasRenderingContext2D;
    constructor(context:CanvasRenderingContext2D,scale:Scale){
        this.scale = scale;
        this.canvasContext = context;
    }
    addGridMesh(angle:number){

    }
    addBorder(width:number){

    }
}

export default Canvas;