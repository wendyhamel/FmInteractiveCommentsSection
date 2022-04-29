window.data = function () {
    return {
        currentUser : {
            image: {
                png: "./images/avatars/image-juliusomo.png",
                webp: "./images/avatars/image-juliusomo.webp"
            },
            username: "juliusomo"
        },
        posts : [
            {
                id: 1,
                content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
                createdAt: "1 month ago",
                score: 12,
                user: {
                    image: {
                        png: "./images/avatars/image-amyrobson.png",
                        webp: "./images/avatars/image-amyrobson.webp"
                    },
                    username: "amyrobson"
                },
                replies: []
            },
            {
                id: 2,
                content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
                createdAt: "2 weeks ago",
                score: 5,
                user: {
                    image: {
                        png: "./images/avatars/image-maxblagun.png",
                        webp: "./images/avatars/image-maxblagun.webp"
                    },
                    username: "maxblagun"
                },
                replies: [
                    {
                        id: 3,
                        content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                        createdAt: "1 week ago",
                        score: 4,
                        replyingTo: "maxblagun",
                        user: {
                            image: {
                                png: "./images/avatars/image-ramsesmiron.png",
                                webp: "./images/avatars/image-ramsesmiron.webp"
                            },
                            username: "ramsesmiron"
                        }
                    },
                    {
                        id: 4,
                        content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                        createdAt: "2 days ago",
                        score: 2,
                        replyingTo: "ramsesmiron",
                        user: {
                            image: {
                                png: "./images/avatars/image-juliusomo.png",
                                webp: "./images/avatars/image-juliusomo.webp"
                            },
                            username: "juliusomo"
                        }
                    }
                ]
            }
        ],

        deleteModal : false,
        newPost: '',
        editing: null,
        messageToDelete: null,
        newReply: '',
        editedReply: null,

        addPost() {
            if (! this.newPost) {
                return;
            }
            this.posts.push({
                id: Date.now(),
                createdAt: 'just now',
                score: 0,
                content: this.newPost,
                user: {
                    image: {
                        png: "./images/avatars/image-juliusomo.png",
                        webp: "./images/avatars/image-juliusomo.webp"
                    },
                    username: "juliusomo"
                }
            });

            this.newPost = '';
        },

        edit(message) {
            message.cachedContent = message.content;
            this.editing = message;
        },

        update() {
            if(this.editing.content.trim() === '') {
                return this.removePost(this.editing);
            }
            this.editing = null;
        },

        cancelEdit(message) {
            message.content = message.cachedContent;
            this.editing = null;
            delete message.cachedContent;
        },

        removeMessage() {
            let id = messageToDelete.id;
            console.log(id, messageToDelete.id)
            let matchedArray = this.posts.flatMap(arr => arr.filter(obj.id === id))
            console.log(matchedArray)
        },

        removePost() {
            let index = this.posts.indexOf(this.postToDelete);
            this.posts.splice(index, 1);
        },

        addReply(post) {
            if (! this.newReply) {
                return;
            }
            this.post.replies.push({
                id: Date.now(),
                createdAt: 'just now',
                score: 0,
                replyingTo: post.user.username,
                content: this.newReply,
                user: {
                    image: {
                        png: "./images/avatars/image-juliusomo.png",
                        webp: "./images/avatars/image-juliusomo.webp"
                    },
                    username: "juliusomo"
                }
            });

            this.newReply = '';
        },

        removeReply(post, reply) {
            let index = post.replies.indexOf(reply);
            post.replies.splice(index, 1);
        },

    }
}