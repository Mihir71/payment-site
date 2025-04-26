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

### Base URL

All API endpoints are prefixed with `/api`. For example, if the base URL is `https://payment-site.onrender.com`, the full endpoint would be `https://payment-site.onrender.com/api/auth/login`.

### Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### API Endpoints

#### Register a new user

```http
POST /api/auth/register
```

Request body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "email": "user@example.com",
  "_id": "user_id"
}
```

#### Login

```http
POST /api/auth/login
```

Request body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "access_token": "jwt_token"
}
```

#### Get User Profile

```http
GET /api/auth/profile
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Response:

```json
{
  "userId": "user_id",
  "email": "user@example.com"
}
```

#### Create Payment Request

```http
POST /api/create-payment
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Request body:

```json
{
  "school_id": "school_id",
  "amount": "1000",
  "callback_url": "https://your-callback-url.com"
}
```

Response: Redirects to payment gateway URL

#### Check Payment Status

```http
GET /api/collect-request/:collect_request_id
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Response:

```json
{
  "status": "success",
  "payment_details": {
    "amount": "1000",
    "transaction_id": "txn_123",
    "payment_time": "2024-04-26T12:00:00Z"
  }
}
```

#### Get All Transactions

```http
GET /api/transactions
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Query Parameters:

- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `sort` (optional): Field to sort by
- `order` (optional): Sort order ('asc' or 'desc', default: 'desc')
- `status` (optional): Filter by status

Response:

```json
{
  "items": [
    {
      "collect_id": "order_id",
      "school_id": "school_id",
      "gateway": "payment_gateway",
      "order_amount": "1000",
      "transaction_amount": "1000",
      "status": "success",
      "custom_order_id": "order_id"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

#### Get Transactions by School

```http
GET /api/transactions/school/:schoolId
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Query Parameters: Same as above
Response: Same structure as above

#### Get Transaction Status

```http
GET /api/transaction-status/:custom_order_id
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Response:

```json
{
  "collect_id": "order_id",
  "status": "success",
  "transaction_amount": "1000",
  "order_amount": "1000"
}
```

#### Process Payment Webhook

```http
POST /api/webhook
```

Request body:

```json
{
  "order_info": {
    "order_id": "order_id",
    "status": "success",
    "payment_mode": "UPI",
    "payment_details": {},
    "Payment_message": "Payment successful",
    "payment_time": "2024-04-26T12:00:00Z",
    "error_message": null,
    "gateway": "payment_gateway",
    "bank_reference": "ref_123",
    "order_amount": "1000",
    "transaction_amount": "1000"
  }
}
```

Response:

```json
{
  "success": true,
  "data": {
    "webhookLog": {
      "collect_request_id": "order_id",
      "status": "success",
      "payment_mode": "UPI",
      "payment_details": {},
      "payment_message": "Payment successful",
      "payment_time": "2024-04-26T12:00:00Z",
      "error_message": null,
      "gateway": "payment_gateway",
      "bank_reference": "ref_123",
      "order_amount": "1000",
      "transaction_amount": "1000"
    },
    "orderStatus": {
      "collect_id": "order_id",
      "status": "success",
      "payment_mode": "UPI",
      "payment_details": {},
      "payment_message": "Payment successful",
      "payment_time": "2024-04-26T12:00:00Z",
      "error_message": null,
      "bank_reference": "ref_123",
      "order_amount": "1000",
      "transaction_amount": "1000"
    }
  }
}
```

#### Get Webhook Logs

```http
GET /api/webhook
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Response: Array of webhook logs

#### Get Webhook Log by ID

```http
GET /api/webhook/:id
```

Headers:

```
Authorization: Bearer <your_jwt_token>
```

Response: Single webhook log entry

## Error Responses

All endpoints may return the following error responses:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "errors": [
    {
      "field": "field_name",
      "message": "Error message"
    }
  ],
  "timestamp": "2024-04-26T12:00:00.000Z"
}
```

Common status codes:

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

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
