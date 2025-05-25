# Variant Group Test Assignment

This project implementation of the [Variant Group React Developer Test Assignment](https://variantnet.notion.site/React-Developer-Test-Assignment-Variant-Group-d7a1e3460dc643958eb57a0518ce84b2).

## Technology Stack

### Frontend

- **React 19** - UI library
- **Zustand 5** - State management
- **PandaCSS** - Styling solution
- **Vite 6** - Build tool and development server
- **React Hook Form 7** - Form handling
- **React Router DOM 7** - Routing
- **Zod** - Schema validation
- **TypeScript** - Type safety

### Backend

- **Vercel Serverless Functions** - Backend implementation
- **OpenAI API** integration

## Project Structure

The project follows a feature-sliced design architecture with clear separation of concerns:

```
src/
├── app/        # Application setup and configuration
├── pages/      # Page components and routing
├── features/   # Feature-specific functionality
├── entities/   # Business entities
├── widgets/    # Composite UI blocks
├── shared/     # Shared utilities and components
```

## Future Improvements

The following enhancements are planned for future iterations:

- Replace Vercel Serverless Functions with a full-featured Node.js server
- Replace IndexedDB with a full-fledged database with a backend server
- Extract UI components into a separate UI kit with storybook
- Improve the design system:
    - Reduce color variations
    - Implement design tokens
    - Standardize component styles
- Add comprehensive test coverage following the Testing Trophy methodology
- Implement internationalization (i18n) support
- Additional minor improvements marked with TODO tags in the code

## Getting Started

### Prerequisites

- Node.js
- Yarn 4.9.1+

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd [project-directory]

# Install dependencies
yarn install
```

### Development

```bash
# Start the development server
yarn dev

# For local Vercel Functions development
yarn vercel:dev
```

### Build

```bash
# Build for production
yarn build

# Preview the production build
yarn preview
```

### Linting and Formatting

```bash
# Run ESLint
yarn lint

# Format code with Prettier
yarn format

# Check formatting without making changes
yarn format:check

# Run TypeScript type checking
yarn typecheck
```

### Deployment

The project is configured for deployment on Vercel:

```bash
# Deploy to Vercel
yarn vercel:deploy
```
