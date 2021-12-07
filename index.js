const express = require('express');
const app = express();

const port = 5000

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})

app.get('/', (req, res) => {
  res.send('Authors API')
})

// app.get('/authors/1', (req, res) => {
//   res.send('Lawrence Nowell, UK')
// })
// app.get('/authors/2', (req, res) => {
//   res.send('William Shakespeare, UK')
// })
// app.get('/authors/3', (req, res) => {
//   res.send('Charles Dickens, US')
// })
// app.get('/authors/4', (req, res) => {
//   res.send('Oscar Wilde, UK')
// })

const authors = [
  {
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
]

app.get('/authors/:id', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  if (author) {
    res.send(`${author.name}, ${author.nationality}`)
  } else {
    res.status(404).send("Not found")
  }

  // let name = ""
  // let country = ""

  // switch (id) {
  //   case "1":
  //     name = "Lawrence Nowell"
  //     country = "UK"
  //     break
  //   case "2": 
  //     name = "William Shakespeare"
  //     country = "UK"
  //     break
  //   case "3": 
  //     name = "Charles Dickens"
  //     country = "US"
  //     break
  //   case "4": 
  //     name = "Oscar Wilde"
  //     country = "UK"
  //     break

  //   default: 
  //     name = "Not found"
  //     country = "None"
  //     break
  // }

  // res.json({
    // author: name,
    // nationality: country
  // });
});

app.get('/authors/:id/books', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  if (author) {
    res.send(`${author.books.join(", ")}`)
  } else {
    res.status(404).send("Not found")
  }
  
  // let bookTitle = ""

  // switch (id) {
  //   case "1":
  //     bookTitle = "Beowulf"
  //     break
  //   case "2": 
  //     bookTitle = "Hamlet, Othello, Romeo and Juliet, MacBeth"
  //     break
  //   case "3": 
  //     bookTitle = "Oliver Twist, A Christmas Carol"
  //     break
  //   case "4": 
  //     bookTitle = "The Picture of Dorian Gray, The Importance of Being Earnest"
  //     break

  //   default: 
  //     bookTitle = "Not found"
  //     break
  // }

  // res.json({
  //   books : bookTitle
  // });
});