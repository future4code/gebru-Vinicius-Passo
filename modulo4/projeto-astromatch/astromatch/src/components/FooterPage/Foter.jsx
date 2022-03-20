import React, { useEffect, useState } from "react";
import axios from "axios";

const FooterPage = (props) => {
    const like = () => {
        const body = {
            id: props.perfils.id,
            choice: true,
        };
        axios
            .post(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person`,
                body
            )
            .then(() => {
                alert("gostou dela ne safadinho");
            })
            .catch(() => {
                console.log("err");
            });
    };

    // useEffect( () => {
        
    // }, [props.perfils])

    const notLike = () => {
        const body = {
            id: props.perfils.id,
            choice: false,
        };
        axios
            .post(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person`,
                body
            )
            .then(() => {
                alert("se interressou né safadinho");
            })
            .catch(() => {
                console.log("erro");
            });
    };

    return (
        <>
            <div>
                <button onClick={notLike}>Descurtit</button>
            </div>
            <div>
                <button onClick={like}>Curit</button>
            </div>
        </>
    );
};

export default FooterPage;
