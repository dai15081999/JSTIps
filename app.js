import { SteveError, NetworkError } from './main.js';


document.body.addEventListener('click', (ev) => {
    let err = new Error('error message');

    try {
        throw err;
    } catch (e) {
        console.log(e);
    }

    let errSteve = new SteveError('steve Error')
    try {
        throw errSteve
    } catch (error) {
        console.log(error);
    }

    let resp = new Response('hho.com', {
        status: 452,
        statusText: 'Your mom called. Time for dinner',
        headers: {
            'x-my-header': 'failure to curfew'
        }
    })

    Promise.resolve(resp)
    .then((resp) => {
      if (!resp.ok) throw new NetworkError(resp);
      console.log('response was too good.');
    })
    .catch((err) => {
      console.log(err);
    });
})