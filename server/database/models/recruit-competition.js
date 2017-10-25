const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let recruit_competition = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    link: { type: String, required: true },
    recruitmentNumber: { type: Number, required: true },
    currentRecruitment: { type: Number, required: true, default: 0 },
    positions: [{ type: String }],
    writeDate: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    tags: [{ type: String }],
    images: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    views: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    collection: 'Recruit-Competition'
})

module.exports = mongoose.model('Recruit-Competition', recruit_competition);