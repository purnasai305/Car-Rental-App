# Car Rental Application

This project is a car rental application inspired by **Zoomcar**, featuring a cloned frontend built with **React.js** and a backend developed using **.NET**. It provides a seamless experience for users to browse and book cars while enabling car owners to manage their listings.

## Frontend

The frontend is developed using **React.js**, with a focus on responsive design and smooth user interactions.

### Key Technologies and Libraries
- **React.js**: Core library for building the user interface.
- **React Hooks**:
  - `useState`: For managing local component state.
  - `useEffect`: For handling side effects like data fetching.
- **Redux**: For global state management, ensuring consistent data flow across components.
- **React Router**: For navigation between pages.
- **React Date Picker**: For selecting booking dates.
- **useParams**: For extracting route parameters dynamically.

### Features
- **Dynamic Routing**: Users can navigate between different pages like car listings, car details, and booking pages.
- **State Management**: Redux manages the global state for user sessions, car data, and booking details.
- **Date Selection**: Integrated date picker for selecting rental dates.

## Backend

The backend is built using **.NET**, following the **MVC (Model-View-Controller)** architecture to ensure a clear separation of concerns.

### Key Technologies and Design Patterns
- **.NET MVC**: Used to structure the backend with a focus on scalability and maintainability.
- **RESTful APIs**: Exposed endpoints for managing cars, bookings, and user data.
- **Entity Framework**: For database interactions.
- **Authentication and Authorization**: Role-based access control for users and car owners.

### Features
- **Car Management**: API endpoints for car owners to add, update, and delete car listings.
- **Booking Management**: Users can book cars, and owners can manage booking requests.
- **User Authentication**: Token-based authentication for secure user sessions.

## How to Run the Application

### Prerequisites
1. **Node.js**: Required to run the React frontend.
2. **.NET SDK**: Required to run the backend.
3. **Database**: Set up a database (e.g., SQL Server or another supported DB).

### Steps
1. Clone the repository:
   ```bash
   git clone [repository URL]
   ```
2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
4. Navigate to the backend directory and run the backend server:
   ```bash
   cd ../backend
   dotnet run
   ```

## Conclusion

This car rental application demonstrates a full-stack implementation using **React.js** for the frontend and **.NET MVC** for the backend. It showcases modern development practices with state management, routing, and a robust backend architecture.
