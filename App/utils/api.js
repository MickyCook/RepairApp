
var api = {
  getRepair(username){
    username = username.toLowerCase().trim();
    var url = `http://cookpaintbody.com/${username}`;
    return fetch(url).then((res) => res.json())
  }
};

module.exports = api;
