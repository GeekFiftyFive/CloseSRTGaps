const moment = require('moment');

module.exports = {
    toTimeCode: time => {
        return moment.utc(time*1000).format('hh:mm:ss,SSS');
    }
}