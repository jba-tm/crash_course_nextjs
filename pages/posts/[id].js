import React from "react";
import {withRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

class Post extends React.Component{
    render() {
        console.log(this.props.router)
        return (
            <MainLayout>
                <h1>
                    {this.props.router.query.id}
                </h1>
            </MainLayout>
        );
    }
}


export default withRouter(Post)
