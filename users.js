const request = require('request');

const getUsers = (userId,callback) => {
  const url = 'https://reqres.in/api/users/'+userId;
  console.log(url);

  request({'url':url,'json':true},(err,response) =>{ 

        if(err){
          callback("no data available");
        }else{
    
          callback(undefined,{email:response.body.data.email,name:response.body.data.first_name});
        }
  });
         
};

module.exports = getUsers;