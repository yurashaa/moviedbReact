import React from "react";
import './Button.scss'

const CN = 'my-btn';

export const Button = (props) => {
    const {
        label = 'Click me',
        onClick,
        isDisable = false,
        className = 'btn-primary',
        id,
        type = 'button',
    } = props;

    const clickHandler = (e) => {
        onClick && onClick(e);
    };

    return (
        <button
            className={`${CN} btn add-margin ${isDisable && 'disabled'} ${className}`}
            onClick={clickHandler}
            id={id}
            type={type}
        >
            { label }
        </button>
    )

};