# School Payments Frontend

A modern React-based frontend application for managing school payments and transactions.

## Features

- User Authentication (Login/Register)
- Transaction Management Dashboard
- Real-time Payment Status Tracking
- School-wise Transaction Filtering
- Responsive Design
- Secure API Integration
- Modern UI with Tailwind CSS

## Tech Stack

- React.js
- Tailwind CSS
- React Router v6
- Axios for API calls
- Context API for State Management
- Vite for Build Tooling

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API running (edviron-backend)

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/Mihir71/payment-site.git
cd school-payments-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Application Pages

### 1. Login Page (`/auth/login`)

- Secure authentication using JWT
- Email and password validation
- Error handling and loading states
- Link to registration page
- Responsive design with gradient background

**Features:**

- Email validation
- Password validation
- Loading spinner during authentication
- Error message display
- Automatic redirection to dashboard on success

### 2. Registration Page (`/auth/register`)

- New user registration
- Email and password validation
- Error handling and loading states
- Link to login page
- Matching design with login page

**Features:**

- Email validation
- Password validation
- Loading spinner during registration
- Error message display
- Automatic redirection to dashboard on success

### 3. Transactions Overview (`/transactions`)

- Comprehensive transaction dashboard
- Real-time transaction statistics
- Advanced filtering and sorting
- Pagination support
- Responsive table view

**Features:**

- Transaction statistics cards
- Filter by:
  - Status (success, pending, failed)
  - School
  - Date range
- Sort by any column
- Pagination controls
- School-wise transaction view
- Export functionality

### 4. Status Check Page (`/transaction-status`)

- Quick transaction status lookup
- Order ID search
- Detailed transaction information
- Error handling
- Loading states

**Features:**

- Order ID search
- Real-time status updates
- Detailed transaction information display
- Error handling
- Loading states
- Back to dashboard navigation

## Component Structure

```
src/
├── contexts/       # React Context providers
├── pages/          # Page components
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── TransactionsOverview.jsx
│   └── StatusCheck.jsx
├── api/            # API integration
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

## API Integration

The frontend communicates with the backend through the following endpoints:

- Authentication:

  - `POST /auth/login`
  - `POST /auth/register`

- Transactions:
  - `GET /transactions`
  - `GET /transactions/school/:schoolId`
  - `GET /transaction-status/:custom_order_id`

## Environment Variables

| Variable     | Description          | Required |
| ------------ | -------------------- | -------- |
| VITE_API_URL | Backend API base URL | Yes      |

## Screenshots

### Login Page

![Login Page](https://via.placeholder.com/800x600?text=Login+Page)

### Registration Page

![Registration Page](https://via.placeholder.com/800x600?text=Registration+Page)

### Transactions Dashboard

![Transactions Dashboard](https://via.placeholder.com/800x600?text=Transactions+Dashboard)

### Status Check Page

![Status Check Page](https://via.placeholder.com/800x600?text=Status+Check+Page)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Style

- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling
- React functional components with hooks

## Deployment

1. Build the application:

```bash
npm run build
```

2. Deploy the contents of the `dist` directory to your hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
