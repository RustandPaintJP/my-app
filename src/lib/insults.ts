export const verbs = [
  "shrinking",
  "festering",
  "wobbling",
  "Bitching",
  "Blubbering",
"Bungling",
"Cackling",
"Chiseling",
"Clowning",
"Cowering",
"Dithering",
"Drooling",
"Fawning",
"Floundering",
"Groveling",
"Leeching",
"Malingering",
"Mooching",
"Nattering",
"Noodling",
"Pestering",
"Prattling",
"Stinking",
"Mewling",
"Farting",
"Ass-Blasting",
"Sniveling"
  // add your own verbs here...
];

export const adjectives = [
  "Flaccid",
  "Soggy",
  "Crusty",
  "Arrogant",
"Boorish",
"Callous",
"Conceited",
"Feckless",
"Gullible",
"Incompetent",
"Insolent",
"Loutish",
"Malicious",
"Obnoxious",
"Obstinate",
"Pompous",
"Pretentious",
"Sanctimonious",
"Slovenly",
"Spiteful",
"Squeamish",
"Vapid",
"Rotten",
"Overripe",
"Sour",
"Vindictive"
  // add your own adjectives here...
];

export const nouns = [
  "corncob",
  "biscuit",
  "turnip",
  "Buffoon",
"Charlatan",
"Cretin",
"Dastard",
"Dimwit",
"Dolt",
"Idiot",
"Imbecile",
"Ingrate",
"Incompetent",
"Lout",
"Milksop",
"Moron",
"Nincompoop",
"Numbskull",
"Parasite",
"Poltroon",
"Simpleton",
"Sycophant",
"Toady",
"Crayon",
"Dongle",
"Ice Cream",
"Mushroom",
"Bellend",
"Jabroni"
  // add your own nouns here...
];

export function generateInsult(): string {
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `You ${verb}, ${adjective} ${noun}`;
}
