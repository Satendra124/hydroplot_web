import Canvas from "../canvas";
import { createAxis } from "../components/axis";
import { createPolygon } from "../components/polygon";
import Graph from "./Graph";


interface StiffGraphData{
    name:string,
    value:number,
    position:number
}

class Stiff implements Graph{
    context: Canvas;
    data:StiffGraphData[]=[];
    zero:{x:number,y:number} = {x:300,y:300};
    constructor(context:Canvas){
        this.context = context;
    }
    setOriginPoint(point:{x:number,y:number}){
        this.zero.x = point.x;
        this.zero.y = point.y;
    }

    drawAxis(){
        createAxis(
            this.context,
            this.zero,
            0,
            13
        );
        createAxis(
            this.context,
            this.zero,
            180,
            13,
        );
        createAxis(
            this.context,
            this.zero,
            90,
            18
        );
    };

    
    validateData(data:StiffGraphData[]):void{
        const error = false;
        if(error) throw Error("Data format incorrect");
    }


    loadData(data:StiffGraphData[]){
        this.validateData(data);
        this.data = data;
    }

    plotData(){
        const context = this.context.canvasContext;
        for (let i = 0; i < this.data.length; i++) {
			// createPolygon(
			// 	context,
                
			// );
		}

		// context.moveTo(xInitial, yInitial - 10);
		context.font = "bold 13px Arial";
		context.fillStyle = "black";
		context.fill();
		context.fillText("Meq/L", this.zero.x, this.zero.y - 20);
		context.fillText("Cations", this.zero.x - 100, this.zero.y - 20);
		context.fillText("Anions", this.zero.x + 100, this.zero.y - 20);
		context.fillStyle = "red";
		context.fill();
    };

    draw(data:StiffGraphData[]){
        this.drawAxis();
        this.loadData(data);
        this.plotData();
    }

}
export default Stiff;