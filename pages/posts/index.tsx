import React from "react";
import Link from 'next/link'
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";
import {IPosts} from "../../interfaces/iPost";

export default class Posts extends React.Component<IPosts> {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get('http://localhost:4200/posts')
    //         .then(response => {
    //             console.log(response.data)
    //             this.setState({
    //                 posts: response.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }


    render() {
        return (
            <MainLayout title="Posts page">
                <h1>
                    Posts page
                </h1>
                <ul>
                    {this.props.posts.map(post=>(
                        <li key={post.id}><Link href={`/posts/[id]`} as={`/posts/${post.id }`}><a>{post.title}</a></Link></li>
                    ))}
                </ul>
            </MainLayout>
        );
    }

    // static async getInitialProps() {
    //     const response = await axios.get('http://localhost:4200/posts')
    //     const posts = await response.data
    //     console.log(response.data)
    //     return {
    //         props: {
    //             posts
    //         }
    //     }
    // }
}


export async function getStaticProps() {
// export async function getStaticProps() {
    const response = await axios.get('http://localhost:4200/posts')
    //
    // .then(response => {
    //     console.log(response.data)
    //     posts = response.data
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    const posts = response.data

    return {
        props: {
            posts
        }
    }
}

// Posts.getInitialProps = async () => {
//
//     const response = axios.get('http://localhost:4200/posts')
//     // .then(response => {
//     //     console.log(response.data)
//     //     this.setState({
//     //         posts: response.data
//     //     })
//     // })
//     // .catch(error => {
//     //     console.log(error);
//     // })
//     const posts = response.data
//     return {
//         posts: posts
//     }
// }
