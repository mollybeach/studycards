*FRAMEWORKS*

### What is a Framework: A)

A framework is a software platform that provides a foundation for developing applications. It includes pre-built components, libraries, and tools that help developers build, deploy, and maintain software applications more efficiently. Frameworks provide a structured approach to software development and help streamline the development process by providing reusable code and best practices.

### What are the key features of a Framework: A)

The key features of a framework include:

• Pre-built components: Provides ready-to-use components for common tasks like user authentication, data validation, and error handling.

• Libraries: Includes libraries for interacting with databases, handling network requests, and other common tasks.

• Tools: Offers tools for building, testing, and deploying applications, such as compilers, debuggers, and build systems.

• Architecture: Defines a structure and design patterns for organizing code and building applications.

• Extensibility: Allows developers to extend and customize the framework to meet specific requirements.

### What are the benefits of using a Framework: A)

The benefits of using a framework include:

• Faster development: Provides pre-built components and tools that help developers build applications more quickly.

• Consistency: Enforces best practices and coding standards to ensure consistency across projects.

• Reusability: Allows developers to reuse code and components across projects, reducing duplication of effort.

• Scalability: Provides a structured approach to software development that scales with the complexity of the application.

• Security: Includes built-in security features and practices to help protect against common vulnerabilities.



*REACT*

### What is React: A)

React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable Ul components for web applications.

### What are React Components: A)

React components are reusable, self-contained building blocks for building user interfaces. They can be either functional components or class components.

### What is JSX: A)

JavaScript XML is a syntax extension for JavaScript that allows you to write HTML-like code within your JS code. React uses JSX to describe the Ul elements.

### What is the difference between functional and class components: A)

Functional components are simple JavaScript functions, while class components are ES6 classes.

Both can be used to create React components, but functional components are more commonly used, especially with the introduction of React Hooks.

### What are React Hooks: A)

React Hooks are functions that allow functional components to manage state and side effects.

They were introduced in React 16.8 and provide an alternative to using class components for state management.

### What is the Virtual DOM in React: A)

The Virtual DOM is a concept in React where a lightweight representation of the actual DOM is created in memory. React uses this Virtual DOM to efficiently update the real DOM when changes occur, which helps improve performance.

### What is the difference between Props and State in React: A)

Props short for properties are used to pass data from a parent component to a child component, while state is used to manage data that can change within a component. Props are read-only, while state can be modified using the 'setState' method.

### What is Redux: A)

Redux is a state management library for React and other JavaScript frameworks. It helps manage the global state of an application and provides a predictable way to handle data flow.

### What is React Router: A)

React Router is a popular library for adding routing and navigation to React applications. It allows you to define routes and render different components based on the URL.

### What are React Lifecycle methods: A)

In class components, lifecycle methods are special methods that are automatically invoked at different stages of a component's lifecycle, such as when it's mounted or updated. With the introduction of hooks, some of these methods are no longer used as frequently.

### What is the purpose of the 'key' prop in React lists: A)

The 'key' prop is used to give a unique identity to each element in a list of components. It helps React efficiently update and re-render the list when items are added, removed, or reordered.

### How can you pass data from child to parent components in React: A)

You can pass data from child to parent components by defining callback functions in the parent and passing them as props to the child. The child component can then call these callbacks to communicate with the parent.

### What is the Context API in React: A)

The Context AP| is a built-in feature in React that allows you to manage global state and pass data through the component tree without explicitly passing props at every level. It's especially useful for sharing data like themes or authentication information.

'componentDidMount’, 'componentDidUpdate’, and ‘componentWillUnmount’ are lifecycle methods in React class components. They are used to control and manage the behavior of a component at different stages of its lifecycle.



*REACT LIFECYCLE METHODS*

### componentDidMount A)

•is called after a component has been rendered to the DOM.

•  it is commonly used to perform initial setup, such as fetching data from an API, subscribing to events, or setting up timers

