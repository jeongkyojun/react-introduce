import React from 'react';
import { StyledButton } from './styles';

const Button = ({children,clickHandler,...rest}) => {
    return (
        <StyledButton {...rest} onClick={clickHandler}>
            {children}
        </StyledButton>
    );
};

export default Button;
