
const names = ['Barnabie', 'Rosie', 'Raffertie', 'Amie', 'Timothie', 'Marcy', 'Zacharie', 'Elsie', 'Billie', 'Lainie', 'Connolly', 'Callie', 'Montie', 'Cassie', 'Archibaldie', 'Emmie', 'Barnie', 'Sadie', 'Mackenzie', 'Goldie', 'Charlottie', 'Robbie', 'Evie', 'Montgomie', 'Stephanie', 'Maxie', 'Hallie', 'Alfie', 'Maisie', 'Ronie', 'Dixie', 'Bernie', 'Trixie', 'Frankie', 'Cassie', 'Bennie', 'Mindie', 'Bobbie', 'Kimmie', 'Freddie', 'Pippie', 'Georgie', 'Mollie', 'Harvie', 'Lexie', 'Louie', 'Sallie', 'Eddie', 'Hattie', 'Bennie', 'Oliverie', 'Maisy', 'Percie', 'Lottie', 'Reggie', 'Sophie', 'Zachary', 'Cassy', 'Harry', 'Amelie', 'Benny', 'Mary', 'Finley', 'Kimberly', 'Archie', 'Rosalie', 'Tommie', 'Lucy', 'Charlie', 'Cally', 'Gabbie', 'Belly', 'Ashby', 'Emily', 'Rusty', 'Carrie', 'Frankie', 'Maggie', 'Leslie', 'Rudy', 'Sydney', 'Lacie', 'Cody', 'Elizabethie', 'Jeffrie', 'Allie', 'Wesley', 'Kimberley', 'Ty', 'Evie', 'Macky', 'Wendy', 'Eddy', 'Haylie', 'Samsie', 'Ellie', 'Toby', 'Amy', 'Charlie', 'Nancy', 'Abbie', 'Billy', 'Carrie', 'Darcie', 'Eddie', 'Freddy', 'Gracie', 'Henry', 'Indie', 'Jackie', 'Katie', 'Lenny', 'Maddie', 'Nicky', 'Ollie', 'Penny', 'Quincy', 'Riley', 'Stevie', 'Tillie', 'Vinny', 'Wesley', 'Xandie', 'Yazzy', 'Zoey', 'Albie', 'Bonnie', 'Charlie', 'Dottie', 'Elsie', 'Freddie', 'Ginny', 'Holly', 'Izzy', 'Jamie', 'Kylie', 'Lucky', 'Marnie', 'Nellie', 'Ozzie', 'Percy', 'Quinnie', 'Rosie', 'Sammie', 'Teddie', 'Vicky', 'Winnie', 'Xenie', 'Yannie', 'Ziggy']
const nicknames = [
  'Blackbeard',
  'Redbeard',
  'Long John',
  'the Salty',
  'the Buccaneer',
  'One-Eye',
  'Peg Leg',
  'Sparrow',
  'Sea Dog',
  'Corsair',
  'Jolly Roger',
  'Dread Pirate',
  'Silver Tooth',
  'the Smuggler',
  'Cutlass',
  'Black Bart',
  'the Mad',
  'Stede Bonnet',
  'Ironside',
  'Scarlet',
  'Cannonball',
  'Barnacle',
  'Scurvy Dog',
  'Gold Tooth',
  'Rum Runner',
  'Black Heart',
  'the Marauder',
  'Blade',
  'Sea Wolf',
  'Stormy',
  'Captain Blood',
  'Ravenous',
  'Bilge Rat',
  'Siren',
  'Plunderer',
  'Davy Jones',
  'Sharkbait',
  'Cutlass',
  'Seadog Slim',
  'the Treasure Hunter',
  'Rusty Blade',
  'Deckhand',
  'Marauding',
  'Swordfish',
  'Rumbeard',
  'the Smuggler'
]

