

var AnimationFrameID;
spirnum=15;
var sps=[];
for (var i=0; i<spirnum; i++)
	  sps[i]=document.getElementById('sp-'+ (i+1));

cycle=15000 // cycle of  seconds
	
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();


function animate(startTime)
{
var time = (new Date()).getTime() - startTime; 
var cycletime=time%(cycle*spirnum); 

var sp_num= Math.floor(time/cycle%spirnum);
var sp=sps[sp_num]; 
sp.style.display="block";
sp.style.opacity = 1;

for (var i=0; i<spirnum; i++)   //clean non-current shapes
{
	if(i==sp_num)
	  continue;
	var spi=sps[i];
	spi.style.display="none";
}
if(cycletime>(sp_num+1)*cycle -2500 || cycletime<sp_num*cycle +2500)
{
	var opacity;
	if(cycletime>(sp_num+1)*cycle -2500)
	   opacity= (cycletime-((sp_num+1)*cycle-2500))/2500;
   else
	   opacity= (sp_num*cycle+2500-cycletime)/2500;
	if(opacity>0.95)
		opacity=0.95;
	sp.style.opacity = 1-opacity;
}	

  AnimationFrameID=requestAnimFrame(function() {
          animate(startTime);
        });	
}


var startTime = (new Date()).getTime();

animate( startTime);

