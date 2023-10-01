import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createNewService } from "../../service";

export function CreateNew() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            setError("Debe iniciar sesión para crear una noticia.");
            return;
        }

        try {
            // Llamada al servicio para crear la nueva noticia
            await createNewService({
                formDataNew,
                token
            });

            // Navegar a la página de historias después de crear la noticia
            navigate("/historia");
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <section className="createNew">
            <div className="form-container-createNew">
                <h1 className="h1-title">Crea tu noticia</h1>
                <form className="form-createNew" onSubmit={handleSubmit}>
                    <div className="title">
                        <label htmlFor="title">Título:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />
                    </div>
                    <div className="introduction">
                        <label htmlFor="introduction">Introducción:</label>
                        <textarea
                            id="introduction"
                            value={introduction}
                            onChange={(event) => setIntroduction(event.target.value)}
                            required
                        />
                    </div>
                    <div className="text">
                        <label htmlFor="text">Texto:</label>
                        <textarea
                            id="text"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            required
                        />
                    </div>
                    <div className="button-form-createNew">
                        <button type="submit">Crear noticia</button>
                    </div>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </section>
    );
}