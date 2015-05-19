# appworksjs

----
## What is appworksjs?

appworksjs is a javascript library for building feature rich, hybrid enterprise apps utilizing on device technology while leveraging the power of the OpenText EIM stack.

----
## Usage
To build the compressed, minified appworks.js source, open up your terminal at the appworksjs directory and type in the following commands

````npm install````

This will install of the dependencies required to build the library.

To build appworksjs  (defaults to build for iOS devices):

````grunt````

To build for android

````grunt android````

To build for blackberry

````grunt blackberry````

To build for ios

````grunt ios````

The final file can be found in ````dist/appworks.min.js````