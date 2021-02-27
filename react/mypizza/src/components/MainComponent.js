import React , {useState, useEffect} from 'react'
import Filters from './FiltersComponent'
import CurrentPizzas from './PizzaComponent'
import Header from './NavbarComponent'
import { Row, Col, Alert, Spinner} from "reactstrap"


const Main = () => {

  const [pizzalist, setPizzalist ] = useState(null)
  const [isPending , setisPending ] = useState(null)
  const [error, setError] = useState(null)

  const [filters,setFilters] = useState({category:'',base:'',cheese_type:'',price: 600})

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/')
    .then(res => {
      if(!res.ok){
        throw Error('Could Not Fetch Pizza Data')
      }
      return res.json()
    })
    .then(data => {
      setPizzalist(data);
      setisPending(false);
      setError(null)
    })
    .catch(err => {
      setError(err.message)
      setisPending(false);
    })
  }, [])
  
  let filteredpizzas=''

  if(pizzalist) 
  {
  filteredpizzas = pizzalist

  if(filters.category)
  {
    filteredpizzas = filteredpizzas.filter(pizza => pizza.category === filters.category)
  }

  if(filters.base)
  {
    filteredpizzas = filteredpizzas.filter(pizza => pizza.base === filters.base)
  }

  if(filters.cheese_type)
  {
    filteredpizzas = filteredpizzas.filter(pizza => pizza.cheese_type === filters.cheese_type)
  }

  if(filters.price < 600)
  {
    filteredpizzas = filteredpizzas.filter(pizza => pizza.price <= filters.price)
  }
}


  return (<div>
          <Row> 
            <Col lg="12">
            <Header />
            </Col>
          </Row>
          <Row>
            <Col lg="5">
            <Filters filters={filters} setFilters={setFilters}/>
            </Col>
            <Col lg="7">
            {error && <Alert color="danger">{error}</Alert>}
            {isPending && <Spinner type="grow" color="danger"  style={{ width: '10rem', height: '10rem' }} />}
            {filteredpizzas.length ? <CurrentPizzas filteredpizzas={filteredpizzas}/> : !error ? <Alert color="warning">No Pizzas Available for selected Filters!!</Alert>: <div></div>}
            </Col>
          </Row>
          </div> );
  }
   
  export default Main;
