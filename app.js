const colors =["orchid","olive","green","red","pink","rgb(79, 13, 233)","thistle","rgb(233, 229, 13)","rgb(190, 188, 37)","rgb(78, 163, 152)","rgb(163, 138, 78)","rgb(150, 6, 37)","rgb(177, 74, 96)","rosybrown","royalblue","pink","aqua","rgba(206, 56, 156)","rgb(40, 17, 184)","#f15025","blue","orange","maroon","yellow","purple","lightseagreen","lightgray","lightgoldenrodyellow","palegoldenrod"];
const color =document.querySelector(".color");

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
 
const randomNumber = getRandomNumbers();    
document.body.style.background = colors[randomNumber];
color.textContent = colors[randomNumber];
console.log(colors[randomNumber]);

});

function getRandomNumbers(){

       //get random number between 0 - 3
       return  Math.floor(Math.random() * colors.length);

       


}
console.log("colors.length :    " + colors.length);