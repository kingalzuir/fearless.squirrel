var Ennemy = function(name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 3;
    this.bullets = new Array();
    this.direction = direction;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;

    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));
};

Player.prototype.accelerate = function (distance) {
    var max = 2;

    this.speed += distance / 4;
    if (this.speed >= max) {
        this.speed = max;
    }
};

Player.prototype.decelerate = function (distance) {
    var min = -1;

    this.speed -= distance / 16;
    if (this.speed <= min) {
        this.speed = min;
    }
};

Player.prototype.turnRight = function (angle) {
    this.direction += angle;
    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), +angle);
};

Player.prototype.turnLeft = function (angle) {
    this.direction += angle;
    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), angle);
};