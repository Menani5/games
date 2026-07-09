(() => {
  const WORD_CATEGORIES = {
    Food: ['Pizza', 'Burger', 'Sushi', 'Ice Cream', 'Pasta', 'Tacos', 'Pancakes', 'Sandwich', 'Popcorn', 'Donut', 'Coffee', 'Chocolate', 'Noodles', 'Curry', 'Salad', 'Cheesecake', 'Momo', 'Biryani', 'Waffles', 'Smoothie', 'Dumplings', 'Pretzel', 'Croissant', 'Ramen', 'Falafel', 'Lasagna', 'Burrito', 'Milkshake', 'Spring Rolls', 'Pho', 'Paella', 'Hot Dog', 'French Fries', 'Muffin', 'Brownie', 'Kebab', 'Samosa', 'Dim Sum', 'Bagel', 'Omelette'],
    Places: ['Beach', 'Airport', 'Hospital', 'School', 'Zoo', 'Museum', 'Library', 'Stadium', 'Casino', 'Cinema', 'Restaurant', 'Mountain', 'Temple', 'Waterfall', 'Amusement Park', 'Desert', 'Farm', 'Space Station', 'Shopping Mall', 'Village', 'Lighthouse', 'Campsite', 'Bridge', 'Harbor', 'Castle', 'Church', 'Park', 'Bank', 'Gym', 'Forest', 'Island', 'Volcano', 'Cave', 'Subway Station', 'Cruise Ship', 'Palace', 'Market', 'University', 'Prison', 'Graveyard'],
    Animals: ['Lion', 'Elephant', 'Dolphin', 'Eagle', 'Penguin', 'Kangaroo', 'Octopus', 'Giraffe', 'Tiger', 'Panda', 'Shark', 'Owl', 'Cheetah', 'Koala', 'Peacock', 'Crocodile', 'Butterfly', 'Camel', 'Parrot', 'Wolf', 'Flamingo', 'Rabbit', 'Horse', 'Snake', 'Bear', 'Zebra', 'Gorilla', 'Hippopotamus', 'Rhinoceros', 'Squirrel', 'Hedgehog', 'Bat', 'Frog', 'Turtle', 'Jellyfish', 'Seahorse', 'Ostrich', 'Chameleon', 'Raccoon', 'Hyena'],
    Occupations: ['Doctor', 'Teacher', 'Chef', 'Pilot', 'Firefighter', 'Police Officer', 'Artist', 'Farmer', 'Dentist', 'Lawyer', 'Photographer', 'Astronaut', 'Engineer', 'Musician', 'Journalist', 'Scientist', 'Waiter', 'Electrician', 'Athlete', 'Fashion Designer', 'Nurse', 'Plumber', 'Actor', 'Barber', 'Soldier', 'Veterinarian', 'Architect', 'Accountant', 'Pharmacist', 'Librarian', 'Mechanic', 'Carpenter', 'Tailor', 'Butcher', 'Baker', 'Translator', 'Surgeon', 'Coach', 'Judge', 'Priest'],
    'Movies & Shows': ['Titanic', 'Avengers', 'Friends', 'The Office', 'Star Wars', 'Frozen', 'Jurassic Park', 'Harry Potter', 'Money Heist', 'Stranger Things', 'Inception', 'Batman', 'Spider-Man', 'The Simpsons', 'Game of Thrones', 'Toy Story', 'The Lion King', 'Breaking Bad', 'Squid Game', 'Shrek', 'Inside Out', 'The Matrix', 'Interstellar', 'Peaky Blinders', 'Wednesday', 'Avatar', 'Finding Nemo', 'The Godfather', 'Sherlock', 'Narcos', 'The Crown', 'Black Mirror', 'Encanto', 'Moana', 'Deadpool', 'Joker', 'Ted Lasso', 'The Mandalorian', 'Rick and Morty', 'SpongeBob SquarePants'],
    Sports: ['Football', 'Basketball', 'Cricket', 'Tennis', 'Swimming', 'Boxing', 'Golf', 'Volleyball', 'Skateboarding', 'Cycling', 'Chess', 'Surfing', 'Badminton', 'Table Tennis', 'Rugby', 'Archery', 'Wrestling', 'Baseball', 'Marathon Running', 'Gymnastics', 'Bowling', 'Skiing', 'Diving', 'Fencing', 'Sailing', 'Horse Riding', 'Rowing', 'Weightlifting', 'Karate', 'Judo', 'Taekwondo', 'Snowboarding', 'Ice Skating', 'Handball', 'Water Polo', 'Motor Racing', 'Darts', 'Squash', 'Triathlon', 'Curling'],
    'Everyday Objects': ['Umbrella', 'Backpack', 'Sunglasses', 'Wallet', 'Mirror', 'Candle', 'Pillow', 'Toothbrush', 'Scissors', 'Calendar', 'Blanket', 'Keychain', 'Flashlight', 'Broom', 'Watch', 'Ladder', 'Suitcase', 'Notebook', 'Headphones', 'Umbrella Stand', 'Guitar', 'Bicycle', 'Lamp', 'Basket', 'Bookshelf', 'Clock', 'Vase', 'Rug', 'Curtain', 'Hairbrush', 'Razor', 'Perfume Bottle', 'Wheelbarrow', 'Toolbox', 'Hammer', 'Screwdriver', 'Padlock', 'Thermometer', 'Stapler', 'Ruler'],
    Technology: ['Smartphone', 'Laptop', 'Robot', 'Drone', 'Camera', 'Printer', 'Router', 'Smartwatch', 'Television', 'Video Game Console', 'Microphone', 'Speaker', 'Tablet', 'Keyboard', 'Webcam', 'Charger', '3D Printer', 'Virtual Reality Headset', 'Satellite', 'Calculator', 'Smart Bulb', 'GPS Device', 'Projector', 'Fitness Tracker', 'E-Reader', 'Hard Drive', 'USB Drive', 'Wireless Earbuds', 'Smart Thermostat', 'Solar Panel', 'Barcode Scanner', 'ATM Machine', 'Security Camera', 'Electric Car', 'Smart Doorbell', 'Gaming Mouse', 'Graphics Card', 'Motherboard', 'Power Bank', 'Self-Driving Car'],
    'Superheroes & Villains': ['Superman', 'Iron Man', 'Wonder Woman', 'Thor', 'Hulk', 'Black Widow', 'Captain America', 'Wolverine', 'Doctor Strange', 'Thanos', 'Loki', 'Catwoman', 'Green Lantern', 'Aquaman', 'Ant-Man', 'Black Panther', 'Scarlet Witch', 'Flash', 'Magneto', 'Venom'],
    'Countries & Cities': ['India', 'USA', 'Japan', 'France', 'Brazil', 'Egypt', 'Canada', 'Australia', 'Germany', 'Italy', 'China', 'Mexico', 'Paris', 'London', 'Tokyo', 'New York', 'Dubai', 'Rome', 'Sydney', 'Bangkok'],
  };

  const MIN_PLAYERS = 3;
  const MAX_PLAYERS = 12;
  const MIN_SPIES = 1;

  const el = (id) => document.getElementById(id);

  const screens = {
    setup: el('setupScreen'),
    reveal: el('revealScreen'),
    discussion: el('discussionScreen'),
    result: el('resultScreen'),
  };

  const playerCountInput = el('playerCount');
  const spyCountInput = el('spyCount');
  const categorySelect = el('categorySelect');
  const spyAwarenessToggle = el('spyAwarenessToggle');
  const spyAwarenessNote = el('spyAwarenessNote');
  const namesGrid = el('namesGrid');
  const setupError = el('setupError');
  const startBtn = el('startBtn');

  const SPY_AWARENESS_NOTES = {
    knows: "The spy is told they're the spy and must bluff without knowing the real word.",
    blind: "The spy is NOT told they're the spy — they get a different word from the same category and think it's the real one.",
  };

  const revealProgress = el('revealProgress');
  const passPlayerName = el('passPlayerName');
  const flipCard = el('flipCard');
  const flipCardBack = el('flipCardBack');
  const revealBtn = el('revealBtn');
  const hideContinueBtn = el('hideContinueBtn');

  const timerDisplay = el('timerDisplay');
  const timerToggle = el('timerToggle');
  const timerMinus = el('timerMinus');
  const timerPlus = el('timerPlus');
  const revealSpyBtn = el('revealSpyBtn');

  const spyRevealName = el('spyRevealName');
  const wordRevealValue = el('wordRevealValue');
  const decoyWordCard = el('decoyWordCard');
  const decoyWordValue = el('decoyWordValue');
  const playAgainSpyBtn = el('playAgainSpyBtn');
  const newSetupBtn = el('newSetupBtn');

  let state = {
    players: [],
    spyCount: 1,
    category: 'All Categories',
    spyAwareness: 'knows',
    wordCategory: '',
    word: '',
    decoyWord: '',
    spyIndexes: new Set(),
    revealIndex: 0,
  };

  let timerSeconds = 180;
  let timerRemaining = timerSeconds;
  let timerInterval = null;
  let timerRunning = false;

  function init() {
    populateCategories();
    generateNameInputs(parseInt(playerCountInput.value, 10));
    bindEvents();
    clampSpyCount();
  }

  function populateCategories() {
    categorySelect.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'All Categories';
    allOpt.textContent = 'All Categories (mixed)';
    categorySelect.appendChild(allOpt);

    Object.keys(WORD_CATEGORIES).forEach((cat) => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      categorySelect.appendChild(opt);
    });
  }

  function bindEvents() {
    document.querySelectorAll('.stepper-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const step = parseInt(btn.dataset.step, 10);
        const input = el(targetId);
        let value = parseInt(input.value, 10) || 0;
        value += step;

        if (targetId === 'playerCount') {
          value = clamp(value, MIN_PLAYERS, MAX_PLAYERS);
          input.value = value;
          generateNameInputs(value);
          clampSpyCount();
        } else if (targetId === 'spyCount') {
          value = clamp(value, MIN_SPIES, maxSpiesFor(parseInt(playerCountInput.value, 10)));
          input.value = value;
        }
      });
    });

    playerCountInput.addEventListener('change', () => {
      let value = clamp(parseInt(playerCountInput.value, 10) || MIN_PLAYERS, MIN_PLAYERS, MAX_PLAYERS);
      playerCountInput.value = value;
      generateNameInputs(value);
      clampSpyCount();
    });

    spyCountInput.addEventListener('change', () => {
      let value = clamp(
        parseInt(spyCountInput.value, 10) || MIN_SPIES,
        MIN_SPIES,
        maxSpiesFor(parseInt(playerCountInput.value, 10))
      );
      spyCountInput.value = value;
    });

    spyAwarenessToggle.querySelectorAll('.toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        spyAwarenessToggle.querySelectorAll('.toggle-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const value = btn.dataset.value;
        spyAwarenessNote.textContent = SPY_AWARENESS_NOTES[value] || '';
      });
    });

    startBtn.addEventListener('click', startGame);
    revealBtn.addEventListener('click', revealCurrentCard);
    hideContinueBtn.addEventListener('click', hideAndAdvance);

    timerToggle.addEventListener('click', toggleTimer);
    timerMinus.addEventListener('click', () => adjustTimer(-60));
    timerPlus.addEventListener('click', () => adjustTimer(60));
    revealSpyBtn.addEventListener('click', revealSpy);

    playAgainSpyBtn.addEventListener('click', playAgainSamePlayers);
    newSetupBtn.addEventListener('click', backToSetup);
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function maxSpiesFor(playerCount) {
    return Math.max(MIN_SPIES, Math.floor(playerCount / 2) - 1);
  }

  function clampSpyCount() {
    const playerCount = parseInt(playerCountInput.value, 10);
    const max = maxSpiesFor(playerCount);
    const current = parseInt(spyCountInput.value, 10) || MIN_SPIES;
    spyCountInput.max = max;
    if (current > max) spyCountInput.value = max;
  }

  function generateNameInputs(count) {
    const existing = Array.from(namesGrid.querySelectorAll('input')).map((i) => i.value);
    namesGrid.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.maxLength = 16;
      input.placeholder = `Player ${i + 1}`;
      input.value = existing[i] || '';
      input.dataset.index = i;
      namesGrid.appendChild(input);
    }
  }

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  function startGame() {
    const playerCount = clamp(parseInt(playerCountInput.value, 10) || MIN_PLAYERS, MIN_PLAYERS, MAX_PLAYERS);
    const spyCount = clamp(parseInt(spyCountInput.value, 10) || MIN_SPIES, MIN_SPIES, maxSpiesFor(playerCount));

    if (spyCount >= playerCount - 1) {
      setupError.textContent = 'There must be at least 2 non-spy players.';
      return;
    }
    setupError.textContent = '';

    const nameInputs = Array.from(namesGrid.querySelectorAll('input'));
    const players = nameInputs.map((input, i) => ({
      name: input.value.trim() || `Player ${i + 1}`,
    }));

    const activeAwarenessBtn = spyAwarenessToggle.querySelector('.toggle-btn.active');

    state.players = players;
    state.spyCount = spyCount;
    state.category = categorySelect.value;
    state.spyAwareness = activeAwarenessBtn ? activeAwarenessBtn.dataset.value : 'knows';

    assignRoles();
    startRevealFlow();
  }

  function playAgainSamePlayers() {
    assignRoles();
    startRevealFlow();
  }

  function backToSetup() {
    showScreen('setup');
  }

  function pickWordAndCategory() {
    let category = state.category;
    if (category === 'All Categories') {
      const keys = Object.keys(WORD_CATEGORIES);
      category = keys[Math.floor(Math.random() * keys.length)];
    }
    const pool = WORD_CATEGORIES[category] || Object.values(WORD_CATEGORIES).flat();
    const word = pool[Math.floor(Math.random() * pool.length)];
    return { category, word };
  }

  function pickDecoyWord(category, excludeWord) {
    const pool = (WORD_CATEGORIES[category] || []).filter((w) => w !== excludeWord);
    if (pool.length === 0) {
      const fallback = Object.values(WORD_CATEGORIES).flat().filter((w) => w !== excludeWord);
      return fallback[Math.floor(Math.random() * fallback.length)];
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function assignRoles() {
    const { category, word } = pickWordAndCategory();
    state.wordCategory = category;
    state.word = word;
    state.decoyWord = state.spyAwareness === 'blind' ? pickDecoyWord(category, word) : '';

    const indexes = state.players.map((_, i) => i);
    shuffle(indexes);
    state.spyIndexes = new Set(indexes.slice(0, state.spyCount));
    state.revealIndex = 0;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startRevealFlow() {
    flipCard.classList.remove('revealed');
    hideContinueBtn.style.display = 'none';
    showScreen('reveal');
    setupRevealForCurrentPlayer();
  }

  function setupRevealForCurrentPlayer() {
    const i = state.revealIndex;
    const player = state.players[i];

    revealProgress.textContent = `Player ${i + 1} of ${state.players.length}`;
    passPlayerName.textContent = player.name;

    flipCard.classList.remove('revealed');
    hideContinueBtn.style.display = 'none';

    const isSpy = state.spyIndexes.has(i);
    const isBlindSpy = isSpy && state.spyAwareness === 'blind';
    flipCardBack.classList.toggle('is-spy', isSpy && !isBlindSpy);

    if (isSpy && !isBlindSpy) {
      flipCardBack.innerHTML = `
        <div class="role-icon">🕵️</div>
        <div class="role-spy-text">You are the SPY!</div>
        <div class="role-hint">You don't know the secret word. Listen carefully and try to blend in without getting caught.</div>
      `;
    } else {
      const wordToShow = isBlindSpy ? state.decoyWord : state.word;
      const categoryLine = `<div class="role-category">${escapeHtml(state.wordCategory)}</div>`;
      flipCardBack.innerHTML = `
        <div class="role-icon">🤫</div>
        <div class="role-title">Secret Word</div>
        <div class="role-word">${escapeHtml(wordToShow)}</div>
        ${categoryLine}
        <div class="role-hint">Don't say this word out loud. Describe it carefully!</div>
      `;
    }
  }

  function revealCurrentCard() {
    flipCard.classList.add('revealed');
    hideContinueBtn.style.display = 'inline-block';
  }

  function hideAndAdvance() {
    flipCard.classList.remove('revealed');
    hideContinueBtn.style.display = 'none';

    state.revealIndex++;
    if (state.revealIndex >= state.players.length) {
      setTimeout(startDiscussion, 350);
    } else {
      setTimeout(setupRevealForCurrentPlayer, 350);
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function startDiscussion() {
    resetTimer();
    showScreen('discussion');
  }

  function resetTimer() {
    stopTimer();
    timerRemaining = timerSeconds;
    updateTimerDisplay();
    timerToggle.textContent = 'Start Timer';
  }

  function adjustTimer(deltaSeconds) {
    if (timerRunning) return;
    timerSeconds = clamp(timerSeconds + deltaSeconds, 30, 900);
    timerRemaining = timerSeconds;
    updateTimerDisplay();
  }

  function toggleTimer() {
    if (timerRunning) {
      stopTimer();
      timerToggle.textContent = 'Resume Timer';
    } else {
      startTimer();
      timerToggle.textContent = 'Pause Timer';
    }
  }

  function startTimer() {
    if (timerRemaining <= 0) timerRemaining = timerSeconds;
    timerRunning = true;
    timerDisplay.classList.remove('time-up');
    timerInterval = setInterval(() => {
      timerRemaining--;
      updateTimerDisplay();
      if (timerRemaining <= 0) {
        stopTimer();
        timerDisplay.classList.add('time-up');
        timerToggle.textContent = 'Start Timer';
      }
    }, 1000);
  }

  function stopTimer() {
    timerRunning = false;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const m = Math.max(0, Math.floor(timerRemaining / 60));
    const s = Math.max(0, timerRemaining % 60);
    timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function revealSpy() {
    stopTimer();

    const spyNames = Array.from(state.spyIndexes)
      .map((i) => state.players[i].name)
      .join(', ');

    spyRevealName.textContent = spyNames;
    wordRevealValue.textContent = state.word;
    el('resultIcon').textContent = state.spyIndexes.size > 1 ? '🕵️🕵️' : '🕵️';

    if (state.spyAwareness === 'blind' && state.decoyWord) {
      decoyWordValue.textContent = state.decoyWord;
      decoyWordCard.style.display = 'flex';
    } else {
      decoyWordCard.style.display = 'none';
    }

    showScreen('result');
  }

  init();
})();
