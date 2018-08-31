

var AnimationFrameID;
spirnum=6;
	
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
  
  var cycletime=time%(30000*spirnum); // cycle of 180 seconds
  
for (var i=1; i<=spirnum; i++)
{
	if(cycletime>(i-1)*30000 && cycletime<=i*30000)
	{
		if(cycletime<(i-1)*30000 +500)      //clean non-current shapes
			for (var j=1; j<=spirnum; j++)   
			{
				if(i==j)
					continue;
				var spj=document.getElementById('sp-'+ j);
				spj.style.display="none";
			}
			
		var sp=document.getElementById('sp-'+ i);
		var spnext=document.getElementById('sp-'+ (i%spirnum +1));
		if(cycletime>i*30000 -2000)
        {
        	var opacity= (cycletime-(i*30000-2000))/2000;
        	sp.style.opacity = 1-opacity;
        	spnext.style.opacity = opacity;
			spnext.style.display="block";
			if(opacity>0.80)
			{
				sp.style.display="none";
				sp.style.opacity=0;
				spnext.style.opacity=1;
			}
        }				
	}	
}
 

  AnimationFrameID=requestAnimFrame(function() {
          animate(startTime);
        });	
}


var startTime = (new Date()).getTime();

animate( startTime);

