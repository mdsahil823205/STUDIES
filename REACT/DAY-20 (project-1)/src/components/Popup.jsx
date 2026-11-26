import React from 'react'

const Popup = ({ showPopup, setshowPopup, title }) => {
    function handleClick(title) {
        setshowPopup(false)
    }
    return (
        <div>
            {showPopup && (
                <div className="h-screen w-screen flex justify-center items-center bg-[#1d1c1c] absolute top-0 left-0">
                    <button onClick={handleClick} className=" absolute right-5 top-5 border-2 p-4 rounded-lg cursor-pointer">❌</button>
                    <div className="h-screen w-full max-h-[400px] max-w-[650px] bg-[#383636] rounded-2xl border-2 flex justify-center items-center flex-col gap-7">
                        <h1 className="text-center  text-3xl">⚠️ {title}</h1>
                        <p className="text-center  text-xl">are you sure you want to {title} this</p>
                        <div className="flex gap-10" >
                            <button onClick={() => {
                                handleClick(title)
                                
                            }} className="px-8 py-4 border-2 rounded-xl capitalize bg-[tomato]">yes</button>
                            <button onClick={() => {
                                handleClick(title)
                            }} className="px-8 py-4 border-2 rounded-xl capitalize bg-[green]">no</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Popup