import { useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'

const KeyValueInput = ({ label, values, onChange }) => {
  const handleAddField = () => {
    onChange([...values, { name: '', value: '' }]);
  };

  const handleDeleteField = (index) => {
    if (values.length === 1) {
      return;
    }
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  const handleFieldChange = (index, field, value) => {
    const newValues = [...values];
    newValues[index] = { ...newValues[index], [field]: value };
    onChange(newValues);
  };

  return (
    <div>
      {values.map((value, index) => (
        <div key={index}>
          <div className='flex gap-8'>
            <div className='flex gap-5'>
              <button onClick={handleAddField}>
                <FaPlus />
              </button>
              <input
                type="text"
                className="inpbg flex-1"
                placeholder={`${label} name`}
                value={value.name}
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                className="inpbg flex-1"
                placeholder={`${label} value`}
                value={value.value}
                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
              />
            </div>
            <button onClick={() => handleDeleteField(index)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const BodyInput = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full p-5 bg-inputbg backdrop-blur-[2.5px] min-h-[250px] rounded-md ttt outline-none"
        placeholder="Enter request body here (JSON format)"
        value={value} onChange={handleInputChange} />
    </div>
  );
};


export { KeyValueInput, BodyInput }