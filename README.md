# spring-config-ui

I created this project to learn about VueJS. You'll find some key concepts about this frameworks and I'll to manage all of this stuff in a "real app" way :) (#NoMoreHelloWorld #AllInOneFileBashing)

# WIP
- [x] Init project with Vue CLI (ESLint, VueRouter, VueX, Vuetify...)
- [x] Managing data with services and stores (mutations/action) from VueX
- [x] Routing each page
- [ ] Complete Home page (presentation of the project)
- [ ] Complete Metrics page (viewing progress bar for data such as CPU, MEM, DISK...)
- [ ] Complete Configs page (viewing information with good UI UX, auto detects values (thresholds, size...)
- [ ] Complete About page (who am I, tutorials I used, MOOC I followed...)
- [ ] Documentation
- [ ] Dockerize the whole app
- [ ] Settings part ? (change URI for Actuator backend, languages...)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

To run a fake back-end, you can install json-server (global) to run a fake server based on data in `src/data`:
Install json-server: `npm install -g json-server`
Run the server: `json-server --watch src/data/db.js`

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
