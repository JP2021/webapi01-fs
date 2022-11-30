const {v4} = require ("uuid");
global.users = [];

function findUser(){
    return global.users;
   
}
function findUsers(id){
    return global.users.find(item => item.id === id);
    
} 
function insertUser(user){
    user.id = v4();
    console.log(user.id)
    global.users.push(user);
    console.log(global.users)
}

function updateUser(id, user){

    return global.users.forEach((item, index, array) => {
        if (item.id === id){
            user.id = id;
            array [index] = user; 
        }

        
    });

}

function deleteUser(id){

    return global.users.forEach ((item, index, array)=>{
        if(item.id === id )

        array.splice(index,1);
    })

}

module.exports = {
    findUser, insertUser,
    updateUser, deleteUser,findUsers
}