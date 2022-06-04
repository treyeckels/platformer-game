class Tank extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "tank");
  }

  defensiveShield() {}
}

export default Tank;
