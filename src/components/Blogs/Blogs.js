import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start'>
            <h4>Q.1--Difference between javascript and nodejs</h4>
            <p>Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment.</p>
            <h4>Q.2--When should you use nodejs and when should you use mongodb</h4>
            <p>It's used for store data. The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
            <h4>Q.3--Differences between sql and nosql databases.</h4>
            <p>SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)<br/>
                NoSQL is Non-relational or distributed database system.
            </p>
            <h4>Q.4--What is the purpose of jwt and how does it work</h4>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        </div>
    );
};

export default Blogs;