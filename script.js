window.addEventListener("load", () => {
    const popUp = document.getElementById("popUp");
    const closeBtn = document.getElementById("closePopUp");

    popUp.style.display = "flex";

    closeBtn.addEventListener("click", () => {
        popUp.style.display = "none";
    });
});
const DEFAULT_SONG = "https://www.youtube.com/watch?v=kPa7bsKwL-c";

const cards = [{
    img: "started.JPEG",
    title: "Where It All Started",
    content: "The moment I saw you at camp, everything changed in the best way possible. I knew I was going to make you mine.",
    id: 1,
    url: DEFAULT_SONG
}, {
    img: "1st_selfie.JPEG",
    title: "Our First Selfie",
    content: "Our very first selfie still makes me smile every time I see it on my camera roll. ",
    id: 2,
    url: DEFAULT_SONG
}, {
    img: "laugh.JPEG",
    title: "Our First Inside Joke",
    content: "Chule",
    id: 3,
    url: DEFAULT_SONG
}, {
    img: "datenigh.JPEG",
    title: "Best Date Nights",
    content: "With you every date night is special. I just Love having your company no matter where.",
    id: 4,
    url: DEFAULT_SONG
}, {
    img: "fav.JPEG",
    title: "Favorite Pictures of You",
    content: "I have so many favorite pictures of you. I could never only pick one. Every picture of you is my favorite.",
    id: 5,
    url: DEFAULT_SONG
}, {
    img: "favfit.JPEG",
    title: "Your Best Fit",
    content: "I love your style and all of the cute outfits you wear. Specially the sweater + jeans combo!",
    id: 6,
    url: DEFAULT_SONG
}, {
    img: "roadtrip.JPEG",
    title: "Our Road Trips",
    content: "I love our road trips together. Any long drive with you feels like minutes. And we know we are going to be listening to Hamilton.",
    id: 7,
    url: DEFAULT_SONG
}, {
    img: "song.JPEG",
    title: "Our Song",
    content: "Every time our song plays, it feels like a tiny reminder of how much I Love You. So Much So Much So Much! &darr;",
    id: 8,
    url: DEFAULT_SONG
}, {
    img: "snack.JPEG",
    title: "Favorite Drink We Share",
    content: "Drinking our favorite drink with you always turns a normal moment into a cute one.",
    id: 9,
    url: DEFAULT_SONG
}, {
    img: "funniest.JPEG",
    title: "Funniest Moment Together",
    content: "That moment we couldn’t stop laughing still lives rent-free in my brain forever.",
    id: 10,
    url: DEFAULT_SONG
}, {
    img: "moment.JPEG",
    title: "A Moment I’ll Never Forget",
    content: "When we first kissed. I felt the happiest man alive. And you keep making me the happiest.",
    id: 11,
    url: DEFAULT_SONG
}, {
    img: "coffee.JPEG",
    title: "The Thing You Say That I Love",
    content: "Coffee and Eu Te Amo. It makes me instantly feel warm, close to you, and just makes me laugh.",
    id: 12,
    url: DEFAULT_SONG
}, {
    img: "dreamtrip.jpg",
    title: "Our Dream Trip",
    content: "I love imagining the trip we’ll take one day and all the fun we’ll have there.(Manifesting this)",
    id: 13,
    url: DEFAULT_SONG
}, {
    img: "deer.jpg",
    title: "Things That Remind Me of You",
    content: "Little things in my day randomly remind me of you and make everything nicer.",
    id: 14,
    url: DEFAULT_SONG
}, {
    img: "want_4_xmas.JPEG",
    title: "What I Want for Christmas",
    content: "You! duh &darr; wink ",
    id: 15,
    url: "https://www.youtube.com/watch?v=aAkMkVFwAoo"
}, {
    img: "cutest.JPEG",
    title: "Cutest Picture of Us",
    content: "There’s a photo of us that perfectly captures how happy we look together. It also shows how beautiful your eyes are.",
    id: 16,
    url: "https://www.youtube.com/watch?v=Or-M9E0C27Q"
}, {
    img: "habit.JPEG",
    title: "My Favorite Habit You Have",
    content: "You have this tiny habit that always makes me pause and appreciate you more.",
    id: 17,
    url: "https://www.youtube.com/watch?v=-BjZmE2gtdo"
}, {
    img: "ordinary.JPEG",
    title: "The Way You Make Ordinary Days Special",
    content: "Even the days where we just see each other and be with other watching TV, yet so special since I am with you!",
    id: 18,
    url: "https://www.youtube.com/watch?v=m-v-LGOfaKo"
}, {
    img: "future.jpg",
    title: "Our Future, As I See It",
    content: "I see my future in your eyes. And I can't wait to live with and Love you for the rest of my life!",
    id: 19,
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    color: "#ff0000ff"
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "The First Time You Made Me Laugh",
    //     content: "",
    //     id: 20
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Our Most Chaotic Moment",
    //     content: "",
    //     id: 21
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Something I Learned Because of You",
    //     content: "",
    //     id: 22
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "A Perfect Lazy Day With You",
    //     content: "My ideal lazy day is simply us relaxing, watching TV, crafts, talking, and existing near each other.",
    //     id: 23
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "The Next Thing I’m Excited to Do With You",
    //     content: "",
    //     id: 24
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "My Favorite Memory From This Year",
    //     content: "",
    //     id: 25
},]

const loveNotes = [
    "I Love the way You smile when you think no one’s watching.",
    "You make everything feel lighter just by being there.",
    "I’m so proud to be yours.",
    "You’re my favorite part of every day.",
    "I still get butterflies thinking about You.",
    "I miss you more than I ever say out loud.",
    "Loving You is the easiest thing I’ve ever done.",
    "You make even the quiet moments perfect.",
    "I choose You. Every time.",
    "You feel like home to me.",
    "You make life so much easier."
]

function populateCards(id, list) {
    const cardsElement = document.getElementById(id)
    for (const card of list) {
        cardsElement.insertAdjacentHTML('beforeend', `<div class="card" style="background-image: url('assets/images/${card.img}')">
        <div class="card-content">
            <h2>${card.title}</h2>
            <p style="color: ${card.color}">${card.content}</p>
            <a href="${card.url}" class="button" target="_blank">&hearts;</a>
        </div>
    </div>`);
    }
}
function createMissMeFeature(containerId, messages) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `<button class="miss-button">Click when you miss me &#128149;</button>
    <p class="love-message"></p>`;

    const button = container.querySelector(".miss-button");
    const messageEl = container.querySelector(".love-message");

    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageEl.textContent = messages[randomIndex];

        messageEl.classList.remove("show");
        void messageEl.offsetWidth;
        messageEl.classList.add("show");
    });
}

populateCards('cards', cards)
createMissMeFeature('missBtn', loveNotes)
