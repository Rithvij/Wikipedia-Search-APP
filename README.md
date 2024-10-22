# Wikipedia-Search-Application
This Angular application allows to search Wikipedia articles and view results dynamically. It features modular components and utilizes a dedicated service for API requests. Key functionalities include real-time search updates, XSS protection for safe HTML rendering, and a user-friendly interface for efficient information retrieval from Wikipedia.

![Wiki](public\Wikipedia%20Search%20Preview)

## Overview
This Angular application allows users to search for articles on Wikipedia, displaying relevant results dynamically. The application is built using modular components and services, ensuring maintainability and reusability.

## Components and Functionalities

### 1. **App Component**
- **Purpose**: Acts as the root component of the application.
- **Key Features**:
  - Imports essential modules and components, including `RouterOutlet`, `SearchBarComponent`, and `PageListComponent`.
  - Renders the `SearchBarComponent` for user input and the `PageListComponent` to display results.
  - Handles user search input through the `onTerm()` method, which fetches data from the **WikipediaService**.

### 2. **Wikipedia Service**
- **Purpose**: Facilitates API interactions with Wikipedia.
- **Key Features**:
  - Utilizes Angular’s `HttpClient` for making HTTP requests to the Wikipedia API.
  - Returns search results as an observable, which allows for efficient data handling in the components.
  - Implements parameterized queries to format the API request dynamically based on user input.

### 3. **Search Bar Component**
- **Purpose**: Captures user search input.
- **Key Features**:
  - Uses an `@Output` property to emit the search term to the parent component upon form submission.
  - Implements input handling to update the search term dynamically as the user types.
  - Prevents default form submission behavior to avoid page reloads.

### 4. **Page List Component**
- **Purpose**: Displays the search results in a structured format.
- **Key Features**:
  - Utilizes Angular’s structural directives (`*ngFor`) to iterate over the array of pages and render them in a table.
  - Renders HTML snippets safely using `[innerHTML]`, ensuring proper display of formatted text while preventing XSS attacks.
  - Links each page title to the corresponding Wikipedia article, opening in a new tab.

### 5. **Dynamic Data Handling**
- **Functionality**: 
  - The application dynamically updates the displayed search results based on user input in real-time.
  - Implements observables for handling asynchronous data fetching, ensuring a responsive user experience.

### 6. **Security Features**
- **Purpose**: Prevent XSS vulnerabilities.
- **Key Features**:
  - The **PageListComponent** includes a method to sanitize inputs, ensuring that any HTML content does not pose security risks.

### 7. **Modular Component Design**
- **Purpose**: Enhances maintainability and reusability.
- **Key Features**:
  - Each component serves a specific function, adhering to the single responsibility principle.
  - Standalone components allow for easy integration and testing within the Angular framework.

## Summary
This Angular Wikipedia Search application demonstrates the effective use of modular components and services to create a responsive user experience. By utilizing the `HttpClient` for API interactions and implementing observable patterns, the application ensures efficient data handling and dynamic updates. Security features have been integrated to prevent vulnerabilities, and the overall modular design enhances maintainability, making it a robust solution for users seeking information from Wikipedia.

