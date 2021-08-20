import React, { Fragment } from 'react';

const ToDoList = () => (
    <Fragment>
        <h1 className="m-3">Liste des tâches</h1>
        <ul className="list-group m-3">
            <li className="list-group-item d-flex align-items-center">
                Ranger la vaisselle
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">
                Répondre appel d'offres
                <button className="btn btn-sm ms-auto btn-outline-success text-center">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">
                Signer contrat
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">
                Ranger le salon
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
        </ul>
    </Fragment>
);

export default ToDoList;