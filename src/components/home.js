import React from "react";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        console.log("++ Mounted Home");

        return () => {
            console.log("++ Un-mounted Home");
        };
    }, []);

    return <div>Home</div>;
}

export default Home;