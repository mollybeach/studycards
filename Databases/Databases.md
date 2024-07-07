# DATABASES



### What are databases and how are they used in software development:

Databases are organized collections of data that store, retrieve, and manage information for software applications.

### Key components of a database:

Components include tables, columns, rows, indexes, and relationships.

### What are the different types of databases:

Types include relational, NoSQL, document, key-value, and graph databases.

### Name some popular relational database management systems (RDBMS).

Popular RDBMS include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server.



## RELATIONAL DATABASES

### Relational database:

A relational database is a type of database that stores and organizes data in tables with rows and columns. It uses structured query language SQL to interact with the data.



## NO-SQL DATABASES

###  NoSQL database:

A NoSQL database is a type of database that stores and retrieves data in a non-tabular format, such as key-value pairs, documents, or graphs. It is designed for scalability, flexibility, and performance.



## DATABASE MANAGEMENT SYSTEMS

### Database management system (DBMS):

A DBMS is software that manages databases, providing tools for creating, updating, querying, and maintaining data.

### Most popular DBMS:

Popular DBMS include MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, and MongoDB.



## CRUD OPERATIONS

### CRUD operations stand for:

Create, Read, Update, Delete.

### Read CRUD operation:

Retrieves data from the database without modifying it.

### Create CRUD operation:

Adds new data to the database.

### An Update CRUD operation :

Modifies existing data in the database.

### Delete CRUD operation:

Removes data from the database.

### CRUD operations typically mapped to HTTP methods:

Create: POST, Read: GET, Update: PUT or PATCH, Delete: DELETE.



## AWS Databases

### Amazon RDS:

Amazon RDS is a managed database service that makes it easy to set up, operate, and scale relational databases in the cloud.

### Key features of Amazon RDS:

Features include automated backups, scalability, high availability, monitoring, and security.

### mazon Aurora:

Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for high performance and scalability.

### mazon DynamoDB:

Amazon DynamoDB is a fully managed NoSQL database service designed for fast and predictable performance with seamless scalability.



## MongoDB

### MongoDB:

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.

### Key features of MongoDB:

Features include document-oriented storage, scalability, high performance, flexible schema, and a rich query language.



## PostgreSQL

### PostgreSQL:

An open-source RDBMS known for its reliability, scalability, and extensibility.

### Key features of PostgreSQL:

Features include ACID compliance, extensibility, advanced data types, indexing, and full-text search.



## MySQL

### MySQL:

MySQL is an open-source RDBMS known for its speed, reliability, and ease of use.

### Key features of MySQL:

Features include ACID compliance, scalability, replication, high availability, and security.Q) How does MySQL store data: A) MySQL stores data in tables, which are organized into databases. Each table contains rows and columns, where rows represent individual records and columns represent attributes of the records. Tables can have relationships with other tables through foreign keys, enabling data normalization and integrity.

### Database in MySQL: A) A database in MySQL is a container for tables and other database objects, such as views, indexes, and stored procedures. Each database has a unique name and can contain multiple tables that store related data. Databases provide a level of separation and security between different sets of data.

### Table in MySQL: A) A table in MySQL is a collection of rows and columns that store data in a structured format. Each table has a name and a set of columns, where columns represent attributes of the data and rows represent individual records. Tables can have relationships with other tables through foreign keys.

### Column in MySQL: A) A column in MySQL is a vertical slice of a table that represents an attribute of the data stored in the table. Columns have a name, data type, and constraints that define the type of data that can be stored in the column. Columns can be indexed to optimize query performance.

### Row in MySQL: A) A row in MySQL is a horizontal slice of a table that represents an individual record or data entry. Each row contains values for each column in the table, corresponding to the attributes of the data. Rows can be retrieved, inserted, updated, and deleted using SQL commands.

### Primary key in MySQL: A) A primary key in MySQL is a column or a set of columns that uniquely identifies each row in a table. Primary keys enforce data integrity by ensuring that each row has a unique identifier and can be used to establish relationships between tables through foreign keys.

### Foreign key in MySQL: A) A foreign key in MySQL is a column or a set of columns that establishes a relationship between two tables. The foreign key in one table references the primary key in another table, enforcing referential integrity and maintaining data consistency between related tables.

