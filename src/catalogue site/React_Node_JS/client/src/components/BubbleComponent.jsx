import React from "react";

const BubbleComponent = ({ message, id }) => {
    return (
        <div className={`bubble${id} text-center bg-[#99B6DE] text-white p-2 rounded-md h-[200px] w-[200px] flex items-center justify-center mt-2`}>
            <p className="text-white">{message}</p>
        </div>
    );
}

export default BubbleComponent;
