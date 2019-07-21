import React, {CSSProperties} from "react";

export default (props: CSSProperties) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width={props.width} height={props.height}
                 viewBox="0 0 50 50"
                 style={{fill: props.color}}>
                <g id="surface1">
                    <path
                        d="M 49.605469 0.21875 C 49.296875 -0.0234375 48.875 -0.0585938 48.527344 0.128906 L 0.527344 26.128906 C 0.179688 26.316406 -0.0234375 26.695313 0.015625 27.089844 C 0.0507813 27.484375 0.316406 27.820313 0.691406 27.941406 L 14.335938 32.394531 L 13.015625 45.902344 C 12.972656 46.332031 13.210938 46.738281 13.605469 46.90625 C 13.730469 46.964844 13.867188 46.992188 14 46.992188 C 14.277344 46.992188 14.550781 46.875 14.742188 46.65625 L 23.347656 36.933594 L 36.304688 49.707031 C 36.492188 49.890625 36.742188 49.992188 37 49.992188 C 37.089844 49.992188 37.179688 49.976563 37.269531 49.953125 C 37.609375 49.859375 37.875 49.585938 37.960938 49.242188 L 49.960938 1.242188 C 50.054688 0.859375 49.917969 0.457031 49.605469 0.21875 Z M 16.34375 32.210938 L 35.855469 16.433594 L 22.558594 34.84375 L 15.28125 43.058594 Z "/>
                </g>
            </svg>
        </>
    );
}
