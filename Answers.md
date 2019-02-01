1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are created by Action Creators, and are objects that generally have two properties - the type (which causes a reaction in the reducers when it's sent to them) and the payload, another object that contains the content of what we want to change in the store's state. Reducers are the pure functions that take in actions and update state inside the store. They are the "glue" that makes everything stick together in Redux. Finally, the Store is the single source of truth in Redux that contains an object which holds all state in the application.

The store is known as the single source of truth because it is separately defined and outside the bounds of the rest of the application, yet it can connect with everything and directly influences the operations of our application through changes in state. Thus, it is the "single source of truth" from which our application knows how to run.

2. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The main difference between Application State and Component State is that the application's state is globally defined; the component's state is locally defined. The application state is housed in the single source of truth (the store) and can be connected to any point in the application, whereas component state is housed in a class component and then passed down to children on props.

3. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-Thunk is a middleware in that we can use in Redux and React to make our flow async. This is important when we want to do async functions like API calls with axios. Thunk works by intercepting the normal flow of Redux and working with the actions before they are passed to the reducer. We use `.dispatch()` inside of our `.then()` and `.catch()` calls to send on actions to the reducers.
