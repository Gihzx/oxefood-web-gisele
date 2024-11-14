import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
function FormProduto(){
  
      
    return(

        <>
         <div>
         <MenuSistema tela={'cliente'} />
<div style={{marginTop: '3%'}}>

    <Container textAlign='justified' >

        <h2> <span style={{color: 'darkgray'}}>Produto&nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

        <Divider />

        <div style={{marginTop: '4%'}}>

            <Form>

                <Form.Group widths='equal'>

                    <Form.Input
                        required
                        fluid
                        label='Titulo'
                        maxLength="100"
                    />

                    <Form.Input
                        required
                        fluid
                        width={10}
                        label='Código do produto'>
                        <InputMask
                            required
                            mask="999.999.999-99"

                        /> 
                    </Form.Input>

                </Form.Group>
              
                <Form.Group widths='equal'>

                <Form.Input 
                label="Descrição">
                <TextArea placeholder='Tell us more'/>
                </Form.Input>

                </Form.Group>

            <Form.Group>

            <Form.Input
                        required
                        fluid
                        width={10}
                        label="Valor Unitário">
                        <InputMask
                            required
                            mask="999.999.999-99"

                        /> 
                    </Form.Input>
                    <Form.Input
                        required
                        fluid
                        width={10}
                        label='Tempo de estrega Mínima em minutos'
                        placeholder='30'>
                    </Form.Input>
                    <Form.Input
                        required
                        placeholder="40"
                        fluid
                        width={10}
                        label='Tempo de estrega Máxima em minutos'>
                    </Form.Input>
                </Form.Group>
            </Form>
            
            <div style={{marginTop: '4%'}}>

                <Button
                    type="button"
                    inverted
                    circular
                    icon
                    labelPosition='left'
                    color='orange'
                >
                    <Icon name='reply' />
                    Voltar
                </Button>
                    
                <Button
                    inverted
                    circular
                    icon
                    labelPosition='left'
                    color='blue'
                    floated='right'
                >
                    <Icon name='save' />
                    Salvar
                </Button>

            </div>

        </div>
        
    </Container>
</div>
</div>
        </>
    )
}
export default FormProduto