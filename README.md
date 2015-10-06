# appworksjs

----
## What is appworksjs?

appworksjs is a javascript library for building feature rich, hybrid enterprise apps utilizing on device technology while leveraging the power of the OpenText EIM stack.

## Usage
You can find the production files in the ````dist```` directory. To use them, simply include them in your project and include a <script> tag in your html to reference them.

If you are deploying an app to the gateway, the gateway will automatically add appworks.min.js to the root of your project, so make sure your script tag looks like this:

````<script src="appworks.min.js"></script>````

----
## Build
To build the compressed, minified appworks.js source and the uncompressed, commented code, open up your terminal at the appworksjs directory and type in the following commands

````npm install````

This will install of the dependencies required to build the library.

To build appworks-js

````grunt````

The final file can be found in ````dist/appworks.min.js```` and ````dist/appworks.js```` 