import DockerNames from '../src/main';
import { leftNames, rightNames } from '../src/data/names';

describe('Docker-Names', () => {
  test('check left name and right name is valid', () => {
    const name = DockerNames.getRandomName();

    const [left, right] = name.split('_');

    expect(leftNames).toContain(left);
    expect(rightNames).toContain(right);
  });

  test('should generate two words seprate by an underscore', () => {
    const name = DockerNames.getRandomName();
    expect(name.split('_').length).toBe(2);
  });

  // eslint-disable-next-line jest/expect-expect
  test('should generate random characters', () => {
    for (let i = 1; i < 20000; i++) {
      const names = DockerNames.getRandomName(i).split('_');
      expect(names[names.length - 1].length).toBe(i);
    }
  });
});
