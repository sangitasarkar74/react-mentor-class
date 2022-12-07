import React from "react";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        console.log("++ Mounted About");

        return () => {
            console.log("++ Un-mounted About");
        };
    }, []);
    return <div>About</div>
}

export default About;