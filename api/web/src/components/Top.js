import React from "react";

function Top() {
    return (
        <form action="/result" method="get">
            <label for="name">店名</label>
            <input id="name" type="text" name="name" />
            <label for="range">範囲</label>
            <input id="range" type="text" name="range" />
            <input type="submit" value="Submit" />
        </form>
    );
}
export default Top;
