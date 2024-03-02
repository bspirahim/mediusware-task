import React, {useState} from 'react';

const Problem1 = () => {

    function customSort(a, b) {
        const statusOrder = { 'active': 1, 'completed': 2 };
        const statusA = statusOrder[a.status] || 3; // Default to 3 for any other status
        const statusB = statusOrder[b.status] || 3; // Default to 3 for any other status
    
        if (statusA === statusB) {
            // If statuses are the same, sort alphabetically by status
            return a.status.localeCompare(b.status);
        }
    
        // Sort by custom status order
        return statusA - statusB;
    }
    
    const [show, setShow] = useState('all');
    const [list, setList] = useState([]);
 
    const handleClick = (val) =>{
        setShow(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const status = form.status.value;

        const details = {name, status}
        setList(oldArray => [...oldArray,details] );

    }



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list.filter((item) => {
                                if(show === 'all'){
                                    return true;
                                }
                                return item.status === show

                            }).sort(customSort).map(item => <tr>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;