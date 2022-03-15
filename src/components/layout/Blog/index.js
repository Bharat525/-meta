import React from 'react'
import Blogimg from "../../../assets/blog/blog.jpeg"
import "./style.scss"
import Cardfooter from "../../../assets/card-footer/logo.svg"

const Blog = () => {
    return (

        <section>
            <h2>From the blog
            </h2>

            <div className='parent-container'>
                <div className='card'>
                    <img src={Blogimg} alt="" />

                    <div className='card-body'>
                        <a href="/">Kusama</a>
                        <a href="/"><h5>Introducing Encointer: Making Web3 Truly Inclusive</h5></a>
                        <div className='para'>
                            <p>Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity....</p>
                        </div>

                    </div>

                    <div className="card-foot">
                        <img src={Cardfooter} alt="" />



                    </div>

                </div>
                <div className='card'>
                    <img src={Blogimg} alt="" />

                    <div className='card-body'>
                        <a href="/">Kusama</a>
                        <a href="/"><h5>Introducing Encointer: Making Web3 Truly Inclusive</h5></a>
                        <div className='para'>
                            <p>Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity....</p>
                        </div>

                    </div>

                    <div className="card-foot">
                        <img src={Cardfooter} alt="" />



                    </div>

                </div>
                <div className='card'>
                    <img src={Blogimg} alt="" />

                    <div className='card-body'>
                        <a href="/">Kusama</a>
                        <a href="/"><h5>Introducing Encointer: Making Web3 Truly Inclusive</h5></a>
                        <div className='para'>
                            <p>Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity....</p>
                        </div>


                    </div>

                    <div className="card-foot">
                        <img src={Cardfooter} alt="" />



                    </div>

                </div>
            </div>


            <div className="involved">
                <h2>Want to get involved?</h2>

                <a href="join">Join the Community</a>
                <h5>or learn about how to <a href="/">build on Polkadot.</a></h5>

            </div>


        </section>

    )
}

export default Blog