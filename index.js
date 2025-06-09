// Writ// Définir la variable currentUser avec un nom (modifiable)
const currentUser = 'Grace Hopper';

// 1. Message de bienvenue standard
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 2. Message de bienvenue enthousiaste (en majuscules)
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 3. Message court avec juste l'initiale du nom
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

