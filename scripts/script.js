

const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Time = require('Time');
const TouchGestures = require('TouchGestures');
//const DeviceMotion = require('DeviceMotion');
const congrText = Scene.root.find('2dText1');
const startText = Scene.root.find('2dText0');
congrText.hidden = true;
const timeInMilliseconds = 20000;
//const planeTracker = Scene.root.find('planeTracker0');
/*
const planeTrackerTransform = planeTracker.transform;
const deviceWorldTransform = DeviceMotion.worldTransform;


planeTrackerTransform.rotationX = deviceWorldTransform.rotationX;
planeTrackerTransform.rotationY = deviceWorldTransform.rotationY;
planeTrackerTransform.rotationZ = deviceWorldTransform.rotationZ;*/
function revealCongrText(){
    congrText.hidden = false;
}


TouchGestures.onTap(startText).subscribe(function()  {
    startText.hidden =true;
    const intervalTimer = Time.setInterval(revealCongrText,timeInMilliseconds);
  
  });

 

