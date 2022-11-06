import express from "express";
import axios from "axios";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    {user: "gatineo", avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"},
    {user: "RickSanchez", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPWDSWSiu_1OdqEo7ucaMKWZNFVyIVnPOj_D0uyp8&s"},
    {user: "Naruto", avatar: "https://f.i.uol.com.br/fotografia/2021/02/18/1613671083602eaaab101f1_1613671083_3x2_md.jpg"},
    {user: "Doguineo", avatar: "https://static1.patasdacasa.com.br/articles/1/22/71/@/16753-xx-articles_media_slider_mobile-1.jpg"},
    {user: "BobEsponja", avatar: "https://static.wikia.nocookie.net/nickelodeon6666/images/1/18/BobEsponja.png/revision/latest/scale-to-width-down/470?cb=20160421162154&path-prefix=pt-br"},
    {user: "Leesin", avatar: "https://lolwildriftbuild.com/wp-content/uploads/2020/10/LeeSin_Portrait.jpg"},
    {user: "PatrickEstrela", avatar: "https://cf.shopee.com.br/file/67718e185e7a9f9a51fd3d71c30b5b28"},
    {user: "Joe", avatar: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/quiz-question-image/png/3c58aea0a0eee61a0cacbbba283efe4d.png"},
    {user: "DeanWinchester", avatar: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b0/DeanWinchester.png/235px-DeanWinchester.png"},
    {user: "Rammus", avatar: "https://i.pinimg.com/originals/f1/24/da/f124daf8160663d6693da6bd617108d7.jpg"}
]

const tweets = [
    {user: "gatineo", tweet: "Miaaw" },
    {user: "RickSanchez", tweet: "Wubba Lubba Dub Dub"},
    {user: "Naruto", tweet: "Rasengan >> Chidori"},
    {user: "Doguineo", tweet: "Convocando todos caramelos amanha para correr atras dos motoqueiros"},
    {user: "BobEsponja", tweet: "A pizza do siri cascudo é a pizza pra você e eu"},
    {user: "Leesin", tweet: "O fracasso não me impediu antes, e não vai me impedir agora"},
    {user: "PatrickEstrela", tweet: "Os pensamentos dentro da minha mente são um enigma…"}, 
    {user: "Joe", tweet: "How are you doing?"},
    {user: "DeanWinchester", tweet: "I'm Batman"},
    {user: "Rammus", tweet: "Ok"}
]

app.post("/sing-up", (req, res) => {
    //console.log(req.body);
    const newUser = req.body;

    users.push(newUser);
    console.log(users);
    res.send("ok");
})

app.get("/tweets", (req, res) => {
    res.send("Tweets atualizados");
})

app.listen(5000, () => console.log("Server running in port 5000"));