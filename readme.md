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

### What to test in a react application?

Test components renders.
Test compoment correctly renders with props
Test components renders in diffrent states
Test component reacts to events correctly

### What not to test in a react application.

Implementation details.
Thrid party codes.
Code that is not important from a user point of view

### RTL QUeries

Every test that is written involves three basic steps.

1. render the component
2. find an element rendered by the component
3. assert against the element found in step 2 wchich will pass or fail the test.

To render the component, we use the render method from RTL.

For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom.

For finding elements we need the the React Testing libary Queries

### What are RTL Queries

Queries are the method that testing libary peovides to find elements on the page.
there are sevaral methods that RTL provides

to find an element on the page.

    ==> getBy..
    ==> queryBy..
    ==> findBy..

to find multiple elements on the page

    ==> getAllBy..
    ==> queryAllBy..
    ==> findAllBy..

they all need suffix and they can be like Role, LableText,Placeholder Text, Text,Alttext, DisplayValue,Title, and finally TestId

## GetBy.. query

getby... is a class of query that returns the matching node for a query, and throw a discriptive error if no element is matched or more than one element is matched.

### GetByRole

getByRole queries for elements with the givin role.

Role refers to the ARIA role which provieds semantic meaning to content to ensure pepole using asistive technology are able to use them.

By default many semantic elements in HTLM have a role.
We can check that if these element with roles exits of not and test them
basically finding if the element is in the dom or not.

### getByRoleOptions

name | level | hidden | selected | checked | pressed

the accessible name is for simple cases equal to

    1. The label of a form element.
    2. Text content of a button.
    3. The value of the aira-label attribute.

these are helpful when there are multiple elements with same role.

### getByLabelText

getBylebelText will search for the lable that matches the given text, then find elements associated with that label.
getBylabelText also works for wrapper elements
i g

    `
    <label>
        <input type="checkbox" id="terms" /> I agree to the terms and conditions
    </label>
    `

### getByLabelText Options

we can pass in a selecter in options to select the type of the label. this is helpful when there are multiple elements with same label.

### getByPlaceHolderText

getByPlaceHolderText will search for all the element with a placeholder attribute and find onet that matches that given text.

### getByText

getByText will search for all element with a text node with a textContent matching the given text

Typically we will use this to find paragraph, div or span elements

### getByDisplayValue

getByDisplay value returns the input , textarea or select element that has the matching display value. typically we will use this in form control where we find element based on their values

### getByAltText

returns an element that matches the alt text attribute.

### getByTitle

getByTitle returns the element that has the matching title attribute.

### getByTestId

getByTestId returns the element that has the matching data-testId attribute.

### Priority Order for Queries

"Your test should resemble how users interact with your code (componentn page etc) as much as possiable" recommended order as follows

1. getByRole( top referrence )
2. getByLabelText(useful for form field)
3. getByPlaceHolderText
4. getBytext(find non interactive value)
5. getByDisplayValue()
6. getByAltText(ie image)
7. getByTitle()
8. getByTestId( if content is dynamic )

## RTL getAllBy.. Queries

to find multiple element in the dom node

### RTL queries used so far (example)

    const pageHeading = screen.getByRole("heading");
    const nameElement2 = screen.getByLabelText("name");
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    const paragraphElement = screen.getByText("All fields are mandatory");
    const nameElement4 = screen.getByDisplayValue("name");
    const imageElement = screen.getByAltText("image-alt-text");
    const closeElement = screen.getByTitle("close")
    const customeElement = screen.getByTestId("custome-test-id");
    const listElements = screen.getAllByRole("listitems");

### TextMatch

the first Arg that passed to RTL query is a type oF TextMatch.It can be either a

    1. string
    2. regex
    3. function(content?: srting, element?: Element|null => boolean)

doc link https://testing-library.com/docs/queries/about#textmatch

## queryBy

also a method to find a single element

1. Returns the matching node for a query , and return null if no element is found.
2. Useful for asserting an element that is not present or renders conditionally.
3. Throws an error if more that one element id found.

## queryAllBy..

1. Returns an array of all matching nodes for a query and returns an empty array if no elements match.
2. All other suffix can be added to the query string

## Appearance and Disappearance

What if elements are not present in the DON to begin with but made their way into the DOM after some time.
For example data that is fatched from a server will be rendered only after a few miliseconds.

in these case findBy.. and findAllBy... are used

## findBy.. and findAllBy...

### findBy

      1. findBy returns a promise that resolves when an element is found which matches the given query.
      2. the promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms.

### findAllBy..

      1. findAllBy returns a promise that resolves to an array of elements when any element is found which match the given query.
      2. The promise is rejected if no element is found after a default timeout of 1000ms.

## Manual queries

can use regular queryselector dom api to find elements

    const {container} = render(<SomeComponent/>)
    const foo = container.querySelector(.foo)

## Debugging the test results

    helper functions to help with debugging
    - screen.debug()
    - logRoles(container) // to get the aira roles

## User Interactions and Events

to test user interaction we use user-event library.
user-event is a companion library for testting library that simulates user interactions by dispatching the events that would happen if the interaction took place in tha browser.
This is the recomended way to test user interaction with the React testing library.

### Pointer interactions (Mouse Interactions)

user-events pointer interactions uses Convenience APIs
thses are ..

        click()
        dblClick()
        tripleClick()
        hover()
        unHover()

there are some low-level Pointer Api such as

1.  pointer({keys:'[MouseLeft]'}) // simulate a pointer click with mouse button left click
2.  pointer({keys:'[MouseLeft][mouseright]'}) simulate a pointer click with mouse button left click followed by mouse button right click.
3.  pointer({keys:'[MouseLeft>]'}) simulate a pointer click with mouse button left click and hold it down.
4.  pointer({keys:'[/MouseLeft]'}) simulate releseing a priviously pressed button with mouse button left click

### Keyboard interaction

Convenience API user.tab()

Utility Api
type() --> typeing in a input field
clear() --> clears keyboardInput
selectOptions() --> select element
deselectOptions() --> deselect selected option
upload() --> upload a file to input

Clipboard API
copy()
cut()
paste()

there is also keyboard Api for other cases

## Testing Component with Provider.

some time component need context provider to test component
at render method , wrapper option can be passed to render function to test component with providers (theme, context m store etc);

We can also set a single provider as wrapper option at top level so we can access it anywhere in testing.
lik to doc https://testing-library.com/docs/react-testing-library/setup#custom-render

## testing Custom hooks

we renderhook insted of render.
rederhook returns a object with properties result.
The return values of the hooks containd inside an object result.current .
