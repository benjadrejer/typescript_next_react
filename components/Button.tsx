import React from 'react';

interface IButton {
    type: keyof JSX.IntrinsicElements;
    href?: string;
    text: string;
    onClick?: () => void;
}

interface IButtonProperties {
    href?: string;
    onClick?: () => void;
}

const Button = ({ type, href, text, onClick }: IButton): JSX.Element => {
    let BtnType: keyof JSX.IntrinsicElements = 'button';
    let properties: IButtonProperties = {}

    if (type === 'a' && href) {
        properties.href = href;
        BtnType = 'a';
    }

    if (onClick) {
        properties.onClick = onClick;
    }

    return (
        <BtnType {...properties}>
            Hello!
        </BtnType>
    );
};

export default Button;
