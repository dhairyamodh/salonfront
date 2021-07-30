import * as React from "react";

function Clock(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M39.5 18.5C39.5 22.9086 37.6893 26.8697 34.714 31.1637C32.7635 33.9788 30.3434 36.8965 27.6388 40.1573C26.3183 41.7493 24.93 43.4232 23.4953 45.2068C22.2962 43.7506 21.1349 42.3668 20.022 41.0407C16.9832 37.4197 14.3051 34.2285 12.2027 31.1656C9.2574 26.8745 7.5 22.9121 7.5 18.5C7.5 9.66344 14.6634 2.5 23.5 2.5C32.3366 2.5 39.5 9.66344 39.5 18.5Z" fill="currentColor" stroke="black"></path><circle cx="23.5" cy="17.5" r="6" fill="white" stroke="black"></circle></svg>
    );
}

export default Clock;