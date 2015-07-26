
//Author Bill
/*		Viewer Advisory!!!
        This code is rated R for the following reasons:
		
		Code is ugly!
		Code is bloated and code reuse is under utilized
		It is cludged togeter
		
		It may be offensive to some viewers!
*/
var gl;
var singlePoint = [];
var lineNo = 0;
var points = [];
var lines = [];
var drawTriangles = false;
var triangles = [];


var lineDraw = false;
var buttonIsDown = false;
window.onload = function init(){
	
	var canvas = document.getElementById("gl-canvas");
	gl = WebGLUtils.setupWebGL(canvas);
	if(!gl)
	{
		alert("WebGL is not Available" );
	}
		
	gl.viewport(0,0, canvas.width, canvas.height);
	gl.clearColor(1.0,1.0,1.0, 1.0);
	
     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	//load shaders and initialize attribute buffers
 	document.getElementById("triangle").onclick = function drawTriangle(){
		if(drawTriangles == true)
	    {
			drawTriangles = false;
		}
		else
		{
			drawTriangles = true;
			
		}
		
	}	

	var program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);
	bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	var a_Position = gl.getAttribLocation(program, "a_Position");   
	gl.enableVertexAttribArray(a_Position);
	
	gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
	canvas.onmousedown = function(event) {	click(event, gl, canvas, a_Position);};
	canvas.onmouseup = function(event) {buttonIsDown = false;};
	canvas.onmousemove  = function(event) {	move(event, gl, canvas, a_Position);};	                                       

	function click(event, gl, canvas, a_Position){
		
		buttonIsDown = true;
		if(drawTriangles){
			
			var rect = event.target.getBoundingClientRect();
			var x = (((event.clientX - rect.left) - (canvas.width/2))/(canvas.width/2));
			var y = (((canvas.height/2) - (event.clientY - rect.top))/(canvas.height/2));
		
			
			points.push(vec2(x ,y));
			
	 
	       
			
			
			
			
		
		
		
			
		if(points.length % 3 === 0){
			alert("test");
			gl.enableVertexAttribArray(a_Position);
			triangles.push(points);
			//for(i = 0; i < triangles.length; i++)
				gl.bufferData(gl.ARRAY_BUFFER, flatten(triangles[i]), STATIC_DRAW);
			
			
			render();
			
			
		}	
		
		}
		
		
		
			
			
	
		
		}
		
		
		function move(event, gl, canvas, a_Position){
			
					
		if(buttonIsDown)	
		{
			
			var rect = event.target.getBoundingClientRect();
		
			var x = (((event.clientX - rect.left) - (canvas.width/2))/(canvas.width/2));
			var y = (((canvas.height/2) - (event.clientY - rect.top))/(canvas.height/2));
		
			
			points.push(vec2(x ,y));
			
	 
	        
			gl.enableVertexAttribArray(a_Position);
			var newPoints = flatten(points);
			 lines.push(newPoints);
			gl.bufferData(gl.ARRAY_BUFFER,newPoints,gl.STATIC_DRAW);
			
			
			
		}
		
		
		   
			
			render();
		}
	
	
	}

function render( )
{
	gl.clear(gl.COLOR_BUFFER_BIT);

	//for(var i =0; i < triagles.length; i++)
	//	gl.drawArrays(gl.TRIANGLES,0, 3);
		
	
       for(var i =0; i < lines.length; i++)
		gl.drawArrays(gl.LINES,0, lines[i].length);
}
		

