import React from 'react'
import Link from 'next/link'
import {MainLayout} from "../components/MainLayout";
import errorClasses from "../styles/error.module.scss"

export default class ErrorPage extends React.Component{
    render() {
        return (
            <MainLayout>
             <h1 className={errorClasses.error}>Error page: 404</h1>
                <p>
                      Please <Link href={'/'}>
                    <a>go back</a>
                 </Link>
                </p>
            </MainLayout>
        );
    }
}