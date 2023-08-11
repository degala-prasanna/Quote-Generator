function quotegenerator(){
    const quotes =[
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    },
    { 
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    },
    { 
        quote:"I am so clever that sometimes I don't understand a single word of what I am saying.",
        author:"Oscar Wilde"
    },
    { 
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
    },
	{ 
        quote:"The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
        author:"Albert Einstein"
    },
	{ 
        quote:"It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author:"J.K. Rowling, Harry Potter and the Chamber of Secrets"
    },
	{ 
        quote:"All men who have turned out worth anything have had the chief hand in their own education.",
        author:"Walter Scott"
    },
	{ 
        quote:"Trust yourself. You know more than you think you do.",
        author:"Benjamin Spock"
    },
	{ 
        quote:"No one can make you feel inferior without your consent.",
        author:"Eleanor Roosevelt, This is My Story"
    },
	{ 
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author:"Ralph Waldo Emerson"
    } 
    ];
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML=quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML= "~ " + quotes[arrayIndex].author;
}
window.onload = function (){
    quotegenerator();
    document.querySelector("#btn").addEventListener("click",quotegenerator);
}
