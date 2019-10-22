# property_list
HostelWorld app by Pablo Trabajos

## Architecture
It is composed of a main instance and a component. There is no need for event bus or Vuex since there is no child-to-child communication.

## Dependencies
Axios: for API fetch
Vue-material: for the material components

## Error checking
- On the Axios side: check for the result of the promise with a then-catch structure.
- On the filters: the filters check for null values to avoid TypeErrors.
- On the template: v-if is used to display some placeholder text whever some data has not been loaded (yet).

## Filters
I have implemented two filters:
- normalize: it takes the overall rating and normalize from 1..100 to 1..10. It checks if the value is present and returns a placeholder text if the value is missing.
- convert: converts currencies. I made in a way that can take an extra argument to pick the output currency. It is not very useful in this case because all conversions are VEF-EUR, it is there just to show how it could be used if there were more curriencies to convert to.

## Project setup (original vue-cli instructions)
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