### Index in MySQL: A) An index in MySQL is a data structure that improves the speed of queries by allowing the database to quickly locate rows based on the indexed columns. Indexes can be created on single columns or combinations of columns and can be used to optimize query performance for common operations.

### Trigger in MySQL: A) A trigger in MySQL is a stored program that is automatically executed in response to certain events, such as insert, update, or delete operations on a table. Triggers can be used to enforce data integrity, perform validation, or automate complex business logic within the database.

### View in MySQL: A) A view in MySQL is a virtual table that is defined by a query and does not store data itself. Views provide a way to present data from one or more tables in a structured format and can be used to simplify complex queries, enforce security policies, or provide a consistent interface to users.

### Stored procedure in MySQL: A) A stored procedure in MySQL is a precompiled set of SQL statements that is stored in the database and can be executed by calling the procedure name. Stored procedures can encapsulate complex logic, improve performance, and provide a reusable interface for executing common tasks within the database.

### Difference between MySQL and PostgreSQL: A) MySQL and PostgreSQL are both open-source relational database management systems RDBMS, but they have some key differences:

• Data Types: PostgreSQL supports a wider range of data types, including JSON, XML, and arrays, while MySQL has a more limited set of data types.

• Indexing: PostgreSQL supports advanced indexing techniques, such as GiST and SP-GiST, while MySQL uses B-tree indexes by default.

• ACID Compliance: PostgreSQL is ACID-compliant by default, while MySQL requires the use of the InnoDB storage engine for ACID compliance.

• Extensibility: PostgreSQL supports extensions and custom data types, functions, and operators, while MySQL has limited support for extending its functionality.

• Full Text Search: PostgreSQL provides built-in full-text search capabilities, while MySQL requires the use of external plugins for full-text search.

### Connect to MySQL: A) You can connect to MySQL using the mysql command-line interface, a graphical user interface tool, or a programming language-specific driver, such as the MySQL Connector/Python driver for Python applications or the MySQL Connector/J driver for Java applications.

### MySQL Workbench: A) MySQL Workbench is a visual database design and administration tool that provides a graphical user interface for managing MySQL databases. MySQL Workbench allows you to create and modify database schemas, run queries, and monitor performance using visual tools and wizards.

### Use/launch MySQL Workbench:

A)

• Download and install MySQL Workbench on your local machine.

• Open MySQL Workbench and create a new connection by providing the connection details, such as the host, port, username, and password.

• Connect to the MySQL server and navigate the database objects, such as tables, views, and indexes.

• Perform common database tasks, such as creating tables, running queries, and monitoring performance using the MySQL Workbench interface.



## GraphQL

### What is GraphQL: A) GraphQL is a query language and runtime for APIs that allows clients to request only the data they need. It provides a flexible and efficient alternative to traditional REST APIs by enabling clients to specify the structure of the response and reduce over-fetching and under-fetching of data.

### Key features of GraphQL:

A)

• Strongly Typed Schema: GraphQL uses a schema to define the types and fields available in the API, enabling clients to query and mutate data with type safety.

• Hierarchical Queries: GraphQL allows clients to request nested data structures in a single query, reducing the number of round trips to the server.

• Client-Defined Responses: GraphQL enables clients to specify the structure of the response, allowing them to request only the data they need.

• Real-Time Updates: GraphQL supports subscriptions for real-time data updates, enabling clients to receive updates as soon as the data changes.

• Tooling: GraphQL provides a rich ecosystem of tools, such as GraphQL Playground and Apollo Client, for developing, testing, and consuming GraphQL APIs.

### How does GraphQL work: A) GraphQL works by defining a schema that describes the types and fields available in the API. Clients can send queries to the server using the GraphQL query language to request specific data. The server processes the query, resolves the requested data, and returns a response in the shape defined by the query.

###  schema in GraphQL: A) A schema in GraphQL is a collection of types and fields that define the structure of the API. The schema specifies the available queries, mutations, and subscriptions, as well as the types of data that can be queried and mutated. The schema serves as a contract between the client and the server.

