const initState = {
    posts: [
        {id:'1', title: ' Assumenda nobis doloremque quo impedit possimus inventore deleniti! Ipsam iusto animi, nam doloremque sapiente natus culpa.', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum facilis blanditiis expedita? Assumenda nobis doloremque quo impedit possimus inventore deleniti! Ipsam iusto animi, nam doloremque sapiente natus culpa'},
        {id:'2', title: ' Assumenda nobis doloremque quo impedit possimus inventore deleniti! Ipsam iusto animi, nam doloremque sapiente natus culpa.', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum facilis blanditiis expedita? Assumenda nobis doloremque quo impedit possimus inventore deleniti! Ipsam iusto animi, nam doloremque sapiente natus culpa'},
        {id:'3', title: ' Assumenda nobis doloremque quo impedit possimus inventore deleniti! Ipsam iusto animi, nam doloremque sapiente natus culpa.', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum facilis blanditiis expedita? Assumenda nobis doloremque quo impedit possimus inventore deleniti! Ipsam iusto animi, nam doloremque sapiente natus culpa'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer

