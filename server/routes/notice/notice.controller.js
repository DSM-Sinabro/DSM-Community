const notice = require('../../database/models/notice');

exports.getPostlist = (req,res) => {

    notice.findAll()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({
                message: error.message
            });
        });
}

exports.createPost = (req,res) => {
    const authorUid = req.decoded || "59f1efe82538c40942248d2b",
                    {
                        title,
                        contents,
                        writeDate,
                        tags,
                        images,
                    } = req.body;

    notice.create(authorUid, title, contents,writeDate, tags, images)
        .then(posts => {
            res.sendStatus(201);
        })
        .catch(err => {
            if(err.message == "Forbidden") {
                res.sendStatus(403);
            }
            else res.status(400).json({
                "message": err.massage
            });
        });
}

exports.readPost = (req,res) => {
    const user = req.decoded || "59f1efe82538c40942248d2b", //
          pid =req.params.pid;

    notice.findById(pid).populate("author", ["name","profile",]).exec()
        .then (post => {
            if(!post) res.sendStatus(404); //204
            else {
                if (post.views.indexOf(user)<0) {
                    post.views.push(user);
                    post.markModified('views');
                    post.save();
                }
                res.status(200).json(post);
            }
        })
        .catch (err => {
            res.status(500).json({
                "message":err.message
            })
        });
}
    

exports.revisePost = (req,res) => {
    const authorUid = req.decoded || "59f1efe82538c40942248d2b",
          pid = req.params.pid;

    const {
        title,
        contents,
        writeDate,
        tags,
        images
    } = req.body;

    notice.findById(pid)
        .then(post => {
            if(!post) throw new Error("Post Not Found");
            else if (post.author != authorUid) throw new Error("Forbidden");
            else return post.update({//
                "$set": {
                    title,
                    contents,
                    writeDate,
                    tags,
                    images
                }
            })
        })
        .then(updated => {
            console.log(updated);
            res.sendStatus(200);
        })
        .catch(err => {
            if(err.message == "Post Not Found") {//
                res.sendStatus(404);
            } else if (err.message == "Forbidden") {
                res.sendStatus(403);
            } else {
                res.status(500).json({
                    "message":err.message
                });
            }
        })
}

exports.dropPost = (req,res) =>{
    const authorUid = req.decoded || "59f1efe82538c40942248d2b",
          pid = req.params.pid; 

    notice.findByID(pid)
        .then(post => {
            if(!post) throw new Error("Post Not Found");
            else if (post.author != authorUid) throw new Error("Fofbidden");
            else return post.remove();
        })
        .then(removed => {
            res.sendStatus(200);
        })
        .catch(err => {
            if(err.message == "Post Not Found") {
                res.sendStatus(404);
            } else if(err.message == "Forbidden") {
                res.sendStatus(403);
            } else {
                res.status(500).json({
                    "message": err.message
                });
            }
        });
}