• It is commonly used to perform initial setups such as fetching data from the API subscribing to events or setting up timers.

• This method is a good place to make asynchronous requests and side effects that should occur once the component is 'mounted'  in the DOM

### componentDidUpdate A)

• is called whenever the component's props or state change and the component re-renders.

• It is used to respond to changes in the component's data or the environment, such as updating the Ul based on new data or interacting with the DOM.

• It is important to check whether the changes in props or state are relevant to the component to avoid unnecessary work.Q) componentWillUnmountA)

• 'componentWillUnmount’  is called just before a component is removed from the DOM.

• It is used to perform cleanup tasks, such as canceling network requests, removing event listeners, or clearing timers to prevent memory leaks.

• This method is essential for avoiding resource leaks when a component is no longer needed.



*MIMICKING LIFECYCLE METHODS*

### Mimicking componentDidMount A)

• This 'useEffect ' hook runs once after the component is mounted similar to

The Lifecycle method it is copying.

### Mimicking 'componentDidUpdate’ A)

• This 'useEffect ' hook  runs after every render, except the first one, simulating

the Lifecycle method it is copying.

### Mimicking 'componentWillUnmount’ A)

• This 'useEffect ' hook  only once when the component is about to unmount similar to similar to the Lifecycle method it is copying.



*REACT HOOKS*

### useState A)

• allows functional components to manage local state.

' It returns an array with two elements  the current state value and a function to update it.

### useEffect A)

• is used for performing side effects in functional components.

• It can be used to mimic lifecycle methods like ‘componentDidMount’,, 'componentDidUpdate’, and ‘componentWillUnmount’.

### useContext A)

• 'useContext ' allows you to access the context data that has been provided higher up in the component tree.

### useReducer A)

• useReducer is an alternative to useState for managing complex state logic.

' It takes a reducer function and an initial state and returns the current state and a dispatch function to update it.

### useRef A)

•  is used for accessing and interacting with DOM elements directly.

• It can also be used to persist values across renders without causing re-renders.

### useMemo A)

• is used to memoize expensive calculations and only recompute them when the dependencies an array of values change.

### useCallback A)

• 'useCallback' is similar to 'useMemo', but it memoized functions.

• It's useful for preventing unnecessary re-renders of components that depend on functions.

### useLayoutEffect A)

• 'useLayoutEffect ' is similar to 'useEffect', but it runs synchronously after the DOM has been updated.

• It's often used for tasks that require immediate DOM measurements.

### uselmperativeHandle A)

• it customizes the instance value that is exposed when using

‘React. forwardRef’,

• It's useful for exposing specific methods of a child component's instance to its

parent.

### useDebugValue A)

• is used to display custom labels or values for custom hooks in React DevTools.

• It aids in debugging and understanding custom hooks.

### useTransition and useDeferred Value React Concurrent Mode A)

• These hooks are part of React Concurrent Mode and allow you to work with asynchronous operations in a more efficient way.

• 'useTransition' allows you to control when to show loading indicators or transitions during updates.

• 'useDeferredValue' allows you to defer updates to less important data when the application is busy.



*REACT NATIVE*

### What is React Native: A)

React Native is an open-source framework for building mobile applications using JavaScript and React. It was developed by Facebook and was first released in 205 React Native allows developers to create native mobile applications for iOS, Android, and other platforms using a single codebase, which is a significant advantage for reducing development time and effort.

### JavaScript and React React Native  A)  React Native utilizes the popular JavaScript programming language and the React library. Developers can write their mobile app logic in JavaScript and use React components to create the user interface

### Cross-Platform React Native A)  React Native is a cross-platform framework, meaning you can use the same codebase to build applications for multiple platforms, including iOS and Android. This significantly reduces the need for platform-specific development.

### Native Component React Native A)  React Native allows developers to use native components and APIs provided by lOS and Android, giving the apps a native look and feel. It also provides a bridge for interacting with native modules written in Objective-C, Swift, or Java

