//an image change function that detect class name (based on Id) and assign new class name when triggered
function changeImage() {
    let title = document.getElementById("bulb").className;
    if (title ==  'bulb-on'){
        document.getElementById("bulb").className = 'bulb-off';
    }
    else{
        document.getElementById("bulb").className = 'bulb-on';
    }
}