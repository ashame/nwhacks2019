import React, { Component } from 'react';
import './ProgressBar.css';

class StarField extends Component {

    componentDidMount(){
        function Star(x,y,r,color){
            this.x = x;
            this.y = y;
            this.r = r;
            this.rChange = 0.015;
            // this.vx = Math.floor(Math.random()*4+1);
            // this.vy = Math.floor(Math.random()*4+1);
            this.color = color;
        }

        Star.prototype = {
            constructor: Star,
            render: function(){
              context.beginPath();
              context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
              context.shadowBlur = 8;
              context.shadowColor = "white";
              context.fillStyle = this.color;
              context.fill();
            },
            update: function(){

               if (this.r > 2 || this.r < .8){
                   this.rChange = - this.rChange;
               }
               this.r += this.rChange;
            }
        }

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        var C_WIDTH = canvas.width = document.body.offsetWidth;
        var C_HEIGHT = canvas.height = document.body.offsetHeight;

        function randomColor(){
                var arrColors = ["ffffff", "ffecd3" , "bfcfff"];
                return "#"+arrColors[Math.floor((Math.random()*3))];
        }

        var arrStars = [];
        for(var i = 0; i < 400; i++){
            var randX = Math.floor((Math.random()*C_WIDTH)+1);
            var randY = Math.floor((Math.random()*C_HEIGHT)+1);
            var randR = Math.random() * 1.7 + .5;

            var star = new Star(randX, randY, randR, randomColor());
            arrStars.push(star);
        }
        function update(){
          for(i = 0; i < arrStars.length; i ++){
            arrStars[i].update();
          }
        }
        function animate(){
          update();
          /*
            Remove comments below these for a cool trailing effect & comment
            out the context.clearRect.
          */
            //context.fillStyle = 'rgba(255, 255, 255, .1)';
            //context.fillRect(0,0,C_WIDTH,C_HEIGHT);
            context.clearRect(0,0,C_WIDTH,C_HEIGHT);
            for(var i = 0; i < arrStars.length; i++){
              arrStars[i].render();
            }
            requestAnimationFrame(animate);
            // var grd = context.createLinearGradient(0, 0, 200, 0);
            // grd.addColorStop(0, "blue");
            // grd.addColorStop(1, "white");

            // Fill with gradient
            // context.fillStyle = "white";
            // context.fillRect(20, 20, 250, 80);
            context.fillStyle = "white";
            context.font = "30px 'Press Start 2P'";
            context.fillText("Earth this way ->", canvas.width / 4, canvas.height / 2);
        }

        animate();
    }
    render(){
        return(
        <canvas id="canvas" style={{background: "black",position: "absolute"}}></canvas>

        )
    }
}

export default StarField;
