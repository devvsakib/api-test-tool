import { useState } from "react"
const API = ({ getAPIUrl, activeMethod }) => {
  const [apiUrl, setApiUrl] = useState({ get: "", post: "", put: "", patch: "", delete: "" })

  const handleUrlChange = (e) => {
    const { name, value } = e.target;
    setApiUrl({ ...apiUrl, [name]: value });
  };
  return (
    <div className="flex items-center">
      {activeMethod === 'get' && (
        <input type="text" value={apiUrl.get} onChange={handleUrlChange} name="get" className="inpbg flex-1" placeholder="Enter URL for GET request" />
      )}
      {activeMethod === 'post' && (
        <input type="text" value={apiUrl.post} onChange={handleUrlChange} name="post" className="inpbg flex-1" placeholder="Enter URL for POST request" />
      )}
      {activeMethod === 'put' && (
        <input type="text" value={apiUrl.put} onChange={handleUrlChange} name="put" className="inpbg flex-1" placeholder="Enter URL for PUT request" />
      )}
      {activeMethod === 'patch' && (
        <input type="text" value={apiUrl.patch} onChange={handleUrlChange} name="patch" className="inpbg flex-1" placeholder="Enter URL for PATCH request" />
      )}
      {activeMethod === 'delete' && (
        <input type="text" value={apiUrl.delete} onChange={handleUrlChange} name="delete" className="inpbg flex-1" placeholder="Enter URL for DELETE request" />
      )}
      <button className="px-2 -ml-1 rounded-e-md h-10 bg-white/40 w-[90px] md:w-[120px]" onClick={() => getAPIUrl(apiUrl)}>Send</button>
    </div>
  )
}

export default API