import React, { useState } from "react";
import Popup from "./components/Popup";

const App = () => {
  const [deletePopup, setdeletePopup] = useState(false);
  const [editPopup, seteditPopup] = useState(false);
  return (
    <div className="bg-[#302e2e] flex h-screen w-full justify-center items-center gap-6 text-white">
      <div>
        <button
          onClick={() => setdeletePopup(true)}
          className="text-white text-2xl border-2 px-6 py-4 rounded-2xl capitalize"
        >
          delete
        </button>
        <Popup
          showPopup={deletePopup}
          setshowPopup={setdeletePopup}
          title="delete"
        />
      </div>
      <div>
        <button
          onClick={() => seteditPopup(true)}
          className="text-white text-2xl border-2 px-6 py-4 rounded-2xl capitalize"
        >
          edit
        </button>
        <Popup showPopup={editPopup} setshowPopup={seteditPopup} title="edit" />
      </div>
    </div>
  );
};

export default App;