### Hot Reloading React Native A) Developers can take advantage of hot reloading, which allows them to see the results of code changes immediately without rebuilding the entire application. This speeds up the development and testing process.

### Large Community React Native A) React Native has a large and active community of developers, which means there are plenty of third-party libraries, plugins, and resources available to extend its functionality.

### Native Performance React Native  A) React Native aims to deliver high performance by using native components and optimizing JavaScript execution. It's often suitable for building apps with smooth animations and good responsiveness.

### Code Reusability React Native A) A significant advantage of React Native is code reusability. Much of the codebase can be shared between iOS and Android apps, reducing duplication of effort.

### Updates React Native A) React Native is actively maintained, and updates are released regularly to keep up with changes in mobile platforms and technologies.

React Native is a popular choice for mobile app development, especially for businesses or developers looking to create apps for both iOS and Android without writing separate codebases.



*Angular*

### What is Angular: A)

Angular is a popular open-source front-end web application framework developed by Google. It is used for building dynamic and interactive web applications with features like data binding, dependency injection, and routing.

### What are the key features of Angular: A)

The key features of Angular include:

• Two-way data binding: Automatically synchronizes the data between the model and the view.

• Dependency injection: Allows components to be injected with dependencies rather than creating them directly.

• Routing: Provides a way to navigate between different views or pages in a single-page application.

• Directives: Extends HTML with custom attributes and tags to create reusable components.

• Services: Provides a way to share data and functionality across different parts of an application.

### What is the difference between AngularJS and Angular: A)

AngularJS is the first version of Angular, released in 2010, while Angular refers to the newer versions starting with Angular 2, released in 2016. Angular is a complete rewrite of AngularJS and introduces significant changes, such as a component-based architecture, improved performance, and better support for modern web development practices.



*Vue.js*

### What is Vue.js: A)

Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use it to build small parts of an application or scale up to build a full single-page application.

### What are the key features of Vue.js: A)

The key features of Vue.js include:

• Reactive data binding: Automatically updates the view when the data changes.

• Components: Encapsulates UI elements into reusable components.

• Directives: Extends HTML with custom attributes and tags to create dynamic behavior.

• Virtual DOM: Improves performance by updating the DOM efficiently.

• Vue Router: Provides routing capabilities for single-page applications.

### How does Vue.js compare to other front-end frameworks like React and Angular: A)

Vue.js is often seen as a middle ground between React and Angular. It offers a simpler and more approachable API than Angular but provides more structure and features than React. Vue.js is known for its ease of use, flexibility, and performance.

### What is the Vue CLI: A)

The Vue CLI is a command-line interface tool for scaffolding Vue.js projects. It provides a standard project structure, build tools, and development server to help you get started with Vue.js development quickly.

### What is Vuex: A)

Vuex is a state management library for Vue.js applications. It provides a centralized store for managing the state of an application and allows you to define actions, mutations, and getters to update and access the state in a predictable way.

### What is Vue Router: A)

Vue Router is the official routing library for Vue.js applications. It allows you to define routes and navigate between different views or pages in a single-page application. Vue Router integrates seamlessly with Vue.js components to provide a smooth navigation experience.

### How do you handle forms in Vue.js: A)

Vue.js provides v-model, a directive that enables two-way data binding for form inputs. You can use v-model to bind form inputs to data properties in the Vue instance and automatically update the data when the input changes.

### What are mixins in Vue.js: A)

Mixins are a way to share reusable code between Vue components. They allow you to define common functionality, such as methods, computed properties, or lifecycle hooks, and mix them into multiple components to avoid duplication.

### How do you optimize performance in Vue.js applications: A)

Performance optimization in Vue.js applications can be achieved by:

• Using the Virtual DOM to efficiently update the real DOM.

• Implementing lazy loading to load components and data only when needed.

• Minimizing re-renders by using computed properties and watchers effectively.

