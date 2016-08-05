function Castle(colour,size){
	this.xCoord = Math.floor(Math.random()*canvasWidth)
	this.yCoord = Math.floor(Math.random()*canvasHeight)
	this.colour = colour;
	this.size = 20;
	this.family = null;
	this.children = Math.floor(Math.random()*7);
	this.sons = Math.floor(Math.random()*this.children)
	this.daughters = this.children - this.sons;
	console.log("children",this.children,"sons",this.sons,"daughters",this.daughters)
}



Castle.prototype.draw = function(graphics) {
		graphics.beginFill(this.colour);
		graphics.drawCircle(this.xCoord -this.size,this.yCoord-this.size,this.size)
		graphics.endFill();
}

Castle.prototype.clicked = function(xValue,yValue){
	if ((this.xCoord - this.size) < xValue && xValue < (this.xCoord + this.size) && (this.yCoord - this.size) < yValue && yValue < (this.yCoord + this.size)){
		console.log("well done you clicked a thing")
	
	} 

}

