import React from "react";

interface TitleComponentProps {
    title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold pt-8 mb-2">{title}</h1>
            <span className="bg-blue-300 h-2 w-32 block mb-16"
                  style={{backgroundColor: "#99B7DE", height: "10px", width: "300px"}}></span>
        </div>
    )
}

export default TitleComponent;