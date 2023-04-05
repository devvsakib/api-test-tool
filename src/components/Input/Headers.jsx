import { FaTrash } from 'react-icons/fa'

const Headers = () => {
    return (
        <div className='flex gap-8'>
            <div className='flex gap-5'>
                <input
                    type="text"
                    className="inpbg flex-1"
                    placeholder={"name"}
                />
                <input
                    type="text"
                    className="inpbg flex-1"
                    placeholder={"value"}
                />
            </div>
            <button>
                <FaTrash />
            </button>
        </div>
    )
}

export default Headers