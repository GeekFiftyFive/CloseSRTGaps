const parser = require('subtitles-parser');

module.exports = {
    closeGaps: srt => {
        let subs = parser.fromSrt(srt);

        let previousEnd = null;

        subs.forEach(sub => {
            if(previousEnd) sub.startTime = previousEnd;
            previousEnd = sub.endTime;
        });

        return parser.toSrt(subs);
    }
}