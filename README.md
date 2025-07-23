## NodeJS API Backend

This repository contains a Node.js backend API for managing clients, users, jobs, contracts, invoices, and more. It is built with Express (compatible with Express 5.x), uses modular route files, and supports robust authentication and authorization.

### Repository Structure

- `server.js` — Main Express app, route registration, middleware setup, error handling
- `routes/` — Contains route files for clients, users, jobs, contracts, invoices, etc.
- `middleware/` — Custom middleware for rate limiting, authentication, authorization, IP filtering, DTO validation
- `controllers/` — Business logic for each resource using stored procedures for db access
- `schemas/` — DTO schemas for validation using the yup package
- `config/` — Environment-specific configuration files
- `frontend/` — Modern web frontend built with Vite and JSX. Features include:
  - Fast development server and hot module replacement (HMR)
  - Modular React-style components using JSX syntax
  - API integration for client, user, job, contract, and invoice management
  - Responsive UI for desktop and mobile
  - Authentication flows and protected routes
  - Customizable themes and layouts
  - Easy extension for new features and endpoints
  - Separate `src/` for source code, `public/` for static assets, and its own `package.json` for frontend dependencies

### API Security

The API is secured using multiple layers:

- **JWT Authentication:** All protected endpoints require a valid JWT token in the `Authorization` header.
- **Rate Limiting:** Custom middleware (`publimiter`, `authlimiter`) prevents abuse.
- **Authorization Levels:** Middleware (`authLvl`, `authAccess`) restricts access based on user roles and permissions.
- **IP Filtering:** Middleware (`authIP`) restricts access to allowed IPs.
- **DTO Validation:** All POST/PATCH requests are validated against schemas to prevent malformed data.

### Error Handling

All errors are returned in JSON format. If a resource is not found or a request is invalid, you will receive:

```json
{
  "error": {
    "message": "Not found"
  }
}
```

Other errors (e.g., validation, authentication) will return a similar structure with a relevant message and status code.

### Example API Calls

#### 1. Login (Obtain JWT Token)

```http
POST /api/v1/clients/users/login
Content-Type: application/json

{
  "username": "kpiercy",
  "password": "aStrongP4ssw0rd!"
}
```

Response:
```json
{
  "token": "<JWT_TOKEN>",
  "refreshToken": "<REFRESH_TOKEN>",
  ...
}
```

#### 2. Get All Clients

```http
GET /api/v1/clients
Authorization: Bearer <JWT_TOKEN>
```

Response:
```json
[
  {
    "ClientID": 9999,
    "Username": "kpiercy",
    ...
  },
  ...
]
```

#### 3. Create a New User

```http
POST /api/v1/clients/users
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "Users": [
    {
      "Username": "newuser",
      "Password": "password123",
      "Email": "newuser@example.com",
      "ClientID": 9999,
      "PermissionLvl": 3
    }
  ]
}
```

#### 4. Error Example (Invalid Token)

```json
{
  "error": {
    "message": "Invalid token"
  }
}
```

### Additional Notes

- All endpoints requiring authentication must include the `Authorization: Bearer <JWT_TOKEN>` header.
- Pagination is supported on many endpoints via `?page=1&limit=10` query parameters.
- For more details, see the Swagger documentation (if enabled).
