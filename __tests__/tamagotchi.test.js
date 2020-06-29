import { Tamagotchi } from './../src/tamagotchi.js';

describe('create Tamagotchi object', () => {

  test('should create Tamagotchi object', () => {
    const tamagotchi = new Tamagotchi();
    expect(tamagotchi).toMatchObject({
      hunger: 5, 
      health: 10, 
      sleep: 7, 
      happiness: 2, 
      cleanliness: 10, 
      isSick: false
    });
  });
});

describe('Property values over time', () => {
  jest.useFakeTimers();
  let tamagotchi;

  beforeEach(function() {
    tamagotchi = new Tamagotchi();
    tamagotchi.setHunger();
    tamagotchi.setSleep();
    tamagotchi.setHappiness();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should decrease hunger property by 1 every 5 seconds', () => {
    jest.advanceTimersByTime(5000);
    expect(tamagotchi.hunger).toBe(4);
  });

  test('should decrease sleep property by 1 every 10 seconds', () => {
    jest.advanceTimersByTime(10000);
    expect(tamagotchi.sleep).toBe(6);
  });

  test('should decrease happiness property by 1 every 5 seconds', () => {
    jest.advanceTimersByTime(5000);
    expect(tamagotchi.happiness).toBe(1);
  });
});