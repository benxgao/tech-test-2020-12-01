# First AML Front End Technical Test

Xingbin Ben Gao - 01/12/2020

Time: 9am - 11am

## Plan

- Complete task 1 in well written code;
- Leave potential solutions for the future;

## Technical Solution

- Technical stack - React, Redux-saga
- Repository template - Based on [personal side project](https://github.com/benxgao/practice-react-saga)

## Development

```bash
# Commandline window 1:
docker pull firstaml/horse-test:latest
docker run -p 3016:3016 firstaml/horse-test:latest

# Commandline window 2:
cd [repo folder]
yarn
yarn start

# Launch application in browser
http://localhost:8080
```

## Testing

```bash
# Run unit test
yarn test

# Run unit test with coverage report
yarn test --coverage

# Run unit test with hot refreshing
yarn test --watch
```

## Task completion

### Task 1: List existing horses

- [x] The user should be presented with a list of horse names
- [x] The list should only display up to 10 horses at a time

### Task 2: Display details for a horse

- [ ] When a user clicks on a horse within the list, they should be presented with all the details for that horse
- [x] Fields without a value should show as empty

## Potential solutions for incompleted tasks

As the test is scoped within 2 hours, here are potential solutions for rest of the tasks:

### Task 2: incompleted part

● When a user clicks on a horse within the list, they should be presented with all the details for that horse

solution:

- Apply a React accordion component, with horse name displaying in each accordion item headerbar;
  - By default, showing up details of the first horse with accordion body being expanded;
  - When users click on any accordion item headerbar, the relevant accordion body is showding up;
  - When users click on another horse name (accordin item headerbar), strech the previous horse details, while showing up the determined horse details;

### Task 3: Edit a horse

● From within the view of a horse, the user should be able to edit the fields for that horse

solution:

- Apply a React Form component, with each field being editable;
- Whenever users make changes, show up a "update" button at the bottom of the editing form;
- When users click on that "update" button, a confirm popup is showing up with a "save" button in the popup;
- When users click on that "save" button, an API request to update is sending back to the server;
- When users restore changes in form fields, "update" button should be disappreared;

● The user should not be able to provide an empty name

solution:

- Apply form validating package, like Yup or Formik-yup, integreated with the above Form component;

### Task 4: Add a horse

● From the list view, the user should be able to press a button to add a horse

solution:

- Add a "add" button at the bottom of the list view;
- When users click on the "add" button, a Model with Form component pops up;
- When users click on the "Create" button of the Form in Modal, API request is sending out;
- When the API request successed in responsing, that Modal should be disappreared, at the same time, a notification toaster bar is showing up to tell users a new horse is added;


● Any new horse should have at least a name field. All other fields are optional

solution:

- Apply Form validation on the "name" field;

● Once added, the horse should display in the list

solution:

- Ideally, the newly added horse item in the list view should notice users its position in the list;

### Task 5: Comparing horses

● From the list, a user should be able to select two horses and bring up their stats side by side for comparison

solution:

- Add a checkbox to each accordion headerbar;
- When users check the selected horses, a "compare" button is showing up;
- When users click on the "compare" button, users is navigated to a new page with horse infomation displaying;

## Screenshot

![screenshot](docs/screenshot.png?raw=true)

