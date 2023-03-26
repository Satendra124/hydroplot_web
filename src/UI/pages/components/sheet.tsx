import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css"
import '../../../styles/sheet.css'
import { useRecoilState } from "recoil";
import { graph_data, graph_type } from "../../recoil/atoms/dataAtom";

const Sheet = ()=>{
    const [data, setData] = useRecoilState<any>(graph_data);
    const [graphType,_] = useRecoilState(graph_type);
    const getFormatedData = (rawData:any)=>{
        if(!rawData) return null;
        let r = 0,c=0;
        let final_data:any = [];
        rawData.split("\n").forEach((line:string)=>{
            const row = line.split(",");
            row.pop();
            for(let e of row){
                final_data.push({r,c,v:e});
                c++;
            }
            c=0;
            r++;
        });
        console.log(final_data);
        return final_data;
    }
    const saveData = (formatedData:any)=>{
        let final_data:any = [];
        for(let cell of formatedData){
            if(!final_data[cell.r]) final_data[cell.r] = [];
            final_data[cell.r][cell.c] = cell.v;
        }
        console.log(final_data);
        let final_string = "";
        for(let row of final_data){
            final_string += row.join(",");
            final_string += "\n";
        }
        setData(final_string);
    }  
    const save = (data:any)=>{
        console.log(data);
    }
    return (
        <div className="sheet-wrapper">
             <Workbook data={[{ name: "Sheet1"}]} onChange={save} />
        </div>
    )
}

export default Sheet;