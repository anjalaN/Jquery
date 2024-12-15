var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
$('button').click(()=>{
    var hexcolor ="#";
    for(var i=0;i<6;i++){
        hexcolor = hexcolor + hex[randomcolor()];
    }
    $('span').text(hexcolor);
    $('body').css('background',hexcolor);
})
function randomcolor(){
    return Math.floor(Math.random() * hex.length);
}
$(document).ready(function()
{
$('button').click(function()
{
var content = $("button").css("button"); //Get size in pixels ex:16px
var getCurrentSize = parseFloat(content);//Do parsing to convert into number ex:16
var px = content.slice(-2);
if ((this).button == "increase")
{
getCurrentSize = getCurrentSize+2;
}
else
{
getCurrentSize = getCurrentSize-2;
};
$('button').css("button", getCurrentSize+px);
return false;
});
});