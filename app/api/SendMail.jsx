var axios = require('axios');

const MAIL_URL = '/api/mail.php';

module.exports = {
    sendEmail: function(mail){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${MAIL_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(response){
            if(response.status != 200 && response.data.cod && response.data.message){
                throw new Error(response.data.message);    
            } else {
                if(response.data.list.length > 0)
                    return response.data.list[0].main.temp;

                return "City not found!";
            }
        },
        function(response){
            throw new Error(response.message);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
};