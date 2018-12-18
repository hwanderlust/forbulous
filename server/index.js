const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const splashKey = process.env.SPLASH_KEY;
const PORT = 3000;


const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
}

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
// app.use(express.static('./public'));

app.get('/initial-load', cors(corsOptions), (req, res) => {

  const fetches = [`https://api.unsplash.com/photos/random?count=25`, `https://api.unsplash.com/photos/random?count=25`];
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${splashKey}`
    }
  }

  Promise.all(fetches.map(uri => fetch(uri, options).then(r => r.json()))).then(r => {
    const flattenedArray = r.reduce((a, b) => a.concat(b), []);
    res.json({
      photos: serialize(flattenedArray),
      numOfPages: 5
    })
  }).catch(err => res.sendStatus(400));

});

app.post('/search', cors(corsOptions), (req, res) => {
  console.log(req.body)
  const searchQuery = req.body.searchQuery;
  const pageNum = req.body.pageNum;

  const url = `https://api.unsplash.com/search/photos?page=${pageNum}&query=${searchQuery}`
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${splashKey}`
    }
  }

  fetch(url, options).then(r => r.json())
    .then(r => {

      const photos = serialize(r.results);

      if (photos.error) {
        res.json({
          error
        });
      }

      console.log(photos);
      res.json({
        photos,
        numOfPages: r.total_pages
      });
    });
});

app.listen(PORT, () => {
  console.log(`we are live on port 3000!`);
});

const serialize = (data) => {

  try {
    return data.map(el => {
      return {
        id: el.id,
        date: el.created_at,
        description: el.description || el.slug,
        urls: el.urls,
        links: el.links,
        likes: el.likes,
        user: {
          id: el.user.id,
          username: el.user.username || pic.user.twitter_username || pic.user.name,
          bio: el.user.bio
        }
      }
    })

  } catch (error) {
    return {
      error
    }
  }
}