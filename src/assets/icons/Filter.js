import * as React from "react";

function Filter(props) {
    return (
        <svg
            width={14}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M.75.75A.75.75 0 011.5 0h11a.75.75 0 110 1.5h-11A.75.75 0 01.75.75zm2 4A.75.75 0 013.5 4h7a.75.75 0 110 1.5h-7a.75.75 0 01-.75-.75zm2 4A.75.75 0 015.5 8h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z"
                fill="currentColor"
            />
        </svg>
    );
}

export default Filter;