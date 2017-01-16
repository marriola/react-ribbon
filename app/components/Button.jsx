import React from "react";

const Button = ({
    style,
    title,
    icon,
    size, width, height,
    orientation,
    children,
    onClick
}) => {
    if (size) {
        width = height = size;
    }

    let iconStyles = { width, height };

    if (!title && children) {
        title = children;
    }
    
    return (
        <a className={["button", style, orientation].join(" ")}
           onClick={onClick}>
            { icon ? <img src={"images/" + icon} style={iconStyles} /> : null }
            { title ? <span className="title">{title}</span> : null }
        </a>
    );
}

export default Button;
