import Enemy from "./Enemy";

class Snaky extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "snaky");
  }

  superAttack() {}
}

export default Snaky;
