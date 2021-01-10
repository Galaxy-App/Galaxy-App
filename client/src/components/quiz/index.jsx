import React, { Component } from 'react';
import Axios from 'axios';
import ScoreShow from './ScoreShow'
import './index.css'

export default class MainQuiz extends Component {
	constructor(props){
		super(props)
		this.state={
			questions: [],
			currentQuestion:0,
			score: 0,
			showScore: false,
			globalScore: this.props.globalScore
		}
		this.getQuestions=this.getQuestions.bind(this)
		this.computeAnswer=this.getQuestions.bind(this);
		this.updateQuestion=this.updateQuestion.bind(this);
		this.handleAnswerOptionClick=this.handleAnswerOptionClick.bind(this);
		this.shuffle=this.shuffle.bind(this);
		this.match21=this.match21.bind(this);
		this.dert=this.dert.bind(this);


	};
	updateQuestion(param){
		this.setState({questions: param})
	};

	getQuestions(){
		return(
		Axios
		.get("http://localhost:8000/quiz",(req,res)=>{
			console.log("bonjour")
		})
		.then((response)=>{this.updateQuestion(response.data)})
		.catch((err)=>console.error("error on get req questions",err))
		)
	};
	//sleh's code XD
	shuffle (array) {
	let n=Math.floor(Math.random()*array.length);
	let res=[];
	let j = 0 ;
	let rep=[]
	while(j<array.length){
	this.dert(n,rep,array.length)
	res.push(array[rep[rep.length-1]])
	j++
	}
	return res
	};


	match21 (arr,el){
	let i=0;
	while (i<arr.length && (arr[i]!==el)){
	i++
	}
	return i<arr.length;
	};

	dert (n,arr,x){
	if(!this.match21(arr,n) ){
	arr.push(n);
	return arr
	}
	return this.dert(Math.floor(Math.random()*x),arr,x)
	};
	//sleh's code end here :p
	handleAnswerOptionClick = (e,isCorrect) => {
		console.log("expected answer",isCorrect)
		if (isCorrect===e.target.innerHTML) {
			this.setState({
				score:this.state.score+5,
				globalScore:this.props.updateGlobalScore(5)
			})
		}
		const nextQuestion = this.state.currentQuestion + 1;
		if (nextQuestion < this.state.questions.length) {
			this.setState({currentQuestion:nextQuestion});
		} else {
			this.setState({showScore:true});
		}
	};

	componentDidMount() {
		this.getQuestions();
		if(this.state.score>this.state.questions.length&&this.state.showScore===true){
			setTimeout(()=>{
			console.log('hello from componentDidUpdate QUIZ',this.props.view)
				this.props.changeView("Memory")
				},4000);
		}
		};
		componentWillUnmount(){
			Axios.delete("http://localhost:8000/quiz",(req,res)=>{
				console.log("deleted")
			})
		}

		// };
	render() {
		let quest=this.state.questions[this.state.currentQuestion]||{op:[]};
		let ans=this.shuffle(quest.op)
		return (
			<div className="container">
			{this.state.showScore ? (
				<div className='score-section'>
					<ScoreShow score={this.state.score} max={this.state.questions.length*5}
					changeView={this.props.changeView} globalScore={this.props.globalScore}
					updateGlobalScore={this.props.updateGlobalScore}
					/>
				</div>
			) : (
				<>
				<div className="title">Now, we test your general culture. Focus!!</div>
				<div className='question-section'>
					<div className='question-count'>
						<span>Question {this.state.currentQuestion + 1}</span>/{this.state.questions.length}
					</div>
					<div className='question-text'>{quest.text}</div>
				</div>
				<div className='answer-section'>
					{ans.map((element,i)=>(<p className={"reponse"+1+i} key={i} onClick={(e) => this.handleAnswerOptionClick(e,quest.correct)}>
					{element}
					</p>)
					)}
				</div>
				</>
				)}
			</div>
		)
	}
}
