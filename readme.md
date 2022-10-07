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

Also called red-green testing as all test goes from red failed state to a green passed state.
