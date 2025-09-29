
// Fetch Posts
const fetchPostData = async() => {
    const res = await fetch('http://localhost:5000/api/posts')
    if(!res.ok) throw new Error('Failed to fetch')
    return res.json()
}

const fetchSinglePost = async(id: string) => {
    const res = await fetch(`http://localhost:5000/api/posts/${id}`)
    if(!res.ok) throw new Error('Failed to fetch')
    return res.json()
}
export { fetchPostData, fetchSinglePost }