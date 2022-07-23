//Importing the images for the portfolio

import foodproj from "../images/projectsicon/foodproj.png"
import quiz from "../images/projectsicon/quiz.png"

// Making cards for each app in portfolio 
const portfolioData = [
  {
    image:  quiz,
    link: 'https://zanem10.github.io/my-quiz-/',
    desc: 'Cowboys Fan Quiz',
    summary: 'An app that quiz a user about the Dallas Cowboys ',
    tech: 'HTML | CSS | JS'
  },
  {
    image:  foodproj,
    link: 'https://zanem10.github.io/Project-1/search.html',
    desc: ' Food Dicton',
    summary: 'An app that allows you look up any ingreideint to get facts and reciepes',
    tech: 'HTML | CSS | API'
  },
  
]
  
export default portfolioData;