const stories = [
  "This pirate is born on a small coastal village and grows up dreaming of the vast open seas.",
  "This pirate loses their family to a brutal attack by rival pirates, fueling their thirst for revenge.",
  "This pirate is a former naval officer who turns to piracy after being betrayed by their own crew.",
  "This pirate is a skilled navigator and uses their expertise to discover hidden treasure troves.",
  "This pirate is notorious for their cunning disguises, often posing as a wealthy merchant to infiltrate enemy ships.",
  "This pirate is known for their unmatched swordsmanship, leaving a trail of defeated foes in their wake.",
  "This pirate is a charismatic leader who commands a loyal crew and inspires fear in their enemies.",
  "This pirate is a master of espionage, gathering valuable information to gain the upper hand in battles.",
  "This pirate is a brilliant strategist, employing unconventional tactics to outsmart their adversaries.",
  "This pirate is feared for their supernatural abilities, rumored to have a pact with mythical sea creatures.",
  "This pirate is a skilled negotiator, often brokering deals and alliances to ensure their crew's survival.",
  "This pirate is a skilled musician, using their melodies to soothe the spirits of restless seafarers.",
  "This pirate is a fearless explorer, venturing into uncharted waters in search of legendary treasures.",
  "This pirate is a notorious trickster, luring unsuspecting ships into deadly traps with their clever schemes.",
  "This pirate is a compassionate soul, known for their acts of kindness towards the less fortunate.",
  "This pirate is a legendary shipwright, designing and constructing formidable vessels that strike fear into the hearts of their enemies.",
  "This pirate is a skilled surgeon, providing medical aid to injured crew members during treacherous voyages.",
  "This pirate is a cunning escape artist, slipping away from captivity time and again.",
  "This pirate is a relentless explorer, charting new territories and mapping unexplored islands.",
  "This pirate is a brilliant inventor, creating ingenious devices to aid their piratical endeavors.",
  "This pirate is a legendary drinker, able to outmatch anyone in a drinking contest and still remain standing.",
  "This pirate is known for their unrivaled luck, surviving numerous close encounters and near-death experiences.",
  "This pirate is a feared duelist, challenging rivals to one-on-one combat and emerging victorious each time.",
  "This pirate is a skilled linguist, fluent in multiple languages, which helps them negotiate with diverse crews and merchants.",
  "This pirate is a notorious prankster, always finding ways to keep their crew entertained during long voyages.",
  "This pirate is a master of stealth, able to sneak aboard enemy ships undetected and plunder their treasures.",
  "This pirate is a lover of fine arts, carrying a collection of stolen paintings and sculptures on their ship.",
  "This pirate is a devout follower of a secret pirate code, adhering to principles of honor and loyalty.",
  "This pirate is a legendary storyteller, captivating audiences with tales of their daring escapades on the high seas.",
  "This pirate is a champion of justice, targeting corrupt officials and redistributing their ill-gotten wealth.",
  "This pirate has a parrot sidekick that has a better sense of direction than they do.",
  "This pirate is known for their terrible singing voice, capable of scaring off even the most fearsome sea creatures.",
  "This pirate has an uncanny ability to find treasure maps hidden inside bottles of rum.",
  "This pirate is constantly searching for the perfect pirate hat to complete their swashbuckling ensemble.",
  "This pirate has an irrational fear of water, making their pirating career a bit challenging.",
  "This pirate has a secret stash of sea shanties that they only sing while taking a bath.",
  "This pirate insists on bringing their collection of rubber ducks on every plundering expedition.",
  "This pirate has a lucky peg leg that they believe brings them good fortune in every adventure.",
  "This pirate has a pet crab named Captain Pinchy, who is surprisingly skilled at tying knots.",
  "This pirate has a habit of accidentally confusing their sword with their toothbrush in the morning rush.",
  "This pirate is an expert in the art of burping the alphabet, which always earns them the crew's admiration.",
  "This pirate is known for their terrible jokes, capable of making even the most hardened sailors roll their eyes.",
  "This pirate has a soft spot for kitten-shaped booty and cannot resist collecting them during their pillaging.",
  "This pirate always carries a portable hammock to ensure they're ready for a quick nap whenever the mood strikes.",
  "This pirate believes that the best way to command respect is by wearing an eyepatch on each eye.",
  "This pirate has a habit of using their hook hand to poke unsuspecting crew members during conversations.",
  "This pirate has a talent for assembling a perfectly symmetrical pirate ship, much to the envy of rival captains.",
  "This pirate insists on telling bedtime stories to their crewmates, regardless of the time of day.",
  "This pirate is notorious for getting seasick even on the calmest of waters, much to their crew's amusement.",
  "This pirate is famous for their unique pirate dance moves, known to cause uncontrollable laughter among their crewmates.",
  "This pirate is always the first to volunteer for dishwashing duty, claiming it helps them find hidden treasure in the kitchen.",

]

const professions = [
  'Sailor',
  'Bosco',
  'Artist',
  'Quartermaster',
  'Carpenter',
  'Healer',
  'Chaplain',
  'Lookout',
  'Cultist',
  'Mage',
  'Seeker',
  'Warrior',
]

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const item = arr[randomIndex]
  return item
}

const generate = () => {
  let name = getRandomItem(names)
  let nickname = getRandomItem(nicknames)
  let profession = getRandomItem(professions)
  let story = getRandomItem(stories)
  document.getElementById('name').innerText = name + ' "' + nickname + '"'
  document.getElementById('profession').innerText = 'Profession: ' + profession
  document.getElementById('story').innerText = story

  let ageMax = 73;
  let ageMin = 17;
  let age = Math.floor(Math.random() * (ageMax - ageMin + 1) + ageMin)
  document.getElementById('age').innerText = age + " years old"
}