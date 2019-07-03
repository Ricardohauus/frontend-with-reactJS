import React, { useState, useEffect } from "react";
import { Form, Input, Scope } from "unform";
import api from "../../services/api";
import * as Yup from "yup";
// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required("Nome Obrigatório")
});
export default function UserForm({ history, match }) {
  const [data, setData] = useState({});

  async function handleSubmit(data) {
    await api.postOrPut("/users", match.params.id, data);
    history.push("/users");
  }

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/user/${id}`);
      setData(response.data);
    }

    if (match.params.id) {
      loadData();
    }
  }, [match.params, match.params.id]);

  return (
    <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
      <Input name="name" label="Nome" />
      <Input name="email" label="E-mail" />
      <Scope path="adress">
        <Input name="street" label="Rua" />
        <Input name="number" label="Número" />
      </Scope>
      <button type="submit">Enviar</button>
    </Form>
  );
}
