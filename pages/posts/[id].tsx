import React from "react";
import {withRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";
import {GetStaticProps, GetStaticPaths} from 'next'
import {IPost} from "../../interfaces/IPost";


class Post extends React.Component<IPost> {

    render() {
        const post = this.props.post
        return (
            <MainLayout>
                <h1>
                    Posts {post.title}
                </h1>
                <p>
                    {post.body}
                </p>
            </MainLayout>
        );
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(`http://localhost:4200/posts`)
    const paths = response.data.map(post => (
            {
                params: {
                    id: post.id.toString()
                }
            }
        )
    )
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const response = await axios.get(`${process.env.API_URL }/posts/${params.id}`)
    return {
        props: {
            post: response.data
        }
    }
}


export default withRouter(Post)
