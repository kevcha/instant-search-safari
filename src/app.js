import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { configure, hits, menu, pagination } from "instantsearch.js/es/widgets";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const search = instantsearch({
  indexName: "instant_search",
  searchClient,
  routing: true,
});

search.addWidgets([
  hits({
    container: "#hits",
    templates: {
      item: `
        <article>
          <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
          <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
          <p><a href="article.html">See more</a></p>
        </article>`,
    },
  }),
  configure({
    hitsPerPage: 8,
  }),

  menu({
    container: "#brand-list",
    attribute: "brand",
  }),

  pagination({
    container: "#pagination",
  }),
]);

search.start();
