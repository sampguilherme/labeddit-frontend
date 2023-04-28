export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToLoginPage = (navigate) => {
    navigate('/')
}

export const goToSignupPage = (navigate) => {
    navigate('/signup')
}

export const goToCommentsPage = (navigate, postId) => {
    navigate(`/comments/${postId}`)
}