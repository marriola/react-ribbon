import React from "react";

const Button = ({ style, title, icon, size, width, height, orientation }) => {
    if (size) {
        width = height = size;
    }

    let iconStyles = { width, height };
    
    return (
        <a className={["button", style, orientation].join(" ")}>
            { icon ? <img src={"images/" + icon} style={iconStyles} /> : null }
            { title ? <span className="title">{title}</span> : null }
        </a>
    );
}

export default Button;
