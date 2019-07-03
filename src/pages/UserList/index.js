import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
// import { Container } from './styles';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  console.log(users);

  return (
    <>
      <Link to="/users/create">Criar novo usuário</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Rua</th>
            <th>Nº</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.adress.street}</td>
              <td>{user.adress.number}</td>
              <td>
                <Link to={`/users/edit/${user._id}`}>Editar </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
