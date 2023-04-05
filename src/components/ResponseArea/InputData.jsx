import { useState } from "react";
import Body from "../Input/Body"
import { KeyValueInput, BodyInput } from "../Input/KeyValueInput"
import "./style.css"
const InputData = ({activeOption}) => {
  const [params, setParams] = useState([{ name: '', value: '' }]);
  const [headers, setHeaders] = useState([{ name: '', value: '' }]);
  const [body, setBody] = useState('');

  const handleParamsChange = (newParams) => {
    setParams(newParams);
  };

  const handleHeadersChange = (newHeaders) => {
    setHeaders(newHeaders);
  };

  const handleBodyChange = (newValue) => {
    setBody(newValue);
  };

  return (
    <div>
      {activeOption === "headers" ? (
        <KeyValueInput label="Headers" values={headers} onChange={handleHeadersChange} />
      ) : activeOption === "params" ? (
        <KeyValueInput label="Params" values={params} onChange={handleParamsChange} />
      ) : (
        <BodyInput onChange={handleBodyChange} />
      )}

    </div>
  );
};


export default InputData