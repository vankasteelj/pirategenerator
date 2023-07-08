
const names = ['Barnabie', 'Rosie', 'Raffertie', 'Amie', 'Timothie', 'Marcy', 'Zacharie', 'Elsie', 'Billie', 'Lainie', 'Connolly', 'Callie', 'Montie', 'Cassie', 'Archibaldie', 'Emmie', 'Barnie', 'Sadie', 'Mackenzie', 'Goldie', 'Charlottie', 'Robbie', 'Evie', 'Montgomie', 'Stephanie', 'Maxie', 'Hallie', 'Alfie', 'Maisie', 'Ronie', 'Dixie', 'Bernie', 'Trixie', 'Frankie', 'Cassie', 'Bennie', 'Mindie', 'Bobbie', 'Kimmie', 'Fredddie', 'Pippie', 'Georgie', 'Mollie', 'Harvie', 'Lexie', 'Louie', 'Sallie', 'Edddie', 'Hattie', 'Bennie', 'Oliverie', 'Maisy', 'Percie', 'Lottie', 'Reggie', 'Sophie', 'Zachary', 'Cassy', 'Harry', 'Amelie', 'Benny', 'Mary', 'Finley', 'Kimberly', 'Archie', 'Rosalie', 'Tommie', 'Lucy', 'Charlie', 'Cally', 'Gabbie', 'Belly', 'Ashby', 'Emily', 'Rusty', 'Carrie', 'Frankie', 'Maggie', 'Leslie', 'Rudy', 'Sydney', 'Lacie', 'Cody', 'Elizabethie', 'Jeffrie', 'Allie', 'Wesley', 'Kimberley', 'Ty', 'Evie', 'Macky', 'Wendy', 'Eddy', 'Haylie', 'Samsie', 'Ellie', 'Toby', 'Amy', 'Charlie', 'Nancy']
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
]

const professions = [
  'sailor',
  'bosco',
  'artist',
  'quartermaster',
  'carpenter',
  'healer',
  'chaplain',
  'lookout',
  'cultist',
  'mage',
  'seeker',
  'warrior',
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