• Using server-side rendering to improve initial load times and SEO.

• Implementing code splitting to load only the necessary code for each route.

### What are some best practices for using Vue.js in web development: A)

Best practices for using Vue.js in web development include:

• Using single-file components to encapsulate HTML, CSS, and JavaScript in a single file.

• Following a consistent folder structure for organizing components, assets, and other resources.

• Using Vuex for state management in larger applications to maintain a predictable state.

• Leveraging Vue Router for routing in single-page applications to provide a smooth navigation experience.

• Writing unit tests for components and services to ensure code quality and prevent regressions.

### How do you handle AJAX requests in Vue.js: A)

Vue.js provides the Vue Resource plugin for making AJAX requests. You can use Vue Resource to fetch data from an API, handle responses, and update the view based on the data received. Alternatively, you can use the Fetch API or Axios library for AJAX requests in Vue.js applications.



*NODE JS*

### What is Node.js: A)

Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser and build scalable network applications.

### What are the key features of Node.js: A)

The key features of Node.js include:

• Asynchronous and event-driven: Uses non-blocking I/O operations to handle multiple requests concurrently.

• Single-threaded and event loop: Uses a single-threaded model with event looping to handle multiple connections efficiently.

• CommonJS modules: Supports the CommonJS module system for organizing and reusing code.

• NPM: Comes with the Node Package Manager (NPM) to manage dependencies and packages.

• Cross-platform: Runs on multiple operating systems, including Windows, macOS, and Linux.

### What is the event loop in Node.js: A)

The event loop is a core concept in Node.js that allows it to handle multiple requests concurrently without blocking the execution of other code. It continuously checks for events and executes callbacks when an event occurs, such as a new request or a timer expiring.

### How does Node.js handle asynchronous operations: A)

Node.js uses non-blocking I/O operations and an event-driven architecture to handle asynchronous operations. It allows you to perform tasks like reading files, making network requests, or querying databases without blocking the execution of other code, which improves performance and scalability.

### What is NPM: A)

NPM stands for Node Package Manager and is the default package manager for Node.js. It allows you to install, manage, and share packages and dependencies for Node.js projects. NPM provides a command-line interface for installing packages, running scripts, and managing project dependencies.

### What are modules in Node.js: A)

Modules in Node.js are reusable blocks of code that encapsulate functionality and can be shared between different parts of an application. Node.js uses the CommonJS module system, which allows you to define modules with exports and require them in other modules using the require function.

### How do you create a simple HTTP server in Node.js: A)

You can create a simple HTTP server in Node.js using the built-in http module. Here's an example of creating an HTTP server that listens on port 3000 and responds with "Hello, World!" to all requests:



*EXPRESS*

### What is Express JS: A)

Express.js is a popular web application framework for Node.js. It provides a set of features and tools for building web applications, such as routing, middleware, and template engines. Express.js simplifies the process of building web servers and APIs in Node.js.

### How do you handle routing in Express.js: A)

Express.js provides a routing mechanism that allows you to define routes for different HTTP methods and URLs. You can use the app.get, app.post, app.put, and app.delete methods to define routes and handle requests. Express.js also supports route parameters and middleware for more advanced routing scenarios.

### What is middleware in Express.js: A)

Middleware in Express.js are functions that have access to the request and response objects and can modify them or perform additional tasks. Middleware functions can be used to handle common tasks like logging, authentication, error handling, and parsing request data. They can be added to the request processing pipeline using the app.use method.

### How do you handle errors in Express.js: A)

Express.js provides a built-in error handling mechanism that allows you to define error-handling middleware functions. You can use the app.use method with a special error-handling middleware function that takes four arguments (err, req, res, next) to handle errors that occur during request processing. This middleware should be defined after all other middleware and routes.

### What is the difference between app.get and app.use in Express.js: A)

