import logofb from "../assets/react.svg";
import logoig from "../assets/react.svg";
import logoli from "../assets/react.svg";
import logowa from "../assets/react.svg";

export function Footer() {
  return (
    <footer className="flex flex-col text-xl">
      <div className="bg-blue-600 text-white p-4">
        <section>
          <article className="mb-6">
            <h2 className="text-2xl font-semibold border-b-4 mb-3">ENDEREÇO</h2>
            <p>Rua Fernando da Silva</p>
            <p>Nogueira Pinto, 187</p>
            <p>4585-645 Recarei-Paredes</p>
          </article>

          <article className="mb-6">
            <h2 className="text-2xl font-semibold border-b-4 mb-3">TELEFONE</h2>
            <a href="tel:+351224157710">+351 22 415 7710</a>

            <p className="text-sm">(Chamada para rede fixa nacional)</p>
          </article>

          <article className="mb-6">
            <h2 className="text-2xl font-semibold border-b-4 mb-3">MAIL</h2>
            <p>
              <a href="mailto:geral@spintos.pt">geral@spintos.pt</a>
            </p>
          </article>
        </section>

        <section className="flex justify-end gap-4">
          <a href="">
            <figure className="border rounded-full p-2">
              <img src={logofb} alt="Logo Facebook" className="h-12 w-12" />
            </figure>
          </a>

          <a href="">
            <figure className="border rounded-full p-2">
              <img src={logoig} alt="Logo Instagram" className="h-12 w-12" />
            </figure>
          </a>

          <a href="">
            <figure className="border rounded-full p-2">
              <img src={logoli} alt="Logo Linkedin" className="h-12 w-12" />
            </figure>
          </a>

          <a href="">
            <figure className="border rounded-full p-2">
              <img src={logowa} alt="Logo Whatsapp" className="h-12 w-12" />
            </figure>
          </a>
        </section>

        <section className="flex justify-between pt-10 text-base">
          <p>
            <a href="">Política de privacidade</a>
          </p>
          <p>
            <a href="">Resolução de conflitos</a>
          </p>
          <p>
            <a href="">Livro de Reclamações online</a>
          </p>
        </section>
      </div>

      <div>
        <p className="flex justify-center text-2xl font-bold py-3">Grupo Spintos 2023© Desenvolvido por Forte Solutions</p>
      </div>
    </footer>
  );
}
