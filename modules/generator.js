function generateSentence(people, punchlines){
    const randomPeople = getRandomPeople(people);
    const randomPunchline = getRandomPunchline(punchlines);
    const sentence = `Why did ${randomPeople.name} say "${randomPunchline.lineUpWord}"? \n`+
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

// export { generateSentence }

// const { generateSentence } = require('./modules/generater.mjs');


const people = [{name:'Jimmy',
               pronoun: 'he'
            },
               {name:'Jhon',
               pronoun: 'he'
            },
               {name:'Kelly',
               pronoun: 'she'
            },
               {name:'Greg',
               pronoun: 'he'
            },
               {name:'Debbie',
               pronoun: 'she'
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
                    punchline: 'nailed his solo performance'
                },
                    {lineUpWord : 'Bon appétit',
                    punchline: 'She prepared a gourmet meal'
                },
                    {lineUpWord : 'Bravo',
                    punchline: 'finished a masterpiece'
                },
                    {lineUpWord : 'The end',
                    punchline: 'completed his bestseller'
                },
                    {lineUpWord : 'Take two aspirin',
                    punchline: 'prescribed a remedy'
                },
                
]

console.log(generateSentence(people,JokeWords))