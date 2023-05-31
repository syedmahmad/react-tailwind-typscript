import React, { useMemo } from 'react';
import { getSize, getPrimary } from './ buttonHelperFunctions';
import { ButtonProps } from './interface';

export const Button = ({ primary = true, size = 'medium', buttonText, ...props }: ButtonProps) => {
    const computedClasses = useMemo(() => {
        const modeClass = getPrimary(primary);
        const sizeClass = getSize(size);

        return [modeClass, sizeClass].join(' ');
    }, [primary, size]);

    return (
        <button type="button" className={`cursor-pointer rounded-md border-2 font-bold leading-none inline-block ${computedClasses}`} {...props}>
            {buttonText}
        </button>
    );
};