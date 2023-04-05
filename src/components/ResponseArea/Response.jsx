import ReactJson from "react-json-view"

const Response = ({data}) => {
    return (
        <div>
            <div className="flex justify-between text-secondary  mb-2">
                <span>200 OK</span>
                <span>324 Byte</span>
                <span>210ms</span>
            </div>
            <div className="w-full text-left p-5 bg-inputbg backdrop-blur-[2.5px] min-h-[250px] rounded-md ttt">
               {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
               <ReactJson className="bg-transparent text-white" src={data} theme={"ocean"}  collapsed={1}/>
            </div>
        </div>
    )
}

export default Response