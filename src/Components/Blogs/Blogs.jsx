import React from 'react';

const Blogs = () => {
    return (
        <>
            <h3 className='text-center mb-5 gray py-5'>Blogs Section</h3>
            <div className='col-md-6 mx-auto px-2'>
                <h2>1. When should you use context api?</h2>
                <p><strong>Answer: </strong>
                    Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                </p>

                <h2>2. What is custom hooks?</h2>
                <p><strong>Answer: </strong>
                    Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
                </p>

                <h2>What is use ref in react?</h2>
                <p><strong>Answer: </strong>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>

                <h2>What is usememo in react js?</h2>
                <p><strong>Answer: </strong>
                    React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
                </p>
            </div>
        </>
    );
};

export default Blogs;