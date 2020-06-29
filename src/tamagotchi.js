export class Tamagotchi {
  constructor() {
    this.hunger = 5; 
    this.health = 10; 
    this.sleep = 7; 
    this.happiness = 2; 
    this.cleanliness = 10; 
    this.isSick = false;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 5000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 10000);
  }

  setHappiness() {
    setInterval(() => {
      this.happiness--;
    }, 5000);

  }
}