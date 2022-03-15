// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(
  require('connect-livereload')({
    port: 35729,
  })
)

app.use(express.static('public'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// our first Route:
app.get('/about', (request, response, next) => {
	let data = {
		page_title: "Facts about Michael Scott",
		intro: 'Michael is serving as the Regional Manager of the Scranton branch of a paper merchant, known as Dunder Mifflin Inc. Here are some facts about him:',
		facts: [
			'Never worked a day',
			'Owns a condo',
			'Loves to say "PAM"'
		]
  };

	response.render('page', data)
});

app.get('/work', (request, response, next) => {
	let data = {
		page_title: "Some remarkable work",
		intro: 'Michael is a prolific boss, let\'s review some of his production:',
		facts: [
			'Named best boss of the year',
			'Kidnaped the pizza delivery boy',
			'Drove into a lake while following its GPS'
		]
  };

	response.render('page', data)
});

app.get('/photos', (request, response, next) => {
	let data = {
		page_title: "Pictures of Michael",
		img_url: [
			{url: '/medias/00.gif', alt: 'mick'},
			{url: '/medias/01.gif', alt: 'michael'},
			{url: '/medias/02.gif', alt: 'mr scott'},
		]
  };
	response.render('photo-gallery', data)
});

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));