###  type in GraphQL: A) A type in GraphQL is a category of data that defines the shape of the data and the fields that can be queried or mutated. Types can be scalar types, such as String or Int, or complex types, such as Object or Enum. Types can have fields that represent attributes of the data.

###  query in GraphQL: A) A query in GraphQL is a request for specific data from the API. Queries are written in the GraphQL query language and specify the fields and relationships to be included in the response. Queries can be nested to request data from related types in a single request.

###  mutation in GraphQL: A) A mutation in GraphQL is a request to modify data in the API. Mutations are written in the GraphQL query language and specify the fields and data to be updated, created, or deleted. Mutations can be used to perform actions that change the state of the data in the API.

###  subscription in GraphQL: A) A subscription in GraphQL is a request to receive real-time updates from the API. Subscriptions are written in the GraphQL query language and specify the fields and data to be monitored for changes. Subscriptions enable clients to receive updates as soon as the data changes.

###  resolver in GraphQL: A) A resolver in GraphQL is a function that resolves the requested data for a field in the schema. Resolvers are responsible for fetching the data from the data source, transforming the data into the requested shape, and returning the data to the client. Resolvers are defined for each field in the schema.

### What is the difference between GraphQL and REST: A) GraphQL and REST are both API design paradigms, but they have some key differences:

• Data Fetching: GraphQL allows clients to request only the data they need, while REST APIs return fixed data structures.

• Endpoints: GraphQL has a single endpoint for all queries, mutations, and subscriptions, while REST APIs have multiple endpoints for different resources.

• Over-fetching and Under-fetching: GraphQL reduces over-fetching and under-fetching of data by enabling clients to specify the structure of the response, while REST APIs may return more or less data than needed.

• Versioning: GraphQL does not require versioning of APIs, as clients can request specific data structures, while REST APIs may require versioning to maintain backward compatibility.

• Tooling: GraphQL provides a rich ecosystem of tools, such as GraphQL Playground and Apollo Client, for developing, testing, and consuming APIs, while REST APIs may require additional tooling for documentation and testing.

### How do you use/launch a GraphQL API: A) To use/launch a GraphQL API, follow these steps:

• Define a schema that describes the types and fields available in the API.

• Implement resolvers for each field in the schema to fetch and return the requested data.

• Set up a GraphQL server that processes queries, mutations, and subscriptions and resolves the requested data.

• Test the API using a GraphQL client, such as GraphQL Playground or Apollo Client, to send queries and mutations and receive responses.

• Deploy the GraphQL API to a server or cloud platform to make it accessible to clients.



## REST

### What is REST: A) REST (Representational State Transfer) is an architectural style for designing networked applications that use HTTP to communicate between clients and servers. RESTful APIs are designed around resources, which are represented as URIs, and use standard HTTP methods to perform CRUD operations.

### Key principles of REST: A)

• Resources: RESTful APIs are designed around resources, which are represented as URIs and can be manipulated using standard HTTP methods.

• Uniform Interface: RESTful APIs use a uniform interface, such as HTTP methods and status codes, to interact with resources.

• Statelessness: RESTful APIs are stateless, meaning that each request from the client contains all the information needed to process the request.

• Client-Server Architecture: RESTful APIs use a client-server architecture, where the client and server are separate and communicate through requests and responses.

• Layered System: RESTful APIs are designed as a layered system, where clients interact with intermediaries, such as proxies or gateways, to access resources.

### Key components of a RESTful API:

A)

• Resources: Entities that can be accessed and manipulated through the API, represented as URIs.

• URIs: Uniform Resource Identifiers that uniquely identify resources in the API.

• HTTP Methods: Standard HTTP methods, such as GET, POST, PUT, PATCH, and DELETE, used to perform CRUD operations on resources.

• Headers: Additional information sent with the request or response, such as content type, authentication, or caching directives.

• Status Codes: Standard HTTP status codes, such as 200 OK, 404 Not Found, and 500 Internal Server Error, used to indicate the outcome of the request.

### Resource in a RESTful API: A) A resource in a RESTful API is an entity that can be accessed and manipulated through the API. Resources are represented as URIs and can have multiple representations, such as JSON or XML, that can be requested by clients. Resources can be created, read, updated, and deleted using standard HTTP methods.

