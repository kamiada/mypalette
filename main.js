const palette = [{
    "colour": "#F3D1DC"
},
{
    "colour": "#D2A3A9"
},
{
    "colour": "#faf0e6"
},
{
    "colour": "#eed9c4"
}];

function GenerateHolders(){ 
    palette.map(holder => {
    const wrapper = document.getElementById("wrapper");
    const holderElement = document.createElement("div");
    const hexText = document.createElement("span");
    const txt = document.createTextNode(holder.colour.toString());
    hexText.appendChild(txt);
    holderElement.setAttribute("class", "holders");
    wrapper.append(holderElement);   
    holderElement.append(hexText);
    holderElement.style.backgroundColor = holder.colour;
})};

