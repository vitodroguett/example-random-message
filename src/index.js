const messages = [
    "Víctor",
    "María José",
    "Carolina",
    "Camila",
    "Carlos",
    "Lisa"
];

const random = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { random };