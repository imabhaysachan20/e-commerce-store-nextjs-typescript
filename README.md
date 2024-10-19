# E-Commerce Store (Next.js & TypeScript)

[![E-Commerce Store](https://i.postimg.cc/Rhx2mQkm/Screenshot-2024-10-19-224400.png)](https://e-commerce-store-nextjs-typescript.vercel.app/)



This is a fully functional, responsive E-commerce store built from scratch using **Next.js**, **TypeScript**, **Prisma**, and **Supabase**. The app includes advanced features such as product management, user authentication, favorites, reviews, and Stripe integration for payments.

## Live Demo
Check out the live demo of the app: [Live Demo](https://e-commerce-store-nextjs-typescript.vercel.app/)

## Features Implemented


[![User Auth Using Clerk](https://i.postimg.cc/8PZ2xWzF/Screenshot-2024-10-19-224830.png)](https://e-commerce-store-nextjs-typescript.vercel.app/)


### 1. User Authentication
- **Clerk Authentication**: Integrated with **Clerk** for secure authentication using email/password.
- **OAuth Providers**: Supports Google and GitHub login (using Clerk).
- **JWT-based Authentication**: For user sessions management.


[![Admin Panel](https://i.postimg.cc/br0hGNbK/Screenshot-2024-10-19-225629.png)](https://e-commerce-store-nextjs-typescript.vercel.app/)


### 2. Product Management
- **Admin Panel**: 
  - Add, remove, and edit products.
  - Track product sales.
- **Product Model**: Built using **Prisma**, with data stored in **Supabase**.
- **Products Page**: Displays all products with sorting and filtering options (e.g., by price, company, category, etc.).
- **Skeleton Loaders**: Utilized **React Suspense** for loading states.
- **Favorites Functionality**: Users can add products to their favorites list for easy access.



[![Screenshot-2024-10-19-230103.png](https://i.postimg.cc/HxF733rQ/Screenshot-2024-10-19-230103.png)](https://e-commerce-store-nextjs-typescript.vercel.app/)



### 3. Reviews & Ratings
- **Product Reviews**: Allows users to submit reviews and ratings for products.
- **Ratings Display**: Each product displays user-submitted ratings to help other users make informed decisions.


[![Screenshot-2024-10-19-230529.png](https://i.postimg.cc/7ZMHW9Wg/Screenshot-2024-10-19-230529.png)](https://e-commerce-store-nextjs-typescript.vercel.app/)

### 4. Cart & Orders
- **Cart Functionality**: 
  - Add, remove, and adjust item quantities in the cart.
  - Persist cart items even after reloads.
- **Checkout Process**: Completed order placement flow.
- **Orders Page**: Displays a user’s order history, including product details, cost, shipping address, and date.
- **Stripe Integration**: Secure payments powered by **Stripe** for payment acceptance.


[![Screenshot-2024-10-19-230721.png](https://i.postimg.cc/3RHwRwcH/Screenshot-2024-10-19-230721.png)](https://e-commerce-store-nextjs-typescript.vercel.app/)

### 5. Search & Filtering
- **Global Search**: Debounced search functionality in the header, allowing users to search for products or companies.


### 7. User Interface & Styling
- **Shadcn UI**: Customizable and modern UI components.
- **Dark/Light Mode**: Theme switching between dark and light modes.
- **Fully Responsive**: The design is fully responsive, working seamlessly across devices.



### 8. Routing
- **Next.js**: Framework used for server-side rendering and routing.




## Technologies Used

- **Next.js**: For building the React app with server-side rendering.
- **TypeScript**: Ensuring type safety and reducing errors.
- **Tailwind CSS**: For rapid UI development with utility-first CSS.
- **Shadcn UI**: A customizable component library.
- **Prisma**: ORM for interacting with the database.
- **Supabase**: Backend service for database and authentication.
- **Clerk**: For user authentication and management.
- **Stripe**: Secure payment gateway for processing transactions.


## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imabhaysachan20/Ecommerce-Store-React.git
