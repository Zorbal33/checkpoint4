import express from 'express';

const router = express.Router();
const connection = require('./config');

/* GET index page. */

router.get('/artists', (req, res) => {
  connection.querry('select*from artists', (err, result) => {
    if (err) {
      res.sendStatus(500);
    }else{
      res.json(results);
    }
  });
});

router.get('/tickets', (req, res) => {
  connection.querry('select*from tickets', (err, result) =>{
    if (err) {
      res.sendStatus(500);
    }else{
      res.json(results);
    }
  })
})

router.get('/videos', (req, res) => {
  connection.querry('select*from videos', (err, result) =>{
    if (err) {
      res.sendStatus(500);
    }else{
      res.json(results);
    }
  })
})

router.delete('/artists/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('delet from artists where id=?', [id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/tickets/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('delet from tickets where id=?', [id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/videos/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('delet from videos where id=?', [id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.put('/artists/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  connection.query('update artists set ? where id=?', [body, id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.put('/tickets/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  connection.query('update tikets set ? where id=?', [body, id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.put('/city/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  connection.query('update city set ? where id=1', [body, id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/artists', (req, res) => {
  const { body } = req;
  const form = {
    ...JSON.parse(body.form)
  }
  connection.query('insert into artists set ?', form, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.post('/tickets', (req, res) => {
  const { body } = req;
  const form = {
    ...JSON.parse(body.form)
  }
  connection.query('insert into tickets set ?', form, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

export default router;
