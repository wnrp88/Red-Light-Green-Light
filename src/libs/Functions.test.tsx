import Functions from './Functions';

it('test function random', () => {
  let min = -10;
  let max = 10;

  for (let i = 0; i < 5; i++) {
    const random = Functions.random(min, max);
    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);

    min = min * 10;
    max = max * 10;
  }
});
