

var AnimationFrameID;
spirnum=16;
var sps=[];
for (var i=0; i<spirnum; i++)
	  sps[i]=document.getElementById('sp-'+ (i+1));

cycle=10000 // cycle of  seconds
	
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
  

for (var i=1; i<=spirnum; i++)
{

	if(cycletime>(i-1)*cycle && cycletime<=i*cycle)
	{
		var sp=sps[i-1];
		var spnext=sps[i%spirnum];
		if(cycletime<(i-1)*cycle +500)
			for (var j=1; j<=spirnum; j++)   //clean non-current shapes
			{
				if(i==j)
					continue;
				var spj=document.getElementById('sp-'+ j);
				spj.style.display="none";
			}
				
		if(cycletime>i*cycle -1500)
        {
        	var opacity= (cycletime-(i*cycle-1500))/1500;
        	sp.style.opacity = 1-opacity;
        	spnext.style.opacity = opacity;
			spnext.style.display="block";
			if(opacity>0.9)
			{
				sp.style.display="none";
				sp.style.opacity=0;
			}
			if(opacity>0.95)
				spnext.style.opacity=1;
        }				
	}
}
 

  AnimationFrameID=requestAnimFrame(function() {
          animate(startTime);
        });	
}


var startTime = (new Date()).getTime();

animate( startTime);

