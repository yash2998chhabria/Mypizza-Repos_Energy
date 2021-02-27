import React, {useState} from 'react'
import { Button, ButtonGroup, Card, CardHeader, Row, Col, Label} from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  


const Filters = (props) => {

    const classes = useStyles();

    const handleChange = (e) => {
        if(e.target.ariaValueNow)
        {
            props.setFilters({...props.filters, price:e.target.ariaValueNow })
        }
        else 
        {
            props.setFilters({...props.filters, [e.target.name]:e.target.value})
        }
        
    }

    return ( 

        <div  style={{ paddingTop: '50px' }}>
            <Row>
            {/* <Col md='10' style={{position: 'absolute', left: '50%',transform: 'translate(-50%)' }}> */}
            <Col sm={{ size: 10, offset: 1 }}>
            
            <Card>
            <CardHeader>Filters</CardHeader>

            <Label style={{ margin:'10px' }}>Category: {props.filters.category.toUpperCase()}{!props.filters.category && <span>ALL</span>}</Label>
            
            <ButtonGroup style={{  margin:'10px' }}>
                <Button name='category' onClick={handleChange} color="success" value='Veg'>Veg</Button>
                <Button name='category' onClick={handleChange} color="danger" value='Nonveg'>Non Veg</Button>
                <Button name='category' onClick={handleChange} color="secondary" value=''>ALL</Button>
            </ButtonGroup>

            <Label style={{ margin:'10px' }}>Base:</Label>
            <select 
            type='text'
            name='base'
            id='base_type'
            placeholder='Choose Base type'
            onChange={handleChange}
            style={{ margin:'10px' }}
            >
            <option value=""></option>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Regular Base">Regular Base</option>
            <option value="Flat Bread">Flat bread</option>
            <option value="Multigrain">Mutigrain</option>
            </select>

            <Label style={{ margin:'10px' }}>Cheese options:</Label>
            <select 
            type='text'
            name='cheese_type'
            id='cheese_type'
            placeholder='Choose Cheese type'
            onChange={handleChange}
            style={{ margin:'10px' }}
            >
            <option value=""></option>
            <option value="Cheese Burst">Cheese Burst</option>
            <option value="Cheese Topping">Cheese Topping</option>
            <option value="No Cheese">No Cheese</option>
            </select>


            <div className={classes.root} style={{ margin:'10px' }}>
                <Typography id="discrete-slider" gutterBottom>
                    Price Range: [100 - {props.filters.price}]
                </Typography>
                <Slider
                    defaultValue={600}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={100}
                    max={600}
                    name='price'
                    onChange={handleChange}
                />
                </div>
            
            </Card>
            </Col>
            </Row>
        </div>
     );
}
 
export default Filters;