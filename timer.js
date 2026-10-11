export class FocusTimer{constructor(render,finish){this.render=render;this.finish=finish;this.duration=1500;this.remaining=1500;this.endAt=0;this.interval=null;this.running=false;}
setDuration(seconds){if(!this.running){this.duration=seconds;this.remaining=seconds;this.render(seconds,'READY');}}
start(){if(this.running)return;this.running=true;this.endAt=Date.now()+this.remaining*1000;this.tick();this.interval=setInterval(()=>this.tick(),250);}
pause(){if(!this.running)return;this.remaining=Math.max(0,Math.ceil((this.endAt-Date.now())/1000));this.running=false;clearInterval(this.interval);this.render(this.remaining,'PAUSED');}
reset(){this.running=false;clearInterval(this.interval);this.remaining=this.duration;this.render(this.remaining,'READY');}
tick(){this.remaining=Math.max(0,Math.ceil((this.endAt-Date.now())/1000));this.render(this.remaining,'RUNNING');if(this.remaining===0){this.running=false;clearInterval(this.interval);this.render(0,'COMPLETE');this.finish();}}}