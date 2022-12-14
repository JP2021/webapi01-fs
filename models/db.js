const {v4} = require ("uuid");
const fs = require ("fs");
const { json } = require("express");
const FILE_PATH = require("path").join(__dirname, "users.json");

function findUser(){

if(!fs.existsSync(FILE_PATH)) return [];

const rawData = fs.readFileSync(FILE_PATH);
return JSON.parse(rawData);
   
}
function findUsers(id){
    return findUser().find(item => item.id === id);
    
} 
function insertUser(user){
    const users = findUser();
    user.id = v4();

      users.push(user);
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return user;
}

function updateUser(id, user, overwrite){

    const users = findUser();

   const index = users.findIndex(item => item.id === id);
   if(index === -1) return {};
   
   if(overwrite)
   users[index] = user;
   else{
    for ( let key in user){
        users[index][key] = user[key]
    };
   }
        fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return users[index];

        
 
}

function deleteUser(id){
    const users = findUser();

    users.forEach ((item, index, array)=>{
      
        if(item.id === id )
        array.splice(index,1);

        fs.writeFileSync(FILE_PATH, JSON.stringify(users));
      
        
    })

   

}

module.exports = {
    findUser, insertUser,
    updateUser, deleteUser,findUsers
}