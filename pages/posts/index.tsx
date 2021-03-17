import React from "react";
import Link from 'next/link'
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";
import {IPosts} from "../../interfaces/IPost";
import { GetStaticProps } from 'next'

export default class Posts extends React.Component<IPosts> {
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
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get(`${process.env.API_URL }/posts`)

    const posts = response.data

    return {
        props: {
            posts
        }
    }
}