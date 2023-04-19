// Thisreact compoment is top level and will manage the state of the thingy
import React, { useState } from "react";
import { EventKeyCodeToJSID } from "../constants";
import { ExperimentTypeSelector } from "./ExperimentTypeSelector";
import { OpenSubmitModal } from "./SubmitModal";
let dummyid = 0


function Carot() {
    return < a className="flex-none text-4xl animate-pulse">|</a>
}

function WordBlock(word) {
    const wordToDisplay = word
    if (wordToDisplay=="\n"){
        return <a className="flex-1 max-w-fit select-none mx-0 text-3xl whitespace-pre-wrap break-words">{wordToDisplay}</a>
    }
    return <a className="flex-none max-w-fit select-none mx-0 text-3xl whitespace-pre-wrap break-words">{wordToDisplay}</a>
    // return (
    // <div className="flex-none indicator">
    //     <span className="indicator-item badge badge-secondary"></span>
    //     <pre className="flex-none border-primary rounded-sm  select-none bg-base-100 text-4xl font-sans">{wordToDisplay}</pre>
    // </div>
    // )
}

function ActiveWordBlock(word) {
    const wordToDisplay = word
    if (wordToDisplay=="\n"){
        return <a id="activeWord_0" className="flex-1 max-w-fit select-none mx-0 text-3xl whitespace-pre-wrap break-words">{wordToDisplay}</a>     
    }
    return <a id="activeWord_0" className="flex-none max-w-fit select-none mx-0 text-3xl whitespace-pre-wrap break-words">{wordToDisplay}</a>
    // return (
    // <div className="flex-none indicator">
    //     <span className="indicator-item badge badge-secondary"></span>
    //     <pre className="flex-none border-primary rounded-sm  select-none bg-base-100 text-4xl font-sans">{wordToDisplay}</pre>
    // </div>
    // )
}

function DumpFileButton(props) {
    const dumpfn = props.dumpfn
    return <button className="btn btn-square btn-ghost mx-auto scale-125" onClick={dumpfn}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    </button>
}

function RecordingBlip(props) {
    const txt = props.recording ? "recording..." : ""
    return
}

export class TextWritingArea extends React.Component {
    constructor(props) {
        super(props);
        this.stateHandler = props.StateHandler
        // this.state = this.stateHandler.getStateObj()
    }


    getStateUpdateCallback() {
        return (newstate) => (this.setState(newstate))
    }


    componentDidMount() {
        this.stateHandler.init_listener(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.stateHandler.unmount()
    }

    render() {
        // let wordstring = ""
        const mystate = this.stateHandler.getStateObj()
        const recording = this.stateHandler.getRecordingState() == "enabled" ? "Recording..." : ""
        // const words= [...mystate.words].concat([mystate.activeWord]).map((word) => WordBlock(word))
        const words = [...mystate.words].map((word) => WordBlock(word))
        const activeWord = ActiveWordBlock(mystate.activeWord)
        return (
            <div className={`flex flex-col h-100 rounded mx-5 px-2 py-1 ring-2 ring-current max-h-[80vh] min-h-[80vh] ${this.stateHandler.calibrator.calibrationResults === null? "hidden":""}`} onMouseEnter={(e) => { this.stateHandler.setRecordingState("enabled") }} onMouseLeave={(e) => this.stateHandler.setRecordingState("disabled")}>
                <div className="flex items-end">
                    <div className="flex-none mx-auto font-bold text-4xl mt-2">Writing Area</div>
                    <div className='flex-none mx-2 text-l text-red-500 animate-pulse'>{recording}</div>
                    <div className="flex-1"></div>
                    <div className="flex-none mt-1 hidden">
                        <ExperimentTypeSelector StateHandler={this.stateHandler}/>
                    </div>
                    <div className="flex-none">
                        <OpenSubmitModal></OpenSubmitModal>
                    </div>
                    <div className="flex-none hidden">
                        <DumpFileButton dumpfn={() => this.stateHandler.dumpLogToFile(this.stateHandler.saveFiletoDesktop, "desktop")}></DumpFileButton>
                    </div>
                </div>
                <div className="container max-w-fit overflow-y-auto scroll-auto">
                    <div className=" mx-1 py-2 items-center">
                        {words}{activeWord}<Carot />
                    </div>
                </div>
            </div>
        );
    }
}