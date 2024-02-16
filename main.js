// import { generateSentence } from './modules/generator.js'
// const { generateSentence } = require('./modules/generater.mjs');


const people = [{name:'Jimmy',
               pronoun: 'He'
            },
               {name:'Jhon',
               pronoun: 'He'
            },
               {name:'Kelly',
               pronoun: 'She'
            },
               {name:'Greg',
               pronoun: 'He'
            },
               {name:'Debbie',
               pronoun: 'She'
            }
            ]


            const JokeWords = [{ lineUpWord : 'Class dismissed',
            punchline: 'finished with the lesson'
        },
            {lineUpWord : 'Case closed',
            punchline: 'solved the mystery'
        },
            {lineUpWord : 'Vote for me',
            punchline: 'promised change for the better'
        },
            {lineUpWord : 'Encore',
            punchline: 'nailed a solo performance'
        },
            {lineUpWord : 'Bon appétit',
            punchline: 'prepared a gourmet meal'
        },
            {lineUpWord : 'Bravo',
            punchline: 'finished a masterpiece'
        },
            {lineUpWord : 'The end',
            punchline: 'completed a bestseller'
        },
            {lineUpWord : 'Take two aspirin',
            punchline: 'prescribed a remedy'
        },
        
]

function generateSentence(people, punchlines){
   const randomPeople = getRandomPeople(people);
   const randomPunchline = getRandomPunchline(punchlines);
   const sentence = `Why did ${randomPeople.name} say "${randomPunchline.lineUpWord}"? `+
                    `${randomPeople.pronoun} ${randomPunchline.punchline}.`
   return sentence
}

function getRandomPeople(people){
   const randomIndex = Math.floor(Math.random() * people.length);
   return people[randomIndex]
}

function getRandomPunchline(punchlines){
   const randomIndex = Math.floor(Math.random() * punchlines.length);
   return punchlines[randomIndex]
}





///just get it to work :)
const label = document.getElementById('sentence')
const label2 = document.getElementById('answer')
const button = document.getElementById('generate-button')
const parentDiv = document.getElementById('history-panel');

let history = []
function loadSentence(event){
   label.innerHTML = event.target.innerText
}

function updateHistory(){

   for (let index = 0; index < history.length-1; index++) {
      const child = document.getElementById('new-'+index);
      parentDiv.removeChild(child)
   }

   for (let index = 0; index < history.length; index++) {
      const newDiv = document.createElement('div');
      newDiv.id = 'new-'+index;
      newDiv.className = 'history-item';
      newDiv.innerHTML = history[index];
      newDiv.addEventListener("click",loadSentence)
      parentDiv.appendChild(newDiv);
   }
}

function setSentence(){
   let tempSentence = generateSentence(people,JokeWords);
   label.innerHTML = tempSentence;
   history.push(tempSentence)
   updateHistory()
}
button.addEventListener("click",setSentence)