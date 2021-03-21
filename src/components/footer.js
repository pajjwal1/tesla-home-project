import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './footer.css'

const footer = () => {
	return(
		<div>
			<div className="header__lower">
					<p><a href='https://www.tesla.com/about'>Tesla<CopyrightIcon /> 2021</a></p>
					<p><a href='https://www.tesla.com/about/legal'>Privacy and Legal</a> </p>
					<p><a href='https://www.tesla.com/contact'>Contact</a></p>
					<p><a href='https://www.tesla.com/careers'>Careers</a></p>
					<p><a href='https://www.tesla.com/updates'>Get Newsletter</a></p>
					<p><a href='https://www.tesla.com/blog'>News</a></p>
					<p><a href='https://forums.tesla.com/'>Forums</a></p>
					<p><a href='https://www.tesla.com/findus/list'>Location</a></p>
				</div>
		</div>
	)
}

export default footer;