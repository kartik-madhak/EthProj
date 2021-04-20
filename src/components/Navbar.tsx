import React, {useState} from 'react';

interface QueryCallback {
    setQueryString: Function
}

function Navbar(props: QueryCallback) {
    const {setQueryString} = props;
    const [query, setQuery] = useState('')

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top justify-content-between">
            <div className="container-lg w-75">
                <a className="navbar-brand" href="#">EthProj</a>
                <div>
                    <form className="form-inline justify-content-center" style={{width: 200}} onSubmit={async event => {
                        event.preventDefault();
                        setQueryString(query)
                    }}>

                        <input className="form-control form-control-sm" style={{backgroundColor: "#FAFAFA"}}
                               placeholder="Search" type="text"
                               onChange={e => setQuery(e.target.value)}/>
                        <input hidden type="submit" value="Submit"/>

                    </form>
                </div>


                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample09">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1}
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>


            </div>
        </nav>


    );
}

export default Navbar;
