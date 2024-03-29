import { useRecoilState } from "recoil";
import { graph_data, graph_type } from "../../recoil/atoms/dataAtom";

const Canvas = ()=>{
    const [data,setData] = useRecoilState(graph_data);
    const [graphType,_] = useRecoilState(graph_type);
    return (
        <div>
            {
                data ? <div>{graphType}</div> : <div>Upload a file to get started</div>
            }
            {
                data ? <div>{data}</div> : <div></div>
            }
        </div>
    )
}

export default Canvas;