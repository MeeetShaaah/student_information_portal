# Student Information Center

## Overview

The Student Information Center is a web application built using Java Spring Boot for the back end and JavaScript for the front end. It serves as a platform for managing student information, providing features for adding, updating, and deleting student records.

## Features

- **User Authentication:** Secure user authentication system to ensure data privacy.
- **CRUD Operations:** Perform CRUD (Create, Read, Update, Delete) operations on student records.
- **Search Functionality:** Search for students based on various criteria.
- **Responsive UI:** User-friendly and responsive front-end design for a seamless experience.

## Technologies Used

- **Java Spring Boot:** Backend framework for building robust and scalable applications.
- **JavaScript:** Front-end scripting language for dynamic web page interactions.
- **Spring Data JPA:** Simplifies data access with the Spring framework.
- **Bootstrap:** Front-end framework for designing responsive and modern interfaces.

## Getting Started

### Prerequisites

- Java Development Kit (JDK)
- Maven
- Node.js
- npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MeeetShaaah/Student_Information_Center.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Student_Information_Center
    ```

3. Build and run the Spring Boot application:

    ```bash
    ./mvnw spring-boot:run
    ```

4. Install front-end dependencies:

    ```bash
    cd src/main/resources/static
    npm install
    ```

5. Start the front-end development server:

    ```bash
    npm start
    ```

6. Open your browser and go to [http://localhost:8080](http://localhost:8080) to access the application.

## Configuration

- **Database Configuration:** Modify `application.properties` to set up your database connection.

## Usage

1. Navigate to [http://localhost:8080](http://localhost:8080) in your browser.
2. Log in with your credentials.
3. Use the provided features to manage student information.

## Contributing

Feel free to contribute by opening issues or creating pull requests. Follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

