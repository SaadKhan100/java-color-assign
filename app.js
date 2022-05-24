function bgColors(){
    var container = document.getElementById("container");
    var bgColorName = prompt("enter your bg colour");
    container.style.backgroundColor = bgColorName;
}

function textColors(){
    var heading = document.getElementById("heading");
    var para = document.getElementById("para");
    var textColor = prompt("enter text color");
    heading.style.color = textColor;
    para.style.color = textColor;
}

function imgHandle(condition){
    var image = document.getElementById("image");

    if(condition == "show"){
        image.style.display = "block";
    }else if(condition == "hide"){
        image.style.display = "none";
    }else if(condition == "small"){
        image.style.width = "200px";
        image.style.height = "200px";
    }else if(condition == "large"){
        image.style.width = "500px";
        image.style.height = "500px";
    }else{
        return;
    }
}


function imgChange(toggle,e){
    if(toggle == "on"){
        e.src = "lighton.jpg";
    }else{
        e.src = "lightoff.jpg";
    }
}



function changePara(){
    var para1 = document.getElementById("para1");
    var paraColor1 = prompt("enter color name for para1");
    para1.style.color = paraColor1;


    var para2 = document.getElementById("para2");
    var paraColor2 = prompt("enter color name for para2");
    para2.style.color = paraColor2;

    var para3 = document.getElementById("para3");
    var paraColor3 = prompt("enter color name for para3");
    para3.style.color = paraColor3;


    var para4 = document.getElementById("para4");
    var paraColor4 = prompt("enter color name for para4");
    para4.style.color = paraColor4;
}

function changePara1(){
    var para5 = document.getElementById("para5");
    var paraColor5 = prompt("enter color name for para1");
    para5.style.color = paraColor5;



    var para8 = document.getElementById("para8");
    var paraColor8 = prompt("enter color name for para4");
    para8.style.color = paraColor8;
}