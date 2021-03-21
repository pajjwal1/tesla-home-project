import React from 'react';
import Button from './button.js'
import './item.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const item = ({title, desc, background, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
	return(
		<div className='item' style={{
			backgroundImage: `url(${background})`
		}}>
			<div className='Item__Container'>
				<div className='Item__Text'>
					<p>{title}</p>	
						<div className='Item__Textdesc'>
							<p>{desc}</p>
						</div>
				</div>
				<div className='Item__Lowerthird'>
					<div className='Item__Buttons'>
						<Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
						{twoButtons && (
							<Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />

						)}
					</div>
					{first && (
						<div className='itemExpand'>
							<ExpandMoreIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default item;