import React, { useState } from "react";

export function InstructionsButton(props) {
    const checked = props.miscState.showInstructions?true:false
    const onChange = (e)=>{
        const newState = {showInstructions:!props.miscState.showInstructions,}
        const merged = {...props.miscState,...newState}
        props.setMiscState(merged)
    }
    return (
        <div className="form-control hidden">
            <label className="label cursor-pointer">
                <span className="label-text mr-2">Show Instructions</span>
                <input type="checkbox" className="toggle toggle-success" onChange={onChange} checked={checked}/>
            </label>
        </div>
    )
}

export default function Instructions(props) {
    const hidden = props.miscState.showInstructions?"":"hidden"
    return (
        <div className={`card w-96 bg-neutral text-neutral-content ${"hidden"}`}>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    )
}