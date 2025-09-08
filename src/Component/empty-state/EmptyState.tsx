import React from 'react';
import Button from '../buttons/ButtonStyleOne';
import images from "../../assets/Untitled design.svg"

interface EmptyStateProps {
    image?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    image = images,
    title = "No data available",
    description = "Click below to add your first item!",
    buttonText = "Add New",
    onButtonClick
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <img src={image} alt="No Data" className="w-40 h-40" />
            <p className="text-gray-500 text-lg">{title}</p>
            <p className="text-gray-400 text-sm">{description}</p>
            {onButtonClick && (
                <div className='mt-2'>
                    <Button
                        label={buttonText}
                        onClick={onButtonClick}
                        color="#064490"
                        hoverColor="#0A5FC0"
                    />
                </div>
            )}
        </div>
    );
};

export default EmptyState;