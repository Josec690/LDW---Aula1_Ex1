const Form = () => {
    return (
      <main>
          <h1>Formulário de Cadastro</h1>
          <form>
              <fieldset>
                  <legend>Quadro de informações pessoais.</legend>
              <label>
                  <span>Nome: </span>
                  <input type="text" id='nome' name='nome' placeholder='Nome Completo'/><br />
              </label>            
              <label>
                  <span>Estado Civíl: </span>
                  <input type="text" id='status' name='status' placeholder='Solteiro - Casado - Divorciado'/><br />
              </label>            
              <label>
                  <span>Mensagem: </span>
                  <textarea name="mensagem" id="mensagem" cols={30} rows={10} placeholder='Escreva qualquer mensagem'></textarea><br />
              </label>            
              <button type='submit'>Enviar</button>
              </fieldset>
          </form>
      </main>
    )
  }

export default Form