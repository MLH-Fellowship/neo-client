# Efficient Code Organization in React-Redux

## Directory Hierarchy for File Management
```
node_modules/
src/
    state/
        example/
            action_types.js
            actions.js
            index.js
            reducers.js
        shared/
            store.js
        actions.js
        index.js
        reducers.js
    view/
        App/
            App.js
        Example/
            Example.jsx
            ExampleContainer.jsx
    index.js
package.json
```

## Naming Convention for Files, Component Names, Functions and Variables

### Components
**Component Class Names**
```js
// PascalCase
CreateUser.js => <CreateUser />
FoodMenu.js => <FoodMenu />
```

**Component Class Functions and Variables**
```js
// camelCase
function renderUsersList() { return; }
onSubmit() { return; }
let selectedCategories = [];
```

### Functions and Variables
**Functions that Render JSX**
```js
// snake_case
errors_for(field)
{
    return <span className="errors"></span>
}

users_list_table()
{
    return <div><table><tr><th>/*... */</th></tr></table></div>
}
```

**Variable Names with Two Words**
```js
// snake_case
let user_id = "";
```

### Redux
**Redux Action Names**
```js
// snake_case
user_get.js (Single user)
users_get.js (Multiple users)
permission_put.js
food_delete.js
```

**Redux Reducers**
```js
// dash-case
users-get.js
food-delete.js
```

## Componentization
Break down into as many reusable components as possible

Lower level HTML DOM elements:
- Buttons
- Buttons, Badges, Icons
- Form Inputs, Labels
- Sidebars and Navigation Menus, Header and Footer
- Cards and Panels
- Alerts, Popups and Snackbars
- Pages that render on route change
- Any other distinct UI element(s)
- Other components

## Order of Component Methods
```js
class Users extends Component
{
    constructor() {}
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    componentDidUpdate() {}
    /* ... */
    restOfTheFunctions() {}
    functions_that_render_jsx() {}
    /* ... */
    render() {}
}

function mapState() {}
function mapDispatch() {}
export default connect(mapState, mapDispatch)(Users)
```

## Use Helpers
- **Local Storage Helper** — Shortcuts for `localStorage.getItem()` or `localStorage.setItem()`
- **Meta Helper** — JavaScript language shortcuts. e.g. `getByID(element) -> document.getElementById(element)`
- **Data Helper** — Static JS data list Objects for anything like countries, languages, etc.
- **Form Helper** — Validation rules functions, error handlers, etc.
- **JSX Helper** — Frequently used JSX elements exported as functions
- **General Helper** — Regex functions, `scrollToErrors()`, `scrollToTop()`

## Use a Config File
It can be useful to store all front-end configuration and static data for the project in a global, exportable const object.

```js
export const Config =
{
    BaseUrl: "http://localhost:8000/admin/v1",
    HomePage:
    {
        OrdersTab:
        {
            On: true,
            Max_Orders: 6,
            Server_Errors: false
        }
    },
    color
    {
        primary: "#303F9F",
        secondary: "#17A2B8",
        danger: "#DC3545"
    },
    layout:
    {
        sidebar:
        {
            fontSize: 20,
            children: { padding: 12 }
        }
    }
}
```