
var data = JSON.parse(localStorage.getItem('POST'))
var initialState =  data ? data : [
    {
        id: 1,
        name: 'The High-Street Brand Fashion',
        time: 'June 9, 2020',
        image: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-01.webp',
        comments: [
            {
                idComment: 1,
                idUser: 1,
                imgUser: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp',
                nameUser: 'Miles Black',
                content: 'Well how fantastic do I feel now. Awesome to say the least.',
                timeComment: 'October 27, 2020'
            },
            {
                idComment: 2,
                idUser: 2,
                imgUser: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp',
                nameUser: 'Miles Black',
                content: 'Well how fantastic do I feel now. Awesome to say the least.',
                timeComment: 'October 27, 2020'
            },
        ],
        content: `But I must explain to you how all this mistaken idea of denouncing 
        pleasure and praising pain was born and I will give you a complete account of the system, 
        and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not 
        know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there 
        anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
        but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`,
        quote: {
            contentQuote: `But in certain circumstances and owing to the claims of duty or obligations of 
            business it willfrequently occur that pleasures have to be repudiated and annoyances accepted.`,
            authorQoute: 'Jon Cock'
        }
    },
    {
        id: 2,
        name: 'Trends to Try This Season',
        time: 'June 9, 2020',
        image: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-03.webp',
        comments: [
            {
                idComment: 1,
                idUser: 1,
                imgUser: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp',
                nameUser: 'Miles Black',
                content: 'Well how fantastic do I feel now. Awesome to say the least.',
                timeComment: 'October 27, 2020'
            },
            {
                idComment: 2,
                idUser: 2,
                imgUser: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp',
                nameUser: 'Miles Black',
                content: 'Well how fantastic do I feel now. Awesome to say the least.',
                timeComment: 'October 27, 2020'
            },
        ],
        content: `But I must explain to you how all this mistaken idea of denouncing 
        pleasure and praising pain was born and I will give you a complete account of the system, 
        and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not 
        know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there 
        anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
        but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`,
        quote: {
            contentQuote: `But in certain circumstances and owing to the claims of duty or obligations of 
            business it willfrequently occur that pleasures have to be repudiated and annoyances accepted.`,
            authorQoute: 'Jon Cock',
        },
    },
    {
        id: 3,
        name: 'Working From Home',
        time: 'June 9, 2020',
        image: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/blog-02.webp',
        comments: [
            {
                idComment: 1,
                idUser: 1,
                imgUser: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp',
                nameUser: 'Miles Black',
                content: 'Well how fantastic do I feel now. Awesome to say the least.',
                timeComment: 'October 27, 2020'
            },
            {
                idComment: 2,
                idUser: 2,
                imgUser: 'https://big-skins.com/frontend/foxic-html-demo/images/blog/comment-author.webp',
                nameUser: 'Miles Black',
                content: 'Well how fantastic do I feel now. Awesome to say the least.',
                timeComment: 'October 27, 2020'
            },
        ],
        content: `But I must explain to you how all this mistaken idea of denouncing 
        pleasure and praising pain was born and I will give you a complete account of the system, 
        and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not 
        know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there 
        anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
        but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`,
        quote: {
            contentQuote: `But in certain circumstances and owing to the claims of duty or obligations of 
            business it willfrequently occur that pleasures have to be repudiated and annoyances accepted.`,
            authorQoute: 'Jon Cock'
        }
    },
];

const Posts = (state = initialState, action) => {

    // switch (action.type) {


    //     default: return [...state];
    // }
    return [...state];
}

export default Posts;




