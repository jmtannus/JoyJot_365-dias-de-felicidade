# JOYJOT 365-dias-de-felicidade 🌻

Building a fully responsive modern website in ReactJS using Tailwind CSS and Vite, with the functionality to allow users to register, enter and edit messages, and view these messages in a calendar format, involves several steps. Here's a step-by-step guide to help you through the process:

### Step 1: Setting Up Your Development Environment

1. **Install Node.js**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
2. **Create a New Vite Project**: Open your terminal and run the following command to create a new Vite project with a React template:
   ```bash
   npm create vite@latest my-smile-calendar-app -- --template react
   cd my-smile-calendar-app
   ```
3. **Install Tailwind CSS**: Inside your project directory, install Tailwind CSS along with its dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   This command creates `tailwind.config.js` and `postcss.config.js` files in your project root.

### Step 2: Configuring Tailwind CSS

1. **Configure Tailwind**: Edit the `tailwind.config.js` file to enable JIT mode for faster builds and purge unused styles in production:
   ```javascript
   module.exports = {
     mode: 'jit',
     purge: ['./index.html', './src/**/*.{vue,js,ts,jsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
   ```

### Step 3: Building the User Registration Page

1. **Create a Registration Component**: In your `src/components` folder, create a file named `Register.js`. Use Tailwind CSS for styling and React state management for form handling.
2. **Implement Form Validation**: Use React's useState hook to manage form inputs and useEffect to handle form submission.

### Step 4: Implementing Message Entry and Editing

1. **Create a Messages Component**: Similar to the registration component, create a `Messages.js` component in the `src/components` folder.
2. **Use Local Storage or a Backend Service**: To persist messages across sessions, consider storing them in local storage or implementing a backend service.

### Step 5: Creating the Calendar View

1. **Integrate a Calendar Library**: For displaying dates and messages, consider integrating a calendar library like FullCalendar or react-big-calendar.
2. **Fetch and Display Messages**: Modify the calendar component to fetch messages based on selected dates and display them accordingly.

### Step 6: Adding Mood Indicators

1. **Implement Mood Selection**: Allow users to select their mood (happy, very happy, in love, neutral) for each message.
2. **Visualize Moods**: Use different colors or icons to represent moods visually in the calendar.

### Step 7: Making the Website Responsive

1. **Utilize Tailwind CSS Utilities**: Tailwind provides responsive design utilities. Use classes like `sm:text-base`, `md:text-lg`, etc., to adjust sizes based on screen width.
2. **Test Responsiveness**: Use browser developer tools to simulate different devices and ensure your layout adapts correctly.

### Additional Suggestions

- **User Authentication**: Consider adding authentication to restrict access to registered users only.
- **Feedback Loop**: Encourage users to rate their experience or suggest improvements.
- **Analytics**: Track user engagement and behavior to understand how users interact with your application.

By following these steps and incorporating the suggested enhancements, you'll be well on your way to building a feature-rich, responsive, and engaging website using ReactJS, Tailwind CSS, and Vite.

Citations:
[1] https://www.frontendmentor.io/solutions/responsive-design-solution-using-reactjs-tailwindcss-vite-and-js-F6HYoj5519
[2] https://www.youtube.com/watch?v=22CxRxryQFE
[3] https://tailwindcss.com/docs/guides/vite
[4] https://www.youtube.com/watch?v=GDd2c70gsxE
[5] https://medium.com/@mason.aviles.dev/simple-easy-vite-js-react-js-tailwind-css-tutorial-with-data-fetching-d8c26ec95f03
[6] https://www.youtube.com/watch?v=NzSIqY3c-tk
[7] https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/
[8] https://www.youtube.com/watch?v=DGKjcLzX8Jw
[9] https://www.lambdatest.com/blog/best-css-frameworks-for-react/
[10] https://marmelab.com/react-admin/Features.html
