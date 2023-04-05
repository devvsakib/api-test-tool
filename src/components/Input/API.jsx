import { useState } from "react"
const API = ({ getAPIUrl }) => {
  const [apiUrl, setApiUrl] = useState("")
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="inpbg flex-1"
        placeholder={"http://localhost:5000/api/v.2/posts"}
        value={apiUrl}
        onChange={e => setApiUrl(e.target.value)} />
      <button className="px-2 -ml-1 rounded-e-md h-10 bg-white/40 w-[90px] md:w-[120px]" onClick={() => getAPIUrl(apiUrl)}>Send</button>
    </div>
  )
}

export default API