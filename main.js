frameRate=60;
window.onload=function(){
  initAll();
  setInterval(procAll, 1000/frameRate); // main loop
  setTimeout(scrollTo, 100, 0, 1);
}
var canvas;
var ctx;
var sx=30;
var sy=30;

var initAll=function(){
  canvas = document.getElementById("canvas");
  if(!canvas||!canvas.getContext) return;
  ctx = canvas.getContext('2d');
  sx=screen.width*1.75;
  sy=screen.height*1.5;
  document.getElementById("canvas").width =sx;
  document.getElementById("canvas").height=sy;
  var id = ctx.getImageData(0,0,sx,sy);
  var data=id.data;
  var pat=[[1,1,1,1,0],
           [1,0,0,1,0],
           [1,0,0,1,0],
           [1,1,1,1,0],
           [0,0,0,0,0]];
  for(x=0;x<sx;x++){
    for(y=0;y<sy;y++){
      var x1=x%5;
      var y1=y%5;
      var p=pat[x1][y1];
      var r=1;
      var g=1;
      var b=1;
      if(Math.floor(x/5)*5==sx/2 && Math.floor(y/5)*5==sy/2){
        g=0;b=0;
      }
      data[(x+y*sx)*4+0]=r*p*256;
      data[(x+y*sx)*4+1]=g*p*256;
      data[(x+y*sx)*4+2]=b*p*256;
      data[(x+y*sx)*4+3]=255;
    }
  }
  ctx.putImageData(id,0,0,0,0,sx,sy);
};
var procAll=function(){
};
