import React, { useMemo } from 'react';
import { getSize } from './textFieldHelperFunctions';
import { TextFieldProps } from './interface';

export const TextField = ({ infoText, required, type='text', placeholderText = 'Username', label = 'Username', size = 'medium', props}: TextFieldProps) => {
    const computedClasses = useMemo(() => {
        const sizeClass = getSize(size);

        return [sizeClass];
    }, [size]);
    
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input className={`${computedClasses} appearance-none border rounded-md py-2 px-3 text-gray-700 focus:outline-none`} id="username" type={type} placeholder={placeholderText} required={required} {...props}/>
            {infoText ? <label className="block text-gray-400 text-sm mt-2">
                {infoText}
            </label> : null}
        </>
    );
};