const messages = [
    "Víctor",
    "Javier",
    "Ignacio",
    "Esteban",
    "Carlos",
    "Lisa"
];

const random = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { random };