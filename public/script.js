
var verses = ["ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. matthew 7:7",
            "therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand firm. ephesians 6:13",
            "let not your hearts be troubled. believe in God; believe also in me. john 14:1",
            "and if God cares so wonderfully for flowers that are here today and thrown into the fire tomorrow, he will certainly care for you. why do you have so little faith? luke 12:27-28"]


// load a new verse every time page is newly loaded
document.getElementById("verse").innerHTML = verses[Math.floor(Math.random() * verses.length) + 1];

