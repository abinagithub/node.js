console.log('Before');
getUser(1, (user) => {
    getRepositery(user.gitHubUsername,(repos) => {
        console.log('Repos', repos)
    })
});
console.log('After');


function getUser(id, callback) {
    setTimeout(()=>{
        callback({ id: id,gitHubUsername: 'abeni'})
        return
    }, 2000);
}

function getRepositery(username,callback) {
  setTimeout(()=>{
    console.log('Reading a user from a database.')
callback(["Repo1","Repo2","Repo3"])
  }, 2000) 
}