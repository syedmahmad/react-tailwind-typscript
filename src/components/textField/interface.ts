export interface TextFieldProps {
    infoText?: string;
    /**
     * required textField or not
     */
    required?: boolean;
    /**
     * type of textField e.g password
     */
    type: 'email' | 'password' | 'text';
    /**
     * placeholder for textField
     */
    placeholderText: string;
    /**
     * label for textField
     */
    label: string;
    /**
     * sizes of textField
     */
    size?: 'small' | 'medium' | 'large' | 'full';
    /**
     * additional prop if any
     */
    props?: {};
};