// set up express server 
// const express = require('express');
// const app = express();
// const port = 3000;
// // listen on port 3000 using express 
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// // listen on /auth path
// app.get('/auth', (req, res) => {

// }   );
import { Hop } from '@onehop/js';
 
const projectToken = "ptk_c18wNDhmN2IwYmUwYzIzODNhNWIzYWEzNmVjNTZlZGFkZl81MDIwODU3MzUzOTI0NjA4Ng";
const hop = new Hop(projectToken);
console.log('hey')