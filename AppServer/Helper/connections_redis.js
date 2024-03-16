const redis = require('redis');

const client = redis.createClient({
    port: 6379,
    host: "https://nodeserver-plant.onrender.com/"
})

client.ping((err, pong)=>{
    console.log(pong);
})

client.on('error', function(error){
    console.log(error);
})

client.on('connect', function(error){
    console.log("connected");
})

client.on('ready', function(error){
    console.log("ready");
})

module.exports = client