The app.get method in Express.js is used to define a route that handles GET requests for a specific URL, while the app.use method is used to add middleware functions to the request processing pipeline. The app.use method can be used to define middleware that applies to all requests or specific routes.

### How do you serve static files in Express.js: A)

You can serve static files in Express.js using the built-in express.static middleware. You can use the app.use method to specify a directory containing static files that should be served by Express.js. For example, to serve files from a directory named "public," you can use the following code:

### What is template engines in Express.js: A)

Template engines in Express.js are used to generate dynamic HTML content based on data from the server. Express.js supports a variety of template engines, such as EJS, Pug (formerly Jade), and Handlebars. You can configure a template engine in Express.js using the app.set method and render dynamic content in views using the res.render method.

### How do you handle form data in Express.js: A)

You can handle form data in Express.js using the body-parser middleware to parse incoming request bodies. The body-parser middleware can be added to the request processing pipeline using the app.use method and configured to parse different types of request bodies, such as JSON or URL-encoded data. You can access form data in route handlers using the req.body object.

### What are some best practices for using Express.js in web development: A)

Best practices for using Express.js in web development include:

• Using middleware to handle common tasks like logging, authentication, and error handling.

• Organizing routes and middleware into separate modules for better code organization.

• Using template engines to generate dynamic HTML content based on data from the server.

• Implementing error handling middleware to handle errors that occur during request processing.

• Using environment variables to configure application settings and sensitive information.

### How do you secure Express.js applications: A)

You can secure Express.js applications by implementing security best practices, such as:

• Using HTTPS to encrypt data transmitted between the client and server.

• Implementing input validation to prevent common security vulnerabilities like SQL injection and cross-site scripting.

• Using helmet middleware to set security-related HTTP headers and protect against common web vulnerabilities.

• Implementing authentication and authorization mechanisms to control access to resources and protect sensitive data.

• Keeping dependencies up to date to address security vulnerabilities in third-party packages.



*Django*

### What is Django: A)

Django is a high-level web framework for building web applications in Python. It follows the model-view-template (MVT) architectural pattern and provides a set of tools and features for rapid development of web applications.

### What are the key features of Django: A)

The key features of Django include:

• Object-relational mapping (ORM): Provides a simple and powerful way to interact with databases using Python objects.

• Admin interface: Automatically generates a customizable admin interface for managing site content and user accounts.

• URL routing: Maps URLs to views and provides a clean and flexible way to define URL patterns.

• Template engine: Uses a template engine to generate dynamic HTML content based on data from the server.

• Security features: Includes built-in protection against common web vulnerabilities like SQL injection, cross-site scripting, and cross-site request forgery.

### What is the Django ORM: A)

The Django ORM (Object-Relational Mapping) is a powerful feature that allows you to interact with databases using Python objects. It provides an abstraction layer that maps database tables to Python classes and allows you to perform database operations using Python syntax.

### How do you define models in Django: A)

In Django, models are defined as Python classes that inherit from the django.db.models.Model class. Each model

class represents a database table, and each attribute of the class represents a database field. You can define fields like CharField, IntegerField, ForeignKey, and many others to specify the type and constraints of the database fields.

### What is the Django admin interface: A)

The Django admin interface is a built-in feature that automatically generates a customizable admin interface for managing site content and user accounts. It allows you to create, read, update, and delete records in the database without writing custom views or templates.

### How do you create views in Django: A)

In Django, views are Python functions or classes that handle HTTP requests and return HTTP responses. You can define views as functions that take a request object as input and return a response object, or as classes that implement the dispatch method to handle different HTTP methods.

### What is the Django template engine: A)

The Django template engine is a feature that allows you to generate dynamic HTML content based on data from the server. Django uses a template language that includes tags, filters, and variables to create templates that can be rendered with data from the server.

### How do you handle forms in Django: A)

Django provides a forms module that allows you to define and handle HTML forms in a Pythonic way. You can create form classes that represent HTML forms and use them to validate user input, display forms in templates, and process form submissions.

