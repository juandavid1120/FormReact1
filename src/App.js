import React from 'react';
import { Formulario, Label, GrupoInput, Input, LeyendaError, IconValidacion, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamation, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <main>
      <Formulario onSubmit={this.onSubmit.bind(this)}>
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <GrupoInput>
            <Input id="nombre" type="text" placeholder="Nombre" value={this.state.name} onChange={this.onInputChange.bind(this)} />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>assfafdsgdsfsdggdfsgggdfsdg</LeyendaError>
        </div>
        <div>
          <Label htmlForm="apellido">Apellido</Label>
          <GrupoInput>
            <Input id="apellido" type="text" placeholder="Apellido" value={this.state.name} onChange={this.onInputChange.bind(this)} />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>assfafdsgdsfsdggdfsgggdfsdg</LeyendaError>
        </div>
        <div>
          <Label htmlForm="email">Email</Label>
          <GrupoInput>
            <Input id="email" type="text" placeholder="Correo electrónico" value={this.state.name} onChange={this.onInputChange.bind(this)} />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>assfafdsgdsfsdggdfsgggdfsdg</LeyendaError>
        </div>
        <div>
          <Label htmlForm="tel">Número de teléfono</Label>
          <GrupoInput>
            <Input id="tel" type="text" placeholder="Número de teléfono" value={this.state.name} onChange={this.onInputChange.bind(this)} />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>assfafdsgdsfsdggdfsgggdfsdg</LeyendaError>
        </div>
        <div>
          <Label htmlForm="cuidad">Ciudad</Label>
          <GrupoInput>
            <Input id="cuidad" type="text" placeholder="Ciudad" value={this.state.name} onChange={this.onInputChange.bind(this)} />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>assfafdsgdsfsdggdfsgggdfsdg</LeyendaError>
        </div>
        <div>
          <Label htmlForm="pais">País</Label>
          <GrupoInput>
            <Input id="pais" type="text" placeholder="País" value={this.state.name} onChange={this.onInputChange.bind(this)}/>
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>assfafdsgdsfsdggdfsgggdfsdg</LeyendaError>
        </div>

        <ContenedorTerminos>
          <Label>
            <input id="terminos" name="Terminos" type="checkbox" />
            Acepto Terminos y Condiciones
          </Label>
        </ContenedorTerminos>
        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
         </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito> Formulario enviado exitosamente!</MensajeExito>
        </ContenedorBotonCentrado>
      </Formulario>
    </main>

    

  );

  onInputChange (e); {
    this.setState({ name: e.target.value });
  }
  
  onSubmit (e); {
    fetch (`localhost:3000/api/categories/create/${this.state.name}`, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) { // exito
        alert('Categoría creada');
      }
    });
  }
}



export default App;
