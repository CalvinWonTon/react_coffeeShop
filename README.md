# React Coffee Shop Application

This is an application that allows users to order coffee from a store using their mobile device.

## Shop Page
This page contains all the beverages the coffee shop offers. Customers can click the "Add to Cart" icon to add the beverage to the cart. Once they are ready, customers can press the cart in the top-right corner of the website to enter the cart.

![shopPage](https://user-images.githubusercontent.com/41026156/142336383-2bbee540-ceff-4702-b00a-bfded6e198f3.png)

## Shopping Cart Page
This page contains all the items added to the cart. Customers are able to increment or decrement the quantity of a beverage, completely remove a beverage, or even empty the cart. The subtotal, tax, and total are also shown on this page for customers to know the total price for their purchase.

![shoppingCartPage](https://user-images.githubusercontent.com/41026156/142336772-1b8e9a6c-e0f0-487b-a2a1-8e5eba6e0c2e.png)

## Checkout Page
Although this page is incomplete, customers will be able to fill out their information to pick up their order, and they can select the store they want to pick up their order from. 

![checkoutPage](https://user-images.githubusercontent.com/41026156/142336879-dcd18fda-0fe9-4d2d-b4e8-2c445a7aaca2.png)

They're then allowed to input their payment method information.

![secondCheckoutPage](https://user-images.githubusercontent.com/72165627/144455287-75c300e2-73bb-4279-ba2c-a9a4b351e7d7.png)

## Login Page
This page is currently very simple, but can be styled to be much cleaner and to match the rest of the application later on. This login page also makes use of a small, backend API to authenticate the user. Using a custom hook and a token, this would ideally let the user see their profile after clicking on the account icon and logging in. After logging in the first time, the user will stay logged in throughout the session.  The Profile page for this is a simple placeholder currently.

![simpleLoginPage](https://user-images.githubusercontent.com/72165627/144456208-f0015a06-7a8a-4ccf-8f44-897b8bd721ce.png)



## Frameworks and Libraries
- React.js
- Commerce.js
- Material-UI

## Things that need to be implemented still
- A rewards system for customers to use to receive discounts on their beverages
- Payment options 
- Customer sign up page
- Manager Stock Overview

## Reason for Building this GUI
By keeping a minimal look for the interface, customers can easily navigate the website to select a beverage and place their order. 
