# Strava Activities Tracker

This React Native application, built with Expo, uses Zustand for state management and React Query for data fetching and caching. The app integrates with the Strava API to provide users with their recent activities and monthly statistics. OAuth authentication is implemented using deep linking to securely handle user authentication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Screens](#screens)
- [State Management](#state-management)
- [Data Fetching](#data-fetching)
- [Navigation](#navigation)
- [Error Handling](#error-handling)
- [UI/UX](#uiux)
- [Deep Linking](#deep-linking)
- [Code Quality](#code-quality)
- [Documentation](#documentation)
- [Future Improvements](#future-improvements)

## Features

- **OAuth Login**: Users can log in via Strava using OAuth authentication.
- **Deep Linking**: Handles OAuth redirect URIs securely.
- **Activities Screen**: Displays recent activities with details like name, date, distance, time, and elevation gain.
- **Monthly Stats Screen**: Aggregates and displays total distance, time, and elevation gain for the past 3 months.
- **Navigation**: Smooth navigation between screens using Expo Navigation.
- **Error Handling**: Gracefully handles network errors and provides user feedback during data fetching.

## Technologies

- **Expo**: A framework and platform for universal React applications.
- **Zustand**: A small, fast, and scalable state management solution.
- **React Query**: A powerful data fetching and caching library.
- **Strava API**: Provides access to user activities and statistics.
- **OAuth Authentication**: Securely handles user authentication.
- **Deep Linking**: Handles OAuth redirect URIs.

