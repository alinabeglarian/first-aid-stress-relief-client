import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { clearWriting } from '../actions/writing'
import { connect } from 'react-redux'

const List = styled.ul`
  width: 100%;
  text-align: left;
  margin: 0;
  height: 40px;
  padding: 0;
  list-style: none;
  background: hsla(14, 100%, 53%, 0.6);
` 

const StyledLink = styled(Link)`
  text-decoration: none;
  color: papayawhip;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: bold;
`

const ListItem = styled.li`
  margin-left: 10px;
  display: inline-block;
  padding: 10px;
  text-transform: uppercase;
  &:hover {
    transform: scale(1.2)
  }
`

 export class NavBar extends Component {
  handleClick = () => {
    this.props.clearWriting()
  }


   render() {
     return (
        <List>
          <ListItem>
            <StyledLink onClick={this.handleClick} to={'/'}>Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={'/about'}>About</StyledLink>
          </ListItem>
        </List>
     )
   }
 }

const mapStateToProps = state => ({
  writing: state.writing,
})

export default connect(mapStateToProps, { clearWriting })(NavBar)


 

