# Dr. Online App

This is a simplified prototype of the "Dr. Online App". It's a React-based web application.

## Project Status

This project has been modified to remove complex functionalities for demonstration purposes:
-   **No Authentication:** The original authentication system has been removed. Login and Registration pages now provide simple debug alerts instead of actual authentication.
-   **Static Data:** All mock data has been replaced with static JSX in the components.
-   **Simplified Navigation:** Dashboard pages have been removed, and all remaining pages are publicly accessible without login.

## Available Pages

The following pages are available:
-   Home (`/`)
-   About (`/about`)
-   Contact (`/contact`)
-   Forum (`/forum`)
-   Login (`/login`) - _Entering details will trigger a debug alert._
-   Register (`/register`) - _Entering details will trigger a debug alert._

## Demo Features

-   **Login Page (`/login`):** Enter any email and password. Upon clicking "Login", an alert will pop up displaying the entered credentials.
-   **Register Page (`/register`):** Fill out the registration form. Upon clicking "Register", an alert will pop up displaying the entered form data.