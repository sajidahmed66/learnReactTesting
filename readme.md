## Primary Goals

    Jest and React testing libary
    Fundamentals of writing test
    Test Component with user interactions
    Test component with wrapped in a provider
    Test component with mocking
    Explore testing for react native

### Jest and React testing

Jest: jest is a test runner that finds a test, runs a test, determines whether the tests passed or failed and reports it back.

React-testing-libary: js testing utility that provides a vertualdom for testing React components

Types of automated tests

1. Unit tests: Focus is on individual building blocks of an application such as Function or class or a component. Each unit or building block is tested in isolation, independent of other units. Dependencies are mocked. Run in a short amount of time and make it very easier to pinpont failures. Relatively easier to run , write and maintain.
2. Intrigation test: Focus on testing a combination of units and ensuring they work together.
3. E2E tests: Endtoend test Focus on testing the entire application Flow and ensureing it works properly from start to finish. It involves UI backed and takes longer to complete as the cover most amount of codes

RTL stricks a balance between unit tests and E2E tests

### Anatomy of a test Function

test(name, fn, timeout)
the first arg is the name used to identify the test
the second arg is the fuction that contains expectations to the test.
the third arg is optional which is an optional arg to specify how long to wait before aborting the test, default value is 5sec

### Test Driven Development (TDD):

Test driven development is a software development process where you write your test before writing software code.

Once the tests have been written, you then write the code to ensure the tests pass.

    1. Create tests that varify the functionalilty of a specific feature.
    2. Write software code that will run successfully when re-executed.
    3. refactor the code for optimsaization while ensuring the test contunis to pass.

Also called **red-green** testing as all test goes from red failed state to a green passed state.

### Jest Watch mode

Watch mode is an option that we can pass to Jest to watch files that have changed since the last commit and execute tests related only to those changed files.
An optimaization designed to make your tests run fasrter regardless of how many tests you have .
press w to bring out the menu and from there you can filter tests, find and run specific test and all tests.

### Grouping tests

describe(name, fn)
the first argument is the group name.
the second argument is a function that contains exceptations to the test.

.only() and .skip() method can also be called on describe function.
.only() run that test only in a test file if there are multiple tests and .skip() skips running that test
it is also possiable to nest discribe block.
And Multiple describe block can also stay in a test file

### Fileneme Convention that CRA Follows

CRA will look for 1. Files with .test.js or .test.tsx suffix 2. Files with .spec.js or .spec.tsx suffix 3. Files with .js or .tsx in "\_\_tests\_\_" folders

but it is recmanded to put test code along side of the code to keep reative imports shorter

additionally insted of test() it() can be used to as a global test function. for .only() use fit() and .skip() use xit to only run specific test and skip a test respectively

### Code coverage

A metric that can help you understand how much of your software code is tested .

    1. **Satement Coverage**: how many of the statement in the software code have been executed.
    2. **Branches Coverage**: How many branches of the control structures (if statement for instance ) have been executed.
    3. **Function Coverage**: How many functions have been called
    4. **Line Coverage**: How many lines of source code have been tested.

jest configuration to determine how much coverage is the minimun threshold

also a new script for coverage is written in package.json file to run coverage report and which file to check and which not to check.
coverage is good from CI/CD point of view.

### Assertions

When writing tests we often need to check that values meet certain conditions.

Assertions decide whether a test passes or fails.

With JEST Assertions are carried out by global **expect** method.

    expect(value)
    the argument should be the value that your code produces.
    Typically you will use "expect" along with a matcher function to assert something about that value.

    A Mather can optionally accept an argument that is correct expected value.

What are the correct matcher functions>>>> https://jestjs.io/docs/using-matchers

1.  commom matcher functions
    1. truthiness
    2. numbers
    3. Strings
    4. Array and Iterables
    5. Exceptions
2.  Also look into jest dom package that gives much more matcher functions to match dom node. also look into the setupTests.ts in the src folder that has been crated by create react app. this file is a global file that is executed before jest runs.

### Section summary

    jest watch mode with w,
    filter tests (failed, all, by regx )
    Grouping tests (describe)
    Filename conventions
    Code coverage and Generated code coverage report
    Assertions.

###
