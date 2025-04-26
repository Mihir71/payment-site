# Edviron Backend API

A robust backend API for managing school payments and transactions.

## Features

- JWT Authentication
- MongoDB Integration
- Payment Gateway Integration
- Webhook Handling
- Transaction Management
- Pagination and Sorting
- Comprehensive Error Handling
- Logging System

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account
- Payment Gateway credentials

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-org/edviron-backend.git
cd edviron-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
JWT_EXPIRATION=1d
PAYMENT_API_KEY=your-payment-api-key
PAYMENT_PG_KEY=your-payment-pg-key
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

4. Start the development server:

```bash
npm run start:dev
```

## API Documentation

### Authentication

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Transactions

#### List Transactions

```http
GET /api/transactions
Query Parameters:
- page: number (default: 1)
- limit: number (default: 10)
- sort: string (e.g., "payment_time")
- order: "asc" | "desc" (default: "desc")
```

#### Create Transaction

```http
POST /api/transactions
Content-Type: application/json

{
  "school_id": "school123",
  "amount": 1000,
  "payment_method": "upi"
}
```

### Webhooks

#### Payment Webhook

```http
POST /api/webhooks/payment
Content-Type: application/json

{
  "event": "payment.success",
  "data": {
    "transaction_id": "txn_123",
    "amount": 1000,
    "status": "success"
  }
}
```

## Environment Variables

| Variable        | Description                          | Required           |
| --------------- | ------------------------------------ | ------------------ |
| MONGODB_URI     | MongoDB connection string            | Yes                |
| JWT_SECRET      | Secret key for JWT tokens            | Yes                |
| JWT_EXPIRATION  | JWT token expiration time            | Yes                |
| PAYMENT_API_KEY | Payment gateway API key              | Yes                |
| PAYMENT_PG_KEY  | Payment gateway PG key               | Yes                |
| PORT            | Server port                          | No (default: 3000) |
| NODE_ENV        | Environment (development/production) | No                 |
| CORS_ORIGIN     | Allowed CORS origin                  | Yes                |

## Testing

Run the test suite:

```bash
npm test
```

Run e2e tests:

```bash
npm run test:e2e
```

## Security

- All routes are protected with JWT authentication
- Input validation using class-validator
- CORS enabled with configurable origins
- Environment variables for sensitive data
- HTTPS required in production

## Logging

The application logs:

- Webhook events
- Failed transactions
- Authentication attempts
- System errors

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
