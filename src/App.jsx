import { useState } from 'react'
import './App.css'
import Layout from './components'
import Header from './components/Header'
import HttpMethod from './components/HTTP/HttpMethod'
import API from './components/Input/API'
import InputData from './components/ResponseArea/InputData'
import Response from './components/ResponseArea/Response'

function App() {
  const methods = ["get", "post", "put", "patch", "delete"]
  const options = ["body", "params", "headers"]

  const [activeMethod, setActiveMethod] = useState(methods[0]);
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleMethodClick = (method) => {
    setActiveMethod(method);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const [data, setData] = useState([
    {
      username: "devvsakib2",
      password: "sdf",
      name: "Sakib Ahmed"
    },
    {
      username: "devvsakib2",
      password: "sdf",
      name: "Sakib Ahmed"
    }
  ]);

  const getAPIUrl = url => {
    console.log(url);
  }

  const handleResponse = (responseData) => {
    setData(responseData);
  }
  const [fields, setFields] = useState([{ name: '', value: '' }]);



  return (
    <div className="App">
      <Layout>
        <Header />
        <HttpMethod methods={methods} onClick={handleMethodClick} activeMethod={activeMethod} />
        <API getAPIUrl={getAPIUrl} handleResponse={handleResponse} />
        <HttpMethod options={options} onClick={handleOptionClick} activeOption={activeOption} />
        <div className='mb-10 mt-4 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <InputData activeOption={activeOption} setFields={setFields} />
          <Response data={data} />
        </div>
      </Layout>
    </div>
  )
}

export default App
