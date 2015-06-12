#!/bin/sh

if [ "$TEST_SUITE" ]; then
  echo "Running test suite: $TEST_SUITE"
else
  echo "Running all tests and checks"
fi

labeledLine() {
  echo "============ $1 ============";
}

jscs() {
  labeledLine 'JSCS'
  ./node_modules/jscs/bin/jscs src test
}

jshint() {
  labeledLine 'JSHINT'
  ./node_modules/jshint/bin/jshint src test
}

mocha() {
  labeledLine 'MOCHA'
  ./node_modules/mocha/bin/mocha
}

case $TEST_SUITE in
  style)  jshint && jscs;;
  mocha)  mocha ;;
  *)    jscs && jshint && mocha;;
esac
