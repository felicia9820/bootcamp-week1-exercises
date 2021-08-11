/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const adjective1 = 'beautiful'
const adjective2 = 'happy'
const adjective3 = 'sad'
const adjective4 = 'big'
const noun1 = 'giraffe'
const noun2 = 'box'
const noun3 = 'snake'
const adverb1 = 'slowly'
const adverb2 = 'closely'
const verbpast1 = 'watched'
const verb2 = 'draw'
const verbpast3 = 'told'

const story = `
Today I went to the zoo. I saw a(n)
${adjective1} ${noun1} jumping up and down in its tree.
He ${verbpast1} ${adverb1} through the large tunnel that led to its ${adjective2}
${noun2}. I got some peanuts and passed
them through the cage to a gigantic gray ${noun3}
towering above my head. Feeding that animal made
me hungry. I went to get a ${adjective3} scoop
of ice cream. It filled my stomach. Afterwards I had to
${verb2} ${adverb2} to catch our bus.
When I got home I ${verbpast3} my
mom for a ${adjective4} day at the zoo. 
`

console.log(story)

