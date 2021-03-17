import React from "react"
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";
import {IAbout} from "../../interfaces/IAbout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


export default class About extends React.Component<IAbout>{
    render() {
        return (
            <MainLayout title="IAbout page">
                <h1>
                    {this.props.about.title}
                </h1>
            </MainLayout>
        );
    }
}


export const getStaticProps: GetStaticProps = async () => {
        const response = await axios.get(`${process.env.API_URL }/about`)

    const about = response.data

    return {
        props: {
            about
        }
    }
}
