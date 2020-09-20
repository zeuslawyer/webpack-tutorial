// const path = require("path");
import path from "path";
import moment from "moment";

import "./style.css";
import "./style.scss";
import { getUsers } from "./common/userAPI";

const fancyFunc = () => {
    return [1, 2];
};

const [a, b] = fancyFunc();

console.log(
    `Hello webpack! Here is some fancy stuff: ${a}, ${b}`,
    `...and all this is in the folder ${path.resolve(__dirname, "build")}
    
    ...and we are running in ${process.env.NODE_ENV} mode`
);

getUsers().then(json => console.log(json));
