import { Header } from 'components/Header'
import { Button } from 'components/Button'
import useCounter from 'hooks/use-counter'

function App() {
  const { count, increment, decrement } = useCounter()

  return (
    <div className="App">
      <Header title="Counter" />
      <div className="flex justify-center">
        <Button onClick={decrement}>-</Button>
        <p className="mx-2">{count}</p>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  )
}

export default App
