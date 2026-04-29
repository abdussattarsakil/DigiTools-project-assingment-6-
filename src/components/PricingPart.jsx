const PricingPart = () => {
    return (
        <div className="">
            <div className="text-center space-y-2 my-10">
                <h1 className="text-4xl font-bold">
                    Simple, Transparent Pricing
                </h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* cart */}

            <div className="md:flex justify-center gap-5">
                <div className="card w-80 bg-base-200 shadow-lg m-auto mb-4 md:m-0">
                    <div className="card-body">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                            <h2 className="text-xl"> <span className="text-4xl font-bold">$0</span>/month</h2>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="line-through">Seamless cloud integration</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="line-through">Real-time collaboration tools</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn w-full rounded-full text-white bg-linear-to-r/hsl from-blue-500 to-purple-500">Get Started Free</button>
                        </div>
                    </div>
                </div>


                <div className="card w-80 bg-linear-to-r/hsl from-blue-500 to-purple-500 shadow-lg m-auto mb-4 md:m-0">
                    <div className="card-body relative">                        
                        <span className="badge badge-md badge-warning absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">Most Popular</span>
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold text-white">Pro</h2>
                            <h2 className="text-white">Best for professionals</h2>
                            <h2 className="text-xl text-white"> <span className="text-4xl font-bold">$29</span>/month</h2>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-xs text-white">

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Freelancer toolkit access</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>50GB secure cloud storage</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn w-full rounded-full bg-white text-purple-500">Start Pro Trial</button>
                        </div>
                    </div>
                </div>


                <div className="card w-80 bg-base-200 shadow-lg m-auto mb-4 md:m-0">
                    <div className="card-body">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                            <h2 className="text-xl"> <span className="text-4xl font-bold">$99</span>/month</h2>
                        </div>
                        <ul className="mt-4 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>API access for e-learning platforms</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Developer Pro & SaaS kits</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6">
                             <button className="btn w-full rounded-full text-white bg-linear-to-r/hsl from-blue-500 to-purple-500">Contact Sales</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PricingPart;