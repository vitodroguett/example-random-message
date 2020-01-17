const messages = [
    "Víctor",
    "María José",
    "Carolina",
    "Roberto",
    "Jennifer",
    "Claudia",
    "Carlos",
    "Lisa"
];

const random = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { random };