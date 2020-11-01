class mango{
    constructor(x, y){
        var options = {
            isStatic: true,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.fruit = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Mango.png");
        World.add(world, this.fruit);
    }
    display(){;
        imageMode(CENTER);
        image(this.image, this.fruit.position.x, this.fruit.position.y, 130, 150);
    }
}