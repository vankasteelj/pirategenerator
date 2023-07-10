
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
  'Treasure Hunter',
  'Rusty Blade',
  'Deckhand',
  'Marauding',
  'Swordfish',
  'Rumbeard',
  'the Smuggler'
]

const stories = [
  "This pirate was born on a small coastal village and grows up dreaming of the vast open seas.",
  "This pirate lost their family to a brutal attack by rival pirates, fueling their thirst for revenge.",
  "This pirate is a former naval officer who turned to piracy after being betrayed by their own crew.",
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
  "This pirate is always the first to volunteer for dishwashing duty, claiming it helps them find hidden treasure in the kitchen."
]

const reputations = [
  "They are renowned for their unmatched swordsmanship and have never lost a duel.",
  "They are feared across the seas for their ruthless tactics and merciless plundering.",
  "They are known as a skilled navigator, always finding their way even in the most treacherous waters.",
  "They are celebrated for their strategic brilliance, often outsmarting larger fleets with ease.",
  "They are notorious for their ability to vanish into thin air, leaving no trace behind.",
  "They are respected by their crew for their unwavering loyalty and fair treatment.",
  "They are revered for their unrivaled knowledge of hidden treasure troves and lost pirate havens.",
  "They are infamous for their audacious heists on heavily guarded merchant ships.",
  "They are hailed as a legend among pirates, with countless tales of their daring escapes and victories.",
  "They are whispered about in port towns, known for their uncanny ability to evade capture by authorities.",
  "They are respected by rival pirates for their strict adherence to a personal code of honor.",
  "They are admired for their expert command of their ship, guiding it through storms and battles with unmatched skill.",
  "They are recognized for their acts of kindness towards those in need, earning them a reputation as a pirate with a heart of gold.",
  "They are feared by superstitious sailors, rumored to be protected by ancient sea spirits.",
  "They are celebrated for their charismatic leadership, inspiring their crewmates to loyalty and bravery.",
  "They are infamous for their navigation prowess, always able to find the shortest and safest routes.",
  "They are known for their uncanny ability to predict the weather, ensuring successful voyages even in the most unpredictable conditions.",
  "They are respected as a fierce protector of the seas, standing up against those who exploit and harm the ocean.",
  "They are admired for their skillful negotiations, often striking lucrative deals with merchants and rival pirate crews.",
  "They are notorious for their affinity with sea creatures, rumored to have a telepathic connection with marine life.",
  "They are known for their uncanny ability to navigate through treacherous reefs unscathed.",
  "They are respected by fellow pirates for their unwavering loyalty to their crewmates.",
  "They are feared for their lightning-fast reflexes and unmatched agility in combat.",
  "They are celebrated as a master of disguise, capable of infiltrating any ship unnoticed.",
  "They are notorious for their extensive knowledge of secret pirate hideouts and hidden caches of treasure.",
  "They are hailed as a legend among pirates, with their name striking fear into the hearts of those who hear it.",
  "They are whispered about in taverns, known for their uncanny luck in finding lost relics and ancient artifacts.",
  "They are infamous for their ability to outmaneuver even the most advanced naval vessels.",
  "They are revered as a protector of the downtrodden, often coming to the aid of those oppressed by tyranny.",
  "They are respected by their crew for their unmatched culinary skills and ability to turn even the humblest rations into a feast.",
  "They are celebrated for their proficiency in multiple languages, allowing them to negotiate with a wide range of cultures and nationalities.",
  "They are known for their unwavering resolve and refusal to back down from any challenge or obstacle.",
  "They are feared for their uncanny ability to summon storms at will, wreaking havoc on their enemies.",
  "They are admired for their knowledge of ancient pirate lore and their dedication to upholding traditional pirate values.",
  "They are infamous for their audacious raids on heavily fortified naval fortresses and coastal settlements.",
  "They are hailed as a master of the art of intimidation, with a mere glance capable of striking fear into the hearts of even the bravest souls.",
  "They are respected as a cunning strategist, always able to anticipate their enemies' moves and stay one step ahead.",
  "They are recognized for their extensive network of informants and spies, providing them with valuable intelligence on potential targets.",
  "They are known for their unparalleled skill in repairing and maintaining ships, keeping their vessel in peak condition at all times.",
  "They are feared by their enemies for their mastery of deadly poisons, making them a lethal adversary in close combat.",
  "They are known for their uncanny ability to find treasure, as long as it's buried under a pile of dirty laundry.",
  "They are feared across the seas for their fierce swordsmanship and their even fiercer collection of silly hats.",
  "They are celebrated for their exceptional ability to navigate, especially when it comes to finding the nearest tavern.",
  "They are notorious for their uncanny knack for making cannonballs disappear, often accidentally, during battles.",
  "They are hailed as a legend among pirates for their extraordinary talent for talking parrots out of repeating embarrassing secrets.",
  "They are whispered about in pirate circles for their unparalleled ability to nap on a plank while the ship is in motion.",
  "They are infamous for their exceptional taste in rum, often finding the rarest and most flavorful barrels in the Caribbean.",
  "They are revered as a master of disguise, capable of transforming into a barrel of rum at a moment's notice.",
  "They are respected for their impeccable sense of timing, always showing up just in time to claim someone else's treasure.",
  "They are celebrated for their unique method of navigation, which involves following the scent of freshly baked cookies.",
  "They are feared by rival pirates for their uncanny talent of making sea shanties get stuck in their enemies' heads for days.",
  "They are admired for their unmatched skill in solving crossword puzzles, making them a formidable opponent during long voyages.",
  "They are known for their uncanny ability to tame sea creatures, often found lounging on a giant inflatable rubber duck.",
  "They are infamous for their unusual fascination with collecting seashells, to the point of building a seashell palace on their ship.",
  "They are hailed as the undisputed champion of pirate fashion, always setting trends with their exquisite collection of mismatched socks.",
  "They are whispered about in port towns for their legendary ability to balance a cutlass on their nose while juggling cannonballs.",
  "They are respected by their crew for their incredible talent for finding the perfect hiding spot during games of hide-and-seek.",
  "They are revered as the ultimate prankster, always ready to unleash a swarm of ticklish parrots on unsuspecting rival captains.",
  "They are celebrated for their unmatched ability to tell pirate jokes that are so bad, they can make an entire ship burst into laughter.",
  "They are feared by superstitious sailors for their mysterious ability to predict the exact moment when someone's hat will be blown away by the wind."
];

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

const weapons = [
  'Cutlass',
  'Flintlock pistol',
  'Boarding axe',
  'Rapier',
  'Blunderbuss',
  'Throwing knives',
  'Saber',
  'Harpoon',
  'Cannon',
  'Poisoned dagger',
  'Cat o\' nine tails',
  'Musket',
  'Longbow',
  'Trident',
  'Belaying pin',
  'Net launcher',
  'Sling',
  'Brass knuckles',
  'Hidden blade',
  'Double-barreled pistol',
  'Grappling hook',
  'Tomahawk',
  'Blowgun',
  'Spiked mace',
  'Hand crossbow',
  'Whip',
  'Bola',
  'Stink bomb',
  'Firebrand',
  'Cursed cutlass',
]

const appearances = [
  "Their weather-beaten face bears the tales of a hundred sunsets and a thousand shenanigans.",
  "They sport a magnificent ponytail that rivals the size of their treasure chest.",
  "With an unmistakable swagger, they walk the deck, donning a hat that can double as a makeshift umbrella.",
  "Their mismatched boots and tattered coat give them a charmingly disheveled look, as if they just narrowly escaped a fashion disaster.",
  "Their eyes sparkle like two doubloons, and their smile can brighten the darkest corners of a pirate tavern.",
  "Their outfit is a hodgepodge of stolen fashion trends from across the seven seas, proving that style truly knows no boundaries.",
  "They wear a bandana embroidered with the phrase 'Caution: Pirate at Work' just to keep everyone on their toes.",
  "Their trusty parrot companion sits atop their shoulder, adding a splash of feathers to their unique pirate ensemble.",
  "Their fashion sense is best described as 'rummage chic' with a touch of 'sea breeze couture.'",
  "They proudly display a collection of seashells tied to their belt, claiming it's the latest pirate fashion accessory.",
  "Their pirate hat has so many feathers that it's considered a migratory bird sanctuary.",
  "They sport a pirate coat covered in pockets, which they claim are for storing their snacks and a secret stash of pirate-themed puns.",
  "Their boots are always polished to perfection, ensuring they can make a stylish getaway even in the muddiest of situations.",
  "They have a collection of colorful scarves that would make even the most fashionable pirate envious.",
  "Their sword belt is adorned with an assortment of shiny trinkets, each with a story that gets longer with every telling.",
  "They wear a peg leg with a built-in compass, ensuring they never lose their sense of direction or their flair for fashion.",
  "Their eyepatch is uniquely designed to resemble a pirate's favorite snack: a delicious slice of pizza.",
  "They have an impressive array of tattoos, each telling a different tale, with one that mysteriously changes design every full moon.",
  "Their attire is adorned with buttons salvaged from various adventures, with each button representing a daring escape or a questionable decision.",
  "They wear a shiny belt buckle engraved with the words 'No booty like pirate booty.'",
]

const backdrops = [0, 1, 2, 3, 4]

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const item = arr[randomIndex]
  return item
}

const generate = () => {
  // reset
  document.getElementById('charactersheet').className = ''

  // generate
  const name = getRandomItem(names)
  const nickname = getRandomItem(nicknames)
  const profession = getRandomItem(professions)
  const weapon = getRandomItem(weapons)
  const story = getRandomItem(stories)
  const reputation = getRandomItem(reputations)
  const appearance = getRandomItem(appearances)
  const backdrop = getRandomItem(backdrops)
  const ageMax = 73;
  const ageMin = 17;
  const age = Math.floor(Math.random() * (ageMax - ageMin + 1) + ageMin)

  // conditions
  const completeName = ((name + ' "' + nickname + '"').length <= 16) ? name + ' "' + nickname + '"' : name + '\n"' + nickname + '"'

  // apply
  document.getElementById('charactersheet').classList.add('img'+backdrop);
  document.getElementById('name').innerText = completeName
  document.getElementById('profession').innerText = 'Profession: ' + profession
  document.getElementById('weapon').innerText = 'Weapon of choice: ' + weapon
  document.getElementById('story').innerText = story + ' ' + reputation
  document.getElementById('appearance').innerText = appearance
  document.getElementById('age').innerText = age + " years old"
}