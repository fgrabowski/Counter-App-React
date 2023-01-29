import './Counter.css'

export default function Counter() {

    function addCounterFunction() {
        console.log('Add button clicked')
    }

    return (
        <div className="Counter">
            <span className="count">0</span>
            <div>
                <button className="counterButton" 
                    onClick={addCounterFunction}
                >+1</button>
            </div>
        </div>
    )
}