/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'thaifont': ['Kanit', 'sans-serif'],
    },
    extend: {

      colors: {
        'buttonmainbgcolr' : '#D74339',
        'solutionpage' : "#FDCD0E",
        'solution ' : '#373334',
        'navbar' : '#373334',
        'background' : '#F3ECE4',
        'button' : '#E8DCCC',
        'lonig' : '#EDE7D0' ,
        'lightgray' : '#E9E9E9',
        'rosebg' : '#F1ADA9',
        'cream' : '#EDE7D0',
        'gray222' : '#D9D9D9',
      },
      rotate: {
        'abit': '#5B80E7',
      },
      borderRadius: {
        'index': '5rem',
        'background' : '15rem',
        'index2': '10rem',
      },
      height : { 
        'solutionpage' : '40rem',
        'ssmenber' : '30rem'
      },
    },
  },
  plugins: [require("daisyui")],
}

