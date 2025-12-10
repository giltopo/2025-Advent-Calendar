const cards = [{
    img: "started.JPEG",
    title: "Where It All Started",
    content: "The moment I saw you at camp, everything changed in the best way possible.",
    id: 1
}, {
    img: "1st_selfie.JPEG",
    title: "Our First Selfie",
    content: "Our very first selfie still makes me smile every time I see it on my camera roll. ",
    id: 2
}, {
    img: "laugh.JPEG",
    title: "Our First Inside Joke",
    content: "Chule",
    id: 3
}, {
    img: "datenigh.JPEG",
    title: "Best Date Nights",
    content: "With you every date night is special. I just Love having your company no matter where.",
    id: 4
}, {
    img: "fav.JPEG",
    title: "Favorite Pictures of You",
    content: "I have so many favorite pictures of you. I could never only pick one. Every picture of you is my favorite.",
    id: 5
}, {
    img: "favfit.JPEG",
    title: "Your Best Fit",
    content: "I love your style and all of the cute outfits you wear. Specially the sweater + jeans combo!",
    id: 6
}, {
    img: "roadtrip.JPEG",
    title: "Our Road Trips",
    content: "Our first year together was full of little moments that still feel special to me.",
    id: 7
}, {
    img: "song.JPEG",
    title: "Our Song",
    content: "Every time our song plays, it feels like a tiny reminder of how much I Love You. &darr;",
    id: 8
}, {
    img: "snack.JPEG",
    title: "Favorite Snack We Share",
    content: "Eating our favorite snack with you always turns a normal moment into a cute one.",
    id: 9
}, {
    img: "funniest.JPEG",
    title: "Funniest Moment Together",
    content: "That moment we couldn’t stop laughing still lives rent-free in my brain forever.",
    id: 10
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "A Moment I’ll Never Forget",
    //     content: "There’s this small memory with you that always shows up when I need a smile.",
    //     id: 11
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "The Thing You Say That I Love",
    //     content: "You say something sometimes that makes me instantly feel warm, close to you, and just makes me laugh.",
    //     id: 12
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Our Dream Trip",
    //     content: "I love imagining the trip we’ll take one day and all the fun we’ll have there.(Manifesting this)",
    //     id: 13
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Things That Remind Me of You",
    //     content: "Little things in my day randomly remind me of you and make everything nicer.",
    //     id: 14
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "What I Want for Christmas",
    //     content: "You! duh",
    //     id: 15
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Cutest Picture of Us",
    //     content: "There’s a photo of us that perfectly captures how happy we look together.",
    //     id: 16
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "My Favorite Habit You Have",
    //     content: "You have this tiny habit that always makes me pause and appreciate you more.",
    //     id: 17
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Places We’ve Been Together",
    //     content: "Out of everything this year, a simple moment with you became my favorite one.",
    //     id: 18
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Places I Want to Take You",
    //     content: "The one of the most important day of my life was when I met you. I didn't know it would take me, but I am so happy I found you. ",
    //     id: 19
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "The First Time You Made Me Laugh",
    //     content: "The one of the most important day of my life was when I met you. I didn't know it would take me, but I am so happy I found you. ",
    //     id: 20
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Our Most Chaotic Moment",
    //     content: "The one of the most important day of my life was when I met you. I didn't know it would take me, but I am so happy I found you. ",
    //     id: 21
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "Something I Learned Because of You",
    //     content: "The one of the most important day of my life was when I met you. I didn't know it would take me, but I am so happy I found you. ",
    //     id: 22
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "A Perfect Lazy Day With You",
    //     content: "My ideal lazy day is simply us relaxing, watching TV, crafts, talking, and existing near each other.",
    //     id: 23
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "The Next Thing I’m Excited to Do With You",
    //     content: "The one of the most important day of my life was when I met you. I didn't know it would take me, but I am so happy I found you. ",
    //     id: 24
    // }, {
    //     img: "gracey_zach.jpg",
    //     title: "My Favorite Memory From This Year",
    //     content: "The one of the most important day of my life was when I met you. I didn't know it would take me, but I am so happy I found you. ",
    //     id: 25
},]

function populateCards(id, list) {
    const cardsElement = document.getElementById(id)
    for (const card of list) {
        cardsElement.insertAdjacentHTML('beforeend', `<div class="card" style="background-image: url('assets/images/${card.img}')">
        <div class="card-content">
            <h2>${card.title}</h2>
            <p>${card.content}</p>
            <a href="https://www.youtube.com/watch?v=kPa7bsKwL-c" class="button" target="_blank">&hearts;</a>
        </div>
    </div>`);
    }
}

populateCards('cards', cards)