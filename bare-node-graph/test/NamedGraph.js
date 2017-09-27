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
        assertion.call(this, new NamedGraph(path, type), expected[type]);
      });
    }, this);
  });
};

describe('NamedGraph', function () {

  it('should exist', function () {
    expect(NamedGraph).to.exist;
  });

  it('should be a function', function () {
    expect(NamedGraph).to.be.a('function');
  });

  they('should be sub classed from "Graph"', function (namedGraph) {
    expect(namedGraph).to.be.instanceOf(Graph);
    expect(namedGraph).to.be.instanceOf(NamedGraph);
  });

});

describe('NamedGraph.prototype', function () {

  it('should not contain any of Graph.prototype\'s methods', function () {
    expect(NamedGraph.prototype).to.not.haveOwnProperty('numberOfNodes');
    expect(NamedGraph.prototype).to.not.haveOwnProperty('getEdges');
    expect(NamedGraph.prototype).to.not.haveOwnProperty('numberOfEdges');
  });

});

describe('NamedGraph.prototype.numberOfNodes', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.numberOfNodes).to.exist;
  });

  they('should be a function', function (namedGraph) {
    expect(namedGraph.numberOfNodes).to.be.a('function');
  });

  they('should return a number', function (namedGraph) {
    expect(namedGraph.numberOfNodes()).to.be.a('number');
  });

  they('should return the number of nodes in the passed in namedGraph', function (namedGraph, expected) {
    expect(namedGraph.numberOfNodes()).to.equal(expected);
  }, {
    basic: 6,
    withNewline: 6,
    doubleDigits: 13,
    nonConsecutive: 5
  });

});

describe('NamedGraph.prototype.getEdges(node)', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.getEdges).to.exist;
  });

  they('should be a function', function (namedGraph) {
    expect(namedGraph.getEdges).to.be.a('function');
  });

  they('should return an array', function (namedGraph) {
    expect(namedGraph.getEdges('0')).to.be.an.instanceOf(Array);
  });

  they('should return an array of the nodes `node` shares edges with', function (namedGraph, expected) {
    expect(namedGraph.getEdges('0')).to.deep.equal(expected);
  }, {
    basic: ['2', '4', '5'],
    withNewline: [ '2', '4', '5' ],
    doubleDigits: ['3', '5', '9', '11'],
    nonConsecutive: [ '3', '8']
  });

});

describe('NamedGraph.prototype.numberOfEdges', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.numberOfEdges).to.exist;
  });

  they('should be a function', function (namedGraph) {
    expect(namedGraph.numberOfEdges).to.be.a('function');
  });

  they('should return a number', function (namedGraph) {
    expect(namedGraph.numberOfEdges()).to.be.a('number');
  });

  they('should return the number of edges in the namedGraph', function (namedGraph, expected) {
    expect(namedGraph.numberOfEdges()).to.equal(expected);
  }, {
    basic: 7,
    withNewline: 7,
    doubleDigits: 24,
    nonConsecutive: 4
  });

});

describe('namedGraph.numberOfNodesTimeComplexity', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.numberOfNodesTimeComplexity).to.exist;
  });

  they('should be a string', function (namedGraph) {
    expect(namedGraph.numberOfNodesTimeComplexity).to.be.a('string');
  });

});

describe('namedGraph.getEdgesTimeComplexity', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.getEdgesTimeComplexity).to.exist;
  });

  they('should be a string', function (namedGraph) {
    expect(namedGraph.getEdgesTimeComplexity).to.be.a('string');
  });

});

describe('namedGraph.numberOfEdgesTimeComplexity', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.numberOfEdgesTimeComplexity).to.exist;
  });

  they('should be a string', function (namedGraph) {
    expect(namedGraph.numberOfEdgesTimeComplexity).to.be.a('string');
  });

});

describe('namedGraph.name', function () {

  they('should exist', function (namedGraph) {
    expect(namedGraph.name).to.exist;
  });

  they('should be a string', function (namedGraph) {
    expect(namedGraph.name).to.be.a('string');
  });

  they('should be the name passed in', function (namedGraph, expected) {
    expect(namedGraph.name).to.equal(expected);
  }, {
    basic: 'basic',
    withNewline: 'withNewline',
    doubleDigits: 'doubleDigits',
    nonConsecutive: 'nonConsecutive'
  });

});
