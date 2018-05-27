function save(link) {

	console.log(canvas);

	//var img = canvas.toDataURL("image/jpg");

	//var link = document.getElementById

	link.href = canvas.toDataURL();
	link.download = 'name.png';

/*var data = canvas.toDataURL();
var prev = window.location.href;
window.location.href = data.replace("image/jpg", "image/octet-stream");
window.location.href = prev;*/

	//document.write('<img src="'+img+'"/>');
};

document.getElementById('link').addEventListener('click', function () {

	save(this);
})

function overwrite() {

};

function loadImage(filename, canvas) {
	var img = new Image();  
	img.onload = function() {  
		showImage(img, canvas);
	};
	img.src = filename;
	return img;
}

function showImage(img, canvas) {
	canvas.width = img.naturalWidth;
	canvas.height = img.naturalHeight;
	var context = canvas.getContext("2d"); 	
	if (context) {
		context.drawImage(img, 0, 0);
	}
	else {
		alert("Error: Context not defined!");
	}
}

function show() {
	if(canvas && canvas.getContext) {
	loadImage("Tiger.jpg", canvas);
}
}

function contrastplus() {		// Alle werte multiplizieren mit einem bestimmten Wert
	
var c = document.contrastschwelle.contrastwert.value;
	
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {		//*4 da alle pixel 4 werte haben
pix.data[i] *= c;			//Rot
pix.data[i+1] *= c;		//Grün
pix.data[i+2] *= c;		//Blau
pix.data[i+3] = 255;		//Alpha
}

context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function contrastminus() {		// Alle werte multiplizieren mit einem bestimmten Wert
	
var c = parseInt(document.contrastschwelle.contrastwert.value);
	
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
pix.data[i] /= c;			//Rot
pix.data[i+1] /= c;		//Grün
pix.data[i+2] /= c;		//Blau
pix.data[i+3] = 255;		//Alpha
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function rot() {
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
pix.data[i] *= 2;			//Rot
pix.data[i+1] *= 1;		//Grün
pix.data[i+2] *= 0.5;		//Blau
pix.data[i+3] = 255;		//Alpha
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function sw() {
	
var schwelle = document.schwarzschwelle.schwarzwert.value;
	
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
	if (pix.data[i]<=schwelle) {
		pix.data[i] = 0;			//Rot
		pix.data[i+1] = 0;			//Grün
		pix.data[i+2] = 0;			//Blau
		pix.data[i+3] *= 1.0;		//Alpha		
	}
	else {
		pix.data[i] = 255;			//Rot
		pix.data[i+1] = 255;		//Grün
		pix.data[i+2] = 255;		//Blau
		pix.data[i+3] *= 1.0;		//Alpha
	}
pix.data[i+3] *= 1.0;		//Alpha
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function grey() {
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
	
		pix.data[i] = pix.data[i]*0.299+0.587*pix.data[i+1]+pix.data[i+2]*0.114;			//Rot
		pix.data[i+1] = pix.data[i]*0.299+0.587*pix.data[i+1]+pix.data[i+2]*0.114;			//Grün
		pix.data[i+2] = pix.data[i]*0.299+0.587*pix.data[i+1]+pix.data[i+2]*0.114;			//Blau
		pix.data[i+3] *= 1.0;		//Alpha		
		
	}

context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function RGB() {

var r=document.rgbschwelle.rotwert.value;		//ausgabe erfolgt im browser
var g=document.rgbschwelle.gruenwert.value;
var b=document.rgbschwelle.blauwert.value;

var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h); 
for (var i=0; i < w*h*4; i+=4) {
pix.data[i] -= (-1)*r;			//Rot	 oder parseInt und dann +=
pix.data[i+1] -= (-1)*g;		//Grün
pix.data[i+2] -= (-1)*b;		//Blau
pix.data[i+3] *= 1.0;		//Alpha
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function negative() {
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
pix.data[i] = 255-pix.data[i];			//Rot
pix.data[i+1] = 255-pix.data[i+1];		//Grün
pix.data[i+2] = 255-pix.data[i+2];		//Blau
pix.data[i+3] *= 1.0;		//Alpha
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function x2() {

var w = canvas.width*2;
var h = canvas.height*2;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
var pix2 = context.createImageData(w, h);

	canvas.width = w;
	canvas.height = h;

	var temp=0;
	var temp2=0;
	for (var y=0; y<h; y++ ) { 
			for (var x=0; x<w*4; x+=4) {
						for(temp2=0; temp2<2; temp2++) {
				pix2.data[4*temp]=pix.data[x+w*(y-1)*4];	pix2.data[4*temp+4]=pix.data[x+w*(y-1)*4];
				pix2.data[4*temp+1]=pix.data[1+x+w*(y-1)*4];	pix2.data[4*temp+5]=pix.data[1+x+w*(y-1)*4];
				pix2.data[4*temp+2]=pix.data[2+x+w*(y-1)*4];	pix2.data[4*temp+6]=pix.data[2+x+w*(y-1)*4];	
				pix2.data[4*temp+3]=255;	pix2.data[4*temp+7]=255;
				temp++;	
	}
	}
	}
	
	context.putImageData(pix2,0,0);
	
}
else {
alert("Error: Context not defined!");
}
}

function xhalb() {

var ow=canvas.width;
var oh=canvas.height;

var w = canvas.width/2;
var h = canvas.height/2;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, ow, oh);
var pix2 = context.createImageData(w, h);

	canvas.width = w;
	canvas.height = h;
	
	var temp=0;
	for (var y=0; y<oh; y+=2 ) { 
			for (var x=0; x<ow*4; x+=8) {
				pix2.data[4*temp]=pix.data[x+ow*(y-1)*4];
				pix2.data[4*temp+1]=pix.data[1+x+ow*(y-1)*4];
				pix2.data[4*temp+2]=pix.data[2+x+ow*(y-1)*4];
				pix2.data[4*temp+3]=255;
				temp++;	
	}
	}
	
	
	context.putImageData(pix2,0,0);
	
}
else {
alert("Error: Context not defined!");
}
}

function dunkel() {

var x=document.hellschwelle.hellwert.value;

var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
pix.data[i] -= x;			//Rot
pix.data[i+1] -= x;		//Grün
pix.data[i+2] -= x;		//Blau
pix.data[i+3] *= 1.0;		//Alpha
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function hell() {
	
var x=parseInt(document.hellschwelle.hellwert.value);
	
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
for (var i=0; i < w*h*4; i+=4) {
pix.data[i] += x;	if(pix.data[i]>255) {pix.data[i]=255;}		//Rot
pix.data[i+1] += x;		if(pix.data[i+1]>255) {pix.data[i+1]=255;} //Grün
pix.data[i+2] += x;		if(pix.data[i+2]>255) {pix.data[i+2]=255;} //Blau
}
context.putImageData(pix,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function testing() {

	var w = canvas.width;
	var h = canvas.height;

	var w2 = h;
	var h2 = w;

	if(canvas.getContext) {
		var context = canvas.getContext("2d");
		var pix = context.getImageData(0,0,w,h);
		var pix2 = context.createImageData(w2, h2);

			canvas.width = h;
			canvas.height = w;

		for(var x = 0; x<w2*h2*4; x+=4) {

					pix2.data[x+3] = 255;	
		}

			var temp = 0;

/*			for (var x = 0; x < w2*4; x+=4) {
				for (var y = 0; y < h2*4; y+=4) {

					//pix2.data[w2*y+x] = pix.data[temp];
					//pix2.data[w2*y+x+1] = pix.data[temp+1];
					//pix2.data[w2*y+x+2] = pix.data[temp+2];
					//pix2.data[temp+3] = 255;

					pix2.data[temp] 	 = 0;
					pix2.data[temp+1] = 0;
					pix2.data[temp+2] = 0;
					pix2.data[temp+3] = 255;

					if(temp < 50) {
						console.log((w2*y+x) + " " + temp + " " + temp/4);
					}
					temp+=4;
				}
			}*/
		

		
		for (var x = 0; x < w2*4; x+=4) {
			for (var y = (h2-1)*4; y >= 0; y-=4) {

				pix2.data[w2*y+x] = pix.data[temp];
				pix2.data[w2*y+x+1] = pix.data[temp+1];
				pix2.data[w2*y+x+2] = pix.data[temp+2];

				//pix2.data[temp+3] = 255;

				if(temp < 50) {
					console.log((w*y+x) + " " + temp);
				}
				temp+=4;
			}
		}


		/*for(var x = 0; x <  )*/

		context.putImageData(pix2,0,0);
	}
}

function rausch() {

	var w = canvas.width;
	var h = canvas.height;

	if (canvas.getContext) {
		var context = canvas.getContext("2d");
		var pix = context.getImageData(0, 0, w, h);
		var pix2 = context.createImageData(w, h);

		canvas.width = w;
		canvas.height = h;
		
		var temp=1;
		

		for (var y=1; y<h+1; y++ ) {
			for (var x=4; x<w*4+4; x+=4) {
		
				// check neighbouring fields	(starts at [1,1]) and always get the average

				pix2.data[4*temp]=( pix.data[x-4+w*(y-2)*4]+pix.data[x+w*(y-2)*4]+pix.data[x+4+w*(y-2)*4]+			// check top 3 from the pixel
									pix.data[x-4+w*(y-1)*4]+pix.data[x+w*(y-1)*4]+pix.data[x+4+w*(y-1)*4]+			// check middle 3 from the pixel
									pix.data[x-4+w*(y)*4]+pix.data[x+w*(y)*4]+pix.data[x+4+w*(y)*4])/9;				// check bottom 3 from the pixel

				pix2.data[4*temp+1]=( pix.data[x-4+w*(y-2)*4+1]+pix.data[1+x+w*(y-2)*4]+pix.data[1+x+4+w*(y-2)*4]+
									pix.data[1+x-4+w*(y-1)*4]+pix.data[1+x+w*(y-1)*4]+pix.data[1+x+4+w*(y-1)*4]+
									pix.data[1+x-4+w*(y)*4]+pix.data[1+x+w*(y)*4]+pix.data[1+x+4+w*(y)*4])/9;

				pix2.data[4*temp+2]=( pix.data[2+x-4+w*(y-2)*4]+pix.data[2+x+w*(y-2)*4]+pix.data[2+x+4+w*(y-2)*4]+
									pix.data[2+x-4+w*(y-1)*4]+pix.data[2+x+w*(y-1)*4]+pix.data[2+x+4+w*(y-1)*4]+
									pix.data[2+x-4+w*(y)*4]+pix.data[2+x+w*(y)*4]+pix.data[2+x+4+w*(y)*4])/9;

				pix2.data[4*temp+3]=255;
				temp++;
			}
		}
		context.putImageData(pix2,0,0);
	}
}

	

function rotation90() {

var w = canvas.width;
var h = canvas.height;

var w2 = h;
var h2 = w;

if (canvas.getContext) {

var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
var pix2 = context.createImageData(w2, h2);

	canvas.width = h;
	canvas.height = w;
	
	temp=0;

		for (var x=0; x<w2*4; x+=4) {
			for (var y=(h2-1)*4; y>=0; y-=4 ) {

				pix2.data[w2*y+x] 	= pix.data[temp];
				pix2.data[w2*y+x+1] = pix.data[temp+1];
				pix2.data[w2*y+x+2] = pix.data[temp+2];
				pix2.data[w2*y+x+3] = pix.data[temp+3];
				temp+=4;
			}
		}

	/*
	for (var i=0; i<h2*4; i+=4 ) {
		for (var j=0; j<w2; j++) {
				
			if(temp < 10) {
				console.log(i+h2*(j-1)*4);
			}

			pix2.data[temp] = pix.data[i+h2*(j-1)*4];
			pix2.data[temp+1] = pix.data[1+i+h2*(j-1)*4];
			pix2.data[temp+2] = pix.data[2+i+h2*(j-1)*4];
			pix2.data[temp+3] = pix.data[3+i+h2*(j-1)*4];
			temp+=4;
		}
	}
	*/

	context.putImageData(pix2,0,0);
	
}
else {
alert("Error: Context not defined!");
}
}

function rotation90gegen () {
	rotation90();
	rotation90();
	rotation90();
}

function rotation180() {
	rotation90();
	rotation90();
}

function kanten() {

var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
var pix2 = context.createImageData(w, h);

	canvas.width = w;
	canvas.height = h;
	
	var temp=0;
	
	for (var y=0; y<h; y++ ) {
		for (var x=0; x<w*4; x+=4) {

			if( (pix.data[x+w*(y-1)*4]-pix.data[x+w*(y-1)*4+4])	> 30 
			&& (pix.data[x+w*(y-1)*4]-pix.data[x+w*(y-1)*4+4])	> 30 
			&& (pix.data[x+w*(y-1)*4]-pix.data[x+w*(y-1)*4+4]) 	> 30 )

			{
				pix2.data[4*temp]=0;
				pix2.data[4*temp+1]=0;
				pix2.data[4*temp+2]=0;
				pix2.data[4*temp+3]=255;
				temp++;
			}
			else {
				pix2.data[4*temp]=255;
				pix2.data[4*temp+1]=255;
				pix2.data[4*temp+2]=255;
				pix2.data[4*temp+3]=255;
				temp++;
			}
		}
	}

	context.putImageData(pix2,0,0);
	}
else {
alert("Error: Context not defined!");
}
}


function spiegelnH() {
	
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
var pix2 = context.createImageData(w, h);

	canvas.width = w;
	canvas.height = h;
	
	temp=0;
	
/*	for (var y=0; y<w; y+=1 ) {
		for (var x=0; x<h*4; x+=4) {
				
			pix2.data[temp*4] = pix.data[(w-x-1)+(y)*w];
			pix2.data[temp*4+1] = pix.data[(w-x)+(y)*w];
			pix2.data[temp*4+2] = pix.data[(w-x+1)+(y)*w];
			pix2.data[temp*4+3] = pix.data[(w-x+2)+(y)*w];
			temp++;
		}
	}*/
	

	for (var y = (h-1)*4; y >=0; y-=4) {
		for (var x = 0; x < w*4; x+=4) {

			pix2.data[w*y+x] = pix.data[temp];
			pix2.data[w*y+x+1] = pix.data[temp+1];
			pix2.data[w*y+x+2] = pix.data[temp+2];
			pix2.data[w*y+x+3] = 255;
			temp+=4;
		}
	}


	context.putImageData(pix2,0,0);
}
else {
alert("Error: Context not defined!");
}
}

function spiegelnV() {
	
var w = canvas.width;
var h = canvas.height;

if (canvas.getContext) {
var context = canvas.getContext("2d");
var pix = context.getImageData(0, 0, w, h);
var pix2 = context.createImageData(h, w);

	canvas.width = h;
	canvas.height = w;
	
	temp=0;
	
	for (var y=0; y<w*4; y+=4 ) {
			for (var x=h; x>0; x--) {
				
				
	pix2.data[temp*4] = pix.data[-y+w*(x-1)*4];
	pix2.data[temp*4+1] = pix.data[1-y+w*(x-1)*4];
	pix2.data[temp*4+2] = pix.data[2-y+w*(x-1)*4];
	pix2.data[temp*4+3] = pix.data[3-y+w*(x-1)*4];
	temp++;
	}
	}
	
	context.putImageData(pix2,0,0);
	rotation90();
}
else {
alert("Error: Context not defined!");
}
}

function size10() {
	//var x = document.getElementById("size-10");
	//document.body.style.fontSize = "100px;"
	alert("5");
}
