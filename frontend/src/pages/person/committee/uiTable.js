import React from 'react'
const UiTable = ({title,objs,handleEvent,btnTitle}) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg py-10 px-5 md:px-0">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
            <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
            <div className="my-4">
                <h1 className=" font-bolder leading-tight text-gray-900 text-sm md:text-3xl">{title}</h1>
            </div>
              
            </div>
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                    <table className="table-auto w-full">

                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                    No.
                                </th>
                                <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                    Name
                                </th>
                                <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                    Gender
                                </th>
                                <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                    Role
                                </th>
                                <th className=" md:px-0 md:py-0 text-left font-medium">
                                    Actions
                                </th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            {objs && objs.map((obj) => (
                                <tr id={obj._id} key={objs.indexOf(obj) + 1}>
                                    <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                        {objs.indexOf(obj) + 1}
                                    </td>
                                    <td className="p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                        {obj.name}
                                    </td>
                                    <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800">
                                            {obj.gender}
                                        </span>
                                    </td>
                                    <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {obj.role}
                                        </div>
                                    </td>
                                    <td className=" whitespace-no-wrap border-b border-gray-200">
                                        <button className='btn btn-sm bg-indigo-600  hover:bg-indigo-500' onClick={()=>handleEvent(obj._id)}>{btnTitle}</button>
                                    </td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UiTable