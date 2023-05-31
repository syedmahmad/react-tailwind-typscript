export interface ButtonProps {
    /**
     * text for the button 
     */
    buttonText: string;
    /**
     * sizes of button
     */
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
    /**
     * primary vs secondary styling.
     */
    primary?: boolean;
    /**
     * additional prop if any
     */
    props?: {};
};