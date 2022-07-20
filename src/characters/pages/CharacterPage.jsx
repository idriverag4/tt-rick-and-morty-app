import { useQuery } from '@apollo/client';
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { GET_RESULT_ID } from '../../apollo/querys/characterByIdQuery';

export const CharacterPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { loading, error, data = {} } = useQuery(GET_RESULT_ID(id));

    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;
    if (data.character == null) return navigate(-1);

    const onNavigateBack = () => navigate(-1);

    const { name, gender, status, species, image } = data.character;
    const { dimension } = data.location;

    return (
        <div className="row mt-5">

            <div className="col-4">
                <img
                    src={image}
                    alt={name}
                    className="img-thumbnail animate__animated animate__flip" 
                />
            </div>

            <div className="col-8">
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Gender:</b> {gender} </li>
                    <li className="list-group-item"> <b>Status:</b> {status} </li>
                    <li className="list-group-item"> <b>Species:</b> {species} </li>
                </ul>

                <h5 className="mt-3">Dimension</h5>
                <p>{dimension}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >Regresar
                </button>

            </div>
        </div>
    )
}

