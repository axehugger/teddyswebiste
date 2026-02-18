/* ==========================================================================
   Origins — Etymology Trivia Game
   ========================================================================== */

const OriginsGame = (function () {
  'use strict';

  const questions = [
    {
      question: "What's the origin of \"Rule of Thumb\"?",
      options: [
        "An old English law about beating wives",
        "Brewers measuring beer temperature with their thumb",
        "Tailors measuring fabric by thumb width",
        "Carpenters' rough measurement technique"
      ],
      correct: 1,
      explanation: "Brewers used their thumb to test if beer was the right temperature for adding yeast — lukewarm, about body temperature. The wife-beating myth has been thoroughly debunked by historians."
    },
    {
      question: "Why do we call it a \"Red Herring\"?",
      options: [
        "Named after a Communist spy technique",
        "Used to train hunting dogs by dragging smoked fish across trails",
        "A type of warning flag on medieval ships",
        "From a medieval cooking technique"
      ],
      correct: 1,
      explanation: "Smoked herrings turn red and have a strong smell. They were dragged across trails to train hunting dogs to follow scents despite distractions, eventually becoming a metaphor for misleading clues."
    },
    {
      question: "Where does \"Break the Ice\" come from?",
      options: [
        "Ice-breaker ships clearing paths for other vessels",
        "Breaking ice sculptures at Victorian parties",
        "A medieval jousting term",
        "Prohibition-era speakeasy signal"
      ],
      correct: 0,
      explanation: "Special ships called ice-breakers would literally break through frozen waterways to allow other vessels to pass. The phrase evolved into a metaphor for easing tense or awkward social situations."
    },
    {
      question: "Why is the @ symbol called \"at\"?",
      options: [
        "It was invented for email by Ray Tomlinson",
        "It was a medieval monk's abbreviation for the Latin word 'ad'",
        "It comes from Renaissance merchants pricing goods (e.g., '12 items @ $1')",
        "It was a telegraph operator shorthand"
      ],
      correct: 1,
      explanation: "Medieval monks copying manuscripts needed shortcuts. They merged the letters of the Latin word 'ad' (meaning 'at' or 'toward') into a single flowing stroke — the 'a' wrapped in the 'd' — creating the @ symbol."
    },
    {
      question: "Why do we call gossip magazines \"Tabloids\"?",
      options: [
        "Named after the small table where editors worked",
        "Originally a trademark for compressed medicine tablets",
        "From the French word 'tableau' meaning picture",
        "Named after a London street where papers were printed"
      ],
      correct: 1,
      explanation: "\"Tabloid\" was a trademark of Burroughs Wellcome & Co. for their compressed medicine tablets. It became slang for anything compressed or condensed, and was eventually applied to newspapers that presented the news in a compact, concentrated format."
    },
    {
      question: "Where does \"Deadline\" come from?",
      options: [
        "Newspaper printing press terminology",
        "A literal line around Civil War prison camps",
        "Medieval boundary lines around towns",
        "Ship cargo loading time limits"
      ],
      correct: 1,
      explanation: "During the American Civil War, a physical line was drawn around prison camps. Any prisoner who crossed it would be shot dead. The term later evolved to mean any final time limit."
    },
    {
      question: "Why do we say someone is a \"Scapegoat\"?",
      options: [
        "From Greek mythology about a goat that escaped sacrifice",
        "An ancient Hebrew ritual where sins were symbolically placed on a goat",
        "Medieval farmers blamed escaped goats for crop damage",
        "Roman gladiators who survived the arena"
      ],
      correct: 1,
      explanation: "In the ancient Hebrew Day of Atonement, a priest would symbolically place the community's sins on a goat, which was then sent into the wilderness — literally an 'escape goat' that carried away their sins."
    },
    {
      question: "What's the origin of the word \"Salary\"?",
      options: [
        "From the Latin word for 'gold'",
        "Named after a Roman banking family",
        "From the Latin word for 'salt'",
        "From the Greek word for 'payment'"
      ],
      correct: 2,
      explanation: "\"Salary\" comes from the Latin 'salarium,' connected to 'sal' (salt). Roman soldiers were sometimes paid in salt or given an allowance to buy it. Salt was incredibly valuable for food preservation — hence 'worth your salt.'"
    },
    {
      question: "Why is it called a \"Best Man\" at weddings?",
      options: [
        "He was chosen as the groom's closest friend",
        "He was literally the best swordsman to help kidnap the bride",
        "A Victorian tradition honoring the most virtuous friend",
        "From a Norse ritual about strength competitions"
      ],
      correct: 1,
      explanation: "In ancient Germanic and Norse traditions, the 'best man' was the best swordsman among the groom's friends. His job was to help the groom kidnap the bride from a neighboring village and defend against her family's attempts to get her back."
    },
    {
      question: "Where does the word \"Quarantine\" come from?",
      options: [
        "A Greek word meaning 'separation'",
        "The Italian word for 'forty days' — the period ships had to wait",
        "Named after Dr. Quarantine who invented the practice",
        "A Latin term for 'safe harbor'"
      ],
      correct: 1,
      explanation: "During the Black Death, Venice required ships to anchor offshore for 40 days ('quaranta giorni' in Italian) before passengers could disembark. This 40-day waiting period became known as 'quarantina,' giving us 'quarantine.'"
    },
    {
      question: "Why do we call it a \"Checkmate\" in chess?",
      options: [
        "From the English 'check' and 'mate' meaning companion",
        "Named after a medieval battle strategy",
        "From the Persian phrase 'shāh māt' meaning 'the king is dead'",
        "From the French 'échec mat' meaning 'failed defense'"
      ],
      correct: 2,
      explanation: "\"Checkmate\" comes from the Persian 'shāh māt,' meaning 'the king is helpless' or 'the king is dead.' Chess traveled from India through Persia to Europe, and the term evolved through Arabic and Old French before reaching English."
    },
    {
      question: "What's the origin of \"Crocodile Tears\"?",
      options: [
        "Crocodiles actually do cry while eating prey",
        "A medieval myth that crocodiles lured prey by weeping",
        "Named after a Egyptian mourning ritual",
        "From a Roman fable about a deceptive crocodile"
      ],
      correct: 0,
      explanation: "Crocodiles genuinely do produce tears while eating — their tear glands are stimulated by the jaw movements of biting. Medieval travelers observed this and assumed the crocodiles were being hypocritically sorrowful about killing their prey."
    },
    {
      question: "Where does the word \"Podcast\" come from?",
      options: [
        "POD stands for 'Portable On Demand'",
        "A blend of 'iPod' and 'broadcast'",
        "Named after its inventor, Adam Pod",
        "From the Greek 'pod' meaning voice"
      ],
      correct: 1,
      explanation: "Journalist Ben Hammersley coined 'podcast' in a 2004 Guardian article, combining Apple's 'iPod' with 'broadcast.' Despite this origin, podcasts were never exclusive to iPods or Apple devices."
    },
    {
      question: "Why do we call the midday meal \"Lunch\"?",
      options: [
        "From the Spanish 'loncha' meaning a slice of food",
        "Short for 'luncheon,' which meant a thick piece of bread",
        "Named after Lord Lunch who formalized the midday meal",
        "From the German 'lansch' meaning to eat quickly"
      ],
      correct: 1,
      explanation: "\"Lunch\" is short for 'luncheon,' which likely comes from the old English 'nuncheon' or Spanish 'lonja,' referring to a thick piece or slice of food — essentially a hunk of bread and cheese eaten at midday."
    },
    {
      question: "What's the origin of the phrase \"The Whole Nine Yards\"?",
      options: [
        "The length of a WWII ammunition belt",
        "Amount of fabric needed for a Scottish kilt",
        "Capacity of a cement mixer truck",
        "Its true origin is genuinely unknown"
      ],
      correct: 3,
      explanation: "Despite many colorful theories (ammo belts, kilts, cement trucks), etymologists and historians have never found a definitive origin. The phrase first appeared in print in the 1960s, and its true origin remains one of the great mysteries of English etymology."
    },
    {
      question: "Why is it called a \"Bluetooth\" device?",
      options: [
        "Named after the blue LED indicator light",
        "Named after Viking King Harald Bluetooth who united warring tribes",
        "From a Bell Labs project codenamed 'Blue Tooth'",
        "The inventor had a blue-colored dental filling"
      ],
      correct: 1,
      explanation: "Bluetooth is named after 10th-century Viking King Harald 'Bluetooth' Gormsson, who united warring Danish and Norwegian tribes. The technology was designed to unite different communication protocols, and the Bluetooth logo combines his runic initials."
    },
    {
      question: "Where does the word \"Freelance\" come from?",
      options: [
        "Medieval knights who sold their lance (services) to any lord",
        "A French term for independent artists",
        "Free-roaming lancers in the Napoleonic Wars",
        "Scottish mercenaries who fought without allegiance"
      ],
      correct: 0,
      explanation: "In the Middle Ages, a 'free lance' was a mercenary knight whose lance was not sworn to any particular lord. Sir Walter Scott popularized the term in 'Ivanhoe' (1820), and it eventually came to mean anyone who sells their skills independently."
    },
    {
      question: "Why is it called \"Tipping\" (leaving gratuity)?",
      options: [
        "An acronym for 'To Insure Promptitude'",
        "From 17th-century English coffeehouses where patrons dropped coins in a jar",
        "Named after Thomas Tipper, a generous patron",
        "From the Dutch word 'tippen' meaning to tap on the table"
      ],
      correct: 1,
      explanation: "In 17th-century English coffeehouses, jars labeled 'To Insure Promptitude' (T.I.P.) were placed on counters — though some historians debate this. What's certain is the practice of leaving extra money for service began in English coffeehouses and spread from there."
    },
    {
      question: "What's the origin of \"Goodbye\"?",
      options: [
        "A contraction of 'God be with ye'",
        "From the French 'au revoir' shortened for English speakers",
        "A Puritan phrase meaning 'good blessings'",
        "From the Old English 'god bye' meaning good journey"
      ],
      correct: 0,
      explanation: "\"Goodbye\" is a contraction of 'God be with ye,' which was a common parting blessing in medieval England. Over centuries, 'God' was gradually replaced with 'good' (influenced by phrases like 'good day'), evolving into the casual 'goodbye' we use today."
    },
    {
      question: "Why is a dollar sign written as \"$\"?",
      options: [
        "It stands for 'S' from the word 'dollar'",
        "An overlapping U and S for 'United States'",
        "Evolved from the Spanish peso abbreviation 'ps'",
        "Designed by Benjamin Franklin"
      ],
      correct: 2,
      explanation: "The dollar sign evolved from the Spanish peso abbreviation. Merchants writing 'ps' (for pesos) eventually merged the letters, with the 'S' written over the 'p' — the downstroke of the 'p' became the vertical line through the 'S,' creating the $ symbol."
    },
    {
      question: "Where does the phrase \"Raining Cats and Dogs\" come from?",
      options: [
        "Animals washed off thatched roofs during heavy rain",
        "A corruption of the Greek 'cata doxa' meaning contrary to belief",
        "Jonathan Swift used it satirically, and the true origin is debated",
        "From Norse mythology where cats controlled weather"
      ],
      correct: 2,
      explanation: "Jonathan Swift used the phrase in his 1738 'Polite Conversation,' and it appeared in earlier works too. The thatched-roof theory is charming but unsupported. Like many idioms, its exact origin remains debated among etymologists."
    },
    {
      question: "Why is a \"Honeymoon\" called a honeymoon?",
      options: [
        "The tradition of drinking mead (honey wine) for a full moon cycle after the wedding",
        "Named after a destination in the Honey Valley, France",
        "From a Norse word meaning 'sweet beginning'",
        "Victorian couples celebrated during honey harvest season"
      ],
      correct: 0,
      explanation: "The tradition traces back to ancient Babylon, where the bride's father would supply the groom with honey mead for a full lunar month after the wedding. This 'honey month' (or honey moon cycle) was believed to improve fertility and sweeten the new marriage."
    },
    {
      question: "What's the origin of the word \"Avocado\"?",
      options: [
        "Named after its discoverer, Spanish explorer Avocado",
        "From the Nahuatl (Aztec) word 'ahuacatl' meaning testicle",
        "From the Portuguese 'abacado' meaning pear-tree",
        "Named after the town of Avocato in Italy"
      ],
      correct: 1,
      explanation: "\"Avocado\" comes from the Nahuatl word 'ahuacatl,' which means 'testicle' — a reference to the fruit's shape and the way it hangs from the tree in pairs. Spanish colonizers adapted the word, eventually landing on 'avocado.'"
    },
    {
      question: "Where does the word \"Gymnasium\" come from?",
      options: [
        "From the Greek word 'gymnos' meaning naked",
        "Named after an ancient Greek hero, Gymnasion",
        "From the Latin 'gymna' meaning training ground",
        "From the Egyptian word for 'strength house'"
      ],
      correct: 0,
      explanation: "\"Gymnasium\" comes from the Greek 'gymnasion,' derived from 'gymnos' meaning 'naked.' Ancient Greeks exercised and competed entirely nude, believing clothes restricted movement. So a gymnasium was literally a place for naked exercise."
    },
    {
      question: "Why is it called a \"Nickname\"?",
      options: [
        "From 'Nick' meaning to cut short or abbreviate",
        "A corruption of 'an eke name' meaning 'an additional name'",
        "Named after Old Nick, the devil, as nicknames were considered rude",
        "From the Dutch 'niknaam' meaning joke name"
      ],
      correct: 1,
      explanation: "\"Nickname\" comes from the Middle English 'an eke name' (eke meaning 'also' or 'additional'). Through a process called misdivision, 'an ekename' became 'a nekename,' which eventually evolved into 'nickname.' The same process gave us 'an apron' from 'a napron.'"
    }
  ];

  // State
  let state = {
    currentQuestion: 0,
    score: 0,
    answered: false,
    gameQuestions: [],
    questionsPerGame: 10
  };

  // DOM elements
  let els = {};

  function init() {
    els = {
      game: document.getElementById('originsGame'),
      startScreen: document.getElementById('originStart'),
      questionScreen: document.getElementById('originQuestion'),
      resultsScreen: document.getElementById('originResults'),
      startBtn: document.getElementById('originStartBtn'),
      progressFill: document.getElementById('originProgressFill'),
      currentNum: document.getElementById('originCurrent'),
      totalNum: document.getElementById('originTotal'),
      scoreDisplay: document.getElementById('originScore'),
      questionText: document.getElementById('originQuestionText'),
      options: document.getElementById('originOptions'),
      feedback: document.getElementById('originFeedback'),
      feedbackIcon: document.getElementById('originFeedbackIcon'),
      feedbackText: document.getElementById('originFeedbackText'),
      nextBtn: document.getElementById('originNextBtn'),
      finalScore: document.getElementById('originFinalScore'),
      finalTotal: document.getElementById('originFinalTotal'),
      resultsTitle: document.getElementById('originResultsTitle'),
      resultsText: document.getElementById('originResultsText'),
      playAgain: document.getElementById('originPlayAgain')
    };

    if (!els.startBtn) return;

    els.startBtn.addEventListener('click', startGame);
    els.nextBtn.addEventListener('click', nextQuestion);
    els.playAgain.addEventListener('click', startGame);
  }

  function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function startGame() {
    state = {
      currentQuestion: 0,
      score: 0,
      answered: false,
      gameQuestions: shuffle(questions).slice(0, state.questionsPerGame),
      questionsPerGame: state.questionsPerGame
    };

    els.startScreen.style.display = 'none';
    els.resultsScreen.style.display = 'none';
    els.questionScreen.style.display = 'block';
    els.totalNum.textContent = state.gameQuestions.length;

    showQuestion();
  }

  function showQuestion() {
    const q = state.gameQuestions[state.currentQuestion];
    state.answered = false;

    // Update progress
    els.currentNum.textContent = state.currentQuestion + 1;
    els.scoreDisplay.textContent = state.score;
    els.progressFill.style.width =
      ((state.currentQuestion) / state.gameQuestions.length * 100) + '%';

    // Set question
    els.questionText.textContent = q.question;

    // Build options
    els.options.innerHTML = '';
    q.options.forEach(function (opt, i) {
      const btn = document.createElement('button');
      btn.className = 'origins__option';
      btn.textContent = opt;
      btn.addEventListener('click', function () { selectAnswer(i); });
      els.options.appendChild(btn);
    });

    // Hide feedback
    els.feedback.style.display = 'none';
  }

  function selectAnswer(index) {
    if (state.answered) return;
    state.answered = true;

    const q = state.gameQuestions[state.currentQuestion];
    const isCorrect = index === q.correct;
    const optionBtns = els.options.querySelectorAll('.origins__option');

    // Disable all buttons
    optionBtns.forEach(function (btn, i) {
      btn.classList.add('origins__option--disabled');
      if (i === q.correct) {
        btn.classList.add('origins__option--correct');
      }
      if (i === index && !isCorrect) {
        btn.classList.add('origins__option--incorrect');
      }
    });

    if (isCorrect) {
      state.score++;
      els.feedbackIcon.textContent = 'Correct!';
      els.feedbackIcon.style.color = 'var(--color-success)';
    } else {
      els.feedbackIcon.textContent = 'Not quite.';
      els.feedbackIcon.style.color = 'var(--color-error)';
    }

    els.feedbackText.textContent = q.explanation;
    els.feedback.style.display = 'block';
    els.scoreDisplay.textContent = state.score;

    // Update button text on last question
    if (state.currentQuestion === state.gameQuestions.length - 1) {
      els.nextBtn.textContent = 'See Results';
    } else {
      els.nextBtn.textContent = 'Next Question';
    }
  }

  function nextQuestion() {
    state.currentQuestion++;

    if (state.currentQuestion >= state.gameQuestions.length) {
      showResults();
      return;
    }

    showQuestion();
  }

  function showResults() {
    els.questionScreen.style.display = 'none';
    els.resultsScreen.style.display = 'block';

    els.finalScore.textContent = state.score;
    els.finalTotal.textContent = state.gameQuestions.length;

    const pct = state.score / state.gameQuestions.length;

    if (pct === 1) {
      els.resultsTitle.textContent = 'Flawless. Truly.';
      els.resultsText.textContent =
        "Every word has a story, and you know them all. You're either an etymologist or a time traveler. Either way, impressive.";
    } else if (pct >= 0.8) {
      els.resultsTitle.textContent = 'Origin Story: Expert';
      els.resultsText.textContent =
        "You've got a remarkable sense for the hidden histories of language. A few surprises slipped through, but your instincts are sharp.";
    } else if (pct >= 0.6) {
      els.resultsTitle.textContent = 'Solid Etymologist';
      els.resultsText.textContent =
        "You know more than most about where words come from. A few curve balls, but you held your own against centuries of linguistic evolution.";
    } else if (pct >= 0.4) {
      els.resultsTitle.textContent = 'Curious Mind';
      els.resultsText.textContent =
        "Language is full of surprises, and you've just uncovered a few of them. The best part? Now you know the stories behind the words.";
    } else {
      els.resultsTitle.textContent = 'Fresh Eyes';
      els.resultsText.textContent =
        "Every expert starts somewhere, and now you've got a dozen fascinating stories to tell at your next dinner party. Knowledge is never wasted.";
    }
  }

  // Public API
  return { init: init };
})();

document.addEventListener('DOMContentLoaded', function () {
  OriginsGame.init();
});
