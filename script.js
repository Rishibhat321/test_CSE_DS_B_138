document.getElementById("get-joke").addEventListener("click", async () => {
    const jokeText = document.getElementById("joke-text");
    jokeText.innerText = "Loading..."; // Display a loading message

    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();

        // Check if the joke is a single-line or two-part joke
        const joke = data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
        
        // Display the joke
        jokeText.innerText = joke;
    } catch (error) {
        jokeText.innerText = "Failed to fetch a joke!";
        console.error("Error fetching joke:", error);
    }
});

