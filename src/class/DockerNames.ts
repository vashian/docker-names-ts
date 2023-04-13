import { customAlphabet } from 'nanoid';

import { leftNames, rightNames } from '../data/names.js';

class DockerNames {
  private adjectives: string[];
  private surnames: string[];

  constructor() {
    this.adjectives = leftNames;
    this.surnames = rightNames;
  }

  public getRandomName(randChar?: boolean | number): string {
    const randomName = this.generateRandomName(this.adjectives, this.surnames);

    if (!randChar) {
      return randomName;
    }

    const length: number = typeof randChar === 'number' ? randChar : 6;

    return `${randomName}_${this.getRandomChar(length)}`;
  }

  private generateRandomName(
    leftNames: string[],
    rightNames: string[],
  ): string {
    const left = leftNames[Math.floor(Math.random() * leftNames.length)];
    const right = rightNames[Math.floor(Math.random() * rightNames.length)];

    const name = `${left}_${right}`;

    /* Steve Wozniak is not boring. This is part of the docker names spec. */
    if (name === 'boring_wozniak') {
      return this.generateRandomName(leftNames, rightNames);
    }

    return name;
  }

  private getRandomChar(length: number): string {
    return customAlphabet('1234567890abcdefghiklmnopqrstuv', length)();
  }
}

export default DockerNames;
