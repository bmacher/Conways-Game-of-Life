# Node.js back end with Express

This is a simple backend in node. js with express that handles post-requests containing a generation of cells in JSON format (array of binaries), calculates the new generation and sends it back to the front end.

Example Generation

```javascript
route => '/cgof/next-gen'

// generation with the size of 5

req = [
  [1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

res = [
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
```      