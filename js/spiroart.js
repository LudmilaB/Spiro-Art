

var AnimationFrameID;
spirnum=15;

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
		var sp=document.getElementById('sp-'+ i);
		var spnext=document.getElementById('sp-'+ (i%spirnum +1));
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
        	var opacity= (cycletime-(i*cycle-2000))/2000;
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
    else
	{
		sp=spnext;
		spnext=document.getElementById('sp-'+ (Math.floor(Math.random() * spirnum) + 1));
	}
}
 

  AnimationFrameID=requestAnimFrame(function() {
          animate(startTime);
        });	
}


var startTime = (new Date()).getTime();

animate( startTime);

