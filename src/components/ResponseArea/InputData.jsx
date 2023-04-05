import Body from "../Input/Body"
import Headers from "../Input/Headers"
import Params from "../Input/Params"
import "./style.css"
const InputData = ({ activeOption }) => {
  return (
    <div>
      {
        activeOption === "headers" ?
          <Headers />
          : activeOption === "params" ? <Params />
            : <Body />
      }
    </div>
  )
}

export default InputData