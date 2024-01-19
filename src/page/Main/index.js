import React from "react";
import About from "../About";
import Start from "../Start";
import Project from "../Project";
import Skills from "../Skills";

const Main = ()=>{
    const DEFAULT_HEIGHT = '100vh';
    return(
        <div>
            <Start height={DEFAULT_HEIGHT}></Start>
            <About height={DEFAULT_HEIGHT}></About>
            <Skills height={DEFAULT_HEIGHT}></Skills>
            <Project height={DEFAULT_HEIGHT}></Project>
        </div>
    )
}

export default Main;
