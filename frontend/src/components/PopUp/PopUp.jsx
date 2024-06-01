import React from "react";

const PopUp = (showPopup, setShowPopup) => {
  return  <>
    {
        showPopup && (
            <div>
                <div className="h-screen">
                    1:50:01        
                </div>
            </div>
        )
    }
    </>;
};

export default PopUp;
