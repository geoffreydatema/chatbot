let $response = document.getElementById('response')
let $input = document.getElementById('input')
let $submit = document.getElementById('submit')

let botPrompt = 'Bot: '
let name = ''
let namePrompt = ''

// Text source
const greetings = [
    'Hi',
    'Hey there',
    'Greetings, earthling',
    'Hello',
    'Howdy'
]

const punctuation = [
    '.',
    '!',
    '...'
]

const prompts = [
    'What\'s up?',
    'How can I help you?',
    'What\'s new?'
]

const questionWords = [
    'do',
    'did',
    'does',
    'can',
    'am',
    'was',
    'were',
    'have',
    'has',
    'may',
    'are',
    'will',
    'should',
    'is'
]

const questionResponses = [
    'Yes',
    'No',
    'Maybe',
    'You bet',
    'Absolutely',
    'Haha, you amuse me earthling'
]

const generalResponses = [
    'Okay',
    'Alright',
    'If you say so',
    'I\'m not convinced, but whatever',
    'Whatever',
    'Fine, just chill out'
]

function getRandom(max) {
    return (Math.floor(Math.random() * max))
}

// Init
$response.textContent += `${botPrompt} Hi there! What's your name?`

// Remainder of functionality handled by event callback
$submit.addEventListener('click', function () {
    if (name === '') {
        name = $input.value
        namePrompt = `${name}: `
        $input.value = ''

        $response.textContent += `\n${greetings[getRandom(greetings.length)]} ${name}${punctuation[getRandom(punctuation.length)]} ${prompts[getRandom(prompts.length)]}`
    } else {
        let questionStatus = false;
        let firstWord = $input.value.split(' ')[0]
        firstWord = firstWord.toLowerCase()
        for (word of questionWords) {
            if (firstWord === word) {
                questionStatus = true
                break;
            }
        }
        console.log(firstWord)
        $response.textContent += `\n${namePrompt}${$input.value}`
        $input.value = ''
        
        if (questionStatus === true) {
            $response.textContent += `\n${botPrompt}${questionResponses[getRandom(questionResponses.length)]}${punctuation[getRandom(punctuation.length)]}\n${prompts[getRandom(prompts.length)]}`
        } else {
            $response.textContent += `\n${botPrompt}${generalResponses[getRandom(generalResponses.length)]}${punctuation[getRandom(punctuation.length)]}\n${prompts[getRandom(prompts.length)]}`
        }
    }
})
