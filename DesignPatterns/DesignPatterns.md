# DESIGN-PATTERNS

### Design patterns:

  - Design patterns are reusable solutions to common software design problems, helping to create maintainable, flexible, and scalable software.

### Why are design patterns important:

  - They provide a common language and best practices for software design, aiding communication and collaboration among developers and preventing common pitfalls.

### The benefits of using design patterns:

  - Benefits include reusability, maintainability, flexibility, scalability, and improved collaboration.

### The different types of design patterns:

  - Types include creational patterns (object creation), structural patterns (object composition), and behavioral patterns (object interaction).

### 5 common design patterns:

  - Singleton, Factory, MVC (Model-View-Controller), Observer, and Decorator.

### How do you choose the right design pattern for a given problem:

  - Consider the problem domain, design principles, common patterns, trade-offs, flexibility, and team collaboration.



## MVC

### The Model-View-Controller MVC pattern:

  - MVC separates an application into model (data/business logic), view (user interface), and controller (handles user input and updates model and view).

### The benefits of using the MVC pattern:

  - Benefits include separation of concerns, reusability, testability, and scalability.

### The Model the View and the Controller in React give an example of the file names or component:

  - Model: dataModel.js, View: ViewComponent.js, Controller: App.js

### Give an example of the model in the dataModel.js file in React using React Hooks. A)

```javascript
import { useState } from 'react';
const useModel = () => {
const [data, setData] = useState('Hello');
return { data, setData };
};
export default useModel;
###  Give an example of the view in the ViewComponent.js file in React write a component using React Hooks.

  - import React from 'react';


const ViewComponent = ({ data }) => {
return <p>{data}</p>;
};
export default ViewComponent;
```



### Give an example of the controller in the App.js file in React using React Hooks.

A)

```javascript
import React from 'react';
import useModel from './dataModel';
import ViewComponent from './ViewComponent';
const App = () => {
const { data, setData } = useModel();

const updateData = (newData) => {
setData(newData);
};

return (
<div>
<button onClick={() => updateData('World')}>Update Data</button>
<ViewComponent data={data} />
</div>
);
};
export default App;
```

### Model-View-Controller MVC pattern:

  - The controller receives user input, updates the model, and updates the view to reflect changes.

### The role of the model in the MVC pattern:

  - The model manages data and business logic, notifying the view of changes.

### The role of the view in the MVC pattern:

  - The view displays data and captures user input, updating based on model changes.

### The role of the controller in the MVC pattern:

  - The controller handles user interactions, updating the model and view accordingly.

### Implement the MVC pattern in a web application:

  - Use separate components for model, view, and controller, using frameworks like Angular, React, or Vue.js.



## Singleton

### The Singleton design pattern:

  - Singleton ensures a class has only one instance and provides a global point of access to it. Imagine you have only one special toy in a box. Whenever you want to play with that toy, you always go to that same box to get it. No matter how many times you open the box, it’s always the same toy inside.

### Implement the Singleton design pattern in Typescript:

### Implement the Singleton design pattern in Typescript in Code:

A)

```javascript
class Singleton {
private static instance: Singleton;
private constructor() { }
public static getInstance(): Singleton {
if (!Singleton.instance) {
Singleton.instance = new Singleton();
}
return Singleton.instance;
}
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
```

  - Use a private constructor, a static method to return the instance, and a static variable to hold the instance.

### The key features of the Singleton design pattern:

  - Private constructor, static method, static variable, lazy initialization, and thread safety.

### Some common use cases for the Singleton design pattern:

  - Logging, configuration settings, database connections, caching, and thread pools.

### Some drawbacks of the Singleton design pattern:

  - Global state, tight coupling, thread safety complexity, testing challenges, and difficulty with dependency injection.

### What is Thread Safety:

  - Thread safety ensures that an object behaves correctly when multiple threads access it concurrently. Imagine you and your friends are building a tower with blocks. If everyone tries to add blocks at the same time without any rules, the tower might fall. Thread safety is like taking turns to add blocks, so the tower stays stable.

### What 5 ways to Achieve Thread Safety:

  - Locks (Mutexes), Atomic Operations, Volatile Keyword, Thread-safe Data Structures, and Immutability.

### Locks (Mutexes) in the context of thread safety:

  - Locks (Mutexes) are synchronization mechanisms that prevent multiple threads from accessing shared resources simultaneously. Imagine a toy box with a lock that only one person can open at a time. This ensures that only one person can access the toy inside the box at any given time.

### Atomic Operations in the context of thread safety:

  - Atomic Operations are indivisible operations that happen all at once, without interruption. Imagine placing a block in one quick motion so no one can interrupt. This ensures that the block is added to the tower without any other blocks being added or removed at the same time.

### The Volatile Keyword in the context of thread safety:

  - The Volatile Keyword ensures that variable values are always up-to-date across threads. Imagine everyone reads and writes the current number of blocks from a shared board. This ensures that everyone has the latest information about the number of blocks in the tower.

### Thread-safe Data Structures in the context of thread safety:

  - Thread-safe Data Structures are designed for safe concurrent access. They provide mechanisms to ensure that multiple threads can access and modify data without conflicts. Imagine special toy boxes with separate compartments for each person. This ensures that each person can access their toys without interfering with others.

### What is Immutability in the context of thread safety:

  - Immutability refers to objects that can't be changed after creation. Once an object is created, its state remains constant, preventing any modifications. Imagine blocks that can't be moved once placed on the tower. This ensures that the tower's structure remains stable and unchanged.



## Factory

