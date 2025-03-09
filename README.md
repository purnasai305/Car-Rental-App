# Car Rental App

This project is a **car rental application** inspired by **Zoomcar**. The frontend is built with **React.js**, and the backend is developed using **.NET**. It provides a seamless user experience for renting cars, managing bookings, and exploring available vehicles.

![image](https://github.com/user-attachments/assets/63fa282a-581a-431d-81b6-1a7e263e915c)
![image](https://github.com/user-attachments/assets/9cc3319b-3c09-48de-ba47-d83fdb9f51c0)



## Features
- **User Authentication**: Secure login and registration for users and car owners.
- **Car Listing**: Browse available cars with filters for location, type, and availability.
- **Booking System**: Users can book cars, and owners can manage booking requests.
- **Like Feature**: Users can like their favorite cars, with interactive UI feedback.
- **Date Selection**: Integrated date picker for selecting rental dates.

## Frontend
The frontend was developed using **React.js** and includes the following key features and tools:
- **State Management**: Managed using `useState` and **Redux** for global state.
- **Side Effects Handling**: Implemented using `useEffect` to fetch data and manage subscriptions.
- **Routing**: Managed navigation using **React Router**, including dynamic routes with `useParams`.
- **Date Picker**: Used **react-date-picker** for easy date selection.
- **Responsive Design**: Ensured a mobile-friendly UI that works on various devices.

## Backend
The backend is developed using **.NET** following the **MVC architecture**:
- **Models-Views-Controllers (MVC)**: Structured code into models, views, and controllers for maintainability.
- **Database**: Integrated **MongoDB** as the database for storing user data, car listings, and bookings.
- **API Development**: Built RESTful APIs to handle requests for user authentication, car data, and bookings.

## Technologies Used
### Frontend
- **React.js**
- **Redux**
- **React Router**
- **react-date-picker**
- **Styled-Components** (or CSS modules)
  
### Backend
- **.NET Core**
- **MongoDB**
- **ASP.NET Web API**
  
### Tools
- **Git** and **GitHub** for version control.
- **Postman** for API testing.
- **Node.js** for development tooling (e.g., package management).

## Installation
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. **Backend Setup**:
   - Open the backend solution in Visual Studio or your preferred IDE.
   - Update the MongoDB connection string in `appsettings.json`.
   - Run the application using IIS Express or `dotnet run`.

## Usage
- Navigate to the frontend URL (`http://localhost:3000`) to access the app.
- Register or log in to explore available cars and manage bookings.

## Future Enhancements
- Implement payment gateway integration for seamless transactions.
- Add server-side validation for enhanced security.
- Optimize performance by introducing lazy loading for images and data.

## License
This project is for educational purposes and is not intended for commercial use.

---

Feel free to customize or expand this README based on your specific project requirements!
