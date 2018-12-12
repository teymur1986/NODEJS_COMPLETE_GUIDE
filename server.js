const express =  require('express');
const bodyParser =  require('body-parser');
const app  = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path  = require('path');

app.use(bodyParser.urlencoded());
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
	res
	.status(404)
	.sendFile(`${path.join(__dirname, 'views', '404.html')}`);
});

app.listen(3001, () => {
	console.log('server is up and running');
});