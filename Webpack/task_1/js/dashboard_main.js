import $ from "jquery";
import _ from "lodash";

$(function(){
    $("body").append(
        $("<p>").text("Holberton Dashboard"),
        $("<p>").text("Dashboard data for the students"),
        $("<button>").text("Click here to get started"),
        $("<p id='count'></p>"),
        $("<p>").text("Copyright - Holberton School")
    );
});

let count = 0;
function updateCounter(){
    count += 1;
    $("#count").text(`${count} clicks on the button`);
};   
$("button").on("click", _.debounce(updateCounter, 500))
