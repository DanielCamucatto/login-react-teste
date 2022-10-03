import "./form.scss";
import { HiOutlineMail } from 'react-icons/hi'; 
import { GiPadlock } from "react-icons/gi";
import Button from "../button/Button";

function Form() {
    return(
      <div className= 'form-container' >
         <h2 className= 'form-container__title'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
       <p className= "form-container__title-text">Morbi auctor massa metus. Vestibulum laoreet at nisi nec tristique. Aliquam commodo vel quam id molestie. Proin vel sodales risus</p>
       <section>
        <form className= "form-container__items" >
              <div className="form-group">
                <span className="form-container__items-icone"><HiOutlineMail/></span>
                <input type="email" placeholder= "" autoComplete="off" required />
                <span>Email</span>   
              </div>
              <div className="form-group">
              <span className="form-container__items-icone"><GiPadlock/></span>
                <input type="password" placeholder="" autoComplete="off" required />
                <span>Senha</span>
              </div>
          </form>
          <Button><a>login</a></Button>
       </section>
       <section className="form-container__items-text">
        <p>
          Você ainda não tem um conta? 
        </p>
        <a href="">Inscreva-se</a> <br />
        <a href="">Esqueceu sua senha?</a>
       </section>
       
        
      </div>
    )
}
export default Form;