# Social Media App

## Getting Started

To set up and use the database for this project, follow the steps below:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (including npm)
- [Docker](https://www.docker.com/)

### Setup

1. **Install Dependencies**

   First, install all the required dependencies by running:
   ```bash
   npm install

2. **Start Docker Containers**

    Use Docker Compose to create and start the required containers defined in the `docker-compose.yml` file:
    ```bash
    docker-compose up -d

3. **Migrate Database Schema**

    Apply the database migrations to set up the schema:
    ```bash
    npx sequelize-cli db:migrate
    ```

3. **Populate Database**

    Execute the following command to populate the database:
    ```bash
    npx sequelize-cli db:seed:all
    ```

### Accessing the Database

To view and manage your database, navigate to [http://localhost:3307](http://localhost:3307) in your web browser.
Use the credentials defined in your `config.js` file to log in.
### Configuration

- **Database Host**: `localhost`
- **Database Port**: `3306`
- **Username**: `user`
- **Password**: (as specified in `config.js`)

For more details on configuration, refer to the `config.js` file.
