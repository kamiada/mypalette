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
},
{
    "colour": "#a685e2"
},
{
    "colour": "#ffabe1"
},
{
    "colour": "F6A7C1"
},
{
    "colour": "#FDCF6"
},
{
    "colour": "#97F2F3"
},
{
    "colour": "#EBC3C1"
},
{
    "colour": "#ECAD8F"
},
{
    "colour": "#E18D96"
},
{
    "colour": "#B3EBE0"
},
{
    "colour": "#FFBFA3"
},
{
    "colour": "#9DABDD"
},
{
    "colour": "#9799BA"
},
{
    "colour": "#F9E1E0"
},
{
    "colour": "#FEADB9"
},
{
    "colour": "#9799BA"
},
{
    "colour": "#BC85A3"
},
{
    "colour": "#E6B655"
},
{
    "colour": "#F0A35E"
},
{
    "colour": "#ADDDCE"
},
{
    "colour": "#F5C9B2"
},
{
    "colour": "#8AC0DE"
},
{
    "colour": "#F0C5D5"
},
{
    "colour": "#F5C9B2"
},
{
    "colour": "#FED797"
},
{
    "colour": "#AB6393"
},
{
    "colour": "#9C8ADE"
},
{
    "colour": "#E69288"
},
{
    "colour": "#FEB68E"
},
{
    "colour": "#F99A9C"
},
{
    "colour": "#D3C0F9"
},
{
    "colour": "#D7E7A9"
},
{
    "colour": "#FDBCCF"
},
{
    "colour": "#C3E4FD"
},
{
    "colour": "#B5BA7E"
},
{
    "colour": "#F4AFB3"
},
{
    "colour": "#E18D96"
},
{
    "colour": "#FA6E4F"
},
{
    "colour": "#F2CF59"
},
{
    "colour": "#FB8E7E"
},
{
    "colour": "#FBCA9D"
},
{
    "colour": "#B2D9EA"
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