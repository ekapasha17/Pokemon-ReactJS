# Pokémon React App Setup Guide

## Introduction
This guide will help you set up and run the Pokémon React application. The app features:
- A Pokémon list with grid/list view switching
- Detailed Pokémon view
- Search and filter functionality
- Local storage for persistence

## Prerequisites
- Node.js (v14 or later)
- npm or yarn

## Step 1: Create a New React App
```bash
npx create-vite pokemon-app --template react
cd pokemon-app
```

## Step 2: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Step 3: Set Up Project Files
1. Create a `src` folder structure:
```
src/
├── components/
│   ├── PokemonCard.js
│   ├── PokemonListItem.js
│   ├── PokemonListPage.js
│   └── PokemonDetailPage.js
├── context/
│   └── PokemonContext.js
├── App.js
├── index.js
└── index.css
```

2. Copy the code from the provided files into the project structure above.

## Step 4: Update package.json
Make sure your package.json includes the dependencies we provided.

## Step 5: Update Tailwind Config
Update the `tailwind.config.js` file with our provided configuration.

## Step 6: Update CSS
Replace the contents of `src/index.css` with our provided CSS that includes Tailwind imports.

## Step 7: Start the Development Server
```bash
npm run dev
```

Our application should now be running at http://localhost:5174

## Understanding the Code Structure

### Components

**App.js**
- The main component that wraps everything with the PokemonProvider
- Handles the basic app structure

**PokemonContext.js**
- Uses React Context and useReducer for state management
- Handles data fetching, filtering, and persistence
- Maintains the app's state

**PokemonListPage.js**
- Displays the list of Pokémon
- Has search, filter, and view mode (grid/list) functionality
- Uses the PokemonContext for data

**PokemonDetailPage.js**
- Shows detailed information about a selected Pokémon
- Accessed when clicking on a Pokémon in the list

**PokemonCard.js**
- The card component for the detailed view
- Shows Pokémon stats, image, and details

**PokemonListItem.js**
- Individual Pokémon item in the list view
- Adapts based on grid or list view mode

### Storage
- Uses localStorage to persist the Pokémon list
- Uses sessionStorage for view mode preference and last selected Pokémon

## What I've Learned
By building this app, you're learning:
1. React components and JSX
2. React Hooks (useState, useEffect, useContext, useReducer)
3. Context API for state management
4. LocalStorage and SessionStorage for persistence
5. Responsive design with Tailwind CSS
6. Component composition and reusability
7. Conditional rendering