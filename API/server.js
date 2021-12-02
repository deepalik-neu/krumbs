
import app from  './services/app.js';
const port = 7001 // PORT SET UP ON 7000 
 
app.listen({
  port: (process.env.PORT || port)
}, () => {
  console.log(`App listening at http://localhost:${port}`) //PORT ACTIVE
})