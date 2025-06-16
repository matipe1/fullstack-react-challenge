import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export default function TaskForm({ tasks, onSubmit, handleViewAllTasks }) { // Dependiendo la URL onSubmit va a ser handleAddTask o handleUpdateTask
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { id } = useParams();
  const task = tasks.find(t => t.id === id);

  useEffect(() => {
    if (task) {
      reset(task);
    }
  }, [task, reset]);

  function onFormSubmit(data) {
    if (id, task) {
      // console.log(`si esta actualizando le pasa id: ${id}, task: ${data.title}`)
      onSubmit(id, data) // handleUpdateTask
    } else {
      // console.log(`si esta creando le pasa task: ${data.title}`)
      onSubmit(data) // handleAddTask
    }
  }

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <div className="card shadow-lg rounded w-100" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">
            {task ? '✏️ Editar Tarea' : '📝 Nueva Tarea'}
          </h4>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* ID */}
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input
                type="text"
                id="id"
                className={'form-control ' + (errors.id ? 'is-invalid' : '')}
                {...register('id', { required: "Campo ID es requerido" })}
              />
              {errors.id && (
                <div className="invalid-feedback">{errors.id.message}</div>
              )}
            </div>

            {/* Título */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input
                type="text"
                id="title"
                className={'form-control ' + (errors.title ? 'is-invalid' : '')}
                {...register('title', { required: "Campo título es requerido" })}
              />
              {errors.title && (
                <div className="invalid-feedback">{errors.title.message}</div>
              )}
            </div>

            {/* Descripción */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <input
                type="text"
                id="description"
                className="form-control"
                {...register('description')}
              />
            </div>

            {/* Estado */}
            <div className="mb-4">
              <label htmlFor="completed" className="form-label">
                Estado
              </label>
              <select
                id="completed"
                className="form-select"
                {...register('completed', { required: true })}
              >
                <option value="false">Pendiente</option>
                <option value="true">Completada</option>
              </select>
            </div>

            {/* Botón */}
            <div className="text-center">
              <button className="btn btn-primary w-100" type="submit">
                {task ? 'Actualizar Tarea' : 'Agregar Tarea'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => handleViewAllTasks()}
        >
          Volver atrás
        </button>
      </div>
    </div>
  )
}
