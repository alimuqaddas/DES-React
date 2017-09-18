import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Table,Icon,Label } from 'semantic-ui-react';
import MyPdfViewer from '../pdf-rendering/PDF';

class AgentPage extends React.Component{
    render(){
        return(
            <div>
                <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                    <Image
                        size='mini'
                        src='/logo.png'
                        style={{ marginRight: '1.5em' }}
                    />
                    AGENT
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>

                    <Dropdown item simple text='Dropdown'>
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Submenu</span>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Container>
                </Menu>

                <Container text style={{ marginTop: '7em' }}>
                    <MyPdfViewer/>
                </Container>
            </div>
        )
    }
}

export default AgentPage;