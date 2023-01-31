Running the following command produces different coverage results from one run to the next:

```
for i in {1..10}; do echo "Run $i"; npm run test:coverage >> out.txt; done
```

Run A:
```
----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|
```
Run B: 
```
----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |       44 |    47.62 |       20 |       55 |                   |
 lib            |    36.36 |    47.62 |        0 |    47.06 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    22.22 |    47.62 |        0 |    30.77 |... 10,14,15,16,19 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|
```


Full output:
```

> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (4ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (3ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |       44 |    47.62 |       20 |       55 |                   |
 lib            |    36.36 |    47.62 |        0 |    47.06 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    22.22 |    47.62 |        0 |    30.77 |... 10,14,15,16,19 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (4ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (4ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (4ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (3ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (3ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (3ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |       44 |    47.62 |       20 |       55 |                   |
 lib            |    36.36 |    47.62 |        0 |    47.06 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    22.22 |    47.62 |        0 |    30.77 |... 10,14,15,16,19 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (4ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov


> nyc-coverage-repo@1.0.0 test:coverage
> nyc npm run test


> nyc-coverage-repo@1.0.0 test
> ts-mocha --paths 'tests/**/*.spec.ts'



{ doSomething: [Function: doSomething] }
  ✓ should have a test

  1 passing (4ms)

----------------|----------|----------|----------|----------|-------------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------|----------|----------|----------|----------|-------------------|
All files       |    48.48 |    48.28 |       25 |    57.69 |                   |
 lib            |    43.33 |    48.28 |    14.29 |    52.17 |                   |
  exports.ts    |      100 |      100 |      100 |      100 |                   |
  index.ts      |    34.62 |    48.28 |    14.29 |    42.11 |... 16,17,18,19,25 |
 tests          |      100 |      100 |      100 |      100 |                   |
  index.spec.ts |      100 |      100 |      100 |      100 |                   |
----------------|----------|----------|----------|----------|-------------------|

> nyc-coverage-repo@1.0.0 posttest:coverage
> nyc report --reporter=lcov

```