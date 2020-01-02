import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import classes from './TakeTest.module.css';
import Counter from './Counter'

var arr = [
    {
        question_id: "1",
        question: "What is React?",
        option_1: "Library",
        option_2: "Framework",
        option_3: "Artificial Intelligence",
        option_4: "Programming Language",
        answer: "Library",
        marks: "3",
        teacher_id: "1",
        quiz_test_id: "1",
        objective_type_id: 1
    },
    {
        question_id: "2",
        question: "React is a Framework.",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        answer: "True",
        marks: "3",
        teacher_id: "1",
        quiz_test_id: "1",
        objective_type_id: 2
    },
    {
        question_id: "2",
        question: "React is a ____________.",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        answer: "Framework",
        marks: "3",
        quiz_test_id: "1",
        teacher_id: "1",
        objective_type_id: 3
    }
]
function jumbleQuestions() {
    var currentIndex = arr.length
    var tempValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
    }
    return arr
}
arr = jumbleQuestions(arr)

export default class TakeTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            allData: arr,
            per_page: 1,
            response: ''
        };
    }

    handleChange = event => {
        this.setState({
            response: event.target.value
        })

    }
    handleClick = (a) => {
        this.setState({
            page: a
        })
    }

    handleNext = (a) => {
        if (a <= this.state.allData.length) {
            this.setState({
                page: a + 1
            })
        }
    }

    handlePrev = (a) => {
        if (a > 1) {
            this.setState({
                page: a - 1
            })
        }
    }

    render() {
        var jumbledQuestionData = this.state.allData
        var totalQuestion = jumbledQuestionData.length
        var start = (this.state.page - 1)
        var end = start + 1
        var slicedData = jumbledQuestionData.slice(start, end)

        var showData = slicedData.map(e => {
            if (e.objective_type_id === 1) {
                return (
                    <div>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {e.question}
                                </Typography>
                                <FormControl>
                                    <RadioGroup name="response" onChange={this.handleChange}>
                                        <FormControlLabel value="A" control={<Radio />} label={e.option_1} />
                                        <FormControlLabel value="B" control={<Radio />} label={e.option_2} />
                                        <FormControlLabel value="C" control={<Radio />} label={e.option_3} />
                                        <FormControlLabel value="D" control={<Radio />} label={e.option_4} />
                                    </RadioGroup>
                                </FormControl>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary">Submit Response</Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
            else if (e.objective_type_id === 2) {
                return (

                    <div>
                        <Card className={classes.card} variant="outlined">
                            <CardContent className={classes.margin_top}>
                                <Typography variant="h5" component="h2">
                                    {e.question}
                                </Typography>
                                <FormControl>
                                    <RadioGroup name="response" onChange={this.handleChange}>
                                        <FormControlLabel value="True" control={<Radio />} label="True" />
                                        <FormControlLabel value="False" control={<Radio />} label="False" />
                                    </RadioGroup>
                                </FormControl>
                            </CardContent>
                            <CardActions>
                                <div className={classes.button_margin_top} >
                                    <Button variant="contained" color="primary">Submit Response</Button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
            else if (e.objective_type_id === 3) {
                return (
                    <div>
                        <Card className={classes.card} variant="outlined">
                            <CardContent className={classes.margin_top}>
                                <Typography variant="h5" component="h2">
                                    {e.question}
                                </Typography>
                                <TextField id="standard-basic" label="Answer" name="response" onChange={this.handleChange} />
                            </CardContent>
                            <CardActions>
                                <div className={classes.button_margin_top}  >
                                    <Button variant="contained" color="primary">Submit Response</Button>
                                </div>

                            </CardActions>
                        </Card>

                    </div>
                )
            }
        })
        var pageNumbers = []

        for (var i = 1; i <= totalQuestion; i++) {
            pageNumbers.push(i)
        }

        var button = pageNumbers.map((a, index) => {
            if ((index + 1) % 3 == 0) {
                return (
                    <>
                        <Button variant="outlined" color="secondary" onClick={() => this.handleClick(a)}>{a}</Button>
                        <br></br>
                    </>
                )
            }
            else {
                return (
                    <>
                        <Button variant="outlined" color="secondary" onClick={() => this.handleClick(a)}>{a}</Button>
                    </>
                )
            }
        })
        var nextButton = () => {
            if (this.state.page !== totalQuestion) {
                return (
                    <Button variant="contained" onClick={() => this.handleNext(this.state.page)} color="primary">Next</Button>
                )

            }
            else {
                return (
                    <Button variant="contained" color="primary" disabled>Submit Test</Button>
                )
            }
        }
        var prevButton = () => {
            if (this.state.page !== 1) {
                return (
                    <Button variant="contained" onClick={() => this.handlePrev(this.state.page)} color="secondary">Prev</Button>
                )
            }
            else {
                return (
                    <Button variant="contained" color="primary" disabled>Prev</Button>
                )
            }
        }
        return (
            <div>
                <Counter/>
                <div className={classes.button_margin_question}>
                    <h2>Questions List</h2>
                    {button}
                </div>
                <div className={classes.questionno_alignment}>
                    Question : {this.state.page}
                </div>
                {showData}
                <div className={classes.button_prev}>
                    {prevButton()}
                </div>
                <div className={classes.button_next}>
                    {nextButton()}
                </div>
            </div>
        )
    }
}
