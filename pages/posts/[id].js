import React from "react";
import {withRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverPost: []
        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <MainLayout>
                <h1>
                    Posts {this.props.post.title}
                </h1>
                <p>
                    {this.props.post.body}
                </p>
            </MainLayout>
        );
    }
}


export async function getStaticPaths() {
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


export async function getStaticProps({params}) {
    const response = await axios.get(`http://localhost:4200/posts/${params.id}`)
    return {
        props: {
            post: response.data
        }
    }
}


export default withRouter(Post)
