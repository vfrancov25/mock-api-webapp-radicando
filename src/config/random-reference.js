const randomReference = () => {
    const randomNumber = Math.floor(Math.random() * 900) + 100;
    const reference = `RADICANDO-WEBAPP-${randomNumber}`;

    return reference;
}

module.exports = randomReference;