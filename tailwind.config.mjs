import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Lägg till DaisyUI här
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Välj teman
  },
};
