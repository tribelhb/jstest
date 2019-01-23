function checkVegan()
{
    var text = $("#selbox").val();  //can't use .text() because it won't see changed stuff
    var pos = text.indexOf("vegan");
    
    if(pos >= 0)
    {
        alert("No cheesecake for you!!");
    }
    else
    {
        $("#selbox").hide();
    }
}

function selMonth(event)
{
    //var clickedBtnID = $(this).attr('id');
    //alert(clickedBtnID);
    if (event.target != this) {
        var clickedBtnID = $(event.target).attr('id');
        //alert('You clicked a descendent of #dropbtncontent.');
        //alert(clickedBtnID);
        $("#dropbtn").text(clickedBtnID);
    }
}

//document.getElementById("demo1").innerHTML = "Hello Dolly!";

function sum(a, b) {
  return a + b;
}
//module.exports = sum;

// Entrypoint for jquery, everything happens in document ready
function main()
{
    $("#button").click(checkVegan);
    $("#dropbtncontent").on('click', selMonth);
}
$(document).ready(main);
