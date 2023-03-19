
# Github Repositories Listing

A web application for exploring Github through its unauthenticated APIs.

## Installation

- npm install
- npm start


## Technologies Used

- React JS
- Use Query
- UI Framework : React Bootstrap | Bootstrap


## Features

- Search for list of repositories
- Sort the result
- Can view the details of repository

## API Reference

#### Get all repositories

```http
  GET https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}
```
#### Get Repositories Detail

```http
  GET https://api.github.com/repos/{owner}/{repo}
```

## Documentation

[Documentation](https://docs.github.com/en/rest/repos)

