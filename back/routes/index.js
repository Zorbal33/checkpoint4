import express from 'express';

const router = express.Router();
const connection = require('./config');

router.get('/artists', (req, res) => {
  connection.query('select * from artists', (err, artists) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(artists);
  });
});

router.get('/tickets', (req, res) => {
  connection.query('select * from tickets', (err, tickets) => {
    if (err) {
      res.sendStatus(500);
    }
    res.json(tickets);
  });
})

router.get('/videos', (req, res) => {
  connection.query('select*from videos', (err, results) =>{
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  })
})

router.delete('/artists/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('delete from artists where id=?', [id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/tickets/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('delete from tickets where id=?', [id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/videos/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('delete from videos where id=?', [id], (err) => {
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
  };
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
  };
  connection.query('insert into tickets set ?', form, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

export default router;
