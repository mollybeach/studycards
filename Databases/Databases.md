# DATABASES



## DATABASE FUNDAMENTALS

### Databases:

  - Databases are organized collections of data that store, retrieve, and manage information for software applications.

### Key components of a database:

  - Components include tables, columns, rows, indexes, and relationships.

### Different types of databases:

  - Types include relational, NoSQL, document, key-value, and graph databases.

### Popular relational database management systems (RDBMS):

  - Popular RDBMS include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server.



## RELATIONAL DATABASES

### Relational database:

  - A relational database stores and organizes data in tables with rows and columns, using SQL for data interaction.



## DATABASE MANAGEMENT SYSTEMS

### Database management system (DBMS):

  - A DBMS manages databases, providing tools for creating, updating, querying, and maintaining data.

### Popular DBMS:

  - Popular DBMS include MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, and MongoDB.



## CRUD OPERATIONS

### CRUD operations:

  - CRUD stands for Create, Read, Update, Delete.

### Read CRUD operation:

  - Retrieves data without modifying it.

### Create CRUD operation:

  - Adds new data.

### Update CRUD operation:

  - Modifies existing data.

### Delete CRUD operation:

  - Removes data.

### CRUD operations and HTTP methods:

  - Create: POST, Read: GET, Update: PUT or PATCH, Delete: DELETE.



## AWS DATABASES

### Amazon RDS:

  - Amazon RDS is a managed service for relational databases in the cloud.

### Key features of Amazon RDS:

  - Features include automated backups, scalability, high availability, monitoring, and security.

### Amazon Aurora:

  - Amazon Aurora is a high-performance, scalable relational database compatible with MySQL and PostgreSQL.

### Amazon DynamoDB:

  - Amazon DynamoDB is a fully managed NoSQL database for fast and predictable performance.

### Use Amazon RDS:

A)

• Choose a database engine (MySQL, PostgreSQL, Oracle, SQL Server, Amazon Aurora).

• Configure database instance size, storage, and backup settings.

• Connect to the database using the provided endpoint.

• Manage the database using the AWS Management Console, CLI, or SDKs.

### Amazon RDS code:

A)

```javascript
// Amazon RDS Example
const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'database-1.cq7zjxjzjz.us-east-1.rds.amazonaws.com',
user: 'admin',
password: 'password',
database: 'mydb'
});

connection.connect((err) => {
if (err) throw err;
console.log('Connected to Amazon RDS');
connection.end();
});
```



## MONGODB

### MongoDB:

  - MongoDB is a NoSQL database storing data in flexible, JSON-like documents.

### Key features of MongoDB:

  - Features include document-oriented storage, scalability, high performance, flexible schema, and rich query language.

### MongoDB Atlas:

  - MongoDB Atlas is a cloud-based database service for MongoDB.

### Connect to MongoDB:

  - Connect using the MongoDB shell, drivers like Mongoose for Node.js, or MongoDB Compass GUI tool.

### Connect to MongoDB code:

A)

```javascript
// MongoDB Example
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
if (err) throw err;
const collection = client.db('test').collection('devices');
collection.insertOne({ name: 'laptop', price: 1000 }, (err, result) => {
if (err) throw err;
console.log('Inserted: ', result.insertedId);
client.close();
});
});
```



## POSTGRESQL

### PostgreSQL:

  - An open-source RDBMS known for reliability, scalability, and extensibility.

### Key features of PostgreSQL:

  - Features include ACID compliance, extensibility, advanced data types, indexing, and full-text search.

### Connect to PostgreSQL:

  - Connect using the psql command-line client, GUI tools, or language-specific drivers like psycopg2 for Python.

### PostgreSQL vs. MySQL:

  - PostgreSQL offers advanced features like JSON support, Common Table Expressions, and window functions compared to MySQL.

### PostgreSQL data types:

  - Data types include integer, text, boolean, date, time, JSON, and UUID.

### PostgreSQL indexes:

  - Indexes improve data retrieval performance.

### Use/launch PostgreSQL:

A)

• Install PostgreSQL on your local machine or a server.

• Launch the PostgreSQL server.

• Connect to the database using the psql command-line client or a GUI tool.

• Start working with the database using SQL queries.

### PostgreSQL code:

A)

```javascript
-- PostgreSQL Example
CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL
);
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
SELECT * FROM users;
```



## MYSQL

### MySQL:

  - An open-source RDBMS known for speed, reliability, and ease of use.

### Key features of MySQL:

  - Features include ACID compliance, scalability, replication, high availability, and security.

### Primary Key in MySQL:

  - A primary key uniquely identifies each record in a table.

### Foreign Key in MySQL:

  - A foreign key establishes a relationship between two tables.

### Index in MySQL:

  - An index improves data retrieval performance.

### Stored Procedure in MySQL:

  - A stored procedure is a prepared SQL code stored in the database.

### Trigger in MySQL:

  - A trigger is a set of SQL statements that automatically "fires" when a specified event occurs.

### Connect to MySQL:

  - Connect using the MySQL command-line client, GUI tools, or language-specific drivers like JDBC for Java or MySQL Connector for Python.

