var params = {
    "_id": null,
    "name": {
        "first": null,
        "last": null
    },
    "email": null,
    "age": null,
    "skills": [],
    "created": null,
    "logins": [{
        "at": null,
        "minutes": null
    }]
};

// if (Object.keys(params[param]).length > 2) {
function checkEmptyParams(params) {
    var query = {};
    for (let param in params) {
        // if (Object.keys(param).length)
        if (params[param] && params[param] !== '*') {
            query[param] = params[param];
        } else {
            query[param] = /.*/; // regex to match all
        }
    }
    return query;
}


console.log(checkEmptyParams(params));
