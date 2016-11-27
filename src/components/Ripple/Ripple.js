import React from 'react'
import './Ripple.scss'
import addClass from 'react-kit/addClass'
import removeClass from 'react-kit/removeClass'
import TransitionEvent from 'react-kit/transitionEvents'
import getOffset from './getOffset'

export default class Ripple extends React.Component {
	constructor(props, context){
		super(props, context)
	}

	static defaultProps = {
		time:'0.8s',
		color: 'rgba(0,0,0,.6)',
		method:'wait'
	}

	state = {
		isAnim:false
	}

	addAnim=(event)=>{
		let t = this;
		if(t.props.method === 'wait') {
			if(t.state.isAnim) return;
		}
		t.props.onClick && t.props.onClick();
		t.setState({
			isAnim:true
		})
		let parentNode = t.refs.RippleWrap;
		let node = t.refs.RippleWave;
		node.style.animation = '';
		node.style.background = t.props.color;
		let width = t.getStyle(parentNode,'height');
		let height = t.getStyle(parentNode,'width')
		let max = Math.max(width, height);
		node.style.height = max + 'px';
		node.style.width = max + 'px';
		let x = event.pageX - getOffset(parentNode).left - t.getStyle(node,'width')/2;
		let y = event.pageY - getOffset(parentNode).top - t.getStyle(node,'height')/2;
		node.style.left = x + 'px';
		node.style.top = y + 'px'
		node.style.animation = 'ripple ' + t.props.time + ' ease-in';
		TransitionEvent.addEndEventListener(node, t.removeAnim)
	}

	getStyle(dom, style){
		var value;
		if(typeof window.getComputedStyle!='undefined'){//W3C
		     // return this.elements[i].style[attr];//只能获取行内样式，不能获取外联样式，需要用计算后的样式来获取
		    value=window.getComputedStyle(dom,null)[style];
		}else if(typeof dom.currentStyle!='undefined'){ //IE
		    value=dom.currentStyle[style];
		}	
		return +value.slice(0,-2);
	}

	removeAnim=()=>{
		let t = this;
		t.setState({
			isAnim:false
		})
		let node = t.refs.RippleWave;
		node.style.height = '0px';
		node.style.width = '0px';
		node.style.animation = '';
	}

	render(){
		const {className, children, style} = this.props;
		return (
			<div style={style} className={className + ' Ripple-wrap'} ref='RippleWrap' onClick={this.addAnim}>
				{children}
				<span ref='RippleWave' className='Ripple-wave'></span>
			</div>
			)
	}
}