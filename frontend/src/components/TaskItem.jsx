import { useParams } from "react-router-dom"

export default function TaskItem({ tasks }) {
    const { id } = useParams();
    const task = tasks.find(t => t.id === id);

    const getFechaCreacion = () => {
        const date = new Date(task.createdAt);
        return date.toLocaleDateString();
    }

    if (!task) return <div>Tarea no encontrada</div>;

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Detalle de Tarea</h4>
                <hr />
                <p>Titulo: {task.title}</p>
                <p>Descripción: {task.description}</p>
                <p>Estado: {task.completed ? "Completada" : "Pendiente"}</p>
                <p>Fecha de creación: {getFechaCreacion()}</p>
                <button>Editar</button>
            </div>
        </div>
    )
}
