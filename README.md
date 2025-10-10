# MERN Authentication System

A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring email verification, password reset, and JWT-based authentication.

## 🚀 Features
- User Registration & Login with JWT authentication
- Email Verification with OTP system
- Password Reset functionality with OTP
- Protected Routes with middleware
- Responsive Design with Tailwind CSS
- Cookie-based Authentication with secure HTTP-only cookies
- Email Templates with professional styling

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios for API calls
- React Toastify for notifications
- Context API for state management

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for email services
- Cookie-parser for handling cookies
- CORS for cross-origin requests

## 📋 Prerequisites
Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/puvanakopis/MERN-Authentication.git
cd mern-auth
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo "MONGODB_URL=\"mongodb+srv://username:password@cluster.mongodb.net/\"
JWT_SECRET='your-jwt-secret-key'
NODE_ENV='development'
SMTP_USER='your-smtp-username'
SMTP_PASS='your-smtp-password'
SENDER_EMAIL='your-email@gmail.com'" > .env
```

**Environment Variables Explanation:**
- `MONGODB_URL`: Your MongoDB connection string  
- `JWT_SECRET`: Secret key for JWT token signing  
- `NODE_ENV`: Environment mode (development/production)  
- `SMTP_USER`: SMTP service username (Brevo/SendGrid/etc.)  
- `SMTP_PASS`: SMTP service password  
- `SENDER_EMAIL`: Email address for sending emails  

### 3. Frontend Setup
```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_BACKEND_URL=http://localhost:4000" > .env
```

### 4. Database Setup
Set up a MongoDB database (local or MongoDB Atlas)  
Update the `MONGODB_URL` in your backend `.env` file  
The application will automatically create the necessary collections.

## 🚀 Running the Application

### Start the Backend Server
```bash
# From backend directory
npm start
# or for development
npm run dev
```
The backend server will run on `http://localhost:4000`

### Start the Frontend Development Server
```bash
# From frontend directory
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📧 Email Configuration
This project uses **Brevo (formerly Sendinblue)** for email services.  
To set up email functionality:
1. Create an account on Brevo  
2. Get your SMTP credentials from the Brevo dashboard  
3. Update the SMTP settings in your backend `.env` file  

Alternatively, you can configure other SMTP services by updating the transporter configuration in `backend/config/nodemailer.js`.

## 🗂 Project Structure
```
mern-auth/
├── backend/
│   ├── config/
│   │   ├── mongodb.js
│   │   ├── nodemailer.js
│   │   └── emailTemplates.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── userAuth.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRouter.js
│   │   └── userRouter.js
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── assets/
    │   └── App.jsx
    └── vite.config.js
```

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /register | User registration |
| POST | /login | User login |
| POST | /logout | User logout |
| POST | /send-verify-otp | Send email verification OTP |
| POST | /verify-account | Verify email with OTP |
| POST | /send-reset-otp | Send password reset OTP |
| POST | /reset-password | Reset password with OTP |
| GET  | /is-auth | Check authentication status |

### User Routes (`/api/user`)
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | /data | Get user data (protected) |

## 🎯 Key Features Explained

### 1. User Registration & Login
- Secure password hashing with bcrypt  
- JWT token generation and cookie storage  
- Automatic welcome email on registration  

### 2. Email Verification
- 6-digit OTP sent to user's email  
- OTP valid for 24 hours  
- Professional email templates  

### 3. Password Reset
- Secure OTP-based password reset flow  
- OTP valid for 15 minutes  
- Password strength validation  

### 4. Security Features
- HTTP-only cookies for JWT storage  
- Password hashing with salt  
- CORS configuration  
- Environment variable protection  

## 🔧 Customization

### Modifying Email Templates
Edit the templates in `backend/config/emailTemplates.js` to customize the email design and content.

### Changing OTP Expiry
Update the expiry times in the controllers:
- **Email verification OTP:** 24 hours (`sendVerifyOtp`)
- **Password reset OTP:** 15 minutes (`sendResetOtp`)

### Styling Changes
The frontend uses Tailwind CSS. Modify the classes in React components or update the Tailwind configuration.

## 🐛 Troubleshooting

### Common Issues

**Email not sending**
- Check SMTP credentials in `.env`
- Verify Brevo account is activated
- Check spam folder

**Database connection issues**
- Verify MongoDB connection string
- Check if MongoDB service is running
- Ensure network connectivity

**CORS errors**
- Verify frontend URL is in allowed origins in `server.js`
- Check if backend is running on correct port

**Authentication issues**
- Clear browser cookies
- Check JWT secret in environment variables
- Verify token expiration settings

## 📝 Scripts

### Backend Scripts
```bash
npm start      # Start production server
npm run dev    # Start development server with nodemon
```

### Frontend Scripts
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

## 🌐 Deployment

### Backend Deployment
- Set `NODE_ENV=production` in environment variables
- Update CORS origins to include your frontend domain
- Deploy to services like **Heroku**, **Railway**, or **DigitalOcean**

### Frontend Deployment
- Update `VITE_BACKEND_URL` to your deployed backend URL
- Build the project: `npm run build`
- Deploy the `dist` folder to **Netlify**, **Vercel**, or **GitHub Pages**

## 🤝 Contributing
1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Push to the branch  
5. Create a Pull Request  

## 📄 License
This project is licensed under the **MIT License**.
