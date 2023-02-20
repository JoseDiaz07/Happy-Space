import React from 'react'

export const NextBtn = ({increment}) => {
    return (
        <div className="w-fit mx-auto flex gap-x-5">
            <button className="btn" onClick={() => increment()}>
                Next
            </button>
        </div>
    )
}
