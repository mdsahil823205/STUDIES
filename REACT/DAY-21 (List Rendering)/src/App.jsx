import React from 'react'
const nestedObjectData = [
  { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } },
  { name: 'Jane', age: 25, address: { city: 'Los Angeles', state: 'CA' } },
  { name: 'Bob', age: 35, address: { city: 'Chicago', state: 'IL' } },
  { name: 'Alice', age: 28, address: { city: 'Houston', state: 'TX' } },
]

const arrObjectData = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Alice', age: 28 },
]
const nestedArrayData = [
  ["john", "jane", "bob"],
  ["alice", "mike", "sara"],
  ["tom", "emily", "john"],
]
const arrStringData = ['John', 'Jane', 'Bob', 'Alice', 'Mike', 'Sara', 'Tom', 'Emily']


const App = () => {
  return (
    <div className='flex gap-20'>
      <div>
        {/* array of string start */}
        <h1 className='text-red-500'>array string with map</h1>
        <div className='bg-[seagreen]  w-fit px-10'>{arrStringData.map((elem, index) => (
          <p key={index} className='border-2 border-b-black'>{elem}</p>
        ))}
        </div>
        {/* array of string end */}
      </div>


      {/* array of object start */}
      <div>
        <h1 className='text-red-500'>array of object with map</h1>
        {arrObjectData.map((elem, index) => (
          <div className='bg-[seagreen] w-fit px-13 border-2 border-b-black' key={index}>
            <p>{elem.name}</p>
            <p>{elem.age}</p>
          </div>
        ))}
      </div>
      {/* array of object end */}

      {/* array of array start */}
      <div>
        <h1 className='text-red-500'>array of array with map</h1>
        <div>
          {nestedArrayData.map((elem, index) => (
            <div className='bg-[seagreen] w-fit px-13 border-2 border-b-black' key={index}>
              {elem.map((nestedElem, index) => (
                <p className=' border-2 border-b-black' key={index}>{nestedElem}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* array of array end */}


      {/* array of nestedObject start */}
      <div>

        <h1 className='text-red-500'>array of nestedObject with map</h1>
        <div className='bg-[seagreen]'>
          {nestedObjectData.map((elem, index) => (
            <div className='border-2 border-b-black' >
              <p>{elem.name}</p>
              <p>{elem.age}</p>
              {/* address */}
              <p>{elem.address.city}</p>
              <p>{elem.address.state}</p>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App