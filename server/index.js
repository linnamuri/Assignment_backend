const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')

const { getAllEncouragementItems } = require('./controller')
const { createNewEncouragementItem } = require('./controller')
const { deleteEncouragementItem } = require('./controller')
const { editEncouragementItem } = require('./controller')

const { getAllHelpItems } = require('./controller')
const { createNewHelpItem } = require('./controller')
const { deleteHelpItem } = require('./controller')
const { editHelpItem } = require('./controller')

const { getAllInspirationItems } = require('./controller')
const { createNewInspirationItem } = require('./controller')
const { deleteInspirationItem } = require('./controller')
const { editInspirationItem } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get('/api/encourage',getAllEncouragementItems)
app.post('/api/encourage',createNewEncouragementItem)
app.delete('/api/encourage/:id',deleteEncouragementItem)
app.put('/api/encourage/:id',editEncouragementItem)

app.get('/api/help',getAllHelpItems)
app.post('/api/help',createNewHelpItem)
app.delete('/api/help/:id',deleteHelpItem)
app.put('/api/help/:id',editHelpItem)

 app.get('/api/inspire',getAllInspirationItems)
 app.post('/api/inspire',createNewInspirationItem)
 app.delete('/api/inspire/:id',deleteInspirationItem)
 app.put('/api/inspire/:id',editInspirationItem)


app.listen(4000, () => console.log("Server running on 4000"));
