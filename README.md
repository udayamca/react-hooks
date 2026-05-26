# React Hooks

## useState

useState — stores a value inside a component. Calling the setter
re-renders the component with the new value. For objects, always
spread previous state:{" "}

setUser(prev => ( ...prev, age : 26 )). useState lets
a component remember values between renders. It returns a pair: the
current value and a setter function. Calling the setter triggers a
re-render with the new value.

## useEffect

useEffect cleanup — the function you return from useEffect runs
before the component unmounts and before the effect re-runs. Use it
to clear intervals, cancel fetches, and remove event listeners —
otherwise you get memory leaks and stale callbacks.

The function returned from useEffect is the cleanup. React calls it
before the component unmounts, and also before re-running the effect
on the next render. Use it to cancel subscriptions, clear timers,
and remove event listeners.

## useContext

Context lets you broadcast a value to any descendant without threading
props through every layer. Create a context, wrap the tree in a
Provider, consume with useContext. useContext is use to avoid prop
drilling. you can access the state to any component.

## useReducer

useReducer manages state through a pure reducer function, similar to Redux.
State can be in local state. only this component can be used.
Reducer is a controlled state and pure function.

## useMemo

useMemo memoizes the result of an expensive calculation. It only
recomputes when its dependencies change, preventing unnecessary
heavy work on every render.

To boost the performance of the application.

We need to use useMemo - costly operation (either memory or time)
with un-necessary re-renders. this is degrade the app performance .

Usage: use only memoization only for optimization, avoid over usage

## useCallback

useCallback — memoizes a function definition. Prevents a new
function reference from being created on every render, which would
cause child components to re-render unnecessarily.

Referrential equality: two function with same functional operation
is not equal, when we compare the functions, because of reference
comparison. because of reference inequliity the render happens on
each function. to fix the rerender issue we are using useCallback
hook

memo: when we are not using any props, local state or global state
on the page still the rerener will happen, to avoid the rerender we
can use memo. memo is a high order function.

when ever we pass a function to on a component memo won't work. to
fix that we need to use useCallback.

To boost the performance of the application.

We need to use UseCallback - costly operation (either memory or
time) with un-necessary re-renders. this is degrade the app
performance .

Usage: use only memoization only for optimization, avoid over usage

## useRef

useRef — two jobs: grab a DOM element directly via useRef, or store a
mutable value (like a timer ID) that doesn't trigger a re-render when
changed. Value lives in .current.

- save data without re-render - whenever you update useRef value
  re-render will not happen and change wont see on the screen. If any
  state change happen the useRef change will reflect.

- DOM access - we can use focus event using useRef
- keep previous state reference on useRef

## useId

useid — useId is generate unique id. Its a replacement of
useOpaqueIdenfier usually we use Math.random() for generate id. Now
useId can be replace math.random()

do not use useId id on map keys

## customHook

Custom hooks — functions starting with use that call other hooks
inside. They extract reusable stateful logic (e.g. useWindowWidth,
useFetch, useDebounce) without changing component structure.

Custom hooks are regular JavaScript functions whose name starts with use and
that call other hooks internally. They let you extract and reuse
stateful logic across multiple components.

## useParam

When you work on React Routes we can pass a param values on <Link to="/user/:paramname">

On the page we can use the username (paramname) as a param using useParam.

eg: const { paramname } = useParam()
