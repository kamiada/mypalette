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
    holderElement.setAttribute("class", "holders");
    wrapper.append(holderElement);   
    holderElement.style.backgroundColor = holder.colour;
})};

