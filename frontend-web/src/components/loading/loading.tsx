import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
const Loading = (props: any) => {

    const [visibility, setVisibility] = useState("none")

    useEffect(() => {
        if (props.visibility === true) {
            setVisibility("flex")
        } else {
            setVisibility("none")
        }
    })
    
    return (
        <Row className="nopadding justify-content-center align-content-center gx-0" style={{ display: visibility, justifyContent: "center", alignItems: "center", backgroundColor: 'transparent', height: props.height == null ? "100%" : props.height, width: props.width == null ? "100%" : props.width, zIndex: '10' }}>
            <Col md={1}>
                    <Row style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="84" cy="50" r="10" fill="#91bcc6">
                                <animate attributeName="r" repeatCount="indefinite" dur="0.5319148936170213s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                                <animate attributeName="fill" repeatCount="indefinite" dur="2.127659574468085s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#91bcc6;#e1e7e7;#0a69aa;#07abcc;#91bcc6" begin="0s"></animate>
                            </circle><circle cx="16" cy="50" r="10" fill="#91bcc6">
                                <animate attributeName="r" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                            </circle><circle cx="50" cy="50" r="10" fill="#07abcc">
                                <animate attributeName="r" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5319148936170213s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5319148936170213s"></animate>
                            </circle><circle cx="84" cy="50" r="10" fill="#0a69aa">
                                <animate attributeName="r" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.0638297872340425s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.0638297872340425s"></animate>
                            </circle><circle cx="16" cy="50" r="10" fill="#e1e7e7">
                                <animate attributeName="r" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.5957446808510638s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="2.127659574468085s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.5957446808510638s"></animate>
                            </circle>
                        </svg>
                    </Row>
            </Col >
        </Row>
    )
}

export default Loading