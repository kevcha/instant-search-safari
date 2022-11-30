# Safari // Instant search BF Cache problem

This repository highlight problem with Instant Search, on Safari (at least on Version 15.0 (16612.1.29.41.4, 16612)), about BF Cache.
Everything is working in Chrome and Firefox, but not in Safari.

Reproduce it in live with :

- Go to live version on [https://kevcha.github.io/instant-search-safari/](https://kevcha.github.io/instant-search-safari/)
- Filter catalog with "Samsung" for example
- Click on any see more of result
- Go back
- Filter again with "Apple" for example
- Click again on any "see more" link
- Go back
- See that instant search current state went back to "Samsung", not "Apple" as it should

Reproduce it in local :

- Clone the repo
- Run `yarn install`
- Run `yarn start`
- Go to `http://localhost:1234`
