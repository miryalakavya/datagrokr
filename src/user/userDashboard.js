import React from 'react'
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth'
const Dashboard =()=>
{
	const {user:{_id,name,email,role,address,contact}}=isAuthenticated()



	const userInfo=()=>{
		return (
			<div className="card md-5">
				<h3 className="card-header">My Profile</h3>
				<ul className="list-group">
					<li className="list-group-item">
					NAME: {name}
					</li>
					<li className="list-group-item">
					EMAIL: {email}
					</li>
					<li className="list-group-item">
					CONTACT NUMBER:{contact}
					</li>
					<li className="list-group-item">
					ROLES: {role===1 ?'Admin' :"Registred User"}
					</li>
				</ul>
			</div>
			)

	}



	return (
		<div title="Good Day"  description=" " className="container"style={{position: "absolute",
			top: "66px",
			left: "100px"}}>
			<div className="row">
				<div className="col-md-11">
				{userInfo()}
				</div>
			</div>
	</div>
		)
}

export default Dashboard