### What is the Django REST framework: A)

The Django REST framework is a powerful and flexible toolkit for building Web APIs in Django. It provides a set of tools and features for creating RESTful APIs, including serializers, viewsets, authentication, and permissions.

### How do you secure Django applications: A)

You can secure Django applications by implementing security best practices, such as:

• Using HTTPS to encrypt data transmitted between the client and server.

• Implementing input validation to prevent common security vulnerabilities like SQL injection and cross-site scripting.

• Using Django's built-in security features like CSRF protection and user authentication.

• Implementing access control mechanisms to control access to resources and protect sensitive data.

• Keeping dependencies up to date to address security vulnerabilities in third-party packages.



*Ruby on Rails*

### What is Ruby on Rails: A)

Ruby on Rails is a popular open-source web application framework written in Ruby. It follows the model-view-controller (MVC) architectural pattern and provides a set of conventions and tools for building web applications quickly and efficiently.

### What are the key features of Ruby on Rails: A)

The key features of Ruby on Rails include:

• Convention over configuration: Provides a set of conventions that reduce the need for configuration and boilerplate code.

• Active Record: An object-relational mapping (ORM) library that simplifies database interactions using Ruby objects.

• Scaffolding: Automatically generates code for common tasks like creating models, views, and controllers.

• Routing: Maps URLs to controller actions and provides a clean and flexible way to define routes.

• Asset pipeline: Compiles and compresses assets like JavaScript and CSS files to improve performance.

### What is Active Record in Ruby on Rails: A)

Active Record is an object-relational mapping (ORM) library in Ruby on Rails that simplifies database interactions using Ruby objects. It provides a way to map database tables to Ruby classes and perform CRUD operations on database records using Ruby methods.

### How do you define models in Ruby on Rails: A)

In Ruby on Rails, models are defined as Ruby classes that inherit from the ActiveRecord::Base class. Each model

class represents a database table, and each attribute of the class represents a database column. You can define associations like has_many, belongs_to, and has_and_belongs_to_many to specify relationships between models.

### What is scaffolding in Ruby on Rails: A)

Scaffolding in Ruby on Rails is a feature that automatically generates code for common tasks like creating models, views, and controllers. It provides a quick way to set up the basic structure of a web application and get started with development.

### How do you create controllers in Ruby on Rails: A)

In Ruby on Rails, controllers are defined as Ruby classes that inherit from the ApplicationController class. Each controller class represents a set of related actions that handle HTTP requests and return HTTP responses. You can define actions as methods that respond to different HTTP methods like GET, POST, PUT, and DELETE.

### What is the asset pipeline in Ruby on Rails: A)

The asset pipeline in Ruby on Rails is a feature that compiles and compresses assets like JavaScript and CSS files to improve performance. It provides a way to organize and manage assets in a web application and includes tools for minification, concatenation, and fingerprinting of asset files.

### How do you handle forms in Ruby on Rails: A)

Ruby on Rails provides form helpers that allow you to create and handle HTML forms in a Ruby-centric way. You can use form helpers to generate form elements, validate user input, and process form submissions in controllers. Rails also provides built-in support for CSRF protection and form validation.

### What is the Ruby on Rails API mode: A)

The Ruby on Rails API mode is a lightweight version of Rails that is optimized for building JSON APIs. It removes unnecessary middleware and features from the Rails stack to improve performance and reduce the overhead of rendering HTML views.

### How do you secure Ruby on Rails applications: A)

You can secure Ruby on Rails applications by implementing security best practices, such as:

• Using HTTPS to encrypt data transmitted between the client and server.

• Implementing input validation to prevent common security vulnerabilities like SQL injection and cross-site scripting.

• Using Rails' built-in security features like CSRF protection and user authentication.

• Implementing access control mechanisms to control access to resources and protect sensitive data.

• Keeping dependencies up to date to address security vulnerabilities in third-party packages.









