/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Soft UI Dashboard React Base Styles
 import colors from "../../base/colors";

import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";
//Soft UI Dashboard React Helper Function

import rgba from "../../functions/rgba";



const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { xxl } = boxShadows;

//los atributos comentados se pusieron directamente dentro de MuiCard en el createTheme
const card = {
    display: "flex",
    //flexDirection: "column",
    //position: "relative",
    minWidth: 0,
    //wordWrap: "break-word",
    backgroundColor: white.main,
    backgroundClip: "border-box",
    border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
    borderRadius: borderRadius.xl,
    boxShadow: xxl,
};


export default card;
