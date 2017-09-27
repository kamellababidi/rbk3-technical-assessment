# Bare Node Graph

You will be running `npm test` from inside this problem's directory and making the specs pass in two parts: first for the `Graph.js` specs and then the `NamedGraph.js` specs.

### `Graph.js`

Using `node` and its core modules (without installing any other modules) build out a `Graph(adjacencyListPath)` constuctor function in `Graph.js`, which you will export. `Graph` should accept a single argument, `adjacencyListPath`, the path to a text-file adjacency list (provided for you in this directory as `adjacency_list`). The adjacency list will represent a small undirected graph of numeric nodes in the following format:

```
<node-value-1> <connected-node-value-1> ... <connected-node-value-n>
...
<node-value-n> <connected-node-value-1> ... <connected-node-value-n>
```

For example the following graph:

```
           +-+
       +---+0+----+
       |   +-+    |
       |          |
       |          |
      +++        +++     +++
      |1|        |2|-----|3|
      +-+        +-+     +++
```

would be represented in the following adjacency list:

```
0 1 2
1 0
2 0 3
3 2
```

Your `Graph(adjacencyListPath)` constructor function will read the file at `adjacencyList`, structure its contents into JavaScript in some way that will be useful to you, and build out the following methods and properties:

- `numberOfNodes` is a function that returns the number of nodes in the graph
- `numberOfNodesTimeComplexity` is a string with your claim of the time complexity for `numberOfNodes`

`exampleGraphAbove.numberOfNodes() // 4`

- `getEdges(node)` is a function that returns an array of the edges for the passed in `node`
- `getEdgesTimeComplexity` is a string with your claim of the time complexity for `getEdges`

`exampleGraphAbove.getEdges(2) // ['0', '3']`

- `numberOfEdges` is a function that returns the number of edges in the graph
- `numberOfEdgesTimeComplexity` is a string with your claim of the time complexity for `numberOfEdges`

`exampleGraphAbove.numberOfEdges() // 3`

Run `npm test` inside this problem's directory and make the specs pass. Look at the js files in `tests/` if you need more information about how your code should be structured. The tests immediately available to you use the `basic` adjacency list found in `tests/adjacency_lists/`. We will be running tests that utilize all the adjacency lists in that directory, so while you could pass the tests provided to you by just returning the expected results, this won't pass tests against the other adjacency lists.

### `NamedGraph.js`

After passing all the specs pertaining to `Graph.js`, go into `NamedGraph.js` and build out the `NamedGraph(adjacencyListPath, name)` constructor function. Its instances should be sub classes of `Graph` instances, with the only difference being the existence of a `this.name` property set equal to the `name` argument passed in.

## Available Resources

- MDN
- Stack Overflow
- NodeJS docs
- Wikipedia
