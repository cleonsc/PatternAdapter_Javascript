/* http://jsdeepdive.blogspot.com/2014/11/javascript-adapter-design-pattern.html */
function RedisDataManager() {
    this.connect = function() {
        console.log('Connect to database');
    };
 
    this.scan = function() {
        return 'Data from database';
    };
}
 
function DataManager() {
    this.getData = function() {
        return 'Legacy data';
    }
}
   
function Adapter() {
    var redis = new RedisDataManager();
    redis.connect();
     
    this.getData = function() {
        return redis.scan();
    }
}
 
function Client(dataManager) {
    console.log(dataManager.getData());
}
 
const client = new Client(new Adapter());
const client2 = new Client(new DataManager());