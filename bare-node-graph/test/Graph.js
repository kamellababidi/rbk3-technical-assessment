var _ = require('underscore');
var expect = require('chai').expect;
var Graph = require('../Graph.js');
var NamedGraph = require('../NamedGraph.js');

// The tests in this suite have been structured in such a way that if you
// add a few more properties to this object, you will be able to
// quadruple your test suite. Can you figure out how?
var adjacencyListPaths = {
  basic: __dirname + '/adjacency_lists/basic',
};

// This function is used to run the same test on the graphs
// created by each list in `adjacencyListPaths`
var they = function (description, assertion, expected) {
  expected = expected || {};
  describe(description, function () {
    _.each(adjacencyListPaths, function (path, type) {
      it(type, function () {
        assertion.call(this, new Graph(path), expected[type]);
      });
    }, this);
  });
};

describe('Graph', function () {

  it('should exist', function () {
    expect(Graph).to.exist;
  });

  it('should be a function', function () {
    expect(Graph).to.be.a('function');
  });

});

describe('Graph.prototype.numberOfNodes', function () {

  they('should exist', function (graph) {
    expect(graph.numberOfNodes).to.exist;
  });

  they('should be a function', function (graph) {
    expect(graph.numberOfNodes).to.be.a('function');
  });

  they('should return a number', function (graph) {
    expect(graph.numberOfNodes()).to.be.a('number');
  });

  they('should return the number of nodes in the passed in graph', function (graph, expected) {
    expect(graph.numberOfNodes()).to.equal(expected);
  }, {
    basic: 6,
    withNewline: 6,
    doubleDigits: 13,
    nonConsecutive: 5
  });

});


describe('Graph.prototype.getEdges(node)', function () {

  they('should exist', function (graph) {
    expect(graph.getEdges).to.exist;
  });

  they('should be a function', function (graph) {
    expect(graph.getEdges).to.be.a('function');
  });

  they('should return an array', function (graph) {
    expect(graph.getEdges('0')).to.be.an.instanceOf(Array);
  });

  they('should return an array of the nodes `node` shares edges with', function (graph, expected) {
    expect(graph.getEdges('0')).to.deep.equal(expected);
  }, {
    basic: ['2', '4', '5'],
    withNewline: [ '2', '4', '5' ],
    doubleDigits: ['3', '5', '9', '11'],
    nonConsecutive: [ '3', '8']
  });

});

describe('Graph.prototype.numberOfEdges', function () {

  they('should exist', function (graph) {
    expect(graph.numberOfEdges).to.exist;
  });

  they('should be a function', function (graph) {
    expect(graph.numberOfEdges).to.be.a('function');
  });

  they('should return a number', function (graph) {
    expect(graph.numberOfEdges()).to.be.a('number');
  });

  they('should return the number of edges in the graph', function (graph, expected) {
    expect(graph.numberOfEdges()).to.equal(expected);
  }, {
    basic: 7,
    withNewline: 7,
    doubleDigits: 24,
    nonConsecutive: 4
  });

});

describe('graph.numberOfNodesTimeComplexity', function () {

  they('should exist', function (graph) {
    expect(graph.numberOfNodesTimeComplexity).to.exist;
  });

  they('should be a string', function (graph) {
    expect(graph.numberOfNodesTimeComplexity).to.be.a('string');
  });

});

describe('graph.getEdgesTimeComplexity', function () {

  they('should exist', function (graph) {
    expect(graph.getEdgesTimeComplexity).to.exist;
  });

  they('should be a string', function (graph) {
    expect(graph.getEdgesTimeComplexity).to.be.a('string');
  });

});

describe('graph.numberOfEdgesTimeComplexity', function () {

  they('should exist', function (graph) {
    expect(graph.numberOfEdgesTimeComplexity).to.exist;
  });

  they('should be a string', function (graph) {
    expect(graph.numberOfEdgesTimeComplexity).to.be.a('string');
  });

});
