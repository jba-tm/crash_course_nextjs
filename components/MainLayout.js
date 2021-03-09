import React from "react"
import Link from "next/link";

export class MainLayout extends React.Component{
    render() {
        return (
            <>
             <nav>
                 <Link href="/"><a>Home</a></Link>
                 <Link href="/about"><a>About</a></Link>
                 <Link href={'/posts'}><a>Posts</a></Link>
             </nav>
             <main>
                 {this.props.children}
             </main>
                <style jsx>{`
          nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          }                
          nav a {
          color: #fff;
          text-decoration: none;
          }
          main{
          margin-top: 60px;
          padding: 1rem;
          }
`}
                </style>
            </>
        );
    }
}