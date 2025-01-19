/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Dark Theme Palette
                "gray-d": "var(--gray-dark-theme)",
                "blue-d": "var(--blue-dark-theme)",
                "darkblue-d": "var(--darkblue-dark-theme)",
                "grayblue-d": "var(--grayblue-dark-theme)",
                "lightblue-d": "var(--lightblue-dark-theme)",
                "gray-medium-d": "var(--gray-medium-dark-theme)",
                "lightgray-d": "var(--lightgray-dark-theme)",
                "offwhite-d": "var(--offwhite-dark-theme)",
                "palegray-d": "var(--palegray-dark-theme)",
                "almostwhite-d": "var(--almostwhite-dark-theme)",
                "yellow-d": "var(--yellow-dark-theme)",
                orange: "var(--orange)",
                "bluebright-d": "var(--bluebright-dark-theme)",
                "green-d": "var(--green-dark-theme)",
                "purple-d": "var(--purple-dark-theme)",
                "orangebright-d": "var(--orangebright-dark-theme)",

                // Light Theme Palette
                "palegray-l": "var(--palegray-light-theme)",
                "almostwhite-l": "var(--almostwhite-light-theme)",
                "offwhite-l": "var(--offwhite-light-theme)",
                "lightgray-l": "var(--lightgray-light-theme)",
                "gray-medium-l": "var(--gray-medium-light-theme)",
                "lightblue-l": "var(--lightblue-light-theme)",
                "blue-dark-l": "var(--blue-dark-light-theme)",
                "grayblue-l": "var(--grayblue-light-theme)",
                "darkblue-l": "var(--darkblue-light-theme)",
                "gray-l": "var(--gray-light-theme)",
                "yellow-l": "var(--yellow-light-theme)",
                "bluebright-l": "var(--bluebright-light-theme)",
                "green-l": "var(--green-light-theme)",
                "purple-l": "var(--purple-light-theme)",
                "orangebright-l": "var(--orangebright-light-theme)"
            }
        }
    },
    plugins: []
};