### The Factory design pattern:

  - Factory provides an interface for creating objects in a superclass but allows subclasses to alter the type of created objects.

### The key features of the Factory design pattern:

  - Interface for object creation, concrete classes, subclassing, encapsulation, and flexibility.

### Some common use cases for the Factory design pattern:

  - Database connections, logging, configuration settings, user interfaces, and file formats.

### Implement the Factory design pattern in Typescript:

  - Use an interface for object creation, concrete classes, and a factory method to create objects.

### Implement the Factory design pattern in Typescript in Code: A)

```javascript
interface Shape {
draw(): void;
}
class Circle implements Shape {
draw() {
console.log('Circle');
}
}
class Square implements Shape {
draw() {
console.log('Square');
}
}
class ShapeFactory {
public getShape(type: string): Shape {
if (type === 'circle') {
return new Circle();
} else if (type === 'square') {
return new Square();
}
return null;
}
}
const factory = new ShapeFactory();
const circle = factory.getShape('circle');
circle.draw();
const square = factory.getShape('square');
square.draw();
```

### An interface in the Factory design pattern:

  - The interface defines a method for creating objects, allowing subclasses to implement their own object creation logic.

### concrete classes in the Factory design pattern:

  - Concrete classes implement the interface method to create specific types of objects.

### What is subclassing in the Factory design pattern:

  - Subclassing allows different concrete classes to create different types of objects, providing flexibility and customization.

### What is encapsulation in the Factory design pattern:

  - Encapsulation hides the object creation logic from clients, allowing them to create objects without knowing the specific implementation details.

### What is flexibility in the Factory design pattern:

  - Flexibility allows clients to create objects without knowing the specific type, providing a level of abstraction and decoupling.



## Observer

### The Observer design pattern:

  - Observer defines a one-to-many dependency where one object notifies multiple observers of changes.

### The key features of the Observer design pattern:

  - Subject, observer, subscription, notification, and loose coupling.

### Some common use cases for the Observer design pattern:

  - Event handling, user interfaces, messaging systems, distributed systems, and logging.

### Implement the Observer design pattern in Typescript:

  - Use a subject interface, observer interface, concrete subject, concrete observer, and subscription mechanism.

### Implement the Observer design pattern in Typescript in Code:

A)

```javascript
interface Subject {
attach(observer: Observer): void;
detach(observer: Observer): void;
notify(): void;
}
interface Observer {
update(subject: Subject): void;
}
class ConcreteSubject implements Subject {
private observers: Observer[] = [];
attach(observer: Observer) {
this.observers.push(observer);
}
detach(observer: Observer) {
const index = this.observers.indexOf(observer);
if (index !== -1) {
this.observers.splice(index, 1);
}
}
notify() {
this.observers.forEach(observer => observer.update(this));
}
}
class ConcreteObserver implements Observer {
update(subject: Subject) {
console.log('Updated');
}
}
const subject = new ConcreteSubject();
const observer = new ConcreteObserver();
subject.attach(observer);
subject.notify();
```

### Subject interface in the Observer design pattern:

  - The subject interface defines methods for adding, removing, and notifying observers of changes.

### An observer interface in the Observer design pattern:

  - The observer interface defines a method for updating observers when the subject changes.

### What is a concrete subject in the Observer design pattern:

  - The concrete subject implements the subject interface and notifies observers of changes.

### What is a concrete observer in the Observer design pattern:

  - The concrete observer implements the observer interface and updates itself when notified by the subject.

### What is a subscription mechanism in the Observer design pattern:

  - The subscription mechanism allows observers to subscribe to and unsubscribe from subjects, enabling dynamic updates and loose coupling.

### What is loose coupling in the Observer design pattern:

  - Loose coupling allows subjects and observers to interact without knowing the specific implementation details, promoting flexibility and maintainability.



## Decorator

### Decorator design pattern:

  - Decorator allows behavior to be added to objects dynamically without affecting other objects of the same class.

### Implement the Decorator design pattern in Typescript:

  - Use a component interface, concrete components, decorators, composition, and adherence to the open/closed principle.

### Implement the Decorator design pattern in Typescript in Code:

A)

```javascript
interface Component {
operation(): string;
}
class ConcreteComponent implements Component {
operation() {
return 'ConcreteComponent';
}
}
class Decorator implements Component {
protected component: Component;
constructor(component: Component) {
this.component = component;
}
operation() {
return this.component.operation();
}
}
class ConcreteDecoratorA extends Decorator {
operation() {
return `ConcreteDecoratorA(${this.component.operation()})`;
}
}
class ConcreteDecoratorB extends Decorator {
operation() {
return `ConcreteDecoratorB(${this.component.operation()})`;
}
}
const component = new ConcreteComponent();
console.log(component.operation());
const decoratorA = new ConcreteDecoratorA(component);
console.log(decoratorA.operation());
const decoratorB = new ConcreteDecoratorB(component);
console.log(decoratorB.operation());
```

### The key features of the Decorator design pattern:

  - Component interface, concrete components, decorators, composition, and adherence to the open/closed principle.

### Some common use cases for the Decorator design pattern:

  - Logging, encryption, validation, caching, and compression.

### Decorators in Typescript:

  - Decorators are a special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters to modify their behavior or add metadata.

### What is composition in the Decorator design pattern:

  - Composition allows decorators to be combined and applied to objects in a flexible and reusable way, enabling dynamic behavior modification.

### The open/closed principle in the Decorator design pattern:

  - The open/closed principle states that classes should be open for extension but closed for modification, allowing behavior to be added without changing existing code.



