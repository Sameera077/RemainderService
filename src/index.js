const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

const { sendBasicEmail } = require('./services/email-service');

const ticketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');

const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', ticketController.create)

    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'notification.sameera@gmail.com',
        //     'This is a texting email',
        //     'Hey, How are you?, I hope you like the support'
        // )
        jobs();
    }) 
}

setUpAndStartServer();