import express from "express";
import axios from "axios";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    { username: "gatineo", avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" },
    { username: "RickSanchez", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPWDSWSiu_1OdqEo7ucaMKWZNFVyIVnPOj_D0uyp8&s" },
    { username: "Naruto", avatar: "https://f.i.uol.com.br/fotografia/2021/02/18/1613671083602eaaab101f1_1613671083_3x2_md.jpg" },
    { username: "Doguineo", avatar: "https://static1.patasdacasa.com.br/articles/1/22/71/@/16753-xx-articles_media_slider_mobile-1.jpg" },
    { username: "BobEsponja", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tb8sTB9orxfk_rVAyYZZYVjJ3JkZRjq5N5jEdv6nhimu_lg5CI00V3rKVuq3lp6ZP-A&usqp=CAU" },
    { username: "Leesin", avatar: "https://lolwildriftbuild.com/wp-content/uploads/2020/10/LeeSin_Portrait.jpg" },
    { username: "PatrickEstrela", avatar: "https://cf.shopee.com.br/file/67718e185e7a9f9a51fd3d71c30b5b28" },
    { username: "Joe", avatar: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/quiz-question-image/png/3c58aea0a0eee61a0cacbbba283efe4d.png" },
    { username: "DeanWinchester", avatar: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b0/DeanWinchester.png/235px-DeanWinchester.png" },
    { username: "Rammus", avatar: "https://i.pinimg.com/originals/f1/24/da/f124daf8160663d6693da6bd617108d7.jpg" }
]

const tweets = [
    { username: "gatineo", tweet: "Miaaw" },
    { username: "RickSanchez", tweet: "Wubba Lubba Dub Dub" },
    { username: "Naruto", tweet: "Rasengan >> Chidori" },
    { username: "Doguineo", tweet: "Convocando todos caramelos amanha para correr atras dos motoqueiros" },
    { username: "BobEsponja", tweet: "A pizza do siri cascudo é a pizza pra você e eu" },
    { username: "Leesin", tweet: "O fracasso não me impediu antes, e não vai me impedir agora" },
    { username: "PatrickEstrela", tweet: "Os pensamentos dentro da minha mente são um enigma…" },
    { username: "Joe", tweet: "How are you doing?" },
    { username: "DeanWinchester", tweet: "I'm Batman" },
    { username: "Rammus", tweet: "Ok" }
]

app.post("/sign-up", (req, res) => {
    const newUser = req.body;

    users.push(newUser);
    //console.log(users);
    res.send("ok");
})

app.get("/tweets", (req, res) => {
    const lastTweets = [];

    for (let i = tweets.length - 1; i >= tweets.length - 10; i--) {

    const indexAvatar = users.findIndex( u => u.username === tweets[i].username);
    console.log(tweets[i].username);

     const addtweets = {
            username: tweets[i].username,
            avatar: users[indexAvatar].avatar,
            tweet: tweets[i].tweet
        }

        lastTweets.push(addtweets);
    }

    //console.log(lastTweets)

    res.send(lastTweets);
})

app.post("/tweets", (req, res) => {

    const newtweet = req.body;

    tweets.push(newtweet);
    console.log(newtweet);
    res.send("ok");
})


app.listen(5000, () => console.log("Server running in port 5000"));