### URI in a RESTful API: A) A URI (Uniform Resource Identifier) in a RESTful API is a string that uniquely identifies a resource. URIs are used to locate and access resources in the API and follow a hierarchical structure that represents the relationships between resources. URIs are composed of a scheme, host, path, and optional query parameters.

### Standard HTTP methods used in a RESTful API:

A)

• GET: Retrieve a representation of a resource.

• POST: Create a new resource.

• PUT: Update an existing resource with a complete representation.

• PATCH: Update an existing resource with a partial representation.

• DELETE: Remove a resource.

### HTTP headers in a RESTful API: A) HTTP headers in a RESTful API are additional information sent with the request or response. Headers can include metadata, such as content type, authentication credentials, caching directives, and custom headers. Headers provide context and control over the communication between clients and servers.

### HTTP status codes in a RESTful API: A) HTTP status codes in a RESTful API are standard codes that indicate the outcome of a request. Status codes are divided into five categories, such as 1xx informational, 2xx success, 3xx redirection, 4xx client error, and 5xx server error. Common status codes include 200 OK, 201 Created, 404 Not Found, and 500 Internal Server Error.



## NO-SQL DATABASES

### NoSQL: A) NoSQL (Not Only SQL) is a term used to describe non-relational databases that store and retrieve data in flexible, schema-less formats. NoSQL databases are designed for scalability, high availability, and performance, and are commonly used in web applications, big data, and real-time analytics.

### Key features of NoSQL databases:

A)

• Flexible Data Models: NoSQL databases support flexible data models, such as key-value, document, column-family, and graph, to accommodate diverse data types and structures.

• Scalability: NoSQL databases can scale horizontally by adding more servers to distribute the load and support growing data volumes.

• High Availability: NoSQL databases provide features, such as replication, sharding, and automatic failover, to ensure continuous operation and minimize downtime.

• Performance: NoSQL databases are optimized for high performance and can handle complex queries, transactions, and data processing tasks.

• Schema-less Design: NoSQL databases do not require a predefined schema, allowing you to change the structure of your data as your application evolves.

### How to use/launch a NoSQL database: A) To use/launch a NoSQL database, follow these steps:

• Choose a NoSQL database that best fits your application requirements, such as key-value, document, column-family, or graph.

• Install and configure the NoSQL database on your local machine or in the cloud using the provided installation instructions.

• Create databases, collections, and documents within the NoSQL database using the database-specific commands or APIs.

• Connect to the NoSQL database using a programming language-specific driver or client library to interact with the data and perform common database tasks.



## ORACLE

### What is Oracle Database: A) Commercial relational database management system RDBMS that is known for its scalability, security, and performance. It is widely used in enterprise applications, data warehousing, and cloud services.

### Key features of Oracle Database: A)

• Scalability: Oracle Database supports horizontal and vertical scaling to handle growing data volumes and increasing workloads.

• Security: Oracle Database offers advanced security features, such as data encryption, user authentication, and access control, to protect data from unauthorized access.

• High Availability: Oracle Database provides features, such as automatic failover and clustering, to ensure continuous operation and minimize downtime.

• Performance: Oracle Database is optimized for high performance and can handle complex queries, transactions, and data processing tasks.

• Extensibility: Oracle Database supports extensions and custom data types, functions, and operators to extend its functionality and meet specific business requirements.

### How does Oracle Database store data: A) In Tables, which are organized into schemas. Each table contains rows and columns, where rows represent individual records and columns represent attributes of the records. Tables can have relationships with other tables through foreign keys, enabling data normalization and integrity.

### When Should You Use Oracle Database: A) When you need a commercial relational database management system RDBMS with advanced features, scalability, and security. Oracle Database is well-suited for enterprise applications, data warehousing, and cloud services that require high performance, reliability, and data integrity.

### How do you connect to Oracle Database: A) Using the SQLPlus command-line interface, a graphical user interface tool, or a programming language-specific driver, such as the Oracle JDBC driver for Java applications or the cx_Oracle driver for Python applications.