### My SQL Workbench:

  - MySQL Workbench is a visual database design tool for data modeling, SQL development, and database administration.

### MySQL Cluster:

  - MySQL Cluster is a distributed, shared-nothing, real-time, ACID-compliant database.

### MySQL Workbench:

  - MySQL Workbench is a visual database design tool for data modeling, SQL development, and database administration.

### Use/launch MySQL Workbench:

A)

• Download and install MySQL Workbench on your local machine.

• Launch MySQL Workbench.

• Connect to a MySQL database using the connection details.

• Start working with the database using the visual tools and SQL editor.

### MySQL code:

A)

```javascript
-- MySQL Example
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL
);
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
SELECT * FROM users;
```



## GRAPHQL

### GraphQL:

  - GraphQL is a query language for APIs enabling clients to request specific data.

### Key features of GraphQL:

  - Features include strongly typed schema, hierarchical queries, client-defined responses, real-time updates, and tooling support.

### How GraphQL works:

  - GraphQL defines a schema describing API types and fields, allowing clients to query data efficiently.

### GraphQL schema:

  - A schema defines types, queries, mutations, and subscriptions in a GraphQL API.

### GraphQL queries:

  - Queries request data from the server.

### GraphQL mutations:

  - Mutations modify data on the server.

### GraphQL subscriptions:

  - Subscriptions enable real-time data updates.

```javascript
subscription {
newPost {
id
title
content
author{
username
}
}
}
### GraphQL vs. REST:

  - GraphQL offers more flexibility, efficiency, and type safety compared to REST APIs.

### Use/launch GraphQL:

A)
• Define a schema using the GraphQL Schema Definition Language (SDL).
• Implement resolvers to fetch data for queries, mutations, and subscriptions.
• Set up a GraphQL server using tools like Apollo Server or Express with express-graphql.
• Interact with the GraphQL API using a client like Apollo Client or GraphiQL.
### GraphQL Schema in Code:

A)
```

type User {

id: ID!

username: String!

email: String!

posts: [Post!]!

}

type Post {

id: ID!

title: String!

content: String!



# Root Type for Read Operations

type Query {

users: [User!]!

posts

}

# Root Type for Write Operations

type Mutation {

createUser(username: String!, email: String!): User!

createPost(title: String!, content: String!): Post!

}

# Root Type for Real-Time Updates

type Subscription {

newPost: Post!

}

```javascript

## REST

### REST:

  - REST is an architectural style using HTTP for client-server communication.

### Key principles of REST:

  - Principles include resource-based URLs, uniform interface, statelessness, client-server architecture, and layered system.

### Key components of a RESTful API:

  - Components include resources, URIs, HTTP methods, headers, and status codes.

### Resource in a RESTful API:

  - A resource is an entity accessed and manipulated via URIs.

### URI in a RESTful API:

  - A URI uniquely identifies a resource.

### HTTP methods in a RESTful API:

  - Methods like GET, POST, PUT, PATCH, DELETE perform CRUD operations.

### HTTP headers in a RESTful API:

  - Headers provide metadata in requests or responses.

### HTTP status codes in a RESTful API:

  - Codes indicate request outcomes.


## NO-SQL DATABASES

### NoSQL:

  - NoSQL databases store and retrieve data flexibly, designed for scalability, performance, and diverse data types.

### Key features of NoSQL databases:

  - Features include flexible data models, scalability, high availability, performance, and schema-less design.

### How to use/launch a NoSQL database:

A)
• Choose a NoSQL database based on requirements (key-value, document, column-family, graph).
• Install and configure the NoSQL database on a server or cloud platform.
• Use the database-specific client libraries or drivers to interact with the database.
• Design data models and queries based on the database type and requirements.
### Connect to a NoSQL database code:

A)
```

// MongoDB Example

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



client.connect(err => {

if (err) throw err;

const collection = client.db('test').collection('devices');

collection.insertOne({ name: 'laptop', price: 1000 }, (err, result) => {

if (err) throw err;

console.log('Inserted: ', result.insertedId);

client.close();

});

});

```javascript

## ORACLE

### Oracle Database:

  - Oracle is a commercial RDBMS known for scalability, security, and performance.

### Key features of Oracle Database:

  - Features include scalability, security, high availability, performance, and extensibility.

### How Oracle Database stores data:

  - Oracle stores data in tables within schemas.

### When to use Oracle Database:

  - Use Oracle for enterprise applications, data warehousing, and cloud services.

### How to connect to Oracle Database:

  - Connect using SQLPlus, a GUI tool, or language-specific drivers like JDBC for Java or cx_Oracle for Python.

### Connect to Oracle Database code:

A)
```

// Java JDBC Example

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.SQLException;



public class OracleJDBCExample {

public static void main(String[] args) {

String url = "jdbc:oracle:thin:@localhost:1521:xe";

String user

String password = "password";

try {

Connection connection = DriverManager.getConnection(url, user, password);

System.out.println("Connected to Oracle Database");

connection.close();

} catch (SQLException e) {

System.out.println("Connection failed");

e.printStackTrace();

}

}

}

```javascript



