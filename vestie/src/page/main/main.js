import {Component} from "react";
import {Header} from "../../component/header/header";
import {SurveyItem} from "../../component/surveyitem/surveyItem";

export class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <SurveyItem></SurveyItem>
                <SurveyItem></SurveyItem>
                <SurveyItem></SurveyItem>
                <SurveyItem></SurveyItem>
            </div>
        )
    }
}