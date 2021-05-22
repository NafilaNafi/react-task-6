import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
export default function UserList(){
    let users = useContext(UserContext);
    return <>
    <div class="container-fluid">

                    
                    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

<Link to="/usercreate">Create User</Link>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>
                                                Action
                                            </th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            users.userList.map((obj) => {
                                                return <tr>
                                            <td>{obj.firstName}</td>
                                            <td>{obj.lastName}</td>
                                            <td>{obj.email}</td>
                                            <td>{obj.password}</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                            <th>
                                                <Link to="/useredit/2">User Edit</Link>
                                            </th>
                                        </tr>
                                            })
                                        }
                                        
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
    </>
}
