import React from "react";

const Button = ({
    style,
    title,
    href,
    icon,
    size, width, height,
    orientation,
    children,
    onClick
}) => {
    let maxWidth, maxHeight;
    
    if (size) {
        width = height = size;
    }

    if (width && !height) {
        maxHeight = "100%";
    }
    else if (height && !width) {
        maxWidth = "100%";
    }

    let iconStyles = {
        width,
        height,
        maxWidth,
        maxHeight
    };

    if (!title && children) {
        title = children;
    }

    let classes = ["button", style, orientation];

    return (
        <a className={classes.join(" ")}
           onClick={onClick}
           href={href}
           target={href ? "_blank" : ""} >
            { icon ? <img src={"images/" + icon} style={iconStyles} /> : null }
            { title ? <span className="title">{title}</span> : null }
        </a>
    );
}

export default Button;
