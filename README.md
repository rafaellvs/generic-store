# Liven E-Commerce

Basic E-Commerce responsive application with a store and cart pages. Made with react typescript (CRA), styled-components, axios, jest.

To start the project, run `yarn` to install the required dependencies and then run `yarn start`.

## Overview
### Pages
Home page: very basic page with a link to the actual store.

Store page: shows a list of available products from the provided endpoint. The product card contains basic information about it and an "Add to cart" button. Shows 9 results per load. Each load gets more results by using the `page` and `limit` query params.

Cart page: shows the list of products that were added to the shopping cart. Contains a "Remove all products" button to empty the cart. Also an info box for purchase details and the "Checkout" option.

### Details
Custom application theme at `helpers/theme`.

Uses React Context to manage the cart state, located at `helpers/cart-context`.

Uses the `localStorage` to maintain the cart state on page refreshes. Useful management functions at `helpers/utils`. The application checks if the `localStorage` isn't empty and the Context state is. If so, syncs them by making single product requests (using product id).

Api interface located at `helpers/api`.

### Tests
Very few tests, for core components, `Product` and `CartProductList`. To execute the testing interface, run `yarn test`.
