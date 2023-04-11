const getJobs = () => {
    let jobsCart = [];

    //get the jobs cart from local storage
    const savedCart = localStorage.getItem('jobs');
    if (savedCart) {
        jobsCart = JSON.parse(savedCart);
    }
    return jobsCart;
}

export {getJobs}
