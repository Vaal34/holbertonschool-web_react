import $ from "jquery";
import _ from "lodash";
import './body.css';

$(function(){
    $("body").append(
        $("<p>").text("Holberton Dashboard"),
        $("<p>").text("Dashboard data for the students"),
        $("<button>").text("Click here to get started"),
        $("<p id='count'></p>"),
        $("<p>").text("Copyright - Holberton School")
    );
});

const count = 0;
function updateCounter(){
    count++;
    $("#count").text(`${count} click on the button`);
};   
$("body button").on("click", _.debounce(updateCounter, 500))
