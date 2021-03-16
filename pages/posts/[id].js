import React from "react";
import {withRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4200/posts/${this.props.router.query.id}`)
            .then(response=>{
                this.setState({
                    post: response.data
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        if(this.state.post===null){
            return (
                <MainLayout>
                    <p>
                        ...Loading
                    </p>
                </MainLayout>
            )
        }
        return (
            <MainLayout>
                <h1>
                    Posts {this.state.post.title}
                </h1>
                <p>
                    {this.state.post.body}
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
    // if(!req){
    //     return {
    //         props:{
    //             post: null
    //         }
    //     }
    // }
    const response = await axios.get(`http://localhost:4200/posts/${params.id}`)
    return {
        props: {
            post: response.data
        }
    }
}


export default withRouter(Post)
