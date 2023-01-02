

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default ({price}) =>{
    return <>
        <h1>Conversor</h1>
        <div>
        <input type="number" class="custom-input" min="0"/>
        <h1>BTC</h1>
        <input type="number" class="custom-input" min="0"/>
        <select class="custom-select">
            <option>1</option>
            <option>1</option>
            <option>1</option>
        </select>
        </div>
    </>
}