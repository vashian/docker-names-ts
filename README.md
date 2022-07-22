# Docker-Names-TS

If no name is provided by the user while creating/running a Docker container, Docker automatically assigns the container a name.

examples:

```
adoring_galileo
amazing_kalam
hardcore_kare
```

Also you can see it from docker client list command:
<a href="https://ibb.co/1245JZw"><img src="https://i.ibb.co/Hg9sp7k/Screen-Shot-2022-07-22-at-11-16-03-PM.png" alt="Screen-Shot-2022-07-22-at-11-16-03-PM" border="0"></a>

### How to use it?

this module exports only one method:

```javascript
import { dockerNames } from 'docker-names-ts';
console.log(dockerNames.getRandomName());

$ amazing_kalam
```

Additionally, `getRandomName` accepts an optional parameter `length` which is the
length of the random characters to be generated.

```javascript
console.log(dockerNames.getRandomName(10));

$ amazing_kalam_skd23fsdkj
```

**Note:** you can leave an optional parameter `true` to generate a random name with a **_6_** length.

`*` As you can see using `Math.random` which means its not very random. These names should never be used as any sort of unique id.
The names are mostly applicable for small lists of ephemeral objects that you want to have easy to remember identifiers for.

## Contributing

Contributions are always welcome!
