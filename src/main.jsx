const App = () => {
    return (
        <div className='container'>
            <div className="content-root">
                <h4 className="conen">PANKAJ CHOHAN</h4>
                <div className="container">
                    <img src="./images/image_prof.jpeg" className='image_css' />
                </div>
                <div className="container">
                    <p >
                        Hi my name is Pankaj Chohan. I'm 23yrs old. I'm from India. I'm currently doing my master's in Computer Science from San
                        Diego State University. I love playing cricket.
                    </p></div>
                <div className="container">

                    <a href="https://github.com/PankajChohan9820">
                        <button className="btn success">Click here</button>
                    </a></div>
            </div>
        </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))