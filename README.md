
# Portfolio Website

A beautiful portfolio website built with React.js and Express.js.

## Features

- Responsive design for all device sizes
- Smooth scrolling navigation
- Animated sections for better user experience
- Contact form with email functionality
- Showcase for projects and work experience
- Modern and clean UI

## Technology Stack

- **Frontend:**
  - React.js for UI components
  - TypeScript for type safety
  - TailwindCSS for styling
  - Shadcn/UI for components

- **Backend:**
  - Express.js for API handling
  - Nodemailer for email sending

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```sh
git clone <repository-url>
cd portfolio-website
```

2. Install NPM packages
```sh
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient-email@example.com
```

4. Start the development server
```sh
npm run dev
```

5. In a separate terminal, start the backend server
```sh
node server/server.js
```

## Building for Production

```sh
npm run build
```

This will create a `dist` folder with all the assets ready for deployment.

## Deploy

The application can be deployed as a single Express app that serves both the API endpoints and the static React files.

1. Build the frontend
```sh
npm run build
```

2. Start the server in production mode
```sh
NODE_ENV=production node server/server.js
```

## Customization

To customize this portfolio:

1. Update the personal information in `HeroSection.tsx`
2. Modify the skills in `AboutSection.tsx`
3. Update work experiences in `ExperienceSection.tsx`
4. Add your projects in `ProjectsSection.tsx`
5. Update social media links in `Footer.tsx`
6. Replace the profile image in `AboutSection.tsx`

## License

Distributed under the MIT License